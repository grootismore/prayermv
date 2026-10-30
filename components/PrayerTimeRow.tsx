import { StyleSheet, View } from 'react-native';
import Text from './Text';

import { spacing, typography, radius, type ThemeColors } from '../lib/theme';
import { useTheme, useThemedStyles } from '../lib/useTheme';
import { numeralFont } from '../lib/useNumeralFont';
import { PRAYER_ICON, prayerHue } from '../lib/prayerStyle';
import type { PrayerName } from '../lib/prayerTimes';
import Icon from './Icon';

interface Props {
  label: string;
  time: string;
  /** Which prayer this is - sets its glyph and its colour. */
  prayer: PrayerName;
  /** The next upcoming prayer - sits on a mint fill with a bell. */
  isNext?: boolean;
  /** The prayer period currently in effect (not necessarily "next") - a soft tint. */
  isCurrent?: boolean;
  /** Already passed today - recedes and shows a check. */
  isPast?: boolean;
  numeralsReady?: boolean;
  accessibilityLabel?: string;
}

/** One row in the day's list: glyph, name, time, and a trailing status mark. */
export default function PrayerTimeRow({
  label,
  time,
  prayer,
  isNext = false,
  isCurrent = false,
  isPast = false,
  numeralsReady = false,
  accessibilityLabel,
}: Props) {
  const { colors, scheme } = useTheme();
  const styles = useThemedStyles(createStyles);
  const hue = prayerHue(prayer, scheme);
  const dim = isPast && !isNext && !isCurrent;
  const ink = isNext ? colors.onFill : dim ? colors.textMuted : colors.textPrimary;
  return (
    <View style={styles.slot}>
      <View
        style={[styles.row, isCurrent && !isNext && styles.rowCurrent, isNext && styles.rowNext]}
        accessible
        accessibilityLabel={accessibilityLabel ?? `${label}, ${time}${isNext ? ', next prayer' : ''}`}
      >
        <View style={[styles.tile, { backgroundColor: isNext ? `${colors.onFill}1A` : `${hue}2B` }, dim && styles.tileDim]}>
          <Icon {...PRAYER_ICON[prayer]} size={18} color={isNext ? colors.onFill : hue} />
        </View>
        <Text style={[styles.label, { color: ink }, isNext && styles.labelNext]}>{label}</Text>
        <Text
          style={[
            styles.time,
            { color: ink },
            isNext && styles.timeNext,
            numeralsReady && { fontFamily: numeralFont.semibold },
          ]}
        >
          {time}
        </Text>
        <View style={styles.status}>
          {isNext ? (
            <Icon name="notifications" size={16} color={colors.onFill} />
          ) : isPast ? (
            <Icon name="checkmark-circle" size={16} color={colors.textMuted} />
          ) : null}
        </View>
      </View>
    </View>
  );
}

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    slot: { paddingHorizontal: spacing.xs, paddingVertical: 1 },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: spacing.sm,
      // Not a touch target (no onPress); sized so all 6 rows plus the hero
      // fit one screen on a small phone at default text size.
      minHeight: 48,
      paddingHorizontal: spacing.sm,
      borderRadius: radius.md,
    },
    rowCurrent: { backgroundColor: colors.primarySoft },
    rowNext: { backgroundColor: colors.fill },
    tile: {
      width: 32,
      height: 32,
      borderRadius: radius.sm - 2,
      alignItems: 'center',
      justifyContent: 'center',
    },
    tileDim: { opacity: 0.5 },
    label: {
      flex: 1,
      fontSize: typography.size.lg,
      fontWeight: typography.weight.semibold,
    },
    labelNext: { fontWeight: typography.weight.bold },
    time: {
      fontSize: typography.size.xl,
      fontVariant: ['tabular-nums'],
    },
    timeNext: { fontWeight: typography.weight.bold },
    // Fixed width so times line up whether or not a status mark is shown.
    status: { width: 20, alignItems: 'center' },
  });
