<template>
  <div>
    <header class="absolute top-0 right-0 left-0 py-4 z-10">
      <div
        class="container mx-auto px-4 lg:px-0 lg:flex lg:items-center lg:justify-between">
        <NuxtLink to="/">
          <img
            preload
            class="mx-auto lg:mx-0 w-32"
            src="/logo.png"
            title="The Wild Beard"
            alt="Wild Beard">
        </NuxtLink>
        <MainNav />
      </div>
    </header>

    <div>
      <slot></slot>
    </div>
  </div>
</template>
