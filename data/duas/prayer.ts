import type { Dua } from '../../types/dua';

// See data/duas/CONTENT_REVIEW.md for the human-review requirement that
// applies to every item in this file.

export const AFTER_SALAH_DUAS: Dua[] = [
  {
    id: 'prayer-astaghfirullah-3',
    type: 'zikr',
    categoryId: 'afterSalah',
    title: { en: 'Seeking Forgiveness (x3)', dv: 'ފާފަފުއްސެވުމަށް އެދުން (٣ ފަހަރު)' },
    arabic: 'أَسْتَغْفِرُ اللَّهَ',
    transliteration: 'Astaghfirullah.',
    translation: {
      en: 'I seek the forgiveness of Allah.',
      dv: 'ތިމަން اللهގެ حضرة ން ފާފަފުއްސެވުމަށް އެދެމެވެ.',
    },
    source: { type: 'hadith', reference: 'Sahih Muslim 591', grading: 'Sahih' },
    repetitions: 3,
    benefits: {
      en: 'The first thing the Prophet ﷺ said upon finishing every prayer, before the salam dua that follows.',
      dv: 'ނަބިއްޔާ صلى الله عليه وسلم ކޮންމެ ނަމާދަކުން ސަލާމް ދެއްވުމަށްފަހު އެންމެ ފުރަތަމަ ވިދާޅުވި ބަސްފުޅު.',
    },
    searchTerms: ['astaghfirullah', 'after prayer forgiveness'],
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Confirm exact Sahih Muslim numbering (Thawban narration) against a current print edition.',
    },
  },
  {
    id: 'prayer-antas-salam',
    type: 'dua',
    categoryId: 'afterSalah',
    title: { en: 'You Are Peace', dv: 'ސަލާމަތްތެރިކަން ދެއްވަނީ اللهއެވެއެވެ' },
    arabic: 'اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ، تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ',
    transliteration: "Allahumma antas-salamu wa minkas-salam, tabarakta ya dhal-jalali wal-ikram.",
    translation: {
      en: 'O Allah, You are Peace and from You comes peace. Blessed are You, O Owner of majesty and honour.',
      dv: 'އޭ اللهއެވެ! اللهއީ سلام ދޭ ފަރާތެވެ. سلام ވަނީ اللهގެ حضرة ން ދެއްވާ ސަލާމަތެކެވެ. اللهގެ مبارك ވަންތަކަން ބޮޑުވެގެންވެއެވެ. އޭ عظمة އާއި إكرام ގެ ވެރި ރަސްކަލާނގެއެވެ.',
    },
    source: { type: 'hadith', reference: 'Sahih Muslim 591', grading: 'Sahih' },
    searchTerms: ['antas salam', 'after prayer dua'],
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Same hadith as prayer-astaghfirullah-3 (Thawban, Sahih Muslim) - verify numbering and wording together.',
    },
  },
  {
    id: 'prayer-tasbih-hundred',
    type: 'zikr',
    categoryId: 'afterSalah',
    title: { en: 'Tasbih, Tahmid, Takbir, Completing a Hundred', dv: 'ތަސްބީޙް، ތަޙްމީދު، ތަކްބީރު، ސަތޭކަ ފުރިހަމަކުރުން' },
    arabic:
      'سُبْحَانَ اللَّهِ (ثَلَاثًا وَثَلَاثِينَ) وَالْحَمْدُ لِلَّهِ (ثَلَاثًا وَثَلَاثِينَ) وَاللَّهُ أَكْبَرُ (ثَلَاثًا وَثَلَاثِينَ) وَتَمَامُ الْمِائَةِ: لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ',
    transliteration:
      "Subhanallah (thirty-three times), walhamdu lillah (thirty-three times), wallahu akbar (thirty-three times), then to complete a hundred: la ilaha illallahu wahdahu la sharika lah, lahul-mulku wa lahul-hamd, wa huwa 'ala kulli shay'in qadeer.",
    translation: {
      en: 'Glory be to Allah (33 times), praise be to Allah (33 times), Allah is the Greatest (33 times) - that is ninety-nine - and to complete a hundred: none has the right to be worshipped except Allah, alone, without partner. To Him belongs all sovereignty and praise, and He is over all things omnipotent.',
      dv: 'ﷲ ހުސްޠާހިރުވަންތަކަމާއެވެ (٣٣ ފަހަރު)، ޙަމްދު ﷲ އަށެވެ (٣٣ ފަހަރު)، ﷲ އީ އެންމެ ބޮޑުވަންތަ ރަސްކަލާނގެއެވެ (٣٣ ފަހަރު) - އެއީ ނުވަދިހަ ނުވަ ފަހަރެވެ. ސަތޭކަ ފުރިހަމަކުރުމަށް: ﷲ މެނުވީ ޙައްޤުވެގެން އަޅުކަމެއް ވެވޭ އިލާހަކު ނުވެއެވެ. އެކަލާނގެ އެއްކައުވަންތައެވެ. އެކަލާނގެއަށް ބައިވެރިޔަކު ނުވެއެވެ. ވެރިކަން ވަނީ އެކަލާނގެއަށެވެ. އަދި ޙަމްދު ވަނީ އެކަލާނގެއަށެވެ. އަދި އެކަލާނގެއީ ކޮންމެ ކަމެއްގެ މައްޗަށް ކުޅަދުންވަންތަ ރަސްކަލާނގެއެވެ.',
    },
    source: { type: 'hadith', reference: 'Sahih Muslim 597', grading: 'Sahih' },
    benefits: {
      en: 'Whoever does this after every prayer will have their sins forgiven even if they are as abundant as the foam of the sea.',
      dv: 'ކޮންމެ ނަމާދަކަށްފަހު މިގޮތަށް ކިޔައިފި މީހެއްގެ ފާފަތައް، ކަނޑުގެ ފޮނުތަކާ އެއްވަރު ވިޔަސް ފުއްސަވާދެއްވާނެއެވެ.',
    },
    searchTerms: ['tasbih tahmid takbir', 'subhanallah 33', 'after prayer dhikr'],
    // One phrase per card on the reading screen (see components/dua/DuaZikrFlow.tsx) -
    // the `arabic`/`transliteration`/`translation` fields above stay as the
    // complete combined text for search/sharing/preview.
    segments: [
      {
        arabic: 'سُبْحَانَ اللَّهِ',
        transliteration: 'Subhanallah.',
        translation: { en: 'Glory be to Allah.', dv: 'ﷲ ހުސްޠާހިރުވަންތަކަމާއެވެ!' },
        repetitions: 33,
      },
      {
        arabic: 'وَالْحَمْدُ لِلَّهِ',
        transliteration: 'Walhamdu lillah.',
        translation: { en: 'Praise be to Allah.', dv: 'ޙަމްދު ﷲ އަށެވެ.' },
        repetitions: 33,
      },
      {
        arabic: 'وَاللَّهُ أَكْبَرُ',
        transliteration: 'Wallahu akbar.',
        translation: { en: 'Allah is the Greatest.', dv: 'ﷲ އީ އެންމެ ބޮޑުވަންތަ ރަސްކަލާނގެއެވެ.' },
        repetitions: 33,
      },
      {
        arabic:
          'لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ',
        transliteration:
          "La ilaha illallahu wahdahu la sharika lah, lahul-mulku wa lahul-hamd, wa huwa 'ala kulli shay'in qadeer.",
        translation: {
          en: 'None has the right to be worshipped except Allah, alone, without partner. To Him belongs all sovereignty and praise, and He is over all things omnipotent.',
          dv: 'ﷲ މެނުވީ ޙައްޤުވެގެން އަޅުކަމެއް ވެވޭ އިލާހަކު ނުވެއެވެ. އެކަލާނގެ އެއްކައުވަންތައެވެ. އެކަލާނގެއަށް ބައިވެރިޔަކު ނުވެއެވެ. ވެރިކަން ވަނީ އެކަލާނގެއަށެވެ. އަދި ޙަމްދު ވަނީ އެކަލާނގެއަށެވެ. އަދި އެކަލާނގެއީ ކޮންމެ ކަމެއްގެ މައްޗަށް ކުޅަދުންވަންތަ ރަސްކަލާނގެއެވެ.',
        },
        repetitions: 1,
      },
    ],
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Confirm exact Sahih Muslim numbering (Abu Hurairah narration) - distinct from the unrelated "Tasbih of Fatimah" (33/33/34, before sleep), which this collection does not include, to avoid conflating the two hadiths. The per-segment breakdown needs the same Arabic/transliteration/translation review as the combined text.',
    },
  },
];
