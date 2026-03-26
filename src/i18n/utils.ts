import type { Lang } from '@/configurations/i18n';

export function getLangFromUrl(url: URL): Lang {
  const pathname = url.pathname;
  if (pathname.startsWith('/de/') || pathname === '/de') return 'de';
  return 'en';
}

export function getAlternateUrl(url: URL, siteUrl: string): { en: string; de: string } {
  const pathname = url.pathname;
  let basePath: string;

  if (pathname.startsWith('/de/') || pathname === '/de') {
    basePath = pathname.replace(/^\/de\/?/, '/') || '/';
  } else {
    basePath = pathname;
  }

  // Normalize trailing slash
  const normalizedBase = basePath === '/' ? '/' : basePath.replace(/\/$/, '');
  const dePath = normalizedBase === '/' ? '/de/' : `/de${normalizedBase}`;

  return {
    en: `${siteUrl}${normalizedBase === '/' ? '/' : normalizedBase}`,
    de: `${siteUrl}${dePath}`,
  };
}
