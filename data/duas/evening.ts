import type { Dua } from '../../types/dua';

// See data/duas/CONTENT_REVIEW.md for the human-review requirement that
// applies to every item in this file.

export const EVENING_DUAS: Dua[] = [
  {
    id: 'evening-amsayna',
    type: 'dua',
    categoryId: 'evening',
    title: { en: 'Evening Declaration of Sovereignty', dv: 'ހަވީރުގެ ވެރިކަން اللهއަށްކަން ބަޔާންކުރުން' },
    arabic:
      'أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ',
    transliteration:
      "Amsayna wa amsal-mulku lillah, walhamdu lillah, la ilaha illallahu wahdahu la sharika lah, lahul-mulku wa lahul-hamd, wa huwa 'ala kulli shay'in qadeer.",
    translation: {
      en: 'We have reached the evening and at this very time all sovereignty belongs to Allah, and all praise is for Allah. None has the right to be worshipped except Allah, alone, without partner. To Him belongs all sovereignty and praise, and He is over all things omnipotent.',
      dv: 'ތިމަންމެންނަށް ހަވީރުވެއްޖެއެވެ. އަދި ހުރިހާ ވެރިކަމެއް ވަނީ اللهއަށެވެ. ހަމްދާއި ސަނާ ވަނީ اللهއަށެވެ. اللهމެނުވީ حق ގޮތުގައި އަޅުކަން ވެވޭ إلـه އެއް ނުވެއެވެ. އެކަލާނގެ އެއްކައުވަންތަ ރަސްކަލާނގެއެވެ، شريك އަކާ ނުލައި. ވެރިކަމާއި ހަމްދު ވަނީ އެކަލާނގެއަށެވެ. އަދި އެކަލާނގެއީ ކޮންމެ ކަމެއްގެ މައްޗަށް ކުޅަދުންވަންތަ ރަސްކަލާނގެއެވެ.',
    },
    source: { type: 'hadith', reference: 'Sahih Muslim 2723', grading: 'Sahih' },
    searchTerms: ['amsayna', 'evening sovereignty'],
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Evening counterpart of morning-asbahna - verify wording and harakat against a printed Hisn al-Muslim.',
    },
  },
  {
    id: 'evening-bika-amsayna',
    type: 'dua',
    categoryId: 'evening',
    title: { en: 'By You We Enter the Evening', dv: 'އިބަﷲގެ حضرة ން ހަވީރުވުން' },
    arabic:
      'اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ الْمَصِيرُ',
    transliteration:
      "Allahumma bika amsayna, wa bika asbahna, wa bika nahya, wa bika namutu, wa ilaykal-maseer.",
    translation: {
      en: 'O Allah, by You we enter the evening, by You we enter the morning, by You we live, by You we die, and to You is the final return.',
      dv: 'އޭ اللهއެވެ! އިބައިލާހުގެ حضرة ން ތިމަންމެންނަށް ހަވީރުވެއްޖެއެވެ. އަދި އިބައިލާހުގެ حضرة ން ހެނދުނުވެއެވެ. އަދި އިބައިލާހުގެ حضرة ން ތިމަންމެން ދިރިއުޅެމެވެ. އަދި އިބައިލާހުގެ حضرة ން ތިމަންމެން މަރުވަމެވެ. އަދި އިބައިލާހުގެ حضرة އަށް އެނބުރި ދިއުންވަނީއެވެ.',
    },
    source: { type: 'hadith', reference: 'Jami at-Tirmidhi 3391', grading: 'Hasan' },
    searchTerms: ['allahumma bika amsayna'],
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Evening counterpart of morning-bika-asbahna - confirm exact hadith number/grading and wording against a current print edition.',
    },
  },
];
