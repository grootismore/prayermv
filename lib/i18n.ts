import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';

import en from '../locales/en.json';
import dv from '../locales/dv.json';
import ar from '../locales/ar.json';
import type { AppLanguage } from './storage';

export const SUPPORTED_LANGUAGES: AppLanguage[] = ['en', 'dv', 'ar'];

/**
 * Each language's own name, in its own script - not translated relative to
 * whatever language is currently active (unlike locales/*.json's own
 * `languages` section, which is what Settings' language list uses once a
 * language is already chosen). A first-run language picker needs to show
 * "ދިވެހި" and "العربية" as themselves so a native reader recognizes their
 * own language immediately, not "Dhivehi"/"Arabic" translated into
 * whatever language happens to be active at that point.
 */
export const LANGUAGE_ENDONYMS: Record<AppLanguage, string> = {
  en: 'English',
  dv: 'ދިވެހި',
  ar: 'العربية',
};

function detectDeviceLanguage(): AppLanguage {
  const tag = Localization.getLocales()[0]?.languageCode;
  return SUPPORTED_LANGUAGES.includes(tag as AppLanguage) ? (tag as AppLanguage) : 'en';
}

let initialized = false;

export function initI18n(initialLanguage?: AppLanguage): typeof i18n {
  if (initialized) return i18n;
  initialized = true;

  i18n.use(initReactI18next).init({
    resources: {
      en: { translation: en },
      dv: { translation: dv },
      ar: { translation: ar },
    },
    lng: initialLanguage ?? detectDeviceLanguage(),
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    compatibilityJSON: 'v4',
  });

  return i18n;
}

export default i18n;
