/**
 * Content model for the Duas & Adhkar feature. Kept separate from
 * locales/*.json on purpose - those files hold only interface strings
 * (buttons, headings, toasts), never religious text. All actual dua/dhikr
 * content lives under data/duas/ and is typed against the interfaces here.
 */

export type DuaType = 'dua' | 'zikr';

/** The app's interface language (AppLanguage, in lib/storage.ts) is independent of this - see DuaPreferences.translationLanguage. */
export type DuaTranslationLanguage = 'auto' | 'en' | 'dv';

export type DuaArabicFontSize = 'small' | 'medium' | 'large';

export interface LocalizedDuaText {
  en: string;
  dv: string;
}

export type DuaSourceType = 'quran' | 'hadith';

export interface DuaSource {
  type: DuaSourceType;
  /** e.g. "Quran 2:255" or "Sahih al-Bukhari 6306". Always a specific, checkable reference - never invented. */
  reference: string;
  /** Only present for hadith sources where a grading is well established (e.g. "Sahih", "Hasan"). Omit rather than guess. */
  grading?: string;
}

/**
 * Internal review metadata - never rendered in the UI and never included in
 * shared text. Lets content that hasn't been checked by a qualified human
 * reviewer ship in a clearly-flagged state rather than silently pretending
 * to be final. See data/duas/CONTENT_REVIEW.md.
 */
export interface DuaContentReview {
  arabicVerified: boolean;
  transliterationVerified: boolean;
  translationVerified: {
    en: boolean;
    dv: boolean;
  };
  notes?: string;
}

/**
 * One phrase within a multi-phrase dhikr (e.g. the "Subhanallah / Alhamdu
 * lillah / Allahu Akbar / closing tahlil" sequence said after each
 * prayer), each repeated its own number of times. Drives the reading
 * screen's one-phrase-per-card, auto-advancing counter flow - see
 * Dua.segments.
 */
export interface DuaSegment {
  arabic: string;
  transliteration: string;
  translation: LocalizedDuaText;
  repetitions: number;
}

export interface Dua {
  id: string;
  type: DuaType;
  categoryId: string;
  title: LocalizedDuaText;
  /** Full Arabic text with complete harakat - never bare/unvowelled text. For a multi-phrase dhikr (see `segments`) this is the complete combined text, used for search/sharing/preview. */
  arabic: string;
  /** Manually authored Latin transliteration - never derived from lib/arabicTransliterate.ts, which is a place-name phonetic approximator, not a religious-text transliterator. */
  transliteration: string;
  translation: LocalizedDuaText;
  source: DuaSource;
  /** Number of times a single-phrase zikr should be repeated. Only set when the source itself specifies a count, and only for a dhikr that's one uniform phrase - a multi-phrase dhikr uses `segments` instead, not this. */
  repetitions?: number;
  /**
   * For a dhikr made of several distinct phrases each repeated its own
   * number of times (e.g. the 33/33/33/1 post-prayer tasbih) - the reading
   * screen shows one segment at a time, full-screen, and auto-advances to
   * the next once the current one's target is reached. Omit for a plain
   * dua or a single-phrase zikr (use `repetitions` for the latter).
   */
  segments?: DuaSegment[];
  /** A benefit/virtue - only included when directly supported by the cited source, not general folklore. */
  benefits?: LocalizedDuaText;
  /** Extra plain-text search hints (e.g. alternate spellings) beyond title/arabic/transliteration/translation, which are always searched. */
  searchTerms?: string[];
  contentReview?: DuaContentReview;
}

export interface DuaCategory {
  id: string;
  title: LocalizedDuaText;
  description?: LocalizedDuaText;
  /** An Ionicons glyph name (e.g. "sunny-outline"). */
  icon: string;
  order: number;
}

/** Persisted per dua id -> current repeat count. Absent entries default to 0. */
export type DuaCounterProgress = Record<string, number>;

export interface DuaPreferences {
  translationLanguage: DuaTranslationLanguage;
  showTransliteration: boolean;
  arabicFontSize: DuaArabicFontSize;
}
