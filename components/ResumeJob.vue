<template>
  <div class="company">
    <div class="company-info">
      <div class="where">
        <span
          class="company-name font-serif font-bold"
          :class="job.company.class">
          {{ job.company.name }}<span class="hidden md:inline-block">,</span>
        </span>
        <span class="italic font-sans company-location">
          <span class="hidden md:inline-block">&nbsp;</span>
          {{ job.location }}
        </span>
      </div>
      <div class="timeline">
        {{ job.duration }}
      </div>
      <div class="title font-bold">
        {{ job.title }}
      </div>
      <ul class="callouts">
        <li v-for="(callout, index) in job.callouts" :key="index">
          <template v-if="typeof callout === 'object'">
            {{ callout.desc }}
            <ul class="flex flex-wrap side-by-side">
              <li
                v-for="(subCallout, subIndex) in callout.callouts"
                :key="subIndex"
                class="basis-full md:basis-1/2 mb-4">
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

<script setup lang="ts">
import { computed } from 'vue';

defineProps<{
  job: {
    company: {
      name: string;
      class: string;
      site?: string;
    };
    title: string;
    location: string;
    duration: string;
    technologies?: string;
    callouts: string[];
  };
}>();

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
    @apply flex flex-wrap basis-4/6 md:basis-3/5;
    .company-name,
    .company-location {
      @apply flex-auto basis-full md:flex-none;
    }
  }
  .title,
  .callouts {
    @apply flex-none basis-full;
  }
  .timeline {
    @apply flex-none basis-1/3 md:basis-2/5 text-right;
  }
  .callouts {
    @apply mt-3 pl-8 list-disc font-sans;
  }
  .technologies {
    @apply flex flex-wrap flex-1 max-w-full mt-4 md:mt-0;

    span {
      @apply mr-2;
    }
  }
}
.company-info {
  @apply flex-wrap;
}
.company-name {
  @apply tracking-wider;
}
.yardzen {
  @apply text-yardzen;
}
.wild {
  @apply text-wild;
}
.fx5 {
  @apply text-fx5;
}
.tig {
  @apply text-tig;
}
.lf {
  @apply text-lf;
}
.asa {
  @apply text-asa;
}
.math {
  @apply text-math;
}
.adv {
  @apply text-adv;
}
.bsd {
  @apply text-bsd;
}
</style>
