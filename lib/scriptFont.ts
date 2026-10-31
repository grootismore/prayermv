import type { ReactNode } from 'react';
import { StyleSheet, type StyleProp, type TextStyle } from 'react-native';
import { useFonts } from 'expo-font';
import {
  InterTight_400Regular,
  InterTight_500Medium,
  InterTight_600SemiBold,
  InterTight_700Bold,
  InterTight_800ExtraBold,
} from '@expo-google-fonts/inter-tight';

/**
 * Every script gets a named face, instead of whatever the OS falls back to:
 *
 * - English (and all Latin letters and digits): Inter Tight, an open-licence
 *   (OFL) tighter-spaced Inter, bundled for both platforms. It stands in for
 *   SF Compact, which apps can't reference on iOS and Apple's licence
 *   doesn't allow bundling in a public repo or on Android. Four weights
 *   (regular, medium, semibold, bold) plus extra-bold, mapped from the
 *   style's fontWeight.
 *
 * Dhivehi and Arabic, both supplied by the project owner:
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

/** Inter Tight's families, one per weight (custom fonts have no weight axis on Android). Also used for the app's numerals. */
export const INTER = {
  regular: 'InterTight_400Regular',
  medium: 'InterTight_500Medium',
  semibold: 'InterTight_600SemiBold',
  bold: 'InterTight_700Bold',
  heavy: 'InterTight_800ExtraBold',
} as const;

const THAANA = /[\u0780-\u07BF]/;
const LATIN = /[A-Za-z0-9]/;
const ARABIC = /[\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF]/;

/** Loads every face; the root index route holds the splash screen until they are ready. */
export function useScriptFonts(): boolean {
  const [loaded] = useFonts({
    [THAANA_FAMILY]: require('../assets/fonts/MvMAGRoundBold.otf'),
    [ARABIC_FAMILY]: require('../assets/fonts/UthmanicDouri.ttf'),
    [INTER.regular]: InterTight_400Regular,
    [INTER.medium]: InterTight_500Medium,
    [INTER.semibold]: InterTight_600SemiBold,
    [INTER.bold]: InterTight_700Bold,
    [INTER.heavy]: InterTight_800ExtraBold,
  });
  return loaded;
}

function interFor(weight: TextStyle['fontWeight']): string {
  switch (String(weight ?? '400')) {
    case '500':
      return INTER.medium;
    case '600':
      return INTER.semibold;
    case '700':
    case 'bold':
      return INTER.bold;
    case '800':
    case '900':
      return INTER.heavy;
    default:
      return INTER.regular;
  }
}

/** The family for the script a piece of text is written in: Thaana first (it may include Arabic punctuation), then Arabic, then Latin letters and digits; null for anything else (symbols, emoji). */
function familyForText(text: string, weight: TextStyle['fontWeight']): string | null {
  if (THAANA.test(text)) return THAANA_FAMILY;
  if (ARABIC.test(text)) return ARABIC_FAMILY;
  if (LATIN.test(text)) return interFor(weight);
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
 * the style already names a family (explicit numerals, dua text) or the text
 * is neither Thaana, Arabic nor Latin.
 */
export function withScriptFont(style: StyleProp<TextStyle>, text: string): StyleProp<TextStyle> {
  const flat = StyleSheet.flatten(style);
  const family = familyForText(text, flat?.fontWeight);
  if (!family) return style;
  if (flat?.fontFamily) return style;
  // fontWeight 'normal' so the OS doesn't synthesize extra bold on top of a face that is already the right weight.
  return [style, { fontFamily: family, fontWeight: 'normal' }];
}
