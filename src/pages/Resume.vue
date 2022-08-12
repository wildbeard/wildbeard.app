<template>
  <div id="resume">
    <div class="resume container mt-4 mx-auto">
      <div class="flex headline-row items-center">
        <h1 class="basis-1/2 leading-none">
          Preston<br>Haddock
        </h1>
        <ul class="basis-1/2 side-by-side personal-info text-right">
          <li><a href="mailto:prestonhaddock@gmail.com">prestonhaddock@gmail.com</a></li>
          <li>
            <a
              href="https://github.com/wildbeard"
              target="_blank">github/wildbeard</a>
          </li>
        </ul>
      </div> <!-- !.row -->
			
      <div>
        <div class="skills">
          <h2 class="my-4 text-2xl">
            Skills
          </h2>
          <ResumeSkill
            v-for="skill in skills"
            :key="skill.name"
            :skill="skill" />
        </div> <!-- !.skills -->

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
    </div> <!-- !.container -->
  </div>
</template>

<script setup>
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
