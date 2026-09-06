import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { minTouchTarget, radius, spacing, typography, type ThemeColors } from '../../lib/theme';
import { useTheme, useThemedStyles } from '../../lib/useTheme';

type IconName = keyof typeof Ionicons.glyphMap;

interface Props {
  title: string;
  description?: string;
  icon: IconName;
  countLabel: string;
  onPress: () => void;
}

/** A category row for the Duas home screen - icon, title, short description, and an entry count. */
export default function DuaCategoryCard({ title, description, icon, countLabel, onPress }: Props) {
  const { colors } = useTheme();
  const styles = useThemedStyles(createStyles);

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.row, pressed && styles.pressed]}
      accessibilityRole="button"
      accessibilityLabel={`${title}, ${countLabel}`}
    >
      <View style={styles.iconWrap}>
        <Ionicons name={icon} size={22} color={colors.primary} />
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
        <Text style={styles.count}>{countLabel}</Text>
      </View>
      <Ionicons name="chevron-forward" size={18} color={colors.textMuted} />
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
    iconWrap: {
      width: 40,
      height: 40,
      borderRadius: radius.md,
      backgroundColor: colors.primarySoft,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textCol: {
      flex: 1,
      gap: 2,
    },
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
      fontSize: typography.size.xs,
      color: colors.textMuted,
      marginTop: 2,
    },
  });
