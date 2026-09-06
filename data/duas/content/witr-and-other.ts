import type { Dua } from '../../../types/dua';

// Sourced from the Masnun Dua open dataset (github.com/islamicapi/masnun-dua)
// - see data/duas/CONTENT_REVIEW.md for the sourcing/verification pipeline
// and the human-review requirement that still applies to every item here.
export const WITR_AND_OTHER_DUAS: Dua[] = [
  {
    id: 'masnun-278',
    type: 'dua',
    categoryId: 'witr-and-other',
    title: { en: 'Dua for Witr (Doa Qunut)', dv: 'ވިތުރީގެ ޤުނޫތު (١) - ޙަސަންގެފާނުގެ ރިވާޔަތް' },
    arabic: 'اَللَّهُمَّ اهْدِنِيْ فِيمَنْ هَدَيْتَ، وَعَافِنِيْ فِيمَنْ عَافَيْتَ، وَتَوَلَّنِي فِيمَنْ تَوَلَّيْتَ وَبَارِكْ لِي فِيمَا أَعْطَيْتَ وَقِنِيْ شَرَّ مَا قَضَيْتَ فَإِنَّكَ تَقْضِيْ وَلَا يُقْضَى عَلَيْكَ وَإِنَّهُ لَا يَذِلُّ مَنْ وَالَيْتَ، وَلَا يَعِزُّ مَنْ عَادَيْتَ تَبارَكْتَ رَبَّنَا وَتَعَالَيْتَ',
    transliteration: 'Allahum-mahdinee feeman hadayta, wa \'aafinee feeman \'aafayta, wa tawallanee feeman tawallayta, wa baarik lee feemaa \'a\'atayta, wa qinee sharra maa qadhayta, fa\'innaka taqdhee wa laa yuqdhaa \'alayka, wa \'innahu laa yathillu man waalayta, wa laa ya \'izzu man \'aadayta, tabaarakta Rabbanaa wa ta\'aalayta',
    translation: {
      en: 'O Allah, guide me with those whom You have guided, and strengthen me with those whom You have given strength. Take me to Your care with those whom You have taken to Your care. Bless me in what You have given me. Protect me from the evil You have ordained. Surely, You command and are not commanded, and none whom You have committed to Your care shall be humiliated and none whom You have taken as an enemy shall taste glory. You are Blessed, Our Lord, and Exalted.\n\nHasan ibn Ali (RA) said about this Qunoot, "The Messenger of Allah (ﷺ) taught me these words to say in the Witr prayer as the Witr Qunut."',
      dv: 'އޭ ﷲ! އިބަރަސްކަލާނގެ ތެދުމަގު ދެއްކެވި މީހުންގެ ތެރެއިން މިއަޅާއަށް ތެދުމަގު ދައްކަވާނދޭވެ! އަދި ޢާފިޔަތު ދެއްވި މީހުންގެ ތެރެއިން މިއަޅާއަށް ޢާފިޔަތު ދެއްވާނދޭވެ! އަދި އެހީތެރިވެވޮޑިގެންނެވި މީހުންގެ ތެރެއިން މިއަޅާއަށް އެހީތެރިވެވޮޑިގަންނަވާނދޭވެ! އަދި އިބަރަސްކަލާނގެ މިއަޅާއަށް ދެއްވި އެއްޗެއްގައި ބަރަކާތް ލައްވާނދޭވެ! އަދި އިބަރަސްކަލާނގެ މިންވަރުކުރައްވާފައިވާ ކަންކަމުގެ ނުބައިކަމުން މިއަޅާ ސަލާމަތްކޮށްދެއްވާނދޭވެ! ފަހެ، ހަމަކަށަވަރުން ކަންކަން ނިންމަވަނީ އިބަރަސްކަލާނގެއެވެ. އިބަރަސްކަލާނގެ މައްޗަށް އެއްވެސް ފަރާތަކަށް ގޮތެއް ނުނިންމޭނެއެވެ. އިބަރަސްކަލާނގެ އެހީތެރިވެވޮޑިގެންފި މީހަކު ނިކަމެތި ނުވާނެއެވެ. އަދި އިބަރަސްކަލާނގެ ޢަދާވާތްތެރިވެވޮޑިގެންފި މީހަކު ޢިއްޒަތްތެރި ނުވާނެއެވެ. އަޅަމެންގެ ވެރިރަސްކަލާނކޮ! އިބަރަސްކަލާނގެ ބަރަކާތްތެރިވެ މަތިވެރިވެވޮޑިގެންވެއެވެ.',
    },
    source: { type: 'hadith', reference: 'Sahih (Albani). Abu Dawud: 1425' },
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Sourced from the Masnun Dua dataset (islamicapi/masnun-dua); passed automated Arabic/EN/DV consistency checks but not yet checked by a qualified human reviewer - see CONTENT_REVIEW.md.',
    },
  },
  {
    id: 'masnun-279',
    type: 'dua',
    categoryId: 'witr-and-other',
    title: { en: 'Dua e qunoot (Rabbi A\'inni Wala Tu\'in \'Alayya)', dv: 'ޤުނޫތުގެ އިތުރު ދުޢާއެއް (٢) - ރައްބި އަޢިއްނީ' },
    arabic: 'رَبِّ أَعِنِّيْ وَلَا تُعِنْ عَلَيَّ وَانْصُرْنِيْ وَلَا تَنْصُرْ عَلَيَّ وَامْكُرْ لِي وَلَا تَمْكُرْ عَلَيَّ وَاهْدِنِيْ وَيَسِّرِ الْهُدَى لِي (إِلَيَّ) وَانْصُرْنِيْ عَلَى مَنْ بَغَى عَلَيَّ رَبِّ اجْعَلْنِيْ لَكَ شَكَّارًا لَكَ ذَكَّارًا لَكَ رَهَّابًا لَكَ مِطْوَاعًا لَكَ مُخْبِتًا إِلَيْكَ أَوَّاهًا مُنِيْبًا رَبِّ تَقَبَّلْ تَوْبَتِيْ وَاغْسِلْ حَوْبَتِي وَأَجِبْ دَعْوَتِيْ وَثَبِّتْ حُجَّتِيْ وَسَدِّدْ لِسَانِيْ وَاهْدِ قَلْبِيْ وَاسْلُلْ سَخِيْمَةَ صَدْرِيْ',
    transliteration: 'Rabbi A\'inni wa laa tu\'in \'alayya, wansurni wa laa tansur \'alayya, wamkurli wa laa tamkur \'alayya, wahdini wa yassiril-huda li (ilayya) wansurni \'alaa man bagha \'alayya. Rabbij\'alni laka shakkaran laka dhakkaran, laka rahhaban, laka mitwaa\'an, laka mukhbitan, \'ilayka awwaa\'han muniban. Rabbi Taqabbal tawbati, waghsil ‘hawbati wa ajib da\'wati, wa thabbit hujjati, wa saddid lisaani, wahdi qalbi, waslul sakhimata sadri',
    translation: {
      en: 'My Lord, aid me and do not aid against me, and grant me victory and do not grant victory over me, plot for me and do not plot against me, guide me and facilitate guidance for me, grant me victory over those who transgress against me. My Lord, make me ever-grateful to You, ever-remembering of You, ever-fearful of You, ever-obedient to You, ever-humble to You, oft-turning and returning to You. My Lord, accept my repentance, wash my sin, answer my call, make firm my proof, make firm my tongue, guide my heart, and remove resentment from my heart (the treachery of my chest).\n\nIbn Abbas (RA) said, The Messenger of Allah (ﷺ) supplicated with this dua. One of the narrator of this hadith Abul Hasan Tanafisi (R) said, I asked Imaaam Waqi’ ibn Al-Jarrah (R) (196 H) (narrator of this hadith) that “Can I supplicate with this dua in Qunut of Witr prayer? He said, ”Yes”.',
      dv: 'މިއަޅާގެ ވެރިރަސްކަލާނކޮ! މިއަޅާއަށް ވާގިވެރިވެވޮޑިގަންނަވާނދޭވެ! އަދި މިއަޅާއާ ދެކޮޅަށް އެހެން ފަރާތަކަށް ވާގިވެރިވެވޮޑިނުގަންނަވާނދޭވެ! އަދި މިއަޅާއަށް ނަޞްރު ދެއްވާނދޭވެ! އަދި މިއަޅާއާ ދެކޮޅަށް އެހެން ފަރާތަކަށް ނަޞްރު ނުދެއްވާނދޭވެ! އަދި މިއަޅާއަށްޓަކައި (ހެޔޮ) ރޭވުންތައް ރާއްވަވާނދޭވެ! އަދި މިއަޅާއާ ދެކޮޅަށް (ނުބައި) ރޭވުންތައް ނުލައްވާނދޭވެ! އަދި މިއަޅާއަށް ތެދުމަގު ދައްކަވާނދޭވެ! އަދި ހިދާޔަތް މިއަޅާއަށް ފަސޭހަކޮށްދެއްވާނދޭވެ! އަދި މިއަޅާއަށް އަނިޔާވެރިވާ މީހުންގެ މައްޗަށް މިއަޅާއަށް ނަޞްރު ދެއްވާނދޭވެ!',
    },
    source: { type: 'hadith', reference: 'Sahih (Albani). Tirmidhi: 3551' },
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Sourced from the Masnun Dua dataset (islamicapi/masnun-dua); passed automated Arabic/EN/DV consistency checks but not yet checked by a qualified human reviewer - see CONTENT_REVIEW.md.',
    },
  },
  {
    id: 'masnun-280',
    type: 'dua',
    categoryId: 'witr-and-other',
    title: { en: 'Dua Qunut (Allahumma inna nasta inuka)', dv: 'ޤުނޫތު ނާޒިލާ (٣) - ޢުމަރުގެފާނުގެ ޤުނޫތު' },
    arabic: 'اَللَّهُمَّ إِيَّاكَ نَعْبُدُ، وَلَكَ نُصَلِّي وَنَسْجُدُ، وَإِلَيْكَ نَسْعَى وَنَحْفِدُ، نَرْجُو رَحْمَتَكَ، وَنَخْشَى عَذَابَكَ، إِنَّ عَذَابَكَ بِالْكَافِرِينَ مُلْحَقٌ، اَللَّهُمَّ إِنَّا نَسْتَعِينُكَ، وَنَسْتَغْفِرُكَ، وَنُثْنِي عَلَيْكَ الْخَيْرَ، وَلَا نَكْفُرُكَ، وَنُؤْمِنُ بِكَ، وَنَخْضَعُ لَكَ، وَنَخْلَعُ مَنْ يَكْفُرُكَ',
    transliteration: 'Allaahumma \'iyyaaka na\'budu, wa laka nusallee wa nasjudu, wa \'ilayka nas\'aa wa nahfidu, narjoo rahmataka, wa nakhshaa \'adhaabaka, \'inna \'adhaabaka bilkaafireena mulhaq. Allaahumma \'innaa nasta\'eenuka, wa nastaghfiruka, wa nuthnee \'alaykal-khayr, wa laa nakfuruka, wa nu\'minu bika, wa nakhdha\'u laka, wa nakhla\'u man yakfuruk',
    translation: {
      en: 'O Allah, You alone do we worship and to You we pray and bow down prostrate. To You we hasten to worship and to serve. Our hope is for Your mercy and we fear Your punishment. Surely, Your punishment of the disbelievers is at hand. O Allah, we seek Your help and Your forgiveness, and we praise You beneficently. We do not deny You and we believe in You. We surrender to You and renounce whoever disbelieves in You.',
      dv: 'އޭ ﷲ! ހަމަކަށަވަރުން އަޅަމެން އިބަރަސްކަލާނގެ ޙަޟްރަތުން ވާގިއެދެމެވެ. އަދި ފާފަ ފުއްސެވުމަށް އެދެމެވެ. އަދި އިބަރަސްކަލާނގެއަށް ހެޔޮ ޘަނާ ދަންނަވަމެވެ. އަދި އިބަރަސްކަލާނގެއަށް ކުފުރު ނުވަމެވެ. އަދި އިބަރަސްކަލާނގެއަށް އީމާންވަމެވެ. އަދި އިބަރަސްކަލާނގެއަށް ބޯލަނބައި ކިޔަމަންވަމެވެ. އަދި އިބަރަސްކަލާނގެއަށް ކާފަރުވާ މީހުން ދޫކޮށްލަމެވެ. އޭ ﷲ! އަޅަމެން އަޅުކަން ކުރަނީ ހަމައެކަނި އިބަރަސްކަލާނގެއަށެވެ. އަދި ނަމާދުކޮށް ސަޖިދަޖަހަނީ އިބަރަސްކަލާނގެއަށެވެ. އަދި އަޅަމެން އަވަސްވެގަންނަނީ އިބަރަސްކަލާނގެ ޙަޟްރަތަށެވެ. އަޅަމެން އެދެނީ އިބަރަސްކަލާނގެ ރަޙްމަތަށެވެ. އަދި ބިރުވެތިވަނީ އިބަރަސްކަލާނގެ ޢަޛާބަށެވެ. ހަމަކަށަވަރުން އިބަރަސްކަލާނގެ ޢަޛާބު ވަނީ ކާފަރުންނާ ހަމައަށް ފޯރާނެ އެއްޗެއްގެ ގޮތުގައެވެ.',
    },
    source: { type: 'hadith', reference: 'Sahih (Albani). Irwaul Galil: 2/170, Bayhaqi: As-Sunanul Kabra - 2/211' },
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Sourced from the Masnun Dua dataset (islamicapi/masnun-dua); passed automated Arabic/EN/DV consistency checks but not yet checked by a qualified human reviewer - see CONTENT_REVIEW.md.',
    },
  },
  {
    id: 'masnun-282',
    type: 'zikr',
    categoryId: 'witr-and-other',
    title: { en: 'When waking up for Tahajjud prayer (Dhikr & Dua)', dv: 'ތަހައްޖުދަށް ހޭލައި ކިޔާ ޛިކުރު (١٠ ފަހަރު)' },
    arabic: 'اَللَّهُ أَكْبَرُ',
    transliteration: 'Allahu \'Akbar',
    translation: {
      en: 'Allah is the greatest.',
      dv: 'ﷲ އީ އެންމެ ބޮޑު ރަސްކަލާނގެއެވެ.',
    },
    source: { type: 'hadith', reference: 'Hasan (Albani). Abu Dawud: 766' },
    repetitions: 10,
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Sourced from the Masnun Dua dataset (islamicapi/masnun-dua); passed automated Arabic/EN/DV consistency checks but not yet checked by a qualified human reviewer - see CONTENT_REVIEW.md.',
    },
  },
  {
    id: 'masnun-283',
    type: 'dua',
    categoryId: 'witr-and-other',
    title: { en: 'Istikhara Dua', dv: 'އިސްތިޚާރާ ދުޢާ' },
    arabic: 'اَللَّهُمَّ إِنِّي أَسْتَخِيْرُكَ بِعِلْمِكَ، وَأَسْتَقْدِرُكَ بِقُدْرَتِكَ وَأَسْأَلُكَ مِنْ فَضْلِكَ الْعَظِيمِ فَإِنَّكَ تَقْدِرُ وَلَا أَقْدِرُ وَتَعْلَمُ وَلَا أَعْلَمُ وَأَنْتَ عَلَّامُ الْغُيُوْبِ اَللَّهُمَّ إِنْ كُنْتَ تَعْلَمُ أَنَّ هَذَا الْأَمْرَ (وَيُسَمِّي حَاجَتَهُ) خَيْرٌ لِي فِي دِيْنِيْ وَمَعَاشِيْ وَعَاقِبَةِ أَمْرِيْ، فَاقْدُرْهُ لِي وَيَسِّرْهُ لِي ثُمَّ بَارِكْ لِي فِيهِ. [اَللَّهُمَّ] وَإِنْ كُنْتَ تَعْلَمُ أَنَّ هَذَا الْأَمْرَ شَرٌّ لِي فِي دِيْنِيْ وَمَعَاشِيْ وَعَاقِبَةِ أَمْرِيْ فَاصْرِفْهُ عَنِّي وَاصْرِفْنِي عَنْهُ وَاقْدُرْ لِيَ الْخَيْرَ حَيْثُ كَانَ ثُمَّ أَرْضِنِيْ بِهِ',
    transliteration: 'Allaahumma inni astakhiruka bi\'ilmika, Wa astaqdiruka bi-qudratika, Wa as\'aluka min fadlika Al-\'azim Fa-innaka taqdiru Wala aqdiru, Wa ta\'lamu Wala a\'lamu, Wa anta \'allamul-ghuyub. Allaahumma, in kunta ta\'lamu anna hadhal-amra Khairun li fi dini wa ma\'ashi wa\'aqibati `Amri, Faqdurhu li wa yas-sirhu li thumma barik li Fih, (Allaahumma) Wa in kunta ta\'lamu anna hadhal-amra shar-run li fi dini wa ma\'ashi wa\'aqibati `Amri Fasrifhu anni was-rifni anhu. Waqdur li al-khaira haithu kana Thumma ardini bih',
    translation: {
      en: 'O Allah! I ask guidance from Your knowledge, And Power from Your Might and I ask for Your great blessings. You are capable and I am not. You know and I do not and You know the unseen. O Allah! If You know that this job is good for my religion and my subsistence and in my Hereafter. Then You ordain it for me and make it easy for me to get, And then bless me in it, and if You know that this job is harmful to me In my religion and subsistence and in the Hereafter. Then keep it away from me and let me be away from it. And ordain for me whatever is good for me, And make me satisfied with it.\n\nOn the authority of Jaabir Ibn \'Adbullaah (RA), he said: The Prophet (ﷺ) would instruct us to pray for guidance in all of our concerns, just as he would teach us a Soorah from the Quran. He would say: \'If any of you intends to undertake a matter then let him pray two supererogatory units [two rak\'ah naafilah] of prayer and after which he should supplicate: (the above mentioned dua)',
      dv: 'އޭ ﷲ! އިބަރަސްކަލާނގެ ޢިލްމުފުޅުން (މިކަމުގެ) ހެޔޮކަމަށް މިއަޅާ އެދެމެވެ. އަދި އިބަރަސްކަލާނގެ ކުޅަދުންވަންތަކަމުން (މިކަން ކުރުމުގެ) ކުޅަދާނަކަމަށް އެދެމެވެ. އަދި އިބަރަސްކަލާނގެ ބޮޑުވެގެންވާ ފަޟްލަވަންތަކަމުން މިއަޅާ އެދެމެވެ. ފަހެ، ހަމަކަށަވަރުން އިބަރަސްކަލާނގެ ކުޅަދުންވަންތައެވެ. މިއަޅާ ކުޅަދާނަވެގެނެއް ނުވެއެވެ. އަދި އިބަރަސްކަލާނގެ ދެނެވޮޑިގެންވެއެވެ. މިއަޅާއަކަށް ނޭނގެއެވެ. އިބަރަސްކަލާނގެއީ ޣައިބުތައް އެންމެ މޮޅަށް ދެނެވޮޑިގެންވާ ރަސްކަލާނގެއެވެ. އޭ ﷲ! މިކަމަކީ (މިތާނގައި ކަމުގެ ނަން ކިޔާނީ) މިއަޅާގެ ދީނަށާއި، ދުނިޔެއަށާއި، އާޚިރަތަށް ހެޔޮ ކަމެއް ކަމުގައި އިބަރަސްކަލާނގެ ދެނެވޮޑިގެންވާނަމަ، މިއަޅާއަށް މިކަން މިންވަރުކުރައްވާނދޭވެ! އަދި މިއަޅާއަށް މިކަން ފަސޭހަކޮށްދެއްވާނދޭވެ! ދެން މިކަމުގައި މިއަޅާއަށް ބަރަކާތް ލައްވާނދޭވެ! އަދި މިކަމަކީ މިއަޅާގެ ދީނަށާއި، ދުނިޔެއަށާއި، އާޚިރަތަށް ނުބައި ކަމެއް ކަމުގައި އިބަރަސްކަލާނގެ ދެނެވޮޑިގެންވާނަމަ، މިއަޅާއާ މިކަން ދުރުކުރައްވާނދޭވެ! އަދި މިކަމާ މިއަޅާވެސް ދުރުކުރައްވާނދޭވެ! އަދި ހެޔޮކަން ވަނީ ކޮންމެ ތަނެއްގައި ކަމުގައި ވިޔަސް މިއަޅާއަށް އެކަން މިންވަރުކުރައްވާނދޭވެ! ދެން އެކަމާމެދު މިއަޅާ ރުއްސަވާނދޭވެ!',
    },
    source: { type: 'hadith', reference: 'Al-Bukhari 7/162, No. 1162, 7390' },
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Sourced from the Masnun Dua dataset (islamicapi/masnun-dua); passed automated Arabic/EN/DV consistency checks but not yet checked by a qualified human reviewer - see CONTENT_REVIEW.md.',
    },
  },
];
