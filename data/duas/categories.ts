import type { DuaCategory } from '../../types/dua';

/**
 * All Duas & Adhkar categories, sourced from the Masnun Dua open dataset's
 * own 44-category structure (github.com/islamicapi/masnun-dua) rather than a
 * bespoke curated set - see data/duas/CONTENT_REVIEW.md for sourcing detail.
 * Icons are Ionicons glyph names, chosen by us (the dataset doesn't map to
 * this icon set).
 */
export const DUA_CATEGORIES: DuaCategory[] = [
  {
    id: 'duas-importance',
    title: { en: 'Dua\'s Importance', dv: 'ދުޢާގެ މުހިންމުކަން' },
    icon: 'information-circle-outline',
    order: 1,
  },
  {
    id: 'duas-excellence',
    title: { en: 'Dua\'s Excellence', dv: 'ދުޢާގެ މާތްކަން' },
    icon: 'star-outline',
    order: 2,
  },
  {
    id: 'time-of-dua',
    title: { en: 'Time of Dua', dv: 'ދުޢާ ކުރަންވީ ވަގުތު' },
    icon: 'time-outline',
    order: 3,
  },
  {
    id: 'dua-acceptance',
    title: { en: 'Dua Acceptance', dv: 'ދުޢާ އިޖާބަވުން' },
    icon: 'checkmark-circle-outline',
    order: 4,
  },
  {
    id: 'morning-and-evening',
    title: { en: 'Morning & Evening', dv: 'ހެނދުނާއި ހަވީރު' },
    icon: 'sunny-outline',
    order: 5,
  },
  {
    id: 'sleep',
    title: { en: 'Sleep', dv: 'ނިދުން' },
    icon: 'bed-outline',
    order: 6,
  },
  {
    id: 'cloths',
    title: { en: 'Cloths', dv: 'ހެދުން' },
    icon: 'shirt-outline',
    order: 7,
  },
  {
    id: 'home',
    title: { en: 'Home', dv: 'ގެ' },
    icon: 'home-outline',
    order: 8,
  },
  {
    id: 'toilet',
    title: { en: 'Toilet', dv: 'ކާކާގެ' },
    icon: 'water-outline',
    order: 9,
  },
  {
    id: 'adhaan-and-iqamah',
    title: { en: 'Adhaan & Iqamah', dv: 'ބަންގިއާއި ގަމަތް' },
    icon: 'megaphone-outline',
    order: 10,
  },
  {
    id: 'ablution-and-bath',
    title: { en: 'Ablution & Bath', dv: 'ވުޟޫއާއި ފެންވަރުން' },
    icon: 'water-outline',
    order: 11,
  },
  {
    id: 'mosque',
    title: { en: 'Mosque', dv: 'މިސްކިތް' },
    icon: 'business-outline',
    order: 12,
  },
  {
    id: 'salah',
    title: { en: 'Salah', dv: 'ނަމާދު' },
    icon: 'body-outline',
    order: 13,
  },
  {
    id: 'witr-and-other',
    title: { en: 'Witr & Other', dv: 'ވިތުރާއި އެހެނިހެން' },
    icon: 'moon-outline',
    order: 14,
  },
  {
    id: 'grave-funeral',
    title: { en: 'Grave / Funeral', dv: 'ކަށްވަޅު / ކަށުނަމާދު' },
    icon: 'flower-outline',
    order: 15,
  },
  {
    id: 'fasting',
    title: { en: 'Fasting', dv: 'ރޯދަ' },
    icon: 'nutrition-outline',
    order: 16,
  },
  {
    id: 'travel',
    title: { en: 'Travel', dv: 'ދަތުރުފަތުރު' },
    icon: 'airplane-outline',
    order: 17,
  },
  {
    id: 'hajj-and-umrah',
    title: { en: 'Hajj & Umrah', dv: 'ޙައްޖާއި ޢުމްރާ' },
    icon: 'walk-outline',
    order: 18,
  },
  {
    id: 'sacrifice',
    title: { en: 'Sacrifice', dv: 'ޤުރުބާނީ' },
    icon: 'cut-outline',
    order: 19,
  },
  {
    id: 'evil-protection',
    title: { en: 'Evil Protection', dv: 'ނުބައިކަމުން ރައްކާތެރިވުން' },
    icon: 'shield-checkmark-outline',
    order: 20,
  },
  {
    id: 'forgiveness',
    title: { en: 'Forgiveness', dv: 'ފާފަފުއްސެވުން' },
    icon: 'leaf-outline',
    order: 21,
  },
  {
    id: 'marriage',
    title: { en: 'Marriage', dv: 'ކައިވެނި' },
    icon: 'heart-outline',
    order: 22,
  },
  {
    id: 'family',
    title: { en: 'Family', dv: 'ޢާއިލާ' },
    icon: 'people-outline',
    order: 23,
  },
  {
    id: 'debt',
    title: { en: 'Debt', dv: 'ދަރަނި' },
    icon: 'cash-outline',
    order: 24,
  },
  {
    id: 'anxiety',
    title: { en: 'Anxiety', dv: 'ހާސްކަން' },
    icon: 'help-buoy-outline',
    order: 25,
  },
  {
    id: 'danger',
    title: { en: 'Danger', dv: 'ނުރައްކާ' },
    icon: 'warning-outline',
    order: 26,
  },
  {
    id: 'condemnationpraise',
    title: { en: 'Condemnation/Praise', dv: 'މަލާމާތް/ތައުރީފު' },
    icon: 'chatbubble-ellipses-outline',
    order: 27,
  },
  {
    id: 'manners',
    title: { en: 'Manners', dv: 'އަދަބު އަޚްލާޤު' },
    icon: 'happy-outline',
    order: 28,
  },
  {
    id: 'gathering',
    title: { en: 'Gathering', dv: 'މަޖިލިސް' },
    icon: 'people-circle-outline',
    order: 29,
  },
  {
    id: 'food',
    title: { en: 'Food', dv: 'ކާބޯތަކެތި' },
    icon: 'restaurant-outline',
    order: 30,
  },
  {
    id: 'animals',
    title: { en: 'Animals', dv: 'ޖަނަވާރު' },
    icon: 'paw-outline',
    order: 31,
  },
  {
    id: 'rainnature',
    title: { en: 'Rain/Nature', dv: 'ވާރޭ/ޤުދުރަތް' },
    icon: 'rainy-outline',
    order: 32,
  },
  {
    id: 'sickness',
    title: { en: 'Sickness', dv: 'ބަލިމަޑުކަން' },
    icon: 'medkit-outline',
    order: 33,
  },
  {
    id: 'jinndiseases',
    title: { en: 'Jinn/Diseases', dv: 'ޖިންނި/ބަލިތައް' },
    icon: 'alert-circle-outline',
    order: 34,
  },
  {
    id: 'quranic-dua',
    title: { en: 'Quranic Dua', dv: 'ޤުރުއާނުގެ ދުޢާތައް' },
    icon: 'book-outline',
    order: 35,
  },
  {
    id: 'greatest-name-of-allah',
    title: { en: 'Greatest Name of Allah', dv: 'ﷲ ގެ އެންމެ މަތިވެރި އިސްމުފުޅު' },
    icon: 'sparkles-outline',
    order: 36,
  },
  {
    id: 'prophets-dua',
    title: { en: 'Prophet\'s Dua', dv: 'ކައު ރަސޫލާގެ ދުޢާތައް' },
    icon: 'ribbon-outline',
    order: 37,
  },
  {
    id: 'duas-of-hadith',
    title: { en: 'Duas of Hadith', dv: 'ޙަދީޘްގެ ދުޢާތައް' },
    icon: 'library-outline',
    order: 38,
  },
  {
    id: 'duas-of-sahaba',
    title: { en: 'Duas of Sahaba', dv: 'ޞަޙާބީންގެ ދުޢާތައް' },
    icon: 'people-outline',
    order: 39,
  },
  {
    id: 'masnun-duas',
    title: { en: 'Masnun Duas', dv: 'މަސްނޫން ދުޢާތައް' },
    icon: 'bookmark-outline',
    order: 40,
  },
  {
    id: 'other-duas',
    title: { en: 'Other Duas', dv: 'އެހެނިހެން ދުޢާތައް' },
    icon: 'ellipsis-horizontal-circle-outline',
    order: 41,
  },
  {
    id: 'when-to-say-what',
    title: { en: 'When to say what', dv: 'ކޮން އިރަކު ކޮން އެއްޗެއް ކިޔަންވީ' },
    icon: 'chatbox-ellipses-outline',
    order: 42,
  },
  {
    id: 'eid',
    title: { en: 'Eid', dv: 'ޢީދު' },
    icon: 'gift-outline',
    order: 43,
  },
  {
    id: '40-rabbana-duas',
    title: { en: '40 Rabbana Duas', dv: '40 ރައްބަނާ ދުޢާ' },
    icon: 'hand-left-outline',
    order: 44,
  },
];
