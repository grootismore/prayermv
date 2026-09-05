import { Platform } from 'react-native';

/**
 * Noor+ "Ocean Night" design tokens - a midnight-navy, lagoon-cyan and
 * sunrise-gold palette. Centralized here so no screen hardcodes a color,
 * spacing, radius, or type value directly.
 */
export const colors = {
  // background/backgroundDeep are matched to the navy baked into the
  // official Noor+ app icon/logo mark, so the icon, splash screen, and
  // in-app screens all read as the same navy rather than three near-misses.
  background: '#011C53',
  backgroundDeep: '#010F2E',
  surface: '#072952',
  surfaceElevated: '#0A3565',
  surfacePressed: '#0D4178',
  primary: '#13E2E6',
  primaryMuted: '#0AA8C6',
  primarySoft: 'rgba(19, 226, 230, 0.12)',
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
// re-deriving these per screen. Tinted with the deep-navy background so
// they read as depth rather than a generic grey drop shadow.
export const shadow = {
  card: Platform.select({
    ios: {
      shadowColor: colors.backgroundDeep,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.35,
      shadowRadius: 12,
    },
    android: { elevation: 3 },
    default: {},
  }),
  hero: Platform.select({
    ios: {
      shadowColor: colors.backgroundDeep,
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.45,
      shadowRadius: 22,
    },
    android: { elevation: 8 },
    default: {},
  }),
  floating: Platform.select({
    ios: {
      shadowColor: colors.backgroundDeep,
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.4,
      shadowRadius: 16,
    },
    android: { elevation: 10 },
    default: {},
  }),
};
