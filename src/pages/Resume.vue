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
            <a
              href="https://github.com/wildbeard"
              target="_blank">
              <FontAwesomeIcon
                :icon="faGithub"
                aria-hidden="true" />
              github/wildbeard
            </a>
          </li>
          <li>
            <a
              href="https://github.com/wildbeard"
              target="_blank">
              <FontAwesomeIcon
                :icon="faCodepen"
                aria-hidden="true" />
              codepen/wildbeard
            </a>
          </li>
        </ul>
      </div>
      <!-- !.row -->

      <div>
        <div class="skills">
          <h2 class="my-4 text-2xl">
            About Me
          </h2>

          <p>
            Hey, I'm Press! I am a Front End Engineer focusing on quality user
            experiences and site performance. In my professional journey I've
            lent my skill set to multiple different industries, ranging from
            sports and distilling to outdoor landscaping design and creative
            agencies. I enjoy the process of translating designs into
            pixel-perfect pages and user experiences.
          </p>

          <h2 class="my-4 text-2xl">
            Skills
          </h2>
          <ResumeSkill
            v-for="skill in skills"
            :key="skill.name"
            :skill="skill" />
        </div>
        <!-- !.skills -->

        <div class="mt-9">
          <hr class="mb-9">
          <h2 class="mb-4 text-2xl">
            Experience
          </h2>
          <ResumeJob
            v-for="job in jobs"
            :key="job.company.name"
            :job="job" />
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
import ResumeJob from '../components/ResumeJob.vue';
import ResumeSkill from '../components/ResumeSkill.vue';
import jobs from '../data/jobs.json';
import skills from '../data/skills.json';

jobs.reverse();
</script>

<style lang="scss" scoped>
.headline-row {
  @apply mb-9 pb-5 border-b-2;
  border-bottom-color: #333;
}

hr {
  @apply border-b-2;
  border-bottom-color: #333;
}
</style>
