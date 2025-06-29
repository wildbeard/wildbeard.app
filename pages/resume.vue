<template>
  <div id="resume">
    <div class="resume container mt-4 mx-auto px-4">
      <div class="flex flex-wrap headline-row items-center">
        <h1 class="basis-full md:basis-1/2 leading-none">
          Preston<br>Haddock
        </h1>
        <ul
          class="basis-full md:basis-1/2 mt-4 md:mt-0 side-by-side personal-info md:text-right">
          <li>
            <a href="mailto:prestonhaddock@gmail.com">prestonhaddock@gmail.com</a>
          </li>
          <li>
            <a href="https://github.com/wildbeard" target="_blank">
              <FontAwesomeIcon
                :icon="faGithub"
                class="inline"
                aria-hidden="true"
                width="18" />
              github/wildbeard
            </a>
          </li>
          <li>
            <a href="https://github.com/wildbeard" target="_blank">
              <FontAwesomeIcon
                :icon="faCodepen"
                class="inline"
                aria-hidden="true"
                width="18" />
              codepen/wildbeard
            </a>
          </li>
        </ul>
      </div>
      <!-- !.row -->

      <div>
        <div class="skills">
          <p>
            Senior Software Engineer with 12+ years of experience specializing
            in:
          </p>

          <ul class="list-disc list-inside mt-4 mb-8 pl-4">
            <li>
              Full-stack development with expertise in modern JavaScript
              frameworks and LAMP/LEMP ecosystems
            </li>
            <li>
              Marketing site optimization and performance tuning, achieving 11%
              higher conversion rates
            </li>
            <li>
              Building scalable applications across e-commerce, sports,
              compliance, and creative industries
            </li>
            <li>
              Translating complex requirements into pixel-perfect, user-centric
              solutions
            </li>
          </ul>
        </div>

        <div class="mt-9">
          <h2 class="mb-4 text-2xl">
            Experience
          </h2>
          <hr class="mb-9">

          <ResumeJob v-for="job in jobs" :key="job.company.name" :job="job" />
        </div>

        <div class="mt-9 pb-9">
          <h2 class="mb-4 text-2xl">
            Technical Skills
          </h2>
          <hr class="mb-9">

          <ResumeSkill
            v-for="skill in skills"
            :key="skill.name"
            :skill="skill" />
        </div>
      </div>
    </div>
    <!-- !.container -->
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCodepen, faGithub } from '@fortawesome/free-brands-svg-icons';
//
import jobs from '~/assets/data/jobs.json';
import skills from '~/assets/data/skills.json';

definePageMeta({
  layout: false,
});
</script>

<style lang="scss" scoped>
#resume {
  color: #333;
  background-color: #f2f2f2;
}

.headline-row {
  @apply mb-9 pb-5 border-b-2;
  border-bottom-color: #333;
}

hr {
  @apply border-b-2;
  border-bottom-color: #333;
}
</style>
