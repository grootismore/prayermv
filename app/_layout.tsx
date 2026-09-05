import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';

import { SettingsProvider } from '../context/SettingsContext';
import { colors } from '../lib/theme';
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
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: colors.background }}>
      <SafeAreaProvider>
        <SettingsProvider>
          <StatusBar style="light" />
          <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: colors.background } }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="onboarding" />
            <Stack.Screen name="(tabs)" />
          </Stack>
        </SettingsProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
