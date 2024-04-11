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
      link: [{ rel: 'icon', type: 'image/png', href: '/Le-Beard.png' }],
    },
  },
  css: ['~/assets/css/index.css'],
  devtools: {
    enabled: true,
  },
  ssr: true,
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],
  image: {
    provider: 'netlify',
    netlify: {
      baseURL: () => {
        if (process.env.APP_ENV === 'production') {
          return 'https://wildbeard.dev/';
        }

        return 'https://staging--wildbeard.netlify.app';
      },
    },
  },
});
