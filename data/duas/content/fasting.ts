import type { Dua } from '../../../types/dua';

// Sourced from the Masnun Dua open dataset (github.com/islamicapi/masnun-dua)
// - see data/duas/CONTENT_REVIEW.md for the sourcing/verification pipeline
// and the human-review requirement that still applies to every item here.
export const FASTING_DUAS: Dua[] = [
  {
    id: 'masnun-310',
    type: 'dua',
    categoryId: 'fasting',
    title: { en: 'Laylatul Qadr Dua (Allahumma Innaka Afuwwun Karim Dua)', dv: 'ލައިލަތުލް ޤަދްރި ވިލޭރޭ ކުރާ ދުޢާ' },
    arabic: 'اَللَّهُمَّ إِنَّكَ عَفُوٌّ (كَرِيْمٌ) تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي',
    transliteration: 'Allaahumma innaka `Afuwwun [Karimun], tu\'hibbul-`afwa fa`fu `annī.',
    translation: {
      en: 'O Allah, indeed You are Pardoning [Generous], You love pardon, so pardon me.\n\nAyesha (RA) said, "O Messenger of Allah (ﷺ), should I make du\'a on Lailatul Qadr?" Then he (ﷺ) taught me this du\'a. This du\'aa \'can be recited in the prostration of Salat on Laylat al-Qadr, before Salam, after salaam and on all other days and nights in all Salats and at normal times.',
      dv: 'އޭ ﷲ! ހަމަކަށަވަރުން އިބަރަސްކަލާނގެއީ ގިނަގިނައިން ޢަފޫކުރައްވާ (ދީލަތިވަންތަ) ރަސްކަލާނގެއެވެ. ޢަފޫކުރެއްވުމަށް އިބަރަސްކަލާނގެ ލޯބިކުރައްވަމުއެވެ. ފަހެ، މިއަޅާގެ ކިބައިން ޢަފޫކުރައްވާނދޭވެ!',
    },
    source: { type: 'hadith', reference: 'Sahih (Albani). Tirmidhi: 3513' },
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Sourced from the Masnun Dua dataset (islamicapi/masnun-dua); passed automated Arabic/EN/DV consistency checks but not yet checked by a qualified human reviewer - see CONTENT_REVIEW.md.',
    },
  },
  {
    id: 'masnun-312',
    type: 'dua',
    categoryId: 'fasting',
    title: { en: 'Moon Sighting Dua', dv: 'ހަނދު ފެނުމުން ކިޔާ ދުޢާ' },
    arabic: 'اَللَّهُمَّ أَهْلِلْهُ عَلَيْنَا بِالْيُمْنِ وَالْإِيْمَانِ وَالسَّلَامَةِ وَالْإِسْلَامِ رَبِّيْ وَرَبُّكَ اللَّهُ',
    transliteration: 'Allaahumma ahlilhu `alaina bil-yumni wal-iman, was-salamati wal-Islam, rabbi wa rabbuk Allah',
    translation: {
      en: 'O Allah, bring it over us with blessing and faith, and security and Islam. My Lord and your Lord is Allah.\n\nRasulullah (ﷺ) used to say this dua when he saw the new moon. It is masnun to recite this dua after seeing the new moon of Ramadan and all the months.',
      dv: 'އޭ ﷲ! އަޅަމެންގެ މައްޗަށް މި ހަނދު ބަރަކާތާއި، އީމާންކަމާއި، ސަލާމަތާއި، އިސްލާމްކަމާއެކު ފާޅުކުރައްވާނދޭވެ! (އޭ ހަނދާއެވެ!) ތިބާގެ ރައްބާއި އަހަރެންގެ ރައްބަކީ ﷲ އެވެ.',
    },
    source: { type: 'hadith', reference: 'Sahih. Tirmidhi: 3451' },
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Sourced from the Masnun Dua dataset (islamicapi/masnun-dua); passed automated Arabic/EN/DV consistency checks but not yet checked by a qualified human reviewer - see CONTENT_REVIEW.md.',
    },
  },
  {
    id: 'masnun-313',
    type: 'dua',
    categoryId: 'fasting',
    title: { en: 'Dua for Iftar (Iftar Dua)', dv: 'ރޯދަ ވީއްލާއިރު ކިޔާ ދުޢާ' },
    arabic: 'ذَهَبَ الظَّمَاءُ وَابْتَلَّتِ الْعُرُوْقُ وَثَبَتَ الْأَجْرُ إِنْ شَاءَ اللَّهُ',
    transliteration: 'Dhahabadh-dhama\'u wabtallatil-\'urooqu, wa thabatal-\'ajru \'inshaa\'Allah',
    translation: {
      en: 'The thirst is gone, the veins are moistened and the reward is confirmed, if Allah wills.\n\nNote that, the widely practiced hadith \'Allahumma laka samtu wa \'ala rizqika aftartu\' but, the hadith is da\'if (weak). [2]',
      dv: 'ކަރުހިއްކުން ފިލައިއްޖެއެވެ. އަދި ނާރުތައް ތެތްވެއްޖެއެވެ. އަދި ﷲ އިރާދަކުރެއްވިއްޔާ އަޖުރު ޘާބިތުވެއްޖެއެވެ.',
    },
    source: { type: 'hadith', reference: '[1] Hasan (Albani). Abu Dawud: 2357 [2] Weak (Albany). Abu Dawud: 2358' },
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Sourced from the Masnun Dua dataset (islamicapi/masnun-dua); passed automated Arabic/EN/DV consistency checks but not yet checked by a qualified human reviewer - see CONTENT_REVIEW.md.',
    },
  },
  {
    id: 'masnun-314',
    type: 'dua',
    categoryId: 'fasting',
    title: { en: 'Dua of Iftar', dv: 'ރޯދަ ވީއްލާ ވަގުތު ކުރާ ދުޢާ (ފާފަ ފުއްސެވުމަށް އެދި)' },
    arabic: 'اَللَّهُمَّ إِنِّي أَسْأَلُكَ بِرَحْمَتِكَ الَّتِي وَسِعَتْ كُلَّ شَيْءٍ أَنْ تَغْفِرَ لِي',
    transliteration: 'Allaahumma \'innee \'as\'aluka birahmatikal-latee wasi\'at kulla shay\'in \'an taghfira lee',
    translation: {
      en: 'O Allah, I ask You by Your mercy, which encompasses all things, that You forgive me.\n\nAbdullah bin Amr (RA) used to say this dua during Iftar.',
      dv: 'އޭ ﷲ! ހަމަކަށަވަރުން ކޮންމެ އެއްޗެއްގެ މައްޗަށް ތަނަވަސްވެގެންވާ އިބަރަސްކަލާނގެ ރަޙްމަތުން، މިއަޅާއަށް ފާފަ ފުއްސެވުމަށް އެދި ދަންނަވަމެވެ.',
    },
    source: { type: 'hadith', reference: 'Hasan (Hafiz Ibn Hazar). Takhrijul Adhkar, Sharhul Adhkar: 4/342' },
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Sourced from the Masnun Dua dataset (islamicapi/masnun-dua); passed automated Arabic/EN/DV consistency checks but not yet checked by a qualified human reviewer - see CONTENT_REVIEW.md.',
    },
  },
  {
    id: 'masnun-315',
    type: 'dua',
    categoryId: 'fasting',
    title: { en: 'Dua when insulted while fasting', dv: 'ރޯދައަށް ހުއްޓައި މީހަކު އެއްޗެހި ކިޔައިފިނަމަ ބުނާނެ ބަސް' },
    arabic: 'إِنِّي صَائِمٌ، إِنِّي صَائِمٌ',
    transliteration: 'Innee saa\'imun, \'innee saa\'imun',
    translation: {
      en: 'I am fasting. I am fasting.\n\nNarrated Abu Huraira (RA): The Messenger of Allah (ﷺ) said: Fasting is a shield; So if any one of you observes fasting, let him not commit adultery or foolishness; If someone fights him or insults him, let him say - (The dua is mentioned above)',
      dv: 'ހަމަކަށަވަރުން އަހަރެން މިހުރީ ރޯދައަށެވެ. ހަމަކަށަވަރުން އަހަރެން މިހުރީ ރޯދައަށެވެ.',
    },
    source: { type: 'hadith', reference: 'Bukhari: 1894' },
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Sourced from the Masnun Dua dataset (islamicapi/masnun-dua); passed automated Arabic/EN/DV consistency checks but not yet checked by a qualified human reviewer - see CONTENT_REVIEW.md.',
    },
  },
  {
    id: 'masnun-316',
    type: 'dua',
    categoryId: 'fasting',
    title: { en: 'Dua for Iftar at Someone\'s House', dv: 'މީހެއްގެ ގާތުން ރޯދަ ވީއްލައިފިނަމަ ކުރާ ދުޢާ' },
    arabic: 'أَفْطَرَ عِنْدَكُمُ الصَّائِمُونَ، وَأَكَلَ طَعَامَكُمُ الْأَبْرَارُ، وَصَلَّتْ عَلَيْكُمُ الْمَلَائِكَةُ',
    transliteration: 'Aftara \'indakumus-saa\'imoona, wa \'akala ta\'aamakumul-\'abraaru, wa sallat \'alaykumul-malaa\'ikah.',
    translation: {
      en: 'With you, those who are fasting have broken their fast, you have fed those who are righteous, and the angels recite their prayers upon you.',
      dv: 'ތިޔަބައިމީހުންގެ ގާތުން ރޯދަވެރިން ރޯދަ ވީއްލައިފިއެވެ. އަދި ހެޔޮލަފާ މީހުން ތިޔަބައިމީހުންގެ ކާނާއިން ކައިފިއެވެ. އަދި މަލާއިކަތުން ތިޔަބައިމީހުންގެ މައްޗަށް ދުޢާ ކުރައްވައިފިއެވެ (ނުވަތަ ކުރައްވާށިއެވެ).',
    },
    source: { type: 'hadith', reference: 'Sahih. Abu Dawud: 3854' },
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Sourced from the Masnun Dua dataset (islamicapi/masnun-dua); passed automated Arabic/EN/DV consistency checks but not yet checked by a qualified human reviewer - see CONTENT_REVIEW.md.',
    },
  },
];
