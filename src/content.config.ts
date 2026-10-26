// Blog posts: one Markdown file per post in src/content/blog/.
// The file name becomes the URL: my-post.md → /blog/my-post
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { categoryIds } from './data/categories';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
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

export const collections = { blog };
