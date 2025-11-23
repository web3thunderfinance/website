// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://web3thunder.finance',
  vite: {
    plugins: [tailwindcss()]
  }
});
