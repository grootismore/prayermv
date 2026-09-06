import { useCallback, useEffect, useMemo, useState } from 'react';

import { loadDuaFavouriteIds, saveDuaFavouriteIds } from '../lib/storage';

/**
 * Favourite dua IDs, isolated from SettingsContext for the same
 * rerender-scoping reason as useDuaPreferences. Stale IDs (a dua removed
 * in a future release) are harmless here - isFavourite/toggleFavourite
 * only ever compare against plain string IDs, never dereference the dua
 * itself, so a screen mapping favouriteIds to duas just needs to filter
 * out lookups that come back undefined (see app/(tabs)/duas/index.tsx).
 */
export function useDuaFavourites() {
  const [favouriteIds, setFavouriteIds] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      setFavouriteIds(await loadDuaFavouriteIds());
      setIsLoaded(true);
    })();
  }, []);

  const favouriteIdSet = useMemo(() => new Set(favouriteIds), [favouriteIds]);

  const isFavourite = useCallback((duaId: string) => favouriteIdSet.has(duaId), [favouriteIdSet]);

  const toggleFavourite = useCallback((duaId: string) => {
    setFavouriteIds((prev) => {
      const next = prev.includes(duaId) ? prev.filter((id) => id !== duaId) : [...prev, duaId];
      saveDuaFavouriteIds(next);
      return next;
    });
  }, []);

  return { favouriteIds, isLoaded, isFavourite, toggleFavourite };
}
