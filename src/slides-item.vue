<template>
    <transition name="slide">
        <div class="s-slides-item" v-if="visible">
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
                selected: undefined
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
    }
    .slide-enter-active, .slide-leave-active {
        transition: all 1s;
        transform: translateX(0);
    }
    .slide-enter {
        transform: translateX(100%);
    }
    .slide-leave-to {
        transform: translateX(-100%);
    }
</style>