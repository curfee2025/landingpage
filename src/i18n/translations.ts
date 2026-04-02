import en from './en.json';
import de from './de.json';
import type { Lang } from '@/configurations/i18n';

const translations: Record<Lang, Record<string, string>> = { en, de };

export function getTranslations(lang: Lang): Record<string, string> {
  return translations[lang] ?? translations['de'];
}
