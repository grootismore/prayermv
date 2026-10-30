import { Platform } from 'react-native';

/**
 * Noor+ design tokens - the "Liyelaa" world, after Maldivian lacquerwork
 * (liyelaa jehun): vermilion and ochre incised on lacquer-black ("Lacquer
 * Night") or on pale coral-stone limewash ("Limewash Day"). Centralized here so no screen hardcodes a color, spacing,
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
  /** The hero vessel (Home's next-prayer card): one committed vermilion field used the same way in both themes. */
  heroBackground: string;
  /** Text on `heroBackground`. */
  heroText: string;
  /** Secondary text on `heroBackground` - tinted from the field, not gray. */
  heroTextMuted: string;
}

// Lacquer-black is warm (a hint of oxblood), never blue - vermilion is the
// one committed colour, ochre the quiet accent. Every text/surface pair
// below was picked for >=4.5:1 (textMuted on background is ~5.4:1).
export const darkColors: ThemeColors = {
  background: '#150E0B',
  backgroundDeep: '#0E0807',
  surface: '#21150F',
  surfaceElevated: '#2C1C14',
  surfacePressed: '#38241A',
  primary: '#FF7355',
  primaryMuted: '#E85A3C',
  primarySoft: 'rgba(255, 115, 85, 0.14)',
  onPrimary: '#150E0B',
  gold: '#F5B83D',
  goldMuted: '#C99528',
  goldSoft: 'rgba(245, 184, 61, 0.14)',
  textPrimary: '#F6EEE2',
  textSecondary: '#CBBBA9',
  textMuted: '#9C8978',
  border: 'rgba(246, 238, 226, 0.16)',
  separator: 'rgba(246, 238, 226, 0.10)',
  overlay: 'rgba(14, 8, 7, 0.82)',
  success: '#6FCF8E',
  warning: '#F5B83D',
  danger: '#FF6B7A',
  heroBackground: '#FF6040',
  heroText: '#150E0B',
  heroTextMuted: '#4A1D12',
};

// Day is limewash coral-stone (a cool, slightly green grey - the walls of
// Hukuru Miskiy), not cream: outdoors in tropical glare a flat pale ground
// with deep ink reads best. primary/gold are deepened a step so they hold
// contrast on it.
export const lightColors: ThemeColors = {
  background: '#ECEFEA',
  backgroundDeep: '#DEE3DC',
  surface: '#F7F8F4',
  surfaceElevated: '#FFFFFF',
  surfacePressed: '#E1E6DE',
  primary: '#B5301A',
  primaryMuted: '#C8341B',
  primarySoft: 'rgba(181, 48, 26, 0.10)',
  onPrimary: '#FFFFFF',
  gold: '#8A5A00',
  goldMuted: '#6E4700',
  goldSoft: 'rgba(138, 90, 0, 0.12)',
  textPrimary: '#1B120E',
  textSecondary: '#55473E',
  textMuted: '#76675C',
  border: 'rgba(27, 18, 14, 0.16)',
  separator: 'rgba(27, 18, 14, 0.09)',
  overlay: 'rgba(236, 239, 234, 0.88)',
  success: '#1F7A45',
  warning: '#8A5A00',
  danger: '#B3261E',
  heroBackground: '#C8341B',
  heroText: '#FFFFFF',
  heroTextMuted: '#FFF0EB',
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
  md: 14,
  lg: 16,
  xl: 24,
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
