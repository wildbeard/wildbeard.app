<template>
    <li>
        <template v-if="experience.type === 'section'">
            <strong>{{ experience.name }}</strong>
            <ul>
                <skill-child v-for="childExp in experience.experience" :key="childExp.name" :experience="childExp" />
            </ul>
        </template>
        <template v-else>
            <div style="display: inline-block;" v-html="friendlySkillName(experience)"></div>
        </template>
    </li>
</template>

<style lang="scss" scoped>
    ul {
        li, div {
            vertical-align: middle;
        }
    }
</style>

<script>
export default {
    props: [
        'experience'
    ],
    components: {
        SkillChild: () => import('./skill-section.vue'),
    },
    methods: {
        friendlySkillName(skill) {
            let out = `${skill.name}: ${skill.duration} `;
            out += ( skill.duration > 1 ? 'years' : 'year' );
            return out;
        }
    }
}
</script>