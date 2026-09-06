import type { Dua } from '../../../types/dua';

// Sourced from the Masnun Dua open dataset (github.com/islamicapi/masnun-dua)
// - see data/duas/CONTENT_REVIEW.md for the sourcing/verification pipeline
// and the human-review requirement that still applies to every item here.
export const SACRIFICE_DUAS: Dua[] = [
  {
    id: 'masnun-346',
    type: 'dua',
    categoryId: 'sacrifice',
    title: { en: 'Dua for Qurbani (Bismillah)', dv: 'އުޟްޙިޔާ ކަތިލާއިރު ކިޔާ ދުޢާ (ބިސްމި)' },
    arabic: 'بِسْمِ اللَّهِ',
    transliteration: 'Bismillaah',
    translation: {
      en: 'In the name of Allah.',
      dv: 'ﷲ ގެ އިސްމުފުޅުން (ކަތިލަމެވެ).',
    },
    source: { type: 'hadith', reference: 'Bukhari: 985' },
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Sourced from the Masnun Dua dataset (islamicapi/masnun-dua); passed automated Arabic/EN/DV consistency checks but not yet checked by a qualified human reviewer - see CONTENT_REVIEW.md.',
    },
  },
  {
    id: 'masnun-347',
    type: 'dua',
    categoryId: 'sacrifice',
    title: { en: 'Dua for Slaughtering Animal (Bismillah Allahu Akbar)', dv: 'އުޟްޙިޔާ ކަތިލާއިރު ކިޔާ ދުޢާ (ބިސްމި އާއި ތަކްބީރު)' },
    arabic: 'بِسْمِ اللَّهِ وَاللَّهُ أَكْبَرُ',
    transliteration: 'Bismillaahi wAllahu \'Akbar',
    translation: {
      en: 'With the Name of Allah, Allah is the Most Great!',
      dv: 'ﷲ ގެ އިސްމުފުޅުން (ކަތިލަމެވެ). އަދި ﷲ އީ އެންމެ ބޮޑު ރަސްކަލާނގެއެވެ.',
    },
    source: { type: 'hadith', reference: 'Bukhari: 5565' },
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Sourced from the Masnun Dua dataset (islamicapi/masnun-dua); passed automated Arabic/EN/DV consistency checks but not yet checked by a qualified human reviewer - see CONTENT_REVIEW.md.',
    },
  },
  {
    id: 'masnun-348',
    type: 'dua',
    categoryId: 'sacrifice',
    title: { en: 'Dua Before Sacrificing Animal (Qurbani Dua)', dv: 'އުޟްޙިޔާ ކަތިލުމުގެ ކުރިން ކިޔާ ދުޢާ' },
    arabic: 'بِسْمِ اللَّهِ وَاللَّهُ أَكْبَرُ [اَللَّهُمَّ مِنْكَ وَلَكَ] اَللَّهُمَّ تَقَبَّلْ مِنِّي',
    transliteration: 'Bismillaahi wAllahu \'Akbar [Allaahumma minka wa laka] Allaahumma taqabbal minnee',
    translation: {
      en: 'With the Name of Allah, Allah is the Most Great! [O Allah, from You and to You.] O Allah, accept it from me.',
      dv: 'ﷲ ގެ އިސްމުފުޅުން (ކަތިލަމެވެ). އަދި ﷲ އީ އެންމެ ބޮޑު ރަސްކަލާނގެއެވެ. [އޭ ﷲ! މިއީ އިބަރަސްކަލާނގެ ޙަޟްރަތުން (ދެއްވި އެއްޗެއް) އަދި (މި އަޅުކަން ވަނީ) އިބަރަސްކަލާނގެ އަށެވެ.] އޭ ﷲ! މިއަޅާގެ ކިބައިން މި ކަތިލުން ޤަބޫލުކުރައްވާނދޭވެ!',
    },
    source: { type: 'hadith', reference: 'Ahmad 4/400, No. 19586; Abu Dawood, 4/308, No. 5040' },
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Sourced from the Masnun Dua dataset (islamicapi/masnun-dua); passed automated Arabic/EN/DV consistency checks but not yet checked by a qualified human reviewer - see CONTENT_REVIEW.md.',
    },
  },
  {
    id: 'masnun-349',
    type: 'dua',
    categoryId: 'sacrifice',
    title: { en: 'Dua at the Time of Slaughtering (Qurbani Dua)', dv: 'ކަތިލާ ވަގުތު ކިޔާ ދުޢާ (އުންމަތުގެ ފަރާތުން)' },
    arabic: 'بِسْمِ اللَّهِ اَللَّهُمَّ تَقَبَّلْ مِنْ مُحَمَّدٍ وَآلِ مُحَمَّدٍ وَمِنْ أُمَّةِ مُحَمَّدٍ',
    transliteration: 'Bismillaahi, Allah-humma Taqabbal min Muhammadin wa Al-i-Muhammadin, wa min Ummati Muhammadin',
    translation: {
      en: 'In the name of Allah, O Allah, accept it from Muhammad, Muhammad\'s family and from Muhammad\'s Ummah (followers)\n\nThen he sacrificed it.',
      dv: 'ﷲ ގެ އިސްމުފުޅުން (ކަތިލަމެވެ). އޭ ﷲ! މުޙައްމަދުގެފާނުގެ ކިބައިންނާއި، މުޙައްމަދުގެފާނުގެ އާލުވެރިންގެ ކިބައިންނާއި، އަދި މުޙައްމަދުގެފާނުގެ އުންމަތުގެ ކިބައިން (މި ކަތިލުން) ޤަބޫލުކުރައްވާނދޭވެ!',
    },
    source: { type: 'hadith', reference: 'Muslim: 1967' },
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Sourced from the Masnun Dua dataset (islamicapi/masnun-dua); passed automated Arabic/EN/DV consistency checks but not yet checked by a qualified human reviewer - see CONTENT_REVIEW.md.',
    },
  },
  {
    id: 'masnun-350',
    type: 'dua',
    categoryId: 'sacrifice',
    title: { en: 'Dua for Sacrificing Animal', dv: 'އުޟްޙިޔާ ކަތިލުމުގެ ދުޢާ (އެހެން މީހުންގެ މަތިން)' },
    arabic: 'بِسْمِ اللَّهِ وَاللَّهُ أَكْبَرُ هَذَا عَنِّي وَعَمَّنْ لَمْ يُضَحِّ مِنْ أُمَّتِي',
    transliteration: 'Bismillah-hi wallahu akbaru haza \'anni wa amman lam udahh-hi min ummati',
    translation: {
      en: 'In the name of Allah, Allah is Most Great. This is from me and from those who did not sacrifice from my community.',
      dv: 'ﷲ ގެ އިސްމުފުޅުން (ކަތިލަމެވެ). ﷲ އީ އެންމެ ބޮޑު ރަސްކަލާނގެއެވެ. މިއީ ތިމަންކަލޭގެފާނުގެ ފަރާތުންނާއި، ތިމަންކަލޭގެފާނުގެ އުންމަތުގެ ތެރެއިން އުޟްޙިޔާ ނުކަތިލާ މީހުންގެ ފަރާތުންނެވެ.',
    },
    source: { type: 'hadith', reference: 'Sahih. Abu Dawud: 2810' },
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Sourced from the Masnun Dua dataset (islamicapi/masnun-dua); passed automated Arabic/EN/DV consistency checks but not yet checked by a qualified human reviewer - see CONTENT_REVIEW.md.',
    },
  },
];
