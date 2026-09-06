# Duas & Adhkar content review

This directory (`data/duas/`) holds every dua and dhikr shown in the app.
**None of it has been checked by a qualified human reviewer yet.**

## Source (rebuilt from the Masnun Dua dataset)

The content in `data/duas/categories.ts` and `data/duas/content/*.ts` (one
file per category) is built entirely from the
[Masnun Dua](https://github.com/islamicapi/masnun-dua) open dataset,
maintained by IslamicAPI.com and credited in its own README to Hisnul
Muslim (Said ibn Ali Al-Qahtani) among other named sources. The dataset's
README states it is "completely free and open source - use it for any
purpose including personal, educational, or commercial projects... No
attribution required," which is exactly what this app does.

The dataset ships **44 categories**, **118 subcategories**, and **1,001**
numbered entries, each with per-language files (`translation/<lang>/dua_N.json`)
carrying `title`, `arabic`, `transliteration`, `translation`, and
`reference` fields, among others. This app's category list
(`DUA_CATEGORIES`) mirrors the dataset's own 44 categories and their
display order verbatim (English/Dhivehi names taken from
`categories/en.json` / `categories/dv.json`); each dua's `categoryId`
comes from whichever subcategory first references it in
`sub-categories/en.json`.

Only four fields were imported per dua: `title`, `arabic`,
`transliteration`, `translation` (en + dv), and `reference`. Deliberately
**not** imported: the dataset's `introduction`, `hadith` (isnad chain),
`benefits`, `when_to_recite`, `how_to_perform`, and `faq` fields - the
`benefits` text in particular reads like SEO copy in many entries ("brings
Barakah and keeps hearts away from doubt") rather than a specific,
citable virtue stated by the source hadith itself, which is this app's
existing bar for a `benefits` entry (see "Adding new content later" below).
None of that content is included here.

### Filtering pipeline

Not every one of the dataset's 1,001 entries became a `Dua` here:

1. **95 entries were dropped for having no recitable text** - some dataset
   entries are informational essays about dua (e.g. "we depend on Allah
   for everything") with an empty `arabic` field, not something to recite.
2. **7 more were dropped for missing a Dhivehi translation**, and **6 more
   for missing a `reference`** - both required fields on this app's `Dua`
   type.
3. **An automated Arabic-opening-word / translation-keyword consistency
   check** was run against every remaining entry: for entries whose Arabic
   opens with a recognizable formula (e.g. `بِسْمِ اللَّهِ`, `أَسْتَغْفِرُ`,
   `سُبْحَانَ`, `الْحَمْدُ لِلَّهِ`, `اللَّهُ أَكْبَرُ`, `لَا إِلَٰهَ إِلَّا اللَّهُ`), the
   corresponding English and Dhivehi translations were checked for an
   expected keyword (e.g. "forgiv-" for `أَسْتَغْفِرُ`, `ފުއްސެ`/`ފާފަ` for the
   Dhivehi equivalent). This caught a real, confirmed bug in the upstream
   dataset: for a contiguous block of ids in its "home", "mosque", and
   "after-salah" subcategories, the **Dhivehi** translation field held text
   belonging to an entirely different, unrelated dua, while the English
   translation for the very same id was correct. 40 entries were excluded
   on this basis (their English side was fine; only Dhivehi was corrupted
   in the source, and shipping the mismatched Dhivehi text would have been
   worse than not including the dua at all).
4. **A Unicode-codepoint scan** of every surviving Dhivehi translation
   flagged any character outside the expected Arabic/Thaana/ASCII/basic
   punctuation ranges - the same technique used earlier in this project to
   catch garbled Dhivehi text. This caught 6 more entries where a handful
   of stray Tibetan/Khmer/Kannada/Sinhala characters had been mixed into
   the Dhivehi text in the source dataset (an encoding bug there, not
   introduced here).

**844 of the original 1,001 entries survived this pipeline** and are what
ships in `data/duas/content/*.ts`. The three previously-hand-curated
Quranic entries (Ayat al-Kursi, the last two verses of Al-Baqarah, the
Three Quls) are included among these 844 via the dataset's own Quranic
entries rather than the earlier bespoke ones.

### What this pipeline does *not* catch

The consistency check above is a smell test on a handful of common opening
formulas, not a substitute for a human reading each of the 844 entries. It
would not catch, for example, a wrong *middle* clause in a long dua, a
subtly wrong harakah, or a mismatch between two duas that both happen to
start the same way. Treat every entry here with the same "unverified"
status as the rest of this document describes.

### Repetition counts

The dataset does not carry a structured repetition-count field. 10 entries
where the introduction/translation text unambiguously says "say this
[whole, single-clause] phrase N times" had `repetitions: N` and
`type: 'zikr'` set by hand after individually checking that the Arabic
field really is that one short repeated phrase (ids 3, 22, 25, 26, 86, 88,
108, 249, 264, 282 in the dataset's own numbering - see each entry's `id`,
formatted as `masnun-<dataset id>`). Every other entry - including several
whose text mentions a repetition count for a *sub-phrase* within a longer
composite dua (e.g. "say Allahu Akbar three times, then recite ...") -
was left as a plain `dua` with no counter, since safely splitting those
into `segments` at this volume was not something this pass attempted.
Revisiting that (as was done by hand for the old `prayer-tasbih-hundred`
entry) would be a good follow-up for the highest-traffic categories
(`morning-and-evening`, `salah`).

## What needs review, specifically

Every `Dua` object carries a `contentReview` field with three boolean
flags, all currently `false`:

- **`arabicVerified`** - not checked character-by-character against a
  Mushaf or a printed Hisn al-Muslim. A single missing or wrong harakah
  changes the meaning of a word - this is the highest-priority check,
  especially for the Quranic entries in `quranic-dua`, `morning-and-evening`,
  and `sleep`.
- **`transliterationVerified`** - taken as-is from the dataset; not
  proofread against this app's own transliteration conventions (which the
  earlier hand-curated content also never standardized to a single
  academic system).
- **`translationVerified.en`** - the dataset's English translation;
  reasonable confidence given it passed the automated consistency check,
  but not a citation of one specific published translation.
- **`translationVerified.dv`** - the dataset's Dhivehi translation; same
  confidence level as `en` above (both come from the same dataset and both
  passed the same per-entry consistency check), but still **not** the same
  as a native Dhivehi Islamic-studies speaker reading it for accuracy and
  natural phrasing.

Every entry's `notes` field records that it came from this pipeline
verbatim, so a future reviewer doesn't need to guess.

## Why this approach, not silence or refusal

The feature spec this content was built for is explicit: never invent
Arabic, references, virtues, repetition counts, or hadith gradings; use
only well-established Quranic duas and authentic adhkar; and when
something can't be confirmed confidently, mark it clearly rather than
pretend it's final. Sourcing from a maintained, openly-licensed dataset -
verified with automated checks and with anything that failed those checks
dropped rather than shipped - is a large step up from freehand AI
paraphrase, but `contentReview` still makes the human-review requirement a
structural part of the data rather than something that can be missed.

## Before this ships to real users

1. Have a qualified reviewer (someone comfortable reading Quran/hadith
   Arabic with tashkeel, ideally with some background in the sciences of
   hadith) check every `arabic` field against a Mushaf or a printed Hisn
   al-Muslim, and flip `arabicVerified: true` per entry as they go.
2. Have the same or another reviewer check every `transliteration` field
   for accuracy and internal consistency.
3. Have a Dhivehi speaker with Islamic-studies background review every
   `translation.dv` for both accuracy and natural phrasing, and flip
   `translationVerified.dv` once satisfied.
4. Spot-check `translation.en` and each `source.reference` against a
   primary or well-regarded secondary source (e.g. sunnah.com for the
   reference number).
5. Only remove or repurpose the `contentReview` field once every entry it
   covers has actually been checked - don't strip the flags as a shortcut
   to make the data "look" finished.

## Adding new content later

Keep following the same rules this collection was built under:

- Full harakat on every Arabic string, always.
- A specific, checkable `source.reference` (a Quran ayah or a named
  collection + number), never a vague "hadith" or "it is said".
- A `grading` only when it's well-established (Sahih/Hasan from a named
  scholar or collection) - omit it rather than guess (this rebuild left
  `grading` unset everywhere rather than parse it out of the dataset's
  free-text `reference` strings, several of which bundle multiple
  gradings/collections into one string).
- A `benefits` entry only when the cited source itself states that
  virtue - not a general claim from folklore or SEO-style copy (see why
  the dataset's own `benefits` field was skipped, above).
- Ship new entries with `contentReview` flags set to `false` and a `notes`
  string saying what specifically still needs checking.
- Run `npm run validate:duas` before committing - it catches structural
  mistakes (duplicate IDs, a dangling `categoryId`, an empty required
  field, a non-positive `repetitions`), though it says nothing about
  whether the content itself is correct.
