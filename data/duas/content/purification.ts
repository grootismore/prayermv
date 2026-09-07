import type { Dua } from '../../../types/dua';

// Sourced from the Hisn al-Muslim dataset (Hisn-Muslim-Json,
// github.com/wafaaelmaandy/Hisn-Muslim-Json) - see
// data/duas/CONTENT_REVIEW.md for the sourcing/translation methodology
// and the human-review requirement that still applies to every item here.
export const PURIFICATION_DUAS: Dua[] = [
  {
    "id": "hisn-10",
    "type": "dua",
    "categoryId": "purification",
    "title": {
      "en": "Dua for Entering the Restroom",
      "dv": "ފާޚާނާއަށް ވަނުމުން ކިޔާ ދުޢާ"
    },
    "arabic": "بِسْمِ اللَّهِ، اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبْثِ وَالْخَبَائِثِ",
    "translation": {
      "en": "In the name of Allah. O Allah, I seek refuge in You from male and female devils.",
      "dv": "ﷲ ގެ އިސްމުފުޅުން ފަށަމެވެ. އޭ ﷲ! ފިރިހެން ޝައިޠާނުންނާއި، އަންހެން ޝައިޠާނުންގެ ކިބައިން، އިބަރަސްކަލާނގެ ޙަޟްރަތުން ރައްކާތެރިކަން ލިބިގަންނަމެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 10"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"Invocation for entering the restroom\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-11",
    "type": "dua",
    "categoryId": "purification",
    "title": {
      "en": "Dua for Leaving the Toilet",
      "dv": "ފާޚާނާއިން ނުކުތުމުން ކިޔާ ދުޢާ"
    },
    "arabic": "غُفْرَانَكَ",
    "transliteration": "Gufraanak",
    "translation": {
      "en": "I ask You (Allah) for forgiveness.\n\nAyesha (RA) said that Rasoolullah (ﷺ) used to say this dua when he came out of the toilet.",
      "dv": "އިބަރަސްކަލާނގެ ފުއްސެވުމަށް އެދެމެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Sahih (Albani). Abu Dawud: 30"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Content reused verbatim from this app's existing verified dataset (original id: masnun-161), cross-referenced here under its Hisn al-Muslim chapter/number. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-12",
    "type": "dua",
    "categoryId": "purification",
    "title": {
      "en": "Dua Before Undressing",
      "dv": "ހެދުން ބާލާއިރު ކިޔާ ދުޢާ"
    },
    "arabic": "بِسْمِ اللَّهِ",
    "transliteration": "Bismillahi",
    "translation": {
      "en": "In the Name of Allah.",
      "dv": "ﷲ ގެ އިސްމުފުޅުން ފަށަމެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "At-Tirmidhi 2/505 (Hisn al-Muslim 9)"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Content reused verbatim from this app's existing verified dataset (original id: hisnul-9), cross-referenced here under its Hisn al-Muslim chapter/number. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-13",
    "type": "dua",
    "categoryId": "purification",
    "title": {
      "en": "Dua After Completing Ablution (1)",
      "dv": "ވުޟޫކޮށް ނިމުމުން ކިޔާ ދުޢާ (1)"
    },
    "arabic": "أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ",
    "transliteration": "Ash-hadu an la ilaha illallahu wahdahu la sharika lahu wa ash-hadu anna Muhammadan 'abduhu wa Rasuluhu.",
    "translation": {
      "en": "I bear witness that none has the right to be worshipped but Allah alone, Who has no partner; and I bear witness that Muhammad is His slave and His Messenger.",
      "dv": "މިއަޅާ ހެކިވަމެވެ! ﷲ މެނުވީ ޙައްޤުވެގެން އަޅުކަން ވެވޭ އެހެން އިލާހަކު ނުވެއެވެ. އެކަލާނގެއީ ބައިވެރިއަކު ނުވާ އެއްކައުވަންތަ ރަސްކަލާނގެއެވެ. އަދި މިއަޅާ ހެކިވަމެވެ! މުޙައްމަދު (ﷺ) އީ، އެކަލާނގެ އަޅާ އަދި ރަސޫލާއެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Muslim 1/209 (Hisn al-Muslim 13)"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Content reused verbatim from this app's existing verified dataset (original id: hisnul-13), cross-referenced here under its Hisn al-Muslim chapter/number. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-14",
    "type": "dua",
    "categoryId": "purification",
    "title": {
      "en": "Dua After Completing Ablution (2)",
      "dv": "ވުޟޫކޮށް ނިމުމުން ކިޔާ ދުޢާ (2)"
    },
    "arabic": "اللَّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ وَاجْعَلْنِي مِنَ الْمُتَطَهِّرِينَ",
    "transliteration": "Allahummaj'alni minat-tawwabina waj'alni minal-mutatahhirin.",
    "translation": {
      "en": "O Allah, make me among those who turn to You in repentance, and make me among those who are purified.",
      "dv": "އޭ ﷲ! އިބަރަސްކަލާނގެ ޙަޟްރަތަށް ތައުބާވާ މީހުންގެ ތެރެއިން މިއަޅާ ލައްވާނދޭވެ! އަދި ޠާހިރުވެ ސާފުވެގެންވާ މީހުންގެ ތެރެއިން މިއަޅާ ލައްވާނދޭވެ!"
    },
    "source": {
      "type": "hadith",
      "reference": "At-Tirmidhi 1/78 (Hisn al-Muslim 14)"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Content reused verbatim from this app's existing verified dataset (original id: hisnul-14), cross-referenced here under its Hisn al-Muslim chapter/number. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-15",
    "type": "dua",
    "categoryId": "purification",
    "title": {
      "en": "Dua After Completing Ablution (3)",
      "dv": "ވުޟޫކޮށް ނިމުމުން ކިޔާ ދުޢާ (3)"
    },
    "arabic": "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا أَنْتَ، أَسْتَغْفِرُكَ وَأَتُوبُ إِلَيْكَ",
    "transliteration": "Subhanaka Allahumma wa bihamdika, ash-hadu an la ilaha illa Anta, astaghfiruka wa atubu ilayk.",
    "translation": {
      "en": "Glory is to You, O Allah, and praise; I bear witness that there is none worthy of worship but You. I seek Your forgiveness and turn to You in repentance.",
      "dv": "އޭ ﷲ! އިބަރަސްކަލާނގެ ހުސްޠާހިރުވަންތަކަމަށް ތަސްބީޙަކިޔައި، ޙަމްދުކުރަމެވެ. ހަމަކަށަވަރުން، އިބަރަސްކަލާނގެ މެނުވީ ޙައްޤުވެގެން އަޅުކަން ވެވޭ އިލާހަކު ނުވާކަމަށް ހެކިވަމެވެ. އިބަރަސްކަލާނގެ ޙަޟްރަތުން ފުއްސެވުމަށް އެދެމެވެ. އަދި އިބަރަސްކަލާނގެ ޙަޟްރަތަށް ތައުބާވަމެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "An-Nasa'i, 'Amalul-Yawm wal-Laylah (Hisn al-Muslim 15)"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Content reused verbatim from this app's existing verified dataset (original id: hisnul-15), cross-referenced here under its Hisn al-Muslim chapter/number. See CONTENT_REVIEW.md."
    }
  }
];
