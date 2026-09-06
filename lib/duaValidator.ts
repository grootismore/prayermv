import type { Dua, DuaCategory } from '../types/dua';

/**
 * Dev-time content validator for the Duas & Adhkar feature. Pure and
 * dependency-free so it can run from a plain Node script (see
 * scripts/validateDuas.ts) as well as from the app itself in `__DEV__` if
 * ever useful. Catches structural mistakes (duplicate/dangling ids, empty
 * required fields, invalid repetition counts) - it says nothing about
 * religious accuracy, which is a human reviewer's job (see
 * data/duas/CONTENT_REVIEW.md).
 */

export interface DuaValidationIssue {
  duaId?: string;
  categoryId?: string;
  message: string;
}

export function validateDuaContent(categories: DuaCategory[], duas: Dua[]): DuaValidationIssue[] {
  const issues: DuaValidationIssue[] = [];
  const categoryIds = new Set(categories.map((c) => c.id));
  const seenCategoryIds = new Set<string>();
  const seenDuaIds = new Set<string>();

  for (const category of categories) {
    if (seenCategoryIds.has(category.id)) {
      issues.push({ categoryId: category.id, message: `Duplicate category id "${category.id}"` });
    }
    seenCategoryIds.add(category.id);

    if (!category.title.en.trim() || !category.title.dv.trim()) {
      issues.push({ categoryId: category.id, message: 'title.en and title.dv must both be non-empty' });
    }
    if (!category.icon.trim()) {
      issues.push({ categoryId: category.id, message: 'icon must be non-empty' });
    }
  }

  for (const dua of duas) {
    if (seenDuaIds.has(dua.id)) {
      issues.push({ duaId: dua.id, message: `Duplicate dua id "${dua.id}"` });
    }
    seenDuaIds.add(dua.id);

    if (!categoryIds.has(dua.categoryId)) {
      issues.push({ duaId: dua.id, message: `References unknown categoryId "${dua.categoryId}"` });
    }

    if (!dua.title.en.trim() || !dua.title.dv.trim()) {
      issues.push({ duaId: dua.id, message: 'title.en and title.dv must both be non-empty' });
    }
    if (!dua.arabic.trim()) issues.push({ duaId: dua.id, message: 'arabic must be non-empty' });
    if (!dua.transliteration.trim()) issues.push({ duaId: dua.id, message: 'transliteration must be non-empty' });
    if (!dua.translation.en.trim() || !dua.translation.dv.trim()) {
      issues.push({ duaId: dua.id, message: 'translation.en and translation.dv must both be non-empty' });
    }
    if (!dua.source.reference.trim()) {
      issues.push({ duaId: dua.id, message: 'source.reference must be non-empty' });
    }

    if (dua.repetitions !== undefined && (!Number.isInteger(dua.repetitions) || dua.repetitions <= 0)) {
      issues.push({ duaId: dua.id, message: `repetitions must be a positive integer, got ${dua.repetitions}` });
    }

    if (dua.segments !== undefined) {
      if (dua.segments.length === 0) {
        issues.push({ duaId: dua.id, message: 'segments, when present, must have at least one entry' });
      }
      dua.segments.forEach((segment, index) => {
        const label = `segments[${index}]`;
        if (!segment.arabic.trim()) issues.push({ duaId: dua.id, message: `${label}.arabic must be non-empty` });
        if (!segment.transliteration.trim()) {
          issues.push({ duaId: dua.id, message: `${label}.transliteration must be non-empty` });
        }
        if (!segment.translation.en.trim() || !segment.translation.dv.trim()) {
          issues.push({ duaId: dua.id, message: `${label}.translation.en and .dv must both be non-empty` });
        }
        if (!Number.isInteger(segment.repetitions) || segment.repetitions <= 0) {
          issues.push({
            duaId: dua.id,
            message: `${label}.repetitions must be a positive integer, got ${segment.repetitions}`,
          });
        }
      });
    }
  }

  return issues;
}
