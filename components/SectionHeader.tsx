import { StyleSheet } from 'react-native';
import Text from './Text';

import { spacing, typography, type ThemeColors } from '../lib/theme';
import { useThemedStyles } from '../lib/useTheme';

interface Props {
  title: string;
  subtitle?: string;
}

/** A section label (e.g. "Island", "Language", "Prayer notifications") with an optional helper line beneath it. */
export default function SectionHeader({ title, subtitle }: Props) {
  const styles = useThemedStyles(createStyles);
  return (
    <>
      <Text style={styles.title} accessibilityRole="header">
        {title}
      </Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </>
  );
}

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    title: {
      fontSize: typography.size.lg,
      fontWeight: typography.weight.bold,
      color: colors.textPrimary,
      marginBottom: spacing.xs,
      marginTop: spacing.lg,
      marginHorizontal: spacing.xs,
    },
    subtitle: {
      fontSize: typography.size.sm,
      color: colors.textSecondary,
      marginHorizontal: spacing.xs,
      marginBottom: spacing.xs,
    },
  });
