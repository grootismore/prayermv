import type { Dua } from '../../../types/dua';

// See cloths.ts for the sourcing note - same two repositories, same
// hisnul-<N> id scheme, same AI-authored-Dhivehi caveat. This category was
// previously emptied entirely because the Masnun Dua dataset's Dhivehi for
// both of its entries was swapped with an unrelated rain dua (see
// data/duas/CONTENT_REVIEW.md).
export const HOME_DUAS: Dua[] = [
  {
    id: 'hisnul-16',
    type: 'dua',
    categoryId: 'home',
    title: { en: 'Dua When Leaving the House (1)', dv: 'ގެއިން ނުކުމެގެންދާއިރު ކިޔާ ދުޢާ (1)' },
    arabic: 'بِسْمِ اللَّهِ، تَوَكَّلْتُ عَلَى اللَّهِ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ',
    transliteration: "Bismillahi, tawakkaltu 'alallahi, wa la hawla wa la quwwata illa billah.",
    translation: {
      en: 'In the Name of Allah, I have placed my trust in Allah, there is no might and no power except by Allah.',
      dv: 'ﷲ ގެ އިސްމުފުޅުން ފަށަމެވެ. މިއަޅާ ވަކީލުކުރީ ﷲ އަށެވެ. ބާރެއް ލިބުމާއި ކުޅަދާނަކަމެއް ލިބުމަކީ ހަމައެކަނި ﷲ ގެ ވާގިފުޅާއެކު ވާކަމެކެވެ.',
    },
    source: { type: 'hadith', reference: 'Abu Dawud 4/325, At-Tirmidhi 5/490 (Hisn al-Muslim 16)' },
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Arabic from Kind-Unes/Adhkar-Duaa-Multilingual-Database, EN transliteration/translation/reference from samiulahmedjoy/hisnulmuslim (Hisn al-Muslim). Dhivehi written by AI from the English, not yet checked by a qualified human reviewer - see CONTENT_REVIEW.md.',
    },
  },
  {
    id: 'hisnul-17',
    type: 'dua',
    categoryId: 'home',
    title: { en: 'Dua When Leaving the House (2)', dv: 'ގެއިން ނުކުމެގެންދާއިރު ކިޔާ ދުޢާ (2)' },
    arabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ أَنْ أَضِلَّ، أَوْ أُضَلَّ، أَوْ أَزِلَّ، أَوْ أُزَلَّ، أَوْ أَظْلِمَ، أَوْ أُظْلَمَ، أَوْ أَجْهَلَ، أَوْ يُجْهَلَ عَلَيَّ',
    transliteration:
      "Allahumma inni a'udhu bika an adilla, aw udalla, aw azilla, aw uzalla, aw azlima, aw uzlama, aw ajhala aw yujhala 'alayya.",
    translation: {
      en: 'O Allah, I seek refuge in You lest I misguide others, or I am misguided by others, lest I cause others to err or I am caused to err, lest I abuse others or be abused, and lest I behave foolishly or meet with the foolishness of others.',
      dv: 'އޭ ﷲ! ހަމަކަށަވަރުން، މިއަޅާ މަގުފުރެދުމުންނާއި، މީހަކު މިއަޅާ މަގުފުރައްދާފާނެކަމުންނާއި، ފައި ކަސިޔާރުވުމުންނާއި، މީހަކު މިއަޅާ ފައި ކަސިޔާރުކޮށްފާނެކަމުންނާއި، (މީހަކަށް) އަނިޔާވެރިވުމުންނާއި، މީހަކު މިއަޅާއަށް އަނިޔާވެރިވެދާނެކަމުންނާއި، ޖާހިލުކަން ދެއްކުމުންނާއި، މީހަކު މިއަޅާއާމެދު ޖާހިލުކަން ދައްކާފާނެކަމުން، އިބަރަސްކަލާނގެ ޙަޟްރަތުން ރައްކާތެރިކަމަށް އެދެމެވެ.',
    },
    source: { type: 'hadith', reference: "Abu Dawud, Ibn Majah, An-Nasa'i, At-Tirmidhi (Hisn al-Muslim 17)" },
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Arabic from Kind-Unes/Adhkar-Duaa-Multilingual-Database, EN transliteration/translation/reference from samiulahmedjoy/hisnulmuslim (Hisn al-Muslim). Dhivehi written by AI from the English, not yet checked by a qualified human reviewer - see CONTENT_REVIEW.md.',
    },
  },
  {
    id: 'hisnul-18',
    type: 'dua',
    categoryId: 'home',
    title: { en: 'Dua When Entering the House', dv: 'ގެއަށް ވަދެގެންދާއިރު ކިޔާ ދުޢާ' },
    arabic: 'بِسْمِ اللَّهِ وَلَجْنَا، وَبِسْمِ اللَّهِ خَرَجْنَا، وَعَلَى اللَّهِ رَبِّنَا تَوَكَّلْنَا',
    transliteration: "Bismillahi walajna, wa bismillahi kharajna, wa 'ala Rabbina tawakkalna.",
    translation: {
      en: 'In the Name of Allah we enter, in the Name of Allah we leave, and upon our Lord we depend.',
      dv: 'ﷲ ގެ އިސްމުފުޅުން އަޅަމެން ވަނީމުއެވެ. އަދި ﷲ ގެ އިސްމުފުޅުން އަޅަމެން ނުކުތީމުއެވެ. އަދި އަޅަމެންގެ ވެރި ރަސްކަލާނގެއަށް އަޅަމެން ވަކީލުކުރީމުއެވެ.',
    },
    source: { type: 'hadith', reference: 'Abu Dawud 4/325 (Hisn al-Muslim 18)' },
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Arabic from Kind-Unes/Adhkar-Duaa-Multilingual-Database, EN transliteration/translation/reference from samiulahmedjoy/hisnulmuslim (Hisn al-Muslim). Dhivehi written by AI from the English, not yet checked by a qualified human reviewer - see CONTENT_REVIEW.md.',
    },
  },
];
