<template>
  <blockquote>
    <slot></slot>
    <div class="author">
      <slot name="author"></slot>
    </div>
  </blockquote>
</template>

<script>
// @todo: Get this to work as a render func
</script>

<style lang="scss" scoped>
blockquote {
  @apply inline-block bg-white font-serif m-0 py-2 px-4;
	border-left: 2px solid #333;
  .author {
    @apply block text-sm italic;
  }
}
</style>
