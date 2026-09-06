import type { Dua } from '../../../types/dua';

// Sourced from the Masnun Dua open dataset (github.com/islamicapi/masnun-dua)
// - see data/duas/CONTENT_REVIEW.md for the sourcing/verification pipeline
// and the human-review requirement that still applies to every item here.
export const EID_DUAS: Dua[] = [
  {
    id: 'masnun-926',
    type: 'dua',
    categoryId: 'eid',
    title: { en: 'Takbir for Eid (Takbir al Eid)', dv: 'ޢީދު ތަކްބީރު' },
    arabic: 'اَللَّهُ أَكْبرُ اَللَّهُ أَكْبَرُ، لَا إِلَهَ إِلَّا اللَّهُ، وَاللَّهُ أَكْبَرُ اَللَّهُ أَكْبَرُ وَلِلَّهِ الْحَمْدُ',
    transliteration: 'Allaahu akbar, Allaahu akbar, laa ilaaha illallaahu wallaahu akbar, Allahu akbar wa lillaahil hamd.',
    translation: {
      en: 'Allah is great. Allah is great. There is no worthy of worship except Allah. Allah is great. Allah is great. All praise is due to Allah.',
      dv: 'ﷲ އަކްބަރު، ﷲ އަކްބަރު (ﷲ އީ އެންމެ ބޮޑު ރަސްކަލާނގެއެވެ. ﷲ އީ އެންމެ ބޮޑު ރަސްކަލާނގެއެވެ.) ﷲ ފިޔަވައި ޙައްޤުވެގެން އަޅުކަމެއް ވެވޭ އިލާހަކު ނުވެއެވެ. ﷲ އަކްބަރު، ﷲ އަކްބަރު (ﷲ އީ އެންމެ ބޮޑު ރަސްކަލާނގެއެވެ). އަދި ޙަމްދު ހުރީ ﷲ އަށެވެ.',
    },
    source: { type: 'hadith', reference: 'Hassan (Albani). Musannaf: 5650' },
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Sourced from the Masnun Dua dataset (islamicapi/masnun-dua); passed automated Arabic/EN/DV consistency checks but not yet checked by a qualified human reviewer - see CONTENT_REVIEW.md.',
    },
  },
  {
    id: 'masnun-927',
    type: 'dua',
    categoryId: 'eid',
    title: { en: 'Takbir for Eid', dv: 'ޢީދު ތަކްބީރު' },
    arabic: 'اَللَّهُ أَكْبَرُ، اَللَّهُ أَكْبَرُ، اَللَّهُ أَكْبَرُ، وَلِلَّهِ الْحَمْدُ، اَللَّهُ أَكْبَرُ وَأَجَلُّ، اَللَّهُ أَكْبَرُ عَلىَ مَا هَدَانَا',
    transliteration: 'Allaahu akbar, Allaahu akbar, Allaahu akbar, wa lillaahil hamd, allaahu akbar wa ajall, allaahu akbar \'alaa maa hadaana.',
    translation: {
      en: 'Allah is great. Allah is great. Allah is great. All praise is due to Allah. Allah is great and Most High. Allah is great because He has guided us.',
      dv: 'ﷲ އަކްބަރު، ﷲ އަކްބަރު، ﷲ އަކްބަރު (ﷲ އީ އެންމެ ބޮޑު ރަސްކަލާނގެއެވެ). އަދި ޙަމްދުހުރީ ﷲ އަށެވެ. ﷲ އީ އެންމެ ބޮޑު ރަސްކަލާނގެއެވެ. އަދި އެންމެ މަތިވެރި ރަސްކަލާނގެއެވެ. އަޅަމެންނަށް ހިދާޔަތް ދެއްކެވިކަމަށްޓަކައި ﷲ އީ އެންމެ ބޮޑު ރަސްކަލާނގެއެވެ.',
    },
    source: { type: 'hadith', reference: 'Irwa\'ul-Ghalil, Albani: 3/125' },
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Sourced from the Masnun Dua dataset (islamicapi/masnun-dua); passed automated Arabic/EN/DV consistency checks but not yet checked by a qualified human reviewer - see CONTENT_REVIEW.md.',
    },
  },
  {
    id: 'masnun-928',
    type: 'dua',
    categoryId: 'eid',
    title: { en: 'Takbir al Eid (Allaahu akbar kabira)', dv: 'ޢީދު ތަކްބީރު (ﷲ އަކްބަރު ކަބީރާ)' },
    arabic: 'اَللَّهُ أَكْبَرُ كَبِيْرًا، اَللَّهُ أَكْبَرُ كَبِيْرًا، اَللَّهُ أَكْبَرُ وَأَجَلُّ، اَللَّهُ أَكْبَرُ، وَلِلَّهِ الْحَمْدُ',
    transliteration: 'Allaahu akbar kabira, Allaahu akbar kabira, Allaahu akbar wa ajall, Allaahu akbar, wa lillaahil hamd. [1]',
    translation: {
      en: 'Allah is the Greatest, Most Great. Allah is the Greatest, Most Great. Allah is great and Most High. Allah is the Greatest, All praise is due to Allah.\n\nWomen will also recite this takbeer, but in a low voice. So that non mahram can\'t hear the sound of this takbeer. Umm Atiyah (RA) said, ‘Even we used to take menstruating women out to the Eidgah. They stood behind the men; They used to recite takbeer after hearing their takbeer and they also used to recite dua after hearing their dua. They hoped for the blessings and holiness of that day.\' [2] On the other hand, it is bid\'ah to recite the takbeer of the congregation in one voice or the recitation of the takbeer by all at the same time. Since the sunnah of the Prophet (ﷺ) is: In the dhikr of Allaah, each person will recite his own dhikr alone. So it is not right for anyone to deviate from the ideals of him and his companions. [3]',
      dv: 'ﷲ އީ އެންމެ ބޮޑު ރަސްކަލާނގެއެވެ. ﷲ އީ އެންމެ ބޮޑު ރަސްކަލާނގެއެވެ. ﷲ އީ އެންމެ ބޮޑު، އެންމެ މަތިވެރި ރަސްކަލާނގެއެވެ. ﷲ އީ އެންމެ ބޮޑު ރަސްކަލާނގެއެވެ. އަދި ޙަމްދު ހުރީ ﷲ އަށެވެ.',
    },
    source: { type: 'hadith', reference: '[1] Irwa\'ul-Ghalil, Albani: 3/126 [2] Bukhari 971 [3] As-ilatun wa ajbibatun fee salatil Eidain 31-32 p.' },
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Sourced from the Masnun Dua dataset (islamicapi/masnun-dua); passed automated Arabic/EN/DV consistency checks but not yet checked by a qualified human reviewer - see CONTENT_REVIEW.md.',
    },
  },
  {
    id: 'masnun-929',
    type: 'dua',
    categoryId: 'eid',
    title: { en: 'Eid Greeting Dua (Taqabbalallahu minna wa minkum)', dv: 'ޢީދު ތަހުނިޔާ (ތަޤައްބަލަﷲ...)' },
    arabic: 'تَقَبَّلَ اللَّهُ مِنَّا وَمِنْكَ',
    transliteration: 'Taqabbalallahu minna wa minka',
    translation: {
      en: 'May Allah accept it (good deeds) from us and you.\n\nIn the case of plural, \'Minka\' will be replaced by \'Minkum\'.',
      dv: 'އަޅަމެންގެ ކިބައިންނާއި ތިބާގެ ކިބައިން ﷲ (ހެޔޮ ޢަމަލުތައް) ޤަބޫލުކުރައްވާށިއެވެ!',
    },
    source: { type: 'hadith', reference: 'Hasan (Ibn Hajar al-Asqalani). Fathul Bari: 2/517' },
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Sourced from the Masnun Dua dataset (islamicapi/masnun-dua); passed automated Arabic/EN/DV consistency checks but not yet checked by a qualified human reviewer - see CONTENT_REVIEW.md.',
    },
  },
];
