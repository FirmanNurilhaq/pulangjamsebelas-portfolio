import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    category: z.string(),
    publishDate: z.date(),
    image: z.string(),
    excerpt: z.string(),
  }),
});

export const collections = {
  projects,
};
