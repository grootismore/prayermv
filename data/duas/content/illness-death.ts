import type { Dua } from '../../../types/dua';

// Sourced from the Hisn al-Muslim dataset (Hisn-Muslim-Json,
// github.com/wafaaelmaandy/Hisn-Muslim-Json) - see
// data/duas/CONTENT_REVIEW.md for the sourcing/translation methodology
// and the human-review requirement that still applies to every item here.
export const ILLNESS_DEATH_DUAS: Dua[] = [
  {
    "id": "hisn-147",
    "type": "dua",
    "categoryId": "illness-death",
    "title": {
      "en": "Dua for Sick Person (Masnun Dua)",
      "dv": "ބަލިމީހުންނަށް ކުރާ ދުޢާ"
    },
    "arabic": "لَا بَأْسَ طَهُورٌ إِنْ شَاءَ اللَّهُ",
    "transliteration": "Laa ba'sa tahoorun 'inshaa'Allah.",
    "translation": {
      "en": "Do not worry, it will be a purification (for you), Allah willing.\n\nThe Prophet (ﷺ) used to say this dua when he went to see a sick person.",
      "dv": "ކަންބޮޑުވެ ވަޑައިނުގަންނަވާށެވެ! މިއީ (ފާފަތަކަށްވާ) ޠާހިރުކަމެކެވެ. އިންޝާﷲ."
    },
    "source": {
      "type": "hadith",
      "reference": "Bukhari: 3616"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Content reused verbatim from this app's existing verified dataset (original id: masnun-541), cross-referenced here under its Hisn al-Muslim chapter/number. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-148",
    "type": "zikr",
    "categoryId": "illness-death",
    "title": {
      "en": "Dua for Visiting the Sick",
      "dv": "ބަލިމީހަކަށް ޒިޔާރަތްކުރުމުން ކިޔާ ދުޢާ"
    },
    "arabic": "أَسْأَلُ اللَّهَ الْعَظيمَ رَبَّ الْعَرْشِ الْعَظِيمِ أَنْ يَشْفيَكَ",
    "translation": {
      "en": "I ask Allah, the Mighty, Lord of the Mighty Throne, to heal you.",
      "dv": "ބޮޑުވެގެންވާ ޢަރުޝީގެ ވެރި، މަތިވެރި ރަސްކަލާނގެ ކިބައިން، ކަލޭގެފާނަށް شفاء ދެއްވުމަށް އެދެމެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 148"
    },
    "repetitions": 7,
    "benefits": {
      "en": "The Prophet (peace be upon him) said: when a person visits his sick Muslim brother, he walks in the harvest of Paradise until he sits, and when he sits, mercy envelops him.",
      "dv": "ނަބިއްޔާ (ﷺ) ޙަދީޘްކުރެއްވިއެވެ: މީހަކު، އޭނާގެ ބަލި މުސްލިމު أخާއަށް ޒިޔާރަތްކޮށްފިނަމަ، އިށީނދެއްޖައުމަށްދާންދެން ސުވަރުގޭގެ މޭވާގަނޑެއްގައި ހިނގަނީއެވެ. އަދި އިށީނދެއްޖެނަމަ، ރަޙްމަތުން އޭނާ ވަށާލައެވެ."
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"Invocations for visiting the sick\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-150",
    "type": "dua",
    "categoryId": "illness-death",
    "title": {
      "en": "Dua for Forgiveness and Paradise",
      "dv": "ފާފަ ފުއްސެވުމަށާއި ސުވަރުގެއަށް އެދި ކުރާ ދުޢާ"
    },
    "arabic": "اَللَّهُمَّ اغْفِرْ لِي، وَارْحَمْنِي، وَأَلْحِقْنِي بِالرَّفِيقِ الْأَعْلَى",
    "transliteration": "Allahum-maghfir lee warhamnee wa 'alhiqnee bir-rafeeqil-'a'laa",
    "translation": {
      "en": "O Allah, forgive me and have mercy upon me and join me with the highest companions (in Paradise).",
      "dv": "އޭ ﷲ! މިއަޅާއަށް ފާފަ ފުއްސަވައި، ރަޙްމަތް ލައްވާނދޭވެ! އަދި މާތްވެގެންވާ (މަލާއިކަތުންނާއި ނަބިއްޔުންގެ) އެކުވެރިންނާ މިއަޅާ ގުޅުއްވާނދޭވެ!"
    },
    "source": {
      "type": "hadith",
      "reference": "Sahih (Albani) Sahih Al Jame: 1267"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Content reused verbatim from this app's existing verified dataset (original id: masnun-543), cross-referenced here under its Hisn al-Muslim chapter/number. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-151",
    "type": "dua",
    "categoryId": "illness-death",
    "title": {
      "en": "Words of the Prophet at the Time of Death",
      "dv": "ނަބިއްޔާގެ ފަހު ވަގުތުކޮޅުގައި ވިދާޅުވި ބަސްފުޅު"
    },
    "arabic": "لاَ إِلَهَ إِلاَّ اللَّهُ، إِنَّ لِلْمَوْتِ سَكَرَاتٍ",
    "translation": {
      "en": "There is no god but Allah; death indeed has its throes.",
      "dv": "ﷲ މެނުވީ ޙައްޤުވެގެން އަޅުކަން ވެވޭ އިލާހަކު ނުވެއެވެ. ހަމަކަށަވަރުން، މަރަށް ސަކަރާތްތަކެއް ވެއެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 151"
    },
    "benefits": {
      "en": "Near his death, the Prophet (peace be upon him) would dip his hands in water and wipe his face with them, saying these words.",
      "dv": "ނަބިއްޔާ (ﷺ) ގެ ފަހު ވަގުތުކޮޅުގައި، އެކަލޭގެފާނުގެ އަތްޕުޅު ފެނަށް ލައްވައި، މޫނުފުޅުގައި ފުހުއްވަމުން، މި ބަސްފުޅު ވިދާޅުވިއެވެ."
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"Invocations of the terminal ill\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-152",
    "type": "dua",
    "categoryId": "illness-death",
    "title": {
      "en": "Dua for Protection from illness and Hellfire",
      "dv": "ބަލިމަޑުކަމާއި ނަރަކައިން ސަލާމަތްވުމަށް ކުރާ ދުޢާ"
    },
    "arabic": "لَا إِلَهَ إِلَّا اللَّهُ وَاللَّهُ أَكْبَرُ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَا إِلَهَ إِلَّا اللَّهُ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، لَا إِلَهَ إِلَّا اللَّهُ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
    "transliteration": "Laa 'ilaaha 'illAllahu wAllahu 'Akbar, laa 'ilaaha 'illAllahu wahdahu, laa 'ilaaha 'illAllahu wahdahu laa shareeka lahu, laa 'ilaaha 'illAllahu lahul-mulku wa lahul-hamdu, laa 'ilaaha 'illAllahu wa laa hawla wa laa quwwata 'illaa billaah",
    "translation": {
      "en": "There is none worthy of worship but Allah, Allah is the Most Great. None has the right to be worshipped but Allah alone. None has the right to be worshipped but Allah alone, Who has no partner. There is none worthy of worship but Allah, His is the dominion and His is the praise. There is none worthy of worship but Allah, there is no power and no might but by Allah.\n\nAbu Saeed Khudri (RA) and Abu Hurairah (RA) said that the Messenger of Allah (ﷺ) said that when a servant says these words, Allah responds to him and if someone says these words while he is ill and then dies, the fire will not touch him.",
      "dv": "ﷲ ފިޔަވައި ޙައްޤުވެގެން އަޅުކަމެއް ވެވޭ އިލާހަކު ނުވެއެވެ. އަދި ﷲ އީ އެންމެ ބޮޑު ރަސްކަލާނގެއެވެ. ﷲ ފިޔަވައި ޙައްޤުވެގެން އަޅުކަމެއް ވެވޭ އިލާހަކު ނުވެއެވެ. އެކަލާނގެ އެއްކައުވަންތައެވެ. ﷲ ފިޔަވައި ޙައްޤުވެގެން އަޅުކަމެއް ވެވޭ އިލާހަކު ނުވެއެވެ. އެކަލާނގެ އެއްކައުވަންތައެވެ. އެކަލާނގެއަށް ބައިވެރިޔަކު ނުވެއެވެ. ﷲ ފިޔަވައި ޙައްޤުވެގެން އަޅުކަމެއް ވެވޭ އިލާހަކު ނުވެއެވެ. ވެރިކަން ވަނީ އެކަލާނގެއަށެވެ. އަދި ޙަމްދުހުރީ އެކަލާނގެއަށެވެ. ﷲ ފިޔަވައި ޙައްޤުވެގެން އަޅުކަމެއް ވެވޭ އިލާހަކު ނުވެއެވެ. އަދި އެއްވެސް ޙާލެއް ބަދަލުކުރުމުގެ، ނުވަތަ އެއްވެސް ކަމެއް ކުރުމުގެ ބާރެއް ﷲ ގެ ޙަޟްރަތުން މެނުވީ ނުވެއެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Sahih. Tirmidhi: 3430"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Content reused verbatim from this app's existing verified dataset (original id: masnun-940), cross-referenced here under its Hisn al-Muslim chapter/number. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-153",
    "type": "dua",
    "categoryId": "illness-death",
    "title": {
      "en": "What to Encourage the Dying Person to Say",
      "dv": "މަރުވަމުންދާ މީހާ ދޫކުރުވަން ރަނގަޅު ބަސް"
    },
    "arabic": "لاَ إِلَهَ إِلاَّ اللَّهُ",
    "translation": {
      "en": "There is no god but Allah.",
      "dv": "ﷲ މެނުވީ ޙައްޤުވެގެން އަޅުކަން ވެވޭ އިލާހަކު ނުވެއެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 153"
    },
    "benefits": {
      "en": "The Prophet (peace be upon him) said: whoever's last words are \"there is no god but Allah\" will enter Paradise.",
      "dv": "ނަބިއްޔާ (ﷺ) ޙަދީޘްކުރެއްވިއެވެ: އެންމެ ފަހު ބަހަކީ \"ﷲ މެނުވީ ޙައްޤުވެގެން އަޅުކަން ވެވޭ އިލާހަކު ނުވެއޭ\" ބުނުންކަމުގައިވި މީހަކު ސުވަރުގެ ވަންނާނެއެވެ."
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"What to encourage the dying person to say\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-154",
    "type": "dua",
    "categoryId": "illness-death",
    "title": {
      "en": "Dua for Calamity (Masnoon Dua)",
      "dv": "މުޞީބާތެއް ޖެހުމުން ކިޔާ ދުޢާ (މަސްނޫން ދުޢާ)"
    },
    "arabic": "إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُوْنَ، اَللَّهُمَّ أْجُرْنِيْ فِي مُصِيْبَتِيْ وَأَخْلِفْ لِي خَيْرًا مِّنْهَا",
    "transliteration": "Innaa lillaahi wa 'innaa 'ilayhi raaji'oon, Allaahumma'-jurni fee museebatee wa 'akhliflee khayran minhaa",
    "translation": {
      "en": "We are from Allah and unto Him we return. O Allah take me out of my plight and bring to me after it something better.\n\nUmm Salama (RA) reported Allah's Messenger (ﷺ) as saying: If any Muslim who suffers some calamity says, what Allah has commanded him - (The dua is mentioned above) Allah will give him something better than it in exchange.",
      "dv": "ހަމަކަށަވަރުން އަޅަމެންނީ ﷲ އަށް މިލްކްވެގެންވާ ބައެކެވެ. އަދި ހަމަކަށަވަރުން އަޅަމެން އެނބުރި ދިއުން ވަނީ އެކަލާނގެ ޙަޟްރަތަށެވެ. އޭ ﷲ! މި މުޞީބާތުގައި މިއަޅާއަށް ޘަވާބު ދެއްވާނދޭވެ! އަދި މިއަށްވުރެ ހެޔޮ ގޮތް މިއަޅާއަށް މިންވަރުކޮށްދެއްވާނދޭވެ!\n\nއުއްމު ސަލަމާ (ރ.ޢ) ރިވާކުރެއްވިއެވެ: ރަސޫލާ (ﷺ) ޙަދީޘްކުރެއްވިއެވެ: \"ކޮންމެ މުސްލިމަކަށް މުޞީބާތެއް ޖެހުމުން، ﷲ އަމުރުކުރައްވާފައިވާ ފަދައިން (މަތީގައިވާ ދުޢާ) ކިޔައިފިނަމަ، ﷲ އޭނާއަށް އެއަށްވުރެ ހެޔޮ ގޮތް ބަދަލުގައި ދެއްވާނެއެވެ.\""
    },
    "source": {
      "type": "hadith",
      "reference": "Muslim: 918"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Content reused verbatim from this app's existing verified dataset (original id: masnun-47), cross-referenced here under its Hisn al-Muslim chapter/number. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-155",
    "type": "dua",
    "categoryId": "illness-death",
    "title": {
      "en": "Dua for Closing the Eyes of the Dead",
      "dv": "މަރުވި މީހާގެ ލޯމަރާލުމަށްފަހު ކިޔާ ދުޢާ"
    },
    "arabic": "اللَّهُمَّ اغْفِرْ لِفُلاَنٍ (بِاسْمِهِ) وَارْفَعْ دَرَجَتَهُ فِي الْمَهْدِيِّينَ، وَاخْلُفْهُ فِي عَقِبِهِ فِي الْغَابِرِينَ، وَاغْفِرْ لَنَا وَلَهُ يَا رَبَّ الْعَالَمِينَ، وَافْسَحْ لَهُ فِي قَبْرِهِ، وَنَوِّرْ لَهُ فِيهِ",
    "translation": {
      "en": "O Allah, forgive [name], and raise his rank among the rightly-guided. Take good care of his descendants he leaves behind, and forgive us and him, O Lord of all the worlds. Make room for him in his grave, and grant him light in it.",
      "dv": "އޭ ﷲ! (މީހާގެ ނަން) ފުއްސަވާނދޭވެ! އަދި ތެދުމަގު ލިބިގެންވާ މީހުންގެ ތެރޭގައި، އޭނާގެ ދަރަޖަ މަތިވެރިކުރައްވާނދޭވެ! އަދި، އޭނާ ދޫކުރި ދަރިކޮޅުގެ ކިބައިން، ފަހަށް އޮތް ބައިގައި އޭނާގެ ބަދަލުގައި ހެޔޮގޮތް މިންވަރުކުރައްވާނދޭވެ! އޭ ޢާލަމްތަކުގެ ވެރި ރަސްކަލާކޮ! އަޅަމެންނަށާއި، އޭނާއަށް ފުއްސަވާނދޭވެ! އަދި، އޭނާގެ ކަށްވަޅު ތަނަވަސްކޮށްދެއްވާނދޭވެ! އަދި، އެތާނގައި އޭނާއަށް ނޫރު ދެއްވާނދޭވެ!"
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 155"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"Invocation for closing the eyes of the dead\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-156",
    "type": "dua",
    "categoryId": "illness-death",
    "title": {
      "en": "Dua for a Deceased Male (Janaza dua)",
      "dv": "ޖަނާޒާ ނަމާދުގައި މައްޔިތާއަށް ކުރާ ދުޢާ (ފިރިހެން)"
    },
    "arabic": "اَللَّهُمَّ اغْفِرْ لَهُ وَارْحَمْهُ وَعَافِهِ وَاعْفُ عَنْهُ وَأَكْرِمْ نُزُلَهُ وَوَسِّعْ مُدْخَلَهُ وَاغْسِلْهُ بِالْمَاءِ وَالثَّلْجِ وَالْبَرَدِ وَنَقِّهِ مِنَ الْخَطَايَا كَمَا نَقَّيْتَ الثَّوْبَ الْأَبْيَضَ مِنَ الدَّنَسِ وَأَبْدِلْهُ دَارًا خَيْرًا مِنْ دَارِهِ وَأَهْلًا خَيْرًا مِنْ أَهْلِهِ وَزَوْجًا خَيْرًا مِنْ زَوْجِهِ وَأَدْخِلْهُ الْجَنَّةَ وَأَعِذْهُ مِنْ عَذَابِ الْقَبْرِ [وَعَذَابِ النَّارِ]",
    "transliteration": "Allahum-maghfir lahu warhamhu, wa 'aafihi, wa'fu 'anhu, wa 'akrim nuzulahu, wa wassi' mudkhalahu, waghsilhu bilmaa'i waththalji walbarad, wa naqqihi minal-khataayaa kamaa naqqaytath-thawbal-'abyadha minad-danas, wa 'abdilhu daaran khayran min daarihi, wa 'ahlan khayran min 'ahlihi, wa zawjan khayran min zawjihi, wa 'adkhilhul-jannata, wa 'a'idhhu min 'adhaabil-qabr (wa 'adhaabin-naar)",
    "translation": {
      "en": "O Allah, forgive him and have mercy on him and give him strength and pardon him. Be generous to him and cause his entrance to be wide and wash him with water and snow and hail. Cleanse him of his transgressions as white cloth is cleansed of stains. Give him an abode better than his home, and a family better than his family and a spouse better than his spouse. Take him into Paradise and protect him from the punishment of the grave [and from the punishment of Hell-fire].\n\nAwf ibn Malik (RA) said, When the Messenger of Allah (ﷺ) performed the funeral prayer, I memorized this dua from him. Hearing this dua, I wished that the dead body would be me! (The dua is Mentioned above)",
      "dv": "އޭ ﷲ! އޭނާއަށް (މި މައްޔިތާއަށް) ފާފަ ފުއްސަވާނދޭވެ! އަދި ރަޙްމަތް ލައްވާނދޭވެ! އަދި ޢާފިޔަތު ދެއްވާނދޭވެ! އަދި އޭނާއަށް މާފުކުރައްވާނދޭވެ! އަދި އޭނާގެ ނުޒުލު (މެހެމާންދާރީ/ކަށްވަޅު) މާތްކުރައްވާނދޭވެ! އަދި އޭނާ ވަންނަ ތަން (ކަށްވަޅު) ތަނަވަސްކުރައްވާނދޭވެ! އަދި ފެނާއި، ގަނޑުފެނާއި، ގަނޑުފެން ވާރޭ (ބަރަދު) އިން އޭނާ ދޮވެޠާހިރު ކުރައްވާނދޭވެ! އަދި ހުދު ފޭރާމެއް ކިލަނބުކަމުން ސާފުކުރެވޭ ފަދައިން، އޭނާގެ ކުށްފާފަތަކުން އޭނާ ސާފުކުރައްވާނދޭވެ! އަދި އޭނާގެ ގެއަށްވުރެ ހެޔޮ ގެއެއް، އަދި އޭނާގެ އަހުލުންނަށްވުރެ ހެޔޮ އަހުލުން، އަދި އޭނާގެ ޒަވާޖަށްވުރެ ހެޔޮ ޒަވާޖެއް (ބައިވެރިއެއް) އޭނާއަށް ބަދަލުގައި ދެއްވާނދޭވެ! އަދި އޭނާ ސުވަރުގެއަށް ވައްދަވާނދޭވެ! އަދި ކަށްވަޅުގެ ޢަޛާބުން (އަދި ނަރަކައިގެ ޢަޛާބުން) އޭނާ ރައްކާތެރިކުރައްވާނދޭވެ!"
    },
    "source": {
      "type": "hadith",
      "reference": "Muslim: 963"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Content reused verbatim from this app's existing verified dataset (original id: masnun-295), cross-referenced here under its Hisn al-Muslim chapter/number. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-157",
    "type": "dua",
    "categoryId": "illness-death",
    "title": {
      "en": "Dua for the Dead in the Funeral Prayer (1)",
      "dv": "ކަށުނަމާދުގައި ކިޔާ ދުޢާ (1)"
    },
    "arabic": "اللَّهُمَّ اغْفِرْ لِحَيِّنَا وَمَيِّتِنَا، وَشَاهِدِنَا وَغَائِبِنَا، وَصَغِيرِنَا وَكَبيرِنَا، وَذَكَرِنَا وَأُنْثَانَا. اللَّهُمَّ مَنْ أَحْيَيْتَهُ مِنَّا فَأَحْيِهِ عَلَى الْإِسْلاَمِ، وَمَنْ تَوَفَّيْتَهُ مِنَّا فَتَوَفَّهُ عَلَى الإِيمَانِ، اللَّهُمَّ لاَ تَحْرِمْنَا أَجْرَهُ، وَلاَ تُضِلَّنَا بَعْدَهُ",
    "translation": {
      "en": "O Allah, forgive our living and our dead, those present and those absent, our young and our old, our males and our females. O Allah, whoever You keep alive among us, let him live upon Islam, and whoever You cause to die among us, let him die upon faith. O Allah, do not deprive us of his reward, and do not let us go astray after him.",
      "dv": "އޭ ﷲ! އަޅަމެންގެ ދިރިތިބި މީހުންނާއި، މަރުވެފައިވާ މީހުންނާއި، ހާޒިރުވެފައިވާ މީހުންނާއި، ޣައިރު ހާޒިރުވެފައިވާ މީހުންނާއި، ކުޑަކުދިންނާއި، ދޮށީ މީހުންނާއި، ފިރިހެނުންނާއި، އަންހެނުން ފުއްސަވާނދޭވެ! އޭ ﷲ! އަޅަމެންގެ ތެރެއިން ދިރުއްވާ މީހަކު، އިސްލާމްދީނުގެ މަތީގައި ދިރުއްވާނދޭވެ! އަދި، އަޅަމެންގެ ތެރެއިން މަރުގަންނަވާ މީހަކު، އީމާންކަމުގެ މަތީގައި މަރުގަންނަވާނދޭވެ! އޭ ﷲ! އޭނާގެ ސަވާބުން އަޅަމެން މަޙްރޫމުނުކުރައްވާނދޭވެ! އަދި، އޭނާއަށްފަހު އަޅަމެން މަގުފުރައްދަވާނުދޭވެ!"
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 157"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"Invocations for the dead in the Funeral prayer\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-158",
    "type": "dua",
    "categoryId": "illness-death",
    "title": {
      "en": "Dua for the Dead in the Funeral Prayer (2)",
      "dv": "ކަށުނަމާދުގައި ކިޔާ ދުޢާ (2)"
    },
    "arabic": "اللَّهُمَّ إِنَّ فُلاَنَ بْنَ فُلاَنٍ فِي ذِمَّتِكَ، وَحَبْلِ جِوَارِكَ، فَقِهِ مِنْ فِتْنَةِ الْقَبْرِ، وَعَذَابِ النَّارِ، وَأَنْتَ أَهْلُ الْوَفَاءِ وَالْحَقِّ، فَاغْفِرْ لَهُ وَارْحَمْهُ إِنَّكَ أَنْتَ الغَفُورُ الرَّحيمُ",
    "translation": {
      "en": "O Allah, [name] is in Your care and the protection of Your covenant, so protect him from the trial of the grave and the punishment of the Fire. You are the One true to His word, so forgive him and have mercy on him; You are indeed the Forgiving, the Merciful.",
      "dv": "އޭ ﷲ! ހަމަކަށަވަރުން، (މީހާގެ ނަން) ވަނީ، އިބަރަސްކަލާނގެ ޛިންމާގައާއި، އިބަރަސްކަލާނގެ ރައްކާތެރިކަމުގެ ވިއުތާގައެވެ. ފަހެ، ކަށްވަޅުގެ ފިތުނައިންނާއި، ނަރަކައިގެ ޢަޛާބުން، އޭނާ ރައްކާތެރިކުރައްވާނދޭވެ! އިބަރަސްކަލާނގެއީ، ވަޢުދު ފުއްދަވާ، ޙައްޤުވަންތަ ރަސްކަލާނގެއެވެ. ފަހެ، އޭނާއަށް ފުއްސަވައި، ރަޙްމަތްލައްވާނދޭވެ! ހަމަކަށަވަރުން، އިބަރަސްކަލާނގެއީ، ގިނަގިނައިން ފުއްސަވާ، ރަޙީމްވަންތަ ރަސްކަލާނގެއެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 158"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"Invocations for the dead in the Funeral prayer\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-159",
    "type": "dua",
    "categoryId": "illness-death",
    "title": {
      "en": "Dua for Namaz e Janaza (Allahumma abduka wabnu amatika)",
      "dv": "ޖަނާޒާ ނަމާދުގައި ކިޔާ ދުޢާ (ފިރިހެން) - ٣"
    },
    "arabic": "اَللَّهُمَّ عَبْدُكَ وَابْنُ أَمَتِكَ اِحْتَاجَ إِلَى رَحْمَتِكَ، وَأَنْتَ غَنِيٌّ عَنْ عَذَابِهِ، إِنْ كَانَ مُحْسِنًا فَزِدْ فِي حَسَنَاتِهِ، وَإِنْ كَانَ مُسِيئًا فَتَجَاوَزْ عَنْهُ",
    "transliteration": "Allaahumma 'abduka wabnu 'amatika ihtaaja 'ilaa rahmatika, wa 'Anta ghaniyyun 'an 'adhaabihi, 'in kaana mu'hsinan fazid fee hasanaatihi, wa 'in kaana musee'an fatajaawaz 'anhu",
    "translation": {
      "en": "O Allah, he is the son of One of Your male & female slave, he is in need of Your mercy, and You are not in need of his torment. If he was pious, then increase his rewards and if he was a sinner then pardon him.",
      "dv": "އޭ ﷲ! (މިއީ) އިބަރަސްކަލާނގެ އަޅެކެވެ. އަދި އިބަރަސްކަލާނގެ އަޅު އަންހެނެއްގެ ދަރިއެކެވެ. އޭނާ ވަނީ އިބަރަސްކަލާނގެ ރަޙްމަތަށް ބޭނުންވެފައެވެ. އަދި އިބަރަސްކަލާނގެ ވަނީ އޭނާއަށް ޢަޛާބު ދެއްވުމުން ފުދިވޮޑިގެންނެވެ. ފަހެ، އޭނާއަކީ އިޙްސާންތެރިއެއް (ހެޔޮ ޢަމަލު ކުޅަ މީހެއް) ކަމުގައި ވާނަމަ އޭނާގެ ހެޔޮކަންތައް އިތުރުކުރައްވާނދޭވެ! އަދި އޭނާއަކީ ކުށްތައް ކުރި މީހެއް ނަމަ، އޭނާގެ ކިބައިން ޢަފޫކުރައްވާނދޭވެ!"
    },
    "source": {
      "type": "hadith",
      "reference": "Sahih (Albani). Al-Hakim: 1/359"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Content reused verbatim from this app's existing verified dataset (original id: masnun-297), cross-referenced here under its Hisn al-Muslim chapter/number. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-160",
    "type": "dua",
    "categoryId": "illness-death",
    "title": {
      "en": "Dua for a Child in the Funeral Prayer (1)",
      "dv": "ކުޑަކުއްޖެއްގެ ކަށުނަމާދުގައި ކިޔާ ދުޢާ (1)"
    },
    "arabic": "اللَّهُمَّ أَعِذْهُ مِنْ عَذَابِ الْقَبْرِ، اللَّهُمَّ اجْعَلْهُ فَرَطًا وَذُخْرًا لِوَالِدَيْهِ، وَشَفِيعًا مُجَابًا، اللَّهُمَّ ثَقِّلْ بِهِ مَوَازِينَهُمَا، وَأَعْظِمْ بِهِ أُجُورَهُمَا، وَأَلْحِقْهُ بِصَالِحِ الْمُؤْمِنِينَ، وَاجْعَلْهُ فِي كَفَالَةِ إِبْرَاهِيمَ، وَقِهِ بِرَحْمَتِكَ عَذَابَ الْجَحِيمِ، وَأَبْدِلْهُ دَارًا خَيْرًا مِنْ دَارِهِ، وَأَهْلًا خَيْرًا مِنْ أَهْلِهِ، اللَّهُمَّ اغْفِرْ لِأَسْلَافِنَا، وَأَفْرَاطِنَا، وَمَنْ سَبَقَنَا بِالْإِيمَانِ",
    "translation": {
      "en": "O Allah, protect him from the punishment of the grave. Or one may add: O Allah, make him a preceding reward for his parents, and a store of good deeds, and an accepted intercessor. O Allah, through him make heavy their scales, and magnify through him their reward, and join him with the righteous believers, place him in the care of Ibrahim, and by Your mercy protect him from the punishment of Hell-fire, and give him in exchange a home better than his home, and a family better than his family. O Allah, forgive our predecessors and those who went before us in faith.",
      "dv": "އޭ ﷲ! ކަށްވަޅުގެ ޢަޛާބުން، އޭނާ ރައްކާތެރިކުރައްވާނދޭވެ! (ނުވަތަ އިތުރަށް ބުނެވިދާނެއެވެ:) އޭ ﷲ! އޭނާގެ މައިންބަފައިންނަށްޓަކައި، ކުރީ ސަވާބެއް ކަމުގައާއި، ރައްކާކުރެވިފައިވާ ޛަޚީރާއަކާއި، ޤަބޫލުކުރައްވާ شفاعةތެރިއަކު ކަމުގައި، އޭނާ ލައްވާނދޭވެ! އޭ ﷲ! އޭނާ މެދުވެރިކޮށް، އެދެމީހުންގެ މީޒާން ބަރުކުރައްވާނދޭވެ! އަދި، އެދެމީހުންގެ ސަވާބު ބޮޑުކުރައްވާނދޭވެ! އަދި، ޞާލިޙް މުއުމިނުންނާ އޭނާ ގުޅުއްވާނދޭވެ! އަދި، إبراهيمގެފާނުގެ ބެލެނިވެރިކަމުގައި، އޭނާ ލައްވާނދޭވެ! އަދި، އިބަރަސްކަލާނގެ ރަޙްމަތްފުޅުން، ނަރަކައިގެ ޢަޛާބުން، އޭނާ ރައްކާތެރިކުރައްވާނދޭވެ! އަދި، އޭނާގެ ގެއަށްވުރެ ހެޔޮ ގެއަކާއި، އޭނާގެ أهلުންނަށްވުރެ ހެޔޮ أهلުންނަށް، ބަދަލުކުރައްވާނދޭވެ! އޭ ﷲ! އަޅަމެންގެ އިސްވެދިޔަ މީހުންނަށާއި، އަޅަމެންގެ ކުރީގައި إيمانވި މީހުންނަށް ފުއްސަވާނދޭވެ!"
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 160"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"Invocations for a child in the Funeral prayer\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-161",
    "type": "dua",
    "categoryId": "illness-death",
    "title": {
      "en": "Dua for a Child in the Funeral Prayer (2)",
      "dv": "ކުޑަކުއްޖެއްގެ ކަށުނަމާދުގައި ކިޔާ ދުޢާ (2)"
    },
    "arabic": "اللَّهُمَّ اجْعَلْهُ لَنَا فَرَطاً، وَسَلَفاً، وَأَجْراً",
    "translation": {
      "en": "O Allah, make him a preceding reward for us, a forerunner, and a store of good deeds.",
      "dv": "އޭ ﷲ! އަޅަމެންނަށްޓަކައި، ކުރީ ސަވާބެއް ކަމުގައާއި، ކުރީގައި ފޮނުވި މީހަކު ކަމުގައާއި، ރައްކާކުރެވިފައިވާ ސަވާބެއް ކަމުގައި، އޭނާ ލައްވާނދޭވެ!"
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 161"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"Invocations for a child in the Funeral prayer\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-162",
    "type": "dua",
    "categoryId": "illness-death",
    "title": {
      "en": "Dua for Someone Bereaved",
      "dv": "މުޞީބާތެއް ޖެހުނު މީހަކަށް ކިޔާ ދުޢާ"
    },
    "arabic": "إِنَّ لِلَّهِ مَا أَخَذَ، وَلَهُ مَا أَعْطَى، وَكُلُّ شَيْءٍ عِنْدَهُ بِأَجَلٍ مُسَمًّى، فَلْتَصْبِرْ وَلْتَحْتَسِبْ. أَعْظَمَ اللَّهُ أَجْرَكَ، وَأَحْسَنَ عَزَاءَكَ، وَغَفَرَ لِمَيِّتِكَ",
    "translation": {
      "en": "To Allah belongs what He has taken, and to Him belongs what He has given; everything with Him has an appointed term, so let her be patient and seek the reward. One may also add: May Allah magnify your reward, console you well, and forgive your deceased.",
      "dv": "ﷲ ގެންދެވި އެއްޗެއްވެސް، އަދި ދެއްވި އެއްޗެއްވެސްވަނީ، އެކަލާނގެ ޙަޟްރަތުގައެވެ. އަދި ކޮންމެ އެއްޗެއްވެސް، އެކަލާނގެ ޙަޟްރަތުގައި ކަނޑައެޅިފައިވާ މުއްދަތެއް ވެއެވެ. ފަހެ، ކެތްތެރިވެ، ސަވާބަށް އެދޭށެވެ. (އަދި، އިތުރަށް ބުނެވިދާނެއެވެ:) ﷲ ކަލޭގެފާނުގެ ސަވާބު ބޮޑުކުރައްވައި، ކަލޭގެފާނަށް ރިވެތި ގޮތުގައި ތަޢުޒިޔާ ދެއްވައި، ކަލޭގެފާނުގެ މައްޔިތާއަށް ފުއްސަވާނދޭވެ!"
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 162"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"Invocation for the bereaved\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-163",
    "type": "dua",
    "categoryId": "illness-death",
    "title": {
      "en": "Dua When Placing the Dead in the Grave",
      "dv": "މައްޔިތާ ކަށްވަޅަށް ބާލާއިރު ކިޔާ ދުޢާ"
    },
    "arabic": "بِسْمِ اللَّهِ وَعَلَى سُنَّةِ رَسُولِ اللَّهِ",
    "translation": {
      "en": "In the Name of Allah, and upon the way of the Messenger of Allah.",
      "dv": "ﷲ ގެ އިސްމުފުޅުން ފަށަމެވެ. އަދި ﷲ ގެ ރަސޫލާގެ ސުއްނަތުގެ މަތީގައެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 163"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"Invocation to be recited when placing the dead in his grave\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-164",
    "type": "dua",
    "categoryId": "illness-death",
    "title": {
      "en": "Dua After Burying the Dead",
      "dv": "ވަޅުލުމަށްފަހު ކިޔާ ދުޢާ"
    },
    "arabic": "اللَّهُمَّ اغْفِرْ لَهُ، اللَّهُمَّ ثَبِّتْهُ",
    "translation": {
      "en": "O Allah, forgive him. O Allah, make him steadfast.",
      "dv": "އޭ ﷲ! އޭނާއަށް ފުއްސަވާނދޭވެ! އޭ ﷲ! އޭނާ ސާބިތުކުރައްވާނދޭވެ!"
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 164"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"Invocation to be recited after burying the dead\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-165",
    "type": "dua",
    "categoryId": "illness-death",
    "title": {
      "en": "Dua for Visiting the Graves",
      "dv": "ޤަބުރުސްތާނަށް ޒިޔާރަތްކުރުމުން ކިޔާ ދުޢާ"
    },
    "arabic": "السَّلَامُ عَلَيْكُمْ أَهْلَ الدِّيَارِ، مِنَ الْمُؤْمِنِينَ وَالْمُسْلِمِينَ، وَإِنَّا إِنْ شَاءَ اللَّهُ بِكُمْ لَاحِقُونَ، وَيَرْحَمُ اللَّهُ الْمُسْتَقْدِمِينَ مِنَّا وَالْمُسْتَأْخِرِينَ، أَسْأَلُ اللَّهَ لَنَا وَلَكُمُ الْعَافِيَةَ",
    "translation": {
      "en": "Peace be upon you, inhabitants of these abodes, from among the believers and Muslims, and we shall join you, Allah willing. [May Allah have mercy on those of us who have gone before and those who come after.] I ask Allah for well-being for us and for you.",
      "dv": "ﷲ އަށް އީމާންވި، މުސްލިމުންގެ ތެރެއިންވާ، މި ގޮނޑުދޮށުގެ أهލުންނޭވެ! ތިޔަބައިމީހުންގެ މައްޗަށް ސަލާމް ހުށްޓެވެ. އަދި، ހަމަކަށަވަރުން، ﷲ އިރާދަކުރެއްވިއްޔާ، އަޅަމެންވެސް ތިޔަބައިމީހުންނާ ބައްދަލުވާނަމުއެވެ. [އަދި، އަޅަމެންގެ ތެރެއިން އިސްވެދިޔަ މީހުންނަށާއި، ފަހަށް ބާކީވި މީހުންނަށް ﷲ ރަޙްމަތްލައްވާށިއެވެ!] އަޅަމެންނަށާއި، ތިޔަބައިމީހުންނަށް ޢާފިޔަތަށް، ﷲ ގެ ޙަޟްރަތުން އެދެމެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 165"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"Invocation for visiting the graves\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-243",
    "type": "zikr",
    "categoryId": "illness-death",
    "title": {
      "en": "Dua for Pain in the Body",
      "dv": "ހަށިގަނޑުގައި ރިއްސާނަމަ ކިޔާ ދުޢާ"
    },
    "arabic": "بِسْمِ اللَّهِ | أَعُوذُ بِاللَّهِ وَقُدْرَتِهِ مِنْ شَرِّ مَا أَجِدُ وَأُحَاذِرُ",
    "translation": {
      "en": "In the name of Allah. I seek refuge in Allah and His power from the evil that I feel and am wary of.",
      "dv": "ﷲ ގެ އިސްމުފުޅުން ފަށަމެވެ. ﷲ ގެ ޙަޟްރަތުންނާއި، އެކަލާނގެ ކުޅަދުންވަންތަކަމުން، މިއަޅާއަށް ފެންނަ، އަދި މިއަޅާ ބިރުގަންނަ ނުބައިކަމުން ރައްކާތެރިކަމަށް އެދެމެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 243"
    },
    "segments": [
      {
        "arabic": "بِسْمِ اللَّهِ",
        "translation": {
          "en": "In the name of Allah.",
          "dv": "ﷲ ގެ އިސްމުފުޅުން ފަށަމެވެ."
        },
        "repetitions": 3
      },
      {
        "arabic": "أَعُوذُ بِاللَّهِ وَقُدْرَتِهِ مِنْ شَرِّ مَا أَجِدُ وَأُحَاذِرُ",
        "translation": {
          "en": "I seek refuge in Allah and His power from the evil that I feel and am wary of.",
          "dv": "ﷲ ގެ ޙަޟްރަތުންނާއި، އެކަލާނގެ ކުޅަދުންވަންތަކަމުން، މިއަޅާއަށް ފެންނަ، އަދި މިއަޅާ ބިރުގަންނަ ނުބައިކަމުން ރައްކާތެރިކަމަށް އެދެމެވެ."
        },
        "repetitions": 7
      }
    ],
    "benefits": {
      "en": "Place your hand on the part of your body that hurts while saying this.",
      "dv": "ހަށިގަނޑުން ރިއްސާ ތަނެއްގައި އަތްޕުޅު ބާއްވަވައިގެން މިފަދައިން ވިދާޅުވާށެވެ."
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"What to say when you feel a pain in your body\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  }
];
