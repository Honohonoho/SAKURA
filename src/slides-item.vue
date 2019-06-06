<template>
    <transition name="slide">
        <div class="s-slides-item" v-if="visible" :class="{negative}">
            <slot></slot>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "s-slides-item",
        props: {
            name: {
                type: String,
                required: true
            }
        },
        computed: {
            visible() {
                return this.selected === this.name
            }
        },
        data() {
            return {
                selected: undefined,
                negative: false
            }
        }
    }
</script>

<style scoped lang="scss">
    .s-slides-item {

    }
    .slide-leave-active {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .slide-enter-active, .slide-leave-active {
        transition: all 0.5s;
    }
    .slide-enter {
        transform: translateX(100%);
    }
    .slide-enter.negative {
        transform: translateX(-100%);
    }
    .slide-leave-to {
        transform: translateX(-100%);
    }
    .slide-leave-to.negative {
        transform: translateX(100%);
    }
</style>