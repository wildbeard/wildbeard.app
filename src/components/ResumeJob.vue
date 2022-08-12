<template>
  <div class="company">
    <div class="company-info">
      <div class="where">
        <span
          class="company-name font-serif font-bold"
          :class="`text-${job.company.class}`">
          {{ job.company.name }}<span class="hidden md:inline-block">,</span>
        </span>
        <span class="italic font-sans company-location">&nbsp;{{ job.location }}</span>
      </div>
      <div class="timeline">
        {{ job.duration }}
      </div>
      <div class="title font-bold">
        {{ job.title }}
      </div>
      <div class="technologies">
        <span
          class="font-bold"
          :class="`text-${job.company.class}`">
          Technologies Used:
        </span>
        <span class="font-sans">
          {{ job.technologies }}
        </span>
      </div>
      <ul class="callouts">
        <li
          v-for="(callout, index) in job.callouts"
          :key="index">
          <template v-if="typeof callout === 'object'">
            {{ callout.desc }}
            <ul class="flex flex-wrap side-by-side">
              <li
                v-for="(subCallout, subIndex) in callout.callouts"
                :key="subIndex"
                class="basis-1/2 mb-4">
                <div v-html="subCallout"></div>
              </li>
            </ul>
          </template>
          <template v-else>
            <div v-html="callout"></div>
          </template>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  job: {
    type: Object,
    required: true,
  },
});

const companyClass = computed(() => {
  return `text-${props.job.company.class}`;
});
</script>

<style lang="scss" scoped>
.company-info {
  @apply flex;
}
.company,
.callouts {
  @apply flex-none basis-full;
}
.company {
  @apply mb-4;
  .where,
  .title,
  .callouts,
  .timeline,
  .technologies {
    @apply flex-none font-serif;
  }
  .where {
    @apply flex-none basis-3/5;
  }
  .title,
  .callouts {
    @apply flex-none basis-full;
  }
  .timeline {
    @apply flex-none basis-2/5 text-right;
  }
  .callouts {
    @apply mt-3 pl-8 list-disc;
  }
}
.company-info {
  @apply flex-wrap;
}
.company-name {
  @apply tracking-wider;
}
</style>
