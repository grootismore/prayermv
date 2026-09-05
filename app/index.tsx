import { useEffect } from 'react';
import { Redirect } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';

import { useSettings } from '../context/SettingsContext';

export default function Index() {
  const { isLoaded, island } = useSettings();

  // The native splash screen (configured via the expo-splash-screen plugin
  // in app.config.js) stays visible - kept alive by preventAutoHideAsync()
  // in _layout.tsx - until settings finish loading, so there's no flash of
  // an empty/loading screen underneath it.
  useEffect(() => {
    if (isLoaded) {
      SplashScreen.hideAsync();
    }
  }, [isLoaded]);

  if (!isLoaded) {
    return null;
  }

  return <Redirect href={island ? '/(tabs)' : '/onboarding'} />;
}
