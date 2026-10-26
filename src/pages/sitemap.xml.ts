// List of every page, for search engines: /sitemap.xml
import type { APIContext } from 'astro';
import { apps } from '../data/apps';
import { getAllPosts, postUrl } from '../utils/posts';
import { langs, localePath } from '../i18n/config';

export async function GET({ site }: APIContext) {
  const paths = ['/', '/blog', '/privacy', '/terms', ...apps.map((a) => `/${a.slug}`)];
  const urls = langs.flatMap((l) => paths.map((p) => localePath(l, p)));
  const posts = (await getAllPosts()).filter((p) => !p.data.draft).map(postUrl);

  // GitHub Pages serves every page as a folder: /blog → /blog/
  const withSlash = (p: string) => (p.endsWith('/') ? p : `${p}/`);
  const body = [...urls, ...posts]
    .map((p) => `  <url><loc>${new URL(withSlash(p), site).href}</loc></url>`)
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
