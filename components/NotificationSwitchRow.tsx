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
    paddingHorizontal: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.separator,
  },
  label: {
    fontSize: typography.size.md,
    color: colors.textPrimary,
  },
});
