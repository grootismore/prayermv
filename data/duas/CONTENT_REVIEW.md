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
originally shipped in `data/duas/content/*.ts`. The three previously-hand-curated
Quranic entries (Ayat al-Kursi, the last two verses of Al-Baqarah, the
Three Quls) are included among these 844 via the dataset's own Quranic
entries rather than the earlier bespoke ones. **See the "Follow-up" section
below** - a second corruption pass later found and removed more entries,
so the currently-shipping count is lower than 844.

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

## Follow-up: a second, much larger Dhivehi corruption found (Sept 2026)

A user report - "Toilet Dua translated to thirst dua" - turned out to be
one symptom of a far bigger version of the same upstream bug described in
step 3 of the filtering pipeline above. That automated check only ran
against Arabic strings opening with a handful of recognizable formulas; it
missed a large contiguous run of the dataset's own numbering, roughly ids
140-284, where the same swap pattern recurs but the Arabic doesn't start
with one of the checked formulas. Manual side-by-side reading of the
English and Dhivehi fields for that id range (both the `translation` and,
critically, the dataset's own `title`/`introduction`/`benefits` copy, which
turned out to carry the same swap and confirms it's a bug in the source
JSON itself, not just this app's extraction) found:

- **`toilet`**: masnun-161's Dhivehi title and translation belonged to an
  unrelated Ramadan iftar dua. Fixed by hand - `title.dv` and
  `translation.dv` now correctly render "Dua for Leaving the Toilet" /
  `غُفْرَانَكَ` ("I ask You for forgiveness").
- **`cloths`, `adhaan-and-iqamah`, `ablution-and-bath`, `mosque`**: every
  single entry in all four categories had Dhivehi content swapped with an
  unrelated dua (predominantly Quranic prophet-story duas - Ibrahim's dua
  for his father, Zakariyya's dua for a child, Musa's dua against
  Pharaoh's people, Yunus's and Ayyub's duas). No correct Dhivehi text
  existed anywhere else in the dataset to substitute in. All entries in
  these four categories were removed, which leaves each category with zero
  duas - so the categories themselves were removed from `DUA_CATEGORIES`
  and their now-empty content files deleted, rather than shipping an empty
  category screen.
- **`home`**: both entries (masnun-156 "leaving the house", masnun-158
  "before entering home") had their entire Dhivehi side - title,
  translation, hadith, benefits - swapped with an unrelated rain/istisqa
  dua, confirmed by checking the raw dataset JSON directly (not just this
  app's extracted fields). No correct Dhivehi duplicate exists elsewhere in
  the dataset. Both entries were removed and the now-empty `home` category
  was removed the same way as the four above.
- **`salah`**: shrank from 68 entries to 11. Two of the removed-then-fixed
  entries, masnun-254 (Ayat al-Kursi) and masnun-255 (the three Quls),
  turned out to have an exact correct Dhivehi duplicate already shipped
  elsewhere in the app (`morning-and-evening.ts`'s masnun-96/97, which
  cover the same verses for the morning/evening adhkar context) - that
  verified text was copied over rather than the entries being dropped. The
  other 57 flagged entries had no such duplicate and were removed.
- **`witr-and-other`**: shrank from 9 to 5 entries on the same basis; the 4
  removed had no correct Dhivehi text available anywhere in the dataset.

This means **5 categories were removed outright** (cloths, home,
adhaan-and-iqamah, ablution-and-bath, mosque) and the app now ships **761
duas across 39 categories** (down from 844 across 44). This is a
deliberate coverage-vs-correctness tradeoff consistent with the rest of
this document: an empty category is a worse outcome for users than it
sounds, but a wrong Dhivehi religious translation is worse still, and
there was no source of correct Dhivehi text to recover these entries with.
Backfilling `cloths`/`home`/`adhaan-and-iqamah`/`ablution-and-bath`/`mosque`
with fresh, independently-verified content (rather than this dataset's
corrupted entries) would be a reasonable follow-up.

Also fixed in the same pass: the cross-screen "favourite not appearing
right away" bug reported alongside the translation issue - unrelated to
this content dataset, see `hooks/useDuaFavourites.ts`.

## Backfill: restoring the 5 emptied categories (Sept 2026)

The 5 categories emptied in the follow-up above (`cloths`, `home`,
`adhaan-and-iqamah`, `ablution-and-bath`, `mosque`) were later repopulated
with fresh content from two different open repositories, at the user's
explicit direction, rather than left empty indefinitely:

- **Arabic text**: [Kind-Unes/Adhkar-Duaa-Multilingual-Database](https://github.com/Kind-Unes/Adhkar-Duaa-Multilingual-Database)
  (`java-script/arabic/duaa_ar.js` and `adhkar_ar.js`). This repository
  ships **no LICENSE file at all**, which under default copyright means
  "all rights reserved" despite being public - it is not, strictly, free
  to reuse. The user was told this explicitly and chose to proceed anyway;
  this is a known, accepted risk, not an oversight.
- **English transliteration, translation, and reference**:
  [samiulahmedjoy/hisnulmuslim](https://github.com/samiulahmedjoy/hisnulmuslim)
  (`main_hisnulmuslim.txt`), a plain-text rendering of Said ibn Ali
  Al-Qahtani's *Hisn al-Muslim* sourced from sunnah.com. This repository is
  **GPLv3-licensed** - a strong copyleft license - which could in
  principle create an obligation to release this app's source if content
  from it is considered a "work based on the Program." The user was told
  this explicitly and chose to proceed anyway; this is also a known,
  accepted risk, not an oversight. Revisit this if the app is ever
  distributed in a way where that matters.

**Why these two combine cleanly**: both ultimately derive from the same
classical source (*Hisn al-Muslim*), just split across two unrelated
projects - one Arabic-only, one English-only. Their chapter/category order
matches closely enough that pairing them by topic (e.g. Kind-Unes'
"دعاء الخروج من الخلاء" against hisnulmuslim's "Chapter 7: After leaving
the bathroom") was reliable, and every pairing used here was verified by
hand against both the Arabic and the English side before being included -
none were guessed. Entries use a new `hisnul-<N>` id scheme (`<N>` being
that book's own numbering, which both sources independently cite) rather
than `masnun-<N>`, since they don't come from the Masnun Dua dataset.
Purely instructional lines with no fixed recitable phrase (e.g. "repeat
what the Mu'adhin says", "supplicate freely between adhan and iqamah")
were left out, same as the exclusion rule the original pipeline used.

**Dhivehi is the one new departure from this project's practice so far**:
neither source has any Dhivehi at all (Kind-Unes is Arabic-only,
hisnulmuslim is English-only), so every `title.dv` and `translation.dv` for
these 17 entries was **written by AI from the English/Arabic**, not copied
from a dataset or an already-verified duplicate elsewhere in the app like
every other Dhivehi string in this codebase. The user was told this
explicitly before it was done and asked for it anyway. Treat these 17
entries' Dhivehi with extra suspicion during human review - they carry the
same `translationVerified.dv: false` flag as everything else, but unlike
the rest of the app, there is no upstream dataset to blame if it's wrong.

**Deduplication**: before adding any of the 17 new entries, each candidate
Arabic phrase was grep-checked against every existing `data/duas/content/*.ts`
file to confirm it wasn't already present under a different category -
none were found, so nothing here duplicates the existing 761 (now 778)
duas.

Net effect: the app is back to shipping all **44 categories** (778 duas
total, up from 761), with `cloths` (5), `home` (3), `adhaan-and-iqamah` (2),
`ablution-and-bath` (4), and `mosque` (3) now populated with independently
verified Arabic/English pairings and AI-authored Dhivehi.

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
