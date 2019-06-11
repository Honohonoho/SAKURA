<template>
    <div class="tabs-pane" :class="classes" v-if="active">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 's-tabs-pane',
    inject: ['eventBus'],
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
    props: {
        name: {
            type: Number | String,
            required: true
        }
    },
    created() {
        this.eventBus.$on('update:selected', (name) => {
            this.active = name === this.name
        })
    }
}
</script>
<style lang="scss">
.tabs-pane {
    padding: 1em;
    &.active {
    }
}
</style>