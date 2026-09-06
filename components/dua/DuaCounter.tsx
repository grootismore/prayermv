import { useCallback, useRef } from 'react';
import { AccessibilityInfo, Alert, Animated, Pressable, StyleSheet, Text, View } from 'react-native';
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
  /** Called once, on the tap that brings count up to target - lets the caller decide what happens next (e.g. DuaZikrFlow fires the completion vibration on the last phrase, or auto-advances to the next one otherwise). DuaCounter itself only ever gives a light haptic, on every tap. */
  onTargetReached?: () => void;
  /** Hides the built-in reset button - for DuaZikrFlow, which resets the whole multi-phrase sequence itself rather than one segment at a time. */
  hideReset?: boolean;
}

const RING_SIZE = 176;
const RING_STROKE = 10;
const RING_RADIUS = (RING_SIZE - RING_STROKE) / 2;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

/**
 * The interactive zikr repeat counter: a large ring, tap to count, a light
 * haptic on every tap, disabled once complete. Skips the tap animation
 * when the OS reduce-motion setting is on; the haptic stays either way
 * since it's feedback, not decoration.
 */
export default function DuaCounter({ count, target, onIncrement, onReset, duaTitle, onTargetReached, hideReset }: Props) {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const styles = useThemedStyles(createStyles);
  const scale = useRef(new Animated.Value(1)).current;
  const isComplete = target !== undefined && count >= target;

  const handlePress = useCallback(async () => {
    if (isComplete) return;
    const willComplete = target !== undefined && count + 1 >= target;
    onIncrement();
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);

    const reduceMotion = await AccessibilityInfo.isReduceMotionEnabled();
    if (!reduceMotion) {
      Animated.sequence([
        Animated.timing(scale, { toValue: 1.06, duration: 80, useNativeDriver: true }),
        Animated.timing(scale, { toValue: 1, duration: 120, useNativeDriver: true }),
      ]).start();
    }

    if (willComplete) {
      onTargetReached?.();
    }
  }, [count, target, isComplete, onIncrement, onTargetReached, scale]);

  const handleResetPress = useCallback(() => {
    if (count === 0) return;
    Alert.alert(t('duas.counterResetTitle'), t('duas.counterResetMessage'), [
      { text: t('common.cancel'), style: 'cancel' },
      { text: t('duas.counterResetConfirm'), style: 'destructive', onPress: onReset },
    ]);
  }, [count, onReset, t]);

  const progress = target ? Math.min(count / target, 1) : 0;
  const valueText = target !== undefined ? `${count} / ${target}` : String(count);

  return (
    <View style={styles.container}>
      <Pressable
        onPress={handlePress}
        disabled={isComplete}
        accessibilityRole="button"
        accessibilityLabel={t('duas.counterAccessibilityLabel', { title: duaTitle })}
        accessibilityHint={isComplete ? undefined : t('duas.counterAccessibilityHint')}
        accessibilityValue={
          target !== undefined ? { min: 0, max: target, now: count, text: valueText } : { now: count, text: valueText }
        }
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

      {hideReset ? null : (
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
      )}
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
  });
