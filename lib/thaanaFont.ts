import { StyleSheet, type StyleProp, type TextStyle } from 'react-native';
import {
  useFonts,
  NotoSansThaana_400Regular,
  NotoSansThaana_500Medium,
  NotoSansThaana_600SemiBold,
  NotoSansThaana_700Bold,
  NotoSansThaana_800ExtraBold,
} from '@expo-google-fonts/noto-sans-thaana';

/**
 * Dhivehi text: iOS and Android fall back to whatever Thaana face the OS
 * ships (a slanted calligraphic one on iOS) unless a family is named, so the
 * app names Noto Sans Thaana - upright, even-weighted, and available in the
 * five weights the UI uses. Applied by components/Text.tsx and TextInput.tsx
 * whenever the app language is Dhivehi.
 */
export function useThaanaFonts(): boolean {
  const [loaded] = useFonts({
    NotoSansThaana_400Regular,
    NotoSansThaana_500Medium,
    NotoSansThaana_600SemiBold,
    NotoSansThaana_700Bold,
    NotoSansThaana_800ExtraBold,
  });
  return loaded;
}

// Custom fonts have one family per weight (Android won't pick a weight
// within a family), so fontWeight is translated to the matching family.
function familyFor(weight: TextStyle['fontWeight']): string {
  switch (String(weight ?? '400')) {
    case '500':
      return 'NotoSansThaana_500Medium';
    case '600':
      return 'NotoSansThaana_600SemiBold';
    case '700':
    case 'bold':
      return 'NotoSansThaana_700Bold';
    case '800':
    case '900':
      return 'NotoSansThaana_800ExtraBold';
    default:
      return 'NotoSansThaana_400Regular';
  }
}

/** Adds the Thaana family to a text style, unless the style already names one (the Latin numeral face, the Arabic dua font). */
export function withThaanaFont(style: StyleProp<TextStyle>): StyleProp<TextStyle> {
  const flat = StyleSheet.flatten(style);
  if (flat?.fontFamily) return style;
  return [style, { fontFamily: familyFor(flat?.fontWeight), fontWeight: 'normal' }];
}
