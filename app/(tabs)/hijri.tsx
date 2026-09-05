import { useMemo, useState } from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';

import { useSettings } from '../../context/SettingsContext';
import { getTodayHijri, getHijriMonthInfo, getHijriMonthName } from '../../lib/hijri';
import { getTodayGregorian, getGregorianMonthInfo, getGregorianMonthName } from '../../lib/gregorian';
import { buildCalendarWeeks } from '../../lib/calendarGrid';
import { getHijriEventsForMonth, getHijriEventForDate } from '../../lib/hijriEvents';
import { colors, radius, shadow } from '../../lib/theme';
import { useNumeralFont, numeralFont } from '../../lib/useNumeralFont';
import GeometricStar from '../../components/GeometricStar';
import StarField from '../../components/StarField';

type CalendarMode = 'hijri' | 'gregorian';

export default function HijriScreen() {
  const { t } = useTranslation();
  const { language } = useSettings();
  const numeralsReady = useNumeralFont();
  const numeralStyle = numeralsReady && { fontFamily: numeralFont.semibold };

  const [mode, setMode] = useState<CalendarMode>('hijri');
  const isHijri = mode === 'hijri';

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
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>{t('hijri.title')}</Text>

        <View style={styles.modeToggle}>
          <Pressable
            onPress={() => setMode('hijri')}
            style={[styles.modeButton, isHijri && styles.modeButtonActive]}
          >
            <Text style={[styles.modeButtonText, isHijri && styles.modeButtonTextActive]}>
              {t('hijri.hijriMode')}
            </Text>
          </Pressable>
          <Pressable
            onPress={() => setMode('gregorian')}
            style={[styles.modeButton, !isHijri && styles.modeButtonActive]}
          >
            <Text style={[styles.modeButtonText, !isHijri && styles.modeButtonTextActive]}>
              {t('hijri.gregorianMode')}
            </Text>
          </Pressable>
        </View>

        <View style={styles.todayCardShadow}>
          <LinearGradient
            colors={[colors.primary, colors.primaryDeep]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.todayCard}
          >
            <StarField color={colors.goldLight} />
            <View style={styles.todayCardStar}>
              <GeometricStar size={18} color={colors.goldLight} />
            </View>
            <Text style={styles.todayLabel}>{t('hijri.today')}</Text>
            <Text style={styles.todayDate}>
              <Text style={numeralStyle}>{todayDateNum}</Text> {todayMonthName}{' '}
              <Text style={numeralStyle}>{todayYear}</Text>
            </Text>
          </LinearGradient>
        </View>

        <View style={styles.monthNav}>
          <Pressable onPress={goToPreviousMonth} hitSlop={12}>
            <Ionicons name="chevron-back" size={22} color={colors.primary} />
          </Pressable>
          <Text style={styles.monthLabel}>
            {monthInfo.monthName} <Text style={numeralStyle}>{viewYear}</Text>
          </Text>
          <Pressable onPress={goToNextMonth} hitSlop={12}>
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

        <View style={styles.grid}>
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
                          <Text style={[styles.dayText, numeralStyle, isToday && styles.dayTextToday]}>
                            {day}
                          </Text>
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
          <View style={styles.legendCard}>
            <Text style={styles.legendHeader}>{t('hijri.notableDates')}</Text>
            {monthEvents.map((event) => (
              <View key={event.date} style={styles.legendRow}>
                <View style={styles.eventDot} />
                <Text style={[styles.legendDate, numeralStyle]}>{event.date}</Text>
                <Text style={styles.legendName}>{event.name[language]}</Text>
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  scrollContent: { padding: 20, paddingBottom: 40 },
  title: { fontSize: 22, fontWeight: '700', color: colors.text, marginBottom: 16 },
  modeToggle: {
    flexDirection: 'row',
    backgroundColor: colors.card,
    borderRadius: radius.pill,
    padding: 4,
    marginBottom: 16,
    ...shadow.card,
  },
  modeButton: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: radius.pill,
    alignItems: 'center',
  },
  modeButtonActive: { backgroundColor: colors.primary },
  modeButtonText: { fontSize: 14, fontWeight: '600', color: colors.textMuted },
  modeButtonTextActive: { color: '#FFFFFF' },
  todayCardShadow: {
    borderRadius: radius.lg,
    marginBottom: 20,
    ...shadow.hero,
  },
  todayCard: {
    borderRadius: radius.lg,
    padding: 20,
    paddingTop: 26,
    alignItems: 'center',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.gold,
  },
  todayCardStar: { position: 'absolute', top: 10 },
  todayLabel: { color: '#D6EDE7', fontSize: 13, fontWeight: '600' },
  todayDate: { color: '#FFFFFF', fontSize: 22, fontWeight: '800', marginTop: 4 },
  monthNav: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  monthLabel: { fontSize: 17, fontWeight: '700', color: colors.text },
  weekdayRow: { flexDirection: 'row', marginBottom: 4 },
  weekdayText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '600',
    color: colors.textMuted,
  },
  grid: {},
  weekRow: { flexDirection: 'row' },
  cell: {
    flex: 1,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayCellInner: { alignItems: 'center', justifyContent: 'center' },
  dayCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayCircleToday: { backgroundColor: colors.primary },
  dayText: { fontSize: 14, color: colors.text },
  dayTextToday: { color: '#FFFFFF', fontWeight: '700' },
  eventDot: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: colors.danger,
    marginTop: 3,
  },
  legendCard: {
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    padding: 16,
    marginTop: 20,
    ...shadow.card,
  },
  legendHeader: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.textMuted,
    letterSpacing: 0.5,
    marginBottom: 10,
  },
  legendRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
  },
  legendDate: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.danger,
    marginLeft: 8,
    marginRight: 10,
    minWidth: 20,
  },
  legendName: { flex: 1, fontSize: 13, color: colors.text },
});
