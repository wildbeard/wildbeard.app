<template>
  <div
    class="company"
    :class="companyClass">
    <div class="company-info">
      <div class="where">
        <span
          class="bold company-name"
          :class="job.company.class">
          {{ job.company.name }}<span class="desktop-only">,</span>
        </span>
        <span class="fancy company-location">{{ job.location }}</span>
      </div>
      <div class="timeline">
        {{ job.duration }}
      </div>
      <div class="title">
        {{ job.title }}
      </div>
      <div class="technologies">
        <span
          class="bold"
          :class="job.company.class">Technologies Used</span>:
        {{ job.technologies }}
      </div>
      <ul class="callouts">
        <li
          v-for="(callout, index) in job.callouts"
          :key="index">
          <template v-if="typeof callout === 'object'">
            {{ callout.desc }}
            <ul class="side-by-side small">
              <li
                v-for="(subCallout, subIndex) in callout.callouts"
                :key="subIndex">
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
  return `company-${props.job.company.class}`;
});
</script>
