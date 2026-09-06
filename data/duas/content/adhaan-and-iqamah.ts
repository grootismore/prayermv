import type { Dua } from '../../../types/dua';

// See cloths.ts for the sourcing note - same two repositories, same
// hisnul-<N> id scheme, same AI-authored-Dhivehi caveat. This category was
// previously emptied entirely because the Masnun Dua dataset's Dhivehi was
// corrupted for every entry (see data/duas/CONTENT_REVIEW.md). Only the
// chapter's fixed recitable phrases are included here - the surrounding
// instructional text ("repeat what the Mu'adhin says", "supplicate freely
// between adhan and iqamah") has no fixed Arabic wording to ship as a Dua.
export const ADHAAN_AND_IQAMAH_DUAS: Dua[] = [
  {
    id: 'hisnul-23',
    type: 'dua',
    categoryId: 'adhaan-and-iqamah',
    title: { en: 'Dua After Replying to the Adhaan', dv: 'ބަންގި ގޮވުމަށް ޖަވާބުދިނުމަށްފަހު ކިޔާ ދުޢާ' },
    arabic:
      'وَأَنَا أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، وَأَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ، رَضِيتُ بِاللَّهِ رَبًّا، وَبِمُحَمَّدٍ رَسُولًا، وَبِالْإِسْلَامِ دِينًا',
    transliteration:
      "Wa ana ash-hadu an la ilaha illallahu wahdahu la sharika lahu, wa anna Muhammadan 'abduhu wa rasuluhu, raditu billahi rabban, wa bi Muhammadin rasulan wa bil-islami dinan.",
    translation: {
      en: 'I bear witness that none has the right to be worshipped but Allah alone, Who has no partner, and that Muhammad is His slave and His Messenger. I am pleased with Allah as my Lord, with Muhammad as my Messenger and with Islam as my religion.',
      dv: 'އަދި މިއަޅާ ހެކިވަމެވެ! ﷲ މެނުވީ ޙައްޤުވެގެން އަޅުކަން ވެވޭ އެހެން އިލާހަކު ނުވެއެވެ. އެކަލާނގެއީ ބައިވެރިއަކު ނުވާ އެއްކައުވަންތަ ރަސްކަލާނގެއެވެ. އަދި މުޙައްމަދު (ﷺ) އީ، އެކަލާނގެ އަޅާ އަދި ރަސޫލާކަމަށެވެ. ތިމަން ރުހުނީ ﷲ ވެރި ރަސްކަލާނގެ ކަމުގައްޔާއި، މުޙައްމަދު (ﷺ) ރަސޫލާ ކަމުގައްޔާއި، އިސްލާމްދީނަކީ ދީނުގެ ގޮތުގައެވެ.',
    },
    source: { type: 'hadith', reference: 'Muslim 1/290 (Hisn al-Muslim 23)' },
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Arabic from Kind-Unes/Adhkar-Duaa-Multilingual-Database, EN transliteration/translation/reference from samiulahmedjoy/hisnulmuslim (Hisn al-Muslim). Dhivehi written by AI from the English, not yet checked by a qualified human reviewer - see CONTENT_REVIEW.md.',
    },
  },
  {
    id: 'hisnul-25',
    type: 'dua',
    categoryId: 'adhaan-and-iqamah',
    title: { en: 'Dua After the Adhaan', dv: 'ބަންގީގެ ފަހުން ކިޔާ ދުޢާ' },
    arabic:
      'اللَّهُمَّ رَبَّ هَذِهِ الدَّعْوَةِ التَّامَّةِ وَالصَّلَاةِ الْقَائِمَةِ، آتِ مُحَمَّدًا الْوَسِيلَةَ وَالْفَضِيلَةَ، وَابْعَثْهُ مَقَامًا مَحْمُودًا الَّذِي وَعَدْتَهُ',
    transliteration:
      "Allahumma rabba hadhihi'd-da'wati't-tammah was-salati'l-qa'imah, ati Muhammadani'l-wasilata walfadilata, wab'ath-hu maqama'l-mahmudani'l-ladhi wa'adtahu.",
    translation: {
      en: 'O Allah, Lord of this perfect call and established prayer, grant Muhammad the intercession and favor, and raise him to the honored station You have promised him.',
      dv: 'އޭ ﷲ! މި ފުރިހަމަ ގޮވާލެއްވުމާއި، ޤާއިމުވެގެންވާ ނަމާދުގެ ވެރި ރަސްކަލާކޮ! މުޙައްމަދު (ﷺ) އަށް ވަސީލާއާއި ފަޟީލަތް ދެއްވާނދޭވެ! އަދި އިބަރަސްކަލާނގެ އެކަލޭގެފާނަށް ވަޢުދުވެވަޑައިގެންފައިވާ މަޤާމު މަޙްމޫދަށް އެކަލޭގެފާނު ފޮނުއްވާނދޭވެ!',
    },
    source: { type: 'hadith', reference: 'Al-Bukhari 1/152 (Hisn al-Muslim 25)' },
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Arabic from Kind-Unes/Adhkar-Duaa-Multilingual-Database, EN transliteration/translation/reference from samiulahmedjoy/hisnulmuslim (Hisn al-Muslim). Dhivehi written by AI from the English, not yet checked by a qualified human reviewer - see CONTENT_REVIEW.md.',
    },
  },
];
