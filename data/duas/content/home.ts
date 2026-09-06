import type { Dua } from '../../../types/dua';

// Sourced from the Masnun Dua open dataset (github.com/islamicapi/masnun-dua)
// - see data/duas/CONTENT_REVIEW.md for the sourcing/verification pipeline
// and the human-review requirement that still applies to every item here.
export const HOME_DUAS: Dua[] = [
  {
    id: 'masnun-156',
    type: 'dua',
    categoryId: 'home',
    title: { en: 'Dua when leaving the house', dv: 'ވާރޭ ވެހުން އެދި ކުރާ ދުޢާ' },
    arabic: 'اَللَّـهُمَّ إِنِّي أَعُوْذُ بِكَ أَنْ أَضِلَّ، أَوْ أُضَلَّ، أَوْ أَزِلَّ، أَوْ أُزَلَّ، أَوْ أَظْلِمَ، أَوْ أُظْلَمَ، أَوْ أَجْهَلَ، أَوْ يُجْهَلَ عَلَيَّ',
    transliteration: 'Allaahumma innee a‛oodhu bika an adilla aw udalla, aw azilla aw uzalla, aw azlima aw uzlama, aw adhala aw yudhala ‛alayya',
    translation: {
      en: 'O Allah, I seek refuge with You lest I should stray or be led astray, or slip (i.e. to commit a sin unintentionally) or be tripped, or oppress or be oppressed, or behave foolishly or be treated foolishly.',
      dv: 'އޭ ﷲ! އަޅަމެންނަށް ވާރޭ ވެއްސަވާނދޭވެ! (އެއީ) ފުދިގެންވާ، އުފާވެރިކަން ގެނެސްދޭ، ފަސޭހައިން އޮހޮރިގެންދާ، (ބިންގަނޑު) ފަޅުވައިދޭ، ގެއްލުމެއް ނުދޭ މަންފާކުރަނިވި، ލަސްވުމެއްނެތި އަވަހަށް އަންނަ ވާރޭއެއް ކަމުގައި ލައްވާނދޭވެ!',
    },
    source: { type: 'hadith', reference: 'Sahih (Albani). Abu Dawud: 5094' },
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Sourced from the Masnun Dua dataset (islamicapi/masnun-dua); passed automated Arabic/EN/DV consistency checks but not yet checked by a qualified human reviewer - see CONTENT_REVIEW.md.',
    },
  },
  {
    id: 'masnun-158',
    type: 'dua',
    categoryId: 'home',
    title: { en: 'Dua before entering home', dv: 'ވާރޭ ހުއްޓުމުން ކިޔާ ދުޢާ' },
    arabic: 'اَلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ',
    transliteration: 'As-salaamu \'alaykum wara\'hmatullaahi wa barakaatuh',
    translation: {
      en: 'Peace be upon you, and the Mercy of Allah and His Blessings.\n\nTo give salaam upon all is sunnah. Giving salaam upon spouse and family members is additional sunnah. It is recommended and have special rewards and those who have this character, this below mentioned hadith give glad tidings. Abu umama (RA) said that, Rasoolullah (ﷺ) said, “Allah will give guarantee and protection for three kinds of people. If he live then all of his matter will be protected by Allah and if he die then he will enter into jannah. (First one is) He who give salaam before enter into the house, he will enter in the protection of Allah….”',
      dv: 'އަހަރެމެންނަށް ވާރޭ ވެހިއްޖެއީ ﷲ ގެ ފަޟްލުވަންތަކަމާއި އެކަލާނގެ ރަޙްމަތުންނެވެ.',
    },
    source: { type: 'hadith', reference: 'Hasan (Ibn Hajar). MIshkat: 4/316' },
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Sourced from the Masnun Dua dataset (islamicapi/masnun-dua); passed automated Arabic/EN/DV consistency checks but not yet checked by a qualified human reviewer - see CONTENT_REVIEW.md.',
    },
  },
];
