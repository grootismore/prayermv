import type Icon from '../Icon';

type IconSpec = Pick<React.ComponentProps<typeof Icon>, 'name' | 'sf'>;

/**
 * A drawn glyph per dua category (SF Symbol on iOS, Ionicon on Android),
 * replacing the emoji, which render as a different style on every phone. The
 * emoji in data/duas/categories.ts stays as the fallback for any category
 * added without an entry here.
 */
export const CATEGORY_ICON: Record<string, IconSpec> = {
  'morning-evening': { name: 'sunny-outline', sf: 'sunrise.fill' },
  sleep: { name: 'bed-outline', sf: 'bed.double.fill' },
  salah: { name: 'body-outline', sf: 'figure.mind.and.body' },
  witr: { name: 'moon-outline', sf: 'moon.stars.fill' },
  'mosque-adhan': { name: 'business-outline', sf: 'building.columns.fill' },
  purification: { name: 'water-outline', sf: 'drop.fill' },
  clothing: { name: 'shirt-outline', sf: 'tshirt.fill' },
  home: { name: 'home-outline', sf: 'house.fill' },
  'food-fasting': { name: 'restaurant-outline', sf: 'fork.knife' },
  travel: { name: 'airplane-outline', sf: 'airplane' },
  family: { name: 'people-outline', sf: 'person.2.fill' },
  marriage: { name: 'heart-outline', sf: 'heart.circle.fill' },
  social: { name: 'chatbubbles-outline', sf: 'bubble.left.and.bubble.right.fill' },
  'sneezing-greeting': { name: 'hand-left-outline', sf: 'hand.wave.fill' },
  'illness-death': { name: 'medkit-outline', sf: 'cross.case.fill' },
  distress: { name: 'rainy-outline', sf: 'cloud.rain.fill' },
  protection: { name: 'shield-checkmark-outline', sf: 'shield.lefthalf.filled' },
  repentance: { name: 'refresh-outline', sf: 'arrow.counterclockwise' },
  remembrance: { name: 'sparkles-outline', sf: 'sparkles' },
  weather: { name: 'cloudy-outline', sf: 'cloud.sun.fill' },
  'hajj-umrah': { name: 'cube-outline', sf: 'cube.fill' },
  'daily-life': { name: 'list-outline', sf: 'list.bullet' },
};
