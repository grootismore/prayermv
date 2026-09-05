import { useMemo, useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';

import { useSettings } from '../../context/SettingsContext';
import { getTodayHijri, getHijriMonthInfo } from '../../lib/hijri';
import { colors } from '../../lib/theme';

export default function HijriScreen() {
  const { t } = useTranslation();
  const { language } = useSettings();
  const today = useMemo(() => getTodayHijri(), []);
  const [viewYear, setViewYear] = useState(today.year);
  const [viewMonth, setViewMonth] = useState(today.month);

  const monthInfo = useMemo(
    () => getHijriMonthInfo(viewYear, viewMonth, language),
    [viewYear, viewMonth, language]
  );

  const weekdaysShort = t('hijri.weekdaysShort', { returnObjects: true }) as string[];

  function goToPreviousMonth() {
    if (viewMonth === 1) {
      setViewMonth(12);
      setViewYear((y) => y - 1);
    } else {
      setViewMonth((m) => m - 1);
    }
  }

  function goToNextMonth() {
    if (viewMonth === 12) {
      setViewMonth(1);
      setViewYear((y) => y + 1);
    } else {
      setViewMonth((m) => m + 1);
    }
  }

  const cells: (number | null)[] = [
    ...Array(monthInfo.firstDayOfWeek).fill(null),
    ...Array.from({ length: monthInfo.daysInMonth }, (_, i) => i + 1),
  ];

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <Text style={styles.title}>{t('hijri.title')}</Text>

      <View style={styles.todayCard}>
        <Text style={styles.todayLabel}>{t('hijri.today')}</Text>
        <Text style={styles.todayDate}>
          {today.date} {monthInfo.monthName} {today.year}
        </Text>
      </View>

      <View style={styles.monthNav}>
        <Pressable onPress={goToPreviousMonth} hitSlop={12}>
          <Ionicons name="chevron-back" size={22} color={colors.primary} />
        </Pressable>
        <Text style={styles.monthLabel}>
          {monthInfo.monthName} {viewYear}
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
        {cells.map((day, index) => {
          const isToday = day != null && viewYear === today.year && viewMonth === today.month && day === today.date;
          return (
            <View key={index} style={styles.cell}>
              {day != null && (
                <View style={[styles.dayCircle, isToday && styles.dayCircleToday]}>
                  <Text style={[styles.dayText, isToday && styles.dayTextToday]}>{day}</Text>
                </View>
              )}
            </View>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: 20 },
  title: { fontSize: 22, fontWeight: '700', color: colors.text, marginBottom: 16 },
  todayCard: {
    backgroundColor: colors.primary,
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
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
  grid: { flexDirection: 'row', flexWrap: 'wrap' },
  cell: {
    width: `${100 / 7}%`,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
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
});
