<template>
    <div class="tabs-item" @click="onClick" :class="classes" :data-name="name">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 's-tabs-item',
    inject: ['eventBus'],
    props: {
        disabled: {
            type: Boolean,
            default: false
        },
        name: {
            type: String | Number,
            require: true
        }
    },
    computed: {
        classes() {
            return {
                active: this.active,
                disabled: this.disabled
            }
        }
    },
    data() {
        return {
            active: false
        }
    },
    created() {
        if (this.eventBus) {
            this.eventBus.$on('update:selected', (name) => {
                this.active = name === this.name
            })
        }
    },
    methods: {
        onClick() {
            if (this.disabled) { return }
            this.eventBus && this.eventBus.$emit('update:selected', this.name, this)
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../common';

.tabs-item {
    height: 100%;
    flex-shrink: 0;
    padding: 0 2em;
    cursor: pointer;
    display: flex;
    align-items: center;
    &.active {
        color: $blue;
    }
    &.disabled {
        color: grey;
        cursor: not-allowed;
    }
}
</style>