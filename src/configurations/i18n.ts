export type Lang = 'en' | 'de';
export const SUPPORTED_LANGUAGES: readonly Lang[] = ['de', 'en'] as const;
export const FALLBACK_LANGUAGE: Lang = 'en';
