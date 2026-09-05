import { View, Text, StyleSheet, Switch, Pressable, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { useTranslation } from 'react-i18next';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';

import { useSettings } from '../../context/SettingsContext';
import { NOTIFIABLE_PRAYERS } from '../../lib/prayerTimes';
import { requestNotificationPermissions } from '../../lib/notifications';
import { SUPPORTED_LANGUAGES } from '../../lib/i18n';
import type { AppLanguage, NotificationPrefs } from '../../lib/storage';
import { colors } from '../../lib/theme';

export default function SettingsScreen() {
  const { t } = useTranslation();
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

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>{t('settings.title')}</Text>

        <Text style={styles.sectionLabel}>{t('settings.island')}</Text>
        <Pressable style={[styles.card, styles.cardPadded]} onPress={() => router.push('/onboarding')}>
          <Text style={styles.cardText}>
            {island ? `${island.atoll} ${island.island}` : '-'}
          </Text>
          <Text style={styles.cardAction}>{t('home.changeIsland')}</Text>
        </Pressable>

        <Text style={styles.sectionLabel}>{t('settings.language')}</Text>
        <View style={styles.card}>
          {SUPPORTED_LANGUAGES.map((lang) => (
            <Pressable
              key={lang}
              style={styles.languageRow}
              onPress={() => changeLanguage(lang as AppLanguage)}
            >
              <Text style={styles.cardText}>{t(`languages.${lang}`)}</Text>
              {language === lang && <Text style={styles.checkmark}>✓</Text>}
            </Pressable>
          ))}
        </View>

        <Text style={styles.sectionLabel}>{t('settings.notifications')}</Text>
        <Text style={styles.sectionSubtitle}>{t('settings.notificationsSubtitle')}</Text>
        <View style={styles.card}>
          {NOTIFIABLE_PRAYERS.map((prayer) => (
            <View key={prayer} style={styles.toggleRow}>
              <Text style={styles.cardText}>{t(`prayers.${prayer}`)}</Text>
              <Switch
                value={notificationPrefs[prayer as keyof NotificationPrefs]}
                onValueChange={(value) => handleToggle(prayer as any, value)}
                trackColor={{ true: colors.primary }}
              />
            </View>
          ))}
        </View>

        <Pressable style={[styles.card, styles.cardPadded]} onPress={handlePreviewSound}>
          <Text style={styles.cardText}>{t('settings.soundPreview')}</Text>
        </Pressable>

        <Text style={styles.sectionLabel}>{t('settings.about')}</Text>
        <View style={[styles.card, styles.cardPadded]}>
          <Text style={styles.cardText}>
            {t('common.appName')} · {Constants.expoConfig?.version ?? '1.0.0'}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  scrollContent: { padding: 20, paddingBottom: 40 },
  title: { fontSize: 22, fontWeight: '700', color: colors.text, marginBottom: 20 },
  sectionLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.textMuted,
    marginBottom: 6,
    marginTop: 16,
    letterSpacing: 0.5,
  },
  sectionSubtitle: { fontSize: 13, color: colors.textMuted, marginBottom: 8 },
  card: {
    backgroundColor: colors.card,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: 'hidden',
  },
  cardPadded: { paddingHorizontal: 16, paddingVertical: 14 },
  cardText: { fontSize: 16, color: colors.text },
  cardAction: { fontSize: 13, color: colors.primary, fontWeight: '600', marginTop: 4 },
  languageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  checkmark: { color: colors.primary, fontSize: 16, fontWeight: '700' },
  toggleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
});
