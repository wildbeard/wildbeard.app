export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'eng',
      },
      title: 'Wild Beard',
      meta: [
        {
          property: 'description',
          content: 'Building and breaking things on the web.',
        },
        {
          property: 'og:description',
          content: 'Building and breaking things on the web.',
        },
        { property: 'og:image', content: '/Le-Beard.png' },
        { property: 'og:title', content: 'Wild Beard' },
        { property: 'og:url', content: 'https://wildbeard.dev' },
      ],
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
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],
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
  },
});
