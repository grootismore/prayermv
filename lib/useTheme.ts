import { useMemo } from 'react';
import { useColorScheme } from 'react-native';

import { useSettings } from '../context/SettingsContext';
import { darkColors, lightColors, type ThemeColors } from './theme';

export interface Theme {
  colors: ThemeColors;
  /** The resolved scheme after applying the user's Appearance setting - 'system' already resolved to the device's current scheme. */
  scheme: 'light' | 'dark';
}

/** The single source of truth for "which palette is active right now" - every screen/component reads colors through this, never the static exports in lib/theme.ts directly, so they stay reactive to both the in-app Appearance setting and (in 'system' mode) the OS scheme changing live. */
export function useTheme(): Theme {
  const { themeMode } = useSettings();
  const systemScheme = useColorScheme();

  const scheme: 'light' | 'dark' =
    themeMode === 'system' ? (systemScheme === 'light' ? 'light' : 'dark') : themeMode;

  const colors = scheme === 'light' ? lightColors : darkColors;

  return { colors, scheme };
}

/**
 * Builds a StyleSheet from the active theme's colors, recomputing only
 * when the resolved colors actually change (i.e. on an appearance switch,
 * not on every render). Usage:
 *
 *   const styles = useThemedStyles(createStyles);
 *   const createStyles = (colors: ThemeColors) => StyleSheet.create({ ... });
 */
export function useThemedStyles<T>(factory: (colors: ThemeColors) => T): T {
  const { colors } = useTheme();
  return useMemo(() => factory(colors), [colors, factory]);
}
