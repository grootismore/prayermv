import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { minTouchTarget, radius, spacing, typography, type ThemeColors } from '../../lib/theme';
import { useTheme, useThemedStyles } from '../../lib/useTheme';

interface Props {
  title: string;
  preview: string;
  typeLabel: string;
  isZikr: boolean;
  repetitionsLabel?: string;
  isFavourite: boolean;
  onPress: () => void;
  accessibilityLabel: string;
}

/** One dua/dhikr row in a list (category screen, search results, favourites) - title, a one-line preview of the meaning, a dua/dhikr type badge, an optional repetition-count badge, and a favourite indicator. */
export default function DuaCard({
  title,
  preview,
  typeLabel,
  isZikr,
  repetitionsLabel,
  isFavourite,
  onPress,
  accessibilityLabel,
}: Props) {
  const { colors } = useTheme();
  const styles = useThemedStyles(createStyles);

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.row, pressed && styles.pressed]}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
    >
      <View style={styles.textCol}>
        <View style={styles.badgeRow}>
          <View style={[styles.typeBadge, isZikr && styles.typeBadgeZikr]}>
            <Text style={[styles.typeBadgeText, isZikr && styles.typeBadgeTextZikr]}>{typeLabel}</Text>
          </View>
          {repetitionsLabel ? (
            <View style={styles.repBadge}>
              <Ionicons name="repeat" size={12} color={colors.gold} />
              <Text style={styles.repBadgeText}>{repetitionsLabel}</Text>
            </View>
          ) : null}
        </View>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.preview} numberOfLines={1}>
          {preview}
        </Text>
      </View>
      <View style={styles.trailing}>
        {isFavourite ? <Ionicons name="heart" size={16} color={colors.gold} style={styles.heart} /> : null}
        <Ionicons name="chevron-forward" size={20} color={colors.textMuted} />
      </View>
    </Pressable>
  );
}

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      minHeight: minTouchTarget + 12,
      paddingVertical: spacing.sm,
      paddingHorizontal: spacing.md,
      borderBottomWidth: 1,
      borderBottomColor: colors.separator,
    },
    pressed: {
      backgroundColor: colors.surfacePressed,
    },
    textCol: {
      flex: 1,
      gap: 4,
    },
    badgeRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: spacing.xs,
    },
    typeBadge: {
      paddingHorizontal: spacing.xs,
      paddingVertical: 2,
      borderRadius: radius.pill,
      backgroundColor: colors.primarySoft,
    },
    typeBadgeZikr: {
      backgroundColor: colors.goldSoft,
    },
    typeBadgeText: {
      fontSize: typography.size.xs,
      fontWeight: typography.weight.bold,
      color: colors.primary,
      letterSpacing: 0.3,
    },
    typeBadgeTextZikr: {
      color: colors.goldMuted,
    },
    repBadge: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 3,
    },
    repBadgeText: {
      fontSize: typography.size.xs,
      fontWeight: typography.weight.semibold,
      color: colors.gold,
    },
    title: {
      fontSize: typography.size.md,
      fontWeight: typography.weight.semibold,
      color: colors.textPrimary,
    },
    preview: {
      fontSize: typography.size.sm,
      color: colors.textSecondary,
    },
    trailing: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: spacing.xxs,
    },
    heart: {
      marginRight: 2,
    },
  });
