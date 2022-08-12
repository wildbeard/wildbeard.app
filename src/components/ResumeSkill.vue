<template>
  <div class="skill">
    <div class="name">
      <span v-html="skill.name"></span>
      <span v-if="skill.duration != ''"> | {{ skill.duration }}</span>
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
