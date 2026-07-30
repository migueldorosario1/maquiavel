import { defineConfig } from 'astro/config';

// Maquiavel — revista internacional de ciência política
// Idiomas: EN (base, "/"), PT ("/pt/"), ES ("/es/") — slugs separados por língua.
export default defineConfig({
  site: 'https://maquiavel.vercel.app',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
