// Checks lib/umalqura.ts against Node's built-in ICU Umm al-Qura calendar for
// every day in the table's range, in both directions, plus a few well-known
// dates. Run with `npm run validate:hijri`; exits non-zero on any mismatch.
import { daysInHijriMonth, gregorianFromHijri, hijriFromGregorian, hijriMonthStartDay, weekdayOfDay, dayNumber } from '../lib/umalqura';

const fmt = new Intl.DateTimeFormat('en-u-ca-islamic-umalqura-nu-latn', {
  day: 'numeric', month: 'numeric', year: 'numeric', timeZone: 'UTC',
});
const icu = (t: number) => {
  const p = Object.fromEntries(fmt.formatToParts(new Date(t)).map((x) => [x.type, x.value]));
  return { year: +p.year, month: +p.month, date: +p.day };
};

let checked = 0;
const failures: string[] = [];
const fail = (msg: string) => failures.length < 10 && failures.push(msg);

// Stay one month inside each edge so month-length lookups have a neighbour.
for (let t = Date.UTC(1883, 0, 1); t < Date.UTC(2076, 11, 31); t += 86_400_000) {
  const d = new Date(t);
  const [y, m, day] = [d.getUTCFullYear(), d.getUTCMonth() + 1, d.getUTCDate()];
  const want = icu(t);
  const got = hijriFromGregorian(y, m, day);
  const label = `${y}-${m}-${day}`;
  if (got.year !== want.year || got.month !== want.month || got.date !== want.date) {
    fail(`${label}: got ${got.year}-${got.month}-${got.date}, ICU ${want.year}-${want.month}-${want.date}`);
  }
  const back = gregorianFromHijri(want.year, want.month, want.date);
  if (back.year !== y || back.month !== m || back.date !== day) fail(`${label}: round trip gave ${back.year}-${back.month}-${back.date}`);
  if (weekdayOfDay(dayNumber(y, m, day)) !== d.getUTCDay()) fail(`${label}: wrong weekday`);
  if (want.date === 1) {
    const start = hijriMonthStartDay(want.year, want.month);
    if (start !== dayNumber(y, m, day)) fail(`${label}: month start mismatch`);
    const len = daysInHijriMonth(want.year, want.month);
    if (len !== 29 && len !== 30) fail(`${label}: month length ${len}`);
  }
  checked++;
}

// Well-known Umm al-Qura dates (Gregorian [y, m, d] of each Hijri [y, m, d]).
const KNOWN: [string, [number, number, number], [number, number, number]][] = [
  ['1 Ramadan 1447', [1447, 9, 1], [2026, 2, 18]],
  ['1 Shawwal 1447 (Eid al-Fitr)', [1447, 10, 1], [2026, 3, 20]],
  ['10 Dhu al-Hijjah 1447 (Eid al-Adha)', [1447, 12, 10], [2026, 5, 27]],
  ['1 Muharram 1448', [1448, 1, 1], [2026, 6, 16]],
  ['1 Ramadan 1448', [1448, 9, 1], [2027, 2, 8]],
];
for (const [name, [hy, hm, hd], [gy, gm, gd]] of KNOWN) {
  const g = gregorianFromHijri(hy, hm, hd);
  if (g.year !== gy || g.month !== gm || g.date !== gd) fail(`${name}: got ${g.year}-${g.month}-${g.date}, expected ${gy}-${gm}-${gd}`);
}

if (failures.length) {
  console.error(`FAILED (${failures.length}+ mismatches):\n  ${failures.join('\n  ')}`);
  process.exit(1);
}
console.log(`OK: ${checked} days match ICU Umm al-Qura in both directions, plus ${KNOWN.length} known dates.`);
