import { FIRST_EPOCH_DAY, FIRST_YEAR, MONTH_LENGTHS } from './umalquraData';

/**
 * Umm al-Qura Hijri <-> Gregorian conversion from a bundled table
 * (lib/umalquraData.ts, generated from ICU and verified day by day against it
 * by scripts/verifyUmalqura.ts). Works offline and never depends on the
 * device's timezone: a Gregorian date is turned into a plain day number
 * first, so "31 October" is the same day everywhere.
 *
 * The table covers 1300-1500 AH (1882-2077 CE); dates outside it are clamped
 * to its edges rather than throwing.
 */
export interface HijriDate {
  year: number;
  month: number; // 1-12
  date: number; // 1-30
}

export interface GregorianParts {
  year: number;
  month: number; // 1-12
  date: number;
}

const MS_PER_DAY = 86_400_000;
const MONTHS = MONTH_LENGTHS.length;

/** STARTS[i] is the day number (days since 1970-01-01) the i-th month of the table begins on; the last entry is one past the final month. */
const STARTS: number[] = (() => {
  const starts = [FIRST_EPOCH_DAY];
  for (const c of MONTH_LENGTHS) starts.push(starts[starts.length - 1] + (c === '1' ? 30 : 29));
  return starts;
})();

export const LAST_YEAR = FIRST_YEAR + MONTHS / 12 - 1;

const clampIndex = (i: number) => Math.min(MONTHS - 1, Math.max(0, i));
const monthIndex = (year: number, month: number) => clampIndex((year - FIRST_YEAR) * 12 + (month - 1));

/** The day number of a calendar date, independent of timezone. */
export function dayNumber(year: number, month: number, date: number): number {
  return Math.floor(Date.UTC(year, month - 1, date) / MS_PER_DAY);
}

/** 0 = Sunday ... 6 = Saturday (1970-01-01 was a Thursday). */
export function weekdayOfDay(day: number): number {
  return (((day + 4) % 7) + 7) % 7;
}

export function daysInHijriMonth(year: number, month: number): number {
  const i = monthIndex(year, month);
  return STARTS[i + 1] - STARTS[i];
}

/** The day number of the 1st of a Hijri month. */
export function hijriMonthStartDay(year: number, month: number): number {
  return STARTS[monthIndex(year, month)];
}

export function hijriFromGregorian(year: number, month: number, date: number): HijriDate {
  const day = Math.min(STARTS[MONTHS] - 1, Math.max(STARTS[0], dayNumber(year, month, date)));
  // Last month whose start is on or before `day`.
  let lo = 0;
  let hi = MONTHS - 1;
  while (lo < hi) {
    const mid = (lo + hi + 1) >> 1;
    if (STARTS[mid] <= day) lo = mid;
    else hi = mid - 1;
  }
  return { year: FIRST_YEAR + Math.floor(lo / 12), month: (lo % 12) + 1, date: day - STARTS[lo] + 1 };
}

export function gregorianFromHijri(year: number, month: number, date: number): GregorianParts {
  const d = new Date((hijriMonthStartDay(year, month) + date - 1) * MS_PER_DAY);
  return { year: d.getUTCFullYear(), month: d.getUTCMonth() + 1, date: d.getUTCDate() };
}
