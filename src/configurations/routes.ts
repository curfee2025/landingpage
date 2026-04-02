import { BRAND } from '@/configurations/brand';
import type { Lang } from '@/configurations/i18n';

export const ROUTES = {
  home: '/',
  about: '/about',
  diagnosis: '/services/diagnosis',
  guidance: '/services/guidance',
  sparring: '/services/sparring',
  faq: '/faq',
  imprint: '/imprint',
  privacy: '/privacy',
  cookies: '/cookies',
} as const;

export function localizedRoutes(lang: Lang) {
  if (lang === 'en') {
    return {
      home: '/en/',
      about: '/en/about',
      diagnosis: '/en/services/diagnosis',
      guidance: '/en/services/guidance',
      sparring: '/en/services/sparring',
      faq: '/en/faq',
      imprint: '/en/imprint',
      privacy: '/en/privacy',
      cookies: '/en/cookies',
    };
  }
  return ROUTES;
}

export const EXTERNAL = {
  email: `mailto:${BRAND.email}`,
} as const;
