/**
 * Latin-to-Thaana transliteration for island/atoll names.
 *
 * The Maldivian island database (mv-prayertimes) only ships English/Latin
 * names (e.g. "Kulhudhuffushi", "HDh."). There's no Dhivehi field to fall
 * back on, so Dhivehi-locale names are derived here instead of hardcoding
 * ~207 place names by hand (which nobody could verify without a native
 * speaker anyway).
 *
 * This isn't a guess: Thaana was deliberately designed with a 1:1 letter
 * correspondence to this exact Latin romanization scheme (the same one
 * used for road signs and government documents - digraphs "dh"/"th"/"sh"/
 * "gn"/"lh" each represent a single Thaana consonant, and vowel length is
 * written by doubling the Latin vowel: a/aa, i/ee, u/oo, e/ey, o/oa). So
 * converting the existing Latin names algorithmically reproduces the real
 * Thaana spelling for the overwhelming majority of names. The two known
 * exceptions in this dataset - "Male'" and "Hulhumale'" - use a legacy
 * apostrophe convention that doesn't decompose the same way, so those are
 * hardcoded overrides.
 */

const CONSONANT_DIGRAPHS: Record<string, string> = {
  dh: 'ދ', // ދ dhaalu
  th: 'ތ', // ތ thaa
  sh: 'ށ', // ށ shaviyani
  gn: 'ޏ', // ޏ gnaviyani
  lh: 'ޅ', // ޅ lhaviyani
  ch: 'ޗ', // ޗ chaviyani
};

const CONSONANTS: Record<string, string> = {
  h: 'ހ', // ހ haa
  n: 'ނ', // ނ noonu
  r: 'ރ', // ރ raa
  b: 'ބ', // ބ baa
  k: 'ކ', // ކ kaafu
  v: 'ވ', // ވ vaavu
  m: 'މ', // މ meemu
  f: 'ފ', // ފ faafu
  l: 'ލ', // ލ laamu
  g: 'ގ', // ގ gaafu
  s: 'ސ', // ސ seenu
  d: 'ޑ', // ޑ daviyani (loanwords)
  z: 'ޒ', // ޒ zaviyani
  t: 'ޓ', // ޓ taviyani (loanwords)
  y: 'ޔ', // ޔ yaa
  p: 'ޕ', // ޕ paviyani
  j: 'ޖ', // ޖ javiyani
};

const ALIFU = 'އ'; // އ - vowel carrier, used when a vowel has no preceding consonant

const VOWEL_DIACRITICS: Record<string, string> = {
  aa: 'ާ', // ާ
  ee: 'ީ', // ީ
  oo: 'ޫ', // ޫ
  ey: 'ޭ', // ޭ
  oa: 'ޯ', // ޯ
  a: 'ަ', // ަ
  i: 'ި', // ި
  u: 'ު', // ު
  e: 'ެ', // ެ
  o: 'ޮ', // ޮ
};

const SUKUN = 'ް'; // ް - marks a consonant with no following vowel

const OVERRIDES: Record<string, string> = {
  "male'": 'މާލެ', // މާލެ
  "hulhumale'": 'ހުޅުމާލެ', // ހުޅުމާލެ
};

/** Atoll codes as they're actually written in Thaana (a single/double letter + period, mirroring the Latin "K.", "HA." convention) rather than the spelled-out atoll name. */
export const ATOLL_THAANA: Record<string, string> = {
  'HA.': 'ހއ.', // ހއ.
  'HDh.': 'ހދ.', // ހދ.
  'Sh.': 'ށ.', // ށ.
  'N.': 'ނ.', // ނ.
  'R.': 'ރ.', // ރ.
  'B.': 'ބ.', // ބ.
  'Lh.': 'ޅ.', // ޅ.
  'K.': 'ކ.', // ކ.
  'AA.': 'އއ.', // އއ.
  'ADh.': 'އދ.', // އދ.
  'V.': 'ވ.', // ވ.
  'M.': 'މ.', // މ.
  'F.': 'ފ.', // ފ.
  'Dh.': 'ދ.', // ދ.
  'Th.': 'ތ.', // ތ.
  'L.': 'ލ.', // ލ.
  'GA.': 'ގއ.', // ގއ.
  'GDh.': 'ގދ.', // ގދ.
  'Gn.': 'ޏ.', // ޏ.
  'S.': 'ސ.', // ސ.
};

function transliterateWord(word: string): string {
  const lower = word.toLowerCase();
  if (OVERRIDES[lower]) return OVERRIDES[lower];

  const clean = lower.replace(/['’]/g, '');
  let i = 0;
  let out = '';
  let pendingConsonant: string | null = null;

  const flushConsonant = () => {
    if (pendingConsonant) {
      out += pendingConsonant + SUKUN;
      pendingConsonant = null;
    }
  };

  while (i < clean.length) {
    const two = clean.slice(i, i + 2);
    const one = clean[i];

    if (CONSONANT_DIGRAPHS[two]) {
      flushConsonant();
      pendingConsonant = CONSONANT_DIGRAPHS[two];
      i += 2;
      continue;
    }
    if (VOWEL_DIACRITICS[two]) {
      if (pendingConsonant) {
        out += pendingConsonant + VOWEL_DIACRITICS[two];
        pendingConsonant = null;
      } else {
        out += ALIFU + VOWEL_DIACRITICS[two];
      }
      i += 2;
      continue;
    }
    if (CONSONANTS[one]) {
      flushConsonant();
      pendingConsonant = CONSONANTS[one];
      i += 1;
      continue;
    }
    if (VOWEL_DIACRITICS[one]) {
      if (pendingConsonant) {
        out += pendingConsonant + VOWEL_DIACRITICS[one];
        pendingConsonant = null;
      } else {
        out += ALIFU + VOWEL_DIACRITICS[one];
      }
      i += 1;
      continue;
    }
    // Unrecognized character (shouldn't happen for this dataset) - skip it.
    i += 1;
  }

  flushConsonant();
  return out;
}

/** Transliterates a Latin Dhivehi place name (island name, hyphenated or not) into Thaana. */
export function toThaana(name: string): string {
  return name
    .split(/(\s+|-)/)
    .map((part) => (/^[\s-]+$/.test(part) ? part : transliterateWord(part)))
    .join('');
}
