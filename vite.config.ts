import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import Unocss from 'unocss/vite';

/** @type {import('vite').UserConfig} */
const viteConfig = {
  plugins: [sveltekit(), Unocss()],
};

export default defineConfig({
  test: {
    globals: true,
    coverage: {
      provider: 'v8',
    },
  },
  ...viteConfig,
});
