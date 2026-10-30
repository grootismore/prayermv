import { useMemo, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import Text from '../../components/Text';
import { LinearGradient } from 'expo-linear-gradient';
import { useTranslation } from 'react-i18next';
import Icon from '../../components/Icon';

import { useSettings } from '../../context/SettingsContext';
import { getTodayHijri, getHijriMonthInfo, getHijriMonthName } from '../../lib/hijri';
import { getTodayGregorian, getGregorianMonthInfo, getGregorianMonthName } from '../../lib/gregorian';
import { buildCalendarWeeks } from '../../lib/calendarGrid';
import { HIJRI_EVENTS, getHijriEventForDate, type HijriEvent } from '../../lib/hijriEvents';
import { gregorianOfHijri, hijriOfGregorian } from '../../lib/dualDate';
import { minTouchTarget, radius, shadow, spacing, typography, type ThemeColors } from '../../lib/theme';
import { useTheme, useThemedStyles } from '../../lib/useTheme';
import { useNumeralFont, numeralFont } from '../../lib/useNumeralFont';
import Screen from '../../components/Screen';
import SurfaceCard from '../../components/SurfaceCard';
import StarPattern from '../../components/StarPattern';

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

  // Native tabs mount every tab up front, possibly before i18n has loaded, in
  // which case t() hands back the key string instead of the array.
  const weekdays = t('hijri.weekdaysShort', { returnObjects: true });
  const weekdaysShort = Array.isArray(weekdays) ? (weekdays as string[]) : [];
  const weeks = useMemo(
    () => buildCalendarWeeks(monthInfo.firstDayOfWeek, monthInfo.daysInMonth),
    [monthInfo.firstDayOfWeek, monthInfo.daysInMonth]
  );

  // Every day of the month shown, with the other calendar's date alongside
  // and any notable occasion it carries. Occasions are Hijri dates, so in
  // Gregorian mode each day is converted to find them.
  const dayInfo = useMemo(() => {
    const out: { day: number; other: number; event?: HijriEvent }[] = [];
    for (let d = 1; d <= monthInfo.daysInMonth; d++) {
      if (isHijri) {
        out.push({ day: d, other: gregorianOfHijri(viewYear, viewMonth, d).date, event: getHijriEventForDate(viewMonth, d) });
      } else {
        const h = hijriOfGregorian(viewYear, viewMonth, d);
        out.push({ day: d, other: h.date, event: getHijriEventForDate(h.month, h.date) });
      }
    }
    return out;
  }, [isHijri, viewYear, viewMonth, monthInfo.daysInMonth]);
  const infoByDay = useMemo(() => new Map(dayInfo.map((i) => [i.day, i])), [dayInfo]);
  const monthEvents = dayInfo.filter((i) => i.event);

  // A month with no occasions would leave the card empty, so it shows the
  // next two instead (wrapping into next year), each with its Gregorian date.
  const upcoming = useMemo(() => {
    const ahead = HIJRI_EVENTS.filter(
      (e) => e.month > todayHijri.month || (e.month === todayHijri.month && e.date > todayHijri.date)
    ).map((e) => ({ event: e, year: todayHijri.year }));
    const wrapped = HIJRI_EVENTS.map((e) => ({ event: e, year: todayHijri.year + 1 }));
    return [...ahead, ...wrapped].slice(0, 2).map(({ event, year }) => {
      const g = gregorianOfHijri(year, event.month, event.date);
      return { event, label: `${g.date} ${getGregorianMonthName(g.month, language)}` };
    });
  }, [todayHijri.month, todayHijri.date, todayHijri.year, language]);

  // "Today" in the calendar not on show, as a quiet second line.
  const otherToday = isHijri
    ? `${todayGregorian.date} ${getGregorianMonthName(todayGregorian.month, language)} ${todayGregorian.year}`
    : `${todayHijri.date} ${getHijriMonthName(todayHijri.month, language)} ${todayHijri.year}`;

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

      <View style={styles.todayShadow}>
        <LinearGradient
          colors={[colors.heroFrom, colors.heroTo]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.todayCard}
        >
          <StarPattern color={colors.heroText} opacity={0.1} />
          <Text style={styles.todayLabel}>{t('hijri.today')}</Text>
          <Text style={styles.todayDate}>
            <Text style={numeralStyle}>{todayDateNum}</Text> {todayMonthName}{' '}
            <Text style={numeralStyle}>{todayYear}</Text>
          </Text>
          <Text style={styles.todayOther}>{otherToday}</Text>
        </LinearGradient>
      </View>

      <SurfaceCard style={styles.gridCard}>
        <View style={styles.monthNav}>
          <Pressable onPress={goToPreviousMonth} hitSlop={12} style={styles.navButton} accessibilityRole="button" accessibilityLabel={t('hijri.previousMonth')}>
            <Icon name="chevron-back" size={20} color={colors.primary} />
          </Pressable>
          <Text style={styles.monthLabel}>
            {monthInfo.monthName} <Text style={numeralStyle}>{viewYear}</Text>
          </Text>
          <Pressable onPress={goToNextMonth} hitSlop={12} style={styles.navButton} accessibilityRole="button" accessibilityLabel={t('hijri.nextMonth')}>
            <Icon name="chevron-forward" size={20} color={colors.primary} />
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
                const info = day != null ? infoByDay.get(day) : undefined;
                return (
                  <View key={dayIndex} style={styles.cell}>
                    {day != null && (
                      <View style={styles.dayCellInner}>
                        <View style={[styles.dayCircle, info?.event && styles.dayCircleEvent, isToday && styles.dayCircleToday]}>
                          <Text style={[styles.dayText, numeralStyle, isToday && styles.dayTextToday]}>{day}</Text>
                        </View>
                        <Text style={[styles.otherText, numeralStyle]}>{info?.other}</Text>
                      </View>
                    )}
                  </View>
                );
              })}
            </View>
          ))}
        </View>
      </SurfaceCard>

      <SurfaceCard style={styles.legendCard}>
        <Text style={styles.legendHeader}>{t(monthEvents.length > 0 ? 'hijri.notableDates' : 'hijri.upcomingDates')}</Text>
        {monthEvents.length > 0
          ? monthEvents.map(({ day, event }) => (
              <View key={day} style={styles.legendRow}>
                <View style={styles.legendBadge}>
                  <Text style={[styles.legendDay, numeralStyle]}>{day}</Text>
                </View>
                <Text style={styles.legendName}>{event?.name[language]}</Text>
              </View>
            ))
          : upcoming.map(({ event, label }) => (
              <View key={`${event.month}-${event.date}`} style={styles.legendRow}>
                <View style={[styles.legendBadge, styles.legendBadgeWide]}>
                  <Text style={[styles.legendDay, numeralStyle]}>{label}</Text>
                </View>
                <Text style={styles.legendName}>{event.name[language]}</Text>
              </View>
            ))}
      </SurfaceCard>
    </Screen>
  );
}

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
  title: { fontSize: 30, fontWeight: typography.weight.heavy, color: colors.textPrimary, marginBottom: spacing.xs },
  todayShadow: { ...shadow.hero, marginTop: spacing.xs },
  todayCard: {
    borderRadius: radius.lg,
    overflow: 'hidden',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
  },
  todayLabel: { color: colors.heroTextMuted, fontSize: typography.size.sm, fontWeight: typography.weight.semibold },
  todayDate: { color: colors.heroText, fontSize: typography.size.xl, fontWeight: typography.weight.heavy, marginTop: spacing.xxs },
  todayOther: { color: colors.heroTextMuted, fontSize: typography.size.sm, fontWeight: typography.weight.semibold, marginTop: spacing.xxs },
  gridCard: { marginTop: spacing.md, paddingVertical: spacing.sm, paddingHorizontal: spacing.sm },
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
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayCellInner: { alignItems: 'center', justifyContent: 'center' },
  dayCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayCircleEvent: { borderWidth: 1.5, borderColor: colors.gold },
  dayCircleToday: { backgroundColor: colors.fill, borderWidth: 0 },
  dayText: { fontSize: typography.size.base, color: colors.textPrimary },
  dayTextToday: { color: colors.onFill, fontWeight: typography.weight.bold },
  otherText: { fontSize: 9, color: colors.textMuted, marginTop: 1, fontVariant: ['tabular-nums'] },
  legendCard: {
    marginTop: spacing.md,
  },
  legendHeader: {
    fontSize: typography.size.sm,
    fontWeight: typography.weight.bold,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },
  legendRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    paddingVertical: spacing.xxs + 2,
  },
  legendBadge: {
    minWidth: 36,
    height: 36,
    paddingHorizontal: spacing.xs,
    borderRadius: radius.sm,
    backgroundColor: colors.goldSoft,
    alignItems: 'center',
    justifyContent: 'center',
  },
  legendBadgeWide: { paddingHorizontal: spacing.sm },
  legendDay: { fontSize: typography.size.base, fontWeight: typography.weight.bold, color: colors.gold },
  legendName: { flex: 1, fontSize: typography.size.base, color: colors.textPrimary },
});
