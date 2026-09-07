import type { Dua } from '../../../types/dua';

// Sourced from the Hisn al-Muslim dataset (Hisn-Muslim-Json,
// github.com/wafaaelmaandy/Hisn-Muslim-Json) - see
// data/duas/CONTENT_REVIEW.md for the sourcing/translation methodology
// and the human-review requirement that still applies to every item here.
export const FOOD_FASTING_DUAS: Dua[] = [
  {
    "id": "hisn-176",
    "type": "dua",
    "categoryId": "food-fasting",
    "title": {
      "en": "Dua for Breaking the Fast",
      "dv": "ރޯދަ ވިއްލާއިރު ކިޔާ ދުޢާ"
    },
    "arabic": "ذَهَبَ الظَّمَأُ وَابْتَلَّتِ العُرُوقُ، وَثَبَتَ الْأَجْرُ إِنْ شَاءَ اللَّهُ",
    "translation": {
      "en": "The thirst has gone, the veins are moistened, and the reward is confirmed, if Allah wills.",
      "dv": "ފަހަދިލީ ފިލައި، ނާރުތައް ތެތްވެއްޖެއެވެ. އަދި، ﷲ އިރާދަކުރެއްވިއްޔާ، ސަވާބު ސާބިތުވެއްޖެއެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 176"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"Invocations for breaking the fast\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-177",
    "type": "dua",
    "categoryId": "food-fasting",
    "title": {
      "en": "Dua of Iftar",
      "dv": "ރޯދަ ވީއްލާ ވަގުތު ކުރާ ދުޢާ (ފާފަ ފުއްސެވުމަށް އެދި)"
    },
    "arabic": "اَللَّهُمَّ إِنِّي أَسْأَلُكَ بِرَحْمَتِكَ الَّتِي وَسِعَتْ كُلَّ شَيْءٍ أَنْ تَغْفِرَ لِي",
    "transliteration": "Allaahumma 'innee 'as'aluka birahmatikal-latee wasi'at kulla shay'in 'an taghfira lee",
    "translation": {
      "en": "O Allah, I ask You by Your mercy, which encompasses all things, that You forgive me.\n\nAbdullah bin Amr (RA) used to say this dua during Iftar.",
      "dv": "އޭ ﷲ! ހަމަކަށަވަރުން ކޮންމެ އެއްޗެއްގެ މައްޗަށް ތަނަވަސްވެގެންވާ އިބަރަސްކަލާނގެ ރަޙްމަތުން، މިއަޅާއަށް ފާފަ ފުއްސެވުމަށް އެދި ދަންނަވަމެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Hasan (Hafiz Ibn Hazar). Takhrijul Adhkar, Sharhul Adhkar: 4/342"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Content reused verbatim from this app's existing verified dataset (original id: masnun-314), cross-referenced here under its Hisn al-Muslim chapter/number. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-178",
    "type": "dua",
    "categoryId": "food-fasting",
    "title": {
      "en": "Dua Before Eating",
      "dv": "ކެއުމުގެ ކުރިން ބުނާ ބަސްފުޅު"
    },
    "arabic": "بِسْمِ اللَّهِ",
    "translation": {
      "en": "When one of you eats, let him say \"In the Name of Allah\"; and if he forgets to say it at the start, let him say \"In the Name of Allah, at its beginning and its end\" when he remembers.",
      "dv": "ތިޔަބައިމީހުންކުރެ މީހަކު ކާއިރު، \"ﷲ ގެ އިސްމުފުޅުން ފަށަމެވެ\" ބުނާށެވެ. ފެށިއިރު ބުނަން ހަނދާންނެތިއްޖެނަމަ، ހަނދާންވުމުން، \"ފެށުމުގައާއި ނިމުމުގައި ﷲ ގެ އިސްމުފުޅުން\" ބުނާށެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 178"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"Invocations before eating\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-179",
    "type": "dua",
    "categoryId": "food-fasting",
    "title": {
      "en": "Dua of Gratitude for Food or Drink",
      "dv": "ކާއެއްޗަކަށް ނުވަތަ ބުއިމަކަށް ޝުކުރުވެރިވެ ކިޔާ ދުޢާ"
    },
    "arabic": "اللَّهُمَّ بَارِكْ لَنَا فِيهِ وَأَطْعِمْنَا خَيْرًا مِنْهُ، اللَّهُمَّ بَارِكْ لَنَا فِيهِ وَزِدْنَا مِنْهُ",
    "translation": {
      "en": "Whoever Allah has fed, let him say: O Allah, bless it for us and feed us better than it. And whoever Allah has given milk to drink, let him say: O Allah, bless it for us and give us more of it.",
      "dv": "ﷲ ކާއެއްޗެއް ދެއްވި މީހަކު ބުނާނީ: \"އޭ ﷲ! އަޅަމެންނަށްޓަކައި، މީގައި ބަރަކާތްލައްވާނދޭވެ! އަދި، މިއަށްވުރެ ހެޔޮ އެއްޗެއް އަޅަމެންނަށް ދެއްވާނދޭވެ!\" އަދި، ﷲ ކިރު ދެއްވި މީހަކު ބުނާނީ: \"އޭ ﷲ! އަޅަމެންނަށްޓަކައި، މީގައި ބަރަކާތްލައްވާނދޭވެ! އަދި، މީގެން އަޅަމެންނަށް އިތުރުކޮށްދެއްވާނދޭވެ!\""
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 179"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"Invocations before eating\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-180",
    "type": "dua",
    "categoryId": "food-fasting",
    "title": {
      "en": "Dua After Eating",
      "dv": "ކެއުމަށްފަހު ކިޔާ ދުޢާ"
    },
    "arabic": "اَلْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِيْ هَذَا وَرَزَقَنِيْهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ",
    "transliteration": "Alhamdu lillaahil-lathee 'at'amanee haathaa, wa razaqaneehi, min ghayri hawlin minnee wa laa quwwah",
    "translation": {
      "en": "Praise is to Allah Who has given me this food and sustained me with it though I was unable to doit and powerless.\n\nThe Prophet (ﷺ) said, \"If a person eats food and says these words, his previous sins will be forgiven.\"",
      "dv": "މިއަޅާގެ އެއްވެސް ބާރެއް އަދި ކުޅަދާނަކަމެއް ނެތި، މިއަޅާއަށް މި ކާނާ ދެއްވައި، އަދި އޭގެން މިއަޅާއަށް ރިޒުޤު ދެއްވި ﷲ އަށް ޙަމްދު ހުއްޓެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Hasan. Ibn Majah: 3285"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Content reused verbatim from this app's existing verified dataset (original id: masnun-503), cross-referenced here under its Hisn al-Muslim chapter/number. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-181",
    "type": "dua",
    "categoryId": "food-fasting",
    "title": {
      "en": "Dua for After Eating",
      "dv": "ކައި ނިމުމުން ކިޔާ ދުޢާއެއް"
    },
    "arabic": "اَلْحَمْدُ لِلَّهِ حَمْدًا كَثِيرًا طَيِّبًا مُبَارَكًا فِيهِ، غَيْرَ مَكْفِيٍّ وَلَا مُوَدَّعٍ، وَلَا مُسْتَغْنًى عَنْهُ رَبَّنَا",
    "transliteration": "Alhamdu lillaahi hamdan katheeran tayyiban mubaarakan feehi, ghayra [makfiyyin wa laa] muwadda'in, wa laa mustaghnan 'anhu Rabbanaa",
    "translation": {
      "en": "All praise is to Allah, praise in abundance, good and blessed. It cannot [be compensated for, nor can it] be left, nor can it be done without, our Lord.",
      "dv": "ﷲ އަށް ޙަމްދު ހުއްޓެވެ. ގިނަގުނަވެގެންވާ، ރަނގަޅުވެގެންވާ، ބަރަކާތްތެރި ޙަމްދަކުންނެވެ. (މި ކާނާއަކީ) އަބަދަށްޓަކައި ފުދިގެންވާ އެއްޗެއް ނޫނެވެ. އަދި ދޫކޮށްލެވޭނެ އެއްޗެއްވެސް ނޫނެވެ. އަދި އެއާ ނުލައި ފުދޭނެ އެއްޗެއްވެސް ނޫނެވެ. އޭ މިއަޅަމެންގެ ވެރިރަސްކަލާނކޮ!"
    },
    "source": {
      "type": "hadith",
      "reference": "Bukhari: 5458, Sahih. Tirmidhi: 3456"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Content reused verbatim from this app's existing verified dataset (original id: masnun-505), cross-referenced here under its Hisn al-Muslim chapter/number. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-182",
    "type": "dua",
    "categoryId": "food-fasting",
    "title": {
      "en": "Dua for Someone Who Gives you Food",
      "dv": "ކާންދިން މީހާއަށް ކުރާ ދުޢާ"
    },
    "arabic": "اَللَّهُمَّ بَارِكْ لَهُمْ فِي مَا رَزَقْتَهُمْ وَاغْفِرْ لَهُمْ وَارْحَمْهُمْ",
    "transliteration": "Allaahumma baarik lahum feemaa razaqtahum, waghfir lahum warhamhum",
    "translation": {
      "en": "O Allah, bless them in what You have provided for them, and forgive them and have mercy on them.\n\nAbdullah ibn Bishar said, \"The Messenger of Allah (ﷺ) came to my father's house.\" He offered some food. He took some food from it. My father wants to pray for him. Then he said these words- (The dua is mentioned above)",
      "dv": "އޭ ﷲ! އިބަރަސްކަލާނގެ އެއުރެންނަށް ދެއްވި ރިޒުޤުގައި ބަރަކާތް ލައްވާނދޭވެ! އަދި އެއުރެންނަށް ފާފަ ފުއްސަވައި، ރަޙްމަތް ލައްވާނދޭވެ!"
    },
    "source": {
      "type": "hadith",
      "reference": "Muslim: 2042"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Content reused verbatim from this app's existing verified dataset (original id: masnun-509), cross-referenced here under its Hisn al-Muslim chapter/number. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-183",
    "type": "dua",
    "categoryId": "food-fasting",
    "title": {
      "en": "Dua for One Who Gave You Food or Drink",
      "dv": "ކާން ނުވަތަ ބޯން ދިން މީހަކަށް ކިޔާ ދުޢާ"
    },
    "arabic": "اللَّهُمَّ أَطْعِمْ مَنْ أَطْعَمَنِي، وَاسْقِ مَنْ سَقَانِي",
    "translation": {
      "en": "O Allah, feed whoever has fed me, and give drink to whoever has given me drink.",
      "dv": "އޭ ﷲ! މިއަޅާއަށް ކާންދިން މީހަކަށް ކާންދެއްވާނދޭވެ! އަދި، މިއަޅާއަށް ބޯންދިން މީހަކަށް ބޯންދެއްވާނދޭވެ!"
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 183"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"Invocation for someone who gives you drink or offers it to you\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-184",
    "type": "dua",
    "categoryId": "food-fasting",
    "title": {
      "en": "Dua for Iftar at Someone's House",
      "dv": "މީހެއްގެ ގާތުން ރޯދަ ވީއްލައިފިނަމަ ކުރާ ދުޢާ"
    },
    "arabic": "أَفْطَرَ عِنْدَكُمُ الصَّائِمُونَ، وَأَكَلَ طَعَامَكُمُ الْأَبْرَارُ، وَصَلَّتْ عَلَيْكُمُ الْمَلَائِكَةُ",
    "transliteration": "Aftara 'indakumus-saa'imoona, wa 'akala ta'aamakumul-'abraaru, wa sallat 'alaykumul-malaa'ikah.",
    "translation": {
      "en": "With you, those who are fasting have broken their fast, you have fed those who are righteous, and the angels recite their prayers upon you.",
      "dv": "ތިޔަބައިމީހުންގެ ގާތުން ރޯދަވެރިން ރޯދަ ވީއްލައިފިއެވެ. އަދި ހެޔޮލަފާ މީހުން ތިޔަބައިމީހުންގެ ކާނާއިން ކައިފިއެވެ. އަދި މަލާއިކަތުން ތިޔަބައިމީހުންގެ މައްޗަށް ދުޢާ ކުރައްވައިފިއެވެ (ނުވަތަ ކުރައްވާށިއެވެ)."
    },
    "source": {
      "type": "hadith",
      "reference": "Sahih. Abu Dawud: 3854"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Content reused verbatim from this app's existing verified dataset (original id: masnun-316), cross-referenced here under its Hisn al-Muslim chapter/number. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-186",
    "type": "dua",
    "categoryId": "food-fasting",
    "title": {
      "en": "Dua when insulted while fasting",
      "dv": "ރޯދައަށް ހުއްޓައި މީހަކު އެއްޗެހި ކިޔައިފިނަމަ ބުނާނެ ބަސް"
    },
    "arabic": "إِنِّي صَائِمٌ، إِنِّي صَائِمٌ",
    "transliteration": "Innee saa'imun, 'innee saa'imun",
    "translation": {
      "en": "I am fasting. I am fasting.\n\nNarrated Abu Huraira (RA): The Messenger of Allah (ﷺ) said: Fasting is a shield; So if any one of you observes fasting, let him not commit adultery or foolishness; If someone fights him or insults him, let him say - (The dua is mentioned above)",
      "dv": "ހަމަކަށަވަރުން އަހަރެން މިހުރީ ރޯދައަށެވެ. ހަމަކަށަވަރުން އަހަރެން މިހުރީ ރޯދައަށެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Bukhari: 1894"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Content reused verbatim from this app's existing verified dataset (original id: masnun-315), cross-referenced here under its Hisn al-Muslim chapter/number. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-187",
    "type": "dua",
    "categoryId": "food-fasting",
    "title": {
      "en": "Dua Upon Seeing New Fruit",
      "dv": "މޭވާއެއް އަލަށް ފެނުމުން (ނުވަތަ ލިބުމުން) ކިޔާ ދުޢާ"
    },
    "arabic": "اَللَّهُمَّ بَارِكْ لَنَا فِي ثَمَرِنَا، وَبَارِكْ لَنَا فِي مَدِينَتِنَا، وَبَارِكْ لَنَا فِي صَاعِنَا، وَبَارِكْ لَنَا فِي مُدِّنَا",
    "transliteration": "Allaahumma baarik lanaa fee thamarinaa, wa baarik lanaa fee madeenatinaa wa baarik lanaa fee saa'inaa, wa baarik lanaa fee muddinaa",
    "translation": {
      "en": "O Allah, bless us in our dates and bless us in our town, bless us in our Sa' and in our Mudd.",
      "dv": "އޭ ﷲ! މިއަޅަމެންގެ މޭވާތަކުގައި މިއަޅަމެންނަށްޓަކައި ބަރަކާތް ލައްވާނދޭވެ! އަދި މިއަޅަމެންގެ ރަށުގައި މިއަޅަމެންނަށްޓަކައި ބަރަކާތް ލައްވާނދޭވެ! އަދި މިއަޅަމެންގެ ޞާޢު ގައި (މިންގަނޑެއް) ބަރަކާތް ލައްވާނދޭވެ! އަދި މިއަޅަމެންގެ މުއްދު ގައި (މިންގަނޑެއް) ބަރަކާތް ލައްވާނދޭވެ!"
    },
    "source": {
      "type": "hadith",
      "reference": "Muslim: 1373"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Content reused verbatim from this app's existing verified dataset (original id: masnun-826), cross-referenced here under its Hisn al-Muslim chapter/number. See CONTENT_REVIEW.md."
    }
  }
];
