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
                    const names = this.$children.map(vm => vm.name)
                    let newIndex = names.indexOf(selected)
                    let oldIndex = names.indexOf(vm.name)
                    vm.negative = newIndex > oldIndex ?  false : true
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
                    let indexBack = index - 1
                    if (indexBack === -1) { indexBack = names.length - 1 }
                    if (indexBack === names.length) { indexBack = 0 }
                    this.$emit('update:selected', names[indexBack])
                    setTimeout(run, 2000)
                }
                // let run = () => {
                //     if (index === names.length + 1) { index = 0 }
                //     this.$emit('update:selected', names[index + 1])
                //     index++
                //     setTimeout(run, 2000)
                // }
                setTimeout(run, 2000)
            }
        }
    }
</script>

<style scoped lang="scss">
    .s-slides {
        /*display: inline-block;*/
        &-view {
            overflow: hidden;
        }
        .s-slides-wrapper {
            position: relative;
            border: 1px solid green;
        }
    }
</style>
