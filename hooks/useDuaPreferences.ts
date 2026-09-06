import { useCallback, useEffect, useState } from 'react';

import { loadDuaPreferences, saveDuaPreferences, DEFAULT_DUA_PREFERENCES } from '../lib/storage';
import type { DuaArabicFontSize, DuaPreferences, DuaTranslationLanguage } from '../types/dua';

/**
 * Duas & Adhkar display preferences (translation language, transliteration
 * visibility, Arabic font size) - kept in their own hook rather than the
 * app-wide SettingsContext so that changing them only re-renders Duas
 * screens, not the whole app (SettingsContext's single context value would
 * otherwise re-render every consumer - Home, Qibla, Calendar - on every
 * dua preference change).
 */
export function useDuaPreferences() {
  const [preferences, setPreferences] = useState<DuaPreferences>(DEFAULT_DUA_PREFERENCES);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      setPreferences(await loadDuaPreferences());
      setIsLoaded(true);
    })();
  }, []);

  const setTranslationLanguage = useCallback((translationLanguage: DuaTranslationLanguage) => {
    setPreferences((prev) => {
      const next = { ...prev, translationLanguage };
      saveDuaPreferences(next);
      return next;
    });
  }, []);

  const setShowTransliteration = useCallback((showTransliteration: boolean) => {
    setPreferences((prev) => {
      const next = { ...prev, showTransliteration };
      saveDuaPreferences(next);
      return next;
    });
  }, []);

  const setArabicFontSize = useCallback((arabicFontSize: DuaArabicFontSize) => {
    setPreferences((prev) => {
      const next = { ...prev, arabicFontSize };
      saveDuaPreferences(next);
      return next;
    });
  }, []);

  return { preferences, isLoaded, setTranslationLanguage, setShowTransliteration, setArabicFontSize };
}
