import type { Dua } from '../../../types/dua';

// Sourced from the Hisn al-Muslim dataset (Hisn-Muslim-Json,
// github.com/wafaaelmaandy/Hisn-Muslim-Json) - see
// data/duas/CONTENT_REVIEW.md for the sourcing/translation methodology
// and the human-review requirement that still applies to every item here.
export const DAILY_LIFE_DUAS: Dua[] = [
  {
    "id": "hisn-144",
    "type": "dua",
    "categoryId": "daily-life",
    "title": {
      "en": "Dua for Hardship (Qaddar Allah Dua)",
      "dv": "މުޞީބާތްތަކާ ކުރިމަތިލާއިރު ކިޔާ ދުޢާ (ޤަދަރުﷲ)"
    },
    "arabic": "قَدَّرَ اللَّهُ وَمَا شَاءَ فَعَلَ",
    "transliteration": "Qaddar-Allahu wa maa shaa’a fa‛al",
    "translation": {
      "en": "Allah has decreed and what He wills, He does.\n\nAbu Huraira (RA) reported Allah's Messenger (ﷺ) as saying: A strong believer is better and is more lovable to Allah than a weak believer, and there is good in everyone, (but) cherish that which gives you benefit (in the Hereafter) and seek help from Allah and do not lose heart, and if anything (in the form of trouble) comes to you, don't say: If I had not done that, it would not have happened so and so, but say: (The dua is Mentioned above) your \"if\" opens the (gate) for the Satan.",
      "dv": "(މިއީ) ﷲ މިންވަރުކުރެއްވި ގޮތެވެ. އަދި އެކަލާނގެ އިރާދަކުރެއްވި ކޮންމެ ކަމެއް ކުރައްވައެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Muslim: 2664"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Content reused verbatim from this app's existing verified dataset (original id: masnun-365), cross-referenced here under its Hisn al-Muslim chapter/number. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-218",
    "type": "dua",
    "categoryId": "daily-life",
    "title": {
      "en": "What the Prophet Said in Joy and Hardship",
      "dv": "ނަބިއްޔާ އުފާވެރި ކަމެއް ދިމާވުމުންނާއި، ނުރުހޭ ކަމެއް ދިމާވުމުން ވިދާޅުވި ބަސްފުޅު"
    },
    "arabic": "كَانَ النَّبِيُّ صلى الله عليه وسلم إِذَا أَتَاهُ الْأَمْرُ يَسُرُّهُ قَالَ: ((الْحَمْدُ لِلَّهِ الَّذِي بِنِعْمَتِهِ تَتِمُّ الصَّالِحَاتُ)) وَإِذَا أَتَاهُ الْأَمْرُ يَكْرَهُهُ قَالَ: ((الْحَمْدُ لِلَّهِ عَلَى كُلِّ حَالٍ))",
    "translation": {
      "en": "When something that pleased him came to the Prophet (peace be upon him), he would say: Praise be to Allah, by Whose favour good deeds are completed. And when something he disliked came to him, he would say: Praise be to Allah in every circumstance.",
      "dv": "ނަބިއްޔާ (ﷺ) އަށް، އުފާވެރި ކަމެއް ދިމާވެއްޖެނަމަ، ވިދާޅުވެއެވެ: \"ޙަމްދު ހުއްޓީ، އެކަލާނގެ ނިޢުމަތްފުޅުން، ހެޔޮ ކަންތައް ފުރިހަމަވާ ﷲ އަށެވެ.\" އަދި، ނުރުހޭ ކަމެއް ދިމާވެއްޖެނަމަ، ވިދާޅުވެއެވެ: \"ކޮންމެ ޙާލެއްގައިވެސް ޙަމްދު ހުއްޓީ ﷲ އަށެވެ.\""
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 218"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"What to say if something happens to please you or to displease you\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-228",
    "type": "dua",
    "categoryId": "daily-life",
    "title": {
      "en": "Upon Hearing a Rooster or a Donkey",
      "dv": "ކުކުޅު ގޮވުމުން ނުވަތަ ދޫނިއެއް ހަޅޭލެވުމުން ބުނާ ބަސް"
    },
    "arabic": "إِذَا سَمِعْتُمْ صِيَاحَ الدِّيَكَةِ فَاسْأَلُوا اللَّهَ مِنْ فَضْلِهِ؛ فَإِنَّهَا رَأَتْ مَلَكاً وَإِذَا سَمِعْتُمْ نَهِيقَ الْحِمَارِ فَتَعَوَّذُوا بِاللَّهِ مِنَ الشَّيطَانِ؛ فَإِنَّهُ رَأَى شَيْطَاناً",
    "translation": {
      "en": "When you hear a rooster crowing, ask Allah of His bounty, for it has seen an angel; and when you hear a donkey braying, seek refuge in Allah from Satan, for it has seen a devil.",
      "dv": "ކުކުޅު ގޮވިއަޑު އިވިއްޖެނަމަ، ﷲ ގެ ފަޟްލުވަންތަކަމަށް އެދޭށެވެ. ހަމަކަށަވަރުން، އެ ދުށީ ملكއެކެވެ. އަދި، ދޫނިއެއް ހަޅޭލެވިއަޑު އިވިއްޖެނަމަ، ޝައިޠާނާގެ ކިބައިން ﷲ ގެ ރައްކާތެރިކަމަށް އެދޭށެވެ. ހަމަކަށަވަރުން، އެ ދުށީ ޝައިޠާނެކެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 228"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"Invocation upon hearing the cock's crow or the bray of a donkey\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-229",
    "type": "dua",
    "categoryId": "daily-life",
    "title": {
      "en": "Upon Hearing Dogs or Donkeys at Night",
      "dv": "ރޭގަނޑު ކުއްތާ ގޮވުމުން ނުވަތަ ދޫނިއެއް ހަޅޭލެވުމުން ބުނާ ބަސް"
    },
    "arabic": "إِذَا سَمِعْتُمْ نُبَاحَ الْكِلاَبِ وَنَهِيقَ الْحَمِيرِ بِاللَّيْلِ فَتَعَوَّذُوا بِاللَّهِ مِنْهُنَّ؛ فَإِنَّهُنَّ يَرَيْنَ مَا لاَ تَرَوْنَ",
    "translation": {
      "en": "When you hear dogs barking or donkeys braying at night, seek refuge in Allah from them, for they see what you do not see.",
      "dv": "ރޭގަނޑު ކުއްތާ ގޮވިއަޑު ނުވަތަ ދޫނިއެއް ހަޅޭލެވިއަޑު އިވިއްޖެނަމަ، އެއިން ރައްކާތެރިކަމަށް ﷲ ގެ ޙަޟްރަތުން އެދޭށެވެ. ހަމަކަށަވަރުން، ތިޔަބައިމީހުންނަށް ނުފެންނަ ތަކެތި، އެ ޖަނަވާރުތަކަށް ފެނެއެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 229"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"Invocation upon hearing a dog barking in the night\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-240",
    "type": "zikr",
    "categoryId": "daily-life",
    "title": {
      "en": "Benefits of Saying Subhan Allah",
      "dv": "ސުބްޙާނަﷲ ކިޔުމުގެ ފައިދާ"
    },
    "arabic": "سُبْحَانَ اللَّهِ",
    "transliteration": "SubhaanAllah",
    "translation": {
      "en": "How perfect Allah is.\n\nOne thousand virtues are recorded (to your credit) and one thousand vices are blotted out.",
      "dv": "ﷲ ގެ ހުސްޠާހިރުވަންތަކަމާއެވެ.\n\n(އެމީހާއަށް) ١٠٠٠ ހެޔޮކަން ލިޔެވޭނެއެވެ. އަދި ١٠٠٠ ނުބައިކަން (ފާފަ) ފުހެވިގެންދާނެއެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Muslim: 2698"
    },
    "repetitions": 100,
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Content reused verbatim from this app's existing verified dataset (original id: masnun-25), cross-referenced here under its Hisn al-Muslim chapter/number. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-241",
    "type": "zikr",
    "categoryId": "daily-life",
    "title": {
      "en": "When waking up for Tahajjud prayer (Dhikr & Dua)",
      "dv": "ތަހައްޖުދަށް ހޭލައި ކިޔާ ޛިކުރު (١٠ ފަހަރު)"
    },
    "arabic": "اَللَّهُ أَكْبَرُ",
    "transliteration": "Allahu 'Akbar",
    "translation": {
      "en": "Allah is the greatest.",
      "dv": "ﷲ އީ އެންމެ ބޮޑު ރަސްކަލާނގެއެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Hasan (Albani). Abu Dawud: 766"
    },
    "repetitions": 10,
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Content reused verbatim from this app's existing verified dataset (original id: masnun-282), cross-referenced here under its Hisn al-Muslim chapter/number. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-246",
    "type": "dua",
    "categoryId": "daily-life",
    "title": {
      "en": "Dua Before Sacrificing Animal (Qurbani Dua)",
      "dv": "އުޟްޙިޔާ ކަތިލުމުގެ ކުރިން ކިޔާ ދުޢާ"
    },
    "arabic": "بِسْمِ اللَّهِ وَاللَّهُ أَكْبَرُ [اَللَّهُمَّ مِنْكَ وَلَكَ] اَللَّهُمَّ تَقَبَّلْ مِنِّي",
    "transliteration": "Bismillaahi wAllahu 'Akbar [Allaahumma minka wa laka] Allaahumma taqabbal minnee",
    "translation": {
      "en": "With the Name of Allah, Allah is the Most Great! [O Allah, from You and to You.] O Allah, accept it from me.",
      "dv": "ﷲ ގެ އިސްމުފުޅުން (ކަތިލަމެވެ). އަދި ﷲ އީ އެންމެ ބޮޑު ރަސްކަލާނގެއެވެ. [އޭ ﷲ! މިއީ އިބަރަސްކަލާނގެ ޙަޟްރަތުން (ދެއްވި އެއްޗެއް) އަދި (މި އަޅުކަން ވަނީ) އިބަރަސްކަލާނގެ އަށެވެ.] އޭ ﷲ! މިއަޅާގެ ކިބައިން މި ކަތިލުން ޤަބޫލުކުރައްވާނދޭވެ!"
    },
    "source": {
      "type": "hadith",
      "reference": "Ahmad 4/400, No. 19586; Abu Dawood, 4/308, No. 5040"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Content reused verbatim from this app's existing verified dataset (original id: masnun-348), cross-referenced here under its Hisn al-Muslim chapter/number. See CONTENT_REVIEW.md."
    }
  }
];
