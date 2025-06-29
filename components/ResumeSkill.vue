<template>
  <div class="skill">
    <div class="name">
      <span
        class="pr-1 font-bold font-serif leading-relaxed"
        v-html="skill.name"></span>
      <span v-if="skill.additional != ''" class="additional">
        {{ skill.additional }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  skill: {
    name: string;
    additional: string;
    duration: string;
    desc: string;
  };
}>();
</script>
