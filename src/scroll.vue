<template>
    <div class="s-scroll-wrapper" ref="parent"
         @mouseenter="onMouseEnter"
         @mouseleave="onMouseLeave"
         @wheel="onWheel"
    >
        <div class="s-scroll" ref="child" :style="{transform: `translateY(${this.contentTranslateY}px)`}">
            <slot></slot>
        </div>
        <div class="s-scroll-track" v-show="scrollBarVisible">
            <div class="s-scroll-bar" ref="bar"
                 @mousedown="onMouseDownInScrollBar"
                 @mousemove="onMouseMoveInScrollBar"
                 @mouseup="onMouseUpInScrollBar"
                 @selectstart="onSelectStartInScrollBar"
            >
                <div class="s-scroll-bar-inner"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "s-scroll",
        data() {
            return {
                scrollBarVisible: false,
                parentHeight: undefined, // 内容区容器高度
                childHeight: undefined, // 内容区高度
                contentTranslateY: 0, // 内容区移动距离
                barHeight: undefined, // 滚动条高度
                isScrolling: false,
                startPosition: undefined,
                endPosition: undefined,
                scrollBarTranslateY: 0 // 滚动条移动距离
            }
        },
        watch: {},
        computed: {
            // scroll bar 最大移动距离，防止移出边界
            barMaxScrollHeight() {
                return this.parentHeight - this.barHeight
            }
        },
        mounted() {
            // 添加document级事件监听
            this.addDocumentListener()

            this.parentHeight = this.$refs.parent.getBoundingClientRect().height
            this.childHeight = this.$refs.child.getBoundingClientRect().height

            // 兼容移动端
            // parent.addEventListener('touchmove', () => {
            //     console.log('touchmove');
            // })
            this.calcScrollBarHeight()

        },
        beforeDestroy() {
            // 移除document listener
        },
        methods: {
            addDocumentListener() {
                document.addEventListener('mousemove', (e) => {
                    this.onMouseMoveInScrollBar(e)
                })
                document.addEventListener('mouseup', (e) => {
                    this.onMouseUpInScrollBar(e)
                })
            },
            // 计算scroll bar高度和移动的距离
            calcScrollBarHeight() {
                let parentHeight = this.parentHeight
                let childHeight = this.childHeight
                let bar = this.$refs.bar

                // bar 的高度可以通过等比关系计算出来 ↓↓↓
                // barHeight / parentHeight = parentHeight / childHeight
                this.barHeight = parentHeight * parentHeight / childHeight
                bar.style.height = this.barHeight + 'px'

                // deltaHeight: bar滚动距离可以通过等比关系计算出来
                // 同步 滚轮滚动 和 拖拽滚动条 的移动距离
                this.scrollBarTranslateY = -(parentHeight * this.contentTranslateY / childHeight)
                bar.style.transform = `translateY(${this.scrollBarTranslateY}px)`
            },
            calculateScrollBarTranslateY(delta) {
                let translateY = parseInt(this.scrollBarTranslateY) + delta.y

                if (translateY < 0) {
                    translateY = 0
                } else if (translateY > this.barMaxScrollHeight) {
                    translateY = this.barMaxScrollHeight
                }
                return translateY
            },
            calculateMaxScrollHeight() {
                let {
                    borderTopWidth,
                    borderBottomWidth,
                    paddingTop,
                    paddingBottom
                } = window.getComputedStyle(this.$refs.parent)
                borderTopWidth = parseInt(borderTopWidth)
                borderBottomWidth = parseInt(borderBottomWidth)
                paddingTop = parseInt(paddingTop)
                paddingBottom = parseInt(paddingBottom)
                // 最大可滑动距离
                let maxScrollHeight = this.childHeight - this.parentHeight +
                    (borderTopWidth + borderBottomWidth + paddingTop + paddingBottom)
                return maxScrollHeight
            },
            onWheel(e) {
                // 计算最大可滑动距离， 用于限制最大移动距离
                let maxScrollHeight = this.calculateMaxScrollHeight()
                // 设置内容区域的滑动速度，与滚轮滚动速度成比例
                this.contentTranslateY = this.setContentTranslateY(e.deltaY)

                if (this.contentTranslateY > 0) {
                    // 到顶部了，不能再滑了
                    this.contentTranslateY = 0
                } else if (this.contentTranslateY < -maxScrollHeight) {
                    // 到低部了，不能再滑了
                    this.contentTranslateY = -maxScrollHeight
                } else {
                    // 如果内部内容滚到顶部或底部，则滚动外面页面
                    e.preventDefault()
                }
                this.calcScrollBarHeight()
            },
            setContentTranslateY(deltaY) {
                // 限制最大滑动距离，要不然滑的快滚得快
                let translateY = this.contentTranslateY
                if (deltaY > 20) {
                    translateY -= 20 * 3
                } else if (deltaY < -20) {
                    translateY -= -20 * 3
                } else {
                    translateY -= deltaY * 3
                }
                return translateY
            },
            onMouseEnter() {
                this.scrollBarVisible = true
            },
            onMouseLeave() {
                // this.scrollBarVisible = false
                this.isScrolling = false
            },
            onMouseDownInScrollBar(e) {
                this.isScrolling = true
                let {screenX, screenY} = e
                this.startPosition = {x: screenX, y: screenY}
            },
            onMouseMoveInScrollBar(e) {
                if (!this.isScrolling) { return }

                this.endPosition = {x: e.screenX, y: e.screenY}

                let delta = {x: this.endPosition.x - this.startPosition.x, y: this.endPosition.y - this.startPosition.y}
                this.scrollBarTranslateY = this.calculateScrollBarTranslateY(delta)
                // 同步 滚轮滚动 和 拖拽滚动条 的移动距离
                this.contentTranslateY = -(this.childHeight * this.scrollBarTranslateY) / this.parentHeight

                this.startPosition = this.endPosition
                this.$refs.bar.style.transform = `translate(0px, ${this.scrollBarTranslateY}px)`
            },
            onMouseUpInScrollBar() {
                this.isScrolling = false
            },
            // 防止滚动时选中
            onSelectStartInScrollBar(e) {
                e.preventDefault()
            }
        }
    }
</script>

<style scoped lang="scss">
    .s-scroll-wrapper {
        overflow: hidden;
        border: 1px solid red;
        position: relative;
        .s-scroll {
            transition: transform 0.05s ease;
        }
        .s-scroll-track {
            position: absolute;
            top: 0;
            right: 0;
            width: 14px;
            height: 100%;
            border-left: 1px solid #e8e7e8;
            background: #fafafa;
            .s-scroll-bar {
                position: absolute;
                left: 50%;
                margin-left: -4px;
                padding: 4px 0;
                height: 40px;
                width: 8px;
                transition: transform 0.05s ease;
                .s-scroll-bar-inner {
                    height: 100%;
                    background: #c2c2c2;
                    border-radius: 4px;
                    &:hover {
                        background: #7d7d7d;
                    }
                }
            }
        }
    }
</style>