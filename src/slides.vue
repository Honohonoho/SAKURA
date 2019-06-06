<template>
    <div class="s-slides" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
        <div class="s-slides-view">
            <div class="s-slides-wrapper">
                <slot></slot>
            </div>
        </div>
        <div class="s-slides-dots-wrapper">
            <span class="s-slides-dot"
                  :class="{active: selectedIndex === n-1}"
                  v-for="n in dotsLength" :key="n"
                  @click="onDotSelect(n-1)"
            >
                {{n-1}}
            </span>
        </div>
    </div>
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
            },
            reverse: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                dotsLength: 0,
                lastSelectedIndex: undefined,
                timerId: undefined
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
                    let negative = this.selectedIndex > this.lastSelectedIndex ?  false : true
                    if(this.lastSelectedIndex === this.$children.length - 1 && this.selectedIndex === 0) {
                        // 当前位于最后一个且下一次要移向第一个，保证无缝效果
                        negative = false
                    }
                    if(this.lastSelectedIndex === 0 && this.selectedIndex === this.$children.length - 1) {
                        // 当前处于第一个且下一次要移向最后一个，保证无缝效果
                        negative = true
                    }
                    vm.negative = negative
                    this.$nextTick(()=>{
                        vm.selected = selected
                    })
                })
            },
            getSelected() {
                let first = this.$children[0]
                return this.selected || first.name
            },
            updateSelected(index) {
                this.lastSelectedIndex = this.selectedIndex
                this.$emit('update:selected', this.getNames[index])
            },
            playAutomatically() {
                if (this.timerId) { return }
                let run = () => {
                    let index = this.getNames.indexOf(this.getSelected())
                    let nextIndex = this.reverse ? index - 1 : index + 1
                    if (nextIndex === -1) { nextIndex = this.reverse ? this.getNames.length - 1 : this.getNames.length + 1 }
                    if (nextIndex === this.getNames.length) { nextIndex = 0 }
                    this.updateSelected(nextIndex)
                    this.timerId = setTimeout(run, 2000)
                }
                this.timerId = setTimeout(run, 2000) // 用 setTimeout 模拟 setInterval
            },
            onDotSelect(index) {
                this.updateSelected(index)
            },
            onMouseEnter() {
                this.pauseAnimation()
            },
            onMouseLeave() {
                this.playAutomatically()
            },
            pauseAnimation() {
                window.clearTimeout(this.timerId)
                this.timerId = undefined
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
        }
        &-dot {
            &.active {
                color: red;
            }
        }
    }
</style>
