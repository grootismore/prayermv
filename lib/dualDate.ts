import { gregorianFromHijri, hijriFromGregorian, type GregorianParts, type HijriDate } from './umalqura';

export type SimpleDate = GregorianParts;

/** The Hijri date (Umm al-Qura) a Gregorian day (month 1-12) falls on. */
export function hijriOfGregorian(year: number, month: number, date: number): HijriDate {
  return hijriFromGregorian(year, month, date);
}

/** The Gregorian date a Hijri (Umm al-Qura) day falls on. */
export function gregorianOfHijri(year: number, month: number, date: number): SimpleDate {
  return gregorianFromHijri(year, month, date);
}
