import type { Lang } from '@/configurations/i18n';

export function getLangFromUrl(url: URL): Lang {
  const pathname = url.pathname;
  if (pathname.startsWith('/en/') || pathname === '/en') return 'en';
  return 'de';
}

export function getAlternateUrl(url: URL, siteUrl: string): { en: string; de: string } {
  const pathname = url.pathname;
  let basePath: string;

  if (pathname.startsWith('/en/') || pathname === '/en') {
    basePath = pathname.replace(/^\/en\/?/, '/') || '/';
  } else {
    basePath = pathname;
  }

  const normalizedBase = basePath === '/' ? '/' : basePath.replace(/\/$/, '');
  const enPath = normalizedBase === '/' ? '/en/' : `/en${normalizedBase}`;

  return {
    de: `${siteUrl}${normalizedBase === '/' ? '/' : normalizedBase}`,
    en: `${siteUrl}${enPath}`,
  };
}
