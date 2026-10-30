import type { ComponentProps } from 'react';

import type Icon from '../components/Icon';
import type { PrayerName } from './prayerTimes';

type IconSpec = Pick<ComponentProps<typeof Icon>, 'name' | 'sf'>;

/** Each prayer's own glyph: an SF Symbol on iOS, an Ionicon on Android. */
export const PRAYER_ICON: Record<PrayerName, IconSpec> = {
  fajr: { name: 'moon-outline', sf: 'moon.haze.fill' },
  sunrise: { name: 'sunny-outline', sf: 'sunrise.fill' },
  dhuhr: { name: 'sunny-outline', sf: 'sun.max.fill' },
  asr: { name: 'partly-sunny-outline', sf: 'sun.haze.fill' },
  maghrib: { name: 'partly-sunny-outline', sf: 'sunset.fill' },
  isha: { name: 'moon-outline', sf: 'moon.stars.fill' },
};

// The colour of each part of the day: dawn blue, sunrise gold, midday mint,
// afternoon lime, sunset coral, night indigo. Night values glow on forest
// green; day values are deepened so glyphs hold contrast on white cards.
const HUES: Record<PrayerName, { dark: string; light: string }> = {
  fajr: { dark: '#8FC9FF', light: '#2B6CB0' },
  sunrise: { dark: '#FFC95C', light: '#9A5B00' },
  dhuhr: { dark: '#5CF39A', light: '#0A7640' },
  asr: { dark: '#D4F06A', light: '#5C7A00' },
  maghrib: { dark: '#FF9E6B', light: '#B5471A' },
  isha: { dark: '#A5B4FF', light: '#4553B8' },
};

export function prayerHue(prayer: PrayerName, scheme: 'light' | 'dark'): string {
  return HUES[prayer][scheme];
}
