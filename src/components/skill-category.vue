<template>
    <div>
        <h3 v-html="category.name"></h3>
        <template v-if="category.hasOwnProperty('sections')">
            <ul v-for="section in category.sections" :key="section.name">
                <li>
                    <strong v-html="section.name"></strong>
                    <ul>
                        <skill-section v-for="(experience, expIndex) in section.experience" :key="expIndex" :experience="experience" />
                    </ul>
                </li>
            </ul>
        </template>
        <template v-else>
            <ul>
                <skill-section v-for="(experience, expIndex) in category.experience" :key="expIndex" :experience="experience" />
            </ul>
        </template>
    </div>
</template>

<style lang="scss" scoped>
    h3 {
        margin-top: 0;
    }
    ul {
        padding-left: 1em;
    }
</style>

<script>
import SkillSection from './skill-section';
export default {
    props: [
        'category'
    ],
    components: {
        SkillSection
    }
}
</script>