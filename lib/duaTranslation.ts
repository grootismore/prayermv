import type { AppLanguage } from './storage';
import type { Dua, DuaTranslationLanguage } from '../types/dua';

/**
 * Resolves the 'auto' dua-translation preference to a concrete en/dv
 * language, based on the app's interface language - kept separate from
 * AppLanguage itself per the feature spec (a user reading the app in
 * Arabic still needs *some* meaning shown, since the Quranic/hadith Arabic
 * text is the original, not a translation of it, so Arabic falls back to
 * English rather than showing nothing).
 */
export function resolveDuaTranslationLanguage(
  translationLanguage: DuaTranslationLanguage,
  appLanguage: AppLanguage
): 'en' | 'dv' {
  if (translationLanguage === 'en' || translationLanguage === 'dv') return translationLanguage;
  return appLanguage === 'dv' ? 'dv' : 'en';
}

export function getDuaTitleText(dua: Dua, resolvedLanguage: 'en' | 'dv'): string {
  return dua.title[resolvedLanguage];
}

export function getDuaTranslationText(dua: Dua, resolvedLanguage: 'en' | 'dv'): string {
  return dua.translation[resolvedLanguage];
}

export function getDuaBenefitsText(dua: Dua, resolvedLanguage: 'en' | 'dv'): string | undefined {
  return dua.benefits?.[resolvedLanguage];
}

/**
 * The locale key for an entry-count label ("1 entry" vs "3 entries") -
 * picked explicitly in code rather than relying on i18next's automatic
 * plural-suffix resolution, so it works the same regardless of the
 * i18next compatibilityJSON setting in lib/i18n.ts.
 */
export function getDuaEntryCountKey(count: number): 'duas.entryCountOne' | 'duas.entryCountOther' {
  return count === 1 ? 'duas.entryCountOne' : 'duas.entryCountOther';
}
