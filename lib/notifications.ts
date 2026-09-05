import * as Notifications from 'expo-notifications';
import * as TaskManager from 'expo-task-manager';
import * as BackgroundTask from 'expo-background-task';

import { getTodayPrayerTimes, NOTIFIABLE_PRAYERS, type PrayerName } from './prayerTimes';
import { loadSelectedIslandId, loadNotificationPrefs, type NotificationPrefs } from './storage';
import i18n from './i18n';

export const BACKGROUND_RESCHEDULE_TASK = 'prayermv-daily-reschedule';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: true,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

export async function requestNotificationPermissions(): Promise<boolean> {
  const existing = await Notifications.getPermissionsAsync();
  if (existing.granted) return true;
  const requested = await Notifications.requestPermissionsAsync();
  return requested.granted;
}

/**
 * Cancels all previously scheduled prayer notifications and schedules new
 * ones for today's remaining, enabled prayers. Safe to call anytime (app
 * open, settings change, or from the background task) - it always reads
 * the latest island + prefs from storage rather than trusting caller state.
 */
export async function rescheduleTodayNotifications(): Promise<void> {
  const islandId = await loadSelectedIslandId();
  if (islandId == null) return;

  const prefs = await loadNotificationPrefs();
  await Notifications.cancelAllScheduledNotificationsAsync();

  const granted = await Notifications.getPermissionsAsync();
  if (!granted.granted) return;

  const now = new Date();
  const times = getTodayPrayerTimes(islandId);

  for (const entry of times) {
    if (!NOTIFIABLE_PRAYERS.includes(entry.call)) continue;
    if (!prefs[entry.call as Exclude<PrayerName, 'sunrise'>]) continue;
    if (entry.date.getTime() <= now.getTime()) continue;

    await Notifications.scheduleNotificationAsync({
      content: {
        title: i18n.t(`prayers.${entry.call}`),
        body: entry.string,
      },
      trigger: {
        type: Notifications.SchedulableTriggerInputTypes.DATE,
        date: entry.date,
      },
    });
  }
}

TaskManager.defineTask(BACKGROUND_RESCHEDULE_TASK, async () => {
  try {
    await rescheduleTodayNotifications();
    return BackgroundTask.BackgroundTaskResult.Success;
  } catch {
    return BackgroundTask.BackgroundTaskResult.Failed;
  }
});

export async function registerBackgroundRescheduleTask(): Promise<void> {
  const alreadyRegistered = await TaskManager.isTaskRegisteredAsync(BACKGROUND_RESCHEDULE_TASK);
  if (alreadyRegistered) return;

  await BackgroundTask.registerTaskAsync(BACKGROUND_RESCHEDULE_TASK, {
    minimumInterval: 12 * 60,
  });
}

export type { NotificationPrefs };
