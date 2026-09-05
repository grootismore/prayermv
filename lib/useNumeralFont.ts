import { useFonts, SpaceGrotesk_600SemiBold, SpaceGrotesk_700Bold } from '@expo-google-fonts/space-grotesk';

/**
 * Numbers only (countdown, prayer times, calendar digits) - never applied
 * to translated text, since a Latin display font has no Thaana or Arabic
 * glyphs and dv/ar strings would render blank. Returns whether the font is
 * ready yet; callers apply it conditionally so there's no splash-screen
 * gate to get wrong - text just upgrades to the custom font once loaded.
 */
export function useNumeralFont(): boolean {
  const [loaded] = useFonts({ SpaceGrotesk_600SemiBold, SpaceGrotesk_700Bold });
  return loaded;
}

export const numeralFont = {
  bold: 'SpaceGrotesk_700Bold',
  semibold: 'SpaceGrotesk_600SemiBold',
} as const;
