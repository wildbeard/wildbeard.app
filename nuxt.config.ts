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
  devtools: {
    enabled: process.env.APP_ENV !== 'production',
  },
  ssr: true,
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],
  image: {
    provider: 'netlify',
    netlify: {
      baseURL: (() => {
        if (process.env.APP_ENV === 'production') {
          return 'https://wildbeard.app/.netlify/images';
        }

        return `https://${process.env.APP_ENV}--wildbeard.netlify.app/.netlify/images`;
      })(),
    },
  },
  hooks: {
    'build:manifest': (manifest) => {
      // find the app entry, css list
      const css = manifest['node_modules/nuxt/dist/app/entry.js']?.css;
      if (css) {
        // start from the end of the array and go to the beginning
        for (let i = css.length - 1; i >= 0; i--) {
          // if it starts with 'entry', remove it from the list
          if (css[i].startsWith('entry')) css.splice(i, 1);
        }
      }
    },
  },
});
