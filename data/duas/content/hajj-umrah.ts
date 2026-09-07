import type { Dua } from '../../../types/dua';

// Sourced from the Hisn al-Muslim dataset (Hisn-Muslim-Json,
// github.com/wafaaelmaandy/Hisn-Muslim-Json) - see
// data/duas/CONTENT_REVIEW.md for the sourcing/translation methodology
// and the human-review requirement that still applies to every item here.
export const HAJJ_UMRAH_DUAS: Dua[] = [
  {
    "id": "hisn-233",
    "type": "dua",
    "categoryId": "hajj-umrah",
    "title": {
      "en": "Talbiyah For Hajj (Labaik Allahuma Labaik Dua)",
      "dv": "ތަލްބިޔާ (ޙައްޖާއި ޢުމްރާގައި)"
    },
    "arabic": "لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ، وَالنِّعْمَةَ، لَكَ وَالْمُلْكَ، لَا شَرِيكَ لَكَ",
    "transliteration": "Labbayk Allaahumma labbayk, labbayka laa shareeka laka labbayk, 'innal-hamda, wanni'mata, laka wal mulk, laa shareeka lak.",
    "translation": {
      "en": "I am here at Your service, O Allah, I am here at Your service. I am here at Your service, You have no partener, I am here at Your service. Surely the praise, and blessings are Yours, and the dominion. You have no partener.\n\nNarrated Ibn 'Umar: I heard the Messenger of Allah (ﷺ), reciting this talbiyyah with his hair tied together. (The Dua is motioned above) He did not utter more words than this.",
      "dv": "މިއަޅާ އިބަރަސްކަލާނގެއަށް އިޖާބަދީފީމެވެ. އޭ ﷲ! މިއަޅާ އިބަރަސްކަލާނގެއަށް އިޖާބަދީފީމެވެ. އިބަރަސްކަލާނގެއަށްޓަކައި އިޖާބަދީފީމެވެ. އިބަރަސްކަލާނގެއަށް ބައިވެރިޔަކު ނުވެއެވެ. އިބަރަސްކަލާނގެއަށްޓަކައި އިޖާބަދީފީމެވެ. ހަމަކަށަވަރުން ޙަމްދާއި ނިޢުމަތް ވަނީ އިބަރަސްކަލާނގެ އަށެވެ. އަދި ވެރިކަންވެސްމެއެވެ. އިބަރަސްކަލާނގެއަށް ބައިވެރިޔަކު ނުވެއެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Bukhari, 1549, Muslim 2/841, No. 1184"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Content reused verbatim from this app's existing verified dataset (original id: masnun-336), cross-referenced here under its Hisn al-Muslim chapter/number. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-234",
    "type": "dua",
    "categoryId": "hajj-umrah",
    "title": {
      "en": "Takbir When Passing the Black Stone",
      "dv": "ބްލެކް ސްޓޯނާ ހަމަޔަށްދިޔުމުން ކިޔާ ތަކްބީރު"
    },
    "arabic": "اللَّهُ أَكْبَرُ",
    "translation": {
      "en": "Allah is greatest.",
      "dv": "ﷲ އީ އެންމެ ބޮޑު ރަސްކަލާނގެއެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 234"
    },
    "benefits": {
      "en": "The Prophet (peace be upon him) performed tawaf around the Ka'bah while riding a camel; every time he came to the corner of the Black Stone, he pointed to it with something in his hand and said this takbir.",
      "dv": "ނަބިއްޔާ (ﷺ) ޖަމަލެއްގައި އިންނަވައިގެން ގެފުޅު ވަށާ ޠަވާފުކުރެއްވިއެވެ. ބްލެކް ސްޓޯނު ހުރި ރުކުނަށް ވަޑައިގަންނަވާ ކޮންމެ ފަހަރަކު، އަތްޕުޅުގައި އޮތް އެއްޗަކުން އެއަށް އިޝާރާތްކުރައްވައި، މި ތަކްބީރު ވިދާޅުވިއެވެ."
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"Saying Allahu Akbar when passing the Black Stone\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-235",
    "type": "dua",
    "categoryId": "hajj-umrah",
    "title": {
      "en": "Dua Between Yemeni Corner and Black Stone",
      "dv": "ރުކްނުލް ޔަމާނީއާއި ޙަޖަރުލް އަސްވަދާ ދެމެދު ކިޔާ ދުޢާ"
    },
    "arabic": "رَبَّنَا اٰتِنَا فِي الدُّنْيَا حَسَنَةً وَّفِي الْاٰخِرَةِ حَسَنَةً وَّقِنَا عَذَابَ النَّارِ",
    "transliteration": "Rabbanaa 'aatinaa fid-dunyaa hasanatan wa fil-'aakhirati hasanatan wa qinaa 'athaaban-naar",
    "translation": {
      "en": "Our Lord, grant us the good things in this world and the good things in the next life and save us from the punishment of the Fire.\n\nNarrated Abdullah Ibn Sa'ib (RA): I heard the Messenger of Allah (ﷺ) recite this prayer in the middle of two rukans. (The dua is Mentioned above)",
      "dv": "އޭ އަޅަމެންގެ ވެރި ރަސްކަލާނކޮ! ދުނިޔޭގައިވެސް ހެޔޮކަން އަދި އާޚިރަތުގައިވެސް ހެޔޮކަން އަޅަމެންނަށް ދެއްވާނދޭވެ! އަދި ނަރަކައިގެ ޢަޛާބުން އަޅަމެން ރައްކާތެރިކޮށްދެއްވާނދޭވެ!"
    },
    "source": {
      "type": "hadith",
      "reference": "The hadith is Hasan. Abu Dawud, 1892"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Content reused verbatim from this app's existing verified dataset (original id: masnun-338), cross-referenced here under its Hisn al-Muslim chapter/number. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-236",
    "type": "dua",
    "categoryId": "hajj-umrah",
    "title": {
      "en": "Dua at Safa and Marwah",
      "dv": "ޞަފާއާއި މަރުވާގައި ކިޔާ ދުޢާ"
    },
    "arabic": "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ، أَنْجَزَ وَعْدَهُ، وَنَصَرَ عَبْدَهُ، وَهَزَمَ الْأَحْزَابَ وَحْدَهُ",
    "translation": {
      "en": "When the Prophet (peace be upon him) drew near to Safa, he recited: \"Indeed, Safa and Marwah are among the symbols of Allah\" (Surah Al-Baqarah, 2:158), and said: I begin with what Allah began with. He then climbed Safa until he could see the Ka'bah, faced the Qibla, and declared Allah's oneness and greatness, saying: There is no god but Allah alone, He has no partner; His is the dominion, His is the praise, and He is capable of all things. There is no god but Allah alone; He has fulfilled His promise, granted victory to His slave, and defeated the confederates alone. He repeated this three times, making dua in between, and did the same on Marwah.",
      "dv": "ނަބިއްޔާ (ﷺ) ޞަފާއާ ކައިރިވެވަޑައިގަތުމުން، \"ހަމަކަށަވަރުން، ޞަފާއާއި މަރުވާއަކީ ﷲ ގެ ނިޝާންތަކުގެ ތެރެއިންވާ ދެ ތަނެވެ\" (ސޫރަތުލް ބަޤަރާ 2:158) ކިޔަވައިވިދާޅުވެ، \"ﷲ ފެއްޓެވި ގޮތުން ތިމަން ފަށަމެވެ\" ވިދާޅުވިއެވެ. ދެން ޞަފާއަށް އަރައިވަޑައިގެން، ގެފުޅު ފެނިވަޑައިގަތުމުން، ޤިބުލައަށް ކުރިމަތިލައްވައި، ﷲ ގެ އެއްކައުވަންތަކަމަށާއި، ބޮޑުކަމަށް ހެކިވެވަޑައިގެން، ވިދާޅުވިއެވެ: ﷲ މެނުވީ ޙައްޤުވެގެން އަޅުކަން ވެވޭ އިލާހަކު ނުވެއެވެ. އެކަލާނގެއަށް ބައިވެރިއަކު ނުވެއެވެ. ވެރިކަންވަނީ އެކަލާނގެއަށެވެ. ޙަމްދު ހުއްޓީ އެކަލާނގެއަށެވެ. އަދި އެކަލާނގެއީ ކޮންމެ ކަމެއްގެ މައްޗަށް ކުޅަދުންވަންތަ ރަސްކަލާނގެއެވެ. ﷲ މެނުވީ ޙައްޤުވެގެން އަޅުކަން ވެވޭ އިލާހަކު ނުވެއެވެ. އެކަލާނގެ ވަޢުދުފުޅު ފުއްދަވައި، އެކަލާނގެ އަޅާއަށް نصر ދެއްވައި، އެކަލާނގެ އެކަނި ބައިވެރިވި ލަޝްކަރުތައް ބަލިކުރައްވައިފިއެވެ. މިފަދައިން 3 ފަހަރު ވިދާޅުވެ، ދޭތެރެއިން ދުޢާ ދަންނަވަމުން ގެންދެވިއެވެ. އަދި، މަރުވާގައިވެސް ޞަފާގައި ކަންތައްކުރެއްވި ފަދައިން ކަންތައްކުރެއްވިއެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 236"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"Invocation to be recited while standing at Safa and Marwah\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-237",
    "type": "dua",
    "categoryId": "hajj-umrah",
    "title": {
      "en": "The Best Dua of the Day of Arafat",
      "dv": "ޢަރަފާތު ދުވަހުގެ އެންމެ މާތް ދުޢާ"
    },
    "arabic": "لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
    "translation": {
      "en": "There is no god but Allah alone, He has no partner; His is the dominion, His is the praise, and He is capable of all things.",
      "dv": "ﷲ މެނުވީ ޙައްޤުވެގެން އަޅުކަން ވެވޭ އިލާހަކު ނުވެއެވެ. އެކަލާނގެއަށް ބައިވެރިއަކު ނުވެއެވެ. ވެރިކަންވަނީ އެކަލާނގެއަށެވެ. ޙަމްދު ހުއްޓީ އެކަލާނގެއަށެވެ. އަދި އެކަލާނގެއީ ކޮންމެ ކަމެއްގެ މައްޗަށް ކުޅަދުންވަންތަ ރަސްކަލާނގެއެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 237"
    },
    "benefits": {
      "en": "The Prophet (peace be upon him) said: the best dua is the dua of the Day of Arafat, and the best thing that I and the prophets before me have said is this declaration.",
      "dv": "ނަބިއްޔާ (ﷺ) ޙަދީޘްކުރެއްވިއެވެ: އެންމެ މާތް ދުޢާއަކީ، ޢަރަފާތު ދުވަހުގެ ދުޢާއެވެ. އަދި، ތިމަންކަލޭގެފާނާއި، ތިމަންކަލޭގެފާނުގެ ކުރީގެ ނަބިއްޔުން ވިދާޅުވި އެންމެ މާތް ބަސްފުޅަކީ، މި ބަސްފުޅެވެ."
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"Invocation to be recited on the Day of Arafat\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-238",
    "type": "dua",
    "categoryId": "hajj-umrah",
    "title": {
      "en": "Dua at Muzdalifah",
      "dv": "މުޒްދަލިފާގައި ކިޔާ ދުޢާ"
    },
    "arabic": "رَكِبَ النَّبِيُّ صلى الله عليه وسلم الْقَصْوَاءَ حَتَّى أَتَى الْمَشْعَرَ الْحَرَامَ فَاسْتَقْبَلَ الْقِبْلَةَ (فَدَعَاهُ، وَكَبَّرَهُ، وَهَللَّهُ، وَوَحَّدَهُ) فَلَمْ يَزَلْ وَاقِفاً حَتَّى أَسْفَرَ جِدَّاً فَدَفَعَ قَبْلَ أَنْ تَطْلُعَ الشَّمسُ",
    "translation": {
      "en": "The Prophet (peace be upon him) rode until he reached Al-Mash'ar Al-Haram, faced the Qibla, made dua, glorified Allah, and declared His oneness and greatness. He remained standing there until it was well into dawn, then departed before sunrise.",
      "dv": "ނަބިއްޔާ (ﷺ) ދަތުރުކުރައްވައި، الْمَشْعَرَ الْحَرَامަށް ވަޑައިގެން، ޤިބުލައަށް ކުރިމަތިލައްވައި، ދުޢާ ދަންނަވައި، ﷲ ހުސްޠާހިރުވަންތަކަމަށް ތަސްބީޙަކިޔައި، އެކަލާނގެ އެއްކައުވަންތަކަމަށާއި، ބޮޑުކަމަށް ހެކިވެވަޑައިގަތެވެ. ފަތިސްވުން ރަނގަޅަށް ފާޅުވަންދެން، އެގޮތުގައި ހުންނަވައި، އިރުއެރުމުގެ ކުރިން ފުރާވަޑައިގަތެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 238"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"Supplication to be recited at the sacred area of Muzdalifah\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-239",
    "type": "dua",
    "categoryId": "hajj-umrah",
    "title": {
      "en": "Takbir While Stoning the Jamarat",
      "dv": "ޖަމަރާތަށް ހިލައުކާއިރު ކިޔާ ތަކްބީރު"
    },
    "arabic": "اللَّهُ أَكْبَرُ",
    "translation": {
      "en": "Allah is greatest - said with each pebble thrown at the three pillars. After the first and second pillars, stand facing the Qibla with raised hands and make dua; after the last pillar (Jamrat al-Aqabah), throw the pebbles saying the takbir with each one, then leave without stopping to stand there.",
      "dv": "ﷲ އީ އެންމެ ބޮޑު ރަސްކަލާނގެއެވެ - 3 ޖަމަރާތަށްވެސް ކޮންމެ ހިލައެއް އުކާއިރު ބުނާށެވެ. ފުރަތަމަ 2 ޖަމަރާތުގެ ފަހުން، ޤިބުލައަށް ކުރިމަތިލައްވައި، އަތްޕުޅު އުފުއްލަވައި، ދުޢާކުރައްވާށެވެ. އެންމެ ފަހު ޖަމަރާ (ޖަމްރަތުލް ޢަޤަބާ) ގައި، ކޮންމެ ހިލައަކާއެކު ތަކްބީރު ކިޔައި ހިލައުކުމަށްފަހު، ހުއްޓި ނުހުރެ ދާށެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 239"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"Saying Allahu Akbar while stoning the three pillars at Mina\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  }
];
