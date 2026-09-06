import { Platform } from 'react-native';

/**
 * Noor+ design tokens - a lagoon-cyan and sunrise-gold palette over either
 * a midnight-navy ("Ocean Night") or a pale sky/foam ("Ocean Day")
 * background. Centralized here so no screen hardcodes a color, spacing,
 * radius, or type value directly. Which palette is active is resolved by
 * lib/useTheme.ts (from the user's Appearance setting + the system
 * scheme) - screens/components should get `colors` from `useTheme()`,
 * never import a fixed palette from here directly.
 */
export interface ThemeColors {
  background: string;
  backgroundDeep: string;
  surface: string;
  surfaceElevated: string;
  surfacePressed: string;
  primary: string;
  primaryMuted: string;
  primarySoft: string;
  /** Text/icon color for content placed on top of a `primary`-filled surface (a filled button, a selected pill, a "today" marker). */
  onPrimary: string;
  gold: string;
  goldMuted: string;
  goldSoft: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  border: string;
  separator: string;
  overlay: string;
  success: string;
  warning: string;
  danger: string;
}

// background/backgroundDeep are matched to the navy baked into the
// official Noor+ app icon/logo mark, so the icon, splash screen, and
// in-app screens all read as the same navy rather than three near-misses.
export const darkColors: ThemeColors = {
  background: '#011C53',
  backgroundDeep: '#010F2E',
  surface: '#072952',
  surfaceElevated: '#0A3565',
  surfacePressed: '#0D4178',
  primary: '#13E2E6',
  primaryMuted: '#0AA8C6',
  primarySoft: 'rgba(19, 226, 230, 0.12)',
  onPrimary: '#010F2E',
  gold: '#FFC83D',
  goldMuted: '#D8A82D',
  goldSoft: 'rgba(255, 200, 61, 0.12)',
  textPrimary: '#F7FBFF',
  textSecondary: '#A9C3E2',
  textMuted: '#7894B5',
  border: 'rgba(53, 190, 255, 0.24)',
  separator: 'rgba(130, 190, 235, 0.15)',
  overlay: 'rgba(1, 14, 36, 0.78)',
  success: '#13E2C5',
  warning: '#FFC83D',
  danger: '#FF6675',
};

// Not just an inversion of the dark palette - primary/gold are deepened a
// step from their dark-mode values so they hold contrast against a light
// background instead of washing out, the way the bright cyan/gold read
// fine floating on midnight navy but wouldn't on white.
export const lightColors: ThemeColors = {
  background: '#F4F9FF',
  backgroundDeep: '#E4EEFB',
  surface: '#FFFFFF',
  surfaceElevated: '#FFFFFF',
  surfacePressed: '#E9F2FC',
  primary: '#0A8CA6',
  primaryMuted: '#0AA8C6',
  primarySoft: 'rgba(10, 140, 166, 0.10)',
  onPrimary: '#FFFFFF',
  gold: '#B87A0A',
  goldMuted: '#8F600A',
  goldSoft: 'rgba(184, 122, 10, 0.12)',
  textPrimary: '#0B1E3D',
  textSecondary: '#48607F',
  textMuted: '#7C8FA6',
  border: 'rgba(10, 90, 140, 0.18)',
  separator: 'rgba(10, 60, 110, 0.10)',
  overlay: 'rgba(228, 238, 251, 0.85)',
  success: '#0E8E77',
  warning: '#B87A0A',
  danger: '#D63B52',
};

/** 4/8pt spacing scale - use these instead of ad-hoc margin/padding numbers. */
export const spacing = {
  xxs: 4,
  xs: 8,
  sm: 12,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 40,
};

export const radius = {
  sm: 10,
  md: 16,
  lg: 22,
  xl: 28,
  pill: 999,
};

export const typography = {
  size: {
    xs: 12,
    sm: 13,
    base: 15,
    md: 16,
    lg: 18,
    xl: 22,
    xxl: 28,
    display: 34,
  },
  weight: {
    regular: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
    heavy: '800' as const,
  },
};

/** Standard icon sizes - keep glyphs crisp and consistent across screens. */
export const iconSize = {
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
};

/** Apple HIG / Material minimum comfortable touch target. */
export const minTouchTarget = 44;

/** Default horizontal screen padding and card internal padding. */
export const screenPadding = 20;
export const cardPadding = 20;

export const tabBarMetrics = {
  height: 78,
  iconSize: 22,
  topRadius: radius.xl,
};

// RN shadows need both the iOS shadow* properties and Android's `elevation`
// - a single style object with both keeps every card consistent instead of
// re-deriving these per screen. Plain black in both themes (rather than
// tinted with the background) - a shadow represents light falling behind
// the card, which reads as depth regardless of whether the page under it
// is light or dark, the same way most native UIs keep shadows black-based
// even in dark mode.
export const shadow = {
  card: Platform.select({
    ios: {
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.16,
      shadowRadius: 12,
    },
    android: { elevation: 3 },
    default: {},
  }),
  hero: Platform.select({
    ios: {
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.2,
      shadowRadius: 22,
    },
    android: { elevation: 8 },
    default: {},
  }),
  floating: Platform.select({
    ios: {
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.18,
      shadowRadius: 16,
    },
    android: { elevation: 10 },
    default: {},
  }),
};
