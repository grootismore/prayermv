import type { Dua } from '../../types/dua';

// See data/duas/CONTENT_REVIEW.md for the human-review requirement that
// applies to every item in this file. Covers the smaller "daily life"
// categories: home, mosque, eating, travel, forgiveness, protection, and
// anxiety/difficulty.

export const DAILY_DUAS: Dua[] = [
  // --- home ---
  {
    id: 'home-entering',
    type: 'dua',
    categoryId: 'home',
    title: { en: 'Entering the Home', dv: 'ގެއަށް ވަނުމުން' },
    arabic: 'بِسْمِ اللَّهِ وَلَجْنَا، وَبِسْمِ اللَّهِ خَرَجْنَا، وَعَلَى رَبِّنَا تَوَكَّلْنَا',
    transliteration: 'Bismillahi walajna, wa bismillahi kharajna, wa ala rabbina tawakkalna.',
    translation: {
      en: 'In the name of Allah we enter, and in the name of Allah we leave, and upon our Lord we place our trust.',
      dv: 'ﷲ ގެ އިސްމުފުޅުން އަޅަމެން ވަނީމުއެވެ. އަދި ﷲ ގެ އިސްމުފުޅުން އަޅަމެން ނުކުތީމުއެވެ. އަދި އަޅަމެންގެ ވެރިރަސްކަލާނގެ މައްޗަށް އަޅަމެން ވަކީލުކުރީމުއެވެ.',
    },
    source: { type: 'hadith', reference: 'Sunan Abi Dawud 5096', grading: 'Sahih' },
    searchTerms: ['entering home', 'walajna'],
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Verify Abu Dawud numbering against a current print edition.',
    },
  },
  {
    id: 'home-leaving',
    type: 'dua',
    categoryId: 'home',
    title: { en: 'Leaving the Home', dv: 'ގެއިން ނުކުތުމުން' },
    arabic: 'بِسْمِ اللَّهِ، تَوَكَّلْتُ عَلَى اللَّهِ، لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ',
    transliteration: "Bismillahi, tawakkaltu 'alallah, la hawla wa la quwwata illa billah.",
    translation: {
      en: 'In the name of Allah, I place my trust in Allah. There is no power and no strength except with Allah.',
      dv: 'ﷲ ގެ އިސްމުފުޅުންނެވެ. ތިމަން ވަކީލުކުރީ ﷲ ގެ މައްޗަށެވެ. ﷲ ގެ ވާގިފުޅާނުލައި، ބާރެއް ކުޅަދާނަކަމެއް ނުވެއެވެ.',
    },
    source: { type: 'hadith', reference: 'Sunan Abi Dawud 5095 / Jami at-Tirmidhi 3426', grading: 'Hasan sahih' },
    benefits: {
      en: 'It is said that whoever says this will be told: you have been guided, sufficed, and protected, and the devil will turn away from him.',
      dv: 'މިބަސް ބުނާ މީހަކަށް ބުނެވެއެވެ: ތިބާ ތެދުމަގު ލިބިއްޖެއެވެ. ފުދިއްޖެއެވެ. ރައްކާތެރިކުރެއްވިއްޖެއެވެ. އަދި شيطان އެ މީހާއާ ދުރަށްދެއެވެ.',
    },
    searchTerms: ['leaving home', 'tawakkaltu alallah'],
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Verify Abu Dawud/Tirmidhi numbering and grading against a current print edition.',
    },
  },

  // --- mosque ---
  {
    id: 'mosque-entering',
    type: 'dua',
    categoryId: 'mosque',
    title: { en: 'Entering the Mosque', dv: 'މިސްކިތަށް ވަނުމުން' },
    arabic: 'اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ',
    transliteration: 'Allahummaf-tah li abwaba rahmatik.',
    translation: {
      en: 'O Allah, open for me the gates of Your mercy.',
      dv: 'އޭ ﷲ! އިބަރަސްކަލާނގެ ރަޙްމަތުގެ ދޮރުތައް، ތިމަންނަށްޓަކައި ހުޅުއްވަވާނދޭވެ!',
    },
    source: { type: 'hadith', reference: 'Sahih Muslim 713', grading: 'Sahih' },
    searchTerms: ['entering mosque', 'abwaba rahmatik'],
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Verify Sahih Muslim numbering against a current print edition.',
    },
  },
  {
    id: 'mosque-leaving',
    type: 'dua',
    categoryId: 'mosque',
    title: { en: 'Leaving the Mosque', dv: 'މިސްކިތުން ނުކުތުމުން' },
    arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ',
    transliteration: 'Allahumma inni as-aluka min fadlik.',
    translation: {
      en: 'O Allah, I ask You of Your bounty.',
      dv: 'އޭ ﷲ! ހަމަކަށަވަރުން ތިމަން އިބަރަސްކަލާނގެ ފަޟްލުވަންތަކަމުން އެދެމެވެ.',
    },
    source: { type: 'hadith', reference: 'Sahih Muslim 713', grading: 'Sahih' },
    searchTerms: ['leaving mosque', 'min fadlik'],
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Same hadith as mosque-entering (Sahih Muslim) - verify numbering together.',
    },
  },

  // --- eating ---
  {
    id: 'eating-before',
    type: 'dua',
    categoryId: 'eating',
    title: { en: 'Before Eating', dv: 'ކެއުމުގެ ކުރިން' },
    arabic: 'بِسْمِ اللَّهِ',
    transliteration: 'Bismillah.',
    translation: {
      en: 'In the name of Allah.',
      dv: 'ﷲ ގެ އިސްމުފުޅުން (ފަށަމެވެ).',
    },
    source: { type: 'hadith', reference: 'Sahih al-Bukhari 5376 / Sahih Muslim 2022', grading: 'Sahih' },
    benefits: {
      en: 'The Prophet ﷺ taught this alongside eating with the right hand and from what is nearest to you.',
      dv: 'ކަނާތުން ކެއުމަށާއި، އަމިއްލައާ އެންމެ ކައިރި ތަނުން ކެއުމަށް ބާރުއަޅުއްވަމުން ނަބިއްޔާ صلى الله عليه وسلم މިބަސް ދަސްކޮށްދެއްވިއެވެ.',
    },
    searchTerms: ['bismillah before eating'],
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Verify Bukhari/Muslim numbering against a current print edition.',
    },
  },
  {
    id: 'eating-forgot-bismillah',
    type: 'dua',
    categoryId: 'eating',
    title: { en: 'If You Forget to Say Bismillah', dv: 'ބިސްމި ކިޔަން ހަނދާން ނެތިއްޖެނަމަ' },
    arabic: 'بِسْمِ اللَّهِ أَوَّلَهُ وَآخِرَهُ',
    transliteration: 'Bismillahi awwalahu wa akhirah.',
    translation: {
      en: 'In the name of Allah, at its beginning and its end.',
      dv: 'އެކަމުގެ ފުރަތަމަ ކޮޅުގައްޔާއި ފަހު ކޮޅުގައިވެސް ވަނީ ﷲ ގެ އިސްމުފުޅުންނެވެ.',
    },
    source: { type: 'hadith', reference: 'Sunan Abi Dawud 3767 / Jami at-Tirmidhi 1858', grading: 'Sahih' },
    searchTerms: ['forgot bismillah', 'awwalahu wa akhirah'],
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Verify Abu Dawud/Tirmidhi numbering against a current print edition.',
    },
  },
  {
    id: 'eating-after',
    type: 'dua',
    categoryId: 'eating',
    title: { en: 'After Eating', dv: 'ކެއުމަށްފަހު' },
    arabic:
      'الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَذَا، وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ',
    transliteration: "Alhamdu lillahil-ladhi at'amani hadha, wa razaqanihi min ghayri hawlim-minni wa la quwwah.",
    translation: {
      en: 'Praise be to Allah who fed me this and provided it for me without any might or power on my part.',
      dv: 'މިއަޅާގެ އެއްވެސް ބާރެއް އަދި ކުޅަދާނަކަމެއް ނެތި، މިއަޅާއަށް މި ކާނާ ދެއްވައި، އަދި އޭގެން މިއަޅާއަށް ރިޒުޤު ދެއްވި ﷲ އަށް ޙަމްދު ހުއްޓެވެ.',
    },
    source: { type: 'hadith', reference: 'Sunan Abi Dawud 4023 / Jami at-Tirmidhi 3458 / Sunan Ibn Majah 3285', grading: 'Sahih' },
    benefits: {
      en: 'Whoever says this after eating, their past sins are forgiven.',
      dv: 'ކައި ނިމުމަށްފަހު މިބަސް ބުނެފި މީހެއްގެ ކުރީގެ ފާފަތައް ފުއްސަވާދެއްވާނެއެވެ.',
    },
    searchTerms: ['after eating dua', 'atamani hadha'],
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Verify numbering across the three collections against current print editions.',
    },
  },

  // --- travel ---
  {
    id: 'travel-setting-out',
    type: 'dua',
    categoryId: 'travel',
    title: { en: 'Setting Out on a Journey', dv: 'ދަތުރެއް ފެށުމުން' },
    arabic:
      'اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ، وَإِنَّا إِلَىٰ رَبِّنَا لَمُنقَلِبُونَ، اللَّهُمَّ إِنَّا نَسْأَلُكَ فِي سَفَرِنَا هَذَا الْبِرَّ وَالتَّقْوَىٰ، وَمِنَ الْعَمَلِ مَا تَرْضَىٰ، اللَّهُمَّ هَوِّنْ عَلَيْنَا سَفَرَنَا هَذَا وَاطْوِ عَنَّا بُعْدَهُ، اللَّهُمَّ أَنْتَ الصَّاحِبُ فِي السَّفَرِ، وَالْخَلِيفَةُ فِي الْأَهْلِ',
    transliteration:
      "Allahu akbar, Allahu akbar, Allahu akbar. Subhanal-ladhi sakhkhara lana hadha wa ma kunna lahu muqrinin, wa inna ila rabbina lamunqalibun. Allahumma inna nas'aluka fi safarina hadhal-birra wat-taqwa, wa minal-'amali ma tarda. Allahumma hawwin 'alayna safarana hadha watwi 'anna bu'dah. Allahumma antas-sahibu fis-safari wal-khalifatu fil-ahl.",
    translation: {
      en: 'Allah is the Greatest, Allah is the Greatest, Allah is the Greatest. Glory be to Him who has made this subservient to us, and we could never have done it ourselves, and to our Lord we shall return. O Allah, we ask You for righteousness and piety in this journey of ours, and for deeds that please You. O Allah, make this journey easy for us and fold up its distance for us. O Allah, You are the Companion on the journey and the Guardian of the family left behind.',
      dv: 'ﷲ އަކްބަރު (٣ ފަހަރު). އަޅަމެންނަށްޓަކައި މި (ސަވާރީ) ކިޔަމަންކޮށްދެއްވި ރަސްކަލާނގެ ހުސްޠާހިރުވަންތަކަމާއެވެ! އަޅަމެންނީ އެ ކިޔަމަންކުރުމަށް ކުޅަދާނަވެގެންވާ ބަޔަކު ކަމުގައި ނުވަމުއެވެ. އަދި ހަމަކަށަވަރުން އަޅަމެން ވަނީ، އަޅަމެންގެ ވެރިރަސްކަލާނގެ ޙަޟްރަތަށް އެނބުރިދާނޭ ބަޔަކު ކަމުގައެވެ. އޭ ﷲ! އަޅަމެންގެ މި ދަތުރުގައި ހެޔޮކަމާއި ތަޤްވާވެރިކަމަށް، އަދި އިބަރަސްކަލާނގެ ރުހިވޮޑިގެންވާ ޢަމަލުތަކަށް އެދި، އިބަރަސްކަލާނގެ ޙަޟްރަތުން ދަންނަވަމެވެ. އޭ ﷲ! މި ދަތުރު އަޅަމެންނަށް ފަސޭހަ ކޮށްދެއްވާނދޭވެ! އަދި އޭގެ ދުރުރާސްތާ ކުރުކޮށްދެއްވާނދޭވެ! އޭ ﷲ! ދަތުރުގެ ބައިވެރިޔަކީ (އެހީތެރިޔަކީ) އިބަރަސްކަލާނގެއެވެ. އަދި އަހުލުވެރިންގެ ބަލަދުވެރިޔަކީ އިބަރަސްކަލާނގެއެވެ. އޭ ﷲ! ހަމަކަށަވަރުން ދަތުރުގެ އުނދަގޫތަކުންނާއި، ހިތާމަވެރި މަންޒަރުތަކުންނާއި، އަދި މުދަލާއި އަހުލުންނަށް ލިބިދާނެ ދެރައަކުން މިއަޅާ އިބަރަސްކަލާނގެ ޙަޟްރަތުން ރައްކާތެރިކަމަށް އެދެމެވެ.',
    },
    source: { type: 'hadith', reference: 'Sahih Muslim 1342', grading: 'Sahih' },
    searchTerms: ['travel dua', 'sakhkhara lana hadha', 'safar dua'],
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Long composite dua drawing on Quran 43:13-14 plus additional hadith wording - verify each clause and the Sahih Muslim numbering against a current print edition.',
    },
  },

  // --- forgiveness ---
  {
    id: 'forgiveness-astaghfirullah-adhim',
    type: 'dua',
    categoryId: 'forgiveness',
    title: { en: 'A Comprehensive Seeking of Forgiveness', dv: 'ފުޅާ ދާއިރާއެއްގައި ފާފަފުއްސެވުމަށް އެދުން' },
    arabic: 'أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ وَأَتُوبُ إِلَيْهِ',
    transliteration: "Astaghfirullahal-'adhimal-ladhi la ilaha illa huwal-Hayyul-Qayyumu wa atubu ilayh.",
    translation: {
      en: 'I seek the forgiveness of Allah, the Mighty, whom there is none worthy of worship except Him, the Ever-Living, the Sustainer, and I repent to Him.',
      dv: 'މިއަޅާގެ ފާފަ ފުއްސެވުން އެދި، މާތްވެގެންވާ ﷲ ގެ ޙަޟްރަތުން ދަންނަވަމެވެ. އެކަލާނގެއީ އެކަލާނގެ މެނުވީ ޙައްޤުވެގެންވާ އިލާހަކު ނުވާ، ދިރިދެމިވޮޑިގެންވާ، ޤައްޔޫމްވަންތަ ރަސްކަލާނގެއެވެ. އަދި އެކަލާނގެއަށް ތައުބާވަމެވެ.',
    },
    source: { type: 'hadith', reference: 'Sunan Abi Dawud 1517 / Jami at-Tirmidhi 3577', grading: 'Sahih' },
    benefits: {
      en: 'It is reported that whoever says this will be forgiven even if he fled from the battlefield.',
      dv: 'ހަނގުރާމައިގެ ސަފުން ފިލައިފި މީހަކުވިޔަސް، މިބަސް ބުނެފި މީހަކަށް ފުއްސެވޭނެ ކަމަށް روايت ކުރެވިފައިވެއެވެ.',
    },
    searchTerms: ['astaghfirullah al adhim', 'general istighfar'],
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Verify Abu Dawud/Tirmidhi numbering and grading against a current print edition.',
    },
  },

  // --- protection ---
  {
    id: 'protection-ayat-al-kursi',
    type: 'dua',
    categoryId: 'protection',
    title: { en: 'Ayat al-Kursi', dv: 'آية الكرسي' },
    arabic:
      'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ',
    transliteration:
      "Allahu la ilaha illa huwal-Hayyul-Qayyum, la ta'khudhuhu sinatuw-wala nawm, lahu ma fis-samawati wa ma fil-ard, man dhal-ladhi yashfa'u 'indahu illa bi-idhnih, ya'lamu ma bayna aydihim wa ma khalfahum, wa la yuhituna bishay'im-min 'ilmihi illa bima sha', wasi'a kursiyyuhus-samawati wal-ard, wa la ya'uduhu hifdhuhuma, wa huwal-'Aliyyul-'Adheem.",
    translation: {
      en: 'Allah - there is no deity except Him, the Ever-Living, the Sustainer of existence. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth. Who is it that can intercede with Him except by His permission? He knows what is before them and what will be after them, and they encompass not a thing of His knowledge except for what He wills. His Kursi extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Great.',
      dv: 'اللَّه އީ، އެކަލާނގެ ފިޔަވައި حق ވެގެން އަޅުކަމެއް ވެވޭ إله އަކުނުވާ ރަސްކަލާނގެއެވެ. ދިރިދެމިވޮޑިގެންވާ، دائم އަށް قائم ވެ ވޮޑިގެންވާ ރަސްކަލާނގެއެވެ. އަވަހާރަފުޅު އައުމެއް އަދި، އަވަހާރަފުޅު ލެއްޕެވުމެއްވެސް އެކަލާނގެއަކަށް ނުވެއެވެ. އުޑުތަކުގައި ވާހައި އެއްޗަކާއި، އަދި، ބިމުގައި ވާހައި އެއްޗެއް މިލްކުވެގެންވަނީ އެކަލާނގެއަށެވެ. އެކަލާނގެ إذن ފުޅާ ނުލައި އެކަލާނގެ حضرة ގައި شفاعة ތެރިވާނޭ މީހަކީ ކާކުހެއްޔެވެ؟ އެއުރެންގެ ކުރިން (އެބަހީ: خلق ތަކުންގެ ކުރިން) އިސްވެގޮސްފައިވާހައި ކަމަކާއި، އެއުރެންގެ ފަހުން ވާނޭހައި ކަމެއްވެސް އެކަލާނގެ ދެނެވޮޑިގެންވެއެވެ. އަދި، އެކަލާނގެ علم ފުޅުގެ ތެރެއިން އެކަލާނގެ އިރާދަކުރެއްވިކަމެއް ފިޔަވައި، އެއްވެސް އެއްޗެއް އެއުރެންނަކަށް އެނގިގެނެއް ނުވެއެވެ. އެކަލާނގެ كرسى، އުޑުތަކާއި، ބިމުގެ އެންމެހައި ކަންކޮޅުތަކަށް ތަނަވަސް ވެގެންވެއެވެ. އެ އުޑުތަކާއި، ބިން، ރައްކާތެރި ކުރައްވައި ހިފެހެއްޓެވުމަށް އެކަލާނގެ حضرة އަކަށް ކުޑަވެސް ބުރަކަމެއް ނުވެއެވެ. އަދި، އެކަލާނގެއީ، އެންމެ މަތިވެރި އެންމެ މާތް ރަސްކަލާނގެއެވެ.',
    },
    source: { type: 'quran', reference: 'Quran 2:255' },
    benefits: {
      en: 'It is reported that whoever recites it before sleeping will have a guardian appointed for them, and the devil will not approach until morning; it is also recited for protection morning and evening, and after each prayer.',
      dv: 'ނިދުމުގެ ކުރިން މިއާية ކިޔަވައިފި މީހަކަށް، ހެނދުނުވަންދެން ބަލަހައްޓާ ملَك އަކު ލައްވާ ކަމަށާއި، شيطان ކައިރި ނުވާ ކަމަށް روايت ކުރެވިފައިވެއެވެ. ހަމައެހެންމެ ހެނދުނާއި ހަވީރު، އަދި ކޮންމެ ނަމާދަކަށްފަހުވެސް ރައްކާތެރިކަމަށްޓަކައި މިއާية ކިޔަވައެވެ.',
    },
    searchTerms: ['ayat al kursi', 'verse of the throne', 'allahu la ilaha illa huwa'],
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Direct Quranic text - check every diacritic against a Mushaf before release. Confirm the Bukhari hadith numbering (jinn/guardian narration) cited for the benefit note.',
    },
  },
  {
    id: 'protection-audhu-bikalimat',
    type: 'dua',
    categoryId: 'protection',
    title: { en: 'Refuge in the Perfect Words of Allah', dv: 'اللهގެ ފުރިހަމަ كلمة ފުޅުތަކުން ރައްކާތެރިކަން ހޯދުން' },
    arabic: 'أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ',
    transliteration: "A'udhu bikalimatillahit-tammati min sharri ma khalaq.",
    translation: {
      en: 'I seek refuge in the perfect words of Allah from the evil of what He has created.',
      dv: 'ﷲ ހެއްދެވި ތަކެތީގެ ނުބައިކަމުން، ﷲ ގެ ފުރިހަމަ ކަލިމަފުޅުތައް މެދުވެރިކޮށް ރައްކާތެރިކަމަށް އެދެމެވެ.',
    },
    source: { type: 'hadith', reference: 'Sahih Muslim 2708', grading: 'Sahih' },
    benefits: {
      en: 'Whoever says this upon settling in a place, nothing will harm him until he departs from that place.',
      dv: 'ތަނަކަށް ދިއުމުން މިބަސް ބުނެފި މީހަކަށް، އެ ތަނުން ފުރައިގެންދާންދެން އެއްވެސް ގެއްލުމެއް ނުވާނެއެވެ.',
    },
    searchTerms: ['audhu bikalimatillah', 'perfect words protection'],
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Verify Sahih Muslim numbering (Khawlah bint Hakim narration) against a current print edition.',
    },
  },

  // --- anxiety ---
  {
    id: 'anxiety-hamm-wal-hazan',
    type: 'dua',
    categoryId: 'anxiety',
    title: { en: 'Relief from Anxiety and Grief', dv: 'ހިތާމައާއި ފިކުރުން ސަލާމަތްވުން' },
    arabic:
      'اللَّهُمَّ إِنِّي عَبْدُكَ، ابْنُ عَبْدِكَ، ابْنُ أَمَتِكَ، نَاصِيَتِي بِيَدِكَ، مَاضٍ فِيَّ حُكْمُكَ، عَدْلٌ فِيَّ قَضَاؤُكَ، أَسْأَلُكَ بِكُلِّ اسْمٍ هُوَ لَكَ سَمَّيْتَ بِهِ نَفْسَكَ، أَوْ أَنْزَلْتَهُ فِي كِتَابِكَ، أَوْ عَلَّمْتَهُ أَحَدًا مِنْ خَلْقِكَ، أَوِ اسْتَأْثَرْتَ بِهِ فِي عِلْمِ الْغَيْبِ عِندَكَ، أَنْ تَجْعَلَ الْقُرْآنَ رَبِيعَ قَلْبِي، وَنُورَ صَدْرِي، وَجَلَاءَ حُزْنِي، وَذَهَابَ هَمِّي',
    transliteration:
      "Allahumma inni 'abduka, ibnu 'abdika, ibnu amatika, nasiyati biyadika, madin fiyya hukmuka, 'adlun fiyya qada'uka, as'aluka bikullis-min huwa lak, sammayta bihi nafsak, aw anzaltahu fi kitabik, aw 'allamtahu ahadam-min khalqik, awis-ta'tharta bihi fi 'ilmil-ghaybi 'indak, an taj'alal-Qur'ana rabi'a qalbi, wa nura sadri, wa jala'a huzni, wa dhahaba hammi.",
    translation: {
      en: 'O Allah, I am Your servant, son of Your servant, son of Your maidservant. My forelock is in Your hand. Your judgement upon me prevails, and Your decree over me is just. I ask You by every name belonging to You which You have named Yourself with, or revealed in Your Book, or taught to any of Your creation, or kept hidden with You in the knowledge of the unseen, that You make the Quran the spring of my heart, the light of my chest, the departure of my sadness, and the release of my anxiety.',
      dv: 'އޭ ﷲ! ހަމަކަށަވަރުން މިއަޅާއީ އިބަރަސްކަލާނގެ އަޅަކީމެވެ. އަދި އިބަރަސްކަލާނގެ އަޅެއްގެ ދަރިއަކީމެވެ. އަދި އިބަރަސްކަލާނގެ އަޅު އަންހެނެއްގެ ދަރިއަކީމެވެ. މިއަޅާގެ ނިތްކުރިވަނީ (އެބަހީ: މިއަޅާގެ ހުރިހާ ކަމެއްމެ ވަނީ) އިބަރަސްކަލާނގެ އަތްޕުޅުގައެވެ. މިއަޅާގެ މައްޗަށް އިބަރަސްކަލާނގެ ޙުކުމްފުޅު ހިނގާނެއެވެ. މިއަޅާގެ މައްޗަށް އިބަރަސްކަލާނގެ ޤަޟާކުރެއްވުންވަނީ ޢަދުލުވެރި ގޮތުގައެވެ. އިބަރަސްކަލާނގެ ޒާތުފުޅަށް ނަންދެއްވާފައިވާ، ނުވަތަ އިބަރަސްކަލާނގެ ޚަލްޤުތަކުންގެ ތެރެއިން މީހަކަށް އުނގަންނަވައިދެއްވާފައިވާ، ނުވަތަ އިބަރަސްކަލާނގެ ފޮތުގައި ބާވައިލައްވާފައިވާ، ނުވަތަ އިބަރަސްކަލާނގެ ޙަޟްރަތުގައިވާ ޣައިބުގެ ޢިލްމުގައި އިބަރަސްކަލާނގެ ޚާއްޞަކުރައްވާފައިވާ އިބަރަސްކަލާނގެ ކޮންމެ އިސްމުފުޅެއް މެދުވެރިކޮށް މިއަޅާ އެދެމެވެ. ޤުރުއާނަކީ މިއަޅާގެ ހިތުގެ ބަހާރު ކަމުގައި ލައްވާނދޭވެ! އަދި މިއަޅާގެ މޭގެ ނޫރު ކަމުގައި ލައްވާނދޭވެ! އަދި މިއަޅާގެ ހިތާމަ ފިލުއްވައިދެނިވި އެއްޗެއް ކަމުގައި ލައްވާނދޭވެ! އަދި މިއަޅާގެ މޮޅިވެރިކަން ގެންދަވާނޭ އެއްޗެއް ކަމުގައި ލައްވާނދޭވެ!',
    },
    source: { type: 'hadith', reference: 'Musnad Ahmad 3712', grading: 'Sahih (per Al-Albani)' },
    searchTerms: ['dua for anxiety', 'abduka ibnu abdika', 'quran spring of my heart'],
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Verify Musnad Ahmad numbering against a current print/critical edition. This is a long dua with a first-draft Dhivehi translation - needs careful native-speaker review before release.',
    },
  },
  {
    id: 'anxiety-dua-of-distress',
    type: 'dua',
    categoryId: 'anxiety',
    title: { en: 'The Dua of Distress', dv: 'ހިތްދަތިކަމުގައި ކިޔާ ދުޢާ' },
    arabic:
      'لَا إِلَٰهَ إِلَّا اللَّهُ الْعَظِيمُ الْحَلِيمُ، لَا إِلَٰهَ إِلَّا اللَّهُ رَبُّ الْعَرْشِ الْعَظِيمِ، لَا إِلَٰهَ إِلَّا اللَّهُ رَبُّ السَّمَاوَاتِ وَرَبُّ الْأَرْضِ وَرَبُّ الْعَرْشِ الْكَرِيمِ',
    transliteration:
      "La ilaha illallahul-'Adheemul-Haleem, la ilaha illallahu rabbul-'arshil-'adheem, la ilaha illallahu rabbus-samawati wa rabbul-ardi wa rabbul-'arshil-kareem.",
    translation: {
      en: 'None has the right to be worshipped except Allah, the Mighty, the Forbearing. None has the right to be worshipped except Allah, Lord of the Mighty Throne. None has the right to be worshipped except Allah, Lord of the heavens, Lord of the earth, and Lord of the Noble Throne.',
      dv: 'މާތް ﷲ ފިޔަވައި ޙައްޤުވެގެން އަޅުކަމެއް ވެވޭ އެހެން އިލާހަކު ނުވެއެވެ. އެކަލާނގެއީ ޙަލީމްވަންތަ ޢަޡީމްވަންތަ ރަސްކަލާނގެއެވެ. މާތް ﷲ ފިޔަވައި ޙައްޤުވެގެން އަޅުކަމެއް ވެވޭ އެހެން އިލާހަކު ނުވެއެވެ. އެކަލާނގެއީ މަތިވެރިވެގެންވާ ޢަރްޝީގެ ވެރި ރަސްކަލާނގެއެވެ. މާތް ﷲ ފިޔަވައި ޙައްޤުވެގެން އަޅުކަމެއް ވެވޭ އެހެން އިލާހަކު ނުވެއެވެ. އެކަލާނގެއީ އުޑުތަކާއި، ބިމުގެ ވެރި ރަސްކަލާނގެއެވެ. އަދި މާތްވެގެންވާ ޢަރްޝީގެ ވެރި ރަސްކަލާނގެއެވެ.',
    },
    source: { type: 'hadith', reference: 'Sahih al-Bukhari 6346 / Sahih Muslim 2730', grading: 'Sahih' },
    searchTerms: ['dua of distress', 'la ilaha illallahul adheem'],
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Verify Bukhari/Muslim numbering against a current print edition.',
    },
  },
];
