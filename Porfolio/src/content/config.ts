import { defineCollection, z } from "astro:content";

const proyectos = defineCollection({
  schema: z.object({
    nombre: z.string(),
    author: z.string(),
    img: z.string(),
    description: z.string(),
    link: z.string().url(),
  }),
});

const skills = defineCollection({
  schema: z.object({
    img: z.string(),
  }),
});

const works = defineCollection({
  schema: z.object({
    nombre: z.string(),
    ocupacion: z.string(),
    descripcion: z.string(),
    date: z.string(),
  }),
});

export const collections = { proyectos };
