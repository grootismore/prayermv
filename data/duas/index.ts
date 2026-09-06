import type { Dua, DuaCategory } from '../../types/dua';
import { DUA_CATEGORIES } from './categories';
import { MORNING_DUAS } from './morning';
import { EVENING_DUAS } from './evening';
import { AFTER_SALAH_DUAS } from './prayer';
import { SLEEP_DUAS } from './sleep';
import { DAILY_DUAS } from './daily';

export { DUA_CATEGORIES };

/** Every dua/dhikr in the app, in a stable order (grouped by the file it's authored in). */
export const ALL_DUAS: Dua[] = [
  ...MORNING_DUAS,
  ...EVENING_DUAS,
  ...AFTER_SALAH_DUAS,
  ...SLEEP_DUAS,
  ...DAILY_DUAS,
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

/** The single most representative dua for the morning/evening featured cards on the Duas home screen. */
export function getFeaturedMorningDua(): Dua | undefined {
  return MORNING_DUAS[0];
}

export function getFeaturedEveningDua(): Dua | undefined {
  return EVENING_DUAS[0];
}
