<template>
  <div class="skill">
    <div class="name">
      <span
        class="font-bold font-serif"
        v-html="skill.name"></span>
      <span
        v-if="skill.duration != ''"
        class="font-sans"> | {{ skill.duration }}</span>
    </div>
    <div
      v-if="skill.additional != ''"
      class="additional"
      v-html="skill.additional"></div>
    <div
      v-if="skill.desc != ''"
      class="desc"
      v-html="skill.desc"></div>
  </div>
</template>

<script setup>
defineProps({
  skill: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.skill {
  @apply mb-4 leading-relaxed;
}
.additional ::v-deep strong {
  @apply font-serif;
}
</style>
