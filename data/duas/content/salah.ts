import type { Dua } from '../../../types/dua';

// Sourced from the Hisn al-Muslim dataset (Hisn-Muslim-Json,
// github.com/wafaaelmaandy/Hisn-Muslim-Json) - see
// data/duas/CONTENT_REVIEW.md for the sourcing/translation methodology
// and the human-review requirement that still applies to every item here.
export const SALAH_DUAS: Dua[] = [
  {
    "id": "hisn-27",
    "type": "dua",
    "categoryId": "salah",
    "title": {
      "en": "Opening Dua of the Prayer (1)",
      "dv": "ނަމާދު ފެށުމުގެ ދުޢާ (1)"
    },
    "arabic": "اللَّهُمَّ بَاعِدْ بَيْنِي وَبَيْنَ خَطَايَايَ كَمَا بَاعَدْتَ بَيْنَ الْمَشْرِقِ وَالْمَغْرِبِ، اللَّهُمَّ نَقِّنِي مِنْ خَطَايَايَ كَمَا يُنَقَّى الثَّوْبُ الْأَبْيَضُ مِنَ الدَّنَسِ، اللَّهُمَّ اغْسِلْني مِنْ خَطَايَايَ، بِالثَّلْجِ وَالْماءِ وَالْبَرَدِ",
    "translation": {
      "en": "O Allah, distance me from my sins as You have distanced the East from the West. O Allah, cleanse me of my sins as a white garment is cleansed of dirt. O Allah, wash away my sins with snow, water and hail.",
      "dv": "އޭ ﷲ! އިރުއަރާދިމާއާއި އިރުއޮއްސޭދިމާ ދުރުކުރެއްވި ފަދައިން، މިއަޅާއާއި މިއަޅާގެ ފާފަތަކާ ދެމެދު ދުރުކުރައްވާނދޭވެ! އޭ ﷲ! ހުދު ފޭރާމަކުން މުޑުދާރުކަން ސާފުކުރެވޭ ފަދައިން، މިއަޅާގެ ފާފަތަކުން މިއަޅާ ސާފުކުރައްވާނދޭވެ! އޭ ﷲ! ގަނޑުފެނާއި ފެނާއި ބަރަދުން، މިއަޅާގެ ފާފަތައް ދޮންނަވާދެއްވާނދޭވެ!"
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 27"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"Invocations for the beginning of the prayer\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-28",
    "type": "dua",
    "categoryId": "salah",
    "title": {
      "en": "Sana Dua (Subhanaka Allahumma Wa Bihamdika)",
      "dv": "ޘަނާ (ސުބްޙާނަކަ ﷲ...)"
    },
    "arabic": "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، وَتَبَارَكَ اسْمُكَ، وَتَعَالَى جَدُّكَ، وَلَا إِلٰهَ غَيْرُكَ",
    "transliteration": "Subhaanaka Allaahumma wa bihamdika, wa tabaarakasmuka, wa ta'aalaa jadduka, wa laa 'ilaaha ghayruk.",
    "translation": {
      "en": "Glory is to You O Allah, and praise. Blessed is Your Name and Exalted is Your Majesty. There is none worthy of worship but You.",
      "dv": "އޭ ﷲ! އިބަރަސްކަލާނގެ ހުސްޠާހިރުވަންތަކަމާއެވެ! އަދި ޙަމްދުވަނީ އިބަރަސްކަލާނގެއަށެވެ. އަދި އިބަރަސްކަލާނގެ އިސްމުފުޅުގެ ބަރަކާތްތެރިކަން ބޮޑުވެގެންވެއެވެ. އަދި އިބަރަސްކަލާނގެ މަތިވެރިވަންތަކަން ކީރިތިވެގެންވެއެވެ. އަދި އިބަރަސްކަލާނގެ ފިޔަވައި އެހެން އިލާހަކު ނުވެއެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Muslim: 399"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Content reused verbatim from this app's existing verified dataset (original id: masnun-872), cross-referenced here under its Hisn al-Muslim chapter/number. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-29",
    "type": "dua",
    "categoryId": "salah",
    "title": {
      "en": "Opening Dua of the Prayer (2)",
      "dv": "ނަމާދު ފެށުމުގެ ދުޢާ (2)"
    },
    "arabic": "وَجَّهْتُ وَجْهِيَ لِلَّذِي فَطَرَ السَّمَوَاتِ وَالأَرْضَ حَنِيفَاً وَمَا أَنَا مِنَ الْمُشْرِكِينَ، إِنَّ صَلاَتِي، وَنُسُكِي، وَمَحْيَايَ، وَمَمَاتِي لِلَّهِ رَبِّ الْعَالَمِينَ، لاَ شَرِيكَ لَهُ وَبِذَلِكَ أُمِرْتُ وَأَنَا مِنَ الْمُسْلِمِينَ. اللَّهُمَّ أَنْتَ المَلِكُ لاَ إِلَهَ إِلاَّ أَنْتَ، أَنْتَ رَبِّي وَأَنَا عَبْدُكَ، ظَلَمْتُ نَفْسِي وَاعْتَرَفْتُ بِذَنْبِي فَاغْفِرْ لِي ذُنُوبي جَمِيعَاً إِنَّهُ لاَ يَغْفِرُ الذُّنوبَ إِلاَّ أَنْتَ. وَاهْدِنِي لِأَحْسَنِ الأَخْلاقِ لاَ يَهْدِي لِأَحْسَنِها إِلاَّ أَنْتَ، وَاصْرِفْ عَنِّي سَيِّئَهَا، لاَ يَصْرِفُ عَنِّي سَيِّئَهَا إِلاَّ أَنْتَ، لَبَّيْكَ وَسَعْدَيْكَ، وَالخَيْرُ كُلُّهُ بِيَدَيْكَ، وَالشَّرُّ لَيْسَ إِلَيْكَ، أَنَا بِكَ وَإِلَيْكَ، تَبارَكْتَ وَتَعَالَيْتَ، أَسْتَغْفِرُكَ وَأَتوبُ إِلَيْكَ",
    "translation": {
      "en": "I have turned my face towards Him Who created the heavens and the earth, upright in faith, and I am not among those who associate partners with Allah. My prayer, my sacrifice, my life and my death are for Allah, Lord of all the worlds, He has no partner. This I have been commanded, and I am among the Muslims. O Allah, You are the King; there is no god but You. You are my Lord and I am Your slave. I have wronged myself and I acknowledge my sin, so forgive me all my sins, for none forgives sins but You. Guide me to the best of characters, for none guides to the best of them but You, and turn the worst of them away from me, for none turns them away but You. Here I am, answering Your call. All good is in Your hands, and evil is not attributed to You. I exist through You and return to You. Blessed and Exalted are You. I seek Your forgiveness and turn to You in repentance.",
      "dv": "އުޑުތަކާއި ބިން ހެއްދެވި ރަސްކަލާނގެއަށް، ސީދާވެގެންވާ ޙާލު، މިއަޅާގެ މޫނު ދިރުވައިފީމެވެ. އަދި މިއަޅާއީ މުޝްރިކުންގެ ތެރެއިންވާ މީހެއް ނޫނެވެ. ހަމަކަށަވަރުން، މިއަޅާގެ ނަމާދާއި، ޤުރުބާނީއާއި، ދިރިހުރުމާއި، މަރުވުންވަނީ، ޢާލަމްތަކުގެ ވެރި ރަސްކަލާނގެ ކަމުގައިވާ ﷲ އަށެވެ. އެކަލާނގެއަށް ބައިވެރިއަކު ނުވެއެވެ. މިކަމަށް މިއަޅާ އަމުރުކުރެއްވިއެވެ. އަދި މިއަޅާއީ މުސްލިމުންގެ ތެރެއިންވާ މީހެކެވެ. އޭ ﷲ! އިބަރަސްކަލާނގެއީ ރަސްކަލާނގެއެވެ. އިބަރަސްކަލާނގެ މެނުވީ ޙައްޤުވެގެން އަޅުކަން ވެވޭ އިލާހަކު ނުވެއެވެ. އިބަރަސްކަލާނގެއީ މިއަޅާގެ ވެރި ރަސްކަލާނގެއެވެ. މިއަޅާއީ އިބަރަސްކަލާނގެ އަޅާއެވެ. މިއަޅާ نفسަށް އަނިޔާވެރިވެއްޖައީމެވެ. އަދި މިއަޅާގެ ފާފައަށް އިޢުތިރާފުވަމެވެ. ފަހެ، މިއަޅާގެ ހުރިހާ ފާފައެއް ފުއްސަވާނދޭވެ! ހަމަކަށަވަރުން، އިބަރަސްކަލާނގެ މެނުވީ ފާފަ ފުއްސަވާނޭ ފަރާތެއް ނުވެއެވެ. އެންމެ ރިވެތި އަޚްލާޤަށް މިއަޅާއަށް މަގުދައްކަވާނދޭވެ! ހަމަކަށަވަރުން، އިބަރަސްކަލާނގެ މެނުވީ އެންމެ ރިވެތި އަޚްލާޤަށް މަގުދައްކަވާނޭ ފަރާތެއް ނުވެއެވެ. ނުބައި އަޚްލާޤު މިއަޅާގެ ކިބައިން ދުރުކުރައްވާނދޭވެ! ހަމަކަށަވަރުން، އިބަރަސްކަލާނގެ މެނުވީ ނުބައި އަޚްލާޤު ދުރުކުރައްވާނޭ ފަރާތެއް ނުވެއެވެ. މިއަޅާ މިހުރީ އިބަރަސްކަލާނގެ ގޮވާލެއްވުމަށް ކިޔަމަންވެގެންނެވެ. ހުރިހާ ހެވެއްވަނީ އިބަރަސްކަލާނގެ އަތްޕުޅުގައެވެ. ނުބައިކަން އިބަރަސްކަލާނގެއަށް ނިސްބަތެއް ނުވެއެވެ. މިއަޅާވަނީ އިބަރަސްކަލާނގެ މެދުވެރިކޮށް، އަދި އިބަރަސްކަލާނގެ ޙަޟްރަތަށެވެ. އިބަރަސްކަލާނގެ ބަރަކާތްތެރިވެ، މަތިވެރިވެވޮޑިގެންފިއެވެ. އިބަރަސްކަލާނގެ ޙަޟްރަތުން ފުއްސެވުމަށް އެދެމެވެ. އަދި އިބަރަސްކަލާނގެ ޙަޟްރަތަށް ތައުބާވަމެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 29"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"Invocations for the beginning of the prayer\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-30",
    "type": "dua",
    "categoryId": "salah",
    "title": {
      "en": "Dua for Guidance to the Right Path",
      "dv": "ތެދުމަގަށް އެދި ކުރާ ދުޢާ"
    },
    "arabic": "اَللَّهُمَّ رَبَّ جِبْرَائِيْلَ وَمِيْكَائِيْلَ وَإِسْرَافِيلَ فَاطِرَ السَّمَوَاتِ وَالْأَرْضِ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ أَنْتَ تَحْكُمُ بَيْنَ عِبَادِكَ فِيمَا كَانُوا فِيهِ يَخْتَلِفُونَ اهْدِنِيْ لِمَا اخْتُلِفَ فِيهِ مِنَ الْحَقِّ بِإِذْنِكَ إِنَّكَ تَهْدِيْ مَنْ تَشَاءُ إِلَى صِرَاطٍ مُسْتَقِيْمٍ",
    "transliteration": "Allaahumma rabba jibra-eel, wameeka-eel, wa-israafeel faatiras-samawaati wal-ardi, AAalimal-ghaybi washshahaadah, anta tahkumu bayna ibaadika feemaa kanoo feehi yakhtalifoon ihdinee limakh-tulifa feehi minal-haqqi bi-idhnika, innaka tahdee man tashaa-o ilaa siraatin mustaqeem",
    "translation": {
      "en": "O Allah, Lord of Jibra-eel, Meeka-eel and Israfeel (great angles), Creator of the heavens and the Earth, Knower of the seen and the unseen. You are the arbitrator between Your servants in that which they have disputed. Guide me to the truth by Your leave, in that which they have differed, for verily You guide whom You will to a straight path.\n\nAyesha said, \"The Messenger of Allah (ﷺ), used to recite this du'a at the beginning of the night (tahajjud) prayer.\" It should be noted that every researcher, scholar, mufti and truth-seeking believer should recite this dua more and more at the beginning of tahajjud, in prostration and at all other times. It is very important to seek guidance from Allah Almighty through this dua without relying entirely on one's own research, knowledge or anything else.",
      "dv": "އޭ ﷲ! ޖިބްރީލްގެފާނާއި، މީކާއީލްގެފާނާއި، އިސްރާފީލްގެފާނުގެ ވެރިރަސްކަލާނކޮ! އުޑުތަކާއި ބިން ހެއްދެވި ރަސްކަލާނކޮ! ޣައިބާއި ހާޒިރު ދެނެވޮޑިގެންވާ ރަސްކަލާނކޮ! އިބަރަސްކަލާނގެ އަޅުތަކުންގެ މެދުގައި ޚިލާފު އުފެދިފައިވާ ކަންކަމުގައި ޙުކުމް ކުރައްވާނީ އިބަރަސްކަލާނގެއެވެ. މީސްތަކުން ޚިލާފުވެފައިވާ ކަންކަމުގެ ތެރެއިން ޙައްޤު ގޮތް، އިބަރަސްކަލާނގެ އިޛުނަފުޅާއެކު މިއަޅާއަށް ދައްކަވާނދޭވެ! ހަމަކަށަވަރުން އިބަރަސްކަލާނގެ އިރާދަކުރައްވާ އަޅަކަށް ސީދާވެގެންވާ ތެދުމަގަށް މަގުދައްކަވަމުއެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Muslim: 770"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Content reused verbatim from this app's existing verified dataset (original id: masnun-485), cross-referenced here under its Hisn al-Muslim chapter/number. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-31",
    "type": "zikr",
    "categoryId": "salah",
    "title": {
      "en": "Tasbih Before Sleep After Salatul-Isha (Opening Takbir Series)",
      "dv": "ނިދުމުގެ ކުރިން ކިޔާ ތަކްބީރު ސިލްސިލާ"
    },
    "arabic": "اللَّهُ أَكْبَرُ كَبِيرًا | الْحَمْدُ لِلَّهِ كَثِيرًا | سُبْحَانَ اللَّهِ بُكْرَةً وَأَصِيلًا | أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ مِنْ نَفْخِهِ وَنَفْثِهِ وَهَمْزِهِ",
    "translation": {
      "en": "Allah is greatest, greatly. Praise is abundantly due to Allah. Glory be to Allah, morning and evening. I seek refuge in Allah from Satan - from his arrogance, his poetry, and his madness.",
      "dv": "ﷲ އީ އެންމެ ބޮޑު ރަސްކަލާނގެއެވެ. ގިނަގުނަވެގެންވާ ޙަމްދު ﷲ އަށެވެ. ހެނދުނާއި ހަވީރު ﷲ ހުސްޠާހިރުވަންތަކަމަށް ތަސްބީޙަކިޔަމެވެ. ޝައިޠާނާގެ ކިބައިން ﷲ ގެ ރައްކާތެރިކަމަށް އެދެމެވެ: އޭނާގެ ބޮޑާކަމުންނާއި، ޅެންވެރިކަމުންނާއި، މޮޔަކަން ޖެއްސުމުން."
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 31"
    },
    "segments": [
      {
        "arabic": "اللَّهُ أَكْبَرُ كَبِيرًا",
        "translation": {
          "en": "Allah is greatest, greatly.",
          "dv": "ﷲ އީ އެންމެ ބޮޑު ރަސްކަލާނގެއެވެ."
        },
        "repetitions": 3
      },
      {
        "arabic": "الْحَمْدُ لِلَّهِ كَثِيرًا",
        "translation": {
          "en": "Praise is abundantly due to Allah.",
          "dv": "ގިނަގުނަވެގެންވާ ޙަމްދު ﷲ އަށެވެ."
        },
        "repetitions": 3
      },
      {
        "arabic": "سُبْحَانَ اللَّهِ بُكْرَةً وَأَصِيلًا",
        "translation": {
          "en": "Glory be to Allah, morning and evening.",
          "dv": "ހެނދުނާއި ހަވީރު ﷲ ހުސްޠާހިރުވަންތަކަމަށް ތަސްބީޙަކިޔަމެވެ."
        },
        "repetitions": 3
      },
      {
        "arabic": "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ مِنْ نَفْخِهِ وَنَفْثِهِ وَهَمْزِهِ",
        "translation": {
          "en": "I seek refuge in Allah from Satan - from his arrogance, his poetry, and his madness.",
          "dv": "ޝައިޠާނާގެ ކިބައިން ﷲ ގެ ރައްކާތެރިކަމަށް އެދެމެވެ: އޭނާގެ ބޮޑާކަމުންނާއި، ޅެންވެރިކަމުންނާއި، މޮޔަކަން ޖެއްސުމުން."
        },
        "repetitions": 1
      }
    ],
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"Invocations for the beginning of the prayer\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-32",
    "type": "dua",
    "categoryId": "salah",
    "title": {
      "en": "Night-Prayer Opening Dua",
      "dv": "ރޭގަނޑުގެ ނަމާދު ފެށުމުގެ ދުޢާ"
    },
    "arabic": "اللَّهُمَّ لَكَ الْحَمْدُ، أَنْتَ نُورُ السَّمَوَاتِ وَالأَرْضِ وَمَنْ فِيهِنَّ، وَلَكَ الْحَمْدُ أَنْتَ قَيِّمُ السَّمَوَاتِ وَالأَرْضِ وَمَنْ فِيهِنَّ",
    "translation": {
      "en": "O Allah, praise belongs to You; You are the Light of the heavens and the earth and all within them. Praise belongs to You; You are the Sustainer of the heavens and the earth and all within them. [Praise belongs to You; You are the Lord of the heavens and the earth and all within them.] [Praise belongs to You; to You belongs the dominion of the heavens and the earth and all within them.] [Praise belongs to You; You are the King of the heavens and the earth.] You are the Truth, Your promise is true, Your word is true, meeting You is true, Paradise is true, the Fire is true, the Prophets are true, Muhammad (peace be upon him) is true, and the Hour is true. O Allah, to You I submit, in You I place my trust, in You I believe, to You I turn in repentance, through You I contend, and to You I bring my disputes for judgement. So forgive me what I have done and what I have left undone, what I have concealed and what I have made known, and what You know better than I do. You are the One who brings forward and the One who puts back; there is no god but You.",
      "dv": "އޭ ﷲ! ހަމަދު ހުއްޓީ އިބަރަސްކަލާނގެއަށެވެ. އިބަރަސްކަލާނގެއީ އުޑުތަކާއި ބިމާއި، އެދެމެދުގައިވާހާ ތަކެތީގެ ނޫރެވެ. ހަމަދު ހުއްޓީ އިބަރަސްކަލާނގެއަށެވެ. އިބަރަސްކަލާނގެއީ އުޑުތަކާއި ބިމާއި، އެދެމެދުގައިވާހާ ތަކެތި ދަމަހައްޓަވާ ރަސްކަލާނގެއެވެ. [ހަމަދު ހުއްޓީ އިބަރަސްކަލާނގެއަށެވެ. އިބަރަސްކަލާނގެއީ އުޑުތަކާއި ބިމުގެ ވެރި ރަސްކަލާނގެއެވެ.] [ހަމަދު ހުއްޓީ އިބަރަސްކަލާނގެއަށެވެ. އުޑުތަކާއި ބިމުގެ ވެރިކަންވަނީ އިބަރަސްކަލާނގެއަށެވެ.] [ހަމަދު ހުއްޓީ އިބަރަސްކަލާނގެއަށެވެ. އިބަރަސްކަލާނގެއީ އުޑުތަކާއި ބިމުގެ ރަސްގެފާނެވެ.] އިބަރަސްކަލާނގެއީ ޙައްޤުވަންތަ ރަސްކަލާނގެއެވެ. އިބަރަސްކަލާނގެ ވަޢުދުފުޅަކީ ޙައްޤެކެވެ. އިބަރަސްކަލާނގެ ބަސްފުޅަކީ ޙައްޤެކެވެ. އިބަރަސްކަލާނގެއާ ބައްދަލުވުމަކީ ޙައްޤެކެވެ. ސުވަރުގެއަކީ ޙައްޤެކެވެ. ނަރަކައަކީ ޙައްޤެކެވެ. ނަބިއްޔުންނަކީ ޙައްޤެކެވެ. މުޙައްމަދު (ﷺ) އަކީ ޙައްޤެކެވެ. ޤިޔާމަތު ދުވަހަކީ ޙައްޤެކެވެ. އޭ ﷲ! އިބަރަސްކަލާނގެއަށް މިއަޅާ ކިޔަމަންވެއްޖައީމެވެ. އިބަރަސްކަލާނގެއަށް ވަކީލުކުރީމެވެ. އިބަރަސްކަލާނގެއަށް އީމާންވެއްޖައީމެވެ. އިބަރަސްކަލާނގެ ޙަޟްރަތަށް ތައުބާވެއްޖައީމެވެ. އިބަރަސްކަލާނގެ މެދުވެރިކޮށް ދެބަސްވަމެވެ. އަދި އިބަރަސްކަލާނގެ ޙަޟްރަތަށް ޙުކުމް ހޯދަމެވެ. ފަހެ، މިއަޅާ ކުރީގައި ކުޅަ ފާފައާއި، ފަހުގައި ކުޅަ ފާފައާއި، ސިއްރުން ކުޅަ ފާފައާއި، ފާޅުގައި ކުޅަ ފާފަ ފުއްސަވާނދޭވެ! އަދި މިއަޅާއަށްވުރެ އިބަރަސްކަލާނގެއަށް މޮޅަށް އެނގިވޮޑިގެންވާ ފާފަވެސް ފުއްސަވާނދޭވެ! އިބަރަސްކަލާނގެއީ ކުރިއަށް ނެރުއްވާ ފަރާތެވެ. އަދި ފަހަތަށް ޖައްސަވާ ފަރާތެވެ. އިބަރަސްކަލާނގެ މެނުވީ ޙައްޤުވެގެން އަޅުކަން ވެވޭ އިލާހަކު ނުވެއެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 32"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"Invocations for the beginning of the prayer\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-33",
    "type": "zikr",
    "categoryId": "salah",
    "title": {
      "en": "Dua During Ruku' (1)",
      "dv": "ރުކޫޢުގައި ކިޔާ ދުޢާ (1)"
    },
    "arabic": "سُبْحَانَ رَبِّيَ الْعَظِيمِ",
    "translation": {
      "en": "Glory is to my Lord, the Most Great (said three times).",
      "dv": "މިއަޅާގެ ވެރި ރަސްކަލާނގެ، އެންމެ މަތިވެރި ރަސްކަލާނގެ ހުސްޠާހިރުވަންތަކަމަށް ތަސްބީޙަކިޔަމެވެ (3 ފަހަރު)."
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 33"
    },
    "repetitions": 3,
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"Invocations during Ruki' (bowing in prayer)\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-34",
    "type": "dua",
    "categoryId": "salah",
    "title": {
      "en": "Dua During Ruku' (2)",
      "dv": "ރުކޫޢުގައި ކިޔާ ދުޢާ (2)"
    },
    "arabic": "سُبْحَانَكَ اللَّهُمَّ رَبَّنَا وَبِحَمْدِكَ، اللَّهُمَّ اغْفِرْ لِي",
    "translation": {
      "en": "Glory is to You, O Allah, our Lord, and praise; O Allah, forgive me.",
      "dv": "އޭ ﷲ! އަޅަމެންގެ ވެރި ރަސްކަލާނގޭ! އިބަރަސްކަލާނގެ ހުސްޠާހިރުވަންތަކަމަށް ތަސްބީޙަކިޔައި، ޙަމްދުކުރަމެވެ. އޭ ﷲ! މިއަޅާއަށް ފުއްސަވާނދޭވެ!"
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 34"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"Invocations during Ruki' (bowing in prayer)\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-35",
    "type": "dua",
    "categoryId": "salah",
    "title": {
      "en": "Dua During Ruku' (3)",
      "dv": "ރުކޫޢުގައި ކިޔާ ދުޢާ (3)"
    },
    "arabic": "سُبُّوُحٌ، قُدُّوسٌ، رَبُّ المَلاَئِكَةِ وَالرُّوحِ",
    "translation": {
      "en": "Most Perfect, Most Holy, Lord of the angels and the Spirit (Jibreel).",
      "dv": "ހުރިހާ އުނިކަމަކުން ހުސްޠާހިރުވަންތަ، އެންމެ ބޮޑަށް ހުސްޠާހިރުވަންތަ، މަލާއިކަތުންނާއި ރޫޙުގެ (ޖިބްރީލްގެފާނުގެ) ވެރި ރަސްކަލާނގެއެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 35"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"Invocations during Ruki' (bowing in prayer)\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-36",
    "type": "dua",
    "categoryId": "salah",
    "title": {
      "en": "Dua During Ruku' (4)",
      "dv": "ރުކޫޢުގައި ކިޔާ ދުޢާ (4)"
    },
    "arabic": "اللَّهُمَّ لَكَ رَكَعْتُ، وَبِكَ آمَنْتُ، وَلَكَ أَسْلَمْتُ، خَشَعَ لَكَ سَمْعِي، وَبَصَرِي، وَمُخِّي، وَعَظْمِي، وَعَصَبِي",
    "translation": {
      "en": "O Allah, to You I have bowed, in You I have believed, and to You I have submitted. My hearing, my sight, my mind, my bones and my sinews [and whatever my feet carry] are humbled before You.",
      "dv": "އޭ ﷲ! އިބަރަސްކަލާނގެއަށް ރުކޫޢުކުޅައީމެވެ. އިބަރަސްކަލާނގެއަށް އީމާންވެއްޖައީމެވެ. އަދި އިބަރަސްކަލާނގެއަށް ކިޔަމަންވެއްޖައީމެވެ. މިއަޅާގެ ކަންފަތާއި، ލޮލާއި، ސިކުނޑިއާއި، ކަށިތަކާއި، ނާރުތައް [އަދި މިއަޅާގެ ފައި އުފުލައިގެންވާހާ ތަކެއްޗެއް] އިބަރަސްކަލާނގެއަށް ބިރުވެތިވެ ނިކަމެތިވެއްޖެއެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 36"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"Invocations during Ruki' (bowing in prayer)\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-37",
    "type": "dua",
    "categoryId": "salah",
    "title": {
      "en": "Dua During Ruku' (5)",
      "dv": "ރުކޫޢުގައި ކިޔާ ދުޢާ (5)"
    },
    "arabic": "سُبْحَانَ ذِي الْجَبَرُوتِ، وَالْمَلَكُوتِ، وَالْكِبْرِيَاءِ، وَالْعَظَمَةِ",
    "translation": {
      "en": "Glory be to the Possessor of might, dominion, grandeur and majesty.",
      "dv": "ބާރުވެރިކަމާއި، ވެރިކަމާއި، ބޮޑާވަންތަކަމާއި، މަތިވެރިކަމުގެ ވެރި ރަސްކަލާނގެ ހުސްޠާހިރުވަންތަކަމަށް ތަސްބީޙަކިޔަމެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 37"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"Invocations during Ruki' (bowing in prayer)\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-38",
    "type": "dua",
    "categoryId": "salah",
    "title": {
      "en": "Dua Rising from Ruku' (1)",
      "dv": "ރުކޫޢުން ތެދުވެ ކިޔާ ދުޢާ (1)"
    },
    "arabic": "سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ",
    "translation": {
      "en": "Allah hears whoever praises Him.",
      "dv": "ﷲ އަށް ޙަމްދުކުރާ މީހެއްގެ އަޑު، ﷲ އައްސަވައި، އިޖާބަދެއްވައެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 38"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"Invocations for rising from the Ruki'\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-39",
    "type": "dua",
    "categoryId": "salah",
    "title": {
      "en": "Dua after Ruku (Rabana Lakal Hamdu)",
      "dv": "ރުކޫޢުން ތެދުވެ ކިޔާ ދުޢާ (ރައްބަނާ ލަކަލް ޙަމްދު)"
    },
    "arabic": "رَبَّنَا وَلَكَ الْحَمْدُ، حَمْدًا كَثِيْرًا طَيِّبًا مُبَارَكًا فِيهِ",
    "transliteration": "Rabbanaa wa lakal-hamd, hamdan katheeran tayyiban mubaarakan feeh",
    "translation": {
      "en": "Our Lord, praise is Yours, abundant, good and blessed praise.\n\nWhen the Prophet (ﷺ) completed the prayer, he asked, \"Who has said these words?\" The man replied, \"I.\" The Prophet (ﷺ) said, \"I saw over thirty angels competing to write it first.\"",
      "dv": "އޭ އަޅަމެންގެ ވެރި ރަސްކަލާކޮ! ޙަމްދު ހުރީ އިބަ ރަސްކަލާނގެއަށެވެ. ގިނަގުނަވެގެންވާ، ޠާހިރު، ބަރަކާތްތެރި ޙަމްދަކުންނެވެ.\n\nރަސޫލާ (ﷺ) ނަމާދު ނިންމަވާލެއްވުމަށްފަހު އެއްސެވިއެވެ. \"މި ބަސްތައް ކީ ކާކު ހެއްޔެވެ؟\" އެމީހާ ދެންނެވިއެވެ: \"އެއީ ތިމަންނާއެވެ!\" ދެން ރަސޫލާ (ﷺ) ޙަދީޘްކުރެއްވިއެވެ: \"ތިރީހަށްވުރެ ގިނަ މަލާއިކަތުން، އޭގެ ތެރެއިން އެންމެ ފުރަތަމަ އެ ލިޔުއްވަނީ ކޮން ބޭކަލެއްތޯ އަވަސްވެވަޑައިގަތްތަން ތިމަންކަލޭގެފާނު ދެކެވަޑައިގަތީމެވެ.\""
    },
    "source": {
      "type": "hadith",
      "reference": "Bukhari: 799"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Content reused verbatim from this app's existing verified dataset (original id: masnun-52), cross-referenced here under its Hisn al-Muslim chapter/number. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-40",
    "type": "dua",
    "categoryId": "salah",
    "title": {
      "en": "Dua Rising from Ruku' (2)",
      "dv": "ރުކޫޢުން ތެދުވެ ކިޔާ ދުޢާ (2)"
    },
    "arabic": "مِلْءَ السَّمَوَاتِ وَمِلْءَ الأَرْضِ، وَمَا بَيْنَهُمَا، وَمِلْءَ مَا شِئْتَ مِنْ شَيءٍ بَعْدُ. أَهلَ الثَّناءِ وَالْمَجْدِ، أَحَقُّ مَا قَالَ الْعَبْدُ، وَكُلُّنَا لَكَ عَبْدٌ. اللَّهُمَّ لاَ مَانِعَ لِمَا أَعْطَيْتَ، وَلاَ مُعْطِيَ لِمَا مَنَعْتَ، وَلاَ يَنْفَعُ ذَا الجَدِّ مِنْكَ الجَدُّ",
    "translation": {
      "en": "[Our Lord, and to You be praise,] filling the heavens, filling the earth, filling what is between them, and filling whatever else You wish. O Possessor of praise and glory, that is the truest thing a slave has said, and we are all Your slaves. O Allah, none can withhold what You give, none can give what You withhold, and no wealth or majesty can benefit anyone against You.",
      "dv": "[އަޅަމެންގެ ވެރި ރަސްކަލާކޮ! ޙަމްދު ހުއްޓީ އިބަރަސްކަލާނގެއަށެވެ]، އުޑުތައް ފުރޭ ވަރަށާއި، ބިން ފުރޭ ވަރަށާއި، އެދެމެދުގައިވާ ތަކެތި ފުރޭ ވަރަށާއި، އެއަށްފަހު އިބަރަސްކަލާނގެ އިރާދަކުރައްވާ އެއްޗެއް ފުރޭ ވަރަށެވެ. ޘަނާއާއި މާތްކަމުގެ ވެރި ރަސްކަލާކޮ! އެއީ އަޅަކު ބުނެފައިވާ އެންމެ ޙައްޤު ބަހެވެ. އަދި އަޅަމެން އެންމެންނަކީވެސް އިބަރަސްކަލާނގެ އަޅުންނެވެ. އޭ ﷲ! އިބަރަސްކަލާނގެ ދެއްވި އެއްޗެއް ހިފެހެއްޓޭނެ ފަރާތެއް ނުވެއެވެ. އަދި އިބަރަސްކަލާނގެ ހިފެހެއްޓެވި އެއްޗެއް ދެވޭނެ ފަރާތެއް ނުވެއެވެ. އަދި ބާރުވެރިޔެއްގެ ބާރުވެރިކަމަކުން، އިބަރަސްކަލާނގެ ޙަޟްރަތުގައި މަންފާއެއް ނުކުރާނެއެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 40"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"Invocations for rising from the Ruki'\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-41",
    "type": "zikr",
    "categoryId": "salah",
    "title": {
      "en": "Dua During Sujood (1)",
      "dv": "ސަޖިދައިގައި ކިޔާ ދުޢާ (1)"
    },
    "arabic": "سُبْحَانَ رَبِّيَ الْأَعْلَى",
    "translation": {
      "en": "Glory is to my Lord, the Most High (said three times).",
      "dv": "މިއަޅާގެ ވެރި ރަސްކަލާނގެ، އެންމެ މަތިވެރި ރަސްކަލާނގެ ހުސްޠާހިރުވަންތަކަމަށް ތަސްބީޙަކިޔަމެވެ (3 ފަހަރު)."
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 41"
    },
    "repetitions": 3,
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"Invocations during Sujood\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-42",
    "type": "dua",
    "categoryId": "salah",
    "title": {
      "en": "Dua During Sujood (2)",
      "dv": "ސަޖިދައިގައި ކިޔާ ދުޢާ (2)"
    },
    "arabic": "سُبْحَانَكَ اللَّهُمَّ رَبَّنَا وَبِحَمْدِكَ، اللَّهُمَّ اغْفِرْ لِي",
    "translation": {
      "en": "Glory is to You, O Allah, our Lord, and praise; O Allah, forgive me.",
      "dv": "އޭ ﷲ! އަޅަމެންގެ ވެރި ރަސްކަލާނގޭ! އިބަރަސްކަލާނގެ ހުސްޠާހިރުވަންތަކަމަށް ތަސްބީޙަކިޔައި، ޙަމްދުކުރަމެވެ. އޭ ﷲ! މިއަޅާއަށް ފުއްސަވާނދޭވެ!"
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 42"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"Invocations during Sujood\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-43",
    "type": "dua",
    "categoryId": "salah",
    "title": {
      "en": "Dua During Sujood (3)",
      "dv": "ސަޖިދައިގައި ކިޔާ ދުޢާ (3)"
    },
    "arabic": "سُبوحٌ، قُدُّوسٌ، رَبُّ الْمَلَائِكَةِ وَالرُّوحِ",
    "translation": {
      "en": "Most Perfect, Most Holy, Lord of the angels and the Spirit (Jibreel).",
      "dv": "ހުރިހާ އުނިކަމަކުން ހުސްޠާހިރުވަންތަ، އެންމެ ބޮޑަށް ހުސްޠާހިރުވަންތަ، މަލާއިކަތުންނާއި ރޫޙުގެ (ޖިބްރީލްގެފާނުގެ) ވެރި ރަސްކަލާނގެއެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 43"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"Invocations during Sujood\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-44",
    "type": "dua",
    "categoryId": "salah",
    "title": {
      "en": "Dua During Sujood (4)",
      "dv": "ސަޖިދައިގައި ކިޔާ ދުޢާ (4)"
    },
    "arabic": "اللَّهُمَّ لَكَ سَجَدْتُ وَبِكَ آمَنْتُ، وَلَكَ أَسْلَمْتُ، سَجَدَ وَجْهِيَ لِلَّذِي خَلَقَهُ، وَصَوَّرَهُ، وَشَقَّ سَمْعَهُ وَبَصَرَهُ، تَبَارَكَ اللَّهُ أَحْسنُ الْخَالِقينَ",
    "translation": {
      "en": "O Allah, to You I have prostrated, in You I have believed, and to You I have submitted. My face has prostrated to the One Who created it and shaped it, and split open its hearing and sight. Blessed is Allah, the Best of Creators.",
      "dv": "އޭ ﷲ! އިބަރަސްކަލާނގެއަށް ސަޖިދަކުޅައީމެވެ. އިބަރަސްކަލާނގެއަށް އީމާންވެއްޖައީމެވެ. އަދި އިބަރަސްކަލާނގެއަށް ކިޔަމަންވެއްޖައީމެވެ. މިއަޅާގެ މޫނު ސަޖިދަކުޅައީ، އެ މޫނު ހެއްދެވި، ސިފަކުރެއްވި، އަދި އޭގައިވާ އިވުމާއި ފެނުން ފަޅުއްވި ރަސްކަލާނގެއަށެވެ. އެންމެ ހެޔޮ ގޮތުގައި ހައްދަވާ ރަސްކަލާނގެ ކަމުގައިވާ ﷲ ބަރަކާތްތެރިވެވޮޑިގެންފިއެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 44"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"Invocations during Sujood\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-45",
    "type": "dua",
    "categoryId": "salah",
    "title": {
      "en": "Dua During Sujood (5)",
      "dv": "ސަޖިދައިގައި ކިޔާ ދުޢާ (5)"
    },
    "arabic": "سُبْحَانَ ذِي الْجَبَرُوتِ، وَالْمَلَكُوتِ، وَالْكِبْرِيَاءِ، وَالْعَظَمَةِ",
    "translation": {
      "en": "Glory be to the Possessor of might, dominion, grandeur and majesty.",
      "dv": "ބާރުވެރިކަމާއި، ވެރިކަމާއި، ބޮޑާވަންތަކަމާއި، މަތިވެރިކަމުގެ ވެރި ރަސްކަލާނގެ ހުސްޠާހިރުވަންތަކަމަށް ތަސްބީޙަކިޔަމެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 45"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"Invocations during Sujood\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-46",
    "type": "dua",
    "categoryId": "salah",
    "title": {
      "en": "Dua During Sujood (6)",
      "dv": "ސަޖިދައިގައި ކިޔާ ދުޢާ (6)"
    },
    "arabic": "اللَّهُمَّ اغْفِرْ لِي ذَنْبِي كُلَّهُ: دِقَّهُ وَجِلَّهُ، وَأَوَّلَهُ وَآخِرَهُ، وَعَلاَنِيَّتَهُ وَسِرَّهُ",
    "translation": {
      "en": "O Allah, forgive me all my sins - the small and the great, the first and the last, the open and the secret.",
      "dv": "އޭ ﷲ! މިއަޅާގެ ހުރިހާ ފާފައެއް ފުއްސަވާނދޭވެ! ކުޑަ ފާފައާއި ބޮޑު ފާފައާއި، ކުރީގެ ފާފައާއި ފަހުގެ ފާފައާއި، ފާޅުގައި ކުޅަ ފާފައާއި ސިއްރުން ކުޅަ ފާފައެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 46"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"Invocations during Sujood\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-47",
    "type": "dua",
    "categoryId": "salah",
    "title": {
      "en": "Dua During Sujood (7)",
      "dv": "ސަޖިދައިގައި ކިޔާ ދުޢާ (7)"
    },
    "arabic": "اللَّهُمَّ إِنِّي أَعُوذُ بِرِضَاكَ مِنْ سَخَطِكَ، وَبِمُعَافَاتِكَ مِنْ عُقوبَتِكَ، وَأَعُوذُ بِكَ مِنْكَ، لاَ أُحْصِي ثَنَاءً عَلَيْكَ، أَنْتَ كَمَا أَثْنَيْتَ عَلَى نَفْسِكَ",
    "translation": {
      "en": "O Allah, I seek refuge in Your pleasure from Your displeasure, and in Your pardon from Your punishment. I seek refuge in You from You. I cannot enumerate praise of You; You are as You have praised Yourself.",
      "dv": "އޭ ﷲ! އިބަރަސްކަލާނގެ ކޯފާއިން ސަލާމަތްވުމަށް، އިބަރަސްކަލާނގެ ރުހިވޮޑިގަތުމުން ރައްކާތެރިކަމަށް އެދެމެވެ. އަދި އިބަރަސްކަލާނގެ ޢުޤޫބާތުން ސަލާމަތްވުމަށް، އިބަރަސްކަލާނގެ ފުއްސެވުމުން ރައްކާތެރިކަމަށް އެދެމެވެ. އަދި އިބަރަސްކަލާނގެ ޙަޟްރަތުން، އިބަރަސްކަލާނގެ ޙަޟްރަތަށް ރައްކާތެރިކަމަށް އެދެމެވެ. އިބަރަސްކަލާނގެއަށް ކުރާ ޘަނާ، މިއަޅާއަކަށް ގުނާ ޢަދަދު ނުކުރެވޭނެއެވެ. އިބަރަސްކަލާނގެ ވަނީ، އިބަރަސްކަލާނގެ އަމިއްލަ ނަފްސަށް ޘަނާދެންނެވި ފަދައިންނެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 47"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"Invocations during Sujood\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-48",
    "type": "dua",
    "categoryId": "salah",
    "title": {
      "en": "Dua Between the Two Prostrations (1)",
      "dv": "ދެ ސަޖިދަ ދޭތެރޭ ކިޔާ ދުޢާ (1)"
    },
    "arabic": "رَبِّ اغْفِرْ لِي، رَبِّ اغْفِرْ لِي",
    "translation": {
      "en": "My Lord, forgive me. My Lord, forgive me.",
      "dv": "އޭ މިއަޅާގެ ވެރި ރަސްކަލާކޮ! ފުއްސަވާނދޭވެ! އޭ މިއަޅާގެ ވެރި ރަސްކަލާކޮ! ފުއްސަވާނދޭވެ!"
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 48"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"Invocations for sitting between two prostrations\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-49",
    "type": "dua",
    "categoryId": "salah",
    "title": {
      "en": "Dua Between the Two Prostrations (2)",
      "dv": "ދެ ސަޖިދަ ދޭތެރޭ ކިޔާ ދުޢާ (2)"
    },
    "arabic": "اللَّهُمَّ اغْفِرْ لِي، وَارْحَمْنِي، وَاهْدِنِي، وَاجْبُرْنِي، وَعَافِنِي، وَارْزُقْنِي، وَارْفَعْنِي",
    "translation": {
      "en": "O Allah, forgive me, have mercy on me, guide me, make good my shortcomings, grant me well-being, provide for me, and raise me in rank.",
      "dv": "އޭ ﷲ! މިއަޅާއަށް ފުއްސަވާނދޭވެ! އަދި ރަޙްމަތްލައްވާނދޭވެ! އަދި މަގުދައްކަވާނދޭވެ! އަދި މިއަޅާގެ އުނިކަންތައް ފުރިހަމަކޮށްދެއްވާނދޭވެ! އަދި ޢާފިޔަތްދެއްވާނދޭވެ! އަދި ރިޒުޤު ދެއްވާނދޭވެ! އަދި މަތިވެރިކުރައްވާނދޭވެ!"
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 49"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"Invocations for sitting between two prostrations\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-50",
    "type": "dua",
    "categoryId": "salah",
    "title": {
      "en": "Dua for the Prostration of Qur'an Recitation",
      "dv": "ތިލާވަތު ސަޖިދައިގައި ކިޔާ ދުޢާ"
    },
    "arabic": "سَجَدَ وَجْهِيَ لِلَّذِي خَلَقَهُ، وَشَقَّ سَمْعَهُ وَبَصَرَهُ بِحَوْلِهِ وَقُوَّتِهِ، ﴿فَتَبارَكَ اللَّهُ أَحْسَنُ الْخَالِقِينَ",
    "translation": {
      "en": "My face has prostrated to the One Who created it, and split open its hearing and sight by His power and might. So blessed is Allah, the Best of Creators.",
      "dv": "މިއަޅާގެ މޫނު ސަޖިދަކުޅައީ، އެ މޫނު ހެއްދެވި، އަދި އެކަލާނގެ ބާރުފުޅާއި ކުޅަދުންވަންތަކަމުން، އޭގައިވާ އިވުމާއި ފެނުން ފަޅުއްވި ރަސްކަލާނގެއަށެވެ. އެންމެ ހެޔޮ ގޮތުގައި ހައްދަވާ ރަސްކަލާނގެ ކަމުގައިވާ ﷲ ބަރަކާތްތެރިވެވޮޑިގެންފިއެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 50"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"Supplications for prostrating due to recitation of the Qur'an\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-51",
    "type": "dua",
    "categoryId": "salah",
    "title": {
      "en": "Sujood Dua During Recitation of Quran",
      "dv": "ތިލާވަތުގެ ސަޖިޑައިގައި ކިޔާ ދުޢާ"
    },
    "arabic": "اَللَّهُمَّ اكْتُبْ لِي بِهَا عِنْدَكَ أَجْرًا وَضَعْ عَنِّيْ بِهَا وِزْرًا وَاجعَلْهَا لِي عِنْدَكَ ذُخْرًا وَتَقَبَّلْهَا مِنِّي كَمَا تَقَبَّلْتَهَا مِنْ عَبْدِكَ دَاوُدَ",
    "transliteration": "Allahum-maktub lee bihaa 'indaka 'ajran, wad'a 'annee bihaa wizran, waj'alhaa lee 'indaka thukhran, wa taqabbalhaa minnee kamaa taqabbaltahaa min 'abdika Daawood",
    "translation": {
      "en": "O Allah, write it as a reward for me, and release me from a burden for it, and make it a treasure for me in Paradise. Accept it from me as You accepted it from your servant Dawud.\n\nIbn 'Abbas (RA) said, \"The Messenger of Allah (ﷺ), recited the verses of prostration and recited this du'a.\" (The dua is mentioned above)",
      "dv": "އޭ ﷲ! މިއަޅާއަށްޓަކައި، މި ސަޖިޑައިގެ ސަބަބުން އިބަރަސްކަލާނގެ ޙަޟްރަތުގައި ދަރުމައެއް ލިޔުއްވާނދޭވެ! އަދި އޭގެ ސަބަބުން، މިއަޅާގެ ކިބައިން ފާފައެއް ފުއްސަވާނދޭވެ! އަދި އޭގެ ޘަވާބު އިބަރަސްކަލާނގެ ޙަޟްރަތުގައި މިއަޅާއަށްޓަކައި ރައްކާކުރައްވާނދޭވެ! އަދި އިބަރަސްކަލާނގެ އަޅު ދާވޫދުގެފާނުގެ ކިބައިން (ސަޖިޑަ) ޤަބޫލުކުރެއްވި ފަދައިން، މިއަޅާގެ ކިބައިންވެސް މި ސަޖިޑަ ޤަބޫލުކުރައްވާނދޭވެ!"
    },
    "source": {
      "type": "hadith",
      "reference": "Hasan. Tirmidhi: 3424"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Content reused verbatim from this app's existing verified dataset (original id: masnun-491), cross-referenced here under its Hisn al-Muslim chapter/number. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-52",
    "type": "dua",
    "categoryId": "salah",
    "title": {
      "en": "At-Tashahhud",
      "dv": "ތަޝައްހުދު"
    },
    "arabic": "التَّحِيَّاتُ لِلَّهِ، وَالصَّلَواتُ، وَالطَّيِّباتُ، السَّلاَمُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ، السَّلاَمُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ. أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّداً عَبْدُهُ وَرَسولُهُ",
    "translation": {
      "en": "All greetings, prayers and good things are due to Allah. Peace be upon you, O Prophet, and the mercy of Allah and His blessings. Peace be upon us and upon the righteous slaves of Allah. I bear witness that there is no god but Allah, and I bear witness that Muhammad is His slave and His Messenger.",
      "dv": "ހުރިހާ ތަހިއްޔާތަކާއި، ނަމާދުތަކާއި، ރިވެތި ކަންތައްތައް ﷲ އަށެވެ. އޭ ނަބިއްޔާއެވެ! ކަލޭގެފާނުގެ މައްޗަށް ސަލާމަށާއި ﷲ ގެ ރަޙްމަތާއި ބަރަކާތް ލެއްވުން އެދެމެވެ. އަޅަމެންގެ މައްޗަށާއި ﷲ ގެ ޞާލިޙް އަޅުތަކުންގެ މައްޗަށް ސަލާމް ހުށްޓެވެ. ﷲ މެނުވީ ޙައްޤުވެގެން އަޅުކަން ވެވޭ އިލާހަކު ނުވާކަމަށް މިއަޅާ ހެކިވަމެވެ. އަދި މުޙައްމަދު (ﷺ) އީ، އެކަލާނގެ އަޅާ އަދި ރަސޫލާކަމަށް ހެކިވަމެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 52"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"Invocation for At-Tashahhud (sitting in prayer)\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-53",
    "type": "dua",
    "categoryId": "salah",
    "title": {
      "en": "Blessings on the Prophet (1)",
      "dv": "ނަބިއްޔާއަށް ޞަލަވާތް ކިޔެވުން (1)"
    },
    "arabic": "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ، وَعَلَى آلِ مُحَمَّدٍ، كَمَا صَلَّيتَ عَلَى إِبْرَاهِيمَ، وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ، اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ",
    "translation": {
      "en": "O Allah, send prayers upon Muhammad and upon the family of Muhammad, as You sent prayers upon Ibrahim and the family of Ibrahim; You are indeed Praiseworthy, Glorious. O Allah, send blessings upon Muhammad and upon the family of Muhammad, as You sent blessings upon Ibrahim and the family of Ibrahim; You are indeed Praiseworthy, Glorious.",
      "dv": "އޭ ﷲ! އިބްރާހީމްގެފާނަށާއި، އެކަލޭގެފާނުގެ އާލުންނަށް ޞަލަވާތް ލެއްވި ފަދައިން، މުޙައްމަދު (ﷺ) އަށާއި، އެކަލޭގެފާނުގެ އާލުންނަށް ޞަލަވާތް ލައްވާނދޭވެ! ހަމަކަށަވަރުން، އިބަރަސްކަލާނގެއީ ޙަމްދު ލިބިވޮޑިގެންވާ، މާތްވެގެންވާ ރަސްކަލާނގެއެވެ. އޭ ﷲ! އިބްރާހީމްގެފާނަށާއި، އެކަލޭގެފާނުގެ އާލުންނަށް ބަރަކާތްލެއްވި ފަދައިން، މުޙައްމަދު (ﷺ) އަށާއި، އެކަލޭގެފާނުގެ އާލުންނަށް ބަރަކާތްލައްވާނދޭވެ! ހަމަކަށަވަރުން، އިބަރަސްކަލާނގެއީ ޙަމްދު ލިބިވޮޑިގެންވާ، މާތްވެގެންވާ ރަސްކަލާނގެއެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 53"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"How to recite blessings on the Prophet after the Tashahhud\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-54",
    "type": "dua",
    "categoryId": "salah",
    "title": {
      "en": "Blessings on the Prophet (2)",
      "dv": "ނަބިއްޔާއަށް ޞަލަވާތް ކިޔެވުން (2)"
    },
    "arabic": "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى أَزْوَاجِهِ وَذُرِّيَّتِهِ، كَمَا صَلَّيْتَ عَلَى آلِ إِبْرَاهِيمَ. وَبَارِكْ عَلَى مُحَمَّدٍ وَعَلَى أَزْواجِهِ وَذُرِّيَّتِهِ، كَمَا بَارَكْتَ عَلَى آلِ إِبْرَاهِيمَ. إِنَّكَ حَمِيدٌ مَجِيدٌ",
    "translation": {
      "en": "O Allah, send prayers upon Muhammad, and upon his wives and his descendants, as You sent prayers upon the family of Ibrahim. And send blessings upon Muhammad, and upon his wives and his descendants, as You sent blessings upon the family of Ibrahim; You are indeed Praiseworthy, Glorious.",
      "dv": "އޭ ﷲ! އިބްރާހީމްގެފާނުގެ އާލުންނަށް ޞަލަވާތް ލެއްވި ފަދައިން، މުޙައްމަދު (ﷺ) އަށާއި، އެކަލޭގެފާނުގެ އަނބިއަނބިކަނބަލުންނަށާއި، ދަރިކޮޅަށް ޞަލަވާތް ލައްވާނދޭވެ! އަދި އިބްރާހީމްގެފާނުގެ އާލުންނަށް ބަރަކާތްލެއްވި ފަދައިން، މުޙައްމަދު (ﷺ) އަށާއި، އެކަލޭގެފާނުގެ އަނބިއަނބިކަނބަލުންނަށާއި، ދަރިކޮޅަށް ބަރަކާތްލައްވާނދޭވެ! ހަމަކަށަވަރުން، އިބަރަސްކަލާނގެއީ ޙަމްދު ލިބިވޮޑިގެންވާ، މާތްވެގެންވާ ރަސްކަލާނގެއެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 54"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"How to recite blessings on the Prophet after the Tashahhud\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-55",
    "type": "dua",
    "categoryId": "salah",
    "title": {
      "en": "Dua Before Ending the Prayer (1)",
      "dv": "ނަމާދު ނިމުމުގެ ކުރިން ކިޔާ ދުޢާ (1)"
    },
    "arabic": "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، وَمِنْ عَذَابِ جَهَنَّمَ، وَمِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ، وَمِنْ شَرِّ فِتْنَةِ الْمَسِيحِ الدَّجَّالِ",
    "translation": {
      "en": "O Allah, I seek refuge in You from the punishment of the grave, from the punishment of Hell, from the trials of life and death, and from the evil of the trial of the False Messiah (Dajjal).",
      "dv": "އޭ ﷲ! ހަމަކަށަވަރުން، ކަށްވަޅުގެ ޢަޛާބުންނާއި، ނަރަކައިގެ ޢަޛާބުންނާއި، ދިރިހުރުމާއި މަރުވުމުގެ ފިތުނައިންނާއި، މަސީޙުއްދައްޖާލުގެ ފިތުނައިގެ ނުބައިކަމުން ރައްކާތެރިކަމަށް އެދި، އިބަރަސްކަލާނގެ ޙަޟްރަތުން ދަންނަވަމެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 55"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"Invocations after the final Tash-ahhud and before ending the prayer\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-56",
    "type": "dua",
    "categoryId": "salah",
    "title": {
      "en": "Dua for Debt Relief and Protection",
      "dv": "ދަރަންޏާއި ފާފައިން ރައްކާތެރިވުމަށް ކުރާ ދުޢާ"
    },
    "arabic": "اَللَّهُمَّ إِنِّي أَعُوْذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، وَأَعُوْذُ بِكَ مِنْ فِتْنَةِ الْمَسِيحِ الدَّجَّالِ، وَأَعُوْذُ بِكَ مِنْ فِتْنَةِ الْمَحْـيَا وَالْمَمَاتِ. اَللَّهُمَّ إِنِّي أَعُوْذُ بِكَ مِنَ الْمَأْثَمِ وَالْمَغْرَمِ",
    "transliteration": "Allaahumma 'innee 'a'oodhu bika min 'adhaabil-qabr, wa 'a'oodhu bika min fitnatil-maseehid-dajjaal, wa 'a'oodhu bika min fitnatil-mahyaa wal-mamaat. Allaahumma 'innee 'a'oodhu bika minal-ma'thami wal-maghram",
    "translation": {
      "en": "O Allah, I seek refuge in You from the punishment of the grave, and I seek refuge in You from the trial of the False Messiah, and I seek refuge in You from the trials of life and death. O Allah, I seek refuge in You from sin and from debt.\n\nOne asks him (the Prophet [ﷺ]), \"Why do you seek so much refuge (from Allah) in debt?\" In reply, the Prophet (ﷺ) said, \"When a person is in debt, he lies when he speaks and breaks his promise.",
      "dv": "އޭ ﷲ! ހަމަކަށަވަރުން ކަށްވަޅުގެ ޢަޛާބުން ރައްކާތެރިކޮށްދެއްވުން އެދި އިބަރަސްކަލާނގެ ޙަޟްރަތުން ދަންނަވަމެވެ. އަދި މަސީޙުއްދައްޖާލުގެ ފިތުނައިން ރައްކާތެރިކޮށްދެއްވުން އެދި އިބަރަސްކަލާނގެ ޙަޟްރަތުން ދަންނަވަމެވެ. އަދި ދިރިހުރުމާއި މަރުވުމުގެ ފިތުނައިން ރައްކާތެރިކޮށްދެއްވުން އެދި އިބަރަސްކަލާނގެ ޙަޟްރަތުން ދަންނަވަމެވެ. އޭ ﷲ! ފާފަވެރިވުމުންނާއި ދަރަނިވެރިވުމުން ރައްކާތެރިކޮށްދެއްވުން އެދި އިބަރަސްކަލާނގެ ޙަޟްރަތުން ދަންނަވަމެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Bukhari: 832"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Content reused verbatim from this app's existing verified dataset (original id: masnun-415), cross-referenced here under its Hisn al-Muslim chapter/number. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-57",
    "type": "dua",
    "categoryId": "salah",
    "title": {
      "en": "Powerful Forgiveness Dua from Sahih Bukhari",
      "dv": "ފާފަފުއްސެވުން އެދި ކުރާ ދުޢާ (ޞަޙީޙް ބުޚާރީ)"
    },
    "arabic": "اَللَّهُمَّ إِنِّي ظَلَمْتُ نَفْسِي ظُلْمًا كَثِيْرًا وَلَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ فَاغْفِرْ لِي مَغْفِرَةً مِّنْ عِنْدِكَ وَارْحَمْنِيْ إِنَّكَ أَنْتَ الْغَفُوْرُ الرَّحِيْمُ",
    "transliteration": "Allaahumma inni zalamtu nafsi zulman kathiran wa laa yaghfirudh-dhunuba illaa Anta, faghfir li maghfiratan min 'indika warhamni, innaka Antal-Ghafurur-Rahim",
    "translation": {
      "en": "O Allah! I have done great injustice to myself and none except You forgives sins, so bestow on me a forgiveness from You, and Have Mercy on me, You are the Forgiver, the Merciful.\n\nNarrated by Abu Bakr As-Siddiq (RA): I asked Allah's Messenger (ﷺ) to teach me an invocation so that I may invoke Allah with it in my prayer. He told me to say: (The dua is mentioned above)",
      "dv": "އޭ ﷲ! ހަމަކަށަވަރުން މިއަޅާގެ ނަފްސަށް ގިނަވެގެންވާ އަނިޔާއިން މިއަޅާ އަނިޔާވެރިވެއްޖައީމެވެ. އަދި އިބަރަސްކަލާނގެ މެނުވީ ފާފަ ނުފުއްސަވައެވެ. ފަހެ، އިބަރަސްކަލާނގެ ޙަޟްރަތުން މިއަޅާއަށް ފާފަފުއްސަވާނދޭވެ! އަދި މިއަޅާއަށް ރަޙްމަތް ލައްވާނދޭވެ! ހަމަކަށަވަރުން އިބަރަސްކަލާނގެއީ ގިނަގިނައިން ފާފަފުއްސަވާ ރަޙީމްވަންތަ ރަސްކަލާނގެއެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Bukhari: 834"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Content reused verbatim from this app's existing verified dataset (original id: masnun-959), cross-referenced here under its Hisn al-Muslim chapter/number. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-58",
    "type": "dua",
    "categoryId": "salah",
    "title": {
      "en": "Dua Before Ending the Prayer (2)",
      "dv": "ނަމާދު ނިމުމުގެ ކުރިން ކިޔާ ދުޢާ (2)"
    },
    "arabic": "اللَّهُمَّ اغْفِرْ لِي مَا قَدَّمْتُ، وَمَا أَخَّرْتُ، وَمَا أَسْرَرْتُ، وَمَا أَعْلَنْتُ، وَمَا أَسْرَفْتُ، وَمَا أَنْتَ أَعْلَمُ بِهِ مِنِّي. أَنْتَ الْمُقَدِّمُ، وَأَنْتَ الْمُؤَخِّرُ لاَ إِلَهَ إِلاَّ أَنْتَ",
    "translation": {
      "en": "O Allah, forgive me what I have done and what I have left undone, what I have concealed and what I have made known, what I have exceeded the limits in, and what You know better than I do. You are the One who brings forward and the One who puts back; there is no god but You.",
      "dv": "އޭ ﷲ! މިއަޅާ ކުރީގައި ކުޅަ ފާފައާއި، ފަހުގައި ކުޅަ ފާފައާއި، ސިއްރުން ކުޅަ ފާފައާއި، ފާޅުގައި ކުޅަ ފާފައާއި، ހައްދުފަހަނަޅައި ގޮސްފައިވާ ފާފައާއި، މިއަޅާއަށްވުރެ އިބަރަސްކަލާނގެއަށް މޮޅަށް އެނގިވޮޑިގެންވާ ފާފަ ފުއްސަވާނދޭވެ! އިބަރަސްކަލާނގެއީ ކުރިއަށް ނެރުއްވާ ފަރާތެވެ. އަދި ފަހަތަށް ޖައްސަވާ ފަރާތެވެ. އިބަރަސްކަލާނގެ މެނުވީ ޙައްޤުވެގެން އަޅުކަން ވެވޭ އިލާހަކު ނުވެއެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 58"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"Invocations after the final Tash-ahhud and before ending the prayer\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-59",
    "type": "dua",
    "categoryId": "salah",
    "title": {
      "en": "Dua after Salah for Help in Worship",
      "dv": "ނަމާދަށްފަހު އެހީތެރިކަމަށް އެދި ކުރާ ދުޢާ"
    },
    "arabic": "اَللَّهُمَّ أَعِنِّيْ عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ",
    "transliteration": "Allaahumma 'a'innee 'alaa thikrika, wa shukrika, wahusni 'ibaadatik",
    "translation": {
      "en": "O Allah, help me to remember You, to give You thanks, and to perform Your worship in the best manner.",
      "dv": "އޭ ﷲ! އިބަ ﷲ އަށް ޛިކުރު ކުރުމަށާއި، ޝުކުރު ކުރުމަށާއި، އަދި ރިވެތި ގޮތުގައި އިބަ ﷲ އަށް އަޅުކަން ކުރުމަށް މިއަޅާއަށް އެހީތެރިވެވޮޑިގަންނަވާނދޭވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Sahih (Albani). Abu Dawud: 1522"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Content reused verbatim from this app's existing verified dataset (original id: masnun-6), cross-referenced here under its Hisn al-Muslim chapter/number. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-60",
    "type": "dua",
    "categoryId": "salah",
    "title": {
      "en": "Dua Before Ending the Prayer (3)",
      "dv": "ނަމާދު ނިމުމުގެ ކުރިން ކިޔާ ދުޢާ (3)"
    },
    "arabic": "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْبُخْلِ، وَأَعوذُ بِكَ مِنَ الْجُبْنِ، وَأَعُوذُ بِكَ مِنْ أَنْ أُرَدَّ إِلَى أَرْذَلِ الْعُمُرِ، وَأَعُوذُ بِكَ مِنْ فِتْنَةِ الدُّنْيَا وَعَذَابِ الْقَبْرِ",
    "translation": {
      "en": "O Allah, I seek refuge in You from miserliness, and I seek refuge in You from cowardice, and I seek refuge in You from being returned to a feeble old age, and I seek refuge in You from the trial of this world and the punishment of the grave.",
      "dv": "އޭ ﷲ! ދަހިވެތިކަމުން، އިބަރަސްކަލާނގެ ޙަޟްރަތުން ރައްކާތެރިކަމަށް އެދެމެވެ. އަދި ބިރުވެރިކަމުން ރައްކާތެރިކަމަށް އެދެމެވެ. އަދި އެންމެ ނިކަމެތި ޢުމުރަށް އަނބުރާ ފޮނުވުމުން ރައްކާތެރިކަމަށް އެދެމެވެ. އަދި ދުނިޔޭގެ ފިތުނައިންނާއި، ކަށްވަޅުގެ ޢަޛާބުން ރައްކާތެރިކަމަށް އެދެމެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 60"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"Invocations after the final Tash-ahhud and before ending the prayer\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-61",
    "type": "dua",
    "categoryId": "salah",
    "title": {
      "en": "Paradise and Hell Fire Dua for protection",
      "dv": "ސުވަރުގެއަށް އެދުމާއި ނަރަކައިން ރައްކާތެރިވުމަށް ކުރާ ދުޢާ"
    },
    "arabic": "اَللَّهُمَّ إِنِّي أَسْأَلُكَ الْجَنَّةَ وَأَعُوذُ بِكَ مِنَ النَّارِ",
    "transliteration": "Allaahumma 'innee 'as'alukal-jannata wa 'a'oodhu bika minan-naar",
    "translation": {
      "en": "O Allah, I ask You for Paradise and seek Your protection from the Fire.\n\nNarrated by Abu Huraira (RA): The Messenger of Allah (ﷺ), asked a man, \"What do you supplicate in your prayer?\" The man says, I recite Tashahhud and say- (The dua is mentioned above) I can’t recite dua as beautifully as you, nor can I recite dua like Mu'adh!\" Then Prophet (ﷺ) said, “We also supplicate like you!”",
      "dv": "އޭ ﷲ! މިއަޅާ އިބަރަސްކަލާނގެ ޙަޟްރަތުން ސުވަރުގެއަށް އެދެމެވެ. އަދި ނަރަކައިން ރައްކާތެރިކޮށްދެއްވުމަށް އިބަރަސްކަލާނގެ ޙަޟްރަތުން އެދެމެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Sahih (Albani). Ibn Majah: 910"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Content reused verbatim from this app's existing verified dataset (original id: masnun-13), cross-referenced here under its Hisn al-Muslim chapter/number. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-62",
    "type": "dua",
    "categoryId": "salah",
    "title": {
      "en": "Dua Before Ending the Prayer (4)",
      "dv": "ނަމާދު ނިމުމުގެ ކުރިން ކިޔާ ދުޢާ (4)"
    },
    "arabic": "اللَّهُمَّ بِعِلْمِكَ الغَيْبَ وَقُدْرَتِكَ عَلَى الْخَلقِ أَحْيِنِي مَا عَلِمْتَ الْحَيَاةَ خَيْراً لِي، وَتَوَفَّنِي إِذَا عَلِمْتَ الْوَفَاةَ خَيْراً لِي، اللَّهُمَّ إِنِّي أَسْأَلُكَ خَشْيَتَكَ فِي الْغَيْبِ وَالشَّهَادَةِ، وَأَسْأَلُكَ كَلِمَةَ الْحَقِّ فِي الرِّضَا وَالْغَضَبِ، وَأَسْأَلُكَ الْقَصْدَ فِي الْغِنَى وَالْفَقْرِ، وَأَسْأَلُكَ نَعِيماً لاَ يَنْفَدُ، وَأَسْأَلُكَ قُرَّةَ عَيْنٍ لاَ تَنْقَطِعُ، وَأَسْأَلُكَ الرِّضَا بَعْدَ الْقَضَاءِ، وَأَسْأَلُكَ بَرْدَ الْعَيْشِ بَعْدَ الْمَوْتِ، وَأَسْأَلُكَ لَذَّةَ النَّظَرِ إِلَى وَجْهِكَ، وَالشَّوْقَ إِلَى لِقائِكَ فِي غَيرِ ضَرَّاءَ مُضِرَّةٍ، وَلاَ فِتْنَةٍ مُضِلَّةٍ، اللَّهُمَّ زَيِّنَا بِزِينَةِ الإِيمَانِ، وَاجْعَلْنَا هُدَاةً مُهْتَدِينَ",
    "translation": {
      "en": "O Allah, by Your knowledge of the unseen and Your power over creation, give me life while You know life is good for me, and take my life while You know death is good for me. O Allah, I ask You for the fear of You in private and in public, the word of truth in contentment and anger, moderation in poverty and in richness. I ask You for a joy that never ends, and the comfort of an eye that never ceases. I ask You for contentment with Your decree, and a pleasant life after death. I ask You for the sweetness of looking upon Your Face, and the longing to meet You, without harmful adversity or misguiding trial. O Allah, adorn us with the beauty of faith, and make us guides who are rightly guided.",
      "dv": "އޭ ﷲ! އިބަރަސްކަލާނގެ ޣައިބުގެ ޢިލްމުފުޅާއި، ހުރިހާ ޚަލްޤުތަކުގެ މައްޗަށްވާ ކުޅަދުންވަންތަކަމުން، ދިރިހުރުން މިއަޅާއަށް ހެޔޮވެގެންވާކަން އެނގިވޮޑިގަންނަވާ ހިނދު، މިއަޅާ ދިރިހުއްޓަވާނދޭވެ! އަދި މަރުވުން މިއަޅާއަށް ހެޔޮވެގެންވާކަން އެނގިވޮޑިގަންނަވާ ހިނދު، މިއަޅާގެ ފުރާނަ ގެންދަވާނދޭވެ! އޭ ﷲ! ސިއްރާއި ފާޅުގައި އިބަރަސްކަލާނގެއަށް ބިރުވެތިވުމަށާއި، ރުހުމުގައާއި ކޯފާގައި ޙައްޤު ބަސް ބުނުމަށާއި، ފަގީރުކަމުގައާއި މުއްސަނދިކަމުގައި މެދުމިނުގައި ދެމިހުރުމަށް މިއަޅާ އެދެމެވެ. ހުސްނުވާ އުފަލަކަށާއި، ކެނޑިނޭޅޭ ލޮލުގެ ފިނިކަމަކަށް މިއަޅާ އެދެމެވެ. ތަޤްދީރަށް ރުހުމަށާއި، މަރުވުމަށްފަހު އުފާވެރި ދިރިއުޅުމަކަށް މިއަޅާ އެދެމެވެ. އިބަރަސްކަލާނގެ ވަޖުހުފުޅު ދެކުމުގެ ފޮނިކަމަށާއި، ގެއްލުންދެނިވި ދަތިކަމެއް ނުވަތަ މަގުފުރައްދާ ފިތުނައެއް ނެތި، އިބަރަސްކަލާނގެއާ ބައްދަލުވުމަށް ޝައުޤުވެރިވުމަށް މިއަޅާ އެދެމެވެ. އޭ ﷲ! އީމާންކަމުގެ ޒީނަތުން އަޅަމެން ޒީނަތްތެރި ކުރައްވާނދޭވެ! އަދި ތެދުމަގު ލިބިގެންވާ، ތެދުމަގު ދައްކާ ބަޔަކު ކަމުގައި އަޅަމެން ލައްވާނދޭވެ!"
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 62"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"Invocations after the final Tash-ahhud and before ending the prayer\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-63",
    "type": "dua",
    "categoryId": "salah",
    "title": {
      "en": "Dua before Salam",
      "dv": "ނަމާދުގައި ސަލާމް ދިނުމުގެ ކުރިން ކިޔާ ދުޢާ"
    },
    "arabic": "اَللَّهُمَّ إِنِّي أَسْأَلُكَ يَا اللَّهُ بِأَنَّكَ الْوَاحِدُ الْأَحَدُ الصَّمَدُ الَّذِي لَمْ يَلِدْ وَلَمْ يُولَدْ وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ أَنْ تَغْفِرَ لِي ذُنُوبِي إِنَّكَ أَنْتَ الْغَفُورُ الرَّحِيمُ",
    "transliteration": "Allaahumma inni as'aluka ya Allahu bi annakal Wahidul-Ahad us-Samadulla-dhi lam yalid wa lam yowlad, wa lam yakun lahu kufuwan ahad, an taghfirali dhunubi, innaka antal-Ghafurur-Rahim",
    "translation": {
      "en": "O Allah, I ask of You, O Allah, as You are the One, the Only, the Self-Sufficient Master, Who begets not nor was He begotten, and there is None equal or comparable to Him, forgive me my sins, for You are the Oft-Forgiving, Most Merciful.\n\nThe Messenger of Allah (ﷺ) said: \"He has been forgiven,\" three times.",
      "dv": "އޭ ﷲ! ހަމަކަށަވަރުން މިއަޅާ އިބަ ރަސްކަލާނގެ ޙަޟްރަތުން އެދެމެވެ. އޭ ﷲ! ހަމަކަށަވަރުން އިބަ ރަސްކަލާނގެއީ އެއްކައުވަންތަ، އެއްފަދަވެގެންނުވާ، އެންމެހާ ތަކެތި އެކލާނގެއަށް ބޭނުންތެރިވެގެންވާ، ރަސްކަލާނގެއެވެ. އެކަލާނގެއަށް ދަރިކަލަކު ލިބިވޮޑިގެންނުވެއެވެ. އަދި އެކަލާނގެ އުފެދިވޮޑިގެންނުވެއެވެ. އަދި އެކަލާނގެއާ އެއްފަދަވެގެންވާ ހަމައެކަކުވެސް ނުވެއެވެ. (މި ނަންފުޅުތައް މެދުވެރިކޮށް ދަންނަވަމެވެ.) މިއަޅާގެ ފާފަތައް ފުއްސަވާނދޭވެ! ހަމަކަށަވަރުން އިބަރަސްކަލާނގެއީ ގިނަގިނައިން ފާފަ ފުއްސަވާ، ރަޙީމްވަންތަ ރަސްކަލާނގެއެވެ.\n\nރަސޫލާ (ﷺ) ޙަދީޘްކުރެއްވިއެވެ: \"ހަމަކަށަވަރުން އޭނާގެ ފާފަ ފުއްސަވައިފިއެވެ.\" (މިހެން ތިންފަހަރު ޙަދީޘްކުރެއްވިއެވެ.)"
    },
    "source": {
      "type": "hadith",
      "reference": "Sahih (Albani). Nasai: 1301"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Content reused verbatim from this app's existing verified dataset (original id: masnun-55), cross-referenced here under its Hisn al-Muslim chapter/number. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-64",
    "type": "dua",
    "categoryId": "salah",
    "title": {
      "en": "Dua Before Ending the Prayer (5)",
      "dv": "ނަމާދު ނިމުމުގެ ކުރިން ކިޔާ ދުޢާ (5)"
    },
    "arabic": "اللَّهُمَّ إِنِّي أَسْأَلُكَ بِأَنَّ لَكَ الْحَمْدَ لَا إِلَهَ إِلاَّ أَنْتَ وَحْدَكَ لاَ شَرِيكَ لَكَ، الْمَنَّانُ، يَا بَدِيعَ السَّمَوَاتِ وَالْأَرْضِ يَا ذَا الْجَلاَلِ وَالْإِكْرَامِ، يَا حَيُّ يَا قَيُّومُ إِنِّي أَسْأَلُكَ الْجَنَّةَ وَأَعُوذُ بِكَ مِنَ النَّارِ",
    "translation": {
      "en": "O Allah, I ask You - for praise belongs to You, there is no god but You alone, You have no partner, the Ever-Bestower of favours, O Originator of the heavens and the earth, O Possessor of Majesty and Honour, O Ever-Living, O Sustainer - I ask You for Paradise, and I seek refuge in You from the Fire.",
      "dv": "އޭ ﷲ! ހަމަދު ލިބިވޮޑިގަންނަވަނީ އިބަރަސްކަލާނގެއަށެވެ. އިބަރަސްކަލާނގެ މެނުވީ ޙައްޤުވެގެން އަޅުކަން ވެވޭ އިލާހަކު ނުވެއެވެ. ބައިވެރިއަކު ނުވެއެވެ. ނިޢުމަތްތައް ދެއްވާ ފަރާތެވެ. އޭ އުޑުތަކާއި ބިން އުފައްދަވާ ރަސްކަލާކޮ! އޭ ޖަލާލަތާއި ޢިއްޒަތުގެ ވެރި ރަސްކަލާކޮ! އޭ ދިރިދެމިވޮޑިގެންވާ، ދަމަހައްޓަވާ ރަސްކަލާކޮ! ސުވަރުގެއަށް އެދި، ނަރަކައިން ރައްކާތެރިކަމަށް އެދި، އިބަރަސްކަލާނގެ ޙަޟްރަތުން ދަންނަވަމެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 64"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"Invocations after the final Tash-ahhud and before ending the prayer\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-65",
    "type": "dua",
    "categoryId": "salah",
    "title": {
      "en": "Dua after Tashahhud (Dua Before Salam)",
      "dv": "ތަޝައްހުދަށްފަހު ކިޔާ ދުޢާ (ސަލާމް ދިނުމުގެ ކުރިން)"
    },
    "arabic": "اَللَّهُمَّ إِنِّي أَسْأَلُكَ بِأَنِّي أَشْهَدُ أَنَّكَ اَنْتَ اللَّهُ لَا إِلَهَ إِلَّا أَنْتَ الْأَحَدُ الصَّمَدُ الَّذِيْ لَمْ يَلِدْ وَلَمْ يُوْلَدْ وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ",
    "transliteration": "Allaahumma 'innee 'as'aluka bi 'anni 'ash-hadu 'annaka 'AntAllahu laa 'ilaaha 'illaa 'Antal-'Ahadus-Samadul-ladhee lam yalid wa lam yoolad wa lam yakun lahu kufuwan 'Ahad",
    "translation": {
      "en": "O Allah, I ask You, by the fact that I bear witness that You are Allah. There is none worthy of worship but You, the Only God, Independent of creation, who was not begotten and begets not, and none is equal to Him.\n\nThe Prophet (ﷺ) said: 'By the One in Whose Hand is my soul, he called upon Allah by His greatest Name, which, if He is called by it, He responds, and if He is asked by it, He gives.'",
      "dv": "އޭ ﷲ! ހަމަކަށަވަރުން މިއަޅާ އިބަރަސްކަލާނގެ ޙަޟްރަތުން އެދެމެވެ. އެއީ ހަމަކަށަވަރުން އިބަރަސްކަލާނގެއީ ﷲ ކަމަށް މިއަޅާ ހެކިވަމެވެ. އިބަރަސްކަލާނގެ މެނުވީ ޙައްޤުވެގެން އަޅުކަމެއް ވެވޭ އިލާހަކު ނުވެއެވެ. އިބަރަސްކަލާނގެއީ އެއްކައުވަންތަ، އެންމެހާ ތަކެތި އެކަލާނގެއަށް ބޭނުންތެރިވެގެންވާ ރަސްކަލާނގެއެވެ. އެކަލާނގެއަށް ދަރިކަލަކު ލިބިވޮޑިގެންނުވެއެވެ. އަދި އެކަލާނގެ އުފެދިވޮޑިގެންނުވެއެވެ. އަދި އެކަލާނގެއާ އެއްފަދަވެގެންވާ ހަމައެކަކުވެސް ނުވެއެވެ.\n\nރަސޫލާ (ﷺ) ޙަދީޘްކުރެއްވިއެވެ: \"ތިމަންކަލޭގެފާނުގެ ފުރާނަފުޅު އެފަރާތެއްގެ އަތްޕުޅުގައިވާ ފަރާތް ގަންދީ ވިދާޅުވަމެވެ. ހަމަކަށަވަރުން އޭނާ ﷲ ގެ ޙަޟްރަތުގައި ދުޢާ އެކުރީ އެކަލާނގެ އެންމެ މަތިވެރި އިސްމުފުޅުންނެވެ. އެ އިސްމުފުޅުން ދުޢާކޮށްފިނަމަ އިޖާބަކުރައްވައެވެ. އަދި އެ އިސްމުފުޅުން ކަމަކަށް އެދިއްޖެނަމަ އެކަމެއް ދެއްވައެވެ.\""
    },
    "source": {
      "type": "hadith",
      "reference": "Sahih (Albani). Abu Dawud: 1493"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Content reused verbatim from this app's existing verified dataset (original id: masnun-57), cross-referenced here under its Hisn al-Muslim chapter/number. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-66",
    "type": "zikr",
    "categoryId": "salah",
    "title": {
      "en": "Dua After Completing the Prayer (1)",
      "dv": "ނަމާދު ނިމުމުން ކިޔާ ދުޢާ (1)"
    },
    "arabic": "أَسْتَغْفِرُ اللَّهَ (ثَلاَثَاً) اللَّهُمَّ أَنْتَ السَّلاَمُ، وَمِنْكَ السَّلاَمُ، تَبَارَكْتَ يَا ذَا الْجَلاَلِ وَالْإِكْرَامِ",
    "translation": {
      "en": "I seek Allah's forgiveness (three times). O Allah, You are Peace, and from You comes peace. Blessed are You, O Possessor of Majesty and Honour.",
      "dv": "ﷲ ގެ ޙަޟްރަތުން ފުއްސެވުމަށް އެދެމެވެ (3 ފަހަރު). އޭ ﷲ! އިބަރަސްކަލާނގެއީ ސަލާމަތްތެރިކަމުގެ ވެރި ރަސްކަލާނގެއެވެ. ސަލާމަތްތެރިކަން ވަނީ އިބަރަސްކަލާނގެ ޙަޟްރަތުންނެވެ. އޭ ޖަލާލަތާއި ޢިއްޒަތުގެ ވެރި ރަސްކަލާކޮ! އިބަރަސްކަލާނގެ ބަރަކާތްތެރިވެވޮޑިގެންފިއެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 66"
    },
    "repetitions": 3,
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"What to say after completing the prayer\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-67",
    "type": "zikr",
    "categoryId": "salah",
    "title": {
      "en": "Dua After Completing the Prayer (2)",
      "dv": "ނަމާދު ނިމުމުން ކިޔާ ދުޢާ (2)"
    },
    "arabic": "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، اللَّهُمَّ لَا مَانِعَ لِمَا أَعْطَيْتَ، وَلَا مُعْطِيَ لِمَا مَنَعْتَ، وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ",
    "translation": {
      "en": "There is no god but Allah alone, He has no partner; His is the dominion, His is the praise, and He is capable of all things (said three times). O Allah, none can withhold what You give, none can give what You withhold, and no wealth or majesty can benefit anyone against You.",
      "dv": "ﷲ މެނުވީ ޙައްޤުވެގެން އަޅުކަން ވެވޭ އިލާހަކު ނުވެއެވެ. އެކަލާނގެއަށް ބައިވެރިއަކު ނުވެއެވެ. ވެރިކަންވަނީ އެކަލާނގެއަށެވެ. ޙަމްދު ހުއްޓީ އެކަލާނގެއަށެވެ. އަދި އެކަލާނގެއީ ކޮންމެ ކަމެއްގެ މައްޗަށް ކުޅަދުންވަންތަ ރަސްކަލާނގެއެވެ (3 ފަހަރު). އޭ ﷲ! އިބަރަސްކަލާނގެ ދެއްވި އެއްޗެއް ހިފެހެއްޓޭނެ ފަރާތެއް ނުވެއެވެ. އަދި ހިފެހެއްޓެވި އެއްޗެއް ދެވޭނެ ފަރާތެއް ނުވެއެވެ. އަދި ބާރުވެރިޔެއްގެ ބާރުވެރިކަމަކުން، އިބަރަސްކަލާނގެ ޙަޟްރަތުގައި މަންފާއެއް ނުކުރާނެއެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 67"
    },
    "repetitions": 3,
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"What to say after completing the prayer\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-68",
    "type": "dua",
    "categoryId": "salah",
    "title": {
      "en": "Dua After Completing the Prayer (3)",
      "dv": "ނަމާދު ނިމުމުން ކިޔާ ދުޢާ (3)"
    },
    "arabic": "لَا إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ، وَلَهُ الْحَمدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ. لاَ حَوْلَ وَلاَ قُوَّةَ إِلاَّ بِاللَّهِ، لاَ إِلَهَ إِلاَّ اللَّهُ، وَلاَ نَعْبُدُ إِلاَّ إِيَّاهُ, لَهُ النِّعْمَةُ وَلَهُ الْفَضْلُ وَلَهُ الثَّنَاءُ الْحَسَنُ، لَا إِلَهَ إِلاَّ اللَّهُ مُخْلِصِينَ لَهُ الدِّينَ وَلَوْ كَرِهَ الكَافِرُونَ",
    "translation": {
      "en": "There is no god but Allah alone, He has no partner; His is the dominion, His is the praise, and He is capable of all things. There is no might nor power except by Allah. There is no god but Allah, and we worship none but Him. His is the favour, His is the grace, and His is the excellent praise. There is no god but Allah, sincere in devotion to Him, even though the disbelievers dislike it.",
      "dv": "ﷲ މެނުވީ ޙައްޤުވެގެން އަޅުކަން ވެވޭ އިލާހަކު ނުވެއެވެ. އެކަލާނގެއަށް ބައިވެރިއަކު ނުވެއެވެ. ވެރިކަންވަނީ އެކަލާނގެއަށެވެ. ޙަމްދު ހުއްޓީ އެކަލާނގެއަށެވެ. އެކަލާނގެއީ ކޮންމެ ކަމެއްގެ މައްޗަށް ކުޅަދުންވަންތަ ރަސްކަލާނގެއެވެ. ބާރެއް ލިބުމާއި ކުޅަދާނަކަމެއް ލިބުމަކީ ހަމައެކަނި ﷲ ގެ ވާގިފުޅާއެކު ވާކަމެކެވެ. ﷲ މެނުވީ ޙައްޤުވެގެން އަޅުކަން ވެވޭ އިލާހަކު ނުވެއެވެ. އަދި އަޅަމެން އަޅުކަންކުރަނީ ހަމައެކަނި އެކަލާނގެއަށެވެ. ނިޢުމަތްވަނީ އެކަލާނގެއަށެވެ. ފަޟްލުވަންތަކަންވެސް އެކަލާނގެއަށެވެ. ރިވެތި ޘަނާވެސް ހުއްޓީ އެކަލާނގެއަށެވެ. ﷲ މެނުވީ ޙައްޤުވެގެން އަޅުކަން ވެވޭ އިލާހަކު ނުވެއެވެ. ކާފަރުން ނުރުހުނު ކަމުގައިވިޔަސް، ދީން އެކަލާނގެއަށް ޚާލިޞްކުރާ ޙާލުގައެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 68"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"What to say after completing the prayer\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-69",
    "type": "zikr",
    "categoryId": "salah",
    "title": {
      "en": "Tasbih After the Prayer",
      "dv": "ނަމާދަށްފަހު ކިޔާ ތަސްބީޙަ"
    },
    "arabic": "سُبْحَانَ اللَّهِ | الْحَمْدُ لِلَّهِ | اللَّهُ أَكْبَرُ | لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
    "translation": {
      "en": "Glory be to Allah. Praise be to Allah. Allah is greatest. There is no god but Allah alone, He has no partner; His is the dominion, His is the praise, and He is capable of all things.",
      "dv": "ﷲ ހުސްޠާހިރުވަންތަކަމަށް ތަސްބީޙަކިޔަމެވެ. ޙަމްދު ހުއްޓީ ﷲ އަށެވެ. ﷲ އީ އެންމެ ބޮޑު ރަސްކަލާނގެއެވެ. ﷲ މެނުވީ ޙައްޤުވެގެން އަޅުކަން ވެވޭ އިލާހަކު ނުވެއެވެ. އެކަލާނގެއަށް ބައިވެރިއަކު ނުވެއެވެ. ވެރިކަންވަނީ އެކަލާނގެއަށެވެ. ޙަމްދު ހުއްޓީ އެކަލާނގެއަށެވެ. އަދި އެކަލާނގެއީ ކޮންމެ ކަމެއްގެ މައްޗަށް ކުޅަދުންވަންތަ ރަސްކަލާނގެއެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 69"
    },
    "segments": [
      {
        "arabic": "سُبْحَانَ اللَّهِ",
        "translation": {
          "en": "Glory be to Allah.",
          "dv": "ﷲ ހުސްޠާހިރުވަންތަކަމަށް ތަސްބީޙަކިޔަމެވެ."
        },
        "repetitions": 33
      },
      {
        "arabic": "الْحَمْدُ لِلَّهِ",
        "translation": {
          "en": "Praise be to Allah.",
          "dv": "ޙަމްދު ހުއްޓީ ﷲ އަށެވެ."
        },
        "repetitions": 33
      },
      {
        "arabic": "اللَّهُ أَكْبَرُ",
        "translation": {
          "en": "Allah is greatest.",
          "dv": "ﷲ އީ އެންމެ ބޮޑު ރަސްކަލާނގެއެވެ."
        },
        "repetitions": 33
      },
      {
        "arabic": "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
        "translation": {
          "en": "There is no god but Allah alone, He has no partner; His is the dominion, His is the praise, and He is capable of all things.",
          "dv": "ﷲ މެނުވީ ޙައްޤުވެގެން އަޅުކަން ވެވޭ އިލާހަކު ނުވެއެވެ. އެކަލާނގެއަށް ބައިވެރިއަކު ނުވެއެވެ. ވެރިކަންވަނީ އެކަލާނގެއަށެވެ. ޙަމްދު ހުއްޓީ އެކަލާނގެއަށެވެ. އަދި އެކަލާނގެއީ ކޮންމެ ކަމެއްގެ މައްޗަށް ކުޅަދުންވަންތަ ރަސްކަލާނގެއެވެ."
        },
        "repetitions": 1
      }
    ],
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"What to say after completing the prayer\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-70",
    "type": "dua",
    "categoryId": "salah",
    "title": {
      "en": "The Three Quls After the Prayer",
      "dv": "ނަމާދަށްފަހު 3 ޤުލް ސޫރަތް ކިޔެވުން"
    },
    "arabic": "بسم الله الرحمن الرحيم ﴿قُلْ هُوَ اللَّهُ أَحَدٌ* اللَّهُ الصَّمَدُ* لَمْ يَلِدْ وَلَمْ يُولَدْ* وَلَمْ يَكُن لَّهُ كُفُواً أَحَدٌ﴾، بسم الله الرحمن الرحيم ﴿قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ* مِن شَرِّ مَا خَلَقَ* وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ* وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ* وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ﴾،بسم الله الرحمن الرحيم ﴿قُلْ أَعُوذُ بِرَبِّ النَّاسِ* مَلِكِ النَّاسِ* إِلَهِ النَّاسِ* مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ* الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ* مِنَ الْجِنَّةِ وَ النَّاسِ﴾ بَعْدَ كُلِّ صَلاَةٍ",
    "translation": {
      "en": "Recite Surah Al-Ikhlas, Surah Al-Falaq, and Surah An-Nas after every prayer.",
      "dv": "ކޮންމެ ނަމާދަކަށްފަހު ސޫރަތުލް އިޚްލާޞްއާއި، ސޫރަތުލް ފަލަޤާއި، ސޫރަތުއްނާސް ކިޔަވާށެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 70"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"What to say after completing the prayer\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-71",
    "type": "dua",
    "categoryId": "salah",
    "title": {
      "en": "Ayat al-Kursi After the Prayer",
      "dv": "ނަމާދަށްފަހު އާޔަތުލް ކުރުސި ކިޔެވުން"
    },
    "arabic": "﴿اللَّهُ لاَ إِلَهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ﴾ عَقِبَ كلِّ صَلاَةٍ",
    "translation": {
      "en": "Recite Ayat al-Kursi (Surah Al-Baqarah, 2:255) after every prayer.",
      "dv": "ކޮންމެ ނަމާދަކަށްފަހު އާޔަތުލް ކުރުސި (ސޫރަތުލް ބަޤަރާ 2:255) ކިޔަވާށެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 71"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"What to say after completing the prayer\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-72",
    "type": "dua",
    "categoryId": "salah",
    "title": {
      "en": "Dua After Fajr and Maghrib",
      "dv": "ފަތިސް ނަމާދާއި މަޣްރިބު ނަމާދަށްފަހު ކިޔާ ދުޢާ"
    },
    "arabic": "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ يُحْيِي وَيُمِيتُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
    "translation": {
      "en": "There is no god but Allah alone, He has no partner; His is the dominion, His is the praise; He gives life and causes death, and He is capable of all things (said ten times after the Fajr and Maghrib prayers).",
      "dv": "ﷲ މެނުވީ ޙައްޤުވެގެން އަޅުކަން ވެވޭ އިލާހަކު ނުވެއެވެ. އެކަލާނގެއަށް ބައިވެރިއަކު ނުވެއެވެ. ވެރިކަންވަނީ އެކަލާނގެއަށެވެ. ޙަމްދު ހުއްޓީ އެކަލާނގެއަށެވެ. ދިރުއްވަނީވެސް، މަރުގަންނަވަނީވެސް އެކަލާނގެއެވެ. އަދި އެކަލާނގެއީ ކޮންމެ ކަމެއްގެ މައްޗަށް ކުޅަދުންވަންތަ ރަސްކަލާނގެއެވެ (ފަތިސް ނަމާދާއި މަޣްރިބު ނަމާދަށްފަހު 10 ފަހަރު)."
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 72"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"What to say after completing the prayer\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-73",
    "type": "dua",
    "categoryId": "salah",
    "title": {
      "en": "Dua After the Fajr Prayer",
      "dv": "ފަތިސް ނަމާދަށްފަހު ކިޔާ ދުޢާ"
    },
    "arabic": "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا",
    "translation": {
      "en": "O Allah, I ask You for beneficial knowledge, good provision, and acceptable deeds.",
      "dv": "އޭ ﷲ! މަންފާކުރަނިވި ޢިލްމަކަށާއި، ރަނގަޅު ރިޒުޤަކަށާއި، ޤަބޫލުކުރެއްވޭ ޢަމަލަކަށް މިއަޅާ އެދެމެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 73"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"What to say after completing the prayer\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-74",
    "type": "dua",
    "categoryId": "salah",
    "title": {
      "en": "Dua of Istikharah (Seeking Allah's Guidance)",
      "dv": "استخارة ގެ ދުޢާ"
    },
    "arabic": "اللَّهُمَّ إِنِّي أَسْتَخِيرُكَ بِعِلْمِكَ، وَأَسْتَقْدِرُكَ بِقُدْرَتِكَ، وَأَسْأَلُكَ مِنْ فَضْلِكَ الْعَظِيمِ، فَإِنَّكَ تَقْدِرُ وَلَا أَقْدِرُ، وَتَعْلَمُ وَلَا أَعْلَمُ، وَأَنْتَ عَلَّامُ الْغُيُوبِ، اللَّهُمَّ إِنْ كُنْتَ تَعْلَمُ أَنَّ هَذَا الْأَمْرَ خَيْرٌ لِي فِي دِينِي وَمَعَاشِي وَعَاقِبَةِ أَمْرِي، فَاقْدُرْهُ لِي وَيَسِّرْهُ لِي ثُمَّ بَارِكْ لِي فِيهِ، وَإِنْ كُنْتَ تَعْلَمُ أَنَّ هَذَا الْأَمْرَ شَرٌّ لِي فِي دِينِي وَمَعَاشِي وَعَاقِبَةِ أَمْرِي، فَاصْرِفْهُ عَنِّي وَاصْرِفْنِي عَنْهُ، وَاقْدُرْ لِيَ الْخَيْرَ حَيْثُ كَانَ، ثُمَّ أَرْضِنِي بِهِ",
    "translation": {
      "en": "O Allah, I seek Your guidance through Your knowledge, and I seek ability through Your power, and I ask You of Your great bounty. You have power and I have none, and You know and I do not, and You are the Knower of the unseen. O Allah, if You know this matter to be good for me in my religion, my livelihood, and the outcome of my affairs, then decree it for me, make it easy for me, and bless it for me. And if You know this matter to be bad for me in my religion, my livelihood, and the outcome of my affairs, then turn it away from me and turn me away from it, and decree for me what is good wherever it may be, and make me content with it.",
      "dv": "އޭ ﷲ! އިބަރަސްކަލާނގެ ޢިލްމުފުޅުން، މިއަޅާ އިސްތިޚާރާކުރަމެވެ. އަދި، އިބަރަސްކަލާނގެ ކުޅަދުންވަންތަކަމުން، ކުޅަދާނަކަން ލިބިގަންނަމެވެ. އަދި، އިބަރަސްކަލާނގެ މަތިވެރި ފަޟްލުވަންތަކަމުން، މިއަޅާ އެދެމެވެ. ފަހެ، ހަމަކަށަވަރުން، އިބަރަސްކަލާނގެއަށް ކުޅަދާނަވެގެންވެއެވެ. މިއަޅާއަށް ކުޅަދާނަވެގެން ނުވެއެވެ. އަދި، އިބަރަސްކަލާނގެ ދެނެވޮޑިގެންވެއެވެ. މިއަޅާ ދެނެގަނެއެއް ނުވެއެވެ. އަދި، އިބަރަސްކަލާނގެއީ، ޣައިބުގެ ކަންތައް މޮޅަށް ދެނެވޮޑިގެންވާ ރަސްކަލާނގެއެވެ. އޭ ﷲ! މި ކަންތައް، މިއަޅާގެ ދީނަށާއި، ދިރިއުޅުމަށާއި، ކަންތަކުގެ ނަތީޖާއަށް ހެޔޮވެގެންވާކަން، އިބަރަސްކަލާނގެ ދެނެވޮޑިގެންވާނަމަ، މިއަޅާއަށްޓަކައި އެކަން މިންވަރުކުރައްވައި، ފަސޭހަކޮށްދެއްވައި، ދެން، މީގައި ބަރަކާތްލައްވާނދޭވެ! އަދި، މި ކަންތައް، މިއަޅާގެ ދީނަށާއި، ދިރިއުޅުމަށާއި، ކަންތަކުގެ ނަތީޖާއަށް ނުބައިވެގެންވާކަން، އިބަރަސްކަލާނގެ ދެނެވޮޑިގެންވާނަމަ، މިއަޅާގެ ކިބައިން އެކަން ދުރުކުރައްވައި، އެކަމުގެ ކިބައިން މިއަޅާ ދުރުކުރައްވައި، ކޮންމެ ތާކުވިޔަސް، ހެޔޮގޮތް މިއަޅާއަށްޓަކައި މިންވަރުކުރައްވައި، ދެން، އެއަށް މިއަޅާ ރުހިގަންނަނިވި ކުރައްވާނދޭވެ!"
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 74"
    },
    "benefits": {
      "en": "The Prophet (peace be upon him) taught this to his companions for every matter, just as he taught them a surah of the Quran - naming one's actual need in place of \"this matter\" - preceded by two rak'ahs of voluntary prayer. No one who seeks Allah's guidance and consults fellow believers ever regrets the outcome.",
      "dv": "ނަބިއްޔާ (ﷺ) އެކަލޭގެފާނުގެ صحابة ބޭކަލުންނަށް، ކޮންމެ ކަމެއްގައިވެސް، ޤުރްއާނުގެ ސޫރަތެއް އުނގަންނަވައިދެއްވާ ފަދައިން، މި ދުޢާ އުނގަންނަވައިދެއްވިއެވެ. \"މި ކަންތައް\" ބަދަލުގައި، އަމިއްލަ ބޭނުންވާ ކަންތައް ބުނާށެވެ. ދުޢާގެ ކުރިން، ފަރުޟުނޫން 2 ركعة ނަމާދުކުރާށެވެ. ﷲ ގެ ޙަޟްރަތުން استخارة ކޮށް، مؤمين ންނާ މަޝްވަރާކުރި މީހަކު، ދުވަހަކުވެސް ދެރަނުވާނެއެވެ."
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"Istikharah (seeking Allah's Counsel)\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  }
];
