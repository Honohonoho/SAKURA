<template>
    <transition name="slide">
        <div class="s-slides">
            <div class="s-slides-view">
                <div class="s-slides-wrapper">
                    <slot></slot>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "s-slides",
        props: {
            selected: {
                type: String
            }
        },
        mounted() {
            console.log(this.selected);
            this.updateSlidesItem()
        },
        updated() {
            this.updateSlidesItem()
        },
        methods: {
            updateSlidesItem() {
                let first = this.$children[0]
                let selected = this.selected || first.name
                this.$children.forEach((vm) => {
                    vm.selected = selected
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    .s-slides {
        display: inline-block;
        &-view {
        }
        .s-slides-wrapper {
            position: relative;
            border: 1px solid green;
        }
    }
</style>
