// The "journal" on the home page: latest app releases and blog posts, newest first.
import { apps } from '../data/apps';
import { getListedPosts, postUrl } from './posts';
import { type Lang, localePath } from '../i18n/config';

export interface JournalEntry {
  date: Date;
  kind: 'apps' | 'blog';
  text: string;
  href: string;
}

export async function getJournal(lang: Lang, releaseText: (app: string, version: string) => string, limit = 5): Promise<JournalEntry[]> {
  const releases: JournalEntry[] = apps
    .filter((a) => a.released)
    .map((a) => ({ date: new Date(a.released!), kind: 'apps', text: releaseText(a.name, a.version), href: localePath(lang, `/apps/${a.slug}`) }));
  const posts: JournalEntry[] = (await getListedPosts(lang)).map((p) => ({ date: p.data.date, kind: 'blog', text: p.data.title, href: postUrl(p) }));
  return [...releases, ...posts].sort((a, b) => b.date.valueOf() - a.date.valueOf()).slice(0, limit);
}

/** '2026-11-13 12:41', always in French time so the build server's zone doesn't matter */
export function logStamp(date: Date): string {
  return new Intl.DateTimeFormat('sv-SE', {
    timeZone: 'Europe/Paris',
    year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit',
  }).format(date);
}
