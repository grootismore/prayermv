import { StyleSheet, Text } from 'react-native';

import { colors, spacing, typography } from '../lib/theme';

interface Props {
  title: string;
  subtitle?: string;
}

/** A section label (e.g. "Island", "Language", "Prayer notifications") with an optional helper line beneath it. */
export default function SectionHeader({ title, subtitle }: Props) {
  return (
    <>
      <Text style={styles.title} accessibilityRole="header">
        {title}
      </Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: typography.size.base,
    fontWeight: typography.weight.bold,
    color: colors.primary,
    marginBottom: spacing.xxs,
    marginTop: spacing.md,
    letterSpacing: 0.3,
  },
  subtitle: {
    fontSize: typography.size.sm,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },
});
