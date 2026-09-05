import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { useTranslation } from 'react-i18next';

import { useSettings } from '../../context/SettingsContext';
import { useNextPrayer, formatCountdown } from '../../lib/useNextPrayer';
import { colors } from '../../lib/theme';

export default function HomeScreen() {
  const { t } = useTranslation();
  const { island } = useSettings();
  const state = useNextPrayer(island?.islandId ?? null);

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

        {state.next && (
          <View style={styles.nextCard}>
            <Text style={styles.nextLabel}>{t('home.nextPrayer')}</Text>
            <Text style={styles.nextPrayerName}>{t(`prayers.${state.next.call}`)}</Text>
            <Text style={styles.nextTime}>{state.next.string}</Text>
            <Text style={styles.countdown}>{formatCountdown(state.millisecondsRemaining)}</Text>
          </View>
        )}

        <Text style={styles.sectionTitle}>{t('home.today')}</Text>
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
                <Text style={[styles.rowTime, isNext && styles.rowLabelActive]}>{entry.string}</Text>
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
  nextCard: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    marginBottom: 24,
  },
  nextLabel: { color: '#D6EDE7', fontSize: 13, fontWeight: '600', letterSpacing: 0.5 },
  nextPrayerName: { color: '#FFFFFF', fontSize: 32, fontWeight: '800', marginTop: 6 },
  nextTime: { color: '#D6EDE7', fontSize: 16, marginTop: 2 },
  countdown: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '700',
    marginTop: 16,
    fontVariant: ['tabular-nums'],
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.textMuted,
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  list: {
    backgroundColor: colors.card,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: 'hidden',
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
