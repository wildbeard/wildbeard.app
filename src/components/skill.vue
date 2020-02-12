<template>
    
    <div class="skill">
        <div class="name">
            <span v-html="skill.name"></span>
            <span v-if="skill.duration != ''"> | {{ skill.duration }}</span>
        </div>
        <div class="additional" v-if="skill.additional != ''" v-html="skill.additional"></div>
        <div class="desc" v-if="skill.desc != ''" v-html="skill.desc"></div>
    </div>

</template>

<style lang="scss">
    @import '~sass/_variables.scss';
    .skill {
        margin-bottom: 1em;
        .name span:first-child {
            font-family: $serif;
            font-weight: bold;
        }
        .additional > strong {
            font-family: $serif;
        }
    }
</style>

<script>
export default {
    props: [ 'skill' ]
}
</script>