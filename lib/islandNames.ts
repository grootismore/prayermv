import type { AppLanguage } from './storage';
import type { Island } from './prayerTimes';
import { toThaana, ATOLL_THAANA } from './thaanaTransliterate';
import { toArabic, ATOLL_ARABIC } from './arabicTransliterate';

const islandNameCache = new Map<string, string>();

/** The island's name, localized: Thaana for Dhivehi, phonetic Arabic for Arabic, unchanged for English. */
export function localizedIslandName(island: Island, language: AppLanguage): string {
  if (language === 'en') return island.island;

  const key = `${language}:${island.island}`;
  const cached = islandNameCache.get(key);
  if (cached) return cached;

  const result = language === 'dv' ? toThaana(island.island) : toArabic(island.island);
  islandNameCache.set(key, result);
  return result;
}

/** The atoll code (e.g. "K.", "HA."), localized. */
export function localizedAtollName(atollCode: string, language: AppLanguage): string {
  if (language === 'en') return atollCode;
  if (language === 'dv') return ATOLL_THAANA[atollCode] ?? atollCode;
  return ATOLL_ARABIC[atollCode] ?? atollCode;
}
