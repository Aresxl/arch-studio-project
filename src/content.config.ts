import { defineCollection, z } from "astro:content";
import { file } from "astro/loaders";

export const collections = {
  projects: defineCollection({
    loader: file(`src/data/projects.json`),
    schema: ({ image }) =>
      z.object({
        id: z.string(),
        title: z.string(),
        description: z.string().optional(),
        gallery: z.object({
          portfolio: z.object({
            desktop: image(),
            tablet: image(),
            mobile: image(),
          }),
          hero: z
            .object({
              desktop: image(),
              tablet: image(),
              mobile: image(),
            })
            .optional(),
        }),
        roles: z.array(z.enum(["hero", "featured", `portfolio`])),
        date: z.coerce.date(),
      }),
  }),
};
