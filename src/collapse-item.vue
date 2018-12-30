<template>
    <div class="collapse-item">
        <div class="title" @click="toggleContent">
            {{title}}
        </div>
        <div class="content" v-if="contentVisible">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: 's-collapse-item',
    inject: ['eventBus'],
    props: {
        title: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            contentVisible: false,
        }
    },
    mounted() {
        this.eventBus && this.eventBus.$on('update:selected', (names) => {
            if (names.indexOf(this.name) >= 0) {
                this.contentVisible = true
            } else {
                this.contentVisible = false
            }
        })
    },
    methods: {
        toggleContent() {
            if (this.contentVisible) {
                this.eventBus && this.eventBus.$emit('update:removeSelected', this.name)
            } else {
                this.eventBus && this.eventBus.$emit('update:addSelected', this.name)
            }
        },
    }
}
</script>
<style lang="scss">
@import 'common';

.collapse-item {
    > .title {
        // border-bottom: 1px solid $grey;
        border-top: 1px solid $grey;
        min-height: 32px;
        display: flex;
        align-items: center;
        padding: 0 8px;
        cursor: pointer;
    }
    &:first-child {
        > .title {
            border-top: none;
        }
    }
    > .content {
        padding: 8px;
        border-top: 1px solid $grey;
    }
}
</style>
