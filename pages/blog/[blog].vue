<template>
  <div class="container mx-auto mt-6 px-4">
    <div>
      <h1 class="mb-4 font-hobo text-3xl text-center text-logo">
        {{ post.title }}
      </h1>
      <p class="text-sm text-center italic">
        {{ post.dateStr }} | {{ post.description }}
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
  'prose-a:no-underline',
  'prose-a:text-inherit',
  'prose-p:text-white',
  'prose-em:text-white',
  'prose-strong:text-white',
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
</script>
