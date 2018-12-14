<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'g-tabs',
    props: {
        selected: {
            type: String,
            required: true
        },
        direction: {
            type: String,
            default: 'horizontal',
            validator(value) {
                return ['vertical', 'horizontal'].indexOf(value) >= 0
            }
        }
    },
    created() {

    }
}
</script>
<style lang="scss">

</style>


