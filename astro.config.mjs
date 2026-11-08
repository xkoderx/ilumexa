// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
// v15: GitHub Pages publica el sitio en https://xkoderx.github.io/ilumexa/
// (rama main, carpeta docs). Sin `base`, Astro genera rutas desde la raíz
// (/_astro/...) y los estilos e imágenes dan 404. Con `base`, todo sale
// con /ilumexa/ delante y en local sigue funcionando igual.
export default defineConfig({
  site: 'https://xkoderx.github.io',
  base: '/ilumexa',
  integrations: [tailwind()],
});
