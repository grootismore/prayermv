import { StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { LinearGradient } from 'expo-linear-gradient';

import { radius, shadow, spacing, typography, type ThemeColors } from '../lib/theme';
import { useTheme, useThemedStyles } from '../lib/useTheme';
import { numeralFont } from '../lib/useNumeralFont';
import { PRAYER_ICON } from '../lib/prayerStyle';
import type { PrayerName } from '../lib/prayerTimes';
import DayArc from './DayArc';
import Icon from './Icon';
import StarPattern from './StarPattern';

interface Props {
  prayer: PrayerName;
  prayerName: string;
  time: string;
  countdown: string;
  /** Where each prayer falls across the day, 0..1 - the dots on the arc. */
  dayMarks: number[];
  /** Where now falls on the same scale - the sun on the arc. */
  dayProgress: number;
  numeralsReady: boolean;
}

/**
 * Home's one bright object: the next prayer on a mint gradient over a faint
 * field of eight-pointed stars, its time, a countdown set large enough to
 * read at arm's length, and the day drawn as the sun's arc with the sun
 * where you are now. Dark green on mint (about 7:1) in both themes.
 */
export default function NextPrayerHero({ prayer, prayerName, time, countdown, dayMarks, dayProgress, numeralsReady }: Props) {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const styles = useThemedStyles(createStyles);
  const numerals = numeralsReady && { fontFamily: numeralFont.bold };

  return (
    <View
      style={styles.shadow}
      accessible
      accessibilityLabel={`${t('home.nextPrayer')}: ${prayerName}, ${time}. ${countdown}`}
      accessibilityRole="timer"
    >
      <LinearGradient
        colors={[colors.heroFrom, colors.heroTo]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.card}
      >
        <StarPattern color={colors.heroText} opacity={0.1} />
        <View style={styles.body}>
          <View style={styles.nameRow}>
            <View style={styles.nameGroup}>
              <View style={styles.tile}>
                <Icon {...PRAYER_ICON[prayer]} size={20} color={colors.heroText} />
              </View>
              <Text style={styles.name} numberOfLines={1}>
                {prayerName}
              </Text>
            </View>
            <Text style={[styles.time, numerals]}>{time}</Text>
          </View>
          {/* Fixed size, not adjustsFontSizeToFit: on iOS that measured before the numeral font loaded and shrank the countdown to a speck. allowFontScaling is off because it is already display-sized. */}
          <Text style={[styles.countdown, numerals]} numberOfLines={1} allowFontScaling={false}>
            {countdown}
          </Text>
          <Text style={styles.caption}>{t('home.nextPrayer')}</Text>
          <View style={styles.arc}>
            <DayArc marks={dayMarks} progress={dayProgress} color={colors.heroText} />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    shadow: { ...shadow.hero },
    card: {
      borderRadius: radius.lg,
      overflow: 'hidden',
    },
    body: {
      paddingHorizontal: spacing.lg,
      paddingTop: spacing.md,
      paddingBottom: spacing.sm,
    },
    nameRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: spacing.md,
    },
    nameGroup: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, flexShrink: 1 },
    tile: {
      width: 36,
      height: 36,
      borderRadius: radius.sm,
      backgroundColor: `${colors.heroText}1F`,
      alignItems: 'center',
      justifyContent: 'center',
    },
    name: {
      flexShrink: 1,
      color: colors.heroText,
      fontSize: typography.size.xxl,
      fontWeight: typography.weight.heavy,
    },
    time: {
      color: colors.heroText,
      fontSize: typography.size.xl,
      fontVariant: ['tabular-nums'],
    },
    countdown: {
      color: colors.heroText,
      fontSize: 48,
      lineHeight: 54,
      fontWeight: typography.weight.bold,
      fontVariant: ['tabular-nums'],
      letterSpacing: -1,
      marginTop: spacing.xs,
    },
    caption: {
      color: colors.heroTextMuted,
      fontSize: typography.size.base,
      fontWeight: typography.weight.semibold,
      marginTop: spacing.xxs,
    },
    arc: { marginTop: spacing.xs },
  });
