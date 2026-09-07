import { useCallback, useEffect, useRef, useState } from 'react';
import { AccessibilityInfo, Alert, Animated, Pressable, StyleSheet, Text, Vibration, View } from 'react-native';
import * as Haptics from 'expo-haptics';
import { useTranslation } from 'react-i18next';

import { duaSegmentCounterId, loadDuaSegmentsProgress, resetDuaSegmentsProgress, useDuaCounter } from '../../hooks/useDuaCounter';
import type { DuaArabicFontSize, DuaSegment } from '../../types/dua';
import { minTouchTarget, radius, spacing, typography, type ThemeColors } from '../../lib/theme';
import { useThemedStyles } from '../../lib/useTheme';
import DuaArabicText from './DuaArabicText';
import SurfaceCard from '../SurfaceCard';

export interface DuaZikrProgress {
  count: number;
  target: number;
  segmentIndex: number;
  segmentCount: number;
}

interface Props {
  duaId: string;
  segments: DuaSegment[];
  resolvedLanguage: 'en' | 'dv';
  showTransliteration: boolean;
  arabicFontSize: DuaArabicFontSize;
  /** Reports the active segment's live count/target so the reading screen's header can show a small counter badge instead of a big on-card one - see [duaId].tsx. */
  onProgressChange?: (progress: DuaZikrProgress) => void;
}

// Auto-advance pause after a phrase's target is reached - long enough to
// register that the last tap counted before the card changes, short
// enough not to feel like a delay.
const ADVANCE_DELAY_MS = 550;

// The same completion-moment feedback as the Qibla compass's alignment
// buzz (lib/useQiblaAlignment.ts) - a plain-number Vibration.vibrate()
// call, not expo-haptics, because that's what actually fires the classic
// system buzz on iOS regardless of the device's System Haptics setting.
// Reserved for finishing the *whole* sequence; an intermediate phrase
// completing gets a lighter notification haptic instead (see
// handleTargetReached below).
const COMPLETE_VIBRATE_DURATION_MS = 400;

function fireCompleteVibration() {
  try {
    Vibration.vibrate(COMPLETE_VIBRATE_DURATION_MS);
  } catch {
    // best-effort feedback only - never worth crashing the counter over
  }
}

/**
 * One-phrase-per-card reading flow for a multi-phrase dhikr (e.g. the
 * post-prayer Subhanallah/Alhamdulillah/Allahu Akbar/tahlil sequence):
 * shows the active segment in the same card used for a plain (non-zikr)
 * dua - tapping the card counts a repetition, same gesture as tapping a
 * plain dua's card to move on - and auto-advances to the next segment
 * once the current one's target is reached; the last segment's
 * completion fires the Qibla-style vibration instead. The live
 * count/target itself is not shown on the card - it's reported via
 * onProgressChange for the reading screen's header badge, keeping this
 * card visually identical to a plain dua's. Resumes at the first
 * not-yet-complete segment on mount rather than always restarting at the
 * first. Also used for a single-phrase zikr (segments.length === 1),
 * where there's simply nothing to advance to.
 */
export default function DuaZikrFlow({
  duaId,
  segments,
  resolvedLanguage,
  showTransliteration,
  arabicFontSize,
  onProgressChange,
}: Props) {
  const { t } = useTranslation();
  const styles = useThemedStyles(createStyles);
  const [activeIndex, setActiveIndex] = useState(0);
  const [resumeChecked, setResumeChecked] = useState(false);
  const fade = useRef(new Animated.Value(1)).current;
  const scale = useRef(new Animated.Value(1)).current;
  const advanceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const activeSegment = segments[activeIndex];
  const counter = useDuaCounter(duaSegmentCounterId(duaId, activeIndex), activeSegment.repetitions);

  // Resume at the first incomplete phrase (e.g. reopening mid-way through
  // the sequence), rather than always restarting at segment 0.
  useEffect(() => {
    let cancelled = false;
    (async () => {
      const progress = await loadDuaSegmentsProgress(duaId, segments.length);
      if (cancelled) return;
      const firstIncomplete = progress.findIndex((count, index) => count < segments[index].repetitions);
      setActiveIndex(firstIncomplete === -1 ? segments.length - 1 : firstIncomplete);
      setResumeChecked(true);
    })();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [duaId]);

  useEffect(() => {
    return () => {
      if (advanceTimer.current) clearTimeout(advanceTimer.current);
    };
  }, []);

  useEffect(() => {
    if (!resumeChecked) return;
    onProgressChange?.({
      count: counter.count,
      target: counter.target ?? activeSegment.repetitions,
      segmentIndex: activeIndex,
      segmentCount: segments.length,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resumeChecked, counter.count, counter.target, activeIndex, segments.length]);

  const runFadeTransition = useCallback(
    async (advance: () => void) => {
      const reduceMotion = await AccessibilityInfo.isReduceMotionEnabled();
      if (reduceMotion) {
        advance();
        return;
      }
      Animated.timing(fade, { toValue: 0, duration: 150, useNativeDriver: true }).start(() => {
        advance();
        Animated.timing(fade, { toValue: 1, duration: 200, useNativeDriver: true }).start();
      });
    },
    [fade]
  );

  const handleTargetReached = useCallback(() => {
    const isLastSegment = activeIndex === segments.length - 1;
    if (isLastSegment) {
      fireCompleteVibration();
      return;
    }
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    advanceTimer.current = setTimeout(() => {
      runFadeTransition(() => setActiveIndex((index) => Math.min(index + 1, segments.length - 1)));
    }, ADVANCE_DELAY_MS);
  }, [activeIndex, segments.length, runFadeTransition]);

  const handleJumpTo = useCallback(
    (index: number) => {
      if (index === activeIndex) return;
      if (advanceTimer.current) clearTimeout(advanceTimer.current);
      runFadeTransition(() => setActiveIndex(index));
    },
    [activeIndex, runFadeTransition]
  );

  const handleReset = useCallback(() => {
    const hasProgress = activeIndex > 0 || counter.count > 0;
    if (!hasProgress) return;
    Alert.alert(t('duas.counterResetTitle'), t('duas.counterResetMessage'), [
      { text: t('common.cancel'), style: 'cancel' },
      {
        text: t('duas.counterResetConfirm'),
        style: 'destructive',
        onPress: async () => {
          if (advanceTimer.current) clearTimeout(advanceTimer.current);
          await resetDuaSegmentsProgress(duaId, segments.length);
          counter.reset();
          setActiveIndex(0);
        },
      },
    ]);
  }, [activeIndex, counter, duaId, segments.length, t]);

  const handleCardPress = useCallback(async () => {
    if (counter.isComplete) return;
    const willComplete = counter.target !== undefined && counter.count + 1 >= counter.target;
    counter.increment();
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);

    const reduceMotion = await AccessibilityInfo.isReduceMotionEnabled();
    if (!reduceMotion) {
      Animated.sequence([
        Animated.timing(scale, { toValue: 0.98, duration: 70, useNativeDriver: true }),
        Animated.timing(scale, { toValue: 1, duration: 110, useNativeDriver: true }),
      ]).start();
    }

    if (willComplete) {
      handleTargetReached();
    }
  }, [counter, handleTargetReached, scale]);

  if (!resumeChecked) return null;

  return (
    <View style={styles.container}>
      {segments.length > 1 ? (
        <View style={styles.dotsRow} accessibilityRole="tablist">
          {segments.map((segment, index) => {
            const isDone = index < activeIndex || (index === activeIndex && counter.isComplete);
            const isActive = index === activeIndex;
            return (
              <Pressable
                key={index}
                onPress={() => handleJumpTo(index)}
                hitSlop={8}
                style={styles.dotTouchArea}
                accessibilityRole="tab"
                accessibilityState={{ selected: isActive }}
                accessibilityLabel={t('duas.phraseOf', { index: index + 1, count: segments.length })}
              >
                <View style={[styles.dot, isActive && styles.dotActive, isDone && !isActive && styles.dotDone]} />
              </Pressable>
            );
          })}
        </View>
      ) : null}

      <Animated.View style={{ opacity: fade, transform: [{ scale }] }}>
        <SurfaceCard
          elevated
          onPress={handleCardPress}
          style={styles.card}
          accessibilityHint={counter.isComplete ? undefined : t('duas.counterAccessibilityHint')}
        >
          {activeSegment.repetitions > 1 ? (
            <View style={styles.repeatBadge}>
              <Text style={styles.repeatBadgeText}>×{activeSegment.repetitions}</Text>
            </View>
          ) : null}

          <DuaArabicText text={activeSegment.arabic} fontSize={arabicFontSize} align="center" />
          {showTransliteration ? <Text style={styles.transliteration}>{activeSegment.transliteration}</Text> : null}
          <Text style={styles.translation}>{activeSegment.translation[resolvedLanguage]}</Text>

          {counter.isComplete ? (
            <Text style={styles.completeLabel} accessibilityLiveRegion="polite">
              {t('duas.counterComplete')}
            </Text>
          ) : null}
        </SurfaceCard>
      </Animated.View>

      <Pressable
        onPress={handleReset}
        disabled={activeIndex === 0 && counter.count === 0}
        style={({ pressed }) => [
          styles.resetButton,
          (pressed || (activeIndex === 0 && counter.count === 0)) && styles.resetButtonDisabled,
        ]}
        accessibilityRole="button"
        accessibilityLabel={t('duas.counterResetLabel')}
        hitSlop={8}
      >
        <Text style={styles.resetText}>{t('duas.counterResetLabel')}</Text>
      </Pressable>
    </View>
  );
}

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: { alignItems: 'center' },
    dotsRow: {
      flexDirection: 'row',
      gap: spacing.xs,
      marginBottom: spacing.sm,
    },
    dotTouchArea: {
      width: minTouchTarget,
      height: minTouchTarget / 2,
      alignItems: 'center',
      justifyContent: 'center',
    },
    dot: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: colors.surfaceElevated,
      borderWidth: 1,
      borderColor: colors.border,
    },
    dotActive: {
      width: 20,
      backgroundColor: colors.primary,
      borderColor: colors.primary,
    },
    dotDone: {
      backgroundColor: colors.success,
      borderColor: colors.success,
    },
    card: {
      width: '100%',
      paddingVertical: spacing.xl,
      paddingHorizontal: spacing.lg,
    },
    repeatBadge: {
      position: 'absolute',
      top: spacing.sm,
      right: spacing.sm,
      paddingHorizontal: spacing.sm,
      paddingVertical: 2,
      borderRadius: radius.pill,
      backgroundColor: colors.surface,
      borderWidth: 1,
      borderColor: colors.border,
    },
    repeatBadgeText: {
      fontSize: typography.size.xs,
      fontWeight: typography.weight.bold,
      color: colors.textSecondary,
      fontVariant: ['tabular-nums'],
    },
    transliteration: {
      marginTop: spacing.md,
      textAlign: 'center',
      fontSize: typography.size.md,
      fontStyle: 'italic',
      color: colors.textSecondary,
      lineHeight: typography.size.md * 1.5,
    },
    translation: {
      marginTop: spacing.xs,
      textAlign: 'center',
      fontSize: typography.size.base,
      color: colors.textPrimary,
      lineHeight: typography.size.base * 1.5,
    },
    completeLabel: {
      marginTop: spacing.md,
      textAlign: 'center',
      color: colors.success,
      fontWeight: typography.weight.bold,
      fontSize: typography.size.md,
    },
    resetButton: {
      marginTop: spacing.md,
      minHeight: minTouchTarget,
      minWidth: minTouchTarget,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: spacing.md,
      borderRadius: radius.pill,
      borderWidth: 1,
      borderColor: colors.border,
    },
    resetButtonDisabled: {
      opacity: 0.5,
    },
    resetText: {
      color: colors.textSecondary,
      fontWeight: typography.weight.semibold,
      fontSize: typography.size.sm,
    },
  });
