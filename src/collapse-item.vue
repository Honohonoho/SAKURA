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
    name: 'g-collapse-item',
    inject: ['eventBus'],
    props: {
        title: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            contentVisible: false
        }
    },
    mounted() {
        this.eventBus.$on('update:selsected', (vm) => {
            if (vm !== this) {
                this.closeContent()
            }
        })
    },
    methods: {
        toggleContent() {
            if (this.contentVisible) {
                this.contentVisible = false
            } else {
                this.contentVisible = true
                this.eventBus.$emit('update:selsected', this)
            }
        },
        closeContent() {
            this.contentVisible = false
        }
    }
}
</script>
<style lang="scss">
$grey: #ddd;
$border-radius: 4px;
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
