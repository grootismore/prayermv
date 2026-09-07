/**
 * Dumps every dua/dhikr (including anything already flagged, so a
 * reviewer can revisit it) plus the category list to a single JSON file
 * for the standalone content-review tool - run with
 * `npx tsx scripts/exportDuasForReview.ts [outputPath]`, defaults to
 * scripts/duas-review-export.json. That file is the input to the review
 * tool; it is not meant to be committed - see data/duas/CONTENT_REVIEW.md
 * for the review workflow this feeds.
 */
import { writeFileSync } from 'fs';
import { resolve } from 'path';

import { DUA_CATEGORIES, EVERY_DUA } from '../data/duas';

const outputPath = resolve(process.argv[2] ?? 'scripts/duas-review-export.json');

const payload = {
  exportedAt: new Date().toISOString(),
  categories: DUA_CATEGORIES,
  duas: EVERY_DUA,
};

writeFileSync(outputPath, JSON.stringify(payload));
console.log(`Wrote ${EVERY_DUA.length} duas across ${DUA_CATEGORIES.length} categories to ${outputPath}`);
