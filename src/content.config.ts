import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

import { defineCollection } from 'astro:content';

const postsCollection = defineCollection({
  loader: glob({ base: './src/content/posts', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    tags: z.array(z.string()).optional().default([]),
    thumbnail: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = {
  posts: postsCollection,
};
