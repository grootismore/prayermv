import { useCallback, useRef } from 'react';
import { AccessibilityInfo, Alert, Animated, Pressable, StyleSheet, Text, Vibration, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import * as Haptics from 'expo-haptics';
import { useTranslation } from 'react-i18next';

import { minTouchTarget, radius, spacing, typography, type ThemeColors } from '../../lib/theme';
import { useTheme, useThemedStyles } from '../../lib/useTheme';

interface Props {
  count: number;
  target?: number;
  onIncrement: () => void;
  onReset: () => void;
  /** The dua's title, used only to build the accessibility label/hint - never rendered visibly here. */
  duaTitle: string;
  /** 'ring' (default): the large standalone counter shown on its own. 'bar': a compact horizontal counter meant to sit in a screen header. */
  variant?: 'ring' | 'bar';
}

const RING_SIZE = 176;
const RING_STROKE = 10;
const RING_RADIUS = (RING_SIZE - RING_STROKE) / 2;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

// The same completion-moment feedback as the Qibla compass's alignment
// buzz (lib/useQiblaAlignment.ts) - a plain-number Vibration.vibrate()
// call, not expo-haptics, because that's what actually fires the classic
// system buzz on iOS regardless of the device's System Haptics setting.
const COMPLETE_VIBRATE_DURATION_MS = 400;

function fireCompleteVibration() {
  try {
    Vibration.vibrate(COMPLETE_VIBRATE_DURATION_MS);
  } catch {
    // best-effort feedback only - never worth crashing the counter over
  }
}

/**
 * The interactive zikr repeat counter. Two layouts sharing the same
 * increment/reset/haptics logic: a large ring for standalone use, and a
 * compact horizontal bar meant to sit fixed in the reading screen's header
 * so it never scrolls out of reach while counting. A light haptic fires on
 * every tap; reaching the target fires the compass's own vibration instead
 * of a generic success haptic. Skips the tap animation when the OS
 * reduce-motion setting is on; the haptics/vibration stay either way since
 * they're feedback, not decoration.
 */
export default function DuaCounter({ count, target, onIncrement, onReset, duaTitle, variant = 'ring' }: Props) {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const styles = useThemedStyles(createStyles);
  const scale = useRef(new Animated.Value(1)).current;
  const isComplete = target !== undefined && count >= target;

  const handlePress = useCallback(async () => {
    if (isComplete) return;
    const willComplete = target !== undefined && count + 1 >= target;
    onIncrement();

    if (willComplete) {
      fireCompleteVibration();
    } else {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }

    const reduceMotion = await AccessibilityInfo.isReduceMotionEnabled();
    if (!reduceMotion) {
      Animated.sequence([
        Animated.timing(scale, { toValue: 1.06, duration: 80, useNativeDriver: true }),
        Animated.timing(scale, { toValue: 1, duration: 120, useNativeDriver: true }),
      ]).start();
    }
  }, [count, target, isComplete, onIncrement, scale]);

  const handleResetPress = useCallback(() => {
    if (count === 0) return;
    Alert.alert(t('duas.counterResetTitle'), t('duas.counterResetMessage'), [
      { text: t('common.cancel'), style: 'cancel' },
      { text: t('duas.counterResetConfirm'), style: 'destructive', onPress: onReset },
    ]);
  }, [count, onReset, t]);

  const progress = target ? Math.min(count / target, 1) : 0;
  const valueText = target !== undefined ? `${count} / ${target}` : String(count);
  const accessibilityLabel = t('duas.counterAccessibilityLabel', { title: duaTitle });
  const accessibilityValue =
    target !== undefined ? { min: 0, max: target, now: count, text: valueText } : { now: count, text: valueText };

  if (variant === 'bar') {
    const barProgress = target ? Math.min(count / target, 1) : 0;
    return (
      <View style={styles.barRow}>
        <Pressable
          onPress={handlePress}
          disabled={isComplete}
          accessibilityRole="button"
          accessibilityLabel={accessibilityLabel}
          accessibilityHint={isComplete ? undefined : t('duas.counterAccessibilityHint')}
          accessibilityValue={accessibilityValue}
          accessibilityState={{ disabled: isComplete }}
          style={styles.barPressArea}
        >
          <Animated.View style={[styles.barPill, { transform: [{ scale }] }]}>
            <View style={[styles.barTrack, { backgroundColor: colors.surfaceElevated }]}>
              <View
                style={[
                  styles.barFill,
                  { width: `${barProgress * 100}%`, backgroundColor: isComplete ? colors.success : colors.primary },
                ]}
              />
            </View>
            <Text style={styles.barCount}>{valueText}</Text>
            {isComplete ? <Text style={styles.barComplete}>{t('duas.counterComplete')}</Text> : null}
          </Animated.View>
        </Pressable>
        <Pressable
          onPress={handleResetPress}
          disabled={count === 0}
          style={({ pressed }) => [styles.barResetButton, (pressed || count === 0) && styles.resetButtonDisabled]}
          accessibilityRole="button"
          accessibilityLabel={t('duas.counterResetLabel')}
          hitSlop={8}
        >
          <Text style={styles.resetText}>{t('duas.counterResetLabel')}</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Pressable
        onPress={handlePress}
        disabled={isComplete}
        accessibilityRole="button"
        accessibilityLabel={accessibilityLabel}
        accessibilityHint={isComplete ? undefined : t('duas.counterAccessibilityHint')}
        accessibilityValue={accessibilityValue}
        accessibilityState={{ disabled: isComplete }}
        style={styles.pressArea}
      >
        <Animated.View style={[styles.ringWrap, { transform: [{ scale }] }]}>
          {target !== undefined && (
            <Svg width={RING_SIZE} height={RING_SIZE} style={StyleSheet.absoluteFill}>
              <Circle
                cx={RING_SIZE / 2}
                cy={RING_SIZE / 2}
                r={RING_RADIUS}
                stroke={colors.surfaceElevated}
                strokeWidth={RING_STROKE}
                fill="none"
              />
              <Circle
                cx={RING_SIZE / 2}
                cy={RING_SIZE / 2}
                r={RING_RADIUS}
                stroke={isComplete ? colors.success : colors.primary}
                strokeWidth={RING_STROKE}
                fill="none"
                strokeDasharray={`${RING_CIRCUMFERENCE} ${RING_CIRCUMFERENCE}`}
                strokeDashoffset={RING_CIRCUMFERENCE * (1 - progress)}
                strokeLinecap="round"
                rotation={-90}
                origin={`${RING_SIZE / 2}, ${RING_SIZE / 2}`}
              />
            </Svg>
          )}
          <Text style={styles.count}>{count}</Text>
          {target !== undefined ? <Text style={styles.target}>{`/ ${target}`}</Text> : null}
        </Animated.View>
      </Pressable>

      {isComplete ? (
        <Text style={styles.completeLabel} accessibilityLiveRegion="polite">
          {t('duas.counterComplete')}
        </Text>
      ) : null}

      <Pressable
        onPress={handleResetPress}
        disabled={count === 0}
        style={({ pressed }) => [styles.resetButton, (pressed || count === 0) && styles.resetButtonDisabled]}
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
    container: { alignItems: 'center', paddingVertical: spacing.lg },
    pressArea: {
      width: RING_SIZE + 32,
      height: RING_SIZE + 32,
      alignItems: 'center',
      justifyContent: 'center',
    },
    ringWrap: {
      width: RING_SIZE,
      height: RING_SIZE,
      alignItems: 'center',
      justifyContent: 'center',
    },
    count: {
      fontSize: 48,
      fontWeight: typography.weight.heavy,
      color: colors.textPrimary,
    },
    target: {
      fontSize: typography.size.md,
      color: colors.textSecondary,
      marginTop: -4,
    },
    completeLabel: {
      marginTop: spacing.sm,
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
    // --- bar variant (header) ---
    barRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: spacing.xs,
      paddingHorizontal: spacing.md,
      paddingBottom: spacing.sm,
    },
    barPressArea: {
      flex: 1,
      minHeight: minTouchTarget,
    },
    barPill: {
      flex: 1,
      minHeight: minTouchTarget,
      borderRadius: radius.pill,
      backgroundColor: colors.surface,
      borderWidth: 1,
      borderColor: colors.border,
      paddingHorizontal: spacing.md,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      overflow: 'hidden',
    },
    barTrack: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 4,
    },
    barFill: {
      height: 4,
    },
    barCount: {
      fontSize: typography.size.xl,
      fontWeight: typography.weight.heavy,
      color: colors.textPrimary,
      fontVariant: ['tabular-nums'],
    },
    barComplete: {
      fontSize: typography.size.sm,
      fontWeight: typography.weight.bold,
      color: colors.success,
    },
    barResetButton: {
      minHeight: minTouchTarget,
      minWidth: minTouchTarget,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: spacing.sm,
      borderRadius: radius.pill,
      borderWidth: 1,
      borderColor: colors.border,
    },
  });
