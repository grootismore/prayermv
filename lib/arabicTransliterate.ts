/**
 * Best-effort Latin-to-Arabic phonetic transliteration for island/atoll
 * names.
 *
 * Unlike Thaana (see thaanaTransliterate.ts), Arabic script has no designed
 * 1:1 correspondence with Dhivehi romanization - there's no "official"
 * Arabic spelling for a place like "Kulhudhuffushi". This renders a
 * reasonable phonetic approximation (the same approach Arabic news/atlases
 * use for foreign place names), always writing a full vowel letter rather
 * than relying on harakat diacritics that most UI fonts render tiny or
 * drop, at the cost of not distinguishing short vowels from long ones.
 */

const CONSONANT_DIGRAPHS: Record<string, string> = {
  dh: 'ذ',
  th: 'ث',
  sh: 'ش',
  gn: 'غن',
  lh: 'ل',
  ch: 'تش',
};

const CONSONANTS: Record<string, string> = {
  h: 'ه',
  n: 'ن',
  r: 'ر',
  b: 'ب',
  k: 'ك',
  v: 'ف',
  m: 'م',
  f: 'ف',
  l: 'ل',
  g: 'ج',
  s: 'س',
  d: 'د',
  z: 'ز',
  t: 'ت',
  y: 'ي',
  p: 'ب',
  j: 'ج',
};

// Long-vowel carrier letters - written even for short vowels so every
// syllable stays legible without relying on harakat diacritics.
const VOWEL_LETTERS: Record<string, string> = {
  aa: 'ا',
  ee: 'ي',
  oo: 'و',
  ey: 'ي',
  oa: 'و',
  a: 'ا',
  i: 'ي',
  u: 'و',
  e: 'ي',
  o: 'و',
};

const ALIF_START: Record<string, string> = {
  a: 'أ',
  aa: 'آ',
  i: 'إ',
  ee: 'إي',
  u: 'أ',
  oo: 'أو',
  e: 'إي',
  ey: 'إي',
  o: 'أو',
  oa: 'أو',
};

function transliterateWord(word: string): string {
  const clean = word.toLowerCase().replace(/['’]/g, '');
  let i = 0;
  let out = '';
  let atWordStart = true;

  while (i < clean.length) {
    const two = clean.slice(i, i + 2);
    const one = clean[i];

    if (CONSONANT_DIGRAPHS[two]) {
      out += CONSONANT_DIGRAPHS[two];
      i += 2;
      atWordStart = false;
      continue;
    }
    if (VOWEL_LETTERS[two]) {
      out += atWordStart ? ALIF_START[two] ?? VOWEL_LETTERS[two] : VOWEL_LETTERS[two];
      i += 2;
      atWordStart = false;
      continue;
    }
    if (CONSONANTS[one]) {
      out += CONSONANTS[one];
      i += 1;
      atWordStart = false;
      continue;
    }
    if (VOWEL_LETTERS[one]) {
      out += atWordStart ? ALIF_START[one] ?? VOWEL_LETTERS[one] : VOWEL_LETTERS[one];
      i += 1;
      atWordStart = false;
      continue;
    }
    // Unrecognized character (shouldn't happen for this dataset) - skip it.
    i += 1;
  }

  return out;
}

/** Best-effort phonetic Arabic rendering of a Latin Dhivehi place name. */
export function toArabic(name: string): string {
  return name
    .split(/(\s+|-)/)
    .map((part) => (/^[\s-]+$/.test(part) ? part : transliterateWord(part)))
    .join('');
}

/** Atoll codes rendered as a short Arabic letter + period, mirroring the Latin "K.", "HA." style. */
export const ATOLL_ARABIC: Record<string, string> = {
  'HA.': 'هأ.',
  'HDh.': 'هذ.',
  'Sh.': 'ش.',
  'N.': 'ن.',
  'R.': 'ر.',
  'B.': 'ب.',
  'Lh.': 'ل.',
  'K.': 'ك.',
  'AA.': 'أأ.',
  'ADh.': 'أذ.',
  'V.': 'ف.',
  'M.': 'م.',
  'F.': 'ف.',
  'Dh.': 'ذ.',
  'Th.': 'ث.',
  'L.': 'ل.',
  'GA.': 'جأ.',
  'GDh.': 'جذ.',
  'Gn.': 'غن.',
  'S.': 'س.',
};
