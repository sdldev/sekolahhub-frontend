import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import node from '@astrojs/node';

export default defineConfig({
  integrations: [tailwind()],

  devToolbar: {
    enabled: false
  },
  // Enable SSR
  output: 'server',

  adapter: node({
    mode: 'standalone'
  })
});