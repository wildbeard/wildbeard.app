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
    // dir: 'assets',
    provider: 'netlify',
    netlify: {
      baseURL: () => {
        const prefix = process.env.APP_ENV === 'staging' ? 'staging--' : null;
        return `https://${prefix}wildbeard.netlify.app/.netlify/images`;
      },
    },
  },
});
