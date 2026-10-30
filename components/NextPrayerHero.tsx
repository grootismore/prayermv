import { StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { radius, shadow, spacing, typography, type ThemeColors } from '../lib/theme';
import { useTheme, useThemedStyles } from '../lib/useTheme';
import { numeralFont } from '../lib/useNumeralFont';
import LacquerBand from './LacquerBand';

interface Props {
  prayerName: string;
  time: string;
  countdown: string;
  /** 0..1 - how far the gap between the previous and next prayer has run. */
  progress: number;
  numeralsReady: boolean;
}

/**
 * Home's one committed vermilion vessel: the next prayer, its time, and a
 * countdown set large enough to read at arm's length. A solid band
 * along the foot shows how much of the current gap has elapsed - the same
 * incised-line language as the dividers, doing a real job.
 */
export default function NextPrayerHero({ prayerName, time, countdown, progress, numeralsReady }: Props) {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const styles = useThemedStyles(createStyles);
  const pct = Math.min(1, Math.max(0, progress));
  const numerals = numeralsReady && { fontFamily: numeralFont.bold };

  return (
    <View
      style={styles.card}
      accessible
      accessibilityLabel={`${t('home.nextPrayer')}: ${prayerName}, ${time}. ${countdown}`}
      accessibilityRole="timer"
    >
      <LacquerBand color={colors.heroText} thin={1} thick={2} gap={2} />
      <View style={styles.body}>
        <View style={styles.nameRow}>
          <Text style={styles.name} numberOfLines={1} adjustsFontSizeToFit>
            {prayerName}
          </Text>
          <Text style={[styles.time, numerals]}>{time}</Text>
        </View>
        <Text style={[styles.countdown, numerals]} numberOfLines={1} adjustsFontSizeToFit>
          {countdown}
        </Text>
        <Text style={styles.caption}>{t('home.nextPrayer')}</Text>
      </View>
      <View style={styles.track} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
        <View style={styles.trackBed} />
        <View style={[styles.fill, { width: `${pct * 100}%` }]} />
      </View>
    </View>
  );
}

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    card: {
      backgroundColor: colors.heroBackground,
      borderRadius: radius.lg,
      overflow: 'hidden',
      paddingTop: spacing.sm,
      ...shadow.hero,
    },
    body: {
      paddingHorizontal: spacing.lg,
      paddingTop: spacing.md,
      paddingBottom: spacing.lg,
    },
    caption: {
      color: colors.heroTextMuted,
      fontSize: typography.size.base,
      fontWeight: typography.weight.semibold,
      marginTop: spacing.xxs,
    },
    nameRow: {
      flexDirection: 'row',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: spacing.md,
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
      fontSize: 52,
      lineHeight: 60,
      fontWeight: typography.weight.bold,
      fontVariant: ['tabular-nums'],
      letterSpacing: -1,
      marginTop: spacing.sm,
    },
    track: { height: 8 },
    trackBed: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: colors.heroText,
      opacity: 0.22,
    },
    // heroText on heroBackground is the app's highest-contrast pair, so the
    // progress reads at a glance in both themes (ochre on vermilion did not).
    fill: {
      height: 8,
      backgroundColor: colors.heroText,
    },
  });
