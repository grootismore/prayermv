import {
  useFonts,
  NotoNaskhArabic_400Regular,
  NotoNaskhArabic_500Medium,
  NotoNaskhArabic_600SemiBold,
  NotoNaskhArabic_700Bold,
} from '@expo-google-fonts/noto-naskh-arabic';

/**
 * The Arabic dua/dhikr text font - a proper Arabic typeface with full
 * harakat support, distinct from Space Grotesk (lib/useNumeralFont.ts,
 * numerals only - no Arabic glyphs at all) and from the system font used
 * for Dhivehi/English UI text. Returns whether the font is ready yet, the
 * same conditional-upgrade pattern as useNumeralFont - the reading screen
 * renders immediately with the system fallback and swaps in Noto Naskh
 * Arabic once loaded, rather than gating on it.
 */
export function useDuaArabicFont(): boolean {
  const [loaded] = useFonts({
    NotoNaskhArabic_400Regular,
    NotoNaskhArabic_500Medium,
    NotoNaskhArabic_600SemiBold,
    NotoNaskhArabic_700Bold,
  });
  return loaded;
}

export const duaArabicFont = {
  regular: 'NotoNaskhArabic_400Regular',
  medium: 'NotoNaskhArabic_500Medium',
  semibold: 'NotoNaskhArabic_600SemiBold',
  bold: 'NotoNaskhArabic_700Bold',
} as const;
