/**
 * Splits a month into explicit 7-day week rows (padded with nulls for the
 * leading/trailing blanks), rather than relying on flexWrap layout to
 * break at the right point - see the Hijri screen's history for why that
 * approach is fragile in RN's layout engine. Shared between the Hijri and
 * Gregorian calendar views.
 */
export function buildCalendarWeeks(firstDayOfWeek: number, daysInMonth: number): (number | null)[][] {
  const cells: (number | null)[] = [
    ...Array(firstDayOfWeek).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];
  while (cells.length % 7 !== 0) cells.push(null);

  const weeks: (number | null)[][] = [];
  for (let i = 0; i < cells.length; i += 7) {
    weeks.push(cells.slice(i, i + 7));
  }
  return weeks;
}
