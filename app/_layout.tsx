import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';

import { SettingsProvider } from '../context/SettingsContext';
import {
  ensureAdhanChannel,
  registerBackgroundRescheduleTask,
  rescheduleTodayNotifications,
} from '../lib/notifications';

// Keep the native splash screen up until the root Index route explicitly
// hides it (once settings have finished loading) - see app/index.tsx.
SplashScreen.preventAutoHideAsync();
SplashScreen.setOptions({ duration: 400, fade: true });

export default function RootLayout() {
  useEffect(() => {
    (async () => {
      await ensureAdhanChannel();
      await registerBackgroundRescheduleTask();
      await rescheduleTodayNotifications();
    })();
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <SettingsProvider>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="onboarding" />
            <Stack.Screen name="(tabs)" />
          </Stack>
        </SettingsProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
