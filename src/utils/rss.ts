// RSS feeds of the blog: /rss.xml (English) and /fr/rss.xml (French)
import { getPosts, postUrl } from './posts';
import { categories } from '../data/categories';
import { type Lang, localePath } from '../i18n/config';

const escape = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const descriptions: Record<Lang, string> = {
  en: 'Home automation, macOS and the making of my Mac apps.',
  fr: 'Domotique, macOS et les coulisses de mes applis Mac.',
};

export async function rssFeed(lang: Lang, site: URL): Promise<Response> {
  const posts = (await getPosts(lang)).filter((p) => !p.data.draft);
  const items = posts
    .map((p) => {
      const url = new URL(postUrl(p), site).href;
      return `    <item>
      <title>${escape(p.data.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escape(p.data.description)}</description>
      <category>${escape(categories[p.data.category].label[lang])}</category>
      <pubDate>${p.data.date.toUTCString()}</pubDate>
    </item>`;
    })
    .join('\n');

  const self = new URL(localePath(lang, '/rss.xml'), site).href;
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Aervorn</title>
    <link>${new URL(localePath(lang, '/'), site).href}</link>
    <description>${escape(descriptions[lang])}</description>
    <language>${lang}</language>
    <atom:link href="${self}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
