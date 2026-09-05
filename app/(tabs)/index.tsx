import { useMemo, useRef, useState } from 'react';
import { PanResponder, Pressable, StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';

import { useSettings } from '../../context/SettingsContext';
import { useNextPrayer, formatCountdown } from '../../lib/useNextPrayer';
import { getPrayerTimesForDate } from '../../lib/prayerTimes';
import { colors, minTouchTarget, shadow, spacing, typography } from '../../lib/theme';
import { useNumeralFont, numeralFont } from '../../lib/useNumeralFont';
import { getTodayHijri, getHijriMonthName } from '../../lib/hijri';
import { getTodayGregorian, getGregorianMonthName } from '../../lib/gregorian';
import { localizedIslandName, localizedAtollName } from '../../lib/islandNames';
import Screen from '../../components/Screen';
import SurfaceCard from '../../components/SurfaceCard';
import PrayerTimeRow from '../../components/PrayerTimeRow';
import NoorDivider from '../../components/NoorDivider';
import WaveDecoration from '../../components/WaveDecoration';
import SunAccent from '../../components/SunAccent';
import LoadingScreen from '../../components/LoadingScreen';

const SWIPE_THRESHOLD = 45;

export default function HomeScreen() {
  const { t } = useTranslation();
  const { island, language } = useSettings();
  const state = useNextPrayer(island?.islandId ?? null);
  const numeralsReady = useNumeralFont();
  const numeralStyle = numeralsReady && { fontFamily: numeralFont.semibold };

  const todayHijri = useMemo(() => getTodayHijri(), []);
  const todayGregorian = useMemo(() => getTodayGregorian(), []);
  const hijriMonthName = getHijriMonthName(todayHijri.month, language);
  const gregorianMonthName = getGregorianMonthName(todayGregorian.month, language);

  // The "Today's prayer times" list can be browsed to nearby days without
  // touching the live next-prayer countdown above it, which only ever
  // makes sense for right now. dayOffset 0 keeps using the live-ticking
  // `state.today` (so highlighting the next/current prayer keeps working
  // exactly as before); any other offset computes a plain, unhighlighted
  // list for that date.
  const [dayOffset, setDayOffset] = useState(0);
  const goToPreviousDay = () => setDayOffset((o) => o - 1);
  const goToNextDay = () => setDayOffset((o) => o + 1);

  const viewDate = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + dayOffset);
    return d;
  }, [dayOffset]);

  const dayEntries = useMemo(() => {
    if (dayOffset === 0) return state?.today ?? [];
    if (!island) return [];
    return getPrayerTimesForDate(island.islandId, viewDate);
  }, [dayOffset, island, state?.today, viewDate]);

  const dayLabel = useMemo(() => {
    if (dayOffset === 0) return t('home.today');
    if (dayOffset === 1) return t('home.tomorrow');
    if (dayOffset === -1) return t('home.yesterday');
    const monthName = getGregorianMonthName(viewDate.getMonth() + 1, language);
    return t('home.prayerTimesOn', { date: `${viewDate.getDate()} ${monthName}` });
  }, [dayOffset, viewDate, language, t]);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gesture) =>
        Math.abs(gesture.dx) > 12 && Math.abs(gesture.dx) > Math.abs(gesture.dy) * 1.5,
      onPanResponderRelease: (_, gesture) => {
        if (gesture.dx <= -SWIPE_THRESHOLD) goToNextDay();
        else if (gesture.dx >= SWIPE_THRESHOLD) goToPreviousDay();
      },
    })
  ).current;

  if (!island || !state) {
    return <LoadingScreen label={t('common.loading')} />;
  }

  return (
    <Screen
      backgroundDecoration={
        <>
          <WaveDecoration variant="header" />
          <View style={styles.sunSpot}>
            <SunAccent size={26} />
          </View>
        </>
      }
    >
      <Text style={styles.islandName}>
        {localizedAtollName(island.atoll, language)} {localizedIslandName(island, language)}
      </Text>
      <View style={styles.dateRow}>
        <Text style={styles.dateText}>
          <Text style={numeralStyle}>{todayGregorian.date}</Text> {gregorianMonthName}{' '}
          <Text style={numeralStyle}>{todayGregorian.year}</Text>
        </Text>
        <Text style={styles.dateDivider}>{'·'}</Text>
        <Text style={styles.dateText}>
          <Text style={numeralStyle}>{todayHijri.date}</Text> {hijriMonthName}{' '}
          <Text style={numeralStyle}>{todayHijri.year}</Text>
        </Text>
      </View>

      {state.next && (
        <SurfaceCard elevated style={styles.nextCard}>
          <SunAccent size={22} />
          <Text style={styles.nextLabel}>{t('home.nextPrayer')}</Text>
          <Text style={styles.nextPrayerName}>{t(`prayers.${state.next.call}`)}</Text>
          <Text style={[styles.nextTime, numeralsReady && styles.numeralFont]}>{state.next.string}</Text>
          <View style={styles.countdownDivider} />
          <Text style={[styles.countdown, numeralsReady && styles.numeralFontBold]}>
            {formatCountdown(state.millisecondsRemaining)}
          </Text>
          <WaveDecoration variant="card" />
        </SurfaceCard>
      )}

      <NoorDivider />

      <View style={styles.dayNavRow}>
        <Pressable
          onPress={goToPreviousDay}
          hitSlop={8}
          style={styles.dayNavButton}
          accessibilityLabel={t('home.previousDay')}
        >
          <Ionicons name="chevron-back" size={20} color={colors.primary} />
        </Pressable>
        <Text style={styles.sectionTitle} numberOfLines={1}>
          {dayLabel}
        </Text>
        <Pressable
          onPress={goToNextDay}
          hitSlop={8}
          style={styles.dayNavButton}
          accessibilityLabel={t('home.nextDay')}
        >
          <Ionicons name="chevron-forward" size={20} color={colors.primary} />
        </Pressable>
      </View>

      <View {...panResponder.panHandlers}>
        <SurfaceCard padded={false}>
          {dayEntries.map((entry) => {
            const isNext = dayOffset === 0 && state.next?.call === entry.call;
            const isCurrent = dayOffset === 0 && state.currentCall === entry.call && !isNext;
            return (
              <PrayerTimeRow
                key={entry.call}
                label={t(`prayers.${entry.call}`)}
                time={entry.string}
                isNext={isNext}
                isCurrent={isCurrent}
                numeralsReady={numeralsReady}
              />
            );
          })}
        </SurfaceCard>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  sunSpot: { position: 'absolute', top: 4, right: 8 },
  islandName: {
    fontSize: typography.size.xxl,
    fontWeight: typography.weight.bold,
    color: colors.textPrimary,
    marginBottom: spacing.xxs,
  },
  dateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: spacing.lg,
  },
  dateText: { fontSize: typography.size.sm, color: colors.textSecondary },
  dateDivider: { fontSize: typography.size.sm, color: colors.gold, marginHorizontal: spacing.xs },
  nextCard: {
    alignItems: 'center',
    paddingTop: spacing.lg,
    paddingBottom: spacing.xl,
    overflow: 'hidden',
    ...shadow.hero,
  },
  nextLabel: {
    color: colors.textSecondary,
    fontSize: typography.size.sm,
    fontWeight: typography.weight.semibold,
    letterSpacing: 0.5,
    marginTop: spacing.xs,
  },
  nextPrayerName: {
    color: colors.textPrimary,
    fontSize: 32,
    fontWeight: typography.weight.heavy,
    marginTop: spacing.xxs,
  },
  nextTime: { color: colors.textSecondary, fontSize: typography.size.lg, marginTop: 2 },
  countdownDivider: {
    width: 40,
    height: 1,
    backgroundColor: colors.border,
    marginTop: spacing.md,
  },
  countdown: {
    color: colors.primary,
    fontSize: 30,
    fontWeight: typography.weight.bold,
    marginTop: spacing.sm,
    fontVariant: ['tabular-nums'],
    letterSpacing: 1,
  },
  numeralFont: { fontFamily: numeralFont.semibold },
  numeralFontBold: { fontFamily: numeralFont.bold },
  dayNavRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.xs,
  },
  dayNavButton: {
    width: minTouchTarget,
    height: minTouchTarget,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: typography.size.base,
    fontWeight: typography.weight.bold,
    color: colors.textSecondary,
    letterSpacing: 0.5,
  },
});
