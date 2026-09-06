import { Platform } from 'react-native';
import * as Notifications from 'expo-notifications';
import * as TaskManager from 'expo-task-manager';
import * as BackgroundTask from 'expo-background-task';

import { getTodayPrayerTimes, getTodayPrayerWindows, NOTIFIABLE_PRAYERS, type PrayerName } from './prayerTimes';
import {
  loadSelectedIslandId,
  loadNotificationPrefs,
  loadEndingReminderPrefs,
  type NotificationPrefs,
} from './storage';
import i18n from './i18n';

export const BACKGROUND_RESCHEDULE_TASK = 'prayermv-daily-reschedule';

// iOS wants the sound filename with its extension; Android wants the raw
// resource name without one (see assets/sounds/README.md - the actual
// adhan.wav file isn't bundled yet, so both fall back to the platform's
// default notification sound until it's added).
const ADHAN_SOUND_IOS_FILENAME = 'adhan.wav';
const ADHAN_SOUND_ANDROID_RESOURCE = 'adhan';
const ADHAN_CHANNEL_ID = 'prayer-adhan';

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
 * On Android 8+, notification sound is controlled by the channel, not the
 * individual notification - so the adhan channel needs to exist before any
 * notification references it. Safe to call repeatedly (setNotificationChannelAsync
 * upserts) and safe to call before adhan.wav exists on disk (falls back to
 * the channel's default sound rather than throwing).
 */
export async function ensureAdhanChannel(): Promise<void> {
  if (Platform.OS !== 'android') return;
  try {
    await Notifications.setNotificationChannelAsync(ADHAN_CHANNEL_ID, {
      name: 'Prayer adhan',
      importance: Notifications.AndroidImportance.HIGH,
      sound: ADHAN_SOUND_ANDROID_RESOURCE,
    });
  } catch {
    // Missing raw/adhan resource (not added yet) - keep going with whatever
    // sound the channel already has rather than crashing.
  }
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
  const endingReminderPrefs = await loadEndingReminderPrefs();
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
        sound: ADHAN_SOUND_IOS_FILENAME,
      },
      trigger: {
        type: Notifications.SchedulableTriggerInputTypes.DATE,
        date: entry.date,
        channelId: ADHAN_CHANNEL_ID,
      },
    });
  }

  if (endingReminderPrefs.enabled) {
    const windows = getTodayPrayerWindows(islandId);

    for (const window of windows) {
      if (!prefs[window.call as Exclude<PrayerName, 'sunrise'>]) continue;

      const reminderDate = new Date(window.end.getTime() - endingReminderPrefs.minutesBefore * 60_000);
      if (reminderDate.getTime() <= now.getTime()) continue;
      // Guards against a configured lead time longer than the window itself
      // (e.g. Asr-to-Maghrib can run under 20 minutes near the equator in
      // some seasons) firing the reminder before the prayer has even started.
      if (reminderDate.getTime() <= window.start.getTime()) continue;

      await Notifications.scheduleNotificationAsync({
        content: {
          title: i18n.t('settings.endingSoonTitle', { prayer: i18n.t(`prayers.${window.call}`) }),
          body: i18n.t('settings.endingSoonBody', {
            prayer: i18n.t(`prayers.${window.call}`),
            minutes: endingReminderPrefs.minutesBefore,
          }),
        },
        trigger: {
          type: Notifications.SchedulableTriggerInputTypes.DATE,
          date: reminderDate,
        },
      });
    }
  }
}

/**
 * TEMPORARY dev/test helper - fires one local notification a few seconds
 * from now using the same adhan sound/channel as real prayer notifications,
 * so it can be verified on-device (lock screen, background, sound) without
 * waiting for an actual prayer time. Wired to a button in Settings; remove
 * both once the adhan sound is confirmed working end to end.
 */
export async function sendTestAdhanNotification(secondsFromNow = 5): Promise<void> {
  const granted = await requestNotificationPermissions();
  if (!granted) throw new Error('Notification permission not granted');

  await ensureAdhanChannel();

  await Notifications.scheduleNotificationAsync({
    content: {
      title: i18n.t('settings.testAdhanTitle'),
      body: i18n.t('settings.testAdhanBody'),
      sound: ADHAN_SOUND_IOS_FILENAME,
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.DATE,
      date: new Date(Date.now() + secondsFromNow * 1000),
      channelId: ADHAN_CHANNEL_ID,
    },
  });
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
