import type { AppLanguage } from './storage';

export interface HijriEvent {
  month: number; // 1-12
  date: number; // 1-30
  name: Record<AppLanguage, string>;
}

// The widely-observed occasions in the Sunni calendar (the Maldives is
// Sunni Shafi'i) - Mawlid on 12 Rabi' al-Awwal and Laylat al-Qadr on 27
// Ramadan follow the most common convention, though both are observed on
// other nights/dates in some traditions.
export const HIJRI_EVENTS: HijriEvent[] = [
  {
    month: 1,
    date: 1,
    name: { en: 'Islamic New Year', dv: 'ހިޖުރީ އައު އަހަރު', ar: 'رأس السنة الهجرية' },
  },
  {
    month: 1,
    date: 10,
    name: { en: 'Day of Ashura', dv: 'އާޝޫރާ ދުވަސް', ar: 'يوم عاشوراء' },
  },
  {
    month: 3,
    date: 12,
    name: { en: "Mawlid al-Nabi (Prophet's Birthday)", dv: 'މީލާދުއްނަބީ', ar: 'المولد النبوي الشريف' },
  },
  {
    month: 7,
    date: 27,
    name: { en: "Isra and Mi'raj", dv: 'ޢިސްރާއު މިޢުރާޖު', ar: 'الإسراء والمعراج' },
  },
  {
    month: 8,
    date: 15,
    name: { en: "Mid-Sha'ban (Laylat al-Bara'ah)", dv: 'ނިޞްފު ޝަޢުބާން', ar: 'ليلة النصف من شعبان' },
  },
  {
    month: 9,
    date: 1,
    name: { en: 'Start of Ramadan', dv: 'ރަމަޟާން މަސް ފެށޭ ދުވަސް', ar: 'بداية شهر رمضان' },
  },
  {
    month: 9,
    date: 27,
    name: { en: 'Laylat al-Qadr (commonly observed)', dv: 'ލައިލަތުލް ޤަދްރި ވިލޭރޭ', ar: 'ليلة القدر' },
  },
  {
    month: 10,
    date: 1,
    name: { en: 'Eid al-Fitr', dv: 'ފިޠުރު ޢީދު', ar: 'عيد الفطر' },
  },
  {
    month: 12,
    date: 9,
    name: { en: 'Day of Arafah', dv: 'ޢަރަފާތު ދުވަސް', ar: 'يوم عرفة' },
  },
  {
    month: 12,
    date: 10,
    name: { en: 'Eid al-Adha', dv: 'ޢަޟްޙާ ޢީދު', ar: 'عيد الأضحى' },
  },
];

export function getHijriEventsForMonth(month: number): HijriEvent[] {
  return HIJRI_EVENTS.filter((event) => event.month === month);
}

export function getHijriEventForDate(month: number, date: number): HijriEvent | undefined {
  return HIJRI_EVENTS.find((event) => event.month === month && event.date === date);
}
