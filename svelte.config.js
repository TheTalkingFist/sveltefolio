import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null
    }),
    paths: {
      base: '/sveltefolio', // ← Replace this with your actual repo name, e.g., /sveltefolio
    }
  }
};

export default config;

