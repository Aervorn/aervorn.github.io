import type { APIContext } from 'astro';
import { rssFeed } from '../utils/rss';
export const GET = (context: APIContext) => rssFeed('en', context.site!);
