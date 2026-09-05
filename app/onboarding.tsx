import { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { router, useLocalSearchParams } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';

import IslandPicker from '../components/IslandPicker';
import { useSettings } from '../context/SettingsContext';
import { colors, radius, shadow } from '../lib/theme';
import GeometricStar from '../components/GeometricStar';
import StarField from '../components/StarField';

type Step = 'welcome' | 'island';

const FEATURES: { icon: keyof typeof Ionicons.glyphMap; key: string }[] = [
  { icon: 'time-outline', key: 'onboarding.feature1' },
  { icon: 'compass-outline', key: 'onboarding.feature2' },
  { icon: 'calendar-outline', key: 'onboarding.feature3' },
];

export default function OnboardingScreen() {
  const { t } = useTranslation();
  const { island, selectIsland } = useSettings();
  const { skipIntro } = useLocalSearchParams<{ skipIntro?: string }>();
  // First run (no island yet) shows the welcome step first; navigating
  // here later to change island (from Home/Settings) skips straight to
  // the picker via ?skipIntro=1.
  const [step, setStep] = useState<Step>(skipIntro === '1' ? 'island' : 'welcome');

  async function handleSelect(islandId: number) {
    await selectIsland(islandId);
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace('/(tabs)');
    }
  }

  if (step === 'welcome') {
    return (
      <View style={styles.welcomeRoot}>
        <LinearGradient
          colors={[colors.primary, colors.primaryDeep]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={StyleSheet.absoluteFill}
        />
        <StarField color={colors.goldLight} />
        <SafeAreaView style={styles.welcomeSafe} edges={['top', 'bottom']}>
          <View style={styles.welcomeHero}>
            <GeometricStar size={36} color={colors.goldLight} />
            <Text style={styles.welcomeAppName}>{t('common.appName')}</Text>
            <Text style={styles.welcomeTagline}>{t('onboarding.tagline')}</Text>
          </View>

          <View style={styles.featureList}>
            {FEATURES.map((feature) => (
              <View key={feature.key} style={styles.featureRow}>
                <View style={styles.featureIconWrap}>
                  <Ionicons name={feature.icon} size={18} color={colors.gold} />
                </View>
                <Text style={styles.featureText}>{t(feature.key)}</Text>
              </View>
            ))}
          </View>

          <Pressable style={styles.welcomeButton} onPress={() => setStep('island')}>
            <Text style={styles.welcomeButtonText}>{t('onboarding.getStarted')}</Text>
            <Ionicons name="arrow-forward" size={18} color={colors.primaryDeep} />
          </Pressable>
        </SafeAreaView>
      </View>
    );
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
  welcomeRoot: { flex: 1, backgroundColor: colors.primary },
  welcomeSafe: {
    flex: 1,
    paddingHorizontal: 28,
    justifyContent: 'space-between',
  },
  welcomeHero: {
    alignItems: 'center',
    marginTop: 48,
  },
  welcomeAppName: {
    fontSize: 34,
    fontWeight: '800',
    color: '#FFFFFF',
    marginTop: 16,
  },
  welcomeTagline: {
    fontSize: 15,
    color: '#D6EDE7',
    textAlign: 'center',
    lineHeight: 22,
    marginTop: 10,
    paddingHorizontal: 8,
  },
  featureList: { gap: 16 },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  featureIconWrap: {
    width: 36,
    height: 36,
    borderRadius: radius.pill,
    backgroundColor: 'rgba(255,255,255,0.12)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  featureText: { flex: 1, fontSize: 15, color: '#FFFFFF', fontWeight: '500' },
  welcomeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: colors.goldLight,
    borderRadius: radius.pill,
    paddingVertical: 16,
    marginBottom: 24,
    ...shadow.floating,
  },
  welcomeButtonText: { fontSize: 16, fontWeight: '700', color: colors.primaryDeep },
});
