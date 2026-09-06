import type { Dua } from '../../types/dua';

// See data/duas/CONTENT_REVIEW.md - every item here needs a qualified
// human reviewer to check Arabic harakat, transliteration, and the
// Dhivehi translation against a printed/authoritative source before this
// content ships to real users. contentReview flags below are left false
// throughout for exactly that reason.

export const MORNING_DUAS: Dua[] = [
  {
    id: 'morning-asbahna',
    type: 'dua',
    categoryId: 'morning',
    title: { en: 'Morning Declaration of Sovereignty', dv: 'ހެނދުނުގެ ވެރިކަން اللهއަށްކަން ބަޔާންކުރުން' },
    arabic:
      'أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ',
    transliteration:
      "Asbahna wa asbahal-mulku lillah, walhamdu lillah, la ilaha illallahu wahdahu la sharika lah, lahul-mulku wa lahul-hamd, wa huwa 'ala kulli shay'in qadeer.",
    translation: {
      en: 'We have reached the morning and at this very time all sovereignty belongs to Allah, and all praise is for Allah. None has the right to be worshipped except Allah, alone, without partner. To Him belongs all sovereignty and praise, and He is over all things omnipotent.',
      dv: 'ތިމަންމެންނަށް ހެނދުނުވެއްޖެއެވެ. އަދި ހުރިހާ ވެރިކަމެއް ވަނީ اللهއަށެވެ. ހަމްދާއި ސަނާ ވަނީ اللهއަށެވެ. اللهމެނުވީ حق ގޮތުގައި އަޅުކަން ވެވޭ إلـه އެއް ނުވެއެވެ. އެކަލާނގެ އެއްކައުވަންތަ ރަސްކަލާނގެއެވެ، شريك އަކާ ނުލައި. ވެރިކަމާއި ހަމްދު ވަނީ އެކަލާނގެއަށެވެ. އަދި އެކަލާނގެއީ ކޮންމެ ކަމެއްގެ މައްޗަށް ކުޅަދުންވަންތަ ރަސްކަލާނގެއެވެ.',
    },
    source: { type: 'hadith', reference: 'Sahih Muslim 2723', grading: 'Sahih' },
    searchTerms: ['asbahna', 'morning sovereignty', 'ha mulku'],
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Verify wording and harakat against a printed Hisn al-Muslim; confirm Sahih Muslim numbering against a current print edition.',
    },
  },
  {
    id: 'morning-bika-asbahna',
    type: 'dua',
    categoryId: 'morning',
    title: { en: 'By You We Enter the Morning', dv: 'އިބަﷲގެ حضرة ން ހެނދުނުވުން' },
    arabic:
      'اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ',
    transliteration:
      "Allahumma bika asbahna, wa bika amsayna, wa bika nahya, wa bika namutu, wa ilaykan-nushur.",
    translation: {
      en: 'O Allah, by You we enter the morning, by You we enter the evening, by You we live, by You we die, and to You is the resurrection.',
      dv: 'އޭ اللهއެވެ! އިބައިލާހުގެ حضرة ން ތިމަންމެންނަށް ހެނދުނުވެއްޖެއެވެ. އަދި އިބައިލާހުގެ حضرة ން ހަވީރުވެއެވެ. އަދި އިބައިލާހުގެ حضرة ން ތިމަންމެން ދިރިއުޅެމެވެ. އަދި އިބައިލާހުގެ حضرة ން ތިމަންމެން މަރުވަމެވެ. އަދި އިބައިލާހުގެ حضرة އަށް އަލުން ދިރުއްވައި محشر ކުރައްވާނެއެވެ.',
    },
    source: { type: 'hadith', reference: 'Jami at-Tirmidhi 3391', grading: 'Hasan' },
    searchTerms: ['allahumma bika asbahna'],
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Confirm exact Tirmidhi hadith number and grading against a current print/critical edition.',
    },
  },
  {
    id: 'morning-sayyid-istighfar',
    type: 'dua',
    categoryId: 'morning',
    title: { en: 'The Master Way of Seeking Forgiveness', dv: 'ފާފަފުއްސެވުމަށް އެދުމުގެ އެންމެ މާތް ބަސް' },
    arabic:
      'اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَٰهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَىٰ عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ',
    transliteration:
      "Allahumma anta rabbi la ilaha illa ant, khalaqtani wa ana 'abduk, wa ana 'ala 'ahdika wa wa'dika mastata'tu, a'udhu bika min sharri ma sana'tu, abu'u laka bini'matika 'alayya, wa abu'u bidhanbi faghfir li fa-innahu la yaghfirudh-dhunuba illa ant.",
    translation: {
      en: 'O Allah, You are my Lord, none has the right to be worshipped except You. You created me and I am Your servant, and I am faithful to Your covenant and promise as much as I am able. I seek refuge in You from the evil of what I have done. I acknowledge Your favour upon me, and I acknowledge my sin, so forgive me, for none forgives sins except You.',
      dv: 'އޭ اللهއެވެ! އިބައިލާހީ ތިމަންގެ ވެރި ރަސްކަލާނގެއެވެ. އިބައިލާހު މެނުވީ حق ގޮތުގައި އަޅުކަން ވެވޭ إلـه އެއް ނުވެއެވެ. އިބައިލާހު ތިމަން ހެއްދެވިއެވެ. ތިމަންނަކީ އިބައިލާހުގެ އަޅެކެވެ. ތިމަންނަށް ކުޅަދާނަވީ މިންވަރަކުން އިބައިލާހުގެ عهد އާއި وعد ގައި ދެމިހުރެމެވެ. ތިމަން ކުޅަ ކަންތަކުގެ ނުބައިކަމުން އިބައިލާހަށް ދިއުމަށް ބަނދެގަނެމެވެ. އިބައިލާހު ދެއްވި نعمة ން إعتراف ކުރަމެވެ. އަދި ތިމަންގެ ފާފައިން إعتراف ކުރަމެވެ. ފަހެ ތިމަންނަށް ފުއްސަވާނދޭވެ! ފަހެ ހަމަކަށަވަރުން އިބައިލާހު މެނުވީ ފާފަ ފުއްސަވާނޭ ފަރާތެއް ނުވެއެވެ.',
    },
    source: { type: 'hadith', reference: 'Sahih al-Bukhari 6306', grading: 'Sahih' },
    benefits: {
      en: 'Whoever says it during the day with firm faith in it and dies that day before evening comes is among the people of Paradise, and whoever says it during the night with firm faith in it and dies before morning comes is among the people of Paradise.',
      dv: 'ދުވާލުގައި ފުރިހަމަ إيمان އާއެކު މިބަސް ކިޔައި ހަވީރުވުމުގެ ކުރިން މަރުވެއްޖެ މީހަކީ ސުވަރުގޭގެ أهل ވެރިންގެ ތެރެއިންވާ މީހެކެވެ. ރޭގަނޑުގައި ފުރިހަމަ إيمان އާއެކު މިބަސް ކިޔައި ހެނދުނުވުމުގެ ކުރިން މަރުވެއްޖެ މީހަކީވެސް ސުވަރުގޭގެ أهل ވެރިންގެ ތެރެއިންވާ މީހެކެވެ.',
    },
    searchTerms: ['sayyid al istighfar', 'best dua for forgiveness', 'anta rabbi'],
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'High-profile, extremely well-known hadith - still needs harakat verified against a printed Sahih al-Bukhari/Hisn al-Muslim before release. Dhivehi rendering is a first draft only.',
    },
  },
  {
    id: 'morning-three-quls',
    type: 'zikr',
    categoryId: 'morning',
    title: { en: 'The Three Quls', dv: 'ތިން قل' },
    arabic:
      'قُلْ هُوَ اللَّهُ أَحَدٌ ﴿١﴾ اللَّهُ الصَّمَدُ ﴿٢﴾ لَمْ يَلِدْ وَلَمْ يُولَدْ ﴿٣﴾ وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ ﴿٤﴾\n\nقُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ﴿١﴾ مِنْ شَرِّ مَا خَلَقَ ﴿٢﴾ وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ ﴿٣﴾ وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ﴿٤﴾ وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ ﴿٥﴾\n\nقُلْ أَعُوذُ بِرَبِّ النَّاسِ ﴿١﴾ مَلِكِ النَّاسِ ﴿٢﴾ إِلَٰهِ النَّاسِ ﴿٣﴾ مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ﴿٤﴾ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ﴿٥﴾ مِنَ الْجِنَّةِ وَالنَّاسِ ﴿٦﴾',
    transliteration:
      "Qul huwallahu ahad. Allahus-samad. Lam yalid wa lam yulad. Wa lam yakul-lahu kufuwan ahad.\n\nQul a'udhu bi rabbil-falaq. Min sharri ma khalaq. Wa min sharri ghasiqin idha waqab. Wa min sharrin-naffathati fil-'uqad. Wa min sharri hasidin idha hasad.\n\nQul a'udhu bi rabbin-nas. Malikin-nas. Ilahin-nas. Min sharril-waswasil-khannas. Alladhi yuwaswisu fi sudurin-nas. Minal-jinnati wan-nas.",
    translation: {
      en: 'Say: He is Allah, [who is] One. Allah, the Eternal Refuge. He neither begets nor is born, nor is there to Him any equivalent. (Al-Ikhlas)\n\nSay: I seek refuge in the Lord of daybreak, from the evil of that which He created, and from the evil of darkness when it settles, and from the evil of the blowers in knots, and from the evil of an envier when he envies. (Al-Falaq)\n\nSay: I seek refuge in the Lord of mankind, the Sovereign of mankind, the God of mankind, from the evil of the retreating whisperer, who whispers [evil] into the breasts of mankind, from among the jinn and mankind. (An-Nas)',
      dv: 'ބުނާށެވެ! އެކަލާނގެއީ اللهއެވެ. އެއްކައުވަންތަ ރަސްކަލާނގެއެވެ. اللهއީ ހުރިހާ ފުށަކުން ފުދިވޮޑިގެންވާ ރަސްކަލާނގެއެވެ. އެކަލާނގެ ދަރިކަލަކު ނުހޯއްދަވައެވެ. އެކަލާނގެ ވިހައި ނުވެއެވެ. އަދި އެއްވެސް ފަރާތެއް އެކަލާނގެއާ ފައި ހަމަނުވެއެވެ. (سورة الإخلاص)\n\nބުނާށެވެ! ފަތިހުގެ ވެރި ރަސްކަލާނގެ حضرة ން ރައްކާތެރިކަން ލިބިގަންނަމެވެ. އެކަލާނގެ ހެއްދެވި ތަކެތީގެ ނުބައިކަމުންނާއި، އަނދިރިވެ ފުއްޓާލައިފި ހިނދު ރޭގަނޑުގެ ނުބައިކަމުންނާއި، ގޮށްތަކަށް ފުމެލާ ބައެއްގެ ނުބައިކަމުންނާއި، حسد ކުރާހިނދު حاسد އެއްގެ ނުބައިކަމުން. (سورة الفلق)\n\nބުނާށެވެ! މީސްތަކުންގެ ވެރި ރަސްކަލާނގެ حضرة ން ރައްކާތެރިކަން ލިބިގަންނަމެވެ. މީސްތަކުންގެ ރަސްގެފާނު، މީސްތަކުންގެ إلـه، ފިލައިދާ وسواس ދޭ شيطانއެއްގެ ނުބައިކަމުން. އެއީ މީސްތަކުންގެ ހިތްތަކަށް وسواس ދޭ ފަރާތެވެ. الجن ންގެ ތެރެއިންނާއި، މީސްތަކުންގެ ތެރެއިން. (سورة الناس)',
    },
    source: { type: 'quran', reference: 'Quran 112, 113, 114' },
    repetitions: 3,
    benefits: {
      en: 'The Prophet ﷺ used to recite these three surahs in the morning and evening, and blow into his hands and wipe over his body before sleeping - reported as protection through Allah’s permission.',
      dv: 'ނަބިއްޔާ صلى الله عليه وسلم ހެނދުނާއި ހަވީރު މި ތިން سورة ކިޔަވައި، ދެއަތްތިލައަށް ފުމެލައްވައި ހަށިކޮޅުގައި ފުހުއްވަވައި ހަދާ ވިދާޅުވިއެވެ.',
    },
    searchTerms: ['three quls', 'al ikhlas', 'al falaq', 'an nas', 'ikhlas falaq nas'],
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Quranic text - verify every diacritic against a Mushaf (Uthmani script) before release; this is the highest-stakes content in the entire collection.',
    },
  },
];
