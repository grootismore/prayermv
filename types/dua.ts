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

export interface Dua {
  id: string;
  type: DuaType;
  categoryId: string;
  title: LocalizedDuaText;
  /** Full Arabic text with complete harakat - never bare/unvowelled text. */
  arabic: string;
  /** Manually authored Latin transliteration - never derived from lib/arabicTransliterate.ts, which is a place-name phonetic approximator, not a religious-text transliterator. */
  transliteration: string;
  translation: LocalizedDuaText;
  source: DuaSource;
  /** Number of times a zikr should be repeated. Only set when the source itself specifies a count. */
  repetitions?: number;
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
