import { useCallback, useEffect, useRef, useState } from 'react';
import { AccessibilityInfo, Alert, Animated, Pressable, StyleSheet, Text, Vibration, View } from 'react-native';
import * as Haptics from 'expo-haptics';
import { useTranslation } from 'react-i18next';

import { duaSegmentCounterId, loadDuaSegmentsProgress, resetDuaSegmentsProgress, useDuaCounter } from '../../hooks/useDuaCounter';
import type { DuaArabicFontSize, DuaSegment } from '../../types/dua';
import { minTouchTarget, radius, spacing, typography, type ThemeColors } from '../../lib/theme';
import { useTheme, useThemedStyles } from '../../lib/useTheme';
import DuaArabicText from './DuaArabicText';
import DuaCounter from './DuaCounter';

interface Props {
  duaId: string;
  duaTitle: string;
  segments: DuaSegment[];
  resolvedLanguage: 'en' | 'dv';
  showTransliteration: boolean;
  arabicFontSize: DuaArabicFontSize;
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
 * shows the active segment full-size with its own tap-to-count ring, and
 * auto-advances to the next segment once the current one's target is
 * reached - the last segment's completion fires the Qibla-style
 * vibration instead. Resumes at the first not-yet-complete segment on
 * mount rather than always restarting at the first. Also used for a
 * single-phrase zikr (segments.length === 1), where there's simply
 * nothing to advance to.
 */
export default function DuaZikrFlow({
  duaId,
  duaTitle,
  segments,
  resolvedLanguage,
  showTransliteration,
  arabicFontSize,
}: Props) {
  const { t } = useTranslation();
  const styles = useThemedStyles(createStyles);
  const [activeIndex, setActiveIndex] = useState(0);
  const [resumeChecked, setResumeChecked] = useState(false);
  const fade = useRef(new Animated.Value(1)).current;
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

      <Animated.View style={{ opacity: fade }}>
        <Text style={styles.phraseLabel}>
          {segments.length > 1 ? t('duas.phraseOf', { index: activeIndex + 1, count: segments.length }) : null}
        </Text>
        <DuaArabicText text={activeSegment.arabic} fontSize={arabicFontSize} align="center" style={styles.arabicText} />
        {showTransliteration ? <Text style={styles.transliteration}>{activeSegment.transliteration}</Text> : null}
        <Text style={styles.translation}>{activeSegment.translation[resolvedLanguage]}</Text>

        <DuaCounter
          count={counter.count}
          target={counter.target}
          onIncrement={counter.increment}
          onReset={counter.reset}
          duaTitle={duaTitle}
          onTargetReached={handleTargetReached}
          hideReset
        />
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
    container: { alignItems: 'center', paddingTop: spacing.sm },
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
    phraseLabel: {
      textAlign: 'center',
      fontSize: typography.size.xs,
      fontWeight: typography.weight.bold,
      color: colors.textMuted,
      letterSpacing: 0.3,
      marginBottom: spacing.xs,
      minHeight: typography.size.xs,
    },
    arabicText: {
      paddingHorizontal: spacing.md,
    },
    transliteration: {
      marginTop: spacing.md,
      textAlign: 'center',
      fontSize: typography.size.md,
      fontStyle: 'italic',
      color: colors.textSecondary,
      lineHeight: typography.size.md * 1.5,
      paddingHorizontal: spacing.lg,
    },
    translation: {
      marginTop: spacing.xs,
      textAlign: 'center',
      fontSize: typography.size.base,
      color: colors.textPrimary,
      lineHeight: typography.size.base * 1.5,
      paddingHorizontal: spacing.lg,
    },
    resetButton: {
      marginTop: spacing.xs,
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
