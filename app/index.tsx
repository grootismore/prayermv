import { useEffect } from 'react';
import { Redirect } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';

import { useSettings } from '../context/SettingsContext';
import { useThaanaFonts } from '../lib/thaanaFont';

export default function Index() {
  const { isLoaded, island } = useSettings();
  const fontsReady = useThaanaFonts();

  // The native splash screen (configured via the expo-splash-screen plugin
  // in app.config.js) stays visible - kept alive by preventAutoHideAsync()
  // in _layout.tsx - until settings finish loading, so there's no flash of
  // an empty/loading screen underneath it. The Dhivehi font loads behind it
  // too, so Dhivehi text never flashes the system face first.
  useEffect(() => {
    if (isLoaded && fontsReady) {
      SplashScreen.hideAsync();
    }
  }, [isLoaded, fontsReady]);

  if (!isLoaded || !fontsReady) {
    return null;
  }

  return <Redirect href={island ? '/(tabs)' : '/onboarding'} />;
}
