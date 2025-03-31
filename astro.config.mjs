import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Configuración de Astro
export default defineConfig({
  integrations: [tailwind()],
});
