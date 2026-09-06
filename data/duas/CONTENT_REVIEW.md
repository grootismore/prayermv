# Duas & Adhkar content review

This directory (`data/duas/`) holds every dua and dhikr shown in the app.
**None of it has been checked by a qualified human reviewer yet.** It was
drafted by an AI assistant from general knowledge and cross-checked for
*selection and hadith references only* against secondary web sources
(sunnah.com, hadithanswers.com, and similar sites, via web search) - not
against a printed Mushaf, a printed Hisn al-Muslim, or a native Dhivehi
Islamic-studies speaker. That is not sufficient for content a real user
will read as religious text, and it must not be treated as final.

## What needs review, specifically

Every `Dua` object in `morning.ts`, `evening.ts`, `prayer.ts`, `sleep.ts`,
and `daily.ts` carries a `contentReview` field with three boolean flags,
all currently `false`:

- **`arabicVerified`** - the Arabic text (`arabic`) has NOT been checked
  character-by-character against an authoritative source. This is the
  highest-priority check: a single missing or wrong harakah changes the
  meaning of a word. The two Quranic passages in this collection (the
  Three Quls, Ayat al-Kursi, and the last two verses of Al-Baqarah) are
  the highest-stakes items in the whole set and should be checked against
  a Mushaf (Uthmani script) before anything else.
- **`transliterationVerified`** - the Latin transliteration was written by
  hand for each entry (never auto-generated - see below), but has not been
  proofread by a second person.
- **`translationVerified.en`** - the English meaning is a paraphrase, not
  a citation of a specific published translation (e.g. Saheeh International
  for Quranic text). Reasonable confidence, but unverified.
- **`translationVerified.dv`** - the Dhivehi meaning is a first-draft
  translation and is the field with the **lowest** confidence in this
  entire collection. It was not written or checked by a native Dhivehi
  speaker with Islamic-studies background. Some entries are long (the
  travel dua, the anxiety dua, the last two verses of Al-Baqarah) and are
  especially likely to contain awkward or imprecise phrasing.

A `notes` string on most entries records anything specific worth flagging
for that item (e.g. "confirm this hadith number against a current print
edition").

## Why this approach, not silence or refusal

The feature spec this content was built for is explicit: never invent
Arabic, references, virtues, repetition counts, or hadith gradings; use
only well-established Quranic duas and authentic adhkar; and when
something can't be confirmed confidently, mark it clearly rather than
pretend it's final. That's what `contentReview` does - it makes the
review requirement a structural part of the data, not a comment that can
be missed.

## Before this ships to real users

1. Have a qualified reviewer (someone comfortable reading Quran/hadith
   Arabic with tashkeel, ideally with some background in the sciences of
   hadith) check every `arabic` field against a Mushaf or a printed Hisn
   al-Muslim, and flip `arabicVerified: true` per entry as they go.
2. Have the same or another reviewer check every `transliteration` field
   for accuracy and internal consistency (this collection does not follow
   any single academic transliteration standard - it prioritizes
   readability for someone with no Arabic background).
3. Have a Dhivehi speaker with Islamic-studies background review every
   `translation.dv` (and `title.dv` / `benefits.dv` where present) for
   both accuracy and natural phrasing, and flip `translationVerified.dv`
   once satisfied.
4. Spot-check `translation.en` and each `source.reference` /
   `source.grading` against a primary or well-regarded secondary source
   (e.g. sunnah.com for the reference number, a scholarly grading site for
   anything not from Bukhari/Muslim directly).
5. Only remove or repurpose the `contentReview` field once every entry it
   covers has actually been checked - don't strip the flags as a shortcut
   to make the data "look" finished.

## Adding new content later

Keep following the same rules this collection was built under:

- Full harakat on every Arabic string, always.
- A manually written transliteration - never run
  `lib/arabicTransliterate.ts` (a place-name phonetic approximator) on
  religious text.
- A specific, checkable `source.reference` (a Quran ayah or a named
  collection + number), never a vague "hadith" or "it is said".
- A `grading` only when it's well-established (Sahih/Hasan from a named
  scholar or collection) - omit it rather than guess.
- A `benefits` entry only when the cited source itself states that
  virtue - not a general claim from folklore.
- Ship new entries with `contentReview` flags set to `false` and a `notes`
  string saying what specifically still needs checking, exactly like the
  entries in this initial collection.
- Run `npm run validate:duas` before committing - it catches structural
  mistakes (duplicate IDs, a dangling `categoryId`, an empty required
  field, a non-positive `repetitions`), though it says nothing about
  whether the content itself is correct.
