import { Platform } from 'react-native';
import Constants from 'expo-constants';
import { ExtensionStorage } from '@bacons/apple-targets';

const WIDGET_KIND = 'PrayerWidget';
const SELECTED_ISLAND_KEY = 'selectedIslandId';

function appGroupId(): string | null {
  const id = Constants.expoConfig?.extra?.iosAppGroupId;
  return typeof id === 'string' ? id : null;
}

/**
 * Mirrors the app's selected island into the shared App Group storage the
 * iOS widget reads from (see targets/widget/PrayerData.swift's
 * appSelectedIslandId()), so a widget that hasn't been explicitly given its
 * own island in its own Edit Widget UI always matches whatever island the
 * app itself currently has selected. No-ops on Android/Expo Go, where
 * there's neither a widget nor the native module backing this.
 */
export function syncWidgetIsland(islandId: number | null): void {
  if (Platform.OS !== 'ios') return;
  const group = appGroupId();
  if (!group) return;
  try {
    const storage = new ExtensionStorage(group);
    if (islandId == null) {
      storage.remove(SELECTED_ISLAND_KEY);
    } else {
      storage.set(SELECTED_ISLAND_KEY, islandId);
    }
    ExtensionStorage.reloadWidget(WIDGET_KIND);
  } catch {
    // Best-effort - the widget just keeps showing whatever it last had.
  }
}
