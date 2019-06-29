<template>
    <div class="s-collapse-item">
        <div class="s-collapse-title" @click="toggleContent">
            {{title}}
        </div>
        <transition name="">
            <div class="s-collapse-content-wrapper">
                <div class="s-collapse-content" ref="collapseContent" v-show="contentVisible" :class="{['active']: true}">
                    <slot></slot>
                </div>
            </div>
        </transition>
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
                if (this.eventBus) {
                    this.eventBus.$emit('update:removeSelected', this.name)
                    this.eventBus.$emit('selectedChange', this.name)
                }
            } else {
                if (this.eventBus) {
                    this.eventBus.$emit('update:addSelected', this.name)
                    this.eventBus.$emit('selectedChange', this.name)
                }
            }
        }
    }
}
</script>
<style lang="scss">
@import '../../styles/common';
.s-collapse {
    .s-collapse-item {
        > .s-collapse-title {
            // border-bottom: 1px solid $grey;
            border-top: 1px solid $border-color;
            min-height: 32px;
            display: flex;
            align-items: center;
            padding: 0 8px;
            cursor: pointer;
        }
        &:first-child {
            > .s-collapse-title {
                border-top: none;
            }
        }
        > .s-collapse-content-wrapper {
            .s-collapse-content {
                /*height: 100%;*/
                padding: 8px;
                overflow: hidden;
                display: none;
                will-change: height;
                // border-top: 1px solid $grey;
            }
            .s-collapse-content.active {
                display: block;
            }
        }
        /*.collapse-enter-active, .collapse-leave-active {*/
            /*transition: height 0.5s;*/
        /*}*/
        /*.collapse-enter {*/
            /*display: block;*/
            /*height: 0;*/
        /*}*/
        /*.collapse-leave {*/
            /*height: auto;*/
            /*display: block;*/
        /*}*/
        /*.collapse-leave-to {*/
            /*height: 0;*/
        /*}*/
    }
}
</style>
