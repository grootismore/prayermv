import { StyleSheet, type StyleProp, type TextStyle } from 'react-native';
import { useFonts } from 'expo-font';

/**
 * Dhivehi text: without a named family, iOS and Android fall back to the
 * Thaana face the OS ships. The app names MV MAG Round (assets/fonts/
 * MvMAGRoundBold.otf, supplied by the project owner) instead, applied by
 * components/Text.tsx and TextInput.tsx whenever the app language is
 * Dhivehi. It covers the full Thaana block plus digits and basic
 * punctuation but no Latin letters, which fall back to the system font.
 *
 * It ships in a single bold weight, so Dhivehi text is bold everywhere and
 * hierarchy comes from size and colour, not weight.
 */
export const THAANA_FAMILY = 'MvMAGRound';

export function useThaanaFonts(): boolean {
  const [loaded] = useFonts({ [THAANA_FAMILY]: require('../assets/fonts/MvMAGRoundBold.otf') });
  return loaded;
}

/** Adds the Thaana family to a text style, unless the style already names one (the Latin numeral face, the Arabic dua font). */
export function withThaanaFont(style: StyleProp<TextStyle>): StyleProp<TextStyle> {
  const flat = StyleSheet.flatten(style);
  if (flat?.fontFamily) return style;
  // fontWeight 'normal' so the OS doesn't synthesize extra bold on an already-bold face.
  return [style, { fontFamily: THAANA_FAMILY, fontWeight: 'normal' }];
}
