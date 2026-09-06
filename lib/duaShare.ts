import { Share } from 'react-native';

import type { Dua } from '../types/dua';

export interface DuaShareTextOptions {
  /** Localized title text, already resolved to the caller's chosen language. */
  titleText: string;
  /** The currently selected meaning (translation or, for the featured-card case, benefits), already resolved. */
  translationText: string;
  showTransliteration: boolean;
  /** e.g. "Shared from Noor+" - passed in already localized rather than imported from i18n here, so this stays a pure, dependency-free function. */
  attribution: string;
}

/**
 * Builds the plain-text body for sharing a dua - title, Arabic, optional
 * transliteration, the selected meaning, source/reference, and a Noor+
 * attribution line. Deliberately excludes internal-only fields like
 * contentReview/needsReview, which must never leave the app.
 */
export function buildDuaShareText(dua: Dua, options: DuaShareTextOptions): string {
  const lines: string[] = [options.titleText, '', dua.arabic];

  if (options.showTransliteration) {
    lines.push('', dua.transliteration);
  }

  lines.push('', options.translationText);

  const referenceLine = dua.source.grading
    ? `— ${dua.source.reference} (${dua.source.grading})`
    : `— ${dua.source.reference}`;
  lines.push('', referenceLine);

  lines.push('', options.attribution);

  return lines.join('\n');
}

export async function shareDua(dua: Dua, options: DuaShareTextOptions): Promise<void> {
  const message = buildDuaShareText(dua, options);
  await Share.share({ message });
}
