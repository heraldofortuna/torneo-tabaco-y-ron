// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://heraldofortuna.github.io',
  base: '/torneo-tabaco-y-ron',
  vite: {
    plugins: [tailwindcss()],
  },
});
