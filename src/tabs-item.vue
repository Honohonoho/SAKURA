<template>
    <div class="tabs-item" @click="click" :class="classes">
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
    computed: {
        classes() {
            return {
                active: this.active
            }
        }
    },
    data() {
        return {
            active: false
        }
    },
    created() {
        this.eventBus.$on('update:selected', (name) => {
            this.active = name === this.name
        })
    },
    methods: {
        click() {
            this.eventBus.$emit('update:selected', this.name)
        }
    }
}
</script>
<style lang="scss" scoped>
.tabs-item {
    flex-shrink: 0;
    padding: 0 2em;
    &.active {
        background: red;
    }
}
</style>