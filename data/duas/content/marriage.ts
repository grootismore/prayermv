import type { Dua } from '../../../types/dua';

// Sourced from the Hisn al-Muslim dataset (Hisn-Muslim-Json,
// github.com/wafaaelmaandy/Hisn-Muslim-Json) - see
// data/duas/CONTENT_REVIEW.md for the sourcing/translation methodology
// and the human-review requirement that still applies to every item here.
export const MARRIAGE_DUAS: Dua[] = [
  {
    "id": "hisn-190",
    "type": "dua",
    "categoryId": "marriage",
    "title": {
      "en": "Dua for a Newly Married Couple (Marriage Dua)",
      "dv": "އަލަށް ކައިވެނިކުރާ ދެމީހުންނަށް ކުރާ ދުޢާ"
    },
    "arabic": "بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ",
    "transliteration": "BaarakAllaahu laka, wa baaraka 'alayka, wa jama'a baynakumaa fee khayr",
    "translation": {
      "en": "May Allah bless you, and shower His blessings upon you, and join you together in goodness.\n\nAbu Hurairah (RA) said, \"The Messenger of Allah (ﷺ) used to say this to congratulate the newlyweds.\"",
      "dv": "ﷲ ތިބާއަށް ބަރަކާތް ލައްވާށިއެވެ! އަދި ތިބާގެ މައްޗަށް ބަރަކާތް ލައްވާށިއެވެ! އަދި އެ ދެމީހުން ހެޔޮގޮތުގައި އެއްކުރައްވާށިއެވެ!"
    },
    "source": {
      "type": "hadith",
      "reference": "Sahih (Albani). Abu Dawud: 2130"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Content reused verbatim from this app's existing verified dataset (original id: masnun-392), cross-referenced here under its Hisn al-Muslim chapter/number. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-191",
    "type": "dua",
    "categoryId": "marriage",
    "title": {
      "en": "Dua on the Wedding Night or When Buying an Animal",
      "dv": "ކާވެނީގެ ރޭ ނުވަތަ ޖަނަވާރެއް ގަތުމުން ކިޔާ ދުޢާ"
    },
    "arabic": "اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَهَا، وَخَيْرَ مَا جَبَلْتَهَا عَلَيْهِ، وَأَعُوذُ بِكَ مِنْ شَرِّهَا، وَشَرِّ مَا جَبَلْتَهَا عَلَيْهِ",
    "translation": {
      "en": "O Allah, I ask You for the good within her and the good You have disposed her to, and I seek refuge in You from the evil within her and the evil You have disposed her to.",
      "dv": "އޭ ﷲ! އޭނާގެ ކިބައިގައިވާ ހެޔޮކަމަށާއި، އޭނާ އުފައްދަވާފައިވާ ހެޔޮގޮތުގެ މައްޗަށް އިބަރަސްކަލާނގެ ޙަޟްރަތުން މިއަޅާ އެދެމެވެ. އަދި، އޭނާގެ ކިބައިގައިވާ ނުބައިކަމުންނާއި، އޭނާ އުފައްދަވާފައިވާ ނުބައިގޮތުން، އިބަރަސްކަލާނގެ ޙަޟްރަތުން ރައްކާތެރިކަން ލިބިގަންނަމެވެ."
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 191"
    },
    "benefits": {
      "en": "Said when one marries a woman or buys a servant; if one buys a camel, he takes hold of the top of its hump and says the same.",
      "dv": "އަންހެނަކާ ކާވެނިކުރުމުން ނުވަތަ خادمއެއް ގަތުމުން މިފަދައިން ބުނާށެވެ. ޖަމަލެއް ގަނެފިނަމަ، އޭގެ ގުއިބުޑުގައި ހިފައި، މިފަދައިން ބުނާށެވެ."
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"The groom’s supplication on the wedding night or when buying an animal\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  },
  {
    "id": "hisn-192",
    "type": "dua",
    "categoryId": "marriage",
    "title": {
      "en": "Dua Before Intercourse",
      "dv": "ޖިމާޢުވުމުގެ ކުރިން ކިޔާ ދުޢާ"
    },
    "arabic": "بِسْمِ اللَّهِ، اللَّهُمَّ جَنِّبْنَا الشَّيْطَانَ، وَجَنِّبِ الشَّيْطَانَ مَا رَزَقْتَنَا",
    "translation": {
      "en": "In the name of Allah. O Allah, keep Satan away from us, and keep Satan away from what You bless us with.",
      "dv": "ﷲ ގެ އިސްމުފުޅުން ފަށަމެވެ. އޭ ﷲ! ޝައިޠާނާ އަޅަމެންނާ ދުރުކުރައްވާނދޭވެ! އަދި، އަޅަމެންނަށް ދެއްވާ ނިޢުމަތުން ޝައިޠާނާ ދުރުކުރައްވާނދޭވެ!"
    },
    "source": {
      "type": "hadith",
      "reference": "Hisn al-Muslim 192"
    },
    "contentReview": {
      "arabicVerified": false,
      "transliterationVerified": false,
      "translationVerified": {
        "en": false,
        "dv": false
      },
      "notes": "Sourced from Hisn al-Muslim (Hisn-Muslim-Json dataset, github.com/wafaaelmaandy/Hisn-Muslim-Json), chapter \"Invocation to be recited before intercourse\". The Arabic is the source scripture/hadith wording; the English and Dhivehi translations are original, written directly from the Arabic rather than reproducing the dataset's own English translation - not yet checked by a qualified human reviewer. See CONTENT_REVIEW.md."
    }
  }
];
