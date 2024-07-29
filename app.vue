<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
useSeoMeta({
  title: 'Wild Beard aka Press',
  description: 'Building and breaking things on the web.',
  ogDescription: 'Building and breaking things on the web.',
  ogImage: '/Le-Beard.png',
  ogTitle: 'Wild Beard',
  ogUrl: 'https://wildbeard.dev',
});
</script>

<style lang="postcss">
@import '~/assets/css/index.css';
</style>
