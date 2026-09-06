import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { minTouchTarget, spacing, typography, type ThemeColors } from '../lib/theme';
import { useTheme, useThemedStyles } from '../lib/useTheme';

interface Props {
  title: string;
  /** A secondary cyan action line beneath the title (e.g. "Change island"). */
  actionLabel?: string;
  chevron?: boolean;
  onPress?: () => void;
  accessibilityLabel?: string;
}

/** A generic settings row: title (+ optional cyan action line) with a trailing chevron, inside a pressable native-style row. */
export default function SettingRow({ title, actionLabel, chevron = true, onPress, accessibilityLabel }: Props) {
  const { colors } = useTheme();
  const styles = useThemedStyles(createStyles);
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.row, pressed && onPress && styles.pressed]}
      accessibilityRole={onPress ? 'button' : undefined}
      accessibilityLabel={accessibilityLabel ?? [title, actionLabel].filter(Boolean).join(', ')}
    >
      <View style={styles.textCol}>
        <Text style={styles.title}>{title}</Text>
        {actionLabel ? <Text style={styles.actionLabel}>{actionLabel}</Text> : null}
      </View>
      {chevron ? <Ionicons name="chevron-forward" size={20} color={colors.textMuted} /> : null}
    </Pressable>
  );
}

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      minHeight: minTouchTarget,
      paddingVertical: spacing.xs,
      paddingHorizontal: spacing.md,
    },
    pressed: {
      opacity: 0.7,
    },
    textCol: {
      flex: 1,
      gap: 4,
    },
    title: {
      fontSize: typography.size.md,
      fontWeight: typography.weight.semibold,
      color: colors.textPrimary,
    },
    actionLabel: {
      fontSize: typography.size.sm,
      fontWeight: typography.weight.semibold,
      color: colors.primary,
    },
  });
