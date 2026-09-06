import AsyncStorage from '@react-native-async-storage/async-storage';
import type { PrayerName } from './prayerTimes';
import type { DuaArabicFontSize, DuaCounterProgress, DuaPreferences, DuaTranslationLanguage } from '../types/dua';

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

export interface EndingReminderPrefs {
  enabled: boolean;
  minutesBefore: number;
}

export const ENDING_REMINDER_MINUTES_OPTIONS = [5, 10, 15, 20] as const;

export const DEFAULT_ENDING_REMINDER_PREFS: EndingReminderPrefs = {
  enabled: false,
  minutesBefore: 15,
};

export const DEFAULT_DUA_PREFERENCES: DuaPreferences = {
  translationLanguage: 'auto',
  showTransliteration: true,
  arabicFontSize: 'medium',
};

const KEYS = {
  islandId: 'prayermv.islandId',
  language: 'prayermv.language',
  notificationPrefs: 'prayermv.notificationPrefs',
  endingReminderPrefs: 'prayermv.endingReminderPrefs',
  qiblaHapticsEnabled: 'prayermv.qiblaHapticsEnabled',
  calendarMode: 'prayermv.calendarMode',
  themeMode: 'prayermv.themeMode',
  duaPreferences: 'prayermv.duaPreferences',
  duaFavouriteIds: 'prayermv.duaFavouriteIds',
  duaCounterProgress: 'prayermv.duaCounterProgress',
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

export async function loadEndingReminderPrefs(): Promise<EndingReminderPrefs> {
  const raw = await AsyncStorage.getItem(KEYS.endingReminderPrefs);
  if (!raw) return DEFAULT_ENDING_REMINDER_PREFS;
  try {
    return { ...DEFAULT_ENDING_REMINDER_PREFS, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_ENDING_REMINDER_PREFS;
  }
}

export async function saveEndingReminderPrefs(prefs: EndingReminderPrefs): Promise<void> {
  await AsyncStorage.setItem(KEYS.endingReminderPrefs, JSON.stringify(prefs));
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

const DUA_TRANSLATION_LANGUAGES: DuaTranslationLanguage[] = ['auto', 'en', 'dv'];
const DUA_ARABIC_FONT_SIZES: DuaArabicFontSize[] = ['small', 'medium', 'large'];

/** Parses a stored dua-preferences blob field by field, falling back to the default for any field that's missing or the wrong shape (a corrupted value or an older/removed field from a previous release) rather than discarding the whole object. */
function parseDuaPreferences(raw: unknown): DuaPreferences {
  const value = raw && typeof raw === 'object' ? (raw as Record<string, unknown>) : {};
  return {
    translationLanguage: DUA_TRANSLATION_LANGUAGES.includes(value.translationLanguage as DuaTranslationLanguage)
      ? (value.translationLanguage as DuaTranslationLanguage)
      : DEFAULT_DUA_PREFERENCES.translationLanguage,
    showTransliteration:
      typeof value.showTransliteration === 'boolean'
        ? value.showTransliteration
        : DEFAULT_DUA_PREFERENCES.showTransliteration,
    arabicFontSize: DUA_ARABIC_FONT_SIZES.includes(value.arabicFontSize as DuaArabicFontSize)
      ? (value.arabicFontSize as DuaArabicFontSize)
      : DEFAULT_DUA_PREFERENCES.arabicFontSize,
  };
}

export async function loadDuaPreferences(): Promise<DuaPreferences> {
  const raw = await AsyncStorage.getItem(KEYS.duaPreferences);
  if (!raw) return DEFAULT_DUA_PREFERENCES;
  try {
    return parseDuaPreferences(JSON.parse(raw));
  } catch {
    return DEFAULT_DUA_PREFERENCES;
  }
}

export async function saveDuaPreferences(prefs: DuaPreferences): Promise<void> {
  await AsyncStorage.setItem(KEYS.duaPreferences, JSON.stringify(prefs));
}

/** Favourite dua IDs. Stored as an array (order = most-recently-favourited last); de-duplicated and non-string entries dropped on load so a corrupted value can't crash a screen that maps over it. */
export async function loadDuaFavouriteIds(): Promise<string[]> {
  const raw = await AsyncStorage.getItem(KEYS.duaFavouriteIds);
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return Array.from(new Set(parsed.filter((id): id is string => typeof id === 'string')));
  } catch {
    return [];
  }
}

export async function saveDuaFavouriteIds(ids: string[]): Promise<void> {
  await AsyncStorage.setItem(KEYS.duaFavouriteIds, JSON.stringify(Array.from(new Set(ids))));
}

/** Zikr repeat-counter progress, keyed by dua id. Invalid entries (non-finite, negative, or non-integer counts - e.g. from a corrupted write) are dropped on load rather than crashing the counter UI. */
export async function loadDuaCounterProgress(): Promise<DuaCounterProgress> {
  const raw = await AsyncStorage.getItem(KEYS.duaCounterProgress);
  if (!raw) return {};
  try {
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') return {};
    const result: DuaCounterProgress = {};
    for (const [id, count] of Object.entries(parsed as Record<string, unknown>)) {
      if (typeof count === 'number' && Number.isInteger(count) && count >= 0) {
        result[id] = count;
      }
    }
    return result;
  } catch {
    return {};
  }
}

export async function saveDuaCounterProgress(progress: DuaCounterProgress): Promise<void> {
  await AsyncStorage.setItem(KEYS.duaCounterProgress, JSON.stringify(progress));
}
