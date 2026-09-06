import type { Dua } from '../../../types/dua';

// Sourced from the Masnun Dua open dataset (github.com/islamicapi/masnun-dua)
// - see data/duas/CONTENT_REVIEW.md for the sourcing/verification pipeline
// and the human-review requirement that still applies to every item here.
export const TOILET_DUAS: Dua[] = [
  {
    id: 'masnun-161',
    type: 'dua',
    categoryId: 'toilet',
    title: { en: 'Dua for Leaving the Toilet', dv: 'ރޯދަ ހިފާ މީހާ އިއްފުތާރު ކުރާއިރު ކިޔާ ދުޢާ' },
    arabic: 'غُفْرَانَكَ',
    transliteration: 'Gufraanak',
    translation: {
      en: 'I ask You (Allah) for forgiveness.\n\nAyesha (RA) said that Rasoolullah (ﷺ) used to say this dua when he came out of the toilet.',
      dv: 'ކަރުހިއްކުން ފިލައިފިއެވެ. އަދި ނާރުތައް ތެތްވެއްޖެއެވެ. އަދި ﷲ އިރާދަކުރެއްވިއްޔާ އަޖުރު ސާބިތުވެއްޖެއެވެ.',
    },
    source: { type: 'hadith', reference: 'Sahih (Albani). Abu Dawud: 30' },
    contentReview: {
      arabicVerified: false,
      transliterationVerified: false,
      translationVerified: { en: false, dv: false },
      notes: 'Sourced from the Masnun Dua dataset (islamicapi/masnun-dua); passed automated Arabic/EN/DV consistency checks but not yet checked by a qualified human reviewer - see CONTENT_REVIEW.md.',
    },
  },
];
