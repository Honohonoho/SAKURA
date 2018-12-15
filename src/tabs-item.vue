<template>
    <div class="tabs-item" @click="click">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'g-tabs-item',
    inject: ['eventBus'],
    props: {
        disabled: {
            type: Boolean,
            default: false
        },
        name: {
            type: String|Number,
            require: true
        }
    },
    created() {
        this.eventBus.$on('update:selected', (name) => {
            console.log(name)
        })
    },
    methods: {
        click() {
            this.eventBus.$emit('update:selected', this.name)
        }
    }
}
</script>
<style lang="scss">

</style>