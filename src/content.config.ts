import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const collections = {
  posts: defineCollection({
    loader: glob({ base: './src/content/docs', pattern: '**/*.{md,mdx}' }),
    schema: z.object({
      title: z.string(),
      description: z.string().optional(),
      published: z.coerce.date().optional(),
      updated: z.coerce.date().optional(),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
      pin: z.union([z.boolean(), z.number()]).default(false),
      lang: z.enum(['zh', 'en']).optional(),
    }).passthrough(),
  }),
};
