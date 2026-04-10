import { SUPPORTED_LANGUAGES, FALLBACK_LANGUAGE } from '@/configurations/i18n';
import type { Lang } from '@/configurations/i18n';

const STORAGE_KEY = 'lang-preference';

export function detectBrowserLanguage(): Lang {
  const browserLangs = navigator.languages ?? [navigator.language ?? ''];
  for (const tag of browserLangs) {
    const primary = tag.split('-')[0].toLowerCase();
    if ((SUPPORTED_LANGUAGES as readonly string[]).includes(primary)) {
      return primary as Lang;
    }
  }
  return FALLBACK_LANGUAGE;
}

export function getStoredLanguage(): Lang | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && (SUPPORTED_LANGUAGES as readonly string[]).includes(stored)) {
      return stored as Lang;
    }
  } catch {
    // localStorage unavailable (e.g. private browsing)
  }
  return null;
}

export function storeLanguagePreference(lang: Lang): void {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // localStorage unavailable
  }
}

export function getPageLanguage(): Lang {
  const path = location.pathname;
  return path === '/en' || path.startsWith('/en/') ? 'en' : 'de';
}

export function toLocalizedPath(path: string, lang: Lang): string {
  const basePath = path.replace(/^\/en(\/|$)/, '/') || '/';
  if (lang === 'en') {
    return basePath === '/' ? '/en/' : `/en${basePath}`;
  }
  return basePath;
}

export function initLanguageSwitcher(): void {
  document.querySelectorAll<HTMLAnchorElement>('[data-lang-switch]').forEach((el) => {
    el.addEventListener('click', () => {
      const targetPath = new URL(el.href, location.origin).pathname;
      const targetLang: Lang = targetPath === '/en' || targetPath.startsWith('/en/') ? 'en' : 'de';
      storeLanguagePreference(targetLang);
    });
  });
}
