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
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxt/content',
    '@nuxt/eslint',
  ],
  image: {
    provider: 'ipx',
  },
  content: {
    renderer: {
      anchorLinks: false,
    },
    build: {
      markdown: {
        highlight: {
          theme: 'github-dark',
          langs: ['javascript', 'typescript', 'gdscript'],
        },
      },
    },
  },
});

