import { getCollection, type CollectionEntry } from 'astro:content';
import { type Lang, localePath } from '../i18n/config';

export type Post = CollectionEntry<'blog'>;

/** 'fr/my-post' → { lang: 'fr', slug: 'my-post' } */
export function splitId(id: string): { lang: Lang; slug: string } {
  const [lang, ...rest] = id.split('/');
  return { lang: lang as Lang, slug: rest.join('/') };
}

export const postLang = (p: Post) => splitId(p.id).lang;
export const postSlug = (p: Post) => splitId(p.id).slug;
export const postUrl = (p: Post) => localePath(postLang(p), `/blog/${postSlug(p)}`);

const newestFirst = (a: Post, b: Post) => b.data.date.valueOf() - a.data.date.valueOf();

/** Every published post in every language. Drafts are included only in `npm run dev`. */
export async function getAllPosts(): Promise<Post[]> {
  const posts = await getCollection('blog', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort(newestFirst);
}

/** Posts written in a language, newest first */
export async function getPosts(lang: Lang): Promise<Post[]> {
  return (await getAllPosts()).filter((p) => postLang(p) === lang);
}

/**
 * Posts to list for a language: the ones written in it, plus the ones that only
 * exist in the other language (shown with a language badge).
 */
export async function getListedPosts(lang: Lang): Promise<Post[]> {
  const all = await getAllPosts();
  const own = all.filter((p) => postLang(p) === lang);
  const ownSlugs = new Set(own.map(postSlug));
  const others = all.filter((p) => postLang(p) !== lang && !ownSlugs.has(postSlug(p)));
  return [...own, ...others].sort(newestFirst);
}

/** The same post in another language, if it exists */
export async function getTranslation(post: Post, lang: Lang): Promise<Post | undefined> {
  const all = await getAllPosts();
  return all.find((p) => postLang(p) === lang && postSlug(p) === postSlug(post));
}

/** Estimated reading time in minutes (230 words per minute) */
export function readingTime(markdown = ''): number {
  const words = markdown.replace(/```[\s\S]*?```/g, ' ').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 230));
}
