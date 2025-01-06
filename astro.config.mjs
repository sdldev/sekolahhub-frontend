import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import node from '@astrojs/node';

export default defineConfig({
  integrations: [tailwind()],

  // Enable SSR
  output: 'server',

  adapter: node({
    mode: 'standalone'
  })
});