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
            },
            autoPlay: {
                type: Boolean,
                default: true
            }
        },
        mounted() {
            this.updateSlidesItem()
            this.playAutomatically()
        },
        updated() {
            this.updateSlidesItem()
        },
        methods: {
            updateSlidesItem() {
                let selected = this.getSelected()
                this.$children.forEach((vm) => {
                    vm.selected = selected
                })
            },
            getSelected() {
                let first = this.$children[0]
                return this.selected || first.name
            },
            playAutomatically() {
                const names = this.$children.map(vm => vm.name)
                let index = names.indexOf(this.getSelected())
                let run = () => {
                    if (index === names.length + 1) { index = 0 }
                    this.$emit('update:selected', names[index + 1])
                    index++
                    setTimeout(run, 2000)
                }
                setTimeout(run, 2000)
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
