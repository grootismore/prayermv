import { StyleSheet, Switch, Text, View, Platform } from 'react-native';

import { minTouchTarget, spacing, typography, type ThemeColors } from '../lib/theme';
import { useTheme, useThemedStyles } from '../lib/useTheme';

interface Props {
  label: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
}

/** A prayer-notification toggle row using React Native's native Switch, themed with the lagoon-cyan active track. */
export default function NotificationSwitchRow({ label, value, onValueChange }: Props) {
  const { colors } = useTheme();
  const styles = useThemedStyles(createStyles);
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.switchWrap}>
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
    </View>
  );
}

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      minHeight: minTouchTarget,
      paddingLeft: spacing.md,
      paddingRight: spacing.xxl,
      borderBottomWidth: 1,
      borderBottomColor: colors.separator,
    },
    label: {
      flex: 1,
      fontSize: typography.size.md,
      color: colors.textPrimary,
    },
    // A fixed-size wrapper (rather than relying on the Switch's own intrinsic
    // size + `justifyContent: 'space-between'` on the row) gives it an
    // unambiguous box to sit centered in, well clear of the card's rounded
    // right edge regardless of platform or system text-scale settings.
    switchWrap: {
      width: 51,
      alignItems: 'flex-end',
      justifyContent: 'center',
    },
  });
