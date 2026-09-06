import { useCallback, useEffect, useMemo, useState } from 'react';

import { loadDuaFavouriteIds, saveDuaFavouriteIds } from '../lib/storage';

/**
 * Favourite dua IDs, isolated from SettingsContext for the same
 * rerender-scoping reason as useDuaPreferences. Stale IDs (a dua removed
 * in a future release) are harmless here - isFavourite/toggleFavourite
 * only ever compare against plain string IDs, never dereference the dua
 * itself, so a screen mapping favouriteIds to duas just needs to filter
 * out lookups that come back undefined (see app/(tabs)/duas/index.tsx).
 *
 * Every screen that reads favourites (home, category list, reading
 * screen) calls this hook independently, so favouriteIds can't just be
 * local useState - toggling a favourite on the reading screen wouldn't
 * reach the home screen's own state, and it would only catch up on a
 * remount. A tiny module-level cache + subscriber list keeps every
 * mounted instance in sync: toggleFavourite writes through to storage
 * and then pushes the new list to every subscriber immediately.
 */
let cachedIds: string[] | null = null;
let loadPromise: Promise<string[]> | null = null;
const listeners = new Set<(ids: string[]) => void>();

function loadOnce(): Promise<string[]> {
  if (cachedIds) return Promise.resolve(cachedIds);
  if (!loadPromise) {
    loadPromise = loadDuaFavouriteIds().then((ids) => {
      cachedIds = ids;
      return ids;
    });
  }
  return loadPromise;
}

function publish(next: string[]) {
  cachedIds = next;
  listeners.forEach((listener) => listener(next));
}

export function useDuaFavourites() {
  const [favouriteIds, setFavouriteIds] = useState<string[]>(cachedIds ?? []);
  const [isLoaded, setIsLoaded] = useState(cachedIds !== null);

  useEffect(() => {
    let active = true;
    listeners.add(setFavouriteIds);

    if (cachedIds) {
      setFavouriteIds(cachedIds);
      setIsLoaded(true);
    } else {
      loadOnce().then((ids) => {
        if (active) {
          setFavouriteIds(ids);
          setIsLoaded(true);
        }
      });
    }

    return () => {
      active = false;
      listeners.delete(setFavouriteIds);
    };
  }, []);

  const favouriteIdSet = useMemo(() => new Set(favouriteIds), [favouriteIds]);

  const isFavourite = useCallback((duaId: string) => favouriteIdSet.has(duaId), [favouriteIdSet]);

  const toggleFavourite = useCallback((duaId: string) => {
    const current = cachedIds ?? [];
    const next = current.includes(duaId) ? current.filter((id) => id !== duaId) : [...current, duaId];
    saveDuaFavouriteIds(next);
    publish(next);
  }, []);

  return { favouriteIds, isLoaded, isFavourite, toggleFavourite };
}
