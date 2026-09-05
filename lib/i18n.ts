import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';

import en from '../locales/en.json';
import dv from '../locales/dv.json';
import ar from '../locales/ar.json';
import type { AppLanguage } from './storage';

export const SUPPORTED_LANGUAGES: AppLanguage[] = ['en', 'dv', 'ar'];

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
