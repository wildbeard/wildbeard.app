import { globSync } from 'glob';

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'en-US',
      },
      title: 'Wild Beard aka Press',
      meta: [],
      link: [
        { rel: 'icon', type: 'image/png', href: '/Le-Beard.png' },
        {
          rel: 'preload',
          type: 'font/ttf',
          as: 'font',
          href: '/fonts/Hobo.ttf',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'anonymous',
        },
      ],
    },
  },
  devtools: {
    enabled: process.env.APP_ENV !== 'production',
  },
  ssr: true,
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@nuxt/content'],
  image: {
    provider: 'ipx',
  },
  content: {
    markdown: {
      anchorLinks: false,
    },
    highlight: {
      theme: 'github-dark',
      langs: ['javascript', 'typescript', 'gdscript'],
    },
  },
  // See: https://nuxt.com/docs/getting-started/styling#lcp-advanced-optimizations
  // However, some of the CSS files are still being included even though
  // everything is inlined.
  hooks: {
    'build:manifest': (manifest) => {
      for (const key in manifest) {
        if (
          key.includes('css') ||
          manifest[key].isEntry ||
          manifest[key].isDynamicEntry
        ) {
          manifest[key].css = [];
        }
      }
    },
    'nitro:config'(nitroConfig) {
      if (nitroConfig.dev) {
        return;
      }

      const slugs = globSync('./content/blog/**/*.md').map((path) => {
        const slugPath = path.replace('content', '').replace('.md', '');
        return slugPath;
      });

      nitroConfig.prerender?.routes?.push('/blog', ...slugs);
    },
  },
});
