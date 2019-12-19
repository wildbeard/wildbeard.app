<template>
    <div>
        <h3>{{ category.name }}</h3>
        <template v-if="category.hasOwnProperty('sections')">
            <ul v-for="section in category.sections" :key="section.name">
                <li>
                    <strong>{{ section.name }}</strong>
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