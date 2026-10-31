import type { ReactNode } from 'react';
import { StyleSheet, type StyleProp, type TextStyle } from 'react-native';
import { useFonts } from 'expo-font';

/**
 * Dhivehi and Arabic text: without a named family, iOS and Android fall back
 * to whatever Thaana/Arabic face the OS ships. The app names its own
 * instead, both supplied by the project owner:
 *
 * - Dhivehi: MV MAG Round (assets/fonts/MvMAGRoundBold.otf). Full Thaana
 *   block plus digits and basic punctuation, no Latin letters; one bold
 *   weight, so hierarchy comes from size and colour.
 * - Arabic: KFGQPC Douri Uthmanic Script (assets/fonts/UthmanicDouri.ttf).
 *   Full Arabic letters, harakat and Quranic marks, and Latin and
 *   Arabic-Indic digits; no Latin letters, no ﷺ (U+FDFA), which fall back to
 *   the system font. One regular weight.
 *
 * Applied by components/Text.tsx and TextInput.tsx according to the script
 * the text itself is written in (not the app's UI language), so mixed
 * content is right everywhere - the language picker's "ދިވެހި" beside
 * "العربية", a Dhivehi dua translation under an Arabic UI - and by dua
 * text everywhere via ARABIC_FAMILY.
 */
export const THAANA_FAMILY = 'MvMAGRound';
export const ARABIC_FAMILY = 'UthmanicDouri';

const THAANA = /[\u0780-\u07BF]/;
const ARABIC = /[\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF]/;

/** Loads both faces; the root index route holds the splash screen until they are ready. */
export function useScriptFonts(): boolean {
  const [loaded] = useFonts({
    [THAANA_FAMILY]: require('../assets/fonts/MvMAGRoundBold.otf'),
    [ARABIC_FAMILY]: require('../assets/fonts/UthmanicDouri.ttf'),
  });
  return loaded;
}

/** The font family for the script a piece of text is written in: Thaana first (it may include Arabic punctuation), then Arabic; null for Latin, digits and anything else. */
function familyForText(text: string): string | null {
  if (THAANA.test(text)) return THAANA_FAMILY;
  if (ARABIC.test(text)) return ARABIC_FAMILY;
  return null;
}

/** Joins the plain string and number pieces of a component's children; element children (nested Text) pick their own font. */
export function textOf(node: ReactNode): string {
  if (typeof node === 'string') return node;
  if (typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(textOf).join('');
  return '';
}

/**
 * Adds the font for the script `text` is written in to a text style, unless
 * the style already names a family (the Latin numeral face, dua text) or
 * the text is Latin-only.
 */
export function withScriptFont(style: StyleProp<TextStyle>, text: string): StyleProp<TextStyle> {
  const family = familyForText(text);
  if (!family) return style;
  const flat = StyleSheet.flatten(style);
  if (flat?.fontFamily) return style;
  // fontWeight 'normal' so the OS doesn't synthesize extra bold on a single-weight face.
  return [style, { fontFamily: family, fontWeight: 'normal' }];
}
