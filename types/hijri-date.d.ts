declare module 'hijri-date/lib/safe' {
  export default class HijriDate {
    constructor();
    constructor(time: number);
    constructor(dateString: string, format: string);
    constructor(
      year: number,
      month: number,
      date: number,
      hours?: number,
      minutes?: number,
      seconds?: number,
      milliseconds?: number
    );

    year: number;
    month: number;
    date: number;
    readonly day: number;
    readonly dayName: string;
    readonly time: number;

    getFullYear(): number;
    getMonth(): number;
    getMonthIndex(): number;
    getDate(): number;
    getDay(): number;

    addDay(): HijriDate;
    addDays(days: number): HijriDate;
    subtractDay(): HijriDate;
    subtractDays(days: number): HijriDate;

    toGregorian(): Date;
    clone(): HijriDate;
    ignoreTime(): HijriDate;
    isToday(): boolean;
    format(mask: string): string;

    static today(): HijriDate;
    static yesterday(): HijriDate;
    static tomorrow(): HijriDate;
  }

  export function toHijri(date: Date): HijriDate;
}
