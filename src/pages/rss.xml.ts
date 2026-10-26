// RSS feed of the blog: https://aervorn.github.io/rss.xml
import type { APIContext } from 'astro';
import { getPosts } from '../utils/posts';
import { categories } from '../data/categories';

const escape = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export async function GET(context: APIContext) {
  const site = context.site!;
  const posts = (await getPosts()).filter((p) => !p.data.draft);

  const items = posts
    .map((p) => {
      const url = new URL(`/blog/${p.id}`, site).href;
      return `    <item>
      <title>${escape(p.data.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escape(p.data.description)}</description>
      <category>${escape(categories[p.data.category].label)}</category>
      <pubDate>${p.data.date.toUTCString()}</pubDate>
    </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Aervorn</title>
    <link>${site.href}</link>
    <description>Home automation, macOS and the making of my Mac apps.</description>
    <language>en</language>
    <atom:link href="${new URL('/rss.xml', site).href}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
