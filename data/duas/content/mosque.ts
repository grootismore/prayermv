import type { Dua } from '../../../types/dua';

// Sourced from the Masnun Dua open dataset (github.com/islamicapi/masnun-dua)
// - see data/duas/CONTENT_REVIEW.md for the sourcing/verification pipeline
// and the human-review requirement that still applies to every item here.
export const MOSQUE_DUAS: Dua[] = [
  {
    id: 'masnun-173',
    type: 'dua',
    categoryId: 'mosque',
    title: { en: 'Dua for going to the Mosque (Dua e noor)', dv: 'ޖިމާޢުވުމުގެ ކުރިން ކިޔާ ދުޢާ' },
    arabic: 'اَللَّهُمَّ اجْعَلْ فِي قَلْبِيْ نُوْرًا وَّفِي لِسَانِىْ نُوْرًا وَّاجْعَلْ فِي سَمْعِىْ نُوْرًا وَّاجْعَلْ فِي بَصَرِىْ نُوْرًا وَّاجْعَلْ مِنْ خَلْفِي نُوْرًا وَّمِنْ أَمَامِيْ نُوْرًا وَّاجْعَلْ مِنْ فَوْقِىْ نُوْرًا وَّمِنْ تَحْتِىْ نُوْرًا اَللَّهُمَّ أَعْطِنِىْ نُوْرًا',
    transliteration: 'Allaahumma-j‛al fee qalbee noor-an, wa fee lisaanee noor-an, waj‛al fee sam‛ee noor-an, waj‛al fee basaree noor-an, waj‛al min khalfee noor-an, wamin amaamee noor-an, waj‛al min fawqee noor-an, wa min t\'ahtee noor-an, Allaahumma a‛tinee noor-an',
    translation: {
      en: 'O Allah, place within my heart light, and upon my tongue light, and within my ears light, and within my eyes light, and place behind me light, and in front of me light, and above me light, and beneath me light. O Allah, bestow upon me light.',
      dv: 'ﷲ ގެ އިސްމުފުޅުން ފަށަމެވެ. އޭ ﷲ! އަޅަމެންގެ ކިބައިން ޝައިޠާނާ ދުރުކުރައްވާނދޭވެ! އަދި އިބަރަސްކަލާނގެ އަޅަމެންނަށް ދެއްވާ އެއްޗެއްގެ (ދަރިއެއްގެ) ކިބައިންވެސް ޝައިޠާނާ ދުރުކުރައްވާނދޭވެ!',
    },
    source: { type: 'hadith', reference: 'Bukhari: 6316' },
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Sourced from the Masnun Dua dataset (islamicapi/masnun-dua); passed automated Arabic/EN/DV consistency checks but not yet checked by a qualified human reviewer - see CONTENT_REVIEW.md.',
    },
  },
  {
    id: 'masnun-174',
    type: 'dua',
    categoryId: 'mosque',
    title: { en: 'Dua For Going To The Masjid', dv: 'ރުޅި އައުމުން ކިޔާ ދުޢާ' },
    arabic: 'اَللَّهُمَّ اجْعَلْ فِي قَلْبِي نُورًا، وَفِي لِسَانِي نُورًا، وَفِي سَمْعِي نُورًا، وَفِي بَصَرِي نُورًا، وَمِنْ فَوْقِي نُورًا، وَمِنْ تَحْتِي نُورًا، وَعَنْ يَمِينِي نُورًا، وَعَنْ شِمَالِي نُورًا، وَمِنْ أَمَامِي نُورًا، وَمِنْ خَلْفِي نُورًا، وَاجْعَلْ فِي نَفْسِي نُورًا، وَأَعْظِمْ لِي نُورًا، وَعَظِّمْ لِي نُورًا، وَاجْعَلْ لِي نُورًا، وَاجْعَلْنِي نُورًا، اَللَّهُمَّ أَعْطِنِي نُورًا، وَاجْعَلْ فِي عَصَبِي نُورًا، وَفِي لَحْمِي نُورًا، وَفِي دَمِي نُورا، وَفِي شَعْرِي نُورًا، وَفِي بَشَرِي نُورًا',
    transliteration: 'Allaahummaj\'al fee qalbee nooran, wa fee lisaaanee nooran, wa fee sam\'ee nooran, wa fee basaree nooran, wa min fawqee nooran, wa min tahtee nooran, wa \'an yameenee nooran, wa \'an shimaalee nooran, wa min \'amaamee nooran, wa min khalfee nooran, waj\'al fee nafsee nooran, wa \'a\'dhim lee nooran, wa \'adhdhim lee nooran, waj\'al lee nooran, waj\'alnee nooran, Allaahumma \'a\'tinee nooran, waj\'al fee \'asabee nooran, wafee lahmee nooran, wafee damee nooran, wa fee sha\'ree nooran, wa fee basharee nooran.',
    translation: {
      en: 'O Allah, place light in my heart, and on my tongue light, and in my ears light and in my sight light, and above me light, and below me light, and to my right light, and to my left light, and before me light and behind me light. Place in my soul light. Magnify for me light, and amplify for me light. Make for me light and make me a light. O Allah, grant me light, and place light in my nerves, and in my body light and in my blood light and in my hair light and in my skin light.',
      dv: 'ނަހުލުއްނެތިގެންވާ ޝައިޠާނާގެ ކިބައިން ރައްކާތެރިކޮށްދެއްވުން އެދި ﷲ ގެ ޙަޟްރަތުން ޕަނާހަށް އެދެމެވެ.',
    },
    source: { type: 'hadith', reference: 'Bukhari: 6316' },
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Sourced from the Masnun Dua dataset (islamicapi/masnun-dua); passed automated Arabic/EN/DV consistency checks but not yet checked by a qualified human reviewer - see CONTENT_REVIEW.md.',
    },
  },
  {
    id: 'masnun-177',
    type: 'dua',
    categoryId: 'mosque',
    title: { en: 'Dua To Enter Mosque (Rabbighfirli dhunubi)', dv: 'މަޖިލިސް ނިންމާލަމުން ކިޔާ ދުޢާ' },
    arabic: 'اَللَّهُمَّ اغْفِرْ لِي ذُنُوْبِي وَافْتَحْ لِي أَبْوَابَ رَحْمَتِكَ',
    transliteration: 'Rabbig-firli dhunubi waftah li abwaaba rahmatik',
    translation: {
      en: 'O Allah, forgive me my sins and open to me the gates of Your mercy.',
      dv: 'އޭ ﷲ! އިބަރަސްކަލާނގެ ހުސްޠާހިރުވަންތަކަމާއެވެ! އަދި ޙަމްދު ހުއްޓެވެ. އިބަރަސްކަލާނގެ ފިޔަވައި ޙައްޤުވެގެން އަޅުކަމެއް ވެވޭ އިލާހަކު ނުވާކަމަށް މިއަޅާ ހެކިވަމެވެ. އިބަރަސްކަލާނގެ ޙަޟްރަތުން ފާފަ ފުއްސެވުމަށް އެދެމެވެ. އަދި އިބަރަސްކަލާނގެ ޙަޟްރަތަށް ތައުބާވަމެވެ.',
    },
    source: { type: 'hadith', reference: 'Sahih (Albani). Ibn Majah: 771' },
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Sourced from the Masnun Dua dataset (islamicapi/masnun-dua); passed automated Arabic/EN/DV consistency checks but not yet checked by a qualified human reviewer - see CONTENT_REVIEW.md.',
    },
  },
  {
    id: 'masnun-178',
    type: 'dua',
    categoryId: 'mosque',
    title: { en: 'Dua Before Entering The Mosque (Auzubillah)', dv: 'ހުރިހާ މަޖިލީހެއް ނިންމާލަމުން ކުރާ ދުޢާ' },
    arabic: 'أَعُوْذُ بِاللَّهِ الْعَظِيمِ وَبِوَجْهِهِ الْكَرِيمِ وَسُلْطَانِهِ الْقَدِيْمِ مِنَ الشَّيْطَانِ الرَّجِيْمِ، بِسْمِ اللَّهِ وَالصَّلَاةُ وَالسَّلَامُ عَلَى رَسُوْلِ اللَّهِ اَللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ',
    transliteration: 'A\'oodhu billahil-Aatheem wa bi wajhihil-kareem wa sultanihil-qadeem minash-shaytanir-rajeem, bismil-lahi, wassalatu wassalamu \'Aala rasoolil-lah, Allaahumma iftah lee abwaaba rahmatik',
    translation: {
      en: 'I take refuge with Allah, The Supreme and with His Noble Face, and His eternal authority from the accursed devil. In the name of Allah, and prayers and peace be upon the Messenger of Allah (ﷺ). O Allah, open the gates of Your mercy for me.',
      dv: 'އޭ ﷲ! އިބަރަސްކަލާނގެ ހުސްޠާހިރުވަންތަކަމާއެވެ! އަދި ޙަމްދު ހުއްޓެވެ. އިބަރަސްކަލާނގެ ފިޔަވައި ޙައްޤުވެގެން އަޅުކަމެއް ވެވޭ އިލާހަކު ނުވާކަމަށް މިއަޅާ ހެކިވަމެވެ. އިބަރަސްކަލާނގެ ޙަޟްރަތުން ފާފަ ފުއްސެވުމަށް އެދެމެވެ. އަދި އިބަރަސްކަލާނގެ ޙަޟްރަތަށް ތައުބާވަމެވެ.',
    },
    source: { type: 'hadith', reference: 'Sahih (Albani). Abu Dawud: 465, 466' },
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Sourced from the Masnun Dua dataset (islamicapi/masnun-dua); passed automated Arabic/EN/DV consistency checks but not yet checked by a qualified human reviewer - see CONTENT_REVIEW.md.',
    },
  },
  {
    id: 'masnun-181',
    type: 'dua',
    categoryId: 'mosque',
    title: { en: 'Dua Upon Leaving The Mosque (Allahumma Ajirni)', dv: 'ދައްޖާލުގެ ފިތުނައިން ރައްކާތެރިވުމަށް ކިޔާ ދުޢާ' },
    arabic: 'اَللَّهُمَّ أَجِرْنِيْ مِنَ الشَّيْطَانِ الرَّجِيْمِ',
    transliteration: 'Allaahumma ajirni minash shaitaanir rajeem',
    translation: {
      en: 'O Allah, protect me from Satan the outcast.',
      dv: '(ކަހަފް ސޫރަތުގެ ފުރަތަމަ ١٠ އާޔަތް ކިޔަވާށެވެ)',
    },
    source: { type: 'hadith', reference: 'Sahih (Ibn Hibban). Ibn Hibban: 2047' },
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Sourced from the Masnun Dua dataset (islamicapi/masnun-dua); passed automated Arabic/EN/DV consistency checks but not yet checked by a qualified human reviewer - see CONTENT_REVIEW.md.',
    },
  },
  {
    id: 'masnun-182',
    type: 'dua',
    categoryId: 'mosque',
    title: { en: 'Leaving Mosque Dua', dv: '"އަހަރެން ﷲ އަށްޓަކައި ތިބާ ދެކެ ލޯބިވަމޭ" ބުނާ މީހާއަށް ކުރާ ދުޢާ' },
    arabic: 'اَللَّهُمَّ اعْصِمْنِى مِنَ الشَّيْطَانِ الرَّجِيْمِ',
    transliteration: 'Allaahumma aa\'simni minash shaitaanir rajeem',
    translation: {
      en: 'O Allah, protect me from Satan the outcast.',
      dv: 'އެފަރާތަކަށްޓަކައި ތިބާ ތިމަންނާ ދެކެ ލޯބިވީ ފަރާތް (ﷲ)، ތިބާ ދެކެ ލޯބިވެވޮޑިގަންނަވާށިއެވެ!',
    },
    source: { type: 'hadith', reference: 'Sahih (Albani). Ibn Majah: 773' },
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Sourced from the Masnun Dua dataset (islamicapi/masnun-dua); passed automated Arabic/EN/DV consistency checks but not yet checked by a qualified human reviewer - see CONTENT_REVIEW.md.',
    },
  },
  {
    id: 'masnun-184',
    type: 'dua',
    categoryId: 'mosque',
    title: { en: 'Dua for the one who announces lost items in the mosque', dv: 'ދަރަނި އަދާކޮށްދިން މީހާއަށް ކުރާ ދުޢާ' },
    arabic: 'لَا رَدَّهَا اللَّهُ عَلَيْكَ',
    transliteration: 'laa raddahAllahu \'alaik',
    translation: {
      en: 'May Allah not return it to you.\n\nThis is because the mosques were not built for this purpose.',
      dv: 'ﷲ ތިބާގެ އަހުލުވެރިންނަށާއި، ތިބާގެ މުދަލުގައި ބަރަކާތް ލައްވާށިއެވެ! ހަމަކަށަވަރުން ދަރަނީގެ ޖަޒާއަކީ (އެކަމަށް) ޙަމްދުކުރުމާއި (ޝުކުރުއަދާކުރުމާއި)، އެ އަދާކުރުމެވެ.',
    },
    source: { type: 'hadith', reference: 'Sahih (Albani). Tirmidhi: 1321' },
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Sourced from the Masnun Dua dataset (islamicapi/masnun-dua); passed automated Arabic/EN/DV consistency checks but not yet checked by a qualified human reviewer - see CONTENT_REVIEW.md.',
    },
  },
  {
    id: 'masnun-185',
    type: 'dua',
    categoryId: 'mosque',
    title: { en: 'Dua for the person who trades in the mosque', dv: 'ޝިރުކަށް ބިރުގަންނަ މީހާ ކިޔާ ދުޢާ' },
    arabic: 'لَا أَرْبَحَ اللَّهُ تِجَارَتَكَ',
    transliteration: 'laa arba\'ha Allahu tijaarataka',
    translation: {
      en: 'May Allah not profit your business.\n\nThis is because the mosques were not built for this purpose.',
      dv: 'އޭ ﷲ! ހަމަކަށަވަރުން މިއަޅާ ދެނެހުރެ އިބަރަސްކަލާނގެއާ ޝިރުކުކުރުމުން ރައްކާތެރިކޮށްދެއްވުން އެދި އިބަރަސްކަލާނގެ ޙަޟްރަތުން ޕަނާހަށް އެދެމެވެ. އަދި މިއަޅާއަށް ނޭނގި ކުރެވޭ (ޝިރުކުގެ) ކަންކަމުން ފާފަ ފުއްސެވުމަށް އެދެމެވެ.',
    },
    source: { type: 'hadith', reference: 'Sahih (Albani). Tirmidhi: 1321' },
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Sourced from the Masnun Dua dataset (islamicapi/masnun-dua); passed automated Arabic/EN/DV consistency checks but not yet checked by a qualified human reviewer - see CONTENT_REVIEW.md.',
    },
  },
];
