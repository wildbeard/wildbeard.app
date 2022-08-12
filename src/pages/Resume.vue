<template>
  <div id="resume">
    <div class="resume container">
      <div class="row headline-row">
        <div class="headline col-12">
          <div class="row">
            <h1 class="col-6">
              Preston<br>Haddock
            </h1>
            <ul class="col-6 side-by-side personal-info">
              <li>prestonhaddock@gmail.com</li>
            </ul>
          </div>
        </div>
      </div> <!-- !.row -->
			
      <div class="row">
        <div class="skills col-12">
          <h2>Skills</h2>
          <skill
            v-for="skill in skills"
            :key="skill.name"
            :skill="skill" />
        </div> <!-- !.skills -->

        <div class="col-12">
          <hr>
          <h2>Experience</h2>
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
</script>
