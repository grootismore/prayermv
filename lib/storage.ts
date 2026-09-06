import AsyncStorage from '@react-native-async-storage/async-storage';
import type { PrayerName } from './prayerTimes';

export type AppLanguage = 'en' | 'dv' | 'ar';

export type CalendarMode = 'hijri' | 'gregorian';

export type ThemeMode = 'light' | 'dark' | 'system';

export type NotificationPrefs = Record<Exclude<PrayerName, 'sunrise'>, boolean>;

export const DEFAULT_NOTIFICATION_PREFS: NotificationPrefs = {
  fajr: true,
  dhuhr: true,
  asr: true,
  maghrib: true,
  isha: true,
};

const KEYS = {
  islandId: 'prayermv.islandId',
  language: 'prayermv.language',
  notificationPrefs: 'prayermv.notificationPrefs',
  qiblaHapticsEnabled: 'prayermv.qiblaHapticsEnabled',
  calendarMode: 'prayermv.calendarMode',
  themeMode: 'prayermv.themeMode',
} as const;

export async function loadSelectedIslandId(): Promise<number | null> {
  const raw = await AsyncStorage.getItem(KEYS.islandId);
  return raw ? Number(raw) : null;
}

export async function saveSelectedIslandId(islandId: number): Promise<void> {
  await AsyncStorage.setItem(KEYS.islandId, String(islandId));
}

export async function loadLanguage(): Promise<AppLanguage | null> {
  const raw = await AsyncStorage.getItem(KEYS.language);
  return raw === 'en' || raw === 'dv' || raw === 'ar' ? raw : null;
}

export async function saveLanguage(language: AppLanguage): Promise<void> {
  await AsyncStorage.setItem(KEYS.language, language);
}

export async function loadNotificationPrefs(): Promise<NotificationPrefs> {
  const raw = await AsyncStorage.getItem(KEYS.notificationPrefs);
  if (!raw) return DEFAULT_NOTIFICATION_PREFS;
  try {
    return { ...DEFAULT_NOTIFICATION_PREFS, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_NOTIFICATION_PREFS;
  }
}

export async function saveNotificationPrefs(prefs: NotificationPrefs): Promise<void> {
  await AsyncStorage.setItem(KEYS.notificationPrefs, JSON.stringify(prefs));
}

export async function loadQiblaHapticsEnabled(): Promise<boolean> {
  const raw = await AsyncStorage.getItem(KEYS.qiblaHapticsEnabled);
  return raw === null ? true : raw === '1';
}

export async function saveQiblaHapticsEnabled(enabled: boolean): Promise<void> {
  await AsyncStorage.setItem(KEYS.qiblaHapticsEnabled, enabled ? '1' : '0');
}

/** Which calendar system the Calendar tab shows by default - Hijri unless the user picks Gregorian in Settings. */
export async function loadCalendarMode(): Promise<CalendarMode> {
  const raw = await AsyncStorage.getItem(KEYS.calendarMode);
  return raw === 'gregorian' ? 'gregorian' : 'hijri';
}

export async function saveCalendarMode(mode: CalendarMode): Promise<void> {
  await AsyncStorage.setItem(KEYS.calendarMode, mode);
}

/**
 * Which appearance the app uses - defaults to 'dark' rather than 'system',
 * since Noor+'s "Ocean Night" look has always been the only theme that
 * existed until now; nobody should see a surprise appearance change on
 * update just because their device happens to be in light mode. Users who
 * want to follow the system (or force Light) can pick that explicitly in
 * Settings > Appearance.
 */
export async function loadThemeMode(): Promise<ThemeMode> {
  const raw = await AsyncStorage.getItem(KEYS.themeMode);
  return raw === 'light' || raw === 'system' ? raw : 'dark';
}

export async function saveThemeMode(mode: ThemeMode): Promise<void> {
  await AsyncStorage.setItem(KEYS.themeMode, mode);
}
