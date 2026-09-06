import type { Dua } from '../../../types/dua';

// Sourced from the Masnun Dua open dataset (github.com/islamicapi/masnun-dua)
// - see data/duas/CONTENT_REVIEW.md for the sourcing/verification pipeline
// and the human-review requirement that still applies to every item here.
export const GATHERING_DUAS: Dua[] = [
  {
    id: 'masnun-494',
    type: 'dua',
    categoryId: 'gathering',
    title: { en: 'Dua After Gathering', dv: 'މަޖިލިސް ނިމޭއިރު ކުރާ ދުޢާ' },
    arabic: 'رَبِّ اغْفِرْ لِي وَتُبْ عَلَىَّ إِنَّكَ أَنْتَ التَّوَّابُ الرَّحِيمُ',
    transliteration: 'Rabbighfir lee watub \'alayya \'innaka \'Antat-Tawwaabur-rahim',
    translation: {
      en: 'My Lord, forgive me and accept my repentance, You are the Ever-Relenting, the All-Forgiving.',
      dv: 'މިއަޅާގެ ވެރިރަސްކަލާނކޮ! މިއަޅާއަށް ފާފަ ފުއްސަވާނދޭވެ! އަދި މިއަޅާގެ މައްޗަށް ތައުބާ ލައްވާނދޭވެ! ހަމަކަށަވަރުން އިބަރަސްކަލާނގެއީ ގިނަގިނައިން ތައުބާ ޤަބޫލުކުރައްވާ، ރަޙީމްވަންތަ ރަސްކަލާނގެއެވެ.',
    },
    source: { type: 'hadith', reference: 'Sahih. Abu Dawud: 1516' },
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Sourced from the Masnun Dua dataset (islamicapi/masnun-dua); passed automated Arabic/EN/DV consistency checks but not yet checked by a qualified human reviewer - see CONTENT_REVIEW.md.',
    },
  },
  {
    id: 'masnun-495',
    type: 'dua',
    categoryId: 'gathering',
    title: { en: 'Dua After Meeting (Kaffaratul Majlis)', dv: 'މަޖިލީހުގެ ކައްފާރާ' },
    arabic: 'سُبْحَانَكَ اَللَّهُمَّ وَبِحَمْدِكَ أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا أَنْتَ أَسْتَغْفِرُكَ وَأَتُوْبُ إِلَيْكَ',
    transliteration: 'Subhaanaka Allaahumma wa bihamdika, \'ash-hadu \'an laa \'ilaaha \'illaa \'Anta, \'astaghfiruka wa \'atoobu \'ilayka',
    translation: {
      en: 'Glory is to You, O Allah, and praise is to You. I bear witness that there is none worthy of worship but You. I seek Your forgiveness and repent to You.\n\nIt is narrated in different authentic chains by the Companions like Abdullah Ibn Amr Ibn Al-As (RA), Abu Barzah Aslami (RA), Abu Hurairah (RA) that the Prophet (ﷺ) used to say these words before leaving the meeting at the end of the meeting. He said, "If anyone says these words while getting up from a meeting, it will be an expiation for the meeting. Because of this, Allah Almighty will forgive the unlawful speech and sins of that meeting.',
      dv: 'އޭ ﷲ! އިބަރަސްކަލާނގެއަށް ޙަމްދާއެކު އިބަރަސްކަލާނގެ ހުސްޠާހިރުވަންތަކަމާއެވެ! އިބަރަސްކަލާނގެ ފިޔަވައި ޙައްޤުވެގެންވާ އެހެން އިލާހަކު ނުވާކަމަށް މިއަޅާ ހެކިވަމެވެ. އިބަރަސްކަލާނގެ ޙަޟްރަތުން ފާފަ ފުއްސެވުމަށް އެދެމެވެ. އަދި އިބަރަސްކަލާނގެ ޙަޟްރަތަށް ތައުބާވަމެވެ.',
    },
    source: { type: 'hadith', reference: 'Sahih. Tirmidhi: 3433' },
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Sourced from the Masnun Dua dataset (islamicapi/masnun-dua); passed automated Arabic/EN/DV consistency checks but not yet checked by a qualified human reviewer - see CONTENT_REVIEW.md.',
    },
  },
  {
    id: 'masnun-496',
    type: 'dua',
    categoryId: 'gathering',
    title: { en: 'Dua for Ending Majlis', dv: 'މަޖިލިސް ނިންމާލާއިރު ކުރާ ދުޢާ' },
    arabic: 'اَللَّهُمَّ اقْسِمْ لَنَا مِنْ خَشْيَتِكَ مَا يَحُولُ بَيْنَنَا وَبَيْنَ مَعَاصِيْكَ وَمِنْ طَاعَتِكَ مَا تُبَلِّغُنَا بِهِ جَنَّتَكَ وَمِنَ الْيَقِيْنِ مَا تُهَوِّنُ بِهِ عَلَيْنَا مُصِيْبَاتِ الدُّنْيَا وَمَتِّعْنَا بِأَسْمَاعِنَا وَأَبْصَارِنَا وَقُوَّتِنَا مَا أَحْيَيْتَنَا وَاجْعَلْهُ الْوَارِثَ مِنَّا وَاجْعَلْ ثَأْرَنَا عَلَى مَنْ ظَلَمَنَا وَانْصُرْنَا عَلَى مَنْ عَادَانَا وَلَا تَجْعَلْ مُصِيْبَتَنَا فِي دِيْنِنَا وَلَا تَجْعَلِ الدُّنْيَا أَكْبَرَ هَمِّنَا وَلَا مَبْلَغَ عِلْمِنَا وَلَا تُسَلِّطْ عَلَيْنَا مَنْ لَا يَرْحَمُنَا',
    transliteration: 'Allaahum-maq-sim la-naa min khash-yatika maa ya\'hoolu baynanaa wa bayna ma‛aa-seeka, wa min taa‘a-tika maa tuballi-ghunaa bihi jan-nataka, wa mi-nal-yaqee-ni maa tu-hauwinu bihi ‛alaynaa musib-atid-dunyaa, wa matt\'iena bi asmaa‛i-naa, wa absaa-rinaa, wa qoo-wati-naa maa a\'h-yay-tanaa, waj‛al-hul-waaritha min-naa, waj‛al tha’ra-naa ‛alaa man zala-manaa, wan-sur-naa ‛alaa man ‛aa-daa-naa, wa laa taj‛al mu-seeba-ta-naa fee dee-ni-naa, wa laa taj‛a-lid-dunyaa akbara ham-minaa, wa laa mab-lagha ‛il-minaa, wa laa tusal-lit ‛alay-naa man laa yar-\'hamunaa',
    translation: {
      en: 'O Allah, give us such fear that will serve as a barrier between us and acts of disobedience; and give us such obedience that will take us to Your Paradise; and such certainty as will make easy for us to bear in the calamities of this world. O Allah! let us enjoy our hearing, our sight and our strength as long as You keep us alive and keep our senses healthy and sound until the day We die, and make our revenge restricted to those who oppressed us, and support us against those who are hostile to us, and give us not trial in our religion; and let not worldly affairs be our principal concern, or the ultimate limit of our knowledge, and let not those dominate us who do not show mercy to us.\n\nAbdullah bin Umar (RA) said, The Prophet (ﷺ) used to say this dua before leaving the Majlis and seldom left the Majlis without praying for his companions. This hadith is Hasan. [Tirmidhi (49-Kitabud Dawaat, 80-Baab) 5/ 492-493] In another narration, Tabi\'i Nafi said, “Abdullah ibn Umar (RA) would not have stood from a meeting without saying these words for the people sitting in the meeting. [Nasai, As-Sunanul Kubra 6/106; Ibn al-Athir, Jamiul Usul 4/279] It is to be noted that the Prophet (ﷺ), the Companions of his Majlis, Abdullah Ibn Umar (RA) or the people of his Majlis did not raise their hands in supplication. We have seen that the Companions were very interested and diligent in narrating the Sunnah of the Prophet (ﷺ). They have described if raising hands during supplication is permissible in this particular case. That is why it is proved that the sunnah is not to be raised. Besides, we have seen that raising the hand during dua is a manners of dua. The Prophet (ﷺ) sometimes supplicated alone and sometimes with the Companions. In the light of this hadith, it is understood that at the end of the meeting, the speaker will say the words of the supplication and the people present will say Amin. If everyone sometimes raises their hands and supplicates, there is no chance of it being considered illegal or bidat. However, depending on the hadith of general virtue, it is bid\'ah to consider it necessary to raise one\'s hand in the case of such duas or to consider it unlawful not to raise one\'s hand. Since the matter is open, in the light of hadith, the matter must be kept open.',
      dv: 'އޭ ﷲ! އިބަރަސްކަލާނގެއަށް ބިރުވެތިވުމުގެ ތެރެއިން، މިއަޅަމެންނާއި މިއަޅަމެން އިބަރަސްކަލާނގެއަށް އުރެދުމާ ދެމެދަށް ހުރަހަކަށް ވާ މިންވަރަށް މިއަޅަމެންނަށް ބައި އަޅުއްވާނދޭވެ! އަދި އިބަރަސްކަލާނގެ ސުވަރުގެއަށް މިއަޅަމެން ވާޞިލުކޮށްދޭ މިންވަރަށް ކިޔަމަންތެރިކަން ދެއްވާނދޭވެ! އަދި ދުނިޔޭގެ މުޞީބާތްތައް މިއަޅަމެންނަށް ލުއިކޮށްދޭ މިންވަރަށް ޔަޤީންކަން ދެއްވާނދޭވެ! އަދި މިއަޅަމެން ދިރިތިބިހައި ހިނދަކު، މިއަޅަމެންގެ އަޑުއިވުމާއި، ލޮލުގެ ފެނުމާއި، ގައިބާރުގެ ބޭނުން ހެޔޮ ގޮތުގައި ހިފުމުގެ ތައުފީޤު ދެއްވާނދޭވެ! އަދި އެކަންކަން މިއަޅަމެންގެ ވާރުތަވެރިޔާ (އެބަހީ: މަރުވަންދެން ދެމިހުންނަ އެއްޗެއް) ކަމުގައި ލައްވާނދޭވެ! އަދި މިއަޅަމެންގެ ބަދަލުހިފުން ވަނީ މިއަޅަމެންނަށް އަނިޔާކުރި މީހުންގެ ކިބައިން ކަމުގައި ލައްވާނދޭވެ! އަދި މިއަޅަމެންނާ ދެކޮޅުވެރިވާ މީހުންގެ މައްޗަށް މިއަޅަމެންނަށް ނަޞްރު ދެއްވާނދޭވެ! އަދި މިއަޅަމެންގެ ދީނުގައި މިއަޅަމެންނަށް މުޞީބާތެއް ނުޖައްސަވާނދޭވެ! އަދި ދުނިޔެއަކީ މިއަޅަމެންގެ އެންމެ ބޮޑު ހިތާމަކަމުގައި އަދި ޢިލްމު ވާޞިލުވާ އެންމެ ފަހު ތަން ކަމުގައި ނުލައްވާނދޭވެ! އަދި މިއަޅަމެންނަށް ރަޙްމު ނުކުރާ ބަޔަކު މިއަޅަމެންގެ މައްޗަށް ވެރި ނުކުރައްވާނދޭވެ!',
    },
    source: { type: 'hadith', reference: 'Hasan. Tirmidhi: 3502' },
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Sourced from the Masnun Dua dataset (islamicapi/masnun-dua); passed automated Arabic/EN/DV consistency checks but not yet checked by a qualified human reviewer - see CONTENT_REVIEW.md.',
    },
  },
];
