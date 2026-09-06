import type { Dua } from '../../../types/dua';

// Sourced from the Masnun Dua open dataset (github.com/islamicapi/masnun-dua)
// - see data/duas/CONTENT_REVIEW.md for the sourcing/verification pipeline
// and the human-review requirement that still applies to every item here.
export const DUA_ACCEPTANCE_DUAS: Dua[] = [
  {
    id: 'masnun-68',
    type: 'dua',
    categoryId: 'dua-acceptance',
    title: { en: 'Dua After Waking Up At Night (La Ilaha Illalahu Wa\'hdahu)', dv: 'ރޭގަނޑު ހޭލެވުމުން ކިޔާ ދުޢާ' },
    arabic: 'لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيْكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَىْءٍ قَدِيْرٌ‏.‏ اَلْحَمْدُ لِلَّهِ، وَسُبْحَانَ اللَّهِ، وَلَا إِلَهَ إِلَّا اللَّهُ، وَاللَّهُ أَكْبَرُ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ',
    transliteration: 'Laa ilaaha illAllahu Wa\'hdahu laa Sharika lahu Lahul mulku, wa lahul-\'hamdu wa huwa \'alaa kulli shay\'in Qadir. Alhamdulillah wa subhanallah wa laa ilaaha illAllahu wAllahu akbar wa laa \'hawla Walaa Quwata illa billah',
    translation: {
      en: 'None has the right to be worshipped but Allah. He is the Only One and has no partners. For Him is the Kingdom and all the praises are due for Him. He is Omnipotent. All the praises are for Allah. All the glories are for Allah. And none has the right to be worshipped but Allah, And Allah is Great And there is neither Might nor Power Except with Allah.\n\nThen says: O Allah! Forgive me. Or invokes (Allah), he will be responded to and if he performs ablution (and prays), his prayer will be accepted.',
      dv: 'ﷲ މެނުވީ ޙައްޤުވެގެން އަޅުކަމެއް ވެވޭ އިލާހަކު ނުވެއެވެ. އެކަލާނގެ އެއްކައުވަންތައެވެ. އެކަލާނގެއަށް ބައިވެރިޔަކު ނުވެއެވެ. ވެރިކަން މިލްކްވެގެންވަނީ އެކަލާނގެއަށެވެ. އަދި ހުރިހާ ޙަމްދެއް ވަނީ އެކަލާނގެއަށެވެ. އަދި އެކަލާނގެއީ ކޮންމެ ކަމެއްގެ މައްޗަށް ކުޅަދުންވަންތަ ރަސްކަލާނގެއެވެ. ﷲ އަށް ޙަމްދު ހުއްޓެވެ. އަދި ﷲ ގެ ހުސްޠާހިރުވަންތަކަމާއެވެ. އަދި ﷲ މެނުވީ ޙައްޤުވެގެން އަޅުކަމެއް ވެވޭ އިލާހަކު ނުވެއެވެ. އަދި ﷲ އީ އެންމެ ބޮޑު ރަސްކަލާނގެއެވެ. އަދި ﷲ ގެ ކިބައިން މެނުވީ (އެއްވެސް ކަމަކަށް) އާރެއް އަދި ބާރެއް ލިބިގެން ނުވެއެވެ.\n\nދެން (މިހެން ކިޔާފައި) އޭނާ: "އޭ ﷲ! މިއަޅާގެ ފާފަ ފުއްސަވާނދޭވެ!" މިފަދައިން ބުނެފިނަމަ، ނުވަތަ ދުޢާއެއްކޮށްފިނަމަ، އެ ދުޢާ އިޖާބަ ކުރެއްވޭނެއެވެ.',
    },
    source: { type: 'hadith', reference: 'Bukhari: 1154' },
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Sourced from the Masnun Dua dataset (islamicapi/masnun-dua); passed automated Arabic/EN/DV consistency checks but not yet checked by a qualified human reviewer - see CONTENT_REVIEW.md.',
    },
  },
  {
    id: 'masnun-72',
    type: 'dua',
    categoryId: 'dua-acceptance',
    title: { en: 'Dua of Yunus (La Ilaha Illa Anta Subhanaka)', dv: 'ޔޫނުސްގެފާނުގެ ދުޢާ (ލާ އިލާހަ އިއްލާ އަންތަ)' },
    arabic: 'لَا إِلَهَ إِلَّآ أَنتَ سُبْحٰنَكَ إِنِّى كُنْتُ مِنَ الظّٰلِمِينَ',
    transliteration: 'Laa \'ilaaha \'illaa \'Anta subhaanaka \'innee kuntu minadh-dhaalimeen',
    translation: {
      en: 'There is none worthy of worship but You, glory is to You. Surely, I was among the wrongdoers.\n\nWhenever Muslim calls (Allah) in this way, Allah responds to his call.',
      dv: 'އިބަ ރަސްކަލާނގެ މެނުވީ ޙައްޤުވެގެން އަޅުކަމެއް ވެވޭ އިލާހަކު ނުވެއެވެ. އިބަ ރަސްކަލާނގެ ހުސްޠާހިރުވަންތަކަމާއެވެ! ހަމަކަށަވަރުން އަނިޔާވެރިންގެ ތެރެއިން މިއަޅާ ވީމެވެ.\n\nމުސްލިމަކު މިފަދައިން (މި ދުޢާއިން) ﷲ އަށް ދުޢާކޮށްފިނަމަ، އެކަލާނގެ އެމީހެއްގެ ދުޢާ އިޖާބަ ކުރައްވާނެއެވެ.',
    },
    source: { type: 'hadith', reference: 'Sahih (Albani). Tirmidhi: 3505' },
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Sourced from the Masnun Dua dataset (islamicapi/masnun-dua); passed automated Arabic/EN/DV consistency checks but not yet checked by a qualified human reviewer - see CONTENT_REVIEW.md.',
    },
  },
  {
    id: 'masnun-73',
    type: 'dua',
    categoryId: 'dua-acceptance',
    title: { en: 'Dua for Hardship and Calamity', dv: 'މުޞީބާތެއް ޖެހުމުން ކިޔާ ދުޢާ' },
    arabic: 'إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُوْنَ اَللَّهُمَّ أْجُرْنِيْ فِي مُصِيْبَتِيْ وَأَخْلِفْ لِي خَيْرًا مِّنْهَا',
    transliteration: 'Innaa lillaahi wa \'innaa \'ilayhi raaji\'oon, Allaahumma\'-jurni fee museebatee wa \'akhliflee khayran minhaa',
    translation: {
      en: 'We are from Allah and unto Him we return. O Allah take me out of my plight and bring to me after it something better.\n\nAllah will give him something better than it in exchange.',
      dv: 'ހަމަކަށަވަރުން އަޅަމެންނީ ﷲ އަށް މިލްކްވެގެންވާ ބައެކެވެ. އަދި ހަމަކަށަވަރުން އަޅަމެން އެނބުރި ދިއުން ވަނީ އެކަލާނގެ ޙަޟްރަތަށެވެ. އޭ ﷲ! މިއަޅާއަށް ޖެހުނު މުޞީބާތުން މިއަޅާ ސަލާމަތް ކުރައްވާނދޭވެ! އަދި މިއަށްވުރެ ހެޔޮ ގޮތް މިއަޅާއަށް މިންވަރުކޮށްދެއްވާނދޭވެ!\n\n(މިފަދައިން ކިޔައިފި މީހާއަށް) އެއަށްވުރެ ހެޔޮ ގޮތް ﷲ މިންވަރުކުރައްވާނެއެވެ.',
    },
    source: { type: 'hadith', reference: 'Muslim: 918' },
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Sourced from the Masnun Dua dataset (islamicapi/masnun-dua); passed automated Arabic/EN/DV consistency checks but not yet checked by a qualified human reviewer - see CONTENT_REVIEW.md.',
    },
  },
  {
    id: 'masnun-74',
    type: 'dua',
    categoryId: 'dua-acceptance',
    title: { en: 'Dua for Greatest Names of Allah (Ism-E-Azam)', dv: 'އިސްމުލް އަޢުޡަމް މެދުވެރިކޮށް ކުރާ ދުޢާ' },
    arabic: 'اَللَّهُمَّ إِنِّي أَسْأَلُكَ بِأَنَّ أَشْهَدُ أَنَّكَ أَنْتَ اللَّهُ لَا إِلَهَ إِلَّا أَنْتَ الْأَحَدُ الصَّمَدُ الَّذِيْ لَمْ يَلِدْ وَلَمْ يُوْلَدْ وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ',
    transliteration: 'Allaahumma inni as-aluka bi anna ash-hadu annaka antallahu laa ilaaha illaa antal a\'hadus samadulladhi lam yalid wa lam yulad wa lam yakun lahu kufuwan a\'had',
    translation: {
      en: 'O Allah, I ask You, by the fact that I bear witness that You are Allah. There is none worthy of worship but You, the Only God, Independent of creation, Who was not begotten and begets not, and none is equal to Him.\n\nThen the Prophet (ﷺ) said, You have supplicated Allah using His Greatest Name, when asked with this name He gives, and when supplicated by this name he answers.',
      dv: 'އޭ ﷲ! ހަމަކަށަވަރުން މިއަޅާ އިބަރަސްކަލާނގެ ޙަޟްރަތުން އެދެމެވެ. އެއީ ހަމަކަށަވަރުން އިބަރަސްކަލާނގެއީ ﷲ ކަމަށް މިއަޅާ ހެކިވަމެވެ. އިބަރަސްކަލާނގެ މެނުވީ ޙައްޤުވެގެން އަޅުކަމެއް ވެވޭ އިލާހަކު ނުވެއެވެ. އިބަރަސްކަލާނގެއީ އެއްކައުވަންތަ، އެންމެހާ ތަކެތި އެކަށޭނގެއަށް ބޭނުންތެރިވެގެންވާ ރަސްކަލާނގެއެވެ. އެކަލާނގެއަށް ދަރިކަލަކު ލިބިވޮޑިގެންނުވެއެވެ. އަދި އެކަލާނގެ އުފެދިވޮޑިގެންނުވެއެވެ. އަދި އެކަލާނގެއާ އެއްފަދަވެގެންވާ ހަމައެކަކުވެސް ނުވެއެވެ.\n\nދެން ރަސޫލާ (ﷺ) ޙަދީޘްކުރެއްވިއެވެ: "ހަމަކަށަވަރުން އޭނާ ﷲ ގެ ޙަޟްރަތުގައި ދުޢާ އެކުރީ އެކަލާނގެ އެންމެ މަތިވެރި އިސްމުފުޅުންނެވެ. އެ އިސްމުފުޅުން ދުޢާކޮށްފިނަމަ އިޖާބަކުރައްވައެވެ. އަދި އެ އިސްމުފުޅުން ކަމަކަށް އެދިއްޖެނަމަ އެކަމެއް ދެއްވައެވެ."',
    },
    source: { type: 'hadith', reference: 'Sahih (Albani). Nasai: 1300' },
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Sourced from the Masnun Dua dataset (islamicapi/masnun-dua); passed automated Arabic/EN/DV consistency checks but not yet checked by a qualified human reviewer - see CONTENT_REVIEW.md.',
    },
  },
  {
    id: 'masnun-75',
    type: 'dua',
    categoryId: 'dua-acceptance',
    title: { en: 'Dua After Tashahhud (Allahumma inni as aluka)', dv: 'ތަޝައްހުދަށްފަހު ކިޔާ ދުޢާ (އިސްމުލް އަޢުޡަމް)' },
    arabic: 'اَللَّهُمَّ إِنِّي أَسْأَلُكَ بِأَنَّ لَكَ الْحَمْدَ لَا إِلَهَ إِلَّا أَنْتَ الْمَنَّانُ، بَدِيعُ السَّمَوَاتِ وَالْأَرْضِ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ، يَا حَيُّ يَا قَيُّوْمُ',
    transliteration: 'Allaahumma inni as\'aluka bi-anna lakal-hamda, laa ilaaha illaa antal-mannaanu badi\'us-samawaati wal-ardi, yaa dhal-jalaali wal-ikraam! Yaa hayyu yaa qayyum',
    translation: {
      en: 'O Allah, I ask Thee by virtue of the fact that praise is due to Thee, there is no deity but Thou, Who showest favour and beneficence, the Originator of the Heavens and the earth, O Lord of Majesty and Splendour, O Living One, O Eternal One.\n\nThen the Prophet (ﷺ) said: \'Do you know what he has supplicated with?\' They said: "Allah (SWT) and His Messenger know best." He said: \'By the One in Whose Hand is my soul, he called upon Allah by His greatest Name, which, if He is called by it, He responds, and if He is asked by it, He gives.',
      dv: 'އޭ ﷲ! ހަމަކަށަވަރުން މިއަޅާ އިބަރަސްކަލާނގެ ޙަޟްރަތުން އެދެމެވެ. އެއީ ހުރިހާ ޙަމްދެއް ވަނީ އިބަރަސްކަލާނގެއަށް ކަމުގައި ވާތީއެވެ. އިބަރަސްކަލާނގެ މެނުވީ ޙައްޤުވެގެން އަޅުކަމެއް ވެވޭ އިލާހަކު ނުވެއެވެ. އިބަރަސްކަލާނގެއީ ގިނަގުނަ ނިޢުމަތްތައް ދެއްވާ، އިސްވެދިޔަ މިސާލަކާ ނުލައި އުޑުތަކާއި ބިން އުފެއްދެވި ރަސްކަލާނގެއެވެ. އޭ ޖަބާރުވަންތަ، މާތް ރަސްކަލާކޮ! އޭ ދިރިދެމިވޮޑިގެންވާ، އަބަދަށް ޤާއިމުވެވޮޑިގެންވާ ރަސްކަލާކޮ!\n\nދެން ރަސޫލާ (ﷺ) ޙަދީޘްކުރެއްވިއެވެ: "އޭނާ ދުޢާ އެ ކުރީ ކޮން އެއްޗަކުންކަން ތިޔަބައިމީހުންނަށް އެނގޭ ހެއްޔެވެ؟" އެބައިމީހުން ދެންނެވިއެވެ: "ﷲ އާއި އެކަލާނގެ ރަސޫލާ (ﷺ) ދެނެވަޑައިގަތުން ބޮޑެވެ." ޙަދީޘްކުރެއްވިއެވެ: "ތިމަންކަލޭގެފާނުގެ ފުރާނަފުޅު އެފަރާތެއްގެ އަތްޕުޅުގައިވާ ފަރާތް ގަންދީ ވިދާޅުވަމެވެ. ހަމަކަށަވަރުން އޭނާ ﷲ ގެ ޙަޟްރަތުގައި ދުޢާ އެކުރީ އެކަލާނގެ އެންމެ މަތިވެރި އިސްމުފުޅުންނެވެ. އެ އިސްމުފުޅުން ދުޢާކޮށްފިނަމަ އިޖާބަކުރައްވައެވެ. އަދި އެ އިސްމުފުޅުން ކަމަކަށް އެދިއްޖެނަމަ އެކަމެއް ދެއްވައެވެ."',
    },
    source: { type: 'hadith', reference: 'Sahih (Albani). Nasai: 1300' },
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Sourced from the Masnun Dua dataset (islamicapi/masnun-dua); passed automated Arabic/EN/DV consistency checks but not yet checked by a qualified human reviewer - see CONTENT_REVIEW.md.',
    },
  },
];
