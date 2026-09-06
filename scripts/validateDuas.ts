/**
 * Dev-time content validator entry point - run with `npm run validate:duas`.
 * Structural checks only (see lib/duaValidator.ts); does not check
 * religious accuracy.
 */
import { DUA_CATEGORIES, ALL_DUAS } from '../data/duas';
import { validateDuaContent } from '../lib/duaValidator';

const issues = validateDuaContent(DUA_CATEGORIES, ALL_DUAS);

if (issues.length === 0) {
  console.log(`Duas content OK - ${ALL_DUAS.length} duas across ${DUA_CATEGORIES.length} categories, 0 issues.`);
  process.exit(0);
}

console.error(`Found ${issues.length} issue(s):`);
for (const issue of issues) {
  console.error(` - ${issue.duaId ?? issue.categoryId ?? '(general)'}: ${issue.message}`);
}
process.exit(1);
