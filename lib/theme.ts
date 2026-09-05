import { Platform } from 'react-native';

// Islamic-inspired palette: deep emerald green (traditionally associated
// with Islam) and brass/gold accents on a warm parchment ground, echoing
// manuscript illumination rather than a generic flat-UI teal.
export const colors = {
  primary: '#0B6E4F',
  primaryDark: '#054533',
  primaryDeep: '#03291D',
  primaryLight: '#E4F0EA',
  background: '#FBF7EE',
  card: '#FFFFFF',
  text: '#20241F',
  textMuted: '#6E7566',
  border: '#E6DFC8',
  accent: '#C79A2E',
  gold: '#C79A2E',
  goldDeep: '#9C7A22',
  goldLight: '#F3E6C4',
};

export const radius = {
  sm: 10,
  md: 14,
  lg: 20,
  xl: 28,
  pill: 999,
};

// RN shadows need both the iOS shadow* properties and Android's `elevation`
// - a single style object with both keeps every card consistent instead of
// re-deriving these per screen.
export const shadow = {
  card: Platform.select({
    ios: {
      shadowColor: '#2B2311',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.08,
      shadowRadius: 12,
    },
    android: { elevation: 3 },
    default: {},
  }),
  hero: Platform.select({
    ios: {
      shadowColor: colors.primaryDeep,
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.3,
      shadowRadius: 22,
    },
    android: { elevation: 8 },
    default: {},
  }),
  floating: Platform.select({
    ios: {
      shadowColor: '#2B2311',
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.12,
      shadowRadius: 16,
    },
    android: { elevation: 10 },
    default: {},
  }),
};
