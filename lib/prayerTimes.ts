import type { Island } from 'mv-prayertimes';
import salatData from 'mv-prayertimes/salat.json';

/**
 * mv-prayertimes' own `MVPrayerTimes` class reads its data file via
 * `fs.readFileSync` at import time, which has no equivalent in a bundled
 * React Native runtime (there's no filesystem to read node_modules from on
 * device). So instead of importing the class, we import its underlying
 * `salat.json` (a plain JSON module, which Metro bundles fine) and
 * reimplement its lookup logic here - same island-published data, just
 * runnable on-device.
 */

export type PrayerName = 'fajr' | 'sunrise' | 'dhuhr' | 'asr' | 'maghrib' | 'isha';

export const PRAYER_ORDER: PrayerName[] = ['fajr', 'sunrise', 'dhuhr', 'asr', 'maghrib', 'isha'];

/** Prayers users can actually pray (excludes sunrise, which is a marker, not a prayer). */
export const NOTIFIABLE_PRAYERS: PrayerName[] = ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha'];

export interface PrayerTimeEntry {
  call: PrayerName;
  date: Date;
  string: string;
}

export interface PrayerWindow {
  call: PrayerName;
  start: Date;
  end: Date;
}

export interface AtollGroup {
  atollId: number;
  atoll: string;
  islands: Island[];
}

interface RawDayEntry {
  atollId: number;
  day: number;
  fajr: number;
  sunrise: number;
  dhuhr: number;
  asr: number;
  maghrib: number;
  isha: number;
}

const atolls = salatData.atolls as Record<string, RawDayEntry[]>;

/**
 * mv-prayertimes' island DB (205 islands) doesn't include every populated
 * island by name - notably Hulhumale' and the Kaafu-atoll Vilingili
 * (Vilimale'), both a few km from Male' and commonly searched for. Rather
 * than fabricate astronomically-computed times for islands that aren't
 * actually published (this app's whole design is built around using
 * *published* per-island times, not calculated ones), these are added
 * with Male's real atollId and offset - this dataset publishes times per
 * atoll-region, so an island genuinely sharing Male's atoll and offset
 * gets Male's real published times automatically through the exact same
 * lookup path as any other island, not a special-cased alias.
 */
const SUPPLEMENTAL_ISLANDS: Island[] = [
  {
    atollId: 57,
    islandId: -1,
    atoll: 'K.',
    island: "Hulhumale'",
    offset: 0,
    location: { lat: 4.2105, long: 73.5406 },
  },
  {
    atollId: 57,
    islandId: -2,
    atoll: 'K.',
    island: 'Vilingili',
    offset: 0,
    location: { lat: 4.1739, long: 73.4979 },
  },
];

const islands = [...(salatData.islands as Island[]), ...SUPPLEMENTAL_ISLANDS];

/** All islands, as shipped in the mv-prayertimes island DB (plus a small supplement - see SUPPLEMENTAL_ISLANDS). */
export function getAllIslands(): Island[] {
  return islands;
}

/** Islands grouped by atoll, in atoll order, for the onboarding picker. */
export function getAtollGroups(): AtollGroup[] {
  const groups = new Map<number, AtollGroup>();

  for (const island of islands) {
    let group = groups.get(island.atollId);
    if (!group) {
      group = { atollId: island.atollId, atoll: island.atoll, islands: [] };
      groups.set(island.atollId, group);
    }
    group.islands.push(island);
  }

  return Array.from(groups.values()).sort((a, b) => a.atollId - b.atollId);
}

function findIsland(islandId: number): Island {
  const island = islands.find((i) => i.islandId === islandId);
  if (!island) throw new Error(`Unknown island id: ${islandId}`);
  return island;
}

/** Day-of-year (1-366), matching mv-prayertimes' own convention. */
function daysIntoYear(date: Date): number {
  return (
    ((Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) -
      Date.UTC(date.getFullYear(), 0, 0)) /
      24 /
      60 /
      60 /
      1000) %
    366
  );
}

function minutesToTimeString(minutesIntoDay: number): string {
  const hours = Math.floor(minutesIntoDay / 60);
  const minutes = minutesIntoDay % 60;
  return [hours, minutes].map((n) => String(n).padStart(2, '0')).join(':');
}

function minutesToDate(minutesIntoDay: number, referenceDate: Date): Date {
  const date = new Date(referenceDate);
  date.setHours(Math.floor(minutesIntoDay / 60));
  date.setMinutes(minutesIntoDay % 60);
  date.setSeconds(0);
  date.setMilliseconds(0);
  return date;
}

function getEntryForDay(islandId: number, day: number): RawDayEntry {
  const island = findIsland(islandId);
  const entries = atolls[island.atollId];
  const entry = entries.find((e) => e.day === day);
  if (!entry) throw new Error(`No prayer time entry for atoll ${island.atollId}, day ${day}`);
  return entry;
}

function buildEntry(
  call: PrayerName,
  entry: RawDayEntry,
  offset: number,
  referenceDate: Date
): PrayerTimeEntry {
  const minutesIntoDay = entry[call] + offset;
  return {
    call,
    date: minutesToDate(minutesIntoDay, referenceDate),
    string: minutesToTimeString(minutesIntoDay),
  };
}

/** Prayer times for an island on an arbitrary date, in display order (Fajr through Isha). */
export function getPrayerTimesForDate(islandId: number, date: Date): PrayerTimeEntry[] {
  const island = findIsland(islandId);
  const entry = getEntryForDay(islandId, daysIntoYear(date));
  return PRAYER_ORDER.map((call) => buildEntry(call, entry, island.offset, date));
}

/** Today's prayer times for an island, in display order (Fajr through Isha). */
export function getTodayPrayerTimes(islandId: number): PrayerTimeEntry[] {
  return getPrayerTimesForDate(islandId, new Date());
}

/**
 * Today's notifiable prayers, each with the window's start and end time -
 * "end" being when the next entry in PRAYER_ORDER begins (Fajr ends at
 * Sunrise, Dhuhr ends at Asr, and so on). Isha has no later entry today, so
 * its window ends at tomorrow's Fajr.
 */
export function getTodayPrayerWindows(islandId: number): PrayerWindow[] {
  const today = getPrayerTimesForDate(islandId, new Date());
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowFajr = getPrayerTimesForDate(islandId, tomorrow).find((entry) => entry.call === 'fajr')!;

  const windows: PrayerWindow[] = [];
  for (let i = 0; i < today.length; i++) {
    const entry = today[i];
    if (!NOTIFIABLE_PRAYERS.includes(entry.call)) continue;
    const nextEntry = today[i + 1] ?? tomorrowFajr;
    windows.push({ call: entry.call, start: entry.date, end: nextEntry.date });
  }
  return windows;
}

/** The next upcoming prayer (or sunrise) for an island, relative to now. */
export function getNextPrayer(islandId: number): PrayerTimeEntry {
  const island = findIsland(islandId);
  const now = new Date();
  const todayEntry = getEntryForDay(islandId, daysIntoYear(now));

  for (const call of PRAYER_ORDER) {
    const candidate = buildEntry(call, todayEntry, island.offset, now);
    if (candidate.date.getTime() > now.getTime()) return candidate;
  }

  // Every prayer for today has passed - roll over to tomorrow's Fajr.
  // setDate() advances the calendar day correctly (month/year rollover,
  // no DST drift), unlike adding a fixed 24h in milliseconds.
  const tomorrow = new Date(now);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowDay = (daysIntoYear(now) + 1) % 366;
  const tomorrowEntry = getEntryForDay(islandId, tomorrowDay);
  return buildEntry('fajr', tomorrowEntry, island.offset, tomorrow);
}

export type { Island };
