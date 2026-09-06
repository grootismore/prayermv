import type { Dua } from '../../../types/dua';

// See cloths.ts for the sourcing note - same two repositories, same
// hisnul-<N> id scheme, same AI-authored-Dhivehi caveat. This category was
// previously emptied entirely because the Masnun Dua dataset's Dhivehi was
// corrupted for every entry (see data/duas/CONTENT_REVIEW.md).
export const ABLUTION_AND_BATH_DUAS: Dua[] = [
  {
    id: 'hisnul-12',
    type: 'dua',
    categoryId: 'ablution-and-bath',
    title: { en: 'Dua Before Ablution', dv: 'ވުޟޫކުރުމުގެ ކުރިން ކިޔާ ދުޢާ' },
    arabic: 'بِسْمِ اللَّهِ',
    transliteration: 'Bismillahi',
    translation: {
      en: 'In the Name of Allah.',
      dv: 'ﷲ ގެ އިސްމުފުޅުން ފަށަމެވެ.',
    },
    source: { type: 'hadith', reference: 'Abu Dawud, Ibn Majah, and Ahmad (Hisn al-Muslim 12)' },
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Arabic from Kind-Unes/Adhkar-Duaa-Multilingual-Database, EN transliteration/translation/reference from samiulahmedjoy/hisnulmuslim (Hisn al-Muslim). Dhivehi written by AI from the English, not yet checked by a qualified human reviewer - see CONTENT_REVIEW.md.',
    },
  },
  {
    id: 'hisnul-13',
    type: 'dua',
    categoryId: 'ablution-and-bath',
    title: { en: 'Dua After Completing Ablution (1)', dv: 'ވުޟޫކޮށް ނިމުމުން ކިޔާ ދުޢާ (1)' },
    arabic: 'أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ',
    transliteration: "Ash-hadu an la ilaha illallahu wahdahu la sharika lahu wa ash-hadu anna Muhammadan 'abduhu wa Rasuluhu.",
    translation: {
      en: 'I bear witness that none has the right to be worshipped but Allah alone, Who has no partner; and I bear witness that Muhammad is His slave and His Messenger.',
      dv: 'މިއަޅާ ހެކިވަމެވެ! ﷲ މެނުވީ ޙައްޤުވެގެން އަޅުކަން ވެވޭ އެހެން އިލާހަކު ނުވެއެވެ. އެކަލާނގެއީ ބައިވެރިއަކު ނުވާ އެއްކައުވަންތަ ރަސްކަލާނގެއެވެ. އަދި މިއަޅާ ހެކިވަމެވެ! މުޙައްމަދު (ﷺ) އީ، އެކަލާނގެ އަޅާ އަދި ރަސޫލާއެވެ.',
    },
    source: { type: 'hadith', reference: 'Muslim 1/209 (Hisn al-Muslim 13)' },
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Arabic from Kind-Unes/Adhkar-Duaa-Multilingual-Database, EN transliteration/translation/reference from samiulahmedjoy/hisnulmuslim (Hisn al-Muslim). Dhivehi written by AI from the English, not yet checked by a qualified human reviewer - see CONTENT_REVIEW.md.',
    },
  },
  {
    id: 'hisnul-14',
    type: 'dua',
    categoryId: 'ablution-and-bath',
    title: { en: 'Dua After Completing Ablution (2)', dv: 'ވުޟޫކޮށް ނިމުމުން ކިޔާ ދުޢާ (2)' },
    arabic: 'اللَّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ وَاجْعَلْنِي مِنَ الْمُتَطَهِّرِينَ',
    transliteration: "Allahummaj'alni minat-tawwabina waj'alni minal-mutatahhirin.",
    translation: {
      en: 'O Allah, make me among those who turn to You in repentance, and make me among those who are purified.',
      dv: 'އޭ ﷲ! އިބަރަސްކަލާނގެ ޙަޟްރަތަށް ތައުބާވާ މީހުންގެ ތެރެއިން މިއަޅާ ލައްވާނދޭވެ! އަދި ޠާހިރުވެ ސާފުވެގެންވާ މީހުންގެ ތެރެއިން މިއަޅާ ލައްވާނދޭވެ!',
    },
    source: { type: 'hadith', reference: 'At-Tirmidhi 1/78 (Hisn al-Muslim 14)' },
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Arabic from Kind-Unes/Adhkar-Duaa-Multilingual-Database, EN transliteration/translation/reference from samiulahmedjoy/hisnulmuslim (Hisn al-Muslim). Dhivehi written by AI from the English, not yet checked by a qualified human reviewer - see CONTENT_REVIEW.md.',
    },
  },
  {
    id: 'hisnul-15',
    type: 'dua',
    categoryId: 'ablution-and-bath',
    title: { en: 'Dua After Completing Ablution (3)', dv: 'ވުޟޫކޮށް ނިމުމުން ކިޔާ ދުޢާ (3)' },
    arabic: 'سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا أَنْتَ، أَسْتَغْفِرُكَ وَأَتُوبُ إِلَيْكَ',
    transliteration: "Subhanaka Allahumma wa bihamdika, ash-hadu an la ilaha illa Anta, astaghfiruka wa atubu ilayk.",
    translation: {
      en: 'Glory is to You, O Allah, and praise; I bear witness that there is none worthy of worship but You. I seek Your forgiveness and turn to You in repentance.',
      dv: 'އޭ ﷲ! އިބަރަސްކަލާނގެ ހުސްޠާހިރުވަންތަކަމަށް ތަސްބީޙަކިޔައި، ޙަމްދުކުރަމެވެ. ހަމަކަށަވަރުން، އިބަރަސްކަލާނގެ މެނުވީ ޙައްޤުވެގެން އަޅުކަން ވެވޭ އިލާހަކު ނުވާކަމަށް ހެކިވަމެވެ. އިބަރަސްކަލާނގެ ޙަޟްރަތުން ފުއްސެވުމަށް އެދެމެވެ. އަދި އިބަރަސްކަލާނގެ ޙަޟްރަތަށް ތައުބާވަމެވެ.',
    },
    source: { type: 'hadith', reference: "An-Nasa'i, 'Amalul-Yawm wal-Laylah (Hisn al-Muslim 15)" },
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Arabic from Kind-Unes/Adhkar-Duaa-Multilingual-Database, EN transliteration/translation/reference from samiulahmedjoy/hisnulmuslim (Hisn al-Muslim). Dhivehi written by AI from the English, not yet checked by a qualified human reviewer - see CONTENT_REVIEW.md.',
    },
  },
];
