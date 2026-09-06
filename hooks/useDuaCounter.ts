import { useCallback, useEffect, useState } from 'react';

import { loadDuaCounterProgress, saveDuaCounterProgress } from '../lib/storage';

/**
 * Interactive repeat-counter state for a single dua, persisted per dua id
 * so leaving and reopening the reading screen doesn't lose progress. Reads
 * and writes the whole progress blob through lib/storage.ts (never raw
 * AsyncStorage) - fine at this scale (a handful of taps at a time, not a
 * hot loop) and keeps every dua's progress in one place for the "reset
 * completed counters" settings action (resetAllDuaCounterProgress below).
 *
 * `target` is optional (only zikr-type duas with a repetitions count have
 * one) - when given, incrementing never exceeds it.
 */
export function useDuaCounter(duaId: string, target?: number) {
  const [count, setCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setIsLoaded(false);
    (async () => {
      const progress = await loadDuaCounterProgress();
      if (!cancelled) {
        setCount(progress[duaId] ?? 0);
        setIsLoaded(true);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [duaId]);

  const persist = useCallback(
    async (next: number) => {
      const progress = await loadDuaCounterProgress();
      await saveDuaCounterProgress({ ...progress, [duaId]: next });
    },
    [duaId]
  );

  const increment = useCallback(() => {
    setCount((prev) => {
      if (target !== undefined && prev >= target) return prev;
      const next = prev + 1;
      persist(next);
      return next;
    });
  }, [target, persist]);

  const reset = useCallback(() => {
    setCount(0);
    persist(0);
  }, [persist]);

  const isComplete = target !== undefined && count >= target;

  return { count, target, increment, reset, isComplete, isLoaded };
}

/** Clears repeat-counter progress for every dua at once - the "Reset zikr progress" action in Settings. */
export async function resetAllDuaCounterProgress(): Promise<void> {
  await saveDuaCounterProgress({});
}
