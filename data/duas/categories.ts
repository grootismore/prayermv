import type { DuaCategory } from '../../types/dua';

/**
 * All Duas & Adhkar categories, sourced from the Masnun Dua open dataset's
 * own 44-category structure (github.com/islamicapi/masnun-dua) rather than a
 * bespoke curated set - see data/duas/CONTENT_REVIEW.md for sourcing detail.
 * Icons are plain emoji (chosen by us; the dataset doesn't map to this)
 * rather than Ionicons glyphs, matching a simpler, more colorful reference
 * design for the category list.
 *
 * Five of the dataset's original categories (cloths, home,
 * adhaan-and-iqamah, ablution-and-bath, mosque) were removed entirely -
 * every entry in them had Dhivehi content swapped with an unrelated dua by
 * the upstream dataset, with no correct Dhivehi text to fall back on. See
 * CONTENT_REVIEW.md for the full account.
 */
export const DUA_CATEGORIES: DuaCategory[] = [
  {
    id: 'duas-importance',
    title: { en: 'Dua\'s Importance', dv: 'ދުޢާގެ މުހިންމުކަން' },
    icon: '🤲',
    order: 1,
  },
  {
    id: 'duas-excellence',
    title: { en: 'Dua\'s Excellence', dv: 'ދުޢާގެ މާތްކަން' },
    icon: '⭐',
    order: 2,
  },
  {
    id: 'time-of-dua',
    title: { en: 'Time of Dua', dv: 'ދުޢާ ކުރަންވީ ވަގުތު' },
    icon: '⏰',
    order: 3,
  },
  {
    id: 'dua-acceptance',
    title: { en: 'Dua Acceptance', dv: 'ދުޢާ އިޖާބަވުން' },
    icon: '✅',
    order: 4,
  },
  {
    id: 'morning-and-evening',
    title: { en: 'Morning & Evening', dv: 'ހެނދުނާއި ހަވީރު' },
    icon: '🌅',
    order: 5,
  },
  {
    id: 'sleep',
    title: { en: 'Sleep', dv: 'ނިދުން' },
    icon: '🛌',
    order: 6,
  },
  {
    id: 'toilet',
    title: { en: 'Toilet', dv: 'ފާޚާނާ' },
    icon: '🚽',
    order: 7,
  },
  {
    id: 'salah',
    title: { en: 'Salah', dv: 'ނަމާދު' },
    icon: '🧎',
    order: 8,
  },
  {
    id: 'witr-and-other',
    title: { en: 'Witr & Other', dv: 'ވިތުރާއި އެހެނިހެން' },
    icon: '🌙',
    order: 9,
  },
  {
    id: 'grave-funeral',
    title: { en: 'Grave / Funeral', dv: 'ކަށްވަޅު / ކަށުނަމާދު' },
    icon: '⚰️',
    order: 10,
  },
  {
    id: 'fasting',
    title: { en: 'Fasting', dv: 'ރޯދަ' },
    icon: '🌘',
    order: 11,
  },
  {
    id: 'travel',
    title: { en: 'Travel', dv: 'ދަތުރުފަތުރު' },
    icon: '✈️',
    order: 12,
  },
  {
    id: 'hajj-and-umrah',
    title: { en: 'Hajj & Umrah', dv: 'ޙައްޖާއި ޢުމްރާ' },
    icon: '🕋',
    order: 13,
  },
  {
    id: 'sacrifice',
    title: { en: 'Sacrifice', dv: 'ޤުރުބާނީ' },
    icon: '🐐',
    order: 14,
  },
  {
    id: 'evil-protection',
    title: { en: 'Evil Protection', dv: 'ނުބައިކަމުން ރައްކާތެރިވުން' },
    icon: '🛡️',
    order: 15,
  },
  {
    id: 'forgiveness',
    title: { en: 'Forgiveness', dv: 'ފާފަފުއްސެވުން' },
    icon: '🙏',
    order: 16,
  },
  {
    id: 'marriage',
    title: { en: 'Marriage', dv: 'ކައިވެނި' },
    icon: '💍',
    order: 17,
  },
  {
    id: 'family',
    title: { en: 'Family', dv: 'ޢާއިލާ' },
    icon: '👨‍👩‍👧‍👦',
    order: 18,
  },
  {
    id: 'debt',
    title: { en: 'Debt', dv: 'ދަރަނި' },
    icon: '💵',
    order: 19,
  },
  {
    id: 'anxiety',
    title: { en: 'Anxiety', dv: 'ހާސްކަން' },
    icon: '💭',
    order: 20,
  },
  {
    id: 'danger',
    title: { en: 'Danger', dv: 'ނުރައްކާ' },
    icon: '⚠️',
    order: 21,
  },
  {
    id: 'condemnationpraise',
    title: { en: 'Condemnation/Praise', dv: 'މަލާމާތް/ތައުރީފު' },
    icon: '💬',
    order: 22,
  },
  {
    id: 'manners',
    title: { en: 'Manners', dv: 'އަދަބު އަޚްލާޤު' },
    icon: '😊',
    order: 23,
  },
  {
    id: 'gathering',
    title: { en: 'Gathering', dv: 'މަޖިލިސް' },
    icon: '👥',
    order: 24,
  },
  {
    id: 'food',
    title: { en: 'Food', dv: 'ކާބޯތަކެތި' },
    icon: '🍽️',
    order: 25,
  },
  {
    id: 'animals',
    title: { en: 'Animals', dv: 'ޖަނަވާރު' },
    icon: '🐾',
    order: 26,
  },
  {
    id: 'rainnature',
    title: { en: 'Rain/Nature', dv: 'ވާރޭ/ޤުދުރަތް' },
    icon: '🌧️',
    order: 27,
  },
  {
    id: 'sickness',
    title: { en: 'Sickness', dv: 'ބަލިމަޑުކަން' },
    icon: '🤒',
    order: 28,
  },
  {
    id: 'jinndiseases',
    title: { en: 'Jinn/Diseases', dv: 'ޖިންނި/ބަލިތައް' },
    icon: '👻',
    order: 29,
  },
  {
    id: 'quranic-dua',
    title: { en: 'Quranic Dua', dv: 'ޤުރުއާނުގެ ދުޢާތައް' },
    icon: '📖',
    order: 30,
  },
  {
    id: 'greatest-name-of-allah',
    title: { en: 'Greatest Name of Allah', dv: 'ﷲ ގެ އެންމެ މަތިވެރި އިސްމުފުޅު' },
    icon: '✨',
    order: 31,
  },
  {
    id: 'prophets-dua',
    title: { en: 'Prophet\'s Dua', dv: 'ކައު ރަސޫލާގެ ދުޢާތައް' },
    icon: '🕊️',
    order: 32,
  },
  {
    id: 'duas-of-hadith',
    title: { en: 'Duas of Hadith', dv: 'ޙަދީޘްގެ ދުޢާތައް' },
    icon: '📚',
    order: 33,
  },
  {
    id: 'duas-of-sahaba',
    title: { en: 'Duas of Sahaba', dv: 'ޞަޙާބީންގެ ދުޢާތައް' },
    icon: '👳',
    order: 34,
  },
  {
    id: 'masnun-duas',
    title: { en: 'Masnun Duas', dv: 'މަސްނޫން ދުޢާތައް' },
    icon: '🔖',
    order: 35,
  },
  {
    id: 'other-duas',
    title: { en: 'Other Duas', dv: 'އެހެނިހެން ދުޢާތައް' },
    icon: '🗂️',
    order: 36,
  },
  {
    id: 'when-to-say-what',
    title: { en: 'When to say what', dv: 'ކޮން އިރަކު ކޮން އެއްޗެއް ކިޔަންވީ' },
    icon: '🗣️',
    order: 37,
  },
  {
    id: 'eid',
    title: { en: 'Eid', dv: 'ޢީދު' },
    icon: '🎉',
    order: 38,
  },
  {
    id: '40-rabbana-duas',
    title: { en: '40 Rabbana Duas', dv: '40 ރައްބަނާ ދުޢާ' },
    icon: '🙌',
    order: 39,
  },
];
