import { Platform } from 'react-native';
import { NativeTabs } from 'expo-router/unstable-native-tabs';
import { useTranslation } from 'react-i18next';

import { useTheme } from '../../lib/useTheme';
import { ARABIC_FAMILY, INTER, THAANA_FAMILY } from '../../lib/scriptFont';

/**
 * The system tab bar, not a drawn one: a real UITabBar on iOS (liquid glass
 * on iOS 26, which also minimizes on scroll) and a Material navigation bar
 * on Android. Only colours are themed - on iOS the background is left to the
 * system so the glass isn't switched off.
 */
export default function TabsLayout() {
  const { t, i18n } = useTranslation();
  const { colors } = useTheme();
  // The system draws these labels itself, so the app's Text wrapper can't set
  // their font: name the face for the current language here.
  const labelFont = i18n.language === 'dv' ? THAANA_FAMILY : i18n.language === 'ar' ? ARABIC_FAMILY : INTER.semibold;

  return (
    <NativeTabs
      tintColor={colors.primary}
      iconColor={{ default: colors.textSecondary, selected: colors.primary }}
      labelStyle={{
        default: { color: colors.textSecondary, fontFamily: labelFont },
        selected: { color: colors.primary, fontFamily: labelFont },
      }}
      minimizeBehavior="onScrollDown"
      {...(Platform.OS === 'android'
        ? { backgroundColor: colors.backgroundDeep, indicatorColor: colors.primarySoft, rippleColor: colors.primarySoft }
        : null)}
    >
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>{t('tabs.home')}</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf={{ default: 'house', selected: 'house.fill' }} md="home" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="qibla">
        <NativeTabs.Trigger.Label>{t('tabs.qibla')}</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf={{ default: 'safari', selected: 'safari.fill' }} md="explore" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="hijri">
        <NativeTabs.Trigger.Label>{t('tabs.hijri')}</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="calendar" md="calendar_month" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="duas">
        <NativeTabs.Trigger.Label>{t('tabs.duas')}</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf={{ default: 'book', selected: 'book.fill' }} md="menu_book" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="settings">
        <NativeTabs.Trigger.Label>{t('tabs.settings')}</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf={{ default: 'gearshape', selected: 'gearshape.fill' }} md="settings" />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
