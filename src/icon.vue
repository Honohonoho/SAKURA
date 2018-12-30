<template>
    <svg class="s-icon">
        <use :xlink:href="`#i-${name}`"></use>
    </svg>
</template>
<script>
import './svg.js'
export default {
    props: {
        name: {}
    }
}
</script>
<style lang="scss">
.s-icon {
        height: 1em;
        width: 1em;
    }
</style>


