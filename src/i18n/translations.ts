import en from './en.json';
import de from './de.json';
import type { Lang } from '@/configurations/i18n';

export type Translations = typeof de;
export type TranslationKey = keyof Translations;

const translations: Record<Lang, Translations> = { en, de };

export function getTranslations(lang: Lang): Translations {
  return translations[lang] ?? translations['de'];
}

export function useTranslations(lang: Lang) {
  const t = translations[lang] ?? translations['de'];
  return function (key: TranslationKey): string {
    return t[key] ?? translations['de'][key] ?? key;
  };
}
