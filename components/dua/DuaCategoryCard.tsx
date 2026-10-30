import { StyleSheet, View } from 'react-native';
import Text from '../Text';

import { minTouchTarget, radius, spacing, typography, type ThemeColors } from '../../lib/theme';
import { useTheme, useThemedStyles } from '../../lib/useTheme';
import Icon from '../Icon';
import PressableScale from '../PressableScale';
import { CATEGORY_ICON } from './categoryIcons';

interface Props {
  /** Looks up the drawn glyph; without a match the emoji `icon` is shown instead. */
  categoryId: string;
  title: string;
  description?: string;
  /** A single emoji character, the fallback when `categoryId` has no drawn glyph - see data/duas/categories.ts. */
  icon: string;
  count: number;
  countLabel: string;
  onPress: () => void;
}

/**
 * A category row for the Duas home screen: a glyph tile, the title (and an
 * optional short description) aligned to the reading edge, then the count
 * and a chevron - scannable across all the categories.
 */
export default function DuaCategoryCard({ categoryId, title, description, icon, count, countLabel, onPress }: Props) {
  const { colors } = useTheme();
  const styles = useThemedStyles(createStyles);
  const glyph = CATEGORY_ICON[categoryId];

  return (
    <PressableScale
      onPress={onPress}
      pressedScale={0.985}
      contentStyle={styles.row}
      accessibilityRole="button"
      accessibilityLabel={`${title}, ${countLabel}`}
    >
      <View style={styles.tile}>
        {glyph ? <Icon {...glyph} size={22} color={colors.primary} /> : <Text style={styles.emoji}>{icon}</Text>}
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
      <Text style={styles.count}>{count}</Text>
      <Icon name="chevron-forward" size={14} color={colors.textMuted} />
    </PressableScale>
  );
}

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      minHeight: minTouchTarget + 20,
      paddingVertical: spacing.sm,
      paddingHorizontal: spacing.md,
      gap: spacing.sm,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: colors.separator,
    },
    tile: {
      width: 44,
      height: 44,
      borderRadius: radius.md,
      backgroundColor: colors.primarySoft,
      alignItems: 'center',
      justifyContent: 'center',
    },
    emoji: { fontSize: 22 },
    textCol: { flex: 1, gap: 2 },
    title: {
      fontSize: typography.size.md,
      fontWeight: typography.weight.semibold,
      color: colors.textPrimary,
    },
    description: {
      fontSize: typography.size.sm,
      color: colors.textSecondary,
    },
    count: {
      fontSize: typography.size.sm,
      fontWeight: typography.weight.semibold,
      color: colors.textMuted,
      fontVariant: ['tabular-nums'],
    },
  });
