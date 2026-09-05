import { useMemo, useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';

import { useSettings } from '../../context/SettingsContext';
import { getTodayHijri, getHijriMonthInfo } from '../../lib/hijri';
import { colors, radius, shadow } from '../../lib/theme';
import { useNumeralFont, numeralFont } from '../../lib/useNumeralFont';
import GeometricStar from '../../components/GeometricStar';
import StarField from '../../components/StarField';

export default function HijriScreen() {
  const { t } = useTranslation();
  const { language } = useSettings();
  const today = useMemo(() => getTodayHijri(), []);
  const [viewYear, setViewYear] = useState(today.year);
  const [viewMonth, setViewMonth] = useState(today.month);
  const numeralsReady = useNumeralFont();

  const monthInfo = useMemo(
    () => getHijriMonthInfo(viewYear, viewMonth, language),
    [viewYear, viewMonth, language]
  );

  const weekdaysShort = t('hijri.weekdaysShort', { returnObjects: true }) as string[];
  const numeralStyle = numeralsReady && { fontFamily: numeralFont.semibold };

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

  // Chunked into explicit 7-cell rows rather than a flexWrap grid with
  // percentage-width cells - `width: '${100 / 7}%'` inside a wrapped flex
  // row is a known-fragile combination in RN's layout engine (rounding on
  // aspectRatio + percentage width can make the 7th cell wrap early), and
  // that's exactly what was happening: every Saturday column came out
  // empty, with the grid only ever fitting 6 cells per visual row.
  const cells: (number | null)[] = [
    ...Array(monthInfo.firstDayOfWeek).fill(null),
    ...Array.from({ length: monthInfo.daysInMonth }, (_, i) => i + 1),
  ];
  while (cells.length % 7 !== 0) cells.push(null);
  const weeks: (number | null)[][] = [];
  for (let i = 0; i < cells.length; i += 7) {
    weeks.push(cells.slice(i, i + 7));
  }

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <Text style={styles.title}>{t('hijri.title')}</Text>

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
            <Text style={numeralStyle}>{today.date}</Text> {monthInfo.monthName}{' '}
            <Text style={numeralStyle}>{today.year}</Text>
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
                day != null && viewYear === today.year && viewMonth === today.month && day === today.date;
              return (
                <View key={dayIndex} style={styles.cell}>
                  {day != null && (
                    <View style={[styles.dayCircle, isToday && styles.dayCircleToday]}>
                      <Text style={[styles.dayText, numeralStyle, isToday && styles.dayTextToday]}>
                        {day}
                      </Text>
                    </View>
                  )}
                </View>
              );
            })}
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: 20 },
  title: { fontSize: 22, fontWeight: '700', color: colors.text, marginBottom: 16 },
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
