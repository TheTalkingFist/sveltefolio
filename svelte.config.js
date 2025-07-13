// // svelte.config.js
// import adapter from '@sveltejs/adapter-static';
// import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// const dev = process.env.NODE_ENV !== 'production';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
//     preprocess: vitePreprocess(),
//     kit: {
//         adapter: adapter({
//             pages: 'build',
//             assets: 'build',
//             fallback: undefined,
//             precompress: false,
//             strict: true
//         }),
//         paths: {
//             base: dev ? '' : '/sveltefolio'
//             // Remove the assets line - let SvelteKit handle asset paths automatically
//         },
//         prerender: {
//             handleHttpError: 'warn',
//             entries: ['*']
//         }
//     }
// };

// export default config;

// svelte.config.js
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.env.NODE_ENV !== 'production';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),
    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: '404.html',  // Change from undefined to 'index.html'
            precompress: false,
            strict: true
        }),
        paths: {
            base: dev ? '' : '/sveltefolio'
        },
        prerender: {
            handleHttpError: 'warn',
            entries: ['*']
        }
    }
};

export default config;
