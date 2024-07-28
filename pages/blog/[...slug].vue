<template>
  <div class="container mx-auto mt-6 px-4">
    <div>
      <h1 class="text-3xl text-center">
        {{ data.title }}
      </h1>
      <p class="text-sm text-center italic">
        {{ data.description }}
      </p>
    </div>

    <div
      class="prose prose-headings:text-white prose-a:text-inherit prose-p:text-white prose-em:text-white prose-strong:text-white max-w-none">
      <ContentRenderer v-if="articles" :value="articles">
        <template #empty>
          No Content!
        </template>
      </ContentRenderer>
    </div>
  </div>
</template>

<script setup>
const { path } = useRoute();
const { data: articles, error } = useAsyncData(`blog-post-${path}`, () =>
  queryContent(path).findOne(),
);

if (error.value) {
  navigateTo('/404');
}

const data = computed(() => {
  return {
    title: articles.value?.title || 'title unavail',
    description: articles.value?.description || 'description unavail',
    tags: articles.value?.tags || [],
  };
});
</script>
