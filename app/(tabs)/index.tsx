import { useEffect, useMemo, useRef, useState } from 'react';
import { Animated, Easing, PanResponder, Pressable, StyleSheet, View } from 'react-native';
import Text from '../../components/Text';
import { useTranslation } from 'react-i18next';
import * as Haptics from 'expo-haptics';

import { useSettings } from '../../context/SettingsContext';
import { useNextPrayer, formatCountdown } from '../../lib/useNextPrayer';
import { getPrayerTimesForDate } from '../../lib/prayerTimes';
import { minTouchTarget, radius, spacing, typography, type ThemeColors } from '../../lib/theme';
import { useTheme, useThemedStyles } from '../../lib/useTheme';
import { useNumeralFont, numeralFont } from '../../lib/useNumeralFont';
import { useReduceMotion } from '../../lib/useReduceMotion';
import { getTodayHijri, getHijriMonthName } from '../../lib/hijri';
import { getTodayGregorian, getGregorianMonthName } from '../../lib/gregorian';
import { localizedIslandName, localizedAtollName } from '../../lib/islandNames';
import Screen from '../../components/Screen';
import SurfaceCard from '../../components/SurfaceCard';
import NextPrayerHero from '../../components/NextPrayerHero';
import PrayerTimeRow from '../../components/PrayerTimeRow';
import Icon from '../../components/Icon';
import PressableScale from '../../components/PressableScale';
import GlassSurface from '../../components/GlassSurface';
import LoadingScreen from '../../components/LoadingScreen';

const SWIPE_THRESHOLD = 45;

// The ambient glow follows the prayer period in effect: dawn blue, sunrise
// gold, midday mint, afternoon lime, sunset amber, night indigo. Quiet, but
// it tells you the time of day before you read a number.
const PERIOD_TONE: Record<string, string> = {
  fajr: '#7CC8FF',
  sunrise: '#FFD27A',
  dhuhr: '#4EF08F',
  asr: '#C8F06A',
  maghrib: '#FF9E6B',
  isha: '#8C9CFF',
};

// Each prayer's own glyph: an SF Symbol on iOS, an Ionicon on Android.
const PRAYER_ICON: Record<string, { name: 'moon-outline' | 'sunny-outline' | 'partly-sunny-outline'; sf: 'moon.haze.fill' | 'sunrise.fill' | 'sun.max.fill' | 'sun.haze.fill' | 'sunset.fill' | 'moon.stars.fill' }> = {
  fajr: { name: 'moon-outline', sf: 'moon.haze.fill' },
  sunrise: { name: 'sunny-outline', sf: 'sunrise.fill' },
  dhuhr: { name: 'sunny-outline', sf: 'sun.max.fill' },
  asr: { name: 'partly-sunny-outline', sf: 'sun.haze.fill' },
  maghrib: { name: 'partly-sunny-outline', sf: 'sunset.fill' },
  isha: { name: 'moon-outline', sf: 'moon.stars.fill' },
};

export default function HomeScreen() {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const styles = useThemedStyles(createStyles);
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
  // Which way the day just changed (-1 back, 1 forward) - read by the fade
  // effect below to slide the incoming list in from the matching side,
  // rather than picking a direction at random each time.
  const dayChangeDirection = useRef<1 | -1>(1);
  const goToPreviousDay = () => {
    Haptics.selectionAsync();
    dayChangeDirection.current = -1;
    setDayOffset((o) => o - 1);
  };
  const goToNextDay = () => {
    Haptics.selectionAsync();
    dayChangeDirection.current = 1;
    setDayOffset((o) => o + 1);
  };
  const goToToday = () => {
    Haptics.selectionAsync();
    dayChangeDirection.current = dayOffset > 0 ? -1 : 1;
    setDayOffset(0);
  };

  // The day list previously swapped instantly on every swipe/arrow tap,
  // which reads as a jump-cut rather than a transition. Crossfading in
  // (opacity 0->1) with a small slide from the direction the user just
  // navigated makes it read as one list replacing another instead.
  const reduceMotion = useReduceMotion();
  const dayFade = useRef(new Animated.Value(1)).current;
  const daySlide = useRef(new Animated.Value(0)).current;
  const isFirstDayRender = useRef(true);
  useEffect(() => {
    if (isFirstDayRender.current) {
      isFirstDayRender.current = false;
      return;
    }
    if (reduceMotion) return;
    dayFade.setValue(0);
    daySlide.setValue(dayChangeDirection.current * 14);
    Animated.parallel([
      Animated.timing(dayFade, {
        toValue: 1,
        duration: 180,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.timing(daySlide, {
        toValue: 0,
        duration: 180,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
    ]).start();
  }, [dayOffset, dayFade, daySlide, reduceMotion]);

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

  // How far the gap between the previous and next prayer has run, for the
  // hero's progress band. The previous prayer can belong to yesterday (before
  // today's Fajr), so yesterday's list is included in the search.
  const heroProgress = useMemo(() => {
    if (!island || !state?.next) return 0;
    const now = state.next.date.getTime() - state.millisecondsRemaining;
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const earlier = [...getPrayerTimesForDate(island.islandId, yesterday), ...state.today];
    let prev: number | null = null;
    for (const entry of earlier) {
      const at = entry.date.getTime();
      if (at <= now) prev = at;
    }
    if (prev == null) return 0;
    return (now - prev) / (state.next.date.getTime() - prev);
  }, [island, state?.next, state?.today, state?.millisecondsRemaining]);

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
    <Screen ambientTone={PERIOD_TONE[state.currentCall ?? 'isha']}>
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
        <NextPrayerHero
          prayerName={t(`prayers.${state.next.call}`)}
          time={state.next.string}
          countdown={formatCountdown(state.millisecondsRemaining)}
          progress={heroProgress}
          numeralsReady={numeralsReady}
          icon={PRAYER_ICON[state.next.call]}
        />
      )}

      <GlassSurface radius={radius.pill} style={styles.dayNav}>
        <PressableScale
          onPress={goToPreviousDay}
          hitSlop={8}
          style={styles.dayNavButton}
          accessibilityRole="button"
          accessibilityLabel={t('home.previousDay')}
        >
          <Icon name="chevron-back" size={18} color={colors.primary} />
        </PressableScale>
        <PressableScale
          onPress={goToToday}
          disabled={dayOffset === 0}
          style={styles.dayLabelSlot}
          accessibilityRole="button"
          accessibilityLabel={dayOffset === 0 ? dayLabel : `${dayLabel}, ${t('home.today')}`}
          accessibilityHint={dayOffset === 0 ? undefined : t('home.today')}
        >
          <View style={styles.dayLabelButton}>
            <Text style={styles.sectionTitle} numberOfLines={1}>
              {dayLabel}
            </Text>
            {dayOffset !== 0 && <Icon name="return-down-back" size={15} color={colors.primary} />}
          </View>
        </PressableScale>
        <PressableScale
          onPress={goToNextDay}
          hitSlop={8}
          style={styles.dayNavButton}
          accessibilityRole="button"
          accessibilityLabel={t('home.nextDay')}
        >
          <Icon name="chevron-forward" size={18} color={colors.primary} />
        </PressableScale>
      </GlassSurface>

      <Animated.View
        {...panResponder.panHandlers}
        style={{ opacity: dayFade, transform: [{ translateX: daySlide }] }}
      >
        <SurfaceCard padded={false}>
          {dayEntries.map((entry) => {
            const isNext = dayOffset === 0 && state.next?.call === entry.call;
            const isCurrent = dayOffset === 0 && state.currentCall === entry.call && !isNext;
            const isPast = dayOffset < 0 || (dayOffset === 0 && entry.date.getTime() <= Date.now());
            return (
              <PrayerTimeRow
                key={entry.call}
                label={t(`prayers.${entry.call}`)}
                time={entry.string}
                icon={PRAYER_ICON[entry.call]}
                isNext={isNext}
                isCurrent={isCurrent}
                isPast={isPast}
                numeralsReady={numeralsReady}
              />
            );
          })}
        </SurfaceCard>
      </Animated.View>
    </Screen>
  );
}

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
  islandName: {
    fontSize: 30,
    fontWeight: typography.weight.heavy,
    color: colors.textPrimary,
    marginBottom: spacing.xxs,
  },
  dateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: spacing.md,
  },
  dateText: { fontSize: typography.size.sm, color: colors.textSecondary },
  dateDivider: { fontSize: typography.size.sm, color: colors.gold, marginHorizontal: spacing.xs },
  dayNav: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.md,
    marginBottom: spacing.xs,
    paddingHorizontal: spacing.xxs,
  },
  dayNavButton: {
    width: minTouchTarget,
    height: minTouchTarget,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayLabelSlot: { flex: 1 },
  dayLabelButton: {
    minHeight: minTouchTarget,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.xs,
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: typography.size.base,
    fontWeight: typography.weight.bold,
    color: colors.textSecondary,
  },
  });

