import type { AppLanguage } from './storage';

const MONTH_NAMES: Record<AppLanguage, string[]> = {
  en: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  dv: [
    'ޖެނުއަރީ',
    'ފެބްރުއަރީ',
    'މާރިޗު',
    'އޭޕްރީލް',
    'މޭ',
    'ޖޫން',
    'ޖުލައި',
    'އޯގަސްޓް',
    'ސެޕްޓެމްބަރު',
    'އޮކްޓޯބަރު',
    'ނޮވެމްބަރު',
    'ޑިސެމްބަރު',
  ],
  ar: [
    'يناير',
    'فبراير',
    'مارس',
    'أبريل',
    'مايو',
    'يونيو',
    'يوليو',
    'أغسطس',
    'سبتمبر',
    'أكتوبر',
    'نوفمبر',
    'ديسمبر',
  ],
};

export interface GregorianDate {
  year: number;
  month: number; // 1-12
  date: number;
}

export interface GregorianMonthInfo {
  year: number;
  month: number; // 1-12
  monthName: string;
  daysInMonth: number;
  /** Day-of-week (0=Sun) of the 1st of this month, for calendar grid padding. */
  firstDayOfWeek: number;
}

export function getTodayGregorian(): GregorianDate {
  const now = new Date();
  return { year: now.getFullYear(), month: now.getMonth() + 1, date: now.getDate() };
}

export function getGregorianMonthName(month: number, language: AppLanguage): string {
  return MONTH_NAMES[language][month - 1] ?? '';
}

export function getGregorianMonthInfo(year: number, month: number, language: AppLanguage): GregorianMonthInfo {
  return {
    year,
    month,
    monthName: getGregorianMonthName(month, language),
    // Passing the 1-indexed `month` directly (not month - 1) with day 0
    // rolls back to the last day of the *previous* 0-indexed month, i.e.
    // the last day of our 1-indexed `month` - the standard JS idiom for
    // "days in month".
    daysInMonth: new Date(year, month, 0).getDate(),
    firstDayOfWeek: new Date(year, month - 1, 1).getDay(),
  };
}
