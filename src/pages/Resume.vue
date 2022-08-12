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
			
      <div class="row">
        <div class="skills col-12">
          <h2 class="my-4 text-2xl">
            Skills
          </h2>
          <skill
            v-for="skill in skills"
            :key="skill.name"
            :skill="skill" />
        </div> <!-- !.skills -->

        <div class="col-12">
          <hr>
          <h2 class="my-4 text-2xl">
            Experience
          </h2>
          <ResumeJob
            v-for="job in jobs"
            :key="job.company.name"
            :job="job" />
        </div>
      </div> <!-- !.row -->
    </div> <!-- !.container -->
  </div>
</template>

<script setup>
import ResumeJob from '../components/ResumeJob.vue';
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
