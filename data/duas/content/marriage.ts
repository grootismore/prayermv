import type { Dua } from '../../../types/dua';

// Sourced from the Masnun Dua open dataset (github.com/islamicapi/masnun-dua)
// - see data/duas/CONTENT_REVIEW.md for the sourcing/verification pipeline
// and the human-review requirement that still applies to every item here.
export const MARRIAGE_DUAS: Dua[] = [
  {
    id: 'masnun-390',
    type: 'dua',
    categoryId: 'marriage',
    title: { en: 'Khutbah for Nikah (Khutbah al-Hajah)', dv: 'ކައިވެނީގެ ޚުޠުބާ (ޚުޠުބަތުލް ޙާޖާ)' },
    arabic: 'إِنَّ الْحَمْدَ لِلَّهِ نَحْمَدُهُ وَنَسْتَعِينُهُ وَنَسْتَغْفِرُهُ وَنَعُوذُ بِاللَّهِ مِنْ شُرُورِ أَنْفُسِنَا وَمِنْ سَيِّئَاتِ أَعْمَالِنَا، مَنْ يَهْدِهِ اللَّهُ فَلَا مُضِلَّ لَهُ وَمَنْ يُضْلِلْ فَلَا هَادِيَ لَهُ أَشْهَدُ أَنْ لَّا إِلَهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ حَقَّ تُقَاتِهِ وَلَا تَمُوتُنَّ إِلَّا وَأَنْتُمْ مُّسْلِمُونَ يَا أَيُّهَا النَّاسُ اتَّقُوا رَبَّكُمُ الَّذِي خَلَقَكُمْ مِّن نَّفْسٍ وَاحِدَةٍ وَخَلَقَ مِنْهَا زَوْجَهَا وَبَثَّ مِنْهُمَا رِجَالًا كَثِيرًا وَنِسَاءً ۚ وَاتَّقُوا اللَّهَ الَّذِي تَسَاءَلُونَ بِهِ وَالْأَرْحَامَ ۚ إِنَّ اللَّهَ كَانَ عَلَيْكُمْ رَقِيبًا يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَقُولُوا قَوْلًۭا سَدِيدًا يُصْلِحْ لَكُمْ أَعْمَالَكُمْ وَيَغْفِرْ لَكُمْ ذُنُوبَكُمْ وَمَنْ يُطِعِ اللَّهَ وَرَسُولَهُ فَقَدْ فَازَ فَوْزًا عَظِيمًا',
    transliteration: 'Innal-hamda lillaah nahmaduhu wa nasta‛eenuhu wa nastaghfiruhu, wa na‛oodhu billaahi min shuroori anfusinaa wa min sayyi’aati a‛maalinaa, man yahdih-illaahu fa laa mudilla lah, wa man yudlil fa laa haadiya lah, ash-hadu an laa ilaaha ill-Allaahu, wa ash-hadu anna muhammadan ‛abduhu wa rasooluh Yaa ayyuhal-ladheena aamanut-taqullaaha ‘haqqa tuqaatihi walaa tamootunna illaa wa antum muslimoon yaa ayyuhan-naasut-taqoo rabbakum-ul-ladhee khalaqakum min nafsin wa’hidatin, wa khalaqa minhaa zawjahaa, wa bath-tha minhumaa rijaalan katheeran wanisaa’-an, wat-taqullaahal-ladhee tasaa’aloona bihi wal ar’haam, inn-Allaaha kaana ‛alaykum raqeebaa Yaa ayyuhal-ladheena aamanut-taqullaaha wa qooloo qawlan sadeeda, yusli’h lakum a‛maalakum wa yaghfir lakum dhunoobakum, wa man yuti‛illaaha wa rasoolahu faqad faaza fawz-an ‛azeemaa',
    translation: {
      en: 'Indeed all Praise is for Allah, we praise Him, we seek His help and we ask His forgiveness. We seek refuge with Allah from the evil of our own souls and from the evil of our actions. Whoever Allah guides will never be led astray,and whomever Allah leads astray, no one can guide. I bear witness that there is no deity worthy of worship except Allah, and I bear witness that Muhammad is His slave and Messenger. (then reads the following verses) O you who believe! Fear Allah as He should be feared, and die not except as Muslims; [1] O Mankind! Fear your Lord, Who created you from a single person, and from him created his wife, and from them he created many men and women, and fear Allah through Whom you demand your mutual (rights). Surely, Allah is Ever Watchful over you; [2] O you who believe! Fear Allah, and speak (always) the truth He will direct you to do righteous good deeds and will forgive you your sins. And whosoever obeys Allah and His Messenger has indeed achieved a great success. [3]\n\nThen he would talk about his needs. [4]',
      dv: 'ހަމަކަށަވަރުން ޙަމްދު ހުރީ ﷲ އަށެވެ. އަޅަމެން އެކަލާނގެއަށް ޙަމްދުކުރަމެވެ. އަދި ވާގިއެދެނީވެސް އެކަލާނގެ ޙަޟްރަތުންނެވެ. އަދި ފާފަ ފުއްސެވުމަށް އެދެނީވެސް އެކަލާނގެ ޙަޟްރަތުންނެވެ. އަދި އަޅަމެންގެ ނަފްސުތަކުގެ ނުބައިކަމުންނާއި، އަޅަމެންގެ ޢަމަލުތަކުގެ ނުބައިކަމުން ރައްކާތެރިކޮށްދެއްވުން އެދި ﷲ ގެ ޙަޟްރަތުން ދަންނަވަމެވެ. ﷲ ތެދުމަގު ދައްކަވައިފި މީހަކު މަގުފުރައްދާނެ މީހަކު ނުވެއެވެ. އަދި އެކަލާނގެ މަގުފުރައްދަވައިފި މީހަކަށް ތެދުމަގު ދައްކާނެ މީހަކު ނުވެއެވެ. އަދި ﷲ މެނުވީ ޙައްޤުވެގެންވާ އިލާހަކު ނުވާކަމަށް މިއަޅާ ހެކިވަމެވެ. އަދި މުޙައްމަދުގެފާނީ އެކަލާނގެ އަޅާ ކަމަށާއި ރަސޫލާކަމަށް މިއަޅާ ހެކިވަމެވެ. (ދެން ކީރިތި ޤުރްއާނުގެ އާލުޢިމްރާން ސޫރަތުގެ ١٠٢ ވަނަ އާޔަތާއި، ނިސާ ސޫރަތުގެ ١ ވަނަ އާޔަތާއި، އަޙްޒާބު ސޫރަތުގެ ٧٠ އަދި ٧١ ވަނަ އާޔަތް ކިޔަވާށެވެ).',
    },
    source: { type: 'quran', reference: '[1] Surah Al Imran : 3:102 [2] Sura An-nisa : 4:1 [3] Suah Al-Ahjab: 33:70-71 Sohih(albani) Timiji : 1105' },
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Sourced from the Masnun Dua dataset (islamicapi/masnun-dua); passed automated Arabic/EN/DV consistency checks but not yet checked by a qualified human reviewer - see CONTENT_REVIEW.md.',
    },
  },
  {
    id: 'masnun-391',
    type: 'dua',
    categoryId: 'marriage',
    title: { en: 'Dua for Righteous Family (Marriage Dua)', dv: 'ހެޔޮލަފާ ޢާއިލާއަކަށް އެދި ކުރާ ދުޢާ' },
    arabic: 'رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا',
    transliteration: 'Rabbanaa hab lanaa min azwaajinaa wa zurriyyaatinaa qurrata a\'yunin waj\'alnaa lil-muttaqeena imaamaa.',
    translation: {
      en: 'Our Lord, grant us from among our wives and offspring comfort to our eyes and make us an example for the righteous.',
      dv: 'އޭ އަޅަމެންގެ ވެރިރަސްކަލާނކޮ! އަޅަމެންގެ އަނބިންގެ (ނުވަތަ ފިރިންގެ) ކިބައިންނާއި، އަޅަމެންގެ ދަރިންގެ ކިބައިން، އަޅަމެންގެ ލޯތަކަށް ފިނިކަން ދެއްވާނދޭވެ! އަދި ތަޤްވާވެރިންނަށް އިމާމުން ކަމުގައި އަޅަމެން ލައްވާނދޭވެ!',
    },
    source: { type: 'quran', reference: 'Surah Furqan 25:74' },
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Sourced from the Masnun Dua dataset (islamicapi/masnun-dua); passed automated Arabic/EN/DV consistency checks but not yet checked by a qualified human reviewer - see CONTENT_REVIEW.md.',
    },
  },
  {
    id: 'masnun-392',
    type: 'dua',
    categoryId: 'marriage',
    title: { en: 'Dua for a Newly Married Couple (Marriage Dua)', dv: 'އަލަށް ކައިވެނިކުރާ ދެމީހުންނަށް ކުރާ ދުޢާ' },
    arabic: 'بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ',
    transliteration: 'BaarakAllaahu laka, wa baaraka \'alayka, wa jama\'a baynakumaa fee khayr',
    translation: {
      en: 'May Allah bless you, and shower His blessings upon you, and join you together in goodness.\n\nAbu Hurairah (RA) said, "The Messenger of Allah (ﷺ) used to say this to congratulate the newlyweds."',
      dv: 'ﷲ ތިބާއަށް ބަރަކާތް ލައްވާށިއެވެ! އަދި ތިބާގެ މައްޗަށް ބަރަކާތް ލައްވާށިއެވެ! އަދި އެ ދެމީހުން ހެޔޮގޮތުގައި އެއްކުރައްވާށިއެވެ!',
    },
    source: { type: 'hadith', reference: 'Sahih (Albani). Abu Dawud: 2130' },
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Sourced from the Masnun Dua dataset (islamicapi/masnun-dua); passed automated Arabic/EN/DV consistency checks but not yet checked by a qualified human reviewer - see CONTENT_REVIEW.md.',
    },
  },
  {
    id: 'masnun-393',
    type: 'dua',
    categoryId: 'marriage',
    title: { en: 'Dua for Accepting Wife or Husband', dv: 'އަނބިމީހާ ނުވަތަ ފިރިމީހާ ގާތަށް ދިއުމުގެ ކުރިން ކިޔާ ދުޢާ' },
    arabic: 'اَللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَهَا وَخَيْرَ مَا جَبَلْتَهَا عَلَيْهِ وَأَعُوْذُ بِكَ مِنْ شَرِّهَا وَمِنْ شَرِّ مَا جَبَلْتَهَا عَلَيْهِ',
    transliteration: 'Allaahumma \'innee \'as\'aluka khayrahaa wa khayra ma jabaltahaa \'alayhi wa \'A\'oodhu bika min sharrihaa wa min sharri maa jabaltahaa \'alayhi',
    translation: {
      en: 'O Allah, I ask You for the goodness of her and the goodness upon which You have created her, and I seek refuge in You from the evil of her and from the evil upon which You have created her.',
      dv: 'އޭ ﷲ! ހަމަކަށަވަރުން މިއަޅާ އިބަރަސްކަލާނގެ ޙަޟްރަތުން އެދެނީ، އޭނާގެ (އެބަހީ: އަނބިމީހާގެ) ހެޔޮކަމަށާއި، އިބަރަސްކަލާނގެ އޭނާ އުފެއްދެވި ފިޠުރަތުގައިވާ ހެޔޮކަމަށެވެ. އަދި އޭނާގެ ނުބައިކަމުންނާއި، އިބަރަސްކަލާނގެ އޭނާ އުފެއްދެވި ފިޠުރަތުގައިވާ ނުބައިކަމުން ރައްކާތެރިކޮށްދެއްވުން އެދި، އިބަރަސްކަލާނގެ ޙަޟްރަތުން ދަންނަވަމެވެ.',
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
    id: 'masnun-394',
    type: 'dua',
    categoryId: 'marriage',
    title: { en: 'Dua for First Wedding Night', dv: 'ކައިވެނީގެ ރޭ ކުރާ ދުޢާ' },
    arabic: 'اَللَّهُمَّ بَارِكْ لِي فِي أَهْلِي، وَبَارِكْ لِأَهْلِي فِيَّ اَللَّهُمَّ ارْزُقْهُمْ مِنِّي، وَارْزُقْنِي مِنْهُمْ، اَللَّهُمَّ اجْمَعْ بَيْنَنَا مَا جَمَعْتَ فِي خَيْرٍ، وفَرِّقْ بَيْنَنَا إِذَا فَرَّقْتَ فِي خَيْرٍ',
    transliteration: 'Allaahumma barik li fi ahli, wa barik li ahli fiyya. Allahumar-zuqhum minni, war zuqni minhum. Allahum-majma’ bainana ma jama’ta fi khairin. wa farriq bainana idha far-raqta fi khair',
    translation: {
      en: 'Ya Allah! Give barakah for me in my family and give barakah to me for my family. Ya Allah! give provision to them from me and give provision to me from them. Ya Allah! collect all the good in between us which you collected and if you separate any good from us then separate it with good.',
      dv: 'އޭ ﷲ! މިއަޅާގެ އަހުލުވެރިންގެ (އަނބިމީހާގެ) ކިބައިގައި މިއަޅާއަށް ބަރަކާތް ލައްވާނދޭވެ! އަދި މިއަޅާގެ ކިބައިގައި އަހުލުވެރިންނަށް ބަރަކާތް ލައްވާނދޭވެ! އޭ ﷲ! މިއަޅާގެ ފަރާތުން އެމީހުންނަށް ރިޒޤު ދެއްވާނދޭވެ! އަދި އެމީހުންގެ ފަރާތުން މިއަޅާއަށް ރިޒޤު ދެއްވާނދޭވެ! އޭ ﷲ! އަޅަމެން އެއްކުރައްވާނަމަ ހެޔޮގޮތުގައި އެއްކުރައްވާނދޭވެ! އަދި ވަކިކުރައްވާނަމަ ހެޔޮގޮތުގައި ވަކިކުރައްވާނދޭވެ!',
    },
    source: { type: 'hadith', reference: 'Sahih (Albani). Adabuj Zifaf: 24' },
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Sourced from the Masnun Dua dataset (islamicapi/masnun-dua); passed automated Arabic/EN/DV consistency checks but not yet checked by a qualified human reviewer - see CONTENT_REVIEW.md.',
    },
  },
  {
    id: 'masnun-395',
    type: 'dua',
    categoryId: 'marriage',
    title: { en: 'Dua Before Sexual Intercourse', dv: 'ޖިމާޢުވުމުގެ ކުރިން ކިޔާ ދުޢާ' },
    arabic: 'بِاسْمِ اللَّهِ اَللَّهُمَّ جَنِّبْنَا الشَّيْطَانَ وَجَنِّبِ الشَّيْطَانَ مَا رَزَقْتَنَا',
    transliteration: 'Bismillaahi, Allaahumma jannibnash-Shaytaana, wa jannibish-Shaytaana maa razaqtanaa',
    translation: {
      en: 'With the Name of Allah. O Allah, keep the I Devil away from us and keep the Devil away from that which You provide for us.\n\nThe Prophet (ﷺ) said, “If anyone says this before sexual intercourse is consummated, the Shaytaan will not harm him if a child is born to them.',
      dv: 'ﷲ ގެ އިސްމުފުޅުން (ފަށަމެވެ). އޭ ﷲ! އަޅަމެންގެ ކިބައިން ޝައިޠާނާ ދުރުކުރައްވާނދޭވެ! އަދި އަޅަމެންނަށް އިބަރަސްކަލާނގެ ދެއްވާ އެއްޗެއްގެ (ދަރިއެއްގެ) ކިބައިންވެސް ޝައިޠާނާ ދުރުކުރައްވާނދޭވެ!',
    },
    source: { type: 'hadith', reference: 'Bukhari: 141' },
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Sourced from the Masnun Dua dataset (islamicapi/masnun-dua); passed automated Arabic/EN/DV consistency checks but not yet checked by a qualified human reviewer - see CONTENT_REVIEW.md.',
    },
  },
  {
    id: 'masnun-396',
    type: 'dua',
    categoryId: 'marriage',
    title: { en: 'Dua for Congratulating New Parents', dv: 'ކުއްޖަކު ލިބުމުން ތަހުނިޔާ ކިޔުމަށް ބޭނުންކުރާ ދުޢާ' },
    arabic: 'بَارَكَ اللَّهُ لَكَ فِي الْمَوْهُوْبِ لَكَ، وَشَكَرْتَ الْوَاهِبَ، وَبَلَغَ أَشُدَّهُ، وَرُزِقْتَ بِرَّهُ.',
    transliteration: 'BaarakAllahu laka fil-mawhoobi laka, wa shakartal-waahiba, wa balagha \'ashuddahu, wa ruziqta birrahu',
    translation: {
      en: 'May Allah bless you with His gift to you, and may you (the new parent) give thanks, may the child reach the maturity of years, and may you be granted its righteousness.',
      dv: 'ﷲ ތިބާއަށް ދެއްވި ހަދިޔާގައި ބަރަކާތް ލައްވާށިއެވެ! އަދި ހަދިޔާ ދެއްވި ފަރާތަށް (ﷲ އަށް) ތިބާ ޝުކުރުވެރިވާށިއެވެ! އަދި ކުއްޖާ ބޮޑުވެ ތަޞައްރަފު ފުދޭށިއެވެ! އަދި އޭނާގެ ހެޔޮކަން ތިބާއަށް ދެއްވާށިއެވެ!',
    },
    source: { type: 'hadith', reference: 'This is menioned as a saying of Hasan Al basri Rahimullah. See tuhfatul maodud fi Ibn Qaiiyum, Page. 20' },
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Sourced from the Masnun Dua dataset (islamicapi/masnun-dua); passed automated Arabic/EN/DV consistency checks but not yet checked by a qualified human reviewer - see CONTENT_REVIEW.md.',
    },
  },
  {
    id: 'masnun-397',
    type: 'dua',
    categoryId: 'marriage',
    title: { en: 'Reply to Congratulations in Islam (Barakallahu Laka Wa JazakAllah Khairan)', dv: 'ތަހުނިޔާ ރައްދުކުރުން' },
    arabic: 'بَارَكَ اللَّهُ لَكَ، وَبَارَكَ عَلَيْكَ، وَجَزَاكَ اللَّهُ خَيْرًا، وَرَزَقَكَ اللَّهُ مِثْلَهُ، وَأَجْزَلَ ثَوَابَكَ',
    transliteration: 'Baarakallahu laka wa baaraka \'alayka, wa jazaakAllahu khayran, wa razaqakAllahu mithlahu, wa \'ajzala thawaabaka',
    translation: {
      en: 'May Allah bless you, and shower His blessings upon you, and may Allah reward you well and bestow upon you its like and reward you abundantly.\n\nThe above congratulations and answer are narrated from some of the Companions.',
      dv: 'ﷲ ތިބާއަށް ބަރަކާތް ލައްވާށިއެވެ! އަދި ތިބާގެ މައްޗަށް ބަރަކާތް ލައްވާށިއެވެ! އަދި ﷲ ތިބާއަށް ހެޔޮ ޖަޒާ ދެއްވާށިއެވެ! އަދި މީގެ މިޘާލު ތިބާއަށް ދެއްވާށިއެވެ! އަދި ތިބާގެ ޘަވާބު އިތުރުކުރައްވާށިއެވެ!',
    },
    source: { type: 'hadith', reference: 'An-Nawawi Al-Azkar Page. 349. Also see Sahih Azkar fil Nawawi, Salim al Hilali 2/713. For more details, read Az Zikr wa dua Wal Ilaj bir Ruqwa Page. 1/416' },
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Sourced from the Masnun Dua dataset (islamicapi/masnun-dua); passed automated Arabic/EN/DV consistency checks but not yet checked by a qualified human reviewer - see CONTENT_REVIEW.md.',
    },
  },
];
