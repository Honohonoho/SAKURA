<template>
    <svg class="s-icon" @click="$emit('click', $event)">
        <use :xlink:href="`#i-${name}`"></use>
    </svg>
</template>
<script>
    import './svg.js'

    export default {
        name: 's-icon',
        props: {
            name: {
                type: String,
                default: ''
            }
        }
    }
</script>
<style lang="scss">
    .s-icon {
        height: 1em;
        width: 1em;
        fill: currentColor;
    }
</style>


