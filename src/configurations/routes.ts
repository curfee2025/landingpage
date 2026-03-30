import { BRAND } from '@/configurations/brand';
import type { Lang } from '@/configurations/i18n';

export const ROUTES = {
  home: '/',
  about: '/about',
  diagnosis: '/services/diagnosis',
  design: '/services/guidance',
  advisory: '/services/sparring',
  faq: '/faq',
  imprint: '/imprint',
  privacy: '/privacy',
  cookies: '/cookies',
} as const;

export function localizedRoutes(lang: Lang) {
  if (lang === 'de') {
    return {
      home: '/de/',
      about: '/de/about',
      diagnosis: '/de/services/diagnosis',
      design: '/de/services/guidance',
      advisory: '/de/services/sparring',
      faq: '/de/faq',
      imprint: '/de/imprint',
      privacy: '/de/privacy',
      cookies: '/de/cookies',
    };
  }
  return ROUTES;
}

export const EXTERNAL = {
  email: `mailto:${BRAND.email}`,
} as const;
