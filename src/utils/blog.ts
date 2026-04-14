import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '@/configurations/i18n';

export type BlogPost = CollectionEntry<'blog'>;

const WPM = 225;

export function readingTime(body: string, wpm = WPM): number {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / wpm));
}

export function postSlug(post: BlogPost): string {
  // id format: "de/foo" or "en/foo"; strip locale prefix
  return post.id.replace(/^(de|en)\//, '');
}

export function postLang(post: BlogPost): Lang {
  return post.id.startsWith('en/') ? 'en' : 'de';
}

export async function getPostsForLang(lang: Lang): Promise<BlogPost[]> {
  const all = await getCollection('blog', ({ data, id }) => {
    if (data.draft) return false;
    return id.startsWith(`${lang}/`);
  });
  return all.sort((a, b) => {
    // Featured posts first, then newest first
    if (a.data.featured !== b.data.featured) return a.data.featured ? -1 : 1;
    return b.data.createdAt.getTime() - a.data.createdAt.getTime();
  });
}

export function blogIndexPath(lang: Lang): string {
  return lang === 'en' ? '/en/blog/' : '/blog/';
}

export function postPath(post: BlogPost): string {
  const lang = postLang(post);
  const slug = postSlug(post);
  return lang === 'en' ? `/en/blog/${slug}/` : `/blog/${slug}/`;
}

export function formatDate(date: Date, lang: Lang): string {
  return new Intl.DateTimeFormat(lang === 'en' ? 'en-GB' : 'de-AT', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}
