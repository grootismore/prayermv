import type { Dua } from '../../../types/dua';

// Sourced from the Masnun Dua open dataset (github.com/islamicapi/masnun-dua)
// - see data/duas/CONTENT_REVIEW.md for the sourcing/verification pipeline
// and the human-review requirement that still applies to every item here.
export const ABLUTION_AND_BATH_DUAS: Dua[] = [
  {
    id: 'masnun-170',
    type: 'dua',
    categoryId: 'ablution-and-bath',
    title: { en: 'Dua After Wudu (Ablution)', dv: 'ކިނބިހި އެޅުމުން ކިޔާ ދުޢާ' },
    arabic: 'أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيْكَ لَهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُوْلُهُ',
    transliteration: 'Ash-hadu \'an laa \'ilaaha \'illAllahu wahdahu laa shareeka lahu wa \'ash-hadu \'anna Muhammadan \'abduhu wa Rasooluhu',
    translation: {
      en: 'I bear witness that none has the right to be worshipped but Allah alone, Who has no partner; and I bear witness that Muhammad is His slave and His Messenger (ﷺ).\n\nUqba bin \'Amir (RA) reported: Allah\'s Messenger (ﷺ) say: If any Muslim performs ablution well, then stands and prays two rak\'ahs setting about them with his heart as well as his face, Paradise would be guaranteed to him.',
      dv: 'ﷲ އަށް ޙަމްދު ހުއްޓެވެ.',
    },
    source: { type: 'hadith', reference: 'Muslim: 234 , 576' },
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Sourced from the Masnun Dua dataset (islamicapi/masnun-dua); passed automated Arabic/EN/DV consistency checks but not yet checked by a qualified human reviewer - see CONTENT_REVIEW.md.',
    },
  },
  {
    id: 'masnun-171',
    type: 'dua',
    categoryId: 'ablution-and-bath',
    title: { en: 'After Wudu Dua (Ablution)', dv: 'ކައިވެނިކުރި މީހާއަށް ކުރާ ދުޢާ' },
    arabic: 'اَللَّهُمَّ اجْعَلْنِيْ مِنَ التَّوَّابِيْنَ وَاجْعَلْنِي مِنَ الْمُتَطَهِّرِيْنَ',
    transliteration: 'Allaahummaj\'alnee minat-tawwaabeena waj\'alnee minal-mutatahhireen',
    translation: {
      en: 'O Allah, make me among those who turn to You in repentance, and make me among those who are purified.\n\nIt has been narrated in Sahih Hadith that the dua should be recited after the previous dhikr. The eight gates of Paradise will be opened for the one who recites these two duas; He will enter (Paradise) through whichever door he wishes.',
      dv: 'ﷲ ތިބާއަށް ބަރަކާތް ލައްވާށިއެވެ! އަދި ތިބާގެ މައްޗަށް ބަރަކާތް ލައްވާށިއެވެ! އަދި ތިޔަ ދެމީހުން ހެޔޮކަމުގައި ޖަމާކުރައްވާށިއެވެ!',
    },
    source: { type: 'hadith', reference: 'Sahih (Albani). Tirmidhi: 55' },
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Sourced from the Masnun Dua dataset (islamicapi/masnun-dua); passed automated Arabic/EN/DV consistency checks but not yet checked by a qualified human reviewer - see CONTENT_REVIEW.md.',
    },
  },
];
