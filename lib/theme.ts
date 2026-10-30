import { Platform } from 'react-native';

/**
 * Noor+ design tokens - emerald and mint over deep forest green ("Forest
 * Night") or a pale mint wash ("Mint Day"), meant to sit under iOS liquid
 * glass and Material surfaces. Centralized here so no screen hardcodes a
 * color, spacing, radius, or type value directly. Which palette is active
 * is resolved by lib/useTheme.ts (from the user's Appearance setting + the
 * system scheme) - screens/components should get `colors` from
 * `useTheme()`, never import a fixed palette from here directly.
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
  /** Mint fill for filled controls (primary button, selected segment, today marker) - the same bright mint in both themes. */
  fill: string;
  /** Text/icon on a `fill` surface. */
  onFill: string;
  /** Ambient screen-background gradient stops (top -> bottom). */
  bgFrom: string;
  bgTo: string;
  /** Translucent card fill used where real glass isn't available (Android, iOS < 26, Reduce Transparency). */
  glassFill: string;
  /** Hero card gradient (Home's next prayer) and its text colours. */
  heroFrom: string;
  heroTo: string;
  heroText: string;
  heroTextMuted: string;
}

// Forest Night: a deep, slightly blue-green ground (never black) so mint
// reads as light, not neon. Every text/surface pair is >= 4.5:1.
export const darkColors: ThemeColors = {
  background: '#07241E',
  backgroundDeep: '#041A15',
  surface: '#0F342B',
  surfaceElevated: '#154338',
  surfacePressed: '#1B5244',
  primary: '#5CF39A',
  primaryMuted: '#35D67B',
  primarySoft: 'rgba(92, 243, 154, 0.16)',
  onPrimary: '#04261A',
  gold: '#FFD166',
  goldMuted: '#D9AA3A',
  goldSoft: 'rgba(255, 209, 102, 0.16)',
  textPrimary: '#F2FBF6',
  textSecondary: '#B6D3C5',
  textMuted: '#92B5A5',
  border: 'rgba(255, 255, 255, 0.14)',
  separator: 'rgba(255, 255, 255, 0.09)',
  overlay: 'rgba(4, 26, 21, 0.8)',
  success: '#5CF39A',
  warning: '#FFD166',
  danger: '#FF7A85',
  fill: '#4EF08F',
  onFill: '#04261A',
  bgFrom: '#0E3D33',
  bgTo: '#051D17',
  glassFill: 'rgba(255, 255, 255, 0.08)',
  heroFrom: '#8CF7BC',
  heroTo: '#3FDC85',
  heroText: '#04261A',
  heroTextMuted: '#0B5A38',
};

// Mint Day: a pale mint wash with white cards. primary (text/icons) is a
// deep green so it holds contrast; the bright mint lives only in `fill`.
export const lightColors: ThemeColors = {
  background: '#EAF8F0',
  backgroundDeep: '#DCF1E6',
  surface: '#FFFFFF',
  surfaceElevated: '#FFFFFF',
  surfacePressed: '#E4F4EB',
  primary: '#0A7640',
  primaryMuted: '#16A05B',
  primarySoft: 'rgba(11, 127, 67, 0.10)',
  onPrimary: '#FFFFFF',
  gold: '#8A5A00',
  goldMuted: '#6E4700',
  goldSoft: 'rgba(138, 90, 0, 0.12)',
  textPrimary: '#0A2A1F',
  textSecondary: '#33564A',
  textMuted: '#4F6B5E',
  border: 'rgba(10, 42, 31, 0.12)',
  separator: 'rgba(10, 42, 31, 0.08)',
  overlay: 'rgba(234, 248, 240, 0.9)',
  success: '#0B7F43',
  warning: '#8A5A00',
  danger: '#C62828',
  fill: '#4EF08F',
  onFill: '#04261A',
  bgFrom: '#D4F5E4',
  bgTo: '#F4FBF7',
  glassFill: 'rgba(255, 255, 255, 0.72)',
  heroFrom: '#8CF7BC',
  heroTo: '#3FDC85',
  heroText: '#04261A',
  heroTextMuted: '#0B5A38',
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
  sm: 12,
  md: 18,
  lg: 24,
  xl: 32,
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
  // Cards are glass (iOS) or tonal surfaces (Android): a drop shadow behind a
  // translucent surface shows through it, so cards stay flat and are defined
  // by the glass edge or a hairline border. Only opaque objects (the hero,
  // floating buttons) carry a shadow.
  card: {},
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
