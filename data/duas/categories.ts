import type { DuaCategory } from '../../types/dua';

/**
 * All Duas & Adhkar categories, sourced entirely from the Hisn al-Muslim
 * dataset (github.com/wafaaelmaandy/Hisn-Muslim-Json) - see
 * data/duas/CONTENT_REVIEW.md for the full sourcing and translation
 * methodology. This replaces the previous 44-category structure sourced
 * from the Masnun Dua dataset with a smaller, easier-to-browse 22-category
 * taxonomy ordered around a typical day and life's common moments, rather
 * than the source book's own chapter order.
 */
export const DUA_CATEGORIES: DuaCategory[] = [
  {
    id: 'morning-evening',
    title: { en: 'Morning & Evening', dv: 'ހެނދުނާއި ހަވީރު' },
    description: { en: 'Daily adhkar to start and end your day', dv: 'ދުވަސް ފެށުމަށާއި ނިންމުމަށް ކިޔާ ޛިކުރުތައް' },
    icon: '🌅',
    order: 1,
  },
  {
    id: 'sleep',
    title: { en: 'Sleep & Waking', dv: 'ނިދުމާއި ހޭލުން' },
    description: { en: 'Before bed, on waking, and for bad dreams', dv: 'ނިދުމުގެ ކުރިން، ހޭލުމުން، އަދި ނުބައި ހުވަފެނަށް' },
    icon: '🛌',
    order: 2,
  },
  {
    id: 'salah',
    title: { en: 'Prayer (Salah)', dv: 'ނަމާދު' },
    description: { en: 'From takbir to tasleem, and after the prayer', dv: 'ތަކްބީރުން ފެށިގެން ސަލާމަށް، އަދި ނަމާދަށްފަހު' },
    icon: '🧎',
    order: 3,
  },
  {
    id: 'witr',
    title: { en: 'Witr Prayer', dv: 'ވިތުރި ނަމާދު' },
    description: { en: 'Qunut and what to say after Witr', dv: 'ޤުނޫތާއި ވިތުރީގެ ފަހުން ކިޔާ ބަސްފުޅު' },
    icon: '🌙',
    order: 4,
  },
  {
    id: 'mosque-adhan',
    title: { en: 'Mosque & Adhan', dv: 'މިސްކިތާއި ބަންގި' },
    description: { en: 'Hearing the call to prayer, entering and leaving', dv: 'ބަންގި އިވުމުންނާއި، މިސްކިތަށް ވަދެ ނުކުތުމުން' },
    icon: '🕌',
    order: 5,
  },
  {
    id: 'purification',
    title: { en: 'Purification', dv: 'ޠަހާރަތު' },
    description: { en: 'Wudu, the restroom, and staying clean', dv: 'ވުޟޫއާއި ފާޚާނާ، އަދި ސާފުތާހިރުވުން' },
    icon: '🚿',
    order: 6,
  },
  {
    id: 'clothing',
    title: { en: 'Dressing', dv: 'ހެދުން ލުން' },
    description: { en: 'Putting on and taking off clothes', dv: 'ހެދުން ލުމާއި ބޭލުމުން ކިޔާ ދުޢާ' },
    icon: '👕',
    order: 7,
  },
  {
    id: 'home',
    title: { en: 'Home', dv: 'ގެ' },
    description: { en: 'Entering and leaving the house', dv: 'ގެއަށް ވަދެ ނުކުތުމުން ކިޔާ ދުޢާ' },
    icon: '🏠',
    order: 8,
  },
  {
    id: 'food-fasting',
    title: { en: 'Food & Fasting', dv: 'ކެއުމާއި ރޯދަ' },
    description: { en: 'Before and after eating, and breaking the fast', dv: 'ކެއުމުގެ ކުރިއާއި ފަހުން، އަދި ރޯދަ ވިއްލުމުން' },
    icon: '🍽️',
    order: 9,
  },
  {
    id: 'travel',
    title: { en: 'Travel', dv: 'ދަތުރުފަތުރު' },
    description: { en: 'Setting off, on the road, and returning home', dv: 'ދަތުރު ފެށުމާއި، މަގުމަތީ، އަދި އެނބުރި އައުމުން' },
    icon: '✈️',
    order: 10,
  },
  {
    id: 'family',
    title: { en: 'Family & Children', dv: 'ޢާއިލާއާއި ދަރިން' },
    description: { en: 'New parents, and protection for children', dv: 'އަލަށް ދަރިއަކު ލިބުމުންނާއި، ދަރިންގެ ރައްކާތެރިކަމަށް' },
    icon: '👨‍👩‍👧‍👦',
    order: 11,
  },
  {
    id: 'marriage',
    title: { en: 'Marriage', dv: 'ކާވެނި' },
    description: { en: 'The wedding night and married life', dv: 'ކާވެނީގެ ރެއާއި ދަމިވެރި ދިރިއުޅުން' },
    icon: '💍',
    order: 12,
  },
  {
    id: 'social',
    title: { en: 'Social Manners', dv: 'މުޖުތަމަޢީ އަދަބުތައް' },
    description: { en: 'Gatherings, replies, and speaking well of others', dv: 'މަޖިލިސްތަކާއި ޖަވާބުދިނުމާއި ހެޔޮބަސް ބުނުން' },
    icon: '👥',
    order: 13,
  },
  {
    id: 'sneezing-greeting',
    title: { en: 'Sneezing & Greeting', dv: 'ކިނބިހި އެޅުމާއި ސަލާމް' },
    description: { en: 'Sneezing replies and spreading salam', dv: 'ކިނބިއްސަށް ދޭ ޖަވާބާއި ސަލާމް ފެތުރުން' },
    icon: '🤝',
    order: 14,
  },
  {
    id: 'illness-death',
    title: { en: 'Illness & Death', dv: 'ބަލިވުމާއި މަރު' },
    description: { en: 'Visiting the sick, funerals, and condolences', dv: 'ބަލިމީހުންނަށް ޒިޔާރަތްކުރުމާއި ކަށުކަމާކެމީގެ ދުޢާ' },
    icon: '🤒',
    order: 15,
  },
  {
    id: 'distress',
    title: { en: 'Distress & Anxiety', dv: 'ހިތާމައާއި ހާސްކަން' },
    description: { en: 'Worry, grief, and doubts in faith', dv: 'ހާސްކަމާއި ހިތާމައާއި إيمانއަށް ވަސްވާސް ވުމުން' },
    icon: '💭',
    order: 16,
  },
  {
    id: 'protection',
    title: { en: 'Protection', dv: 'ރައްކާތެރިކަން' },
    description: { en: 'From Satan, evil eye, and harm', dv: 'ޝައިޠާނާއާއި ނަޒަރު ޖެހުމާއި ގެއްލުމުން ރައްކާތެރިވުން' },
    icon: '🛡️',
    order: 17,
  },
  {
    id: 'repentance',
    title: { en: 'Repentance', dv: 'ތައުބާ' },
    description: { en: 'Seeking Allah\'s forgiveness', dv: 'ﷲ ގެ ޙަޟްރަތުން ފާފަ ފުއްސެވުމަށް އެދުން' },
    icon: '🙏',
    order: 18,
  },
  {
    id: 'remembrance',
    title: { en: 'Remembrance of Allah', dv: 'ﷲ ހަނދުމަކުރުން' },
    description: { en: 'Tasbih, salawat, and general dhikr', dv: 'ތަސްބީޙައާއި ޞަލަވާތާއި އާންމު ޛިކުރު' },
    icon: '✨',
    order: 19,
  },
  {
    id: 'weather',
    title: { en: 'Weather & Nature', dv: 'މޫސުމާއި ޤުދުރަތު' },
    description: { en: 'Wind, rain, thunder, and the new moon', dv: 'ވަޔާއި ވާރެއާއި ގުގުރީގެ އަޑާއި އައު ހަނދު ފެނުމުން' },
    icon: '🌧️',
    order: 20,
  },
  {
    id: 'hajj-umrah',
    title: { en: 'Hajj & Umrah', dv: 'ޙައްޖާއި ޢުމްރާ' },
    description: { en: 'Tawaf, Safa & Marwah, Arafat, and the Jamarat', dv: 'ޠަވާފާއި ޞަފާ މަރުވާއާއި ޢަރަފާތާއި ޖަމަރާތު' },
    icon: '🕋',
    order: 21,
  },
  {
    id: 'daily-life',
    title: { en: 'Daily Life', dv: 'ދުވަހީ ދިރިއުޅުން' },
    description: { en: 'Everyday moments, good news and hardship', dv: 'ދުވަހީ ދިރިއުޅުމުގެ ކުދިކުދި ކަންތައްތައް' },
    icon: '🗓️',
    order: 22,
  },
];
