import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { useTranslation } from 'react-i18next';

import IslandPicker from '../components/IslandPicker';
import { useSettings } from '../context/SettingsContext';
import { colors } from '../lib/theme';
import GeometricStar from '../components/GeometricStar';

export default function OnboardingScreen() {
  const { t } = useTranslation();
  const { island, selectIsland } = useSettings();

  async function handleSelect(islandId: number) {
    await selectIsland(islandId);
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace('/(tabs)');
    }
  }

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <View style={styles.header}>
        <View style={styles.titleRow}>
          <GeometricStar size={13} color={colors.gold} />
          <Text style={styles.title}>{t('onboarding.title')}</Text>
        </View>
        <Text style={styles.subtitle}>{t('onboarding.subtitle')}</Text>
      </View>
      <IslandPicker currentIslandId={island?.islandId} onSelect={handleSelect} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 6,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
  },
  subtitle: {
    fontSize: 14,
    color: colors.textMuted,
    lineHeight: 20,
  },
});
