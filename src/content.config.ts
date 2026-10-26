// Content of the site, written in Markdown.
//
// Blog posts: src/content/blog/<lang>/<slug>.md
//   en/my-post.md → /blog/my-post      fr/my-post.md → /fr/blog/my-post
//   Give a translation the same file name in the other folder.
//
// Pages (privacy, terms): src/content/pages/<lang>/<slug>.md
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { categoryIds } from './data/categories';

const blog = defineCollection({
  loader: glob({ pattern: '{en,fr}/**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      updated: z.coerce.date().optional(),
      category: z.enum(categoryIds),
      tags: z.array(z.string()).default([]),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      /** Drafts show up with `npm run dev` but are never published */
      draft: z.boolean().default(false),
    }),
});

const pages = defineCollection({
  loader: glob({ pattern: '{en,fr}/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    updated: z.coerce.date(),
  }),
});

export const collections = { blog, pages };
