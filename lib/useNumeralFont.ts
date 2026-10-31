import { INTER, useScriptFonts } from './scriptFont';

/**
 * Numbers only (countdown, prayer times, calendar digits) - never applied
 * to translated text, since a Latin display font has no Thaana or Arabic
 * glyphs and dv/ar strings would render blank. These are Inter Tight, the
 * same family as all other English text (see lib/scriptFont.ts), which is
 * loaded behind the splash screen; this hook just reports whether it is
 * ready so callers can keep applying the face conditionally.
 */
export function useNumeralFont(): boolean {
  return useScriptFonts();
}

export const numeralFont = {
  bold: INTER.bold,
  semibold: INTER.semibold,
} as const;
