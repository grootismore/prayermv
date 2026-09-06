import { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, useLocalSearchParams } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';

import IslandPicker from '../components/IslandPicker';
import LanguageRow from '../components/LanguageRow';
import SurfaceCard from '../components/SurfaceCard';
import { useSettings } from '../context/SettingsContext';
import { SUPPORTED_LANGUAGES, LANGUAGE_ENDONYMS } from '../lib/i18n';
import type { AppLanguage } from '../lib/storage';
import { minTouchTarget, radius, shadow, spacing, typography, type ThemeColors } from '../lib/theme';
import { useTheme, useThemedStyles } from '../lib/useTheme';
import WaveDecoration from '../components/WaveDecoration';
import SunAccent from '../components/SunAccent';

type Step = 'language' | 'welcome' | 'island';

const FEATURES: { icon: keyof typeof Ionicons.glyphMap; key: string }[] = [
  { icon: 'time-outline', key: 'onboarding.feature1' },
  { icon: 'compass-outline', key: 'onboarding.feature2' },
  { icon: 'calendar-outline', key: 'onboarding.feature3' },
];

export default function OnboardingScreen() {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const styles = useThemedStyles(createStyles);
  const { island, language, selectIsland, changeLanguage } = useSettings();
  const { skipIntro } = useLocalSearchParams<{ skipIntro?: string }>();
  // First run (no island yet) starts with picking a language, so the rest
  // of onboarding (and the app) reads correctly from the very start;
  // navigating here later to change island (from Settings) skips straight
  // to the picker via ?skipIntro=1.
  const [step, setStep] = useState<Step>(skipIntro === '1' ? 'island' : 'language');

  async function handleSelect(islandId: number) {
    await selectIsland(islandId);
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace('/(tabs)');
    }
  }

  if (step === 'language') {
    return (
      <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
        <View style={styles.header}>
          <Text style={styles.title}>{t('onboarding.chooseLanguageTitle')}</Text>
          <Text style={styles.subtitle}>{t('onboarding.chooseLanguageSubtitle')}</Text>
        </View>
        <View style={styles.languageBody}>
          <SurfaceCard padded={false}>
            {SUPPORTED_LANGUAGES.map((lang) => (
              <LanguageRow
                key={lang}
                label={LANGUAGE_ENDONYMS[lang]}
                selected={language === lang}
                onPress={() => changeLanguage(lang as AppLanguage)}
              />
            ))}
          </SurfaceCard>
          <Pressable style={styles.welcomeButton} onPress={() => setStep('welcome')}>
            <Text style={styles.welcomeButtonText}>{t('common.continue')}</Text>
            <Ionicons name="arrow-forward" size={18} color={colors.onPrimary} />
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }

  if (step === 'welcome') {
    return (
      <View style={styles.welcomeRoot}>
        <WaveDecoration variant="header" />
        <SafeAreaView style={styles.welcomeSafe} edges={['top', 'bottom']}>
          <View style={styles.welcomeHero}>
            <SunAccent size={34} />
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
            <Ionicons name="arrow-forward" size={18} color={colors.onPrimary} />
          </Pressable>
        </SafeAreaView>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <View style={styles.header}>
        <Text style={styles.title}>{t('onboarding.title')}</Text>
        <Text style={styles.subtitle}>{t('onboarding.subtitle')}</Text>
      </View>
      <IslandPicker currentIslandId={island?.islandId} onSelect={handleSelect} />
    </SafeAreaView>
  );
}

const createStyles = (colors: ThemeColors) =>
  StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    paddingBottom: spacing.sm,
  },
  languageBody: {
    flex: 1,
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.lg,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: typography.size.xxl,
    fontWeight: typography.weight.bold,
    color: colors.textPrimary,
    marginBottom: spacing.xxs,
  },
  subtitle: {
    fontSize: typography.size.base,
    color: colors.textSecondary,
    lineHeight: 20,
  },
  welcomeRoot: { flex: 1, backgroundColor: colors.background },
  welcomeSafe: {
    flex: 1,
    paddingHorizontal: spacing.xl,
    justifyContent: 'space-between',
  },
  welcomeHero: {
    alignItems: 'center',
    marginTop: spacing.xxl + spacing.sm,
  },
  welcomeAppName: {
    fontSize: typography.size.display,
    fontWeight: typography.weight.heavy,
    color: colors.textPrimary,
    marginTop: spacing.md,
  },
  welcomeTagline: {
    fontSize: typography.size.lg,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
    marginTop: spacing.sm,
    paddingHorizontal: spacing.xs,
  },
  featureList: { gap: spacing.md },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm + 2,
  },
  featureIconWrap: {
    width: 36,
    height: 36,
    borderRadius: radius.pill,
    backgroundColor: colors.goldSoft,
    alignItems: 'center',
    justifyContent: 'center',
  },
  featureText: { flex: 1, fontSize: typography.size.lg, color: colors.textPrimary, fontWeight: typography.weight.medium },
  welcomeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.xs,
    minHeight: minTouchTarget + 4,
    backgroundColor: colors.primary,
    borderRadius: radius.pill,
    marginBottom: spacing.lg,
    ...shadow.floating,
  },
  welcomeButtonText: { fontSize: typography.size.md, fontWeight: typography.weight.bold, color: colors.onPrimary },
});
