import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    category: z.enum([
      'ARCHITETTURA', 
      'SVILUPPO', 
      'PERFORMANCE', 
      'NETWORKING', 
      'DEMO', 
      'ROADMAP'
    ]),
  }),
});

export const collections = {
  'blog': blogCollection,
};