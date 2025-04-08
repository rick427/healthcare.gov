// @ts-check
import { defineConfig } from 'astro/config';

import icon from "astro-icon";
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
  vite: {
    resolve: {
      alias: {
        '@': new URL('./src', import.meta.url).pathname,
      },
    },
  },
  integrations: [icon({
    include: {
      bi: ["*"] // (Default) Loads the entire "bi" icon set
    }
  })],
});