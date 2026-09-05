import HijriDate, { toHijri } from 'hijri-date/lib/safe';
import type { AppLanguage } from './storage';

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

export function getTodayHijri(): HijriDate {
  return toHijri(new Date());
}

export function getHijriMonthName(month: number, language: AppLanguage): string {
  return MONTH_NAMES[language][month - 1] ?? '';
}

export function getHijriMonthInfo(year: number, month: number, language: AppLanguage): HijriMonthInfo {
  const nextMonth = month === 12 ? 1 : month + 1;
  const nextYear = month === 12 ? year + 1 : year;
  const firstOfNext = new HijriDate(nextYear, nextMonth, 1);
  const lastOfThis = firstOfNext.clone().subtractDay();
  const firstOfThis = new HijriDate(year, month, 1);

  return {
    year,
    month,
    monthName: getHijriMonthName(month, language),
    daysInMonth: lastOfThis.date,
    firstDayOfWeek: firstOfThis.toGregorian().getDay(),
  };
}
