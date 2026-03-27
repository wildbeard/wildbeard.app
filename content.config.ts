import { defineCollection, defineContentConfig, z } from '@nuxt/content';

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      source: 'blog/**/*.md',
      type: 'page',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        published_at: z.string(),
        tags: z.array(z.string()).default([]),
        draft: z.boolean().default(true),
        published: z.boolean().default(false),
      }),
    }),
  },
});
