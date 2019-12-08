<template>

	<div id="resume">

		<div class="resume container">

			<div class="row headline-row">

				<div class="headline col-12">
					<div class="row">
						<h1 class="col-6">Preston<br>Haddock</h1>
						<ul class="col-6 side-by-side personal-info">
							<li>prestonhaddock@gmail.com</li>
						</ul>
					</div>
				</div>

			</div> <!-- !.row -->
			
			<div class="row">

				<div class="skills col-4">
					<skill-category :category="category" v-for="category in skills.types" :key="category.name"></skill-category>
				</div> <!-- !.skills -->

				<div class="experience col-8">
					
					<ul>
						<job v-for="job in jobs" :key="job.company.name" :job="job" />
					</ul>

				</div>

			</div> <!-- !.row -->
			
		</div> <!-- !.container -->

	</div>

</template>
<script>
	import jobs from '../data/jobs.json';
	import skills from '../data/skills.json';
	import SkillCategory from './skill-category';
	import Job from './job';
	export default {
		components: {
			SkillCategory,
			Job,
		},
		data() {
			return {
				skills: skills,
				jobs: jobs.reverse(),
			}
		}
	}
</script>
<style>
	.nav {
		display: none;
	}
</style>
<style lang="scss" scoped>
	@import '~sass/_variables.scss';
	@import '~sass/_mixins.scss';
	.resume {
		margin: $gutter*3 auto;
		.headline-row {
			margin-bottom: $gutter*2;
			padding-bottom: $gutter;
			border-bottom: 2px solid #333;
		}
		.headline {
			h1 {
				margin: 0;
				line-height: 1;
			}
			.personal-info {
				text-align: right;
				justify-content: flex-end;
				li {
					margin-bottom: 0;
				}
			}
		}
	}
</style>
