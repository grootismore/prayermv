import { Alert, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { useTranslation } from 'react-i18next';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';

import { useSettings } from '../../context/SettingsContext';
import { NOTIFIABLE_PRAYERS } from '../../lib/prayerTimes';
import { requestNotificationPermissions, sendTestAdhanNotification } from '../../lib/notifications';
import { SUPPORTED_LANGUAGES } from '../../lib/i18n';
import type { AppLanguage, NotificationPrefs } from '../../lib/storage';
import { colors, spacing, typography } from '../../lib/theme';
import { localizedIslandName, localizedAtollName } from '../../lib/islandNames';
import Screen from '../../components/Screen';
import SurfaceCard from '../../components/SurfaceCard';
import SectionHeader from '../../components/SectionHeader';
import SettingRow from '../../components/SettingRow';
import LanguageRow from '../../components/LanguageRow';
import NotificationSwitchRow from '../../components/NotificationSwitchRow';
import NoorDivider from '../../components/NoorDivider';
import WaveDecoration from '../../components/WaveDecoration';
import SunAccent from '../../components/SunAccent';

export default function SettingsScreen() {
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const { island, language, notificationPrefs, changeLanguage, setNotificationEnabled } = useSettings();

  async function handleToggle(prayer: Exclude<(typeof NOTIFIABLE_PRAYERS)[number], 'sunrise'>, value: boolean) {
    if (value) {
      const granted = await requestNotificationPermissions();
      if (!granted) {
        Alert.alert(t('qibla.permissionDenied'));
        return;
      }
    }
    await setNotificationEnabled(prayer as keyof NotificationPrefs, value);
  }

  async function handlePreviewSound() {
    const granted = await requestNotificationPermissions();
    if (!granted) {
      Alert.alert(t('qibla.permissionDenied'));
      return;
    }
    await Notifications.scheduleNotificationAsync({
      content: { title: t('common.appName'), body: t('settings.soundPreview') },
      trigger: null,
    });
  }

  async function handleTestAdhan() {
    try {
      await sendTestAdhanNotification(5);
      Alert.alert(t('settings.testAdhanTitle'), t('settings.testAdhanScheduled'));
    } catch {
      Alert.alert(t('qibla.permissionDenied'));
    }
  }

  return (
    <Screen
      backgroundDecoration={
        <>
          <WaveDecoration variant="header" />
          <View style={[styles.sunSpot, { top: insets.top + 4 }]}>
            <SunAccent size={22} />
          </View>
        </>
      }
    >
      <Text style={styles.title}>{t('settings.title')}</Text>

      <SectionHeader title={t('settings.island')} />
      <SurfaceCard padded={false}>
        <SettingRow
          title={island ? `${localizedAtollName(island.atoll, language)} ${localizedIslandName(island, language)}` : '-'}
          actionLabel={t('home.changeIsland')}
          onPress={() => router.push({ pathname: '/onboarding', params: { skipIntro: '1' } })}
        />
      </SurfaceCard>

      <SectionHeader title={t('settings.language')} />
      <SurfaceCard padded={false}>
        {SUPPORTED_LANGUAGES.map((lang) => (
          <LanguageRow
            key={lang}
            label={t(`languages.${lang}`)}
            selected={language === lang}
            onPress={() => changeLanguage(lang as AppLanguage)}
          />
        ))}
      </SurfaceCard>

      <SectionHeader title={t('settings.notifications')} subtitle={t('settings.notificationsSubtitle')} />
      <SurfaceCard padded={false}>
        {NOTIFIABLE_PRAYERS.map((prayer) => (
          <NotificationSwitchRow
            key={prayer}
            label={t(`prayers.${prayer}`)}
            value={notificationPrefs[prayer as keyof NotificationPrefs]}
            onValueChange={(value) => handleToggle(prayer as any, value)}
          />
        ))}
      </SurfaceCard>
      <Text style={styles.silentModeNote}>{t('settings.silentModeNote')}</Text>

      <SurfaceCard style={styles.rowCard} padded={false}>
        <SettingRow title={t('settings.soundPreview')} onPress={handlePreviewSound} />
      </SurfaceCard>

      <SectionHeader title={t('settings.testNotifications')} subtitle={t('settings.testNotificationsSubtitle')} />
      <SurfaceCard padded={false}>
        <SettingRow title={t('settings.testAdhanButton')} chevron={false} onPress={handleTestAdhan} />
      </SurfaceCard>

      <NoorDivider />

      <SectionHeader title={t('settings.about')} />
      <SurfaceCard>
        <Text style={styles.aboutText}>
          {t('common.appName')} · {Constants.expoConfig?.version ?? '1.0.0'}
        </Text>
      </SurfaceCard>
    </Screen>
  );
}

const styles = StyleSheet.create({
  sunSpot: { position: 'absolute', right: 8 },
  title: { fontSize: typography.size.xl, fontWeight: typography.weight.bold, color: colors.textPrimary, marginBottom: spacing.md },
  rowCard: { marginTop: spacing.md },
  silentModeNote: {
    fontSize: typography.size.xs,
    color: colors.textMuted,
    marginTop: spacing.xs,
    paddingHorizontal: spacing.xxs,
  },
  aboutText: { fontSize: typography.size.md, color: colors.textPrimary },
});
