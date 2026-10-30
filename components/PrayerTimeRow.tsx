import { StyleSheet, Text, View } from 'react-native';

import { spacing, typography, type ThemeColors } from '../lib/theme';
import { useThemedStyles } from '../lib/useTheme';
import { numeralFont } from '../lib/useNumeralFont';

interface Props {
  label: string;
  time: string;
  /** The next upcoming prayer - gets the band mark, tint, and vermilion text. */
  isNext?: boolean;
  /** The prayer period currently in effect (not necessarily "next") - a lighter tint and a single ochre line. */
  isCurrent?: boolean;
  /** Already passed today - recedes so the eye lands on what's still ahead. */
  isPast?: boolean;
  numeralsReady?: boolean;
  accessibilityLabel?: string;
}

/** One row in the ledger of prayer times: name on the leading edge, time on the trailing edge. */
export default function PrayerTimeRow({
  label,
  time,
  isNext = false,
  isCurrent = false,
  isPast = false,
  numeralsReady = false,
  accessibilityLabel,
}: Props) {
  const styles = useThemedStyles(createStyles);
  const dim = isPast && !isNext && !isCurrent;
  return (
    <View
      style={[styles.row, isCurrent && !isNext && styles.rowCurrent, isNext && styles.rowNext]}
      accessible
      accessibilityLabel={accessibilityLabel ?? `${label}, ${time}${isNext ? ', next prayer' : ''}`}
    >
      <View style={styles.mark}>
        {isNext ? (
          <>
            <View style={[styles.line, styles.lineThin, styles.lineNext]} />
            <View style={[styles.line, styles.lineThick, styles.lineNext]} />
            <View style={[styles.line, styles.lineThin, styles.lineNext]} />
          </>
        ) : isCurrent ? (
          <View style={[styles.line, styles.lineThick, styles.lineCurrent]} />
        ) : null}
      </View>
      <Text style={[styles.label, isNext && styles.labelActive, dim && styles.dim]}>{label}</Text>
      <Text
        style={[
          styles.time,
          isNext && styles.timeActive,
          dim && styles.dim,
          numeralsReady && { fontFamily: numeralFont.semibold },
        ]}
      >
        {time}
      </Text>
    </View>
  );
}

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      // Not a touch target (no onPress); sized so all 6 rows plus the hero
      // fit one screen on a small phone at default text size.
      minHeight: 48,
      paddingHorizontal: spacing.md,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: colors.separator,
    },
    rowCurrent: { backgroundColor: colors.surfaceElevated },
    rowNext: { backgroundColor: colors.primarySoft },
    mark: {
      width: 10,
      height: 24,
      marginRight: spacing.sm,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    line: { height: '100%' },
    lineThin: { width: 1 },
    lineThick: { width: 3 },
    lineNext: { backgroundColor: colors.primary },
    lineCurrent: { backgroundColor: colors.gold, marginLeft: 3 },
    label: {
      flex: 1,
      fontSize: typography.size.lg,
      fontWeight: typography.weight.semibold,
      color: colors.textPrimary,
    },
    labelActive: { color: colors.primary, fontWeight: typography.weight.bold },
    time: {
      fontSize: typography.size.xl,
      color: colors.textPrimary,
      fontVariant: ['tabular-nums'],
    },
    timeActive: { color: colors.primary, fontWeight: typography.weight.bold },
    dim: { color: colors.textMuted },
  });
