import type { Dua } from '../../../types/dua';

// Sourced from two independently-maintained open repositories rather than
// the Masnun Dua dataset (which had this category's Dhivehi corrupted for
// every entry - see data/duas/CONTENT_REVIEW.md): Arabic text from
// Kind-Unes/Adhkar-Duaa-Multilingual-Database, and English
// transliteration/translation/reference from samiulahmedjoy/hisnulmuslim
// (itself a plain-text rendering of Said ibn Ali Al-Qahtani's Hisn
// al-Muslim). Ids use that book's own numbering (`hisnul-<N>`) since both
// sources independently cite it, which is how the pairing was verified.
// Dhivehi title/translation for these entries was written by AI from the
// English/Arabic, not sourced from either dataset - see CONTENT_REVIEW.md
// for the human-review requirement that applies to every item here.
export const CLOTHS_DUAS: Dua[] = [
  {
    id: 'hisnul-5',
    type: 'dua',
    categoryId: 'cloths',
    title: { en: 'Dua When Wearing a Garment', dv: 'ހެދުމެއް ލައިގެންހުރެ ކިޔާ ދުޢާ' },
    arabic: 'الْحَمْدُ لِلَّهِ الَّذِي كَسَانِي هَذَا (الثَّوْبَ) وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ',
    transliteration: "Alhamdu lillahil-ladhi kasani hadha (aththawba) wa razaqanihi min ghayri hawlim-minni wa la quwwah.",
    translation: {
      en: 'Praise is to Allah Who has clothed me with this (garment) and provided it for me, though I was powerless myself and incapable.',
      dv: 'ހަމަދު ހުއްޓީ ﷲ އަށެވެ. އެކަލާނގެއީ، މިއަޅާގެ އަމިއްލަ ބާރެއް ނުވަތަ ކުޅަދާނަކަމެއް ނެތި، މި ފޭރާން މިއަޅާ ލައްވައި، މިއަޅާއަށް މިއިން ރިޒުޤު ދެއްވި ރަސްކަލާނގެއެވެ.',
    },
    source: { type: 'hadith', reference: 'Al-Bukhari, Muslim, Abu Dawud, Ibn Majah, At-Tirmidhi (Hisn al-Muslim 5)' },
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Arabic from Kind-Unes/Adhkar-Duaa-Multilingual-Database, EN transliteration/translation/reference from samiulahmedjoy/hisnulmuslim (Hisn al-Muslim). Dhivehi written by AI from the English, not yet checked by a qualified human reviewer - see CONTENT_REVIEW.md.',
    },
  },
  {
    id: 'hisnul-6',
    type: 'dua',
    categoryId: 'cloths',
    title: { en: 'Dua When Wearing a New Garment', dv: 'އައު ހެދުމެއް ލައިގެންހުރެ ކިޔާ ދުޢާ' },
    arabic: 'اللَّهُمَّ لَكَ الْحَمْدُ أَنْتَ كَسَوْتَنِيهِ، أَسْأَلُكَ مِنْ خَيْرِهِ وَخَيْرِ مَا صُنِعَ لَهُ، وَأَعُوذُ بِكَ مِنْ شَرِّهِ وَشَرِّ مَا صُنِعَ لَهُ',
    transliteration:
      "Allahumma lakal-hamdu anta kasawtanihi, as'aluka min khayrihi wa khayri ma suni'a lahu, wa a'udhu bika min sharrihi wa sharri ma suni'a lahu.",
    translation: {
      en: 'O Allah, praise is to You. You have clothed me. I ask You for its goodness and the goodness of what it has been made for, and I seek Your protection from the evil of it and the evil of what it has been made for.',
      dv: 'އޭ ﷲ! ހަމަދު ހުއްޓީ އިބަރަސްކަލާނގެއަށެވެ. މިއަޅާއަށް މި ފޭރާން ދެއްވީ އިބަރަސްކަލާނގެއެވެ. މީގެ ހެވާއި، މީ ފަރުމާކުރެވިފައިވަނީ ކޮންކަމަކަށްކަމުގައި ވިޔަސް އެކަމުގެ ހެޔޮކަން މިއަޅާ އިބަރަސްކަލާނގެ ޙަޟްރަތުން ދަންނަވަމެވެ. އަދި މީގެ ނުބައިކަމުންނާއި، މީ ފަރުމާކުރެވިފައިވަނީ ކޮންކަމަކަށްކަމުގައި ވިޔަސް އެކަމުގެ ނުބައިކަމުން މިއަޅާ އިބަރަސްކަލާނގެ ޙަޟްރަތުން ރައްކާތެރިކަމަށް އެދެމެވެ.',
    },
    source: { type: 'hadith', reference: 'Abu Dawud and At-Tirmidhi (Hisn al-Muslim 6)' },
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Arabic from Kind-Unes/Adhkar-Duaa-Multilingual-Database, EN transliteration/translation/reference from samiulahmedjoy/hisnulmuslim (Hisn al-Muslim). Dhivehi written by AI from the English, not yet checked by a qualified human reviewer - see CONTENT_REVIEW.md.',
    },
  },
  {
    id: 'hisnul-7',
    type: 'dua',
    categoryId: 'cloths',
    title: { en: 'Dua for Someone Wearing a New Garment (1)', dv: 'އައު ހެދުމެއް ލީ މީހަކަށް ކިޔާ ދުޢާ (1)' },
    arabic: 'تُبْلِي وَيُخْلِفُ اللَّهُ تَعَالَى',
    transliteration: "Tubli wa yukhliful-lahu ta'ala.",
    translation: {
      en: 'May Allah replace it when it is worn out.',
      dv: 'މިހެދުން ބާވަންދެން ބޭނުންކުރައްވާށެވެ! އަދި (އެ ބާވުމުން) މާތް ﷲ އެއަށްވުރެ ހެޔޮ އެއްޗެއް ބަދަލުގައި ދެއްވާނދޭވެ!',
    },
    source: { type: 'hadith', reference: 'Abu Dawud 4/41 (Hisn al-Muslim 7)' },
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Arabic from Kind-Unes/Adhkar-Duaa-Multilingual-Database, EN transliteration/translation/reference from samiulahmedjoy/hisnulmuslim (Hisn al-Muslim). Dhivehi written by AI from the English, not yet checked by a qualified human reviewer - see CONTENT_REVIEW.md.',
    },
  },
  {
    id: 'hisnul-8',
    type: 'dua',
    categoryId: 'cloths',
    title: { en: 'Dua for Someone Wearing a New Garment (2)', dv: 'އައު ހެދުމެއް ލީ މީހަކަށް ކިޔާ ދުޢާ (2)' },
    arabic: 'الْبَسْ جَدِيدًا، وَعِشْ حَمِيدًا، وَمُتْ شَهِيدًا',
    transliteration: "Ilbas jadidan, wa 'ish hamidan, wa mut shahidan.",
    translation: {
      en: 'Put on new clothes, live a praise-worthy life and die as a martyr.',
      dv: 'އައު ހެދުން ލައްވާށެވެ! ރިވެތި ސާލިޙު ދިރިއުޅުމެއް އުޅުއްވާށެވެ! އަދި ޝަހީދެއްގެ ގޮތުގައި މަރުވެވަޑައިގަންނަވާށެވެ!',
    },
    source: { type: 'hadith', reference: 'Ibn Majah 2/1178 (Hisn al-Muslim 8)' },
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Arabic from Kind-Unes/Adhkar-Duaa-Multilingual-Database, EN transliteration/translation/reference from samiulahmedjoy/hisnulmuslim (Hisn al-Muslim). Dhivehi written by AI from the English, not yet checked by a qualified human reviewer - see CONTENT_REVIEW.md.',
    },
  },
  {
    id: 'hisnul-9',
    type: 'dua',
    categoryId: 'cloths',
    title: { en: 'Dua Before Undressing', dv: 'ހެދުން ބާލާއިރު ކިޔާ ދުޢާ' },
    arabic: 'بِسْمِ اللَّهِ',
    transliteration: 'Bismillahi',
    translation: {
      en: 'In the Name of Allah.',
      dv: 'ﷲ ގެ އިސްމުފުޅުން ފަށަމެވެ.',
    },
    source: { type: 'hadith', reference: "At-Tirmidhi 2/505 (Hisn al-Muslim 9)" },
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Arabic from Kind-Unes/Adhkar-Duaa-Multilingual-Database, EN transliteration/translation/reference from samiulahmedjoy/hisnulmuslim (Hisn al-Muslim). Dhivehi written by AI from the English, not yet checked by a qualified human reviewer - see CONTENT_REVIEW.md.',
    },
  },
];
