import { StyleSheet, Text, View } from 'react-native';

import { colors, minTouchTarget, spacing, typography } from '../lib/theme';
import { numeralFont } from '../lib/useNumeralFont';

interface Props {
  label: string;
  time: string;
  /** The next upcoming prayer - gets the cyan side indicator, tint, and time color. */
  isNext?: boolean;
  /** The prayer period currently in effect (not necessarily "next") - a lighter tint only. */
  isCurrent?: boolean;
  numeralsReady?: boolean;
  accessibilityLabel?: string;
}

/** One row in a prayer-times list: name on the leading edge, time on the trailing edge, with a highlighted state for the next prayer. */
export default function PrayerTimeRow({
  label,
  time,
  isNext = false,
  isCurrent = false,
  numeralsReady = false,
  accessibilityLabel,
}: Props) {
  return (
    <View
      style={[styles.row, isCurrent && !isNext && styles.rowCurrent, isNext && styles.rowNext]}
      accessible
      accessibilityLabel={accessibilityLabel ?? `${label}, ${time}${isNext ? ', next prayer' : ''}`}
    >
      <View style={[styles.indicator, isNext && styles.indicatorActive]} />
      <Text style={[styles.label, isNext && styles.labelActive]}>{label}</Text>
      <Text
        style={[
          styles.time,
          isNext && styles.timeActive,
          numeralsReady && { fontFamily: numeralFont.semibold },
        ]}
      >
        {time}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: minTouchTarget,
    paddingHorizontal: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.separator,
  },
  rowCurrent: {
    backgroundColor: colors.surfaceElevated,
  },
  rowNext: {
    backgroundColor: colors.primarySoft,
  },
  indicator: {
    width: 3,
    height: 22,
    borderRadius: 2,
    marginRight: spacing.sm,
    backgroundColor: 'transparent',
  },
  indicatorActive: {
    backgroundColor: colors.primary,
  },
  label: {
    flex: 1,
    fontSize: typography.size.md,
    fontWeight: typography.weight.semibold,
    color: colors.textPrimary,
  },
  labelActive: {
    color: colors.primary,
  },
  time: {
    fontSize: typography.size.md,
    color: colors.textSecondary,
  },
  timeActive: {
    color: colors.primary,
    fontWeight: typography.weight.bold,
  },
});
