/**
 * Dev-time content validator entry point - run with `npm run validate:duas`.
 * Structural checks only (see lib/duaValidator.ts); does not check
 * religious accuracy.
 */
import { DUA_CATEGORIES, ALL_DUAS, EVERY_DUA } from '../data/duas';
import { validateDuaContent } from '../lib/duaValidator';

// EVERY_DUA, not ALL_DUAS - a flagged entry still needs its structure
// checked, and still needs to be well-formed for the review tool to show
// it, even though the app itself never displays it (see data/duas/index.ts).
const issues = validateDuaContent(DUA_CATEGORIES, EVERY_DUA);
const flaggedCount = EVERY_DUA.length - ALL_DUAS.length;

if (issues.length === 0) {
  console.log(
    `Duas content OK - ${ALL_DUAS.length} duas shown across ${DUA_CATEGORIES.length} categories ` +
      `(${flaggedCount} flagged and hidden), 0 issues.`
  );
  process.exit(0);
}

console.error(`Found ${issues.length} issue(s):`);
for (const issue of issues) {
  console.error(` - ${issue.duaId ?? issue.categoryId ?? '(general)'}: ${issue.message}`);
}
process.exit(1);
