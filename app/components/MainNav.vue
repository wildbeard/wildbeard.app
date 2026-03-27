<template>
  <nav
    class="fixed right-0 bottom-0 left-0 lg:relative lg:right-[unset] lg:bottom-[unset] lg:left-[unset] lg:w-max py-2 px-5 lg:p-0 lg:text-xl bg-slate-200 lg:bg-transparent border-t-bossanova-800 border-t-4 lg:border-t-transparent lg:border-t-0 z-10">
    <ul class="flex justify-between">
      <li class="hidden lg:mr-2">
        <NuxtLink
          to="/blog"
          class="text-bossanova lg:text-white md:py-3 md:px-2">
          <FontAwesomeIcon
            :icon="faToiletPaper"
            class="w-[0.875rem] lg:w-4 mr-1 align-middle"
            aria-hidden="true" />
          Blog
        </NuxtLink>
      </li>
      <li class="lg:mr-2">
        <NuxtLink
          external
          href="https://codepen.io/wildbeard"
          target="_blank"
          class="text-bossanova lg:text-white md:py-3 md:px-2">
          <FontAwesomeIcon
            :icon="faCodepen"
            class="w-[0.875rem] lg:w-4 mr-1 align-middle"
            aria-hidden="true" />
          Codepen
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          external
          href="https://github.com/wildbeard"
          target="_blank"
          class="text-bossanova lg:text-white md:py-3 md:px-2">
          <FontAwesomeIcon
            :icon="faGithub"
            class="w-[0.875rem] lg:w-4 mr-1 align-middle"
            aria-hidden="true" />
          Github
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faToiletPaper } from '@fortawesome/free-solid-svg-icons';
import { faCodepen, faGithub } from '@fortawesome/free-brands-svg-icons';
</script>
