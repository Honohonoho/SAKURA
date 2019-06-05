<template>
    <transition name="slide">
        <div class="s-slides">
            <div class="s-slides-view">
                <div class="s-slides-wrapper">
                    <slot></slot>
                </div>
            </div>
            <div class="s-slides-dots-wrapper">
                <span class="s-slides-dot"
                      :class="{active: selectedIndex === n - 1}"
                      v-for="n in dotsLength" :key="n"
                      @click="onDotSelect(n-1)"
                >
                    {{n}}
                </span>
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
        data() {
            return {
                dotsLength: 0,
                lastSelected: undefined
            }
        },
        computed: {
            getNames() {
                return this.$children.map(vm => vm.name)
            },
            selectedIndex() {
                return this.getNames.indexOf(this.selected) || 0
            }
        },
        mounted() {
            this.updateSlidesItem()
            this.playAutomatically()
            this.dotsLength = this.$children.length
        },
        updated() {
            this.updateSlidesItem()
        },
        methods: {
            updateSlidesItem() {
                let selected = this.getSelected()
                this.$children.forEach((vm) => {
                    vm.selected = selected
                    let newIndex = this.getNames.indexOf(selected)
                    let oldIndex = this.getNames.indexOf(vm.name)
                    vm.negative = newIndex > oldIndex ?  false : true
                })
            },
            getSelected() {
                let first = this.$children[0]
                return this.selected || first.name
            },
            updateSelected(index) {
                console.log(index);
                this.$emit('update:selected', this.getNames[index])
            },
            playAutomatically() {
                let index = this.getNames.indexOf(this.getSelected())
                let run = () => {
                    let indexBack = index - 1
                    if (indexBack === -1) { indexBack = this.getNames.length - 1 }
                    if (indexBack === this.getNames.length) { indexBack = 0 }
                    this.updateSelected(this.getNames[indexBack])
                    setTimeout(run, 2000)
                }
                // let run = () => {
                //     if (index === names.length + 1) { index = 0 }
                //     this.$emit('update:selected', names[index + 1])
                //     index++
                //     setTimeout(run, 2000)
                // }
                setTimeout(run, 2000)
            },
            onDotSelect(index) {
                this.updateSelected(index)
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
        &-dot {
            &.active {
                color: red;
            }
        }
    }
</style>
