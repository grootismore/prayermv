import type { DuaCategory } from '../../types/dua';

/**
 * All Duas & Adhkar categories, in display order. Icons are Ionicons glyph
 * names (see @expo/vector-icons) - kept as plain strings here so this file
 * has no React Native import and stays trivially testable/importable from
 * a plain Node script (see scripts/validateDuas.ts).
 */
export const DUA_CATEGORIES: DuaCategory[] = [
  {
    id: 'morning',
    title: { en: 'Morning Adhkar', dv: 'ހެނދުނުގެ ޛިކުރު' },
    description: {
      en: 'Remembrances for the start of the day, after Fajr.',
      dv: 'ފަތިސް ނަމާދަށްފަހު، ދުވަސް ފެށުމުގެ ޛިކުރުތައް.',
    },
    icon: 'sunny-outline',
    order: 1,
  },
  {
    id: 'evening',
    title: { en: 'Evening Adhkar', dv: 'ހަވީރުގެ ޛިކުރު' },
    description: {
      en: 'Remembrances for the end of the day, after Asr.',
      dv: 'އަޞްރު ނަމާދަށްފަހު، ދުވަސް ނިމުމުގެ ޛިކުރުތައް.',
    },
    icon: 'moon-outline',
    order: 2,
  },
  {
    id: 'afterSalah',
    title: { en: 'After-Salah Adhkar', dv: 'ނަމާދަށްފަހުގެ ޛިކުރު' },
    description: {
      en: 'Said immediately after finishing each of the five daily prayers.',
      dv: 'ފަރުޟު ފަސް ނަމާދު ކުރެއްވުމަށްފަހު ވަގުތުން ކިޔަވާ ޛިކުރުތައް.',
    },
    icon: 'repeat-outline',
    order: 3,
  },
  {
    id: 'sleep',
    title: { en: 'Before Sleeping & Upon Waking', dv: 'ނިދުމުގެ ކުރިންނާއި ހޭލުމުން' },
    description: {
      en: 'Protection before bed, and gratitude on waking up.',
      dv: 'ނިދުމުގެ ކުރިން ރައްކާތެރިކަން ހޯދުމަށާއި، ހޭލުމުން شكر ކުރުމަށް.',
    },
    icon: 'bed-outline',
    order: 4,
  },
  {
    id: 'home',
    title: { en: 'Entering & Leaving Home', dv: 'ގެއަށް ވަނުމާއި ނުކުތުން' },
    icon: 'home-outline',
    order: 5,
  },
  {
    id: 'mosque',
    title: { en: 'Entering & Leaving the Mosque', dv: 'މިސްކިތަށް ވަނުމާއި ނުކުތުން' },
    icon: 'business-outline',
    order: 6,
  },
  {
    id: 'eating',
    title: { en: 'Before & After Eating', dv: 'ކެއުމުގެ ކުރިންނާއި ފަހުން' },
    icon: 'restaurant-outline',
    order: 7,
  },
  {
    id: 'travel',
    title: { en: 'Travel', dv: 'ދަތުރު' },
    icon: 'airplane-outline',
    order: 8,
  },
  {
    id: 'forgiveness',
    title: { en: 'Seeking Forgiveness', dv: 'ފާފަފުއްސެވުމަށް އެދުން' },
    icon: 'leaf-outline',
    order: 9,
  },
  {
    id: 'protection',
    title: { en: 'Protection', dv: 'ރައްކާތެރިކަން' },
    icon: 'shield-checkmark-outline',
    order: 10,
  },
  {
    id: 'anxiety',
    title: { en: 'Anxiety & Difficulty', dv: 'ހިތްދަތިކަމާއި ދަތިކަން' },
    icon: 'help-buoy-outline',
    order: 11,
  },
];
