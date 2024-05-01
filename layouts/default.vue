<template>
  <div>
    <header class="py-4 z-10">
      <div
        class="container mx-auto px-4 lg:px-0 lg:flex lg:items-center lg:justify-between">
        <NuxtLink to="/">
          <img
            preload
            class="mx-auto lg:mx-0 w-24 lg:w-28"
            src="/logo.png"
            title="The Wild Beard"
            alt="Wild Beard">
        </NuxtLink>
        <MainNav />
      </div>
    </header>

    <div class="pb-20 lg:pb-0">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
useHead({
  bodyAttrs: {
    class: 'text-white bg-[#2a2c3b]',
  },
});
</script>
