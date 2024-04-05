<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script setup>
import { computed, useAttrs } from 'vue';

const attrs = useAttrs();
const classes = computed(() => {
  const fromAttrs = attrs?.class?.split(' ') ?? [];
  return ['p-4', 'rounded-lg', 'bg-slate-100', 'text-stone-900', ...fromAttrs];
});
</script>
