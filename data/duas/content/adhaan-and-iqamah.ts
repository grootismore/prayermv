import type { Dua } from '../../../types/dua';

// Sourced from the Masnun Dua open dataset (github.com/islamicapi/masnun-dua)
// - see data/duas/CONTENT_REVIEW.md for the sourcing/verification pipeline
// and the human-review requirement that still applies to every item here.
export const ADHAAN_AND_IQAMAH_DUAS: Dua[] = [
  {
    id: 'masnun-163',
    type: 'dua',
    categoryId: 'adhaan-and-iqamah',
    title: { en: 'Dua after hearing Adhan (Azan dua)', dv: 'ކެއުމުގެ ކުރިން ކިޔާ އެހެން ދުޢާއެއް' },
    arabic: 'أَشْهَدُ أَنْ لَا إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ وَأَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ رَضِيتُ بِاللَّهِ رَبًّا وَبِمُحَمَّدٍ رَسُولًا وَبِالْإِسْلَامِ دِينًا',
    transliteration: 'Ash-hadu an laa ilaaha ill-Allahu wa\'hdahu laa shareeka lahu wa anna mu\'hammadan ‛abduhu wa rasooluhu, radeetu billaahi rabban wa bimu\'hammadin rasoolan wa bil -islaami deen-an',
    translation: {
      en: 'I bear witness that none has the right to be worshipped except Allah, alone, without partner, and that Muhammad is His slave and Messenger (ﷺ). I am pleased with Allah as a Lord, and Muhammad as a Messenger and Islam as a religion.\n\nSa\'d ibn Abi Waqqas (RA) said: The Messenger of Allah (ﷺ) said: "Whoever hears Mu\'adhzin and utters these words, all his sins will be forgiven."',
      dv: 'އޭ ﷲ! އަޅަމެންނަށް މީގައި ބަރަކާތް ލައްވާނދޭވެ! އަދި މިއަށްވުރެ ހެޔޮ އެއްޗެއް އަޅަމެންނަށް ކާން ދެއްވާނދޭވެ!',
    },
    source: { type: 'hadith', reference: 'Muslim: 386' },
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Sourced from the Masnun Dua dataset (islamicapi/masnun-dua); passed automated Arabic/EN/DV consistency checks but not yet checked by a qualified human reviewer - see CONTENT_REVIEW.md.',
    },
  },
  {
    id: 'masnun-164',
    type: 'dua',
    categoryId: 'adhaan-and-iqamah',
    title: { en: 'Dua After Adhan (Durood Sharif)', dv: 'ކައި ނިމުމުން ކިޔާ ދުޢާ' },
    arabic: 'اَللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ، اَللَّهُمَّ بَارِكَ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ',
    transliteration: 'Allaahumma salli \'alaa Mu\'hammadin wa \'alaa \'aali Mu\'hammadin, kamaa sallayta \'alaa \'Ibraaheema wa \'alaa \'aali \'Ibraaheema, \'innaka Hameedun Majeed. Allaahumma baarik \'alaa Mu\'hammadin wa \'alaa \'aali Mu\'hammadin, kamaa baarakta \'alaa \'Ibraaheema wa \'alaa \'aali \'Ibraaheema, \'innaka Hameedun Majeed',
    translation: {
      en: 'O Allah, bestow Your favor on Muhammad (ﷺ) and on the family of Muhammad (ﷺ) as You have bestowed Your favor on Ibrahim (Ah) and on the family of Ibrahim (Ah), You are Praiseworthy, Most Glorious. O Allah, bless Muhammad (ﷺ) and the family of Muhammad (ﷺ) as You have blessed Ibrahim and the family of Ibrahim (Ah), You are Praiseworthy, Most Glorious.\n\nAbdullah bin Amr bin al-As (RA) reported Allah\'s Messenger (ﷺ) as saying: When you hear the Mu\'adhdhin, repeat what he says, then invoke a blessing on me, for everyone who invokes a blessing on me will receive ten blessings from Allah; then beg from Allah al-Wasila for me, which is a rank in Paradise fitting for only one of Allah\'s servants, and I hope that I may be that one. If anyone who asks that I be given the Wasila, he will be assured of my intercession.',
      dv: 'ގިނަގުނަވެގެންވާ، ޠައިބު (ރަނގަޅު)، އަދި ބަރަކާތްތެރި ޙަމްދަކުން ﷲ އަށް ޙަމްދު ހުއްޓެވެ. (އެކަލާނގެ ރިޒުޤަކީ) ދުވަހަކުވެސް ހުސްވާނެ އަދި ނިމިގެންދާނެ އެއްޗެއް ނޫނެވެ. އަދި އެއާ ނުލައި ފުދިގެންވާ އެއްޗެއްވެސް ނޫނެވެ. އޭ އަޅަމެންގެ ވެރި ރަސްކަލާނކޮ! (އަޅަމެންނަށް ދެއްވި ރިޒުޤާމެދު ޝުކުރުވެރިވަމެވެ.)',
    },
    source: { type: 'hadith', reference: 'Muslim: 384' },
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Sourced from the Masnun Dua dataset (islamicapi/masnun-dua); passed automated Arabic/EN/DV consistency checks but not yet checked by a qualified human reviewer - see CONTENT_REVIEW.md.',
    },
  },
  {
    id: 'masnun-165',
    type: 'dua',
    categoryId: 'adhaan-and-iqamah',
    title: { en: 'Dua After Adhan (Azan Dua)', dv: 'މެހެމާނު ސާހިބާއަށް ކުރާ ދުޢާ' },
    arabic: 'اَللَّهُمَّ رَبَّ هَذِهِ الدَّعْوَةِ التَّامَّةِ، وَالصَّلَاةِ الْقَائِمَةِ، آتِ مُحَمَّدًا وَالْوَسِيْلَةَ وَالْفَضِيْلَةَ، وَابْعَثْهُ مَقَامًا مَحْمُوْدًا الَّذِيْ وَعَدْتَهُ',
    transliteration: 'Allaahumma rabba haadhi-hid-da watit-taammah, wassalaatil-qaa’imah, aati mu\'hammadan-il- waseelata wal-fadeelah, wab‛ath-hu maqaaman ma\'hmoodan-illadhee wa‛adtah',
    translation: {
      en: 'O Allah, Owner of this perfect call and Owner of this prayer to be performed, bestow upon Muhammad (ﷺ) al-waseelah and al-fadeelah and raise him upon a praised platform which You have promised him.',
      dv: 'އޭ ﷲ! އިބަރަސްކަލާނގެ އެބައިމީހުންނަށް ދެއްވި ރިޒުޤުގައި އެބައިމީހުންނަށް ބަރަކާތް ލައްވާނދޭވެ! އަދި އެބައިމީހުންނަށް ފާފަ ފުއްސަވައި، އެބައިމީހުންނަށް ރަޙްމަތް ލައްވާނދޭވެ!',
    },
    source: { type: 'hadith', reference: 'Bukhari: 614' },
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Sourced from the Masnun Dua dataset (islamicapi/masnun-dua); passed automated Arabic/EN/DV consistency checks but not yet checked by a qualified human reviewer - see CONTENT_REVIEW.md.',
    },
  },
  {
    id: 'masnun-168',
    type: 'dua',
    categoryId: 'adhaan-and-iqamah',
    title: { en: 'Dua for Imams and Mu\'adhdhins (Dua for Forgiveness)', dv: 'ސުންނަތް ރޯދައެއްގައި ހުއްޓާ ކާން ލިބުމުން ކިޔާ ދުޢާ' },
    arabic: 'اَللَّهُمَّ أَرْشِدِ الْأَئِمَّةَ وَاغْفِرْ لِلْمُؤَذِّنِيْنَ',
    transliteration: 'Allaahumma arshidil a-immata wagfir lilmua-ddhinin',
    translation: {
      en: 'O Allah, guide the imams and forgive the mu\'adhdhins.',
      dv: '(ކާންދިން މީހާއަށް ހެޔޮ ދުޢާ ކުރުން)',
    },
    source: { type: 'hadith', reference: 'Sahih (Albani). Abu Dawud: 517' },
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Sourced from the Masnun Dua dataset (islamicapi/masnun-dua); passed automated Arabic/EN/DV consistency checks but not yet checked by a qualified human reviewer - see CONTENT_REVIEW.md.',
    },
  },
];
