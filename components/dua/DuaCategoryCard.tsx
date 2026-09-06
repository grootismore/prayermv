import { Pressable, StyleSheet, Text, View } from 'react-native';

import { minTouchTarget, radius, spacing, typography, type ThemeColors } from '../../lib/theme';
import { useTheme, useThemedStyles } from '../../lib/useTheme';

interface Props {
  title: string;
  description?: string;
  /** A single emoji character, not an Ionicons glyph name - see data/duas/categories.ts. */
  icon: string;
  count: number;
  countLabel: string;
  onPress: () => void;
}

/**
 * A category row for the Duas home screen: a count bubble, the title (and an
 * optional short description), and a large emoji - deliberately simple and
 * scannable across all 44 categories, rather than an icon+chevron treatment.
 */
export default function DuaCategoryCard({ title, description, icon, count, countLabel, onPress }: Props) {
  const styles = useThemedStyles(createStyles);

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.row, pressed && styles.pressed]}
      accessibilityRole="button"
      accessibilityLabel={`${title}, ${countLabel}`}
    >
      <View style={styles.countBubble}>
        <Text style={styles.countText}>{count}</Text>
      </View>
      <View style={styles.textCol}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        {description ? (
          <Text style={styles.description} numberOfLines={2}>
            {description}
          </Text>
        ) : null}
      </View>
      <Text style={styles.emoji}>{icon}</Text>
    </Pressable>
  );
}

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      minHeight: minTouchTarget + 16,
      paddingVertical: spacing.sm,
      paddingHorizontal: spacing.md,
      borderBottomWidth: 1,
      borderBottomColor: colors.separator,
      gap: spacing.sm,
    },
    pressed: {
      backgroundColor: colors.surfacePressed,
    },
    countBubble: {
      width: 36,
      height: 36,
      borderRadius: radius.pill,
      backgroundColor: colors.primarySoft,
      alignItems: 'center',
      justifyContent: 'center',
    },
    countText: {
      fontSize: typography.size.sm,
      fontWeight: typography.weight.bold,
      color: colors.primary,
      fontVariant: ['tabular-nums'],
    },
    textCol: {
      flex: 1,
      gap: 2,
      alignItems: 'center',
    },
    title: {
      fontSize: typography.size.md,
      fontWeight: typography.weight.semibold,
      color: colors.textPrimary,
      textAlign: 'center',
    },
    description: {
      fontSize: typography.size.sm,
      color: colors.textSecondary,
      textAlign: 'center',
    },
    emoji: {
      fontSize: 28,
      width: 36,
      textAlign: 'center',
    },
  });
