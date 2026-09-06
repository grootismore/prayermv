import { useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';

import { useSettings } from '../../context/SettingsContext';
import { getTodayHijri, getHijriMonthInfo, getHijriMonthName } from '../../lib/hijri';
import { getTodayGregorian, getGregorianMonthInfo, getGregorianMonthName } from '../../lib/gregorian';
import { buildCalendarWeeks } from '../../lib/calendarGrid';
import { getHijriEventsForMonth, getHijriEventForDate } from '../../lib/hijriEvents';
import { minTouchTarget, spacing, typography, type ThemeColors } from '../../lib/theme';
import { useTheme, useThemedStyles } from '../../lib/useTheme';
import { useNumeralFont, numeralFont } from '../../lib/useNumeralFont';
import Screen from '../../components/Screen';
import SurfaceCard from '../../components/SurfaceCard';
import NoorDivider from '../../components/NoorDivider';
import WaveDecoration from '../../components/WaveDecoration';
import SunAccent from '../../components/SunAccent';

export default function HijriScreen() {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const styles = useThemedStyles(createStyles);
  const { language, calendarMode } = useSettings();
  const numeralsReady = useNumeralFont();
  const numeralStyle = numeralsReady && { fontFamily: numeralFont.semibold };

  // Which calendar system is shown is now a Settings-level default
  // (Settings > Calendar), not an in-screen toggle - see settings.tsx.
  const isHijri = calendarMode === 'hijri';

  const todayHijri = useMemo(() => getTodayHijri(), []);
  const todayGregorian = useMemo(() => getTodayGregorian(), []);

  // Each calendar system keeps its own browsed month, so switching modes
  // doesn't lose your place in the other one (and doesn't need any
  // Hijri<->Gregorian conversion to line them up).
  const [hijriViewYear, setHijriViewYear] = useState(todayHijri.year);
  const [hijriViewMonth, setHijriViewMonth] = useState(todayHijri.month);
  const [gregorianViewYear, setGregorianViewYear] = useState(todayGregorian.year);
  const [gregorianViewMonth, setGregorianViewMonth] = useState(todayGregorian.month);

  const hijriMonthInfo = useMemo(
    () => getHijriMonthInfo(hijriViewYear, hijriViewMonth, language),
    [hijriViewYear, hijriViewMonth, language]
  );
  const gregorianMonthInfo = useMemo(
    () => getGregorianMonthInfo(gregorianViewYear, gregorianViewMonth, language),
    [gregorianViewYear, gregorianViewMonth, language]
  );

  const monthInfo = isHijri ? hijriMonthInfo : gregorianMonthInfo;
  const viewYear = isHijri ? hijriViewYear : gregorianViewYear;
  const viewMonth = isHijri ? hijriViewMonth : gregorianViewMonth;
  const todayYear = isHijri ? todayHijri.year : todayGregorian.year;
  const todayMonth = isHijri ? todayHijri.month : todayGregorian.month;
  const todayDateNum = isHijri ? todayHijri.date : todayGregorian.date;
  const todayMonthName = isHijri
    ? getHijriMonthName(todayHijri.month, language)
    : getGregorianMonthName(todayGregorian.month, language);

  const weekdaysShort = t('hijri.weekdaysShort', { returnObjects: true }) as string[];
  const weeks = useMemo(
    () => buildCalendarWeeks(monthInfo.firstDayOfWeek, monthInfo.daysInMonth),
    [monthInfo.firstDayOfWeek, monthInfo.daysInMonth]
  );

  // Notable occasions are dates in the Hijri calendar - showing them
  // against the Gregorian grid would need full date conversion, so they
  // only appear in Hijri mode.
  const monthEvents = isHijri ? getHijriEventsForMonth(viewMonth) : [];

  function goToPreviousMonth() {
    if (isHijri) {
      if (hijriViewMonth === 1) {
        setHijriViewMonth(12);
        setHijriViewYear((y) => y - 1);
      } else {
        setHijriViewMonth((m) => m - 1);
      }
    } else if (gregorianViewMonth === 1) {
      setGregorianViewMonth(12);
      setGregorianViewYear((y) => y - 1);
    } else {
      setGregorianViewMonth((m) => m - 1);
    }
  }

  function goToNextMonth() {
    if (isHijri) {
      if (hijriViewMonth === 12) {
        setHijriViewMonth(1);
        setHijriViewYear((y) => y + 1);
      } else {
        setHijriViewMonth((m) => m + 1);
      }
    } else if (gregorianViewMonth === 12) {
      setGregorianViewMonth(1);
      setGregorianViewYear((y) => y + 1);
    } else {
      setGregorianViewMonth((m) => m + 1);
    }
  }

  return (
    <Screen>
      <Text style={styles.title}>{t('hijri.title')}</Text>

      <SurfaceCard elevated style={styles.todayCard}>
        <SunAccent size={20} />
        <Text style={styles.todayLabel}>{t('hijri.today')}</Text>
        <Text style={styles.todayDate}>
          <Text style={numeralStyle}>{todayDateNum}</Text> {todayMonthName}{' '}
          <Text style={numeralStyle}>{todayYear}</Text>
        </Text>
        <WaveDecoration variant="card" />
      </SurfaceCard>

      <NoorDivider compact />

      <View style={styles.monthNav}>
        <Pressable onPress={goToPreviousMonth} hitSlop={12} style={styles.navButton} accessibilityLabel={t('hijri.previousMonth')}>
          <Ionicons name="chevron-back" size={22} color={colors.primary} />
        </Pressable>
        <Text style={styles.monthLabel}>
          {monthInfo.monthName} <Text style={numeralStyle}>{viewYear}</Text>
        </Text>
        <Pressable onPress={goToNextMonth} hitSlop={12} style={styles.navButton} accessibilityLabel={t('hijri.nextMonth')}>
          <Ionicons name="chevron-forward" size={22} color={colors.primary} />
        </Pressable>
      </View>

      <View style={styles.weekdayRow}>
        {weekdaysShort.map((day, i) => (
          <Text key={i} style={styles.weekdayText}>
            {day}
          </Text>
        ))}
      </View>

      <View>
        {weeks.map((week, weekIndex) => (
          <View key={weekIndex} style={styles.weekRow}>
            {week.map((day, dayIndex) => {
              const isToday =
                day != null && viewYear === todayYear && viewMonth === todayMonth && day === todayDateNum;
              const hasEvent = isHijri && day != null && getHijriEventForDate(viewMonth, day) != null;
              return (
                <View key={dayIndex} style={styles.cell}>
                  {day != null && (
                    <View style={styles.dayCellInner}>
                      <View style={[styles.dayCircle, isToday && styles.dayCircleToday]}>
                        <Text style={[styles.dayText, numeralStyle, isToday && styles.dayTextToday]}>{day}</Text>
                      </View>
                      {hasEvent && <View style={styles.eventDot} />}
                    </View>
                  )}
                </View>
              );
            })}
          </View>
        ))}
      </View>

      {monthEvents.length > 0 && (
        <SurfaceCard style={styles.legendCard}>
          <Text style={styles.legendHeader}>{t('hijri.notableDates')}</Text>
          {monthEvents.map((event) => (
            <View key={event.date} style={styles.legendRow}>
              <View style={styles.eventDot} />
              <Text style={[styles.legendDate, numeralStyle]}>{event.date}</Text>
              <Text style={styles.legendName}>{event.name[language]}</Text>
            </View>
          ))}
        </SurfaceCard>
      )}
    </Screen>
  );
}

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
  title: { fontSize: typography.size.xl, fontWeight: typography.weight.bold, color: colors.textPrimary, marginBottom: spacing.xs },
  todayCard: {
    alignItems: 'center',
    paddingTop: spacing.sm,
    paddingBottom: spacing.md,
    marginTop: spacing.sm,
    overflow: 'hidden',
  },
  todayLabel: { color: colors.textSecondary, fontSize: typography.size.sm, fontWeight: typography.weight.semibold, marginTop: spacing.xs },
  todayDate: { color: colors.textPrimary, fontSize: typography.size.lg, fontWeight: typography.weight.heavy, marginTop: spacing.xxs },
  monthNav: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.xs,
  },
  navButton: {
    width: minTouchTarget,
    height: minTouchTarget,
    alignItems: 'center',
    justifyContent: 'center',
  },
  monthLabel: { fontSize: typography.size.lg, fontWeight: typography.weight.bold, color: colors.textPrimary },
  weekdayRow: { flexDirection: 'row', marginBottom: spacing.xxs },
  weekdayText: {
    flex: 1,
    textAlign: 'center',
    fontSize: typography.size.xs,
    fontWeight: typography.weight.semibold,
    color: colors.textMuted,
  },
  weekRow: { flexDirection: 'row' },
  cell: {
    flex: 1,
    // Fixed (rather than aspectRatio: 1, which would make each row as
    // tall as the screen is wide / 7) so 5-6 weeks of rows fit on screen
    // without scrolling - the day circles below are sized to comfortably
    // fit this height, not the other way around.
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayCellInner: { alignItems: 'center', justifyContent: 'center' },
  dayCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayCircleToday: { backgroundColor: colors.primary },
  dayText: { fontSize: typography.size.sm, color: colors.textPrimary },
  dayTextToday: { color: colors.onPrimary, fontWeight: typography.weight.bold },
  eventDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.gold,
    marginTop: 2,
  },
  legendCard: {
    marginTop: spacing.sm,
  },
  legendHeader: {
    fontSize: typography.size.sm,
    fontWeight: typography.weight.bold,
    color: colors.textSecondary,
    letterSpacing: 0.5,
    marginBottom: spacing.xs,
  },
  legendRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 2,
    minHeight: 28,
  },
  legendDate: {
    fontSize: typography.size.base,
    fontWeight: typography.weight.bold,
    color: colors.gold,
    marginLeft: spacing.xs,
    marginRight: spacing.sm,
    minWidth: 20,
  },
  legendName: { flex: 1, fontSize: typography.size.sm, color: colors.textPrimary },
});
