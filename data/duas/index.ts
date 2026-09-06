import type { Dua, DuaCategory } from '../../types/dua';
import { DUA_CATEGORIES } from './categories';
import { CAT_40_RABBANA_DUAS_DUAS } from './content/40-rabbana-duas';
import { ANIMALS_DUAS } from './content/animals';
import { ANXIETY_DUAS } from './content/anxiety';
import { CONDEMNATIONPRAISE_DUAS } from './content/condemnationpraise';
import { DANGER_DUAS } from './content/danger';
import { DEBT_DUAS } from './content/debt';
import { DUA_ACCEPTANCE_DUAS } from './content/dua-acceptance';
import { DUAS_EXCELLENCE_DUAS } from './content/duas-excellence';
import { DUAS_IMPORTANCE_DUAS } from './content/duas-importance';
import { DUAS_OF_HADITH_DUAS } from './content/duas-of-hadith';
import { DUAS_OF_SAHABA_DUAS } from './content/duas-of-sahaba';
import { EID_DUAS } from './content/eid';
import { EVIL_PROTECTION_DUAS } from './content/evil-protection';
import { FAMILY_DUAS } from './content/family';
import { FASTING_DUAS } from './content/fasting';
import { FOOD_DUAS } from './content/food';
import { FORGIVENESS_DUAS } from './content/forgiveness';
import { GATHERING_DUAS } from './content/gathering';
import { GRAVE_FUNERAL_DUAS } from './content/grave-funeral';
import { GREATEST_NAME_OF_ALLAH_DUAS } from './content/greatest-name-of-allah';
import { HAJJ_AND_UMRAH_DUAS } from './content/hajj-and-umrah';
import { JINNDISEASES_DUAS } from './content/jinndiseases';
import { MANNERS_DUAS } from './content/manners';
import { MARRIAGE_DUAS } from './content/marriage';
import { MASNUN_DUAS_DUAS } from './content/masnun-duas';
import { MORNING_AND_EVENING_DUAS } from './content/morning-and-evening';
import { OTHER_DUAS_DUAS } from './content/other-duas';
import { PROPHETS_DUA_DUAS } from './content/prophets-dua';
import { QURANIC_DUA_DUAS } from './content/quranic-dua';
import { RAINNATURE_DUAS } from './content/rainnature';
import { SACRIFICE_DUAS } from './content/sacrifice';
import { SALAH_DUAS } from './content/salah';
import { SICKNESS_DUAS } from './content/sickness';
import { SLEEP_DUAS } from './content/sleep';
import { TIME_OF_DUA_DUAS } from './content/time-of-dua';
import { TOILET_DUAS } from './content/toilet';
import { TRAVEL_DUAS } from './content/travel';
import { WHEN_TO_SAY_WHAT_DUAS } from './content/when-to-say-what';
import { WITR_AND_OTHER_DUAS } from './content/witr-and-other';

export { DUA_CATEGORIES };

/** Every dua/dhikr in the app, grouped by the Masnun Dua dataset's own category order. */
export const ALL_DUAS: Dua[] = [
  ...DUAS_IMPORTANCE_DUAS,
  ...DUAS_EXCELLENCE_DUAS,
  ...TIME_OF_DUA_DUAS,
  ...DUA_ACCEPTANCE_DUAS,
  ...MORNING_AND_EVENING_DUAS,
  ...SLEEP_DUAS,
  ...TOILET_DUAS,
  ...SALAH_DUAS,
  ...WITR_AND_OTHER_DUAS,
  ...GRAVE_FUNERAL_DUAS,
  ...FASTING_DUAS,
  ...TRAVEL_DUAS,
  ...HAJJ_AND_UMRAH_DUAS,
  ...SACRIFICE_DUAS,
  ...EVIL_PROTECTION_DUAS,
  ...FORGIVENESS_DUAS,
  ...MARRIAGE_DUAS,
  ...FAMILY_DUAS,
  ...DEBT_DUAS,
  ...ANXIETY_DUAS,
  ...DANGER_DUAS,
  ...CONDEMNATIONPRAISE_DUAS,
  ...MANNERS_DUAS,
  ...GATHERING_DUAS,
  ...FOOD_DUAS,
  ...ANIMALS_DUAS,
  ...RAINNATURE_DUAS,
  ...SICKNESS_DUAS,
  ...JINNDISEASES_DUAS,
  ...QURANIC_DUA_DUAS,
  ...GREATEST_NAME_OF_ALLAH_DUAS,
  ...PROPHETS_DUA_DUAS,
  ...DUAS_OF_HADITH_DUAS,
  ...DUAS_OF_SAHABA_DUAS,
  ...MASNUN_DUAS_DUAS,
  ...OTHER_DUAS_DUAS,
  ...WHEN_TO_SAY_WHAT_DUAS,
  ...EID_DUAS,
  ...CAT_40_RABBANA_DUAS_DUAS,
];

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
 * category (`morning-and-evening`), so these pick the first entry in that
 * category whose English title says which time of day it's for, rather than
 * relying on separate morning/evening arrays like the old curated content did.
 */
export function getFeaturedMorningDua(): Dua | undefined {
  const duas = getDuasByCategory('morning-and-evening');
  return duas.find((d) => /morning/i.test(d.title.en)) ?? duas[0];
}

export function getFeaturedEveningDua(): Dua | undefined {
  const duas = getDuasByCategory('morning-and-evening');
  return duas.find((d) => /evening/i.test(d.title.en)) ?? duas[1];
}
