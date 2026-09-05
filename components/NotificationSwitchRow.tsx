import { StyleSheet, Switch, Text, View, Platform } from 'react-native';

import { colors, minTouchTarget, spacing, typography } from '../lib/theme';

interface Props {
  label: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
}

/** A prayer-notification toggle row using React Native's native Switch, themed with the lagoon-cyan active track. */
export default function NotificationSwitchRow({ label, value, onValueChange }: Props) {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ true: colors.primaryMuted, false: colors.surfaceElevated }}
        thumbColor={Platform.OS === 'android' ? (value ? colors.primary : colors.textMuted) : undefined}
        ios_backgroundColor={colors.surfaceElevated}
        style={styles.switch}
        accessibilityRole="switch"
        accessibilityLabel={label}
        accessibilityState={{ checked: value }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: minTouchTarget,
    paddingLeft: spacing.md,
    paddingRight: spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: colors.separator,
  },
  label: {
    flexShrink: 1,
    fontSize: typography.size.md,
    color: colors.textPrimary,
  },
  // The native Switch can render larger than its nominal size under some
  // system text-scaling settings - a small fixed scale-down keeps it (and
  // its touch target, which scales with it) safely clear of the card's
  // rounded border regardless, rather than relying on padding alone.
  switch: { transform: [{ scaleX: 0.92 }, { scaleY: 0.92 }] },
});
