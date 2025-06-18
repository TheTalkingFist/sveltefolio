import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
  base: '/sveltefolio/', // 🔁 replace this with your repo name
  plugins: [sveltekit()]
});
