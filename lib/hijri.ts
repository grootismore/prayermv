import type { AppLanguage } from './storage';
import { daysInHijriMonth, hijriFromGregorian, hijriMonthStartDay, weekdayOfDay, type HijriDate } from './umalqura';

export type { HijriDate };

const MONTH_NAMES: Record<AppLanguage, string[]> = {
  en: [
    'Muharram',
    'Safar',
    "Rabi' al-Awwal",
    "Rabi' al-Thani",
    'Jumada al-Ula',
    'Jumada al-Akhirah',
    'Rajab',
    "Sha'ban",
    'Ramadan',
    'Shawwal',
    "Dhu al-Qa'dah",
    'Dhu al-Hijjah',
  ],
  dv: [
    'މުޙައްރަމް',
    'ޞަފަރު',
    'ރަބީޢުލްއައްވަލް',
    'ރަބީޢުލްއާޚިރު',
    'ޖުމާދަލްއޫލާ',
    'ޖުމާދަލްއާޚިރު',
    'ރަޖަބު',
    'ޝަޢުބާން',
    'ރަމަޟާން',
    'ޝައްވާލް',
    'ޛުލްޤައިދާ',
    'ޛުލްޙިއްޖާ',
  ],
  ar: [
    'محرم',
    'صفر',
    'ربيع الأول',
    'ربيع الآخر',
    'جمادى الأولى',
    'جمادى الآخرة',
    'رجب',
    'شعبان',
    'رمضان',
    'شوال',
    'ذو القعدة',
    'ذو الحجة',
  ],
};

export interface HijriMonthInfo {
  year: number;
  month: number; // 1-12
  monthName: string;
  daysInMonth: number;
  /** Gregorian day-of-week (0=Sun) of the 1st of this Hijri month, for calendar grid padding. */
  firstDayOfWeek: number;
}

/** Today's Hijri date (Umm al-Qura), from the device's local calendar date. */
export function getTodayHijri(): HijriDate {
  const now = new Date();
  return hijriFromGregorian(now.getFullYear(), now.getMonth() + 1, now.getDate());
}

export function getHijriMonthName(month: number, language: AppLanguage): string {
  return MONTH_NAMES[language][month - 1] ?? '';
}

export function getHijriMonthInfo(year: number, month: number, language: AppLanguage): HijriMonthInfo {
  return {
    year,
    month,
    monthName: getHijriMonthName(month, language),
    daysInMonth: daysInHijriMonth(year, month),
    firstDayOfWeek: weekdayOfDay(hijriMonthStartDay(year, month)),
  };
}
