import React, { createContext, useContext, useEffect, useMemo, useState, useCallback } from 'react';
import type { Island } from '../lib/prayerTimes';
import { getAllIslands } from '../lib/prayerTimes';
import {
  loadSelectedIslandId,
  saveSelectedIslandId,
  loadLanguage,
  saveLanguage,
  loadNotificationPrefs,
  saveNotificationPrefs,
  loadQiblaHapticsEnabled,
  saveQiblaHapticsEnabled,
  DEFAULT_NOTIFICATION_PREFS,
  type AppLanguage,
  type NotificationPrefs,
} from '../lib/storage';
import { initI18n } from '../lib/i18n';
import i18n from '../lib/i18n';
import { rescheduleTodayNotifications } from '../lib/notifications';

interface SettingsContextValue {
  isLoaded: boolean;
  island: Island | null;
  language: AppLanguage;
  notificationPrefs: NotificationPrefs;
  qiblaHapticsEnabled: boolean;
  selectIsland: (islandId: number) => Promise<void>;
  changeLanguage: (language: AppLanguage) => Promise<void>;
  setNotificationEnabled: (prayer: keyof NotificationPrefs, enabled: boolean) => Promise<void>;
  setQiblaHapticsEnabled: (enabled: boolean) => Promise<void>;
}

const SettingsContext = createContext<SettingsContextValue | undefined>(undefined);

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [island, setIsland] = useState<Island | null>(null);
  const [language, setLanguage] = useState<AppLanguage>('en');
  const [notificationPrefs, setNotificationPrefs] = useState<NotificationPrefs>(DEFAULT_NOTIFICATION_PREFS);
  const [qiblaHapticsEnabled, setQiblaHapticsEnabledState] = useState(true);

  useEffect(() => {
    (async () => {
      const [islandId, storedLanguage, prefs, hapticsEnabled] = await Promise.all([
        loadSelectedIslandId(),
        loadLanguage(),
        loadNotificationPrefs(),
        loadQiblaHapticsEnabled(),
      ]);

      const resolvedLanguage = storedLanguage ?? 'en';
      initI18n(resolvedLanguage);
      await i18n.changeLanguage(resolvedLanguage);

      if (islandId != null) {
        const found = getAllIslands().find((i) => i.islandId === islandId) ?? null;
        setIsland(found);
      }
      setLanguage(resolvedLanguage);
      setNotificationPrefs(prefs);
      setQiblaHapticsEnabledState(hapticsEnabled);
      setIsLoaded(true);
    })();
  }, []);

  const selectIsland = useCallback(async (islandId: number) => {
    const found = getAllIslands().find((i) => i.islandId === islandId) ?? null;
    setIsland(found);
    await saveSelectedIslandId(islandId);
    await rescheduleTodayNotifications();
  }, []);

  const changeLanguage = useCallback(async (nextLanguage: AppLanguage) => {
    setLanguage(nextLanguage);
    await saveLanguage(nextLanguage);
    await i18n.changeLanguage(nextLanguage);
  }, []);

  const setNotificationEnabled = useCallback(
    async (prayer: keyof NotificationPrefs, enabled: boolean) => {
      setNotificationPrefs((prev) => {
        const next = { ...prev, [prayer]: enabled };
        saveNotificationPrefs(next);
        return next;
      });
      await rescheduleTodayNotifications();
    },
    []
  );

  const setQiblaHapticsEnabled = useCallback(async (enabled: boolean) => {
    setQiblaHapticsEnabledState(enabled);
    await saveQiblaHapticsEnabled(enabled);
  }, []);

  const value = useMemo(
    () => ({
      isLoaded,
      island,
      language,
      notificationPrefs,
      qiblaHapticsEnabled,
      selectIsland,
      changeLanguage,
      setNotificationEnabled,
      setQiblaHapticsEnabled,
    }),
    [
      isLoaded,
      island,
      language,
      notificationPrefs,
      qiblaHapticsEnabled,
      selectIsland,
      changeLanguage,
      setNotificationEnabled,
      setQiblaHapticsEnabled,
    ]
  );

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
}

export function useSettings(): SettingsContextValue {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error('useSettings must be used within a SettingsProvider');
  return ctx;
}
