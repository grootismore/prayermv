import type { Dua } from '../../../types/dua';

// Sourced from the Masnun Dua open dataset (github.com/islamicapi/masnun-dua)
// - see data/duas/CONTENT_REVIEW.md for the sourcing/verification pipeline
// and the human-review requirement that still applies to every item here.
export const ANIMALS_DUAS: Dua[] = [
  {
    id: 'masnun-512',
    type: 'dua',
    categoryId: 'animals',
    title: { en: 'Dua for Protection from Shaytan', dv: 'ޝައިޠާނާގެ ކިބައިން ރައްކާތެރިވުމަށް ކިޔާ ދުޢާ' },
    arabic: 'أَعُوْذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيـمِ',
    transliteration: 'A\'oodhu billaahi minash-Shaytaanir-rajeem',
    translation: {
      en: 'I seek refuge in Allah from Satan the outcast.\n\nThe Prophet (ﷺ) said, "When you hear the crowing of cocks, ask for Allah\'s Blessings for (their crowing indicates that) they have seen an angel. And when you hear the braying of donkeys, seek Refuge with Allah from Satan for (their braying indicates) that they have seen a Satan." [1] When you hear the donkeys of dogs and the braying of asses at night, seek refuge in Allah, for they see which you do not see. [2]',
      dv: 'ނަޙުލުއްނެވިގެންވާ ޝައިޠާނާގެ ކިބައިން ﷲ ގެ ރައްކާތެރިކަމަށް އެދެމެވެ.',
    },
    source: { type: 'hadith', reference: '[1] Bukhari: 3303 [2] Sahih. Abu Dawud: 5103' },
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Sourced from the Masnun Dua dataset (islamicapi/masnun-dua); passed automated Arabic/EN/DV consistency checks but not yet checked by a qualified human reviewer - see CONTENT_REVIEW.md.',
    },
  },
  {
    id: 'masnun-513',
    type: 'dua',
    categoryId: 'animals',
    title: { en: 'Dua for Traveling and Riding (Safar Dua)', dv: 'ދަތުރު ދުޢާ (ސަވާރީއަށް އަރާއިރު ކިޔާ ދުޢާ)' },
    arabic: 'اَلْحَمْدُ لِلَّهِ، سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ، اَلْحَمْدُ لِلَّهِ، اَلْحَمْدُ لِلَّهِ، اَلْحَمْدُ لِلَّهِ، اَللَّهُ أَكْبَرُ، اَللَّهُ أَكْبَرُ، اَللَّهُ أَكْبَرُ، (لَا إِلَهَ إِلَّا أَنْتَ) سُبْحَانَكَ، إِنِّي ظَلَمْتُ نَفْسِيْ فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوْبَ إِلَّا أَنْتَ',
    transliteration: 'Alhamdu lillaah. Subhaanal-ladhee sakhkhara lanaa haadhaa wa maa kunnaa lahu muqrineen. Wa \'innaa \'ilaa Rabbinaa lamunqaliboon. Alhamdu lillaah, alhamdu lillaah, alhamdu lillaah, Allahu \'Akbar, Allahu \'Akbar, Allahu \'Akbar, (laa ilaaha illaa \'Anta) subhaanaka \'innee dhalamtu nafsee faghfir lee, fa\'innahu laa yaghfirudh-dhunooba \'illaa \'Anta',
    translation: {
      en: 'Praise is to Allah. Glory is to Him Who has provided this for us though we could never have had it by our efforts. Surely, unto our Lord we are returning. Praise is to Allah.(3 times) Allah is the Most Great. (3 times) Glory is to You. O Allah, I have wronged my own soul. Forgive me, for surely none forgives sins but You.',
      dv: 'ޙަމްދު ހުރީ ﷲ އަށެވެ. މިއަޅަމެންނަށްޓަކައި މި (ސަވާރީ) ކިޔަމަންކޮށްދެއްވި ރަސްކަލާނގެ ހުސްޠާހިރުވަންތަކަމާއެވެ! މިއަޅަމެންނަކީ (އެކަލާނގެ މިންވަރުފުޅާ ނުލައި) އެކަމަށް ކުޅަދާނަވެގެންވާ ބަޔަކު ކަމުގައި ނުވަމެވެ. އަދި ހަމަކަށަވަރުން މިއަޅަމެން އެނބުރިދާހުށީ މިއަޅަމެންގެ ވެރިރަސްކަލާނގެ ޙަޟްރަތަށެވެ. ﷲ އަށް ޙަމްދު ހުއްޓެވެ. (٣ ފަހަރު) ﷲ އީ އެންމެ ބޮޑު ރަސްކަލާނގެއެވެ. (٣ ފަހަރު) (އިބަރަސްކަލާނގެ މެނުވީ ޙައްޤުވެގެންވާ އެހެން އިލާހަކު ނުވެއެވެ.) އިބަރަސްކަލާނގެ ހުސްޠާހިރުވަންތަކަމާއެވެ! މިއަޅާ މިއަޅާގެ އަމިއްލަ ނަފްސަށް އަނިޔާވެރިވެއްޖައީމެވެ. ފަހެ، މިއަޅާއަށް ފާފަ ފުއްސަވާނދޭވެ! ހަމަކަށަވަރުން އިބަރަސްކަލާނގެ މެނުވީ ފާފަ ފުއްސަވައިދޭނެ އެހެން ފަރާތެއް ނުވެއެވެ.',
    },
    source: { type: 'hadith', reference: 'Sahih. Tirmidhi: 3446' },
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Sourced from the Masnun Dua dataset (islamicapi/masnun-dua); passed automated Arabic/EN/DV consistency checks but not yet checked by a qualified human reviewer - see CONTENT_REVIEW.md.',
    },
  },
  {
    id: 'masnun-514',
    type: 'dua',
    categoryId: 'animals',
    title: { en: 'Dua when riding animal or car', dv: 'ޖަނަވާރެއް ނުވަތަ ކާރެއް ފަދަ އެއްޗެއް ގަތުމަށްފަހު ކިޔާ ދުޢާ' },
    arabic: 'اَللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَهَا وَخَيْرَ مَا جَبَلْتَهَا عَلَيْهِ وَأَعُوْذُ بِكَ مِنْ شَرِّهَا وَمِنْ شَرِّ مَا جَبَلْتَهَا عَلَيْهِ',
    transliteration: 'Allaahumma \'innee \'as\'aluka khayrahaa wa khayra maa jabaltahaa \'alayhi wa \'A\'oodhu bika min sharrihaa wamin sharri maa jabaltahaa \'alayhi',
    translation: {
      en: 'O Allah, I ask You for the goodness of it and the goodness upon which You have created it, and I seek refuge in You from the evil of it and from the evil upon which You have created it.',
      dv: 'އޭ ﷲ! ހަމަކަށަވަރުން މިއަޅާ އިބަރަސްކަލާނގެ ޙަޟްރަތުން މީގެ ހެޔޮކަމަށާއި، މީގައި އިބަރަސްކަލާނގެ ލައްވާފައިވާ ޠަބީޢީ ހެޔޮކަމަށް އެދެމެވެ. އަދި މީގެ ނުބައިކަމުންނާއި، މީގައި އިބަރަސްކަލާނގެ ލައްވާފައިވާ ޠަބީޢީ ނުބައިކަމުން އިބަރަސްކަލާނގެ ޙަޟްރަތުން ރައްކާތެރިކަމަށް އެދެމެވެ.',
    },
    source: { type: 'hadith', reference: 'Hasan. Abu Dawud: 2160' },
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Sourced from the Masnun Dua dataset (islamicapi/masnun-dua); passed automated Arabic/EN/DV consistency checks but not yet checked by a qualified human reviewer - see CONTENT_REVIEW.md.',
    },
  },
  {
    id: 'masnun-515',
    type: 'dua',
    categoryId: 'animals',
    title: { en: 'Prophet’s Dua upon Hearing Rooster Crows', dv: 'ހާ ގޮވާ އަޑު އިވުމުން ކިޔާ ދުޢާ' },
    arabic: 'اَللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ',
    transliteration: 'Allaahumma innee as’aluka min fadlik',
    translation: {
      en: 'O Allah, I ask You from Your favor.',
      dv: 'އޭ ﷲ! އިބަރަސްކަލާނގެ ފަޟްލަވަންތަކަމަށް މިއަޅާ އެދެމެވެ.',
    },
    source: { type: 'hadith', reference: 'Bukhari: 3303' },
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Sourced from the Masnun Dua dataset (islamicapi/masnun-dua); passed automated Arabic/EN/DV consistency checks but not yet checked by a qualified human reviewer - see CONTENT_REVIEW.md.',
    },
  },
];
