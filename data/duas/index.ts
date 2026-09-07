import type { Dua, DuaCategory } from '../../types/dua';
import { DUA_CATEGORIES } from './categories';
import { CLOTHING_DUAS } from './content/clothing';
import { DAILY_LIFE_DUAS } from './content/daily-life';
import { DISTRESS_DUAS } from './content/distress';
import { FAMILY_DUAS } from './content/family';
import { FOOD_FASTING_DUAS } from './content/food-fasting';
import { HAJJ_UMRAH_DUAS } from './content/hajj-umrah';
import { HOME_DUAS } from './content/home';
import { ILLNESS_DEATH_DUAS } from './content/illness-death';
import { MARRIAGE_DUAS } from './content/marriage';
import { MORNING_EVENING_DUAS } from './content/morning-evening';
import { MOSQUE_ADHAN_DUAS } from './content/mosque-adhan';
import { PROTECTION_DUAS } from './content/protection';
import { PURIFICATION_DUAS } from './content/purification';
import { REMEMBRANCE_DUAS } from './content/remembrance';
import { REPENTANCE_DUAS } from './content/repentance';
import { SALAH_DUAS } from './content/salah';
import { SLEEP_DUAS } from './content/sleep';
import { SNEEZING_GREETING_DUAS } from './content/sneezing-greeting';
import { SOCIAL_DUAS } from './content/social';
import { TRAVEL_DUAS } from './content/travel';
import { WEATHER_DUAS } from './content/weather';
import { WITR_DUAS } from './content/witr';

export { DUA_CATEGORIES };

/**
 * Every dua/dhikr known to the app, grouped by the new Hisn al-Muslim
 * category order (see CONTENT_REVIEW.md for the dataset switch from the
 * Masnun Dua dataset), including anything a content reviewer has flagged
 * as wrong - see ALL_DUAS below for what actually ships. Exported (rather
 * than kept private) only so scripts/validateDuas.ts and
 * scripts/exportDuasForReview.ts can see flagged entries too - a flagged
 * dua still needs its structure checked and still needs to appear in the
 * review tool so a reviewer can revisit it later. Runtime app code should
 * import ALL_DUAS, never this.
 */
export const EVERY_DUA: Dua[] = [
  ...MORNING_EVENING_DUAS,
  ...SLEEP_DUAS,
  ...SALAH_DUAS,
  ...WITR_DUAS,
  ...MOSQUE_ADHAN_DUAS,
  ...PURIFICATION_DUAS,
  ...CLOTHING_DUAS,
  ...HOME_DUAS,
  ...FOOD_FASTING_DUAS,
  ...TRAVEL_DUAS,
  ...FAMILY_DUAS,
  ...MARRIAGE_DUAS,
  ...SOCIAL_DUAS,
  ...SNEEZING_GREETING_DUAS,
  ...ILLNESS_DEATH_DUAS,
  ...DISTRESS_DUAS,
  ...PROTECTION_DUAS,
  ...REPENTANCE_DUAS,
  ...REMEMBRANCE_DUAS,
  ...WEATHER_DUAS,
  ...HAJJ_UMRAH_DUAS,
  ...DAILY_LIFE_DUAS,
];

/**
 * Every dua/dhikr actually shown in the app - EVERY_DUA with anything a
 * human content reviewer has flagged as wrong removed entirely, so a
 * flagged entry can't leak into search, favourites, or category counts
 * while it's unresolved (see DuaContentReview.flagged in types/dua.ts and
 * the review-tool workflow in data/duas/CONTENT_REVIEW.md). This is
 * strictly opt-out - everything not yet reviewed still shows - never a
 * "hide until approved" gate.
 */
export const ALL_DUAS: Dua[] = EVERY_DUA.filter((dua) => !dua.contentReview?.flagged);

const categoriesById = new Map<string, DuaCategory>(DUA_CATEGORIES.map((c) => [c.id, c]));
const duasById = new Map<string, Dua>(ALL_DUAS.map((d) => [d.id, d]));

export function getDuaCategoryById(categoryId: string): DuaCategory | undefined {
  return categoriesById.get(categoryId);
}

export function getDuaById(duaId: string): Dua | undefined {
  return duasById.get(duaId);
}

/** Duas for a category, in the order they're authored in the source file. */
export function getDuasByCategory(categoryId: string): Dua[] {
  return ALL_DUAS.filter((d) => d.categoryId === categoryId);
}

export function getDuaCategoriesSorted(): DuaCategory[] {
  return [...DUA_CATEGORIES].sort((a, b) => a.order - b.order);
}

/**
 * The single most representative dua for the morning/evening featured cards on
 * the Duas home screen. The dataset combines morning and evening adhkar into one
 * category (`morning-evening`), so these pick the first entry in that
 * category whose English title says which time of day it's for, rather than
 * relying on separate morning/evening arrays like the old curated content did.
 */
export function getFeaturedMorningDua(): Dua | undefined {
  const duas = getDuasByCategory('morning-evening');
  return duas.find((d) => /morning/i.test(d.title.en)) ?? duas[0];
}

export function getFeaturedEveningDua(): Dua | undefined {
  const duas = getDuasByCategory('morning-evening');
  return duas.find((d) => /evening/i.test(d.title.en)) ?? duas[1];
}
