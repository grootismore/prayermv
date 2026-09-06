import type { Dua } from '../types/dua';

/**
 * Pure, dependency-free search utilities for the Duas & Adhkar feature -
 * no React Native imports, so these are trivially unit-testable (see the
 * "Tests and validation" notes in the feature's implementation plan) even
 * though this repo has no test runner configured yet.
 */

/**
 * Arabic combining diacritics (harakat/tanwin/shadda/sukun/superscript
 * alef) and Quranic small high annotation marks, plus tatweel - stripped
 * for search only. The displayed Arabic (Dua.arabic) is never touched;
 * only a throwaway search index is.
 *
 * Written as explicit \u escapes rather than literal combining characters
 * in a regex range, since combining marks render invisibly (or attached to
 * a preceding dotted circle) and can't be eyeballed as a literal character
 * range with any confidence:
 *   ً-ٟ  harakat, tanwin, shadda, sukun, maddah, hamza above/below
 *   ٰ         superscript alef (dagger alif)
 *   ۖ-ۜ, ۟-ۤ, ۧ, ۨ, ۪-ۭ
 *                  Quranic annotation / small high marks (waqf, sajda, etc.)
 *   ـ         tatweel (elongation) - not a diacritic, but harmless
 *                  stylistic padding that should never affect a match
 */
const ARABIC_DIACRITICS_PATTERN =
  /[ً-ٰٟۖ-ۜ۟-۪ۤۧۨ-ۭـ]/g;

/** Lowercases, strips Arabic diacritics, and collapses/trims whitespace - the single normalization pass every piece of searchable text goes through before comparison. */
export function normalizeForSearch(text: string): string {
  return text
    .replace(ARABIC_DIACRITICS_PATTERN, '')
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .trim();
}

/** Every field of a dua that free-text search should match against, already normalized. */
export function getDuaSearchableFields(dua: Dua): string[] {
  return [
    dua.title.en,
    dua.title.dv,
    dua.arabic,
    dua.transliteration,
    dua.translation.en,
    dua.translation.dv,
    ...(dua.searchTerms ?? []),
  ].map(normalizeForSearch);
}

/** Whether a dua matches a (raw, un-normalized) search query - true for an empty/whitespace-only query. */
export function matchesDuaQuery(dua: Dua, query: string): boolean {
  const normalizedQuery = normalizeForSearch(query);
  if (!normalizedQuery) return true;
  return getDuaSearchableFields(dua).some((field) => field.includes(normalizedQuery));
}

/** Filters a list of duas by a free-text query across title/arabic/transliteration/translation/searchTerms. */
export function searchDuas(duas: Dua[], query: string): Dua[] {
  const normalizedQuery = normalizeForSearch(query);
  if (!normalizedQuery) return duas;
  return duas.filter((dua) => matchesDuaQuery(dua, query));
}
