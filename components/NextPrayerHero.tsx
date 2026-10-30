import { StyleSheet, View } from 'react-native';
import Text from './Text';
import { useTranslation } from 'react-i18next';
import { LinearGradient } from 'expo-linear-gradient';

import { radius, shadow, spacing, typography, type ThemeColors } from '../lib/theme';
import { useTheme, useThemedStyles } from '../lib/useTheme';
import { numeralFont } from '../lib/useNumeralFont';
import Icon from './Icon';

interface Props {
  prayerName: string;
  time: string;
  countdown: string;
  /** 0..1 - how far the gap between the previous and next prayer has run. */
  progress: number;
  numeralsReady: boolean;
  /** The prayer's own glyph, drawn large and faint behind the text. */
  icon: Pick<React.ComponentProps<typeof Icon>, 'name' | 'sf'>;
}

/**
 * Home's one bright object: the next prayer on a mint gradient, its time,
 * and a countdown set large enough to read at arm's length. The foot band
 * shows how much of the current gap has elapsed. Dark green text on mint
 * (about 7:1) in both themes.
 */
export default function NextPrayerHero({ prayerName, time, countdown, progress, numeralsReady, icon }: Props) {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const styles = useThemedStyles(createStyles);
  const pct = Math.min(1, Math.max(0, progress));
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
        <View style={styles.watermark} pointerEvents="none" accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
          <Icon {...icon} size={132} color={`${colors.heroText}1A`} />
        </View>
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
          <View style={styles.track} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
            <View style={styles.trackBed} />
            <View style={[styles.fill, { width: `${pct * 100}%` }]} />
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
      paddingBottom: spacing.md,
    },
    watermark: { position: 'absolute', end: -14, bottom: -18 },
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
    track: { height: 6, borderRadius: radius.pill, overflow: 'hidden', marginTop: spacing.sm },
    trackBed: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: colors.heroText,
      opacity: 0.16,
    },
    fill: {
      height: 6,
      borderRadius: radius.pill,
      backgroundColor: colors.heroText,
    },
  });
