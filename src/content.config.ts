// Content of the site, written in Markdown.
//
// Blog posts: src/content/blog/<lang>/<slug>.md
//   en/my-post.md → /blog/my-post      fr/my-post.md → /fr/blog/my-post
//   Give a translation the same file name in the other folder.
//
// Pages (privacy, terms): src/content/pages/<lang>/<slug>.md
//
// Links (the toolbox): src/content/links/<lang>/<tool>.md
//   The front matter describes the tool, the text below it is a short summary.
//   Give the translation the same file name in the other folder.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { categoryIds } from './data/categories';
import { linkCategoryIds, linkTagIds } from './data/links';

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

const links = defineCollection({
  loader: glob({ pattern: '{en,fr}/*.md', base: './src/content/links' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      /** One sentence: what the tool is */
      description: z.string(),
      category: z.enum(linkCategoryIds),
      tags: z.array(z.enum(linkTagIds)).default([]),
      /** e.g. 'macOS · iOS' or 'Docker · Linux' */
      platforms: z.string().optional(),
      site: z.string().url(),
      repo: z.string().url().optional(),
      /** Official logo, stored in src/assets/links/ (never loaded from the tool's site) */
      logo: image().optional(),
      /** Two letters shown when there is no logo; defaults to the first letters of the name */
      monogram: z.string().max(3).optional(),
      /** Screenshots stored next to the logo, shown when the card is open */
      screenshots: z.array(z.object({ src: image(), alt: z.string() })).default([]),
      /** Lower comes first */
      order: z.number().default(100),
      /** Drafts show up with `npm run dev` but are never published */
      draft: z.boolean().default(false),
    }),
});

export const collections = { blog, pages, links };
