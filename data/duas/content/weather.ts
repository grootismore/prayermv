import type { Dua } from '../../../types/dua';

// Sourced from the Hisn al-Muslim dataset (Hisn-Muslim-Json,
// github.com/wafaaelmaandy/Hisn-Muslim-Json) - see
// data/duas/CONTENT_REVIEW.md for the sourcing/translation methodology
// and the human-review requirement that still applies to every item here.
export const WEATHER_DUAS: Dua[] = [
  {
    "id": "hisn-166",
    "type": "dua",
    "categoryId": "weather",
    "title": {
      "en": "Dua for When the Wind Blows",
      "dv": "ވައިޖެހުމުން ކިޔާ ދުޢާ"
    },
    "arabic": "اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَهَا، وَأَعُوذُ بِكَ مِنْ شَرِّهَا",
    "translation": {
      "en": "O Allah, I ask You for its good, and I seek refuge in You from its evil.",
      "dv": "އޭ ﷲ! މީގެ ހެޔޮކަމަށް އިބަރަސްކަލާނގެ ޙަޟްރަތުން މިއަޅާ އެދެމެވެ. އަދި، މީގެ ނުބައިކަމުން، އިބަރަސްކަލާނގެ ޙަޟްރަތުން ރައްކާތެރިކަން ލިބިގަންނަމެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 166"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"Invocations for when the wind blows\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-167",
    "type": "dua",
    "categoryId": "weather",
    "title": {
      "en": "Dua for Winds and Storms",
      "dv": "ވައި ގަދަވުމުން ކިޔާ ދުޢާ"
    },
    "arabic": "اَللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَهَا، وَخَيْرَ مَا فِيهَا، وَخَيْرَ مَا أُرْسِلَتْ بِهِ وَأَعُوْذُ بِكَ مِنْ شَرِّهَا، وَشَرِّ مَا فِيهَا، وَشَرِّ مَا أُرْسِلَتْ بِهِ",
    "transliteration": "Allaahumma 'innee 'as'aluka khayrahaa, wa khayra maa feehaa, wa khayra maa 'ursilat bihi wa A'oodhu bika min sharrihaa, wa sharri maa feehaa, wa sharri maa 'ursilat bihi",
    "translation": {
      "en": "O Allah, I ask You for the good of it, for the good of what it contains, and for the good of what is sent with it. I seek refuge in You from the evil of it, from the evil of what it contains, and from the evil that is sent with it.",
      "dv": "އޭ ﷲ! މިއަޅާ އިބަރަސްކަލާނގެ ޙަޟްރަތުން މީގެ (މި ވައިރޯޅީގެ) ހެޔޮކަމަށާއި، އަދި މީގައިވާ ހެޔޮކަމަށާއި، އަދި މިއާ ފޮނުއްވުނު ކަންތަކުގެ ހެޔޮކަމަށް އެދެމެވެ. އަދި މީގެ ނުބައިކަމުންނާއި، އަދި މީގައިވާ ނުބައިކަމުންނާއި، އަދި މިއާ ފޮނުއްވުނު ކަންތަކުގެ ނުބައިކަމުން އިބަރަސްކަލާނގެ ޙަޟްރަތުން ރައްކާތެރިކަމަށް އެދެމެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Muslim: 899"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Content reused verbatim from this app's existing verified dataset (original id: masnun-517), cross-referenced here under its Hisn al-Muslim chapter/number. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-168",
    "type": "dua",
    "categoryId": "weather",
    "title": {
      "en": "Dua for Thunder and Lightning",
      "dv": "ގުުަގުރީގެ އަޑު އިވުމުން ކިޔާ ދުޢާ"
    },
    "arabic": "سُبْحَانَ الَّذِي يُسَبِّحُ الرَّعْدُ بِحَمْدِهِ وَالْمَلَائِكَةُ مِنْ خِيْفَتِهِ",
    "transliteration": "Subhaanal-lathee yusabbihur-ra'du bihamdihi wal-malaa'ikatu min kheefatihi",
    "translation": {
      "en": "Glory is to Him Whom thunder and angels glorify due to fear of Him.",
      "dv": "އެކަލާނގެ ހުސްޠާހިރުވަންތަކަމާއެވެ! ގުގުރި އެކަލާނގެއަށް ޙަމްދާއެކު ތަސްބީޙަ ކިޔައެވެ. އަދި މަލާއިކަތުން އެކަލާނގެއަށް ބިރުވެތިވުމުގެ ސަބަބުން ތަސްބީޙަ ކިޔައެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Sahih. Adabul Mufrad: 560"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Content reused verbatim from this app's existing verified dataset (original id: masnun-522), cross-referenced here under its Hisn al-Muslim chapter/number. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-169",
    "type": "dua",
    "categoryId": "weather",
    "title": {
      "en": "Salat al-Istisqa (Prayer for Rain)",
      "dv": "ވާރޭ ވެއްސެވުމަށް އެދި ކުރާ ދުޢާ"
    },
    "arabic": "اَللَّهُمَّ اسْقِنَا غَيْثًا مُغِيْثًا مَرِيْئًا مَرِيْعًا نَافِعًا غَيْرَ ضَارٍّ عَاجِلًا غَيْرَ آجِلٍ",
    "transliteration": "Allaahumma 'asqinaa ghaythan mugheethan maree-an maree'an, naafi'an ghayra dhaarrin, 'aajilan ghayra 'aajil",
    "translation": {
      "en": "O Allah, shower upon us abundant rain, beneficial not harmful, swiftly and not delayed.\n\nSoon the sky became overcast.",
      "dv": "އޭ ﷲ! މިއަޅަމެންނަށް އިބަރަސްކަލާނގެ ފޮނުއްވާ (އޭގެ ސަބަބުން ލުއި ލިބިގެންވާ)، އޮއްސިގަނެ (ބިމުގެ ތެތްކަން ހިފަހައްޓާ ފަދަ)، ފަސޭހަވެގެންވާ، ފައިދާހުރި، ގެއްލުމެއް ނުވާ، ލަސްވުމެއް ނެތި އަވަހަށް އަންނަ ވާރެއެއް ވެއްސަވާނދޭވެ!"
    },
    "source": {
      "type": "hadith",
      "reference": "Sahih (Albani). Abu Dawud: 1169"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Content reused verbatim from this app's existing verified dataset (original id: masnun-526), cross-referenced here under its Hisn al-Muslim chapter/number. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-170",
    "type": "dua",
    "categoryId": "weather",
    "title": {
      "en": "Salatul Istisqa Dua",
      "dv": "ވާރޭ ވެހުން އެދި ކުރާ ދުޢާއެއް"
    },
    "arabic": "اَللَّهُمَّ أَغِثْنَا، اَللَّهُمَّ أَغِثْنَا، اَللَّهُمَّ أَغِثْنَا",
    "transliteration": "Allaahumma 'aghithnaa. Allaahumma 'aghithnaa. Allaahumma 'aghithnaa",
    "translation": {
      "en": "O Allah, give us rain. O Allah, give us rain. O Allah, give us rain.\n\nNarrated Anas: A man enters the mosque on Friday. The Messenger of Allah (ﷺ) was then standing and giving a sermon (speech). The man said, “O Messenger of Allah! (Our) wealth has been destroyed, roads have been cut off; Pray to Allah to give us rain. ”Hearing this, the Messenger of Allah (ﷺ) raised his hands and said:(The dua is mentioned above)",
      "dv": "އޭ ﷲ! މިއަޅަމެންނަށް ވާރޭ ވެއްސަވާނދޭވެ! އޭ ﷲ! މިއަޅަމެންނަށް ވާރޭ ވެއްސަވާނދޭވެ! އޭ ﷲ! މިއަޅަމެންނަށް ވާރޭ ވެއްސަވާނދޭވެ!"
    },
    "source": {
      "type": "hadith",
      "reference": "Bukhari: 1014"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Content reused verbatim from this app's existing verified dataset (original id: masnun-527), cross-referenced here under its Hisn al-Muslim chapter/number. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-171",
    "type": "dua",
    "categoryId": "weather",
    "title": {
      "en": "Dua of Rain (Salat al-Istisqa)",
      "dv": "ވާރޭ ފެނަށް އެދި ކުރާ ދުޢާ"
    },
    "arabic": "اَللَّهُمَّ اسْقِ عِبَادَكَ، وَبَهَائِمَكَ، وَانْشُرْ رَحْمَتَكَ، وَأَحْيِي بَلَدَكَ الْمَيِّتَ",
    "transliteration": "Allahum-masqi 'ibaadaka, wa bahaa'imaka, wanshur rahmataka, wa 'ahyi baladakal-mayyita",
    "translation": {
      "en": "O Allah, give water to Your slaves, and Your livestock, and spread Your mercy, and revive Your dead land.",
      "dv": "އޭ ﷲ! އިބަރަސްކަލާނގެ އަޅުތަކުންނަށާއި، ޖަނަވާރުތަކަށް ފެން ދެއްވާނދޭވެ! އަދި އިބަރަސްކަލާނގެ ރަޙްމަތް ފަތުރުއްވާނދޭވެ! އަދި އިބަރަސްކަލާނގެ (މަރުވެފައިވާ) ބިން ދިރުއްވާނދޭވެ!"
    },
    "source": {
      "type": "hadith",
      "reference": "Hasan (Albani). Abu Dawud: 1176"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Content reused verbatim from this app's existing verified dataset (original id: masnun-528), cross-referenced here under its Hisn al-Muslim chapter/number. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-172",
    "type": "dua",
    "categoryId": "weather",
    "title": {
      "en": "Dua for Rain",
      "dv": "ވާރޭ ވެހޭއިރު ކިޔާ ދުޢާ"
    },
    "arabic": "اَللَّهُمَّ صَيِّبًا نَافِعًا",
    "transliteration": "Allaahumma sayyiban naafi'an",
    "translation": {
      "en": "O Allah, (bring) beneficial rain clouds.",
      "dv": "އޭ ﷲ! މިއީ (ވެހޭ) ފައިދާހުރި ވާރެއެއް ކަމުގައި ލައްވާނދޭވެ!"
    },
    "source": {
      "type": "hadith",
      "reference": "Bukhari: 1032"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Content reused verbatim from this app's existing verified dataset (original id: masnun-520), cross-referenced here under its Hisn al-Muslim chapter/number. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-173",
    "type": "dua",
    "categoryId": "weather",
    "title": {
      "en": "Dua for Raining (Thanking Allah)",
      "dv": "ވާރޭ ވެހުމުން ޝުކުރުވެރިވުމުގެ ގޮތުން ކިޔާ ދުޢާ"
    },
    "arabic": "مُطِرْنَا بِفَضْلِ اللَّهِ وَرَحْمَتِهِ",
    "transliteration": "Mutirnaa bifadhlillaahi wa rahmatihi",
    "translation": {
      "en": "It has rained by the bounty of Allah and His mercy.\n\nNarrated Zaid bin Khalid Al-Juhani (RA): The Prophet (ﷺ) led us in the Fajr prayer at Hudaibiya after a rainy night. On completion of the prayer, he faced the people and said, \"Do you know what your Lord has said (revealed)?\" The people replied, \"Allah and His Apostle know better.\" He said, \"Allah has said, 'In this morning some of my slaves remained as true believers and some became non-believers; whoever said that (The dua is mentioned above) had belief in Me and he disbelieves in the stars, and whoever said that it rained because of a particular star had no belief in Me but believes in that star.'",
      "dv": "މިއަޅަމެންނަށް ވާރޭ ވެހުނީ ﷲ ގެ ފަޟްލަވަންތަކަމާއި އެކަލާނގެ ރަޙްމަތުންނެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Bukhari: 846"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Content reused verbatim from this app's existing verified dataset (original id: masnun-530), cross-referenced here under its Hisn al-Muslim chapter/number. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-174",
    "type": "dua",
    "categoryId": "weather",
    "title": {
      "en": "Dua to Stop the Rain",
      "dv": "ވާރޭ ހުއްޓުވުމަށް (ނުވަތަ އެހެން ދިމާއަކަށް ފޮނުއްވުމަށް) އެދި ކުރާ ދުޢާ"
    },
    "arabic": "اَللَّهُمَّ حَوَالَيْنَا وَلَا عَلَيْنَا، اَللَّهُمَّ عَلَى الْآكَامِ وَالظِّرَابِ، وَبُطُونِ الْأَوْدِيَةِ، وَمَنَابِتِ الشَّجَرِ",
    "transliteration": "Allaahumma hawaalaynaa wa laa 'alaynaa. Allaahumma 'alal-'aakaami wadh-dhiraabi, wa butoonil-'awdiyati, wa manaabitish-shajar",
    "translation": {
      "en": "O Allah, let it pass us and not fall upon us, but upon the hills and mountains, and the center of the valleys, and upon the forested lands.",
      "dv": "އޭ ﷲ! މިއަޅަމެންގެ ވަށައިގެން (ވާރޭ) ވެހޭނެ ގޮތް މިންވަރުކުރައްވާނދޭވެ! އަދި މިއަޅަމެންގެ މައްޗަށް (ގެއްލުންވާ ގޮތަށް) ނުލައްވާނދޭވެ! އޭ ﷲ! ފަރުބަދަތަކުގެ މައްޗަށާއި، އުސް ބިންތަކަށާއި، ވާދީތަކުގެ އަޑިއަށާއި، ގަސްގަހާގެހި ފަޅާތަންތަނަށް (ވާރޭ ވެއްސަވާނދޭވެ!)"
    },
    "source": {
      "type": "hadith",
      "reference": "Hasan (Albani). Abu Dawud: 1/218"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Content reused verbatim from this app's existing verified dataset (original id: masnun-529), cross-referenced here under its Hisn al-Muslim chapter/number. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-175",
    "type": "dua",
    "categoryId": "weather",
    "title": {
      "en": "Dua for Sighting the New Moon",
      "dv": "އަލަށް ފެންނަ ހަނދު ފެނުމުން ކިޔާ ދުޢާ"
    },
    "arabic": "اللَّهُ أَكْبَرُ، اللَّهُمَّ أَهِلَّهُ عَلَيْنَا بِالْأَمْنِ وَالْإِيمَانِ، وَالسَّلاَمَةِ وَالْإِسْلاَمِ، وَالتَّوْفِيقِ لِمَا تُحِبُّ رَبَّنَا وَتَرْضَى، رَبُّنَا وَرَبُّكَ اللَّهُ",
    "translation": {
      "en": "Allah is greatest. O Allah, bring this crescent upon us with security and faith, safety and Islam, and success in what our Lord loves and is pleased with. Our Lord and your Lord is Allah.",
      "dv": "ﷲ އީ އެންމެ ބޮޑު ރަސްކަލާނގެއެވެ. އޭ ﷲ! أمن ކަމާއި إيمانއާއެކު، ސަލާމަތްކަމާއި إسلامއާއެކު، އަދި އަޅަމެންގެ ވެރި ރަސްކަލާނގެ ލޯބިވެވޮޑިގެންވާ، ރުހިވަޑައިގަންނަވާ ކަންތަކަށް ތައުފީޤު ދެއްވުމާއެކު، މި ހަނދު އަޅަމެންގެ މައްޗަށް ފާޅުކުރައްވާނދޭވެ! އަޅަމެންގެ ވެރި ރަސްކަލާނގެއާއި ކަލޭގެ ވެރި ރަސްކަލާނގެއަކީ ﷲ އެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 175"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"Invocation for sighting the new moon\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  }
];
