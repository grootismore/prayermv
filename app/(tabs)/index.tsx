import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { useTranslation } from 'react-i18next';

import { useMemo } from 'react';

import { useSettings } from '../../context/SettingsContext';
import { useNextPrayer, formatCountdown } from '../../lib/useNextPrayer';
import { colors, radius, shadow } from '../../lib/theme';
import { useNumeralFont, numeralFont } from '../../lib/useNumeralFont';
import { getTodayHijri, getHijriMonthName } from '../../lib/hijri';
import { getTodayGregorian, getGregorianMonthName } from '../../lib/gregorian';
import GeometricStar from '../../components/GeometricStar';
import StarField from '../../components/StarField';

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

  if (!island || !state) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.muted}>{t('common.loading')}</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Pressable onPress={() => router.push('/onboarding')} style={styles.islandRow}>
          <Text style={styles.islandName}>
            {island.atoll} {island.island}
          </Text>
          <Text style={styles.changeIsland}>{t('home.changeIsland')}</Text>
        </Pressable>

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
          <View style={styles.nextCardShadow}>
            <LinearGradient
              colors={[colors.primary, colors.primaryDeep]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.nextCard}
            >
              <StarField color={colors.goldLight} />
              <View style={styles.nextCardStar}>
                <GeometricStar size={18} color={colors.goldLight} />
              </View>
              <Text style={styles.nextLabel}>{t('home.nextPrayer')}</Text>
              <Text style={styles.nextPrayerName}>{t(`prayers.${state.next.call}`)}</Text>
              <Text style={[styles.nextTime, numeralsReady && styles.numeralFont]}>
                {state.next.string}
              </Text>
              <Text style={[styles.countdown, numeralsReady && styles.numeralFontBold]}>
                {formatCountdown(state.millisecondsRemaining)}
              </Text>
            </LinearGradient>
          </View>
        )}

        <View style={styles.sectionTitleRow}>
          <GeometricStar size={11} color={colors.gold} />
          <Text style={styles.sectionTitle}>{t('home.today')}</Text>
        </View>
        <View style={styles.list}>
          {state.today.map((entry) => {
            const isNext = state.next?.call === entry.call;
            const isCurrent = state.currentCall === entry.call && !isNext;
            return (
              <View
                key={entry.call}
                style={[styles.row, isNext && styles.rowNext, isCurrent && styles.rowCurrent]}
              >
                <Text style={[styles.rowLabel, isNext && styles.rowLabelActive]}>
                  {t(`prayers.${entry.call}`)}
                </Text>
                <Text
                  style={[
                    styles.rowTime,
                    isNext && styles.rowLabelActive,
                    numeralsReady && styles.numeralFontMedium,
                  ]}
                >
                  {entry.string}
                </Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  scrollContent: { padding: 20, paddingBottom: 40 },
  muted: { color: colors.textMuted, textAlign: 'center', marginTop: 40 },
  islandRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  islandName: { fontSize: 18, fontWeight: '700', color: colors.text },
  changeIsland: { fontSize: 13, color: colors.primary, fontWeight: '600' },
  dateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  dateText: { fontSize: 13, color: colors.textMuted },
  dateDivider: { fontSize: 13, color: colors.gold, marginHorizontal: 8 },
  nextCardShadow: {
    borderRadius: radius.xl,
    marginBottom: 24,
    ...shadow.hero,
  },
  nextCard: {
    borderRadius: radius.xl,
    padding: 24,
    paddingTop: 30,
    alignItems: 'center',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.gold,
  },
  nextCardStar: { position: 'absolute', top: 12 },
  nextLabel: { color: '#D6EDE7', fontSize: 13, fontWeight: '600', letterSpacing: 0.5 },
  nextPrayerName: { color: '#FFFFFF', fontSize: 32, fontWeight: '800', marginTop: 6 },
  nextTime: { color: '#D6EDE7', fontSize: 16, marginTop: 2 },
  countdown: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: '700',
    marginTop: 16,
    fontVariant: ['tabular-nums'],
    letterSpacing: 1,
  },
  numeralFont: { fontFamily: numeralFont.semibold },
  numeralFontBold: { fontFamily: numeralFont.bold },
  numeralFontMedium: { fontFamily: numeralFont.semibold },
  sectionTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.textMuted,
    letterSpacing: 0.5,
  },
  list: {
    backgroundColor: colors.card,
    borderRadius: radius.lg,
    overflow: 'hidden',
    ...shadow.card,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  rowNext: { backgroundColor: colors.primaryLight },
  rowCurrent: { backgroundColor: colors.background },
  rowLabel: { fontSize: 16, color: colors.text, fontWeight: '600' },
  rowLabelActive: { color: colors.primary },
  rowTime: { fontSize: 16, color: colors.textMuted },
});
