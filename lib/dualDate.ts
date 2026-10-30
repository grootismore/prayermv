import HijriDate, { toHijri } from 'hijri-date/lib/safe';

export interface SimpleDate {
  year: number;
  month: number; // 1-12
  date: number;
}

/** The Hijri date a Gregorian day (month 1-12) falls on. */
export function hijriOfGregorian(year: number, month: number, date: number): SimpleDate {
  const h = toHijri(new Date(year, month - 1, date));
  return { year: h.year, month: h.month, date: h.date };
}

/** The Gregorian date a Hijri day falls on. */
export function gregorianOfHijri(year: number, month: number, date: number): SimpleDate {
  const g = new HijriDate(year, month, date).toGregorian();
  return { year: g.getFullYear(), month: g.getMonth() + 1, date: g.getDate() };
}
