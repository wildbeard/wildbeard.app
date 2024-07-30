<template>
  <div class="container mx-auto mt-6 px-4 md:pb-12">
    <div>
      <h1 class="mb-4 font-hobo text-3xl text-center text-logo">
        {{ post.title }}
      </h1>
      <p class="text-sm text-center italic">
        {{ post.description }} <br>
        {{ post.dateStr }}
      </p>
      <hr class="mt-3 mx-auto border-t-logo md:w-1/2">
    </div>

    <div :class="prose">
      <ContentRenderer v-if="articles" :value="articles">
        <template #empty>
          <h3 class="my-12 text-xl text-logo text-center">
            Hmm, looks like I forgot to write something.
          </h3>
        </template>
      </ContentRenderer>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Post } from '~/types/Post';
const { path } = useRoute();
const { data: articles, error } = useAsyncData(`blog-post-${path}`, () =>
  queryContent(path).findOne(),
);

if (error.value) {
  navigateTo('/404');
}

const prose = [
  'prose',
  'prose-headings:text-logo',
  'prose-headings:font-semibold',
  'prose-a:text-logo',
  'prose-p:text-white',
  'prose-em:text-white',
  'prose-strong:text-white',
  'prose-li:text-white',
  'max-w-none',
];
const post = computed<Post>(() => {
  const date = articles.value?.date
    ? new Date(articles.value.date)
    : new Date();
  const dateFmtOpts: Intl.DateTimeFormatOptions = {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  };

  return {
    id: articles.value?._id || '',
    path: articles.value?._path || '',
    title: articles.value?.title || 'title unavail',
    description: articles.value?.description || 'description unavail',
    tags: articles.value?.tags || [],
    date,
    dateStr: Intl.DateTimeFormat('en-US', dateFmtOpts).format(date) || '',
  };
});

useSeoMeta({
  titleTemplate: title => `${post.value.title} | ${title}`,
  author: 'Wild Beard',
  // @todo: Figure out how to load title from above into here
  ogTitle: `${post.value.title}`,
  description: post.value.description,
  ogDescription: post.value.description,
  ogUrl: `https://wildbeard.dev${post.value.path}`,
  ogType: 'article',
});
</script>
