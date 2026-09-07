import type { Dua } from '../../../types/dua';

// Sourced from the Hisn al-Muslim dataset (Hisn-Muslim-Json,
// github.com/wafaaelmaandy/Hisn-Muslim-Json) - see
// data/duas/CONTENT_REVIEW.md for the sourcing/translation methodology
// and the human-review requirement that still applies to every item here.
export const SLEEP_DUAS: Dua[] = [
  {
    "id": "hisn-1",
    "type": "dua",
    "categoryId": "sleep",
    "title": {
      "en": "Dua Upon Waking Up (1)",
      "dv": "ހޭލުމުން ކިޔާ ދުޢާ (1)"
    },
    "arabic": ".الْحَمْدُ للَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا، وَإِلَيْهِ النُّشُورُ",
    "translation": {
      "en": "Praise be to Allah, Who gave us life after having caused us to die, and to Him is the resurrection.",
      "dv": "ޙަމްދު ހުއްޓީ، އަޅަމެން މަރުކުރެއްވުމަށްފަހު ދިރުއްވި ﷲ އަށެވެ. އަދި ދިރުއްވުންވަނީ އެކަލާނގެ ޙަޟްރަތަށެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 1"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"supplications for when you wake up\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-2",
    "type": "dua",
    "categoryId": "sleep",
    "title": {
      "en": "Dua for Waking Up",
      "dv": "ދުޝްމަނަކާ ނުވަތަ ބާރުގަދަ މީހަކާ ބައްދަލުވާއިރު ކިޔާ ދުޢާ"
    },
    "arabic": "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيْكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيْرٌ، سُبْحَانَ اللَّهِ، وَالْحَمْدُ لِلَّهِ، وَلَا إِلَهَ إِلَّا اللَّهُ، وَاللَّهُ أَكْبَرُ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيْمِ، رَبِّ اغْفِرْ لِي",
    "transliteration": "Laa 'illaaha 'illAllahu wa’hdahu laa shareeka lahu, lahul-mulku wa lahul-hamdu, wa Huwa 'alaa kulli shay'in Qadeer Subhaanallahi, walhamdu lillaahi, wa laa 'ilaaha 'illAllahu, wAllahu 'akbar, wa laa ‘hawla wa laa Quwwata 'illaa billaahil-'Aliyyil-'Adheem, Rabbighfir lee",
    "translation": {
      "en": "None has the right to be worshipped except Allah, alone, without any partner, to Him belong sovereignty and praise and He is over all things wholly capable. How perfect Allah is, and all praise is for Allah, and none has the right to be worshipped except Allah, Allah is the greatest and there is no power nor might except with Allah, The Most High, The Supreme, O my Lord forgive me.\n\n‘Ubadah bin al-Samit (RA) reported the Messenger of Allah (ﷺ) as saying, “If anyone is alarmed while asleep and he says when awakes and he prays, his prayer will be answered. If he gets up, performs ablution, and prays, his prayer will be accepted.”",
      "dv": "އޭ ﷲ! ހަމަކަށަވަރުން އަޅަމެން އިބަރަސްކަލާނގެ އެބައިމީހުންގެ ކުރިމައްޗަށް ލައްވަމެވެ. (އެބަހީ: އެބައިމީހުންގެ ކިބައިން ސަލާމަތްކޮށްދެއްވުން އެދި އިބަރަސްކަލާނގެއާ ޙަވާލުކުރަމެވެ.) އަދި އެބައިމީހުންގެ ނުބައިކަމުން ރައްކާތެރިކޮށްދެއްވުން އެދި އިބަރަސްކަލާނގެ ޙަޟްރަތުން ޕަނާހަށް އެދެމެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Sahih (Albani). Abu Dawud: 5060"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Content reused verbatim from this app's existing verified dataset (original id: masnun-139), cross-referenced here under its Hisn al-Muslim chapter/number. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-3",
    "type": "dua",
    "categoryId": "sleep",
    "title": {
      "en": "Dua Upon Waking Up (2)",
      "dv": "ހޭލުމުން ކިޔާ ދުޢާ (2)"
    },
    "arabic": "الْحَمْدُ لِلَّهِ الَّذِي عَافَانِي فِي جَسَدِي، وَرَدَّ عَلَيَّ رُوحِي، وَأَذِنَ لي بِذِكْرِهِ",
    "translation": {
      "en": "Praise be to Allah, Who has given strength to my body and returned my soul to me, and has permitted me to remember Him.",
      "dv": "ޙަމްދު ހުއްޓީ، މިއަޅާގެ ހަށިގަނޑަށް ދުޅަހެޔޮކަން ދެއްވައި، މިއަޅާގެ ފުރާނަ އަނބުރާ ދެއްވައި، އެކަލާނގެ ޛިކުރުކުރުމުގެ ހުއްދަ ދެއްވި ﷲ އަށެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 3"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"supplications for when you wake up\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-4",
    "type": "dua",
    "categoryId": "sleep",
    "title": {
      "en": "Quranic Dua Upon Waking Up",
      "dv": "ހޭލުމުން ކިޔެވުމަށް އޮންނަ ޤުރުއާނުގެ އާޔަތްތައް"
    },
    "arabic": "﴿ إِنَّ فِي خَلْقِ السَّمَوَاتِ وَالأَرْضِ وَاخْتِلاَفِ اللَّيْلِ وَالنَّهَارِ لَآيَاتٍ لأُوْلِي الألْبَابِ * الَّذِينَ يَذْكُرُونَ اللَّهَ قِيَاماً وَقُعُوداً وَعَلَىَ جُنُوبِهِمْ وَيَتَفَكَّرُونَ فِي خَلْقِ السَّمَوَاتِ وَالأَرْضِ رَبَّنَا مَا خَلَقْتَ هَذا بَاطِلاً سُبْحَانَكَ فَقِنَا عَذَابَ النَّارِ* رَبَّنَا إِنَّكَ مَن تُدْخِلِ النَّارَ فَقَدْ أَخْزَيْتَهُ وَمَا لِلظَّالِمِينَ مِنْ أَنصَارٍ* رَّبَّنَا إِنَّنَا سَمِعْنَا مُنَادِياً يُنَادِي لِلإِيمَانِ أَنْ آمِنُواْ بِرَبِّكُمْ فَآمَنَّا رَبَّنَا فَاغْفِرْ لَنَا ذُنُوبَنَا وَكَفِّرْ عَنَّا سَيِّئَاتِنَا وَتَوَفَّنَا مَعَ الأبْرَارِ* رَبَّنَا وَآتِنَا مَا وَعَدتَّنَا عَلَى رُسُلِكَ وَلاَ تُخْزِنَا يَوْمَ الْقِيَامَةِ إِنَّكَ لاَ تُخْلِفُ الْمِيعَادَ* فَاسْتَجَابَ لَهُمْ رَبُّهُمْ أَنِّي لاَ أُضِيعُ عَمَلَ عَامِلٍ مِّنكُم مِّن ذَكَرٍ أَوْ أُنثَى بَعْضُكُم مِّن بَعْضٍ فَالَّذِينَ هَاجَرُواْ وَأُخْرِجُواْ مِن دِيَارِهِمْ وَأُوذُواْ فِي سَبِيلِي وَقَاتَلُواْ وَقُتِلُواْ لأُكَفِّرَنَّ عَنْهُمْ سَيِّئَاتِهِمْ وَلأُدْخِلَنَّهُمْ جَنَّاتٍ تَجْرِي مِن تَحْتِهَا الأَنْهَارُ ثَوَاباً مِّن عِندِ اللَّهِ وَاللَّهُ عِندَهُ حُسْنُ الثَّوَابِ * لاَ يَغُرَّنَّكَ تَقَلُّبُ الَّذِينَ كَفَرُواْ فِي الْبِلاَدِ * مَتَاعٌ قَلِيلٌ ثُمَّ مَأْوَاهُمْ جَهَنَّمُ وَبِئْسَ الْمِهَادُ * لَكِنِ الَّذِينَ اتَّقَوْاْ رَبَّهُمْ لَهُمْ جَنَّاتٌ تَجْرِي مِنْ تَحْتِهَا الأَنْهَارُ خَالِدِينَ فِيهَا نُزُلاً مِّنْ عِندِ اللَّهِ وَمَا عِندَ اللَّهِ خَيْرٌ لِّلأَبْرَارِ * وَإِنَّ مِنْ أَهْلِ الْكِتَابِ لَمَن يُؤْمِنُ بِاللَّهِ وَمَا أُنزِلَ إِلَيْكُمْ وَمَآ أُنزِلَ إِلَيْهِمْ خَاشِعِينَ لِلَّهِ لاَ يَشْتَرُونَ بِآيَاتِ اللَّهِ ثَمَناً قَلِيلاً أُوْلَئِكَ لَهُمْ أَجْرُهُمْ عِندَ رَبِّهِمْ إِنَّ اللَّهَ سَرِيعُ الْحِسَابِ*يَا أَيُّهَا الَّذِينَ آمَنُواْ اصْبِرُواْ وَصَابِرُواْ وَرَابِطُواْ وَاتَّقُواْ اللَّهَ لَعَلَّكُمْ تُفْلِحُونَ ﴾",
    "translation": {
      "en": "Recite Surah Aal-e-Imran, verses 190-200, upon waking from sleep.",
      "dv": "ނިދިން ހޭލުމުން ސޫރަތު އާލްޢިމްރާންގެ 190 ން 200 ށް ހުރި އާޔަތްތައް ކިޔަވާށެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 4"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"supplications for when you wake up\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-99",
    "type": "zikr",
    "categoryId": "sleep",
    "title": {
      "en": "The Three Quls Before Sleeping",
      "dv": "ނިދުމުގެ ކުރިން ކިޔާ 3 ޤުލް ސޫރަތް"
    },
    "arabic": "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ قُلْ هُوَ اللَّهُ أَحَدٌ اللَّهُ الصَّمَدُ لَمْ يَلِدْ وَلَمْ يُولَدْ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ مِن شَرِّ مَا خَلَقَ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ قُلْ أَعُوذُ بِرَبِّ النَّاسِ مَلِكِ النَّاسِ إِلَٰهِ النَّاسِ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ مِنَ الْجِنَّةِ وَالنَّاسِ",
    "translation": {
      "en": "Cup your hands together, recite Surah Al-Ikhlas, Surah Al-Falaq and Surah An-Nas into them, then wipe them over as much of your body as you can reach, starting with your head and face and the front of your body (done three times before sleeping).",
      "dv": "ދެއަތްތިލަ ޖޯޑުކޮށްލައްވައި، ސޫރަތުލް އިޚްލާޞްއާއި، ސޫރަތުލް ފަލަޤާއި، ސޫރަތުއްނާސް އެއަށް ފުމެލައްވައި، ބޯފުޅާއި މޫނުފުޅުން ފައްޓަވައި، ހަށިކޮޅުގެ ކުރިމައްޗަށް ފޯރާ މިންވަރަކަށް ފުހެލައްވާށެވެ (ނިދުމުގެ ކުރިން 3 ފަހަރު)."
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 99"
    },
    "repetitions": 3,
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"What to say before sleeping\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-100",
    "type": "dua",
    "categoryId": "sleep",
    "title": {
      "en": "Ayat al-Kursi Before Sleeping",
      "dv": "ނިދުމުގެ ކުރިން ކިޔާ އާޔަތުލް ކުރުސި"
    },
    "arabic": "﴿اللَّهُ لاَ إِلَهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ﴾",
    "translation": {
      "en": "Recite Ayat al-Kursi (Surah Al-Baqarah, 2:255) before sleeping: Allah! There is none worthy of worship but He, the Ever Living, the One Who sustains and protects all that exists. Neither slumber nor sleep overtakes Him. To Him belongs whatever is in the heavens and whatever is on the earth. Who is he that can intercede with Him except with His Permission? He knows what happens to them in this world, and what will happen to them in the Hereafter. And they will never compass anything of His Knowledge except that which He wills. His Throne extends over the heavens and the earth, and He feels no fatigue in guarding and preserving them. And He is the Most High, the Most Great.",
      "dv": "ނިދުމުގެ ކުރިން އާޔަތުލް ކުރުސި (ސޫރަތުލް ބަޤަރާ 2:255) ކިޔަވާށެވެ: ﷲ އީ އެކަލާނގެ ފިޔަވައި ޙައްޤުވެގެން އަޅުކަމެއް ވެވޭ އިލާހަކު ނުވާ ރަސްކަލާނގެއެވެ. އެކަލާނގެއީ ދިރިދެމިވޮޑިގެންވާ، ޤައްޔޫމްވަންތަ ރަސްކަލާނގެއެވެ. އަވަހާރަފުޅު އައުމެއް އަދި، ނިދިޖެހުމެއްވެސް އެކަލާނގެއަކަށް ނުވެއެވެ. އުޑުތަކާއި ބިމުގައި ވާހާ އެއްޗެއް މިލްކްވެގެންވަނީ އެކަލާނގެއަށެވެ. އެކަލާނގެ އިޛުނަފުޅާ ނުލައި، އެކަލާނގެ ޙަޟްރަތުގައި ޝަފާޢަތްތެރި ވާނީ ކާކުހެއްޔެވެ؟ އެބައިމީހުންގެ ކުރިމަތީގައި ވާހާކަމަކާއި، ފަހަތުގައި ވާހާކަމެއް އެކަލާނގެ ދެނެވޮޑިގެންވެއެވެ. އަދި އެކަލާނގެ އިރާދަކުރެއްވި ކަމެއް މެނުވީ، އެކަލާނގެ ޢިލްމުފުޅުގެ ތެރެއިން އެއްވެސް ކަމެއް އެބައިމީހުންނަކަށް އެނގިގެނެއް ނުވެއެވެ. އެކަލާނގެ ކުރުސި، އުޑުތަކާއި ބިމުގެ ތަނަވަސްކަމަށްވުރެ ތަނަވަސްވެގެންވެއެވެ. އަދި އެ ދެއެއްޗެއް ރައްކާތެރިކުރެއްވުމަށް އެކަލާނގެއަށް ބުރައެއް ނުވެއެވެ. އަދި އެކަލާނގެއީ، އެންމެ މަތިވެރި، އެންމެ ބޮޑު ރަސްކަލާނގެއެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 100"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"What to say before sleeping\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-101",
    "type": "dua",
    "categoryId": "sleep",
    "title": {
      "en": "The Last Two Verses of Al-Baqarah Before Sleeping",
      "dv": "ނިދުމުގެ ކުރިން ކިޔާ ސޫރަތުލް ބަޤަރާގެ ފަހު 2 އާޔަތް"
    },
    "arabic": "﴿آمَنَ الرَّسُولُ بِمَا أُنزِلَ إِلَيْهِ مِن رَّبِّهِ وَالْمُؤْمِنُونَ كُلٌّ آمَنَ بِاللَّهِ وَمَلآئِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ لاَ نُفَرِّقُ بَيْنَ أَحَدٍ مِّن رُّسُلِهِ وَقَالُواْ سَمِعْنَا وَأَطَعْنَا غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ الْمَصِيرُ* لاَ يُكَلِّفُ اللَّهُ نَفْساً إِلاَّ وُسْعَهَا لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ رَبَّنَا لاَ تُؤَاخِذْنَا إِن نَّسِينَا أَوْ أَخْطَأْنَا رَبَّنَا وَلاَ تَحْمِلْ عَلَيْنَا إِصْراً كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِن قَبْلِنَا رَبَّنَا وَلاَ تُحَمِّلْنَا مَا لاَ طَاقَةَ لَنَا بِهِ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَآ أَنتَ مَوْلاَنَا فَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ﴾",
    "translation": {
      "en": "Recite the last two verses of Surah Al-Baqarah (2:285-286) before sleeping.",
      "dv": "ނިދުމުގެ ކުރިން ސޫރަތުލް ބަޤަރާގެ ފަހު 2 އާޔަތް (2:285-286) ކިޔަވާށެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 101"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"What to say before sleeping\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-102",
    "type": "dua",
    "categoryId": "sleep",
    "title": {
      "en": "Dua of Sleep",
      "dv": "ނިދުމުގެ ދުޢާ"
    },
    "arabic": "بِاسْمِكَ رَبِّي وَضَعْتُ جَنْبِي، وَبِكَ أَرْفَعُهُ، فَإِنْ أَمْسَكْتَ نَفْسِي فَارْحَمْهَا، وَإِنْ أَرْسَلْتَهَا فَاحْفَظْهَا، بِمَا تَحْفَظُ بِهِ عِبَادَكَ الصَّالِحِينَ",
    "transliteration": "Bismika Rabbee wada'tu janbee, wa bika 'arfa'uhu, fa'in 'amsakta nafsee far’hamhaa, wa 'in 'arsaltahaa fa’hfadh haa, bimaa ta’hfadhu bihi 'ibaadakas-saaliheen",
    "translation": {
      "en": "In Your name my Lord, I lie down and in Your name I rise, so if You should take my soul then have mercy upon it, and if You should return my soul then protect it in the manner You do so with Your righteous servants.\n\nNarrated by Abu Huraira (RA): The Prophet (ﷺ) said, When anyone of you go to bed, he should shake out his bed with the inside of his waist sheet, for he does not know what has come on to it after him, and then he should say: (The dua is mentioned above)",
      "dv": "މިއަޅާގެ ވެރި ރަސްކަލާނކޮ! އިބަރަސްކަލާނގެ އިސްމުފުޅުން މިއަޅާގެ ހަށިގަނޑު (އެނދުގައި) ބާއްވަމެވެ. އަދި ހަމަ އިބަރަސްކަލާނގެ އިސްމުފުޅުން މިއަޅާ ހަށިގަނޑު ނަގަމެވެ. (އެބަހީ: ތެދުވަމެވެ). ފަހެ އިބަރަސްކަލާނގެ މިއަޅާގެ ނަފްސު އެހިނދު ހިއްޕަވައިފިނަމަ (އެބަހީ: މަރުގެންނެވުމުން)، ފަހެ އެ ނަފްސަށް ރަޙްމަތް ލައްވާނދޭވެ! އަދި އިބަރަސްކަލާނގެ އެ ނަފްސު ދޫކޮށްލައްވައިފިނަމަ (އެބަހީ: އަލުން ދިރުއްވައިފިނަމަ)، އިބަރަސްކަލާނގެ ޞާލިޙް އަޅުން ރައްކާތެރިކުރައްވާ ފަދައިން އެ ނަފްސު ރައްކާތެރިކުރައްވާނދޭވެ!\n\nއަބޫ ހުބައިރާ (ރ.ޢ) ރިވާކުރެއްވިއެވެ: ނަބިއްޔާ (ﷺ) ޙަދީޘްކުރެއްވިއެވެ: \"ތިޔަބައިމީހުންކުރެ މީހަކު ނިދަންއުޅޭނަމަ، އޭނާގެ ރަޖާގަނޑުގެ އެތެރެފަރާތުން އެނދު ފޮޅާލާހުށިކަމެވެ. އެހެނީ އޭނާއަށްފަހު އެތަނަށް އައިސްފައިވަނީ ކޮންއެއްޗެއް ކަމެއް އޭނާއަކަށް ނޭނގޭނެއެވެ. ދެން އޭނާ ކިޔާހުށިކަމެވެ: (މަތީގައިވާ ދުޢާ)\""
    },
    "source": {
      "type": "hadith",
      "reference": "Al-Bukhari 11/126 no. 6320, Muslim 4/2084 no.2714"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Content reused verbatim from this app's existing verified dataset (original id: masnun-129), cross-referenced here under its Hisn al-Muslim chapter/number. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-103",
    "type": "dua",
    "categoryId": "sleep",
    "title": {
      "en": "Dua to Go to Sleep",
      "dv": "ނިދަން އޮށޯންނައިރު ކިޔާ ދުޢާ"
    },
    "arabic": "اَللَّهُمَّ إِنَّكَ خَلَقْتَ نَفْسِي وَأَنْتَ تَوَفَّاهَا، لَكَ مَمَاتُهَا وَمَحْيَاهَا، إِنْ أَحْيَيْتَهَا فَاحْفَظْهَا، وَإِنْ أَمَتَّهَا فَاغْفِرْ لَهَا، اَللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ",
    "transliteration": "Allaahumma 'innaka khalaqta nafsee wa 'Anta tawaffaahaa, laka mamaatuhaa wa mahyaahaa, 'in 'ahyaytahaa fa’hfadhhaa, wa 'in 'amattahaa faghfir lahaa. Allaahumma 'innee 'as'alukal-'aafiyah",
    "translation": {
      "en": "O Allah, verily You have created my soul and You shall take it's life, to You belong it's life and death. If You keep my soul alive then protect it, and if You take it's life then forgive it. O Allah, I ask You to grant me good health.",
      "dv": "އޭ ﷲ! ހަމަކަށަވަރުން މިއަޅާގެ ނަފްސު ޚަލްޤުކުރެއްވީ އިބަރަސްކަލާނގެއެވެ. އަދި އެ ނަފްސު މަރުގަންނަވާނީވެސް އިބަރަސްކަލާނގެއެވެ. އެ ނަފްސުގެ މަރުވުމާއި ދިރުން ވަނީ އިބަރަސްކަލާނގެއަށެވެ. އެ ނަފްސު ދިރުއްވައިފިނަމަ ރައްކާތެރިކުރައްވާނދޭވެ! އަދި މަރުގަންނަވައިފިނަމަ ފާފަ ފުއްސަވައިދެއްވާނދޭވެ! އޭ ﷲ! ހަމަކަށަވަރުން މިއަޅާ އިބަރަސްކަލާނގެ ޙަޟްރަތުން ޢާފިޔަތަށް އެދެމެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Muslim: 2712"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Content reused verbatim from this app's existing verified dataset (original id: masnun-125), cross-referenced here under its Hisn al-Muslim chapter/number. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-104",
    "type": "dua",
    "categoryId": "sleep",
    "title": {
      "en": "Dua Before Going to Bed",
      "dv": "ނިދުމުގެ ކުރިން ކުރާ ދުޢާ"
    },
    "arabic": "اَللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ",
    "transliteration": "Allaahumma qinee 'adhaabaka yawma tab'athu 'ibaadak",
    "translation": {
      "en": "O Allah, protect me from Your punishment on the day Your servants are resurrected.",
      "dv": "އޭ ﷲ! އިބަރަސްކަލާނގެ އަޅުތަކުން މަޙްޝަރަށް ފޮނުއްވާ ދުވަހު، އިބަރަސްކަލާނގެ ޢަޛާބުން މިއަޅާ ރައްކާތެރިކުރައްވާނދޭވެ!"
    },
    "source": {
      "type": "hadith",
      "reference": "Sahih (Albani). At-Tirmizi: 3398"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Content reused verbatim from this app's existing verified dataset (original id: masnun-130), cross-referenced here under its Hisn al-Muslim chapter/number. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-105",
    "type": "dua",
    "categoryId": "sleep",
    "title": {
      "en": "Before Sleep Dua",
      "dv": "ނިދުމުގެ ކުރިން ކިޔާ ދުޢާ"
    },
    "arabic": "بِاسْمِكَ اَللَّهُمَّ أَمُوْتُ وَأَحْيَا",
    "transliteration": "Bismika Allaahumma 'amootu wa 'ahyaa",
    "translation": {
      "en": "In Your name O Allah, I live and die.\n\nHudhayfah (RA) said, \"If the Messenger of Allah (ﷺ) intended to sleep, he would recite this dhikr.”",
      "dv": "އޭ ﷲ! އިބަރަސްކަލާނގެ އިސްމުފުޅުން މިއަޅާ މަރުވެ ދިރިއުޅެމެވެ.\n\nޙުޛައިފާ (ރ.ޢ) ވިދާޅުވިއެވެ: \"ﷲ ގެ ރަސޫލާ (ﷺ) ނިދިކުރެއްވުމަށް ޤަޞްދުކުރައްވައިފިނަމަ، މި ޛިކުރު ވިދާޅުވެއެވެ.\""
    },
    "source": {
      "type": "hadith",
      "reference": "Al-Bukhari, Fathul Bari 11/113 no. 6324, Muslim 4/2083 no. 2711"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Content reused verbatim from this app's existing verified dataset (original id: masnun-123), cross-referenced here under its Hisn al-Muslim chapter/number. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-106",
    "type": "zikr",
    "categoryId": "sleep",
    "title": {
      "en": "Tasbih of Fatimah Before Sleeping",
      "dv": "ނިދުމުގެ ކުރިން ކިޔާ ފާޠިމަތުގެފާނުގެ ތަސްބީޙަ"
    },
    "arabic": "سُبْحَانَ اللَّهِ | الْحَمْدُ لِلَّهِ | اللَّهُ أَكْبَرُ",
    "translation": {
      "en": "Glory be to Allah. Praise be to Allah. Allah is greatest.",
      "dv": "ﷲ ހުސްޠާހިރުވަންތަކަމަށް ތަސްބީޙަކިޔުމެވެ. ﷲ އަށް ޙަމްދުކުރުމެވެ. ﷲ އީ އެންމެ ބޮޑު ރަސްކަލާނގެ ކަމުގައި ބުނުމެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 106"
    },
    "segments": [
      {
        "arabic": "سُبْحَانَ اللَّهِ",
        "translation": {
          "en": "Glory be to Allah.",
          "dv": "ﷲ ހުސްޠާހިރުވަންތަކަމަށް ތަސްބީޙަކިޔުމެވެ."
        },
        "repetitions": 33
      },
      {
        "arabic": "الْحَمْدُ لِلَّهِ",
        "translation": {
          "en": "Praise be to Allah.",
          "dv": "ﷲ އަށް ޙަމްދުކުރުމެވެ."
        },
        "repetitions": 33
      },
      {
        "arabic": "اللَّهُ أَكْبَرُ",
        "translation": {
          "en": "Allah is greatest.",
          "dv": "ﷲ އީ އެންމެ ބޮޑު ރަސްކަލާނގެ ކަމުގައި ބުނުމެވެ."
        },
        "repetitions": 34
      }
    ],
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"What to say before sleeping\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-107",
    "type": "dua",
    "categoryId": "sleep",
    "title": {
      "en": "Dua to Say Before Sleeping",
      "dv": "ނިދުމުގެ ކުރިން ކިޔާ ދުޢާ"
    },
    "arabic": "اَللَّهُمَّ رَبَّ السَّمَوَاتِ السَّبْعِ وَرَبَّ الْأَرْضِ، وَرَبَّ الْعَرْشِ الْعَظِيمِ، رَبَّنَا وَرَبَّ كُلِّ شَيْءٍ، فَالِقَ الْحَبِّ وَالنَّوَى، وَمُنْزِلَ التَّوْرَاةِ وَالْإِنْجِيلِ، وَالْفُرْقَانِ، أَعُوْذُ بِكَ مِنْ شَرِّ كُلِّ شَيْءٍ أَنْتَ آخِذٌ بِنَاصِيَتِهِ، اَللَّهُمَّ أَنْتَ الْأَوَّلُ فَلَيْسَ قَبْلَكَ شَيْءٌ، وَأَنْتَ الْآخِرُ فَلَيسَ بَعْدَكَ شَيْءٌ، وَأَنْتَ الظَّاهِرُ فَلَيْسَ فَوْقَكَ شَيْءٌ، وَأَنْتَ الْبَاطِنُ فَلَيْسَ دُونَكَ شَيْءٌ، اقْضِ عَنَّا الدَّيْنَ وَأَغْنِنَا مِنَ الْفَقْرِ",
    "transliteration": "Allaahumma Rabbas-samaawaatis-sab'i wa Rabbal ard, wa Rabbal-'Arshil-'Adheem, Rabbanaa wa Rabba kulli shay 'in, faaliqal-habbi wannawaa, wa munzilat-Tawraati wal-'Injeeli, wal-Furqaan, 'a'oodhu bika min sharri kulli shay 'in 'Anta 'aakhidhun binaasiyatihi. Allaahumma 'Antal-'Awwalu falaysa qablaka shay'un, wa 'Antal-'Aakhiru falaysa ba'daka shay'un, wa 'Antadh-Dhaahiru falaysa fawqaka shay'un, wa 'Antal-Baatinu falaysa doonaka shay'un, iqdhi 'annad-dayna wa 'aghninaa minal-faqr",
    "translation": {
      "en": "O Allah, Lord of the seven heavens and the Lord of the Earth and Lord of the Magnificent Throne, our Lord and Lord of all things, Splitter of the seed and the date stone, Revealer of the Towraat, the Injeel and the Furqaan, I take refuge in You from the evil of all things You shall seize by the forelock. O Allah, You are The First so there is nothing before You and You are The Last so there is nothing after You. You are ath-Dhaahir so there is nothing above You and You are al-Baatin so there is nothing closer than You. Settle our debt for us and spare us from poverty.\n\nAbu Huraira (RA) reported that Allah's Messenger (ﷺ) used to command us that as we go to our bed, we should utter the words (as mentioned above). In another narration, he said that when Fatima (RA) asked him for a khadima, he then taught the dua.",
      "dv": "އޭ ﷲ! ހަތް އުޑުގެ ވެރި ރަސްކަލާނކޮ! އަދި ބިމުގެ ވެރި ރަސްކަލާނކޮ! އަދި މަތިވެރިވެގެންވާ ޢަރުޝީގެ ވެރި ރަސްކަލާނކޮ! އަޅަމެންގެ ވެރި ރަސްކަލާނކޮ! އަދި ކޮންމެ އެއްޗެއްގެ ވެރި ރަސްކަލާނކޮ! އޮށާއި، ކަދު ފަޅުއްވައި ނެރުއްވާ ރަސްކަލާނކޮ! ތައުރާތާއި، އިންޖީލާއި އަދި ފުރުޤާން (ޤުރުއާން) ބާވައިލެއްވި ރަސްކަލާނކޮ! އިބަރަސްކަލާނގެ، އެ އެއްޗެއްގެ ނިތްކުރީގެ އިސްތަށިގަނޑުގައި ހިއްޕަވާ (އެބަހީ: ބާރުފޯރުވާ) ކޮންމެ އެއްޗެއްގެ ނުބައިކަމުން ރައްކާތެރިކޮށްދެއްވުން އެދި އިބަރަސްކަލާނގެއަށް ޕަނާހަށް އެދެމެވެ. އޭ ﷲ! އިބަރަސްކަލާނގެއީ އެންމެ ފުރަތަމަ ރަސްކަލާނގެއެވެ. އިބަރަސްކަލާނގެއަށްވުރެ  ކުރިން ވީ އެއްވެސް އެއްޗެއް ނުވެއެވެ. އަދި އިބަރަސްކަލާނގެއީ އެންމެ ފަހުގެ ރަސްކަލާނގެއެވެ. އިބަރަސްކަލާނގެއަށްވުރެ ފަހުން ވާނެ އެއްވެސް އެއްޗެއް ނުވެއެވެ. އަދި އިބަރަސްކަލާނގެއީ އެންމެ ފާޅުވެވޮޑިގެންވާ ރަސްކަލާނގެއެވެ. އިބަރަސްކަލާނގެއަށް ވުރެ މަތީގައިވާ އެއްވެސް އެއްޗެއް ނުވެއެވެ. އަދި އިބަރަސްކަލާނގެއީ އެންމެ ވަންހަނާ ރަސްކަލާނގެއެވެ. އިބަރަސްކަލާނގެއަށް ވުރެ ކައިރީގައިވާ އެއްވެސް އެއްޗެއް ނުވެއެވެ. މިއަޅަމެންގެ ކިބައިން ދަރަނީގެ ބުރަ ފިއްލަވާނދޭވެ! އަދި ފަޤީރުކަމުން މިއަޅަމެން މިންޖުކުރައްވާނދޭވެ! (އެބަހީ: މިއަޅަމެން ފުއްދަވާނދޭވެ!)\n\nއަބޫ ހުބައިރާ (ރ.ޢ) ރިވާކުރެއްވިއެވެ: ﷲ ގެ ރަސޫލާ (ﷺ) ތިމަންމެންނަށް ނިދަން ދާއިރު (މަތީގައިވާ ފަދައިން) އެ ކަލިމަތައް ކިޔުމަށް އަމުރުކުރައްވާ ކަމުގައިވިއެވެ. އެހެން ރިވާޔަތެއްގައި، ފާޠިމާ (ރ.ޢ) އެކަލޭގެފާނުގެ އަރިހުން ޚާދިމަކަށް އެދިވަޑައިގަތުމުން، މި ދުޢާ ދަސްކޮށްދެއްވި ކަމަށްވެއެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Muslim: 2713, Sahih (Albani). Tirmidhi: 3481"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Content reused verbatim from this app's existing verified dataset (original id: masnun-127), cross-referenced here under its Hisn al-Muslim chapter/number. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-108",
    "type": "dua",
    "categoryId": "sleep",
    "title": {
      "en": "Dua of Gratitude Before Sleeping",
      "dv": "ނިދުމުގެ ކުރިން ކިޔާ ޝުކުރުވެރިވުމުގެ ދުޢާ"
    },
    "arabic": "الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا، وَكَفَانَا، وَآوَانَا، فَكَمْ مِمَّنْ لاَ كَافِيَ لَهُ وَلاَ مُؤْوِيَ",
    "translation": {
      "en": "Praise be to Allah, Who has fed us and given us drink, and has been sufficient for us and given us shelter - for how many have none to suffice them or shelter them.",
      "dv": "ޙަމްދު ހުއްޓީ، އަޅަމެންނަށް ކާންދެއްވައި، ބޯންދެއްވައި، ފުދިގެންވުމަށް ލައްވައި، ހިޔާވަހިކަން ދެއްވި ﷲ އަށެވެ. ފުދިގެންވުމަށް ލައްވާނޭ ފަރާތެއް ނުވަތަ ހިޔާވަހިކަން ދޭނޭ ފަރާތެއް ނުވާ ކިތައް ކިތައް މީހުން ވޭހެއްޔެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 108"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"What to say before sleeping\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-109",
    "type": "dua",
    "categoryId": "sleep",
    "title": {
      "en": "Morning Dua for Evil Protection",
      "dv": "ޝައިޠާނާގެ ކިބައިން ރައްކާތެރިވުމުގެ ދުޢާ (ހެނދުނު)"
    },
    "arabic": "اَللَّهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ فَاطِرَ السَّمَوَاتِ وَالْأَرْضِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيكَهُ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا أَنْتَ، أَعُوْذُ بِكَ مِنْ شَرِّ نَفْسِي، وَمِنْ شَرِّ الشَّيْطَانِ وَشِرْكِهِ ، وَأَنْ أَقْتَرِفَ عَلَى نَفْسِي سُوْءًا، أَوْ أَجُرَّهُ إِلَى مُسْلِمٍ",
    "transliteration": "Allaahumma 'Aalimal-ghaybi wash-shahaadati faatiras-samaawaati wal'ardhi, Rabba kulli shay'in wa maleekahu, 'ash-hadu 'an laa 'ilaaha 'illaa 'Anta, 'A'oodhu bika min sharri nafsee, wa min sharrish-shaytaani wa shirkihi, wa 'an 'aqtarifa 'alaa nafsee soo'an, 'aw 'ajurrahu 'ilaa Muslim.",
    "translation": {
      "en": "O Allah, Knower of the unseen and the seen, Creator of the heavens and the Earth, Lord and Sovereign of all things, I bear witness that none has the right to be worshipped except You. I take refuge in You from the evil of my soul and from the evil and shirk of the devil, and from committing wrong against my soul or bringing such upon another Muslim.\n\nAbu Bakr As-Siddiq (RA) said: “O Messenger of Allah, teach me what to say at morning and afternoon.” He said: “O Abu Bakr, say (above dua)",
      "dv": "އޭ ﷲ! ޣައިބާއި ޝަހާދަ ދެނެވޮޑިގެންވާ (އެބަހީ: ނުފެންނަ ކަންތަކާއި ފެންނަ ކަންތައް ދެނެވޮޑިގެންވާ)، އުޑުތަކާއި ބިން އުފެއްދެވި، ކޮންމެ އެއްޗެއްގެ ވެރި އަދި މިލްކުވެރި ރަސްކަލާނކޮ! އިބަރަސްކަލާނގެ މެނުވީ ޙައްޤުވެގެން އަޅުކަމެއް ވެވޭ އިލާހަކު ނުވާކަމަށް މިއަޅާ ހެކިވަމެވެ. މިއަޅާގެ އަމިއްލަ ނަފްސުގެ ނުބައިކަމުންނާއި، ޝައިޠާނާގެ ނުބައިކަމާއި އޭނާގެ ޝިރުކުން ރައްކާތެރިކޮށްދެއްވުން އެދި އިބަރަސްކަލާނގެ ޙަޟްރަތުން ޕަނާހަށް އެދެމެވެ. އަދި މިއަޅާގެ ނަފްސަށް ނުބައިކަމެއް ކުރުމުން، ނުވަތަ މުސްލިމަކަށް ނުބައިކަމެއް ޖެއްސުމުން (ރައްކާތެރިކޮށްދެއްވުން އެދި ދަންނަވަމެވެ.)"
    },
    "source": {
      "type": "hadith",
      "reference": "Sahih (Albani). Tirmidhi: 3529"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Content reused verbatim from this app's existing verified dataset (original id: masnun-101), cross-referenced here under its Hisn al-Muslim chapter/number. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-110",
    "type": "dua",
    "categoryId": "sleep",
    "title": {
      "en": "Surahs to Recite Before Sleeping",
      "dv": "ނިދުމުގެ ކުރިން ކިޔަވާ ސޫރަތްތައް"
    },
    "arabic": "يَقْرَأُ ﴿الم﴾ تَنْزِيلَ السَّجْدَة ِ، وَتَبَارَكَ الَّذي بِيَدِهِ الْمُلْكُ",
    "translation": {
      "en": "Recite Surah As-Sajdah (32) and Surah Al-Mulk (67) before sleeping.",
      "dv": "ނިދުމުގެ ކުރިން ސޫރަތުއް ސަޖްދާއާއި، ސޫރަތުލް މުލްކު ކިޔަވާށެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 110"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"What to say before sleeping\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-111",
    "type": "dua",
    "categoryId": "sleep",
    "title": {
      "en": "Dua Before Bed",
      "dv": "ވިތުރި ނަމާދުގެ ސަލާމަށްފަހު ކިޔާ ދުޢާ"
    },
    "arabic": "اَللَّهُمَّ أَسْلَمْتُ نَفْسِي إِلَيْكَ، وَفَوَّضْتُ أَمْرِي إِلَيْكَ، وَوَجَّهْتُ وَجْهِيْ إِلَيْكَ، وَأَلْجَأْتُ ظَهْرِي إِلَيْكَ، رَغْبَةً وَرَهْبَةً إِلَيْكَ، لَا مَلْجَأَ وَلَا مَنْجَا مِنْكَ إِلَّا إِلَيْكَ، آمَنْتُ بِكِتَابِكَ الَّذِي أَنْزَلْتَ، وَبِنَبِيِّكَ الَّذِي أَرْسَلْتَ",
    "transliteration": "Allaahumma 'aslamtu nafsee 'ilayka, wa fawwadhtu 'amree 'ilayka, wa wajjahtu wajhee 'ilayka, wa 'alja'tu dhahree 'ilayka, raghbatan wa rahbatan 'ilayka, laa maalja' wa laa manjaa minka 'illaa 'ilayka, 'aamantu bikitaabikal-ladhee 'anzalta wa bi-nabiyyikal-ladhee 'arsalta",
    "translation": {
      "en": "O Allah, I submit my soul unto You, and I entrust my affair unto You, and I turn my face towards You, and I totally rely on You, in hope and fear of You. Verily there is no refuge nor safe haven from You except with You. I believe in Your Book which You have revealed and in Your Prophet whom You have sent.\n\nThe Prophet (ﷺ) said to the person to whom he taught this Dua: If you die that night, you die on Fitrat, the religion of Islam.",
      "dv": "މަލިކު (ރަސްވަންތަ)، ޤުއްދޫސް (ހުސްޠާހިރުވަންތަ) ރަސްކަލާނގެ ހުސްޠާހިރުވަންތަކަމާއެވެ! (ތިންފަހަރު ވިދާޅުވެއެވެ. އަދި ތިންވަނަ ފަހަރަށް ވިދާޅުވާއިރު، އަޑުފުޅު އުފުއްލަވައި ދަމާލައްވައެވެ.) [ރައްބުލް މަލާއިކަތި ވައްރޫޙު: މަލާއިކަތުންނާއި ރޫޙު (ޖިބްރީލްގެފާނު) ގެ ވެރި ރަސްކަލާނގެއެވެ.]"
    },
    "source": {
      "type": "hadith",
      "reference": "Al-Bukhari, Fathul Bari 11/113 no. 6313, Muslim 4/2081 no. 2710"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Content reused verbatim from this app's existing verified dataset (original id: masnun-136), cross-referenced here under its Hisn al-Muslim chapter/number. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-112",
    "type": "dua",
    "categoryId": "sleep",
    "title": {
      "en": "Dua When Turning Over During the Night",
      "dv": "ކަންބޮޑުވުމާއި ދަތިކަން ކުރިމަތިވުމުން ކިޔާ ދުޢާ"
    },
    "arabic": "لَا إِلَهَ إِلَّا اللَّهُ الْوَاحِدُ الْقَهَّارُ، رَبُّ السَّمَوَاتِ وَالْأَرْضِ وَمَا بَيْنَهُمَا الْعَزِيزُ الْغَفَّارُ",
    "transliteration": "Laa 'ilaaha 'illAllahul-Waahidul-Qahhaar, Rabbus-samaawaati wal'ardh, wa maa baynahumal-'Azeezul-Ghaffaar",
    "translation": {
      "en": "There is none worthy of worship but Allah, the One, the Victorious, Lord of the heavens and the earth and all that is between them, the All-Mighty, the All-Forgiving.\n\nAaishah (RA) narrated that the Messenger of Allah (ﷺ) used to say at night if he turned during sleep: (the dua is mentioned above)",
      "dv": "މަތިވެރިވަންތަ، ޙިލްމުވެރިވަންތަ ﷲ މެނުވީ ޙައްޤުވެގެން އަޅުކަމެއް ވެވޭ އިލާހަކު ނުވެއެވެ. މަތިވެރި ޢަރުޝީގެ ވެރި ﷲ މެނުވީ ޙައްޤުވެގެން އަޅުކަމެއް ވެވޭ އިލާހަކު ނުވެއެވެ. އުޑުތަކުގެ ވެރި، އަދި ބިމުގެ ވެރި، އަދި މާތްވެގެންވާ ޢަރުޝީގެ ވެރި ﷲ މެނުވީ ޙައްޤުވެގެން އަޅުކަމެއް ވެވޭ އިލާހަކު ނުވެއެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Sahih by Hakim. Imam Dhahabi 1/540; Nasai, Amalul Yaomi Wallayla No. 202, Ibnus sunni No. 757. Also see, Sahih Jame 4:213"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Content reused verbatim from this app's existing verified dataset (original id: masnun-138), cross-referenced here under its Hisn al-Muslim chapter/number. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-113",
    "type": "dua",
    "categoryId": "sleep",
    "title": {
      "en": "Dua for Fear and Loneliness",
      "dv": "ބިރުވެރިކަމާއި އެކަނިވެރިކަމަށް ކިޔާ ދުޢާ"
    },
    "arabic": "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ غَضَبِهِ وَعِقَابِهِ، وَشَرِّ عِبَادِهِ، وَمِنْ هَمَزَاتِ الشَّياطِينِ وَأَنْ يَحْضُرُونِ",
    "translation": {
      "en": "I seek refuge in the perfect words of Allah from His anger and punishment, from the evil of His slaves, and from the promptings of the devils and their presence.",
      "dv": "ﷲ ގެ ފުރިހަމަވެގެންވާ كلمةފުޅުތަކުގެ ސަބަބުން، އެކަލާނގެ ކޯފާއިންނާއި ޢުޤޫބާތުންނާއި، އެކަލާނގެ އަޅުތަކުންގެ ނުބައިކަމުންނާއި، ޝައިޠާނުންގެ ވަސްވާހުންނާއި، އެއުރެން ޙާޟިރުވުމުން ރައްކާތެރިކަމަށް އެދެމެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 113"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"What to say if you are afraid to go to sleep or feel lonely and depressed\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  }
];
