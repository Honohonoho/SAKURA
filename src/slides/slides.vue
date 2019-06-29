<template>
    <div class="s-slides"
         @mouseenter="onMouseEnter"
         @mouseleave="onMouseLeave"
         @touchstart="onTouchStart"
         @touchend="onTouchEnd"
    >
        <div class="s-slides-view">
            <div class="s-slides-wrapper">
                <slot></slot>
            </div>
        </div>
        <div class="s-slides-dots-wrapper">
            <span class=" s-slides-dot left-arrow" @click="updateSelected(selectedIndex - 1)">
                <s-icon name="left"></s-icon>
            </span>
            <span class="s-slides-dot"
                  :class="{active: selectedIndex === n-1}"
                  v-for="n in dotsLength" :key="n" :data-index="n-1"
                  @click="onDotSelect(n-1)"
            >
                {{n}}
            </span>
            <span class=" s-slides-dot right-arrow" @click="onClickNext">
                <s-icon name="right"></s-icon>
            </span>
        </div>
    </div>
</template>

<script>
    import Icon from '../icon';
    export default {
        name: "s-slides",
        components: {
          's-icon': Icon
        },
        props: {
            selected: {
                type: String
            },
            autoPlay: {
                type: Boolean,
                default: true
            },
            autoPlayDelay: {
                type: Number,
                default: 3000
            },
            reverse: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                dotsLength: 0, // 底部控件个数
                lastSelectedIndex: undefined,
                timerId: undefined, // 自动播放的time id
                startTouch: undefined
            }
        },
        computed: {
            getNames() {
                return this.getDotItems.map(vm => vm.name)
            },
            selectedIndex() {
                let index = this.getNames.indexOf(this.selected)
                return index === -1 ? 0 : index
            },
            // 添加左右icon之后要过滤掉
            getDotItems() {
                return this.$children.filter(vm => vm.$options.name === 's-slides-item')
            }
        },
        mounted() {
            console.log(this.selected);
            this.updateSlidesItem()
            if (this.autoPlay) {
                this.playAutomatically()
            }
            this.dotsLength = this.getDotItems.length
        },
        updated() {
            this.updateSlidesItem()
        },
        beforeDestroy () {
            this.pauseAnimation()
        },
        methods: {
            updateSlidesItem() {
                let selected = this.getSelected()
                this.getDotItems.forEach((vm) => {
                    let negative = this.selectedIndex > this.lastSelectedIndex ?  false : true
                    if(this.timerId) {
                        // 只在自动播放时生效，用户切换不生效
                        if(this.lastSelectedIndex === this.getDotItems.length - 1 && this.selectedIndex === 0) {
                            // 当前位于最后一个且下一次要移向第一个，保证无缝效果
                            negative = false
                        }
                        if(this.lastSelectedIndex === 0 && this.selectedIndex === this.getDotItems.length - 1) {
                            // 当前处于第一个且下一次要移向最后一个，保证无缝效果
                            negative = true
                        }
                    }
                    vm.negative = negative
                    this.$nextTick(()=>{
                        vm.selected = selected
                    })
                })
            },
            getSelected() {
                let first = this.getDotItems[0]
                return this.selected || first.name
            },
            // 更新的index是下一个要显示的
            updateSelected(nextIndex) {
                this.lastSelectedIndex = this.selectedIndex // 保存上一次选中的index
                if (nextIndex === -1) { nextIndex = this.getNames.length - 1 }
                if (nextIndex === this.getNames.length) { nextIndex = 0 }
                this.$emit('update:selected', this.getNames[nextIndex])
                this.$emit('change', this.getNames[nextIndex])
            },
            playAutomatically() {
                if (this.timerId) { return }
                let run = () => {
                    let index = this.getNames.indexOf(this.getSelected())
                    let nextIndex = this.reverse ? index - 1 : index + 1
                    this.updateSelected(nextIndex)
                    this.timerId = setTimeout(run, this.autoPlayDelay)
                }
                this.timerId = setTimeout(run, this.autoPlayDelay) // 用 setTimeout 模拟 setInterval
            },
            onDotSelect(index) {
                this.updateSelected(index)
            },
            onClickNext () {
                this.updateSelected(this.selectedIndex + 1)
            },
            onMouseEnter() {
                this.pauseAnimation()
            },
            onMouseLeave() {
                this.playAutomatically()
            },
            onTouchStart(e) {
                this.pauseAnimation()
                if(e.touches.length > 1){ return } // length > 1 则有多点触控
                this.startTouch = e.touches[0]
            },
            onTouchEnd(e) {
                let endTouch = e.changedTouches[0]
                let {clientX: x1, clientY: y1} = this.startTouch // 起点坐标
                let {clientX: x2, clientY: y2} = endTouch // 终点坐标
                /* 当水平方向距离是垂直方向距离的两倍，为判断用户触发左右滑动逻辑*/
                let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
                let deltaY = Math.abs(y2 -y1)
                let rate = distance / deltaY
                if (rate > 2) {
                    if (x2 > x1) {
                        this.updateSelected(this.selectedIndex - 1)
                    } else {
                        this.updateSelected(this.selectedIndex + 1)
                    }
                }
                this.$nextTick(() => {
                    this.playAutomatically()
                })
            },
            pauseAnimation() {
                window.clearTimeout(this.timerId)
                this.timerId = undefined
            }
        }
    }
</script>

<style lang="scss">
@import '../../styles/common';
.s-slides {
    &-view {
        overflow: hidden;
    }
    .s-slides-wrapper {
        position: relative;
    }
    &-dots-wrapper {
        padding: 8px 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    &-dot {
        width: 1.3em;
        height: 1.3em;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        background-color: $main-color;
        border-radius: 50%;
        margin: 0 8px;
        text-align: center;
        color: #fff;
        &:hover {
            cursor: pointer;
            background-color: $lightly-main-color;
        }
        &.active {
            background-color: $deep-main-color;
            &:hover {
                cursor: default;
            }
        }
    }
}
</style>
