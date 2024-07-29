<template>
  <div class="container mx-auto px-4">
    <div class="my-8 md:mt-8 md:mb-16">
      <h1 class="font-hobo text-logo text-center text-4xl">
        Ramblings
      </h1>

      <p class="mt-3 text-sm italic text-center">
        The occasional thoughts of someone with poor writing skills.
      </p>

      <hr class="mt-3 mx-auto border-t-logo md:w-1/2">
    </div>

    <div class="flex flex-wrap -mx-4 px-4 lg:w-3/4 lg:mx-auto">
      <div class="w-full md:w-1/4 md:order-2 md:mb-0">
        <h2 class="hidden mb-2 text-lg text-center md:block">
          Tags:
        </h2>
        <div class="flex justify-center flex-wrap mb-4">
          <span
            v-for="tag in allTags"
            :key="tag"
            class="mr-2 mb-2.5 py-1 px-1.5 text-xs bg-slate-600 rounded hover:cursor-pointer"
            :class="selectedTags.includes(tag) ? 'bg-green-400' : ''"
            @click="toggleTag(tag)">
            {{ tag }}
          </span>
        </div>
      </div>

      <div class="w-full md:w-3/4 md:order-1">
        <template v-if="!posts.length">
          <h3>Hmm, no posts found.</h3>
        </template>
        <article
          v-for="post in posts"
          v-else
          :key="post.id"
          class="md:max-w-md mb-4 py-5 px-4 bg-bossanova-600 rounded-lg lg:bg-transparent lg:rounded-none">
          <div class="relative group hover:cursor-pointer">
            <h3>
              <NuxtLink :to="post.path">
                <span class="absolute inset-0"></span>
                <span
                  class="text-xl font-semibold text-white transition-colors group-hover:text-logo">
                  {{ post.title }}
                </span>
              </NuxtLink>
            </h3>

            <p class="my-1.5">
              {{ post.description }}
            </p>

            <div class="flex flex-wrap items-center">
              <p class="text-sm font-thin">
                {{ post.dateStr }}
              </p>

              <div
                v-if="post.tags.length"
                class="w-full my-2 md:w-auto md:ml-4">
                <span
                  v-for="tag in post.tags"
                  :key="tag"
                  class="mr-2 py-1 px-1.5 text-xs border border-slate-600 rounded hover:cursor-pointer">{{ tag }}</span>
              </div>
            </div>

            <p>
              <NuxtLink
                :to="post.path"
                class="transition-colors text-logo text-sm underline">
                Read Post
              </NuxtLink>
            </p>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Post } from '~/types/Post';

const { data } = useAsyncData('posts', () =>
  queryContent('blog').sort({ date: -1 }).find(),
);

const dateFmtOpts: Intl.DateTimeFormatOptions = {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
};
const allTags = computed(() => {
  const tags: string[] = [];

  data.value?.forEach(post =>
    post.tags?.length ? tags.push(...post.tags) : null,
  );

  return tags;
});
const selectedTags = ref<string[]>([]);
const posts = computed<Post[]>(() => {
  return (
    data.value
      ?.filter((post) => {
        if (selectedTags.value.length) {
          return (
            !post.draft &&
            post.tags?.filter((t: string) => selectedTags.value.includes(t))
              .length
          );
        } else {
          return !post.draft;
        }
      })
      .map((post) => {
        const date = new Date(post.date);

        return {
          id: post._id || 'id',
          path: post._path as string,
          title: post.title || 'title',
          description: post.description || 'description',
          date,
          dateStr: Intl.DateTimeFormat('en-US', dateFmtOpts).format(date),
          tags: post.tags || [],
        };
      }) || []
  );
});

function toggleTag(tag: string) {
  selectedTags.value.includes(tag)
    ? (selectedTags.value = selectedTags.value.filter(t => t !== tag))
    : selectedTags.value.push(tag);
}
</script>
