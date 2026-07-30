import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Artigos/ensaios da revista, organizados por língua em pastas:
// src/content/artigos/{en,pt,es}/*.md
const artigos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/artigos' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    lang: z.enum(['en', 'pt', 'es']),
    par_trilingue: z.string(), // chave comum que liga as 3 versões do mesmo artigo
    secao: z.enum(['Essays', 'Interviews', 'Curation', 'Dossiers', 'Reviews']).default('Essays'),
    autor: z.string().default('Maquiavel'),
    tags: z.array(z.string()).default([]),
    fonte_curadoria: z.string().optional(), // URL da fonte original (quando curadoria)
    licenca_fonte: z.string().optional(),   // ex.: "CC BY 4.0 — traduzido com crédito"
    draft: z.boolean().default(false),
  }),
});

export const collections = { artigos };
