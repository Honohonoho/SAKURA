<template>
    <div class="s-scroll-wrapper" ref="parent" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
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
        watch: {
        },
        mounted() {
            document.addEventListener('mousemove', (e)=> {
                this.onMouseMoveInScrollBar(e)
            })
            document.addEventListener('mouseup', (e)=>{
                this.onMouseUpInScrollBar(e)
            })

            let parent = this.$refs.parent
            let child = this.$refs.child
            let contentTranslateY = 0

            // 计算什么时候滑到底部了...
            let {height: childHeight} = child.getBoundingClientRect()
            let {height: parentHeight} = parent.getBoundingClientRect()
            this.parentHeight = parentHeight
            this.childHeight = childHeight
            let {borderTopWidth, borderBottomWidth, paddingTop, paddingBottom} = window.getComputedStyle(parent)
            borderTopWidth = parseInt(borderTopWidth)
            borderBottomWidth = parseInt(borderBottomWidth)
            paddingTop = parseInt(paddingTop)
            paddingBottom = parseInt(paddingBottom)
            // 最大可滑动距离
            let maxHeight = childHeight - parentHeight + (borderTopWidth + borderBottomWidth + paddingTop + paddingBottom)

            parent.addEventListener('wheel', (e) => {
                // 限制最大滑动距离，要不然滑的快滚得快
                if (e.deltaY > 20) {
                    this.contentTranslateY -= 20 * 3
                } else if (e.deltaY < -20) {
                    this.contentTranslateY -= -20 * 3
                } else {
                    this.contentTranslateY -= e.deltaY * 3
                }

                if (this.contentTranslateY > 0) {
                    // 到顶部了，不能再滑了
                    this.contentTranslateY = 0
                } else if (this.contentTranslateY < -maxHeight) {
                    // 到低部了，不能再滑了
                    this.contentTranslateY = -maxHeight
                } else {
                    // 如果内部内容滚到顶部或底部，则滚动外面页面
                    e.preventDefault()
                }
                this.calcScrollBarHeight(parentHeight, childHeight, this.contentTranslateY)
            })
            // 兼容移动端
            // parent.addEventListener('touchmove', () => {
            //     console.log('touchmove');
            // })
            this.calcScrollBarHeight(parentHeight, childHeight, this.contentTranslateY)

        },
        beforeDestroy() {
          // 移除document listener
        },
        methods: {
            // 计算scroll bar高度和移动的距离
            calcScrollBarHeight(parentHeight, childHeight, translateY) {
                // bar 的高度可以通过等比关系计算出来 ↓↓↓
                // barHeight / parentHeight = parentHeight / childHeight
                let barHeight = parentHeight * parentHeight / childHeight
                this.barHeight = barHeight
                let bar = this.$refs.bar
                bar.style.height = barHeight + 'px'
                // deltaHeight: bar滚动距离可以通过等比关系计算出来
                let deltaHeight = parentHeight * translateY / childHeight
                bar.style.transform = `translateY(${-deltaHeight}px)`
                // 同步 滚轮滚动 和 拖拽滚动条 的移动距离
                this.scrollBarTranslateY = -deltaHeight
            },
            onMouseEnter() {
                this.scrollBarVisible = true
            },
            onMouseLeave() {
                this.scrollBarVisible = false
                this.isScrolling = false
            },
            onMouseDownInScrollBar(e) {
                this.isScrolling = true
                let {screenX, screenY} = e
                this.startPosition = {x:screenX, y:screenY}
            },
            onMouseMoveInScrollBar(e) {
                if (!this.isScrolling) { return }
                let {screenX, screenY} = e

                // scroll bar 最大移动距离，防止移出边界
                let barMaxScrollHeight = this.parentHeight - this.barHeight

                this.endPosition = {x:screenX, y:screenY}
                let delta = {x: this.endPosition.x - this.startPosition.x, y: this.endPosition.y - this.startPosition.y}
                // 只用纵向移动
                // translateX = parseInt(translateX) + delta.x
                this.scrollBarTranslateY = parseInt(this.scrollBarTranslateY) + delta.y

                if(this.scrollBarTranslateY < 0) {
                    this.scrollBarTranslateY = 0
                } else if(this.scrollBarTranslateY > barMaxScrollHeight) {
                    this.scrollBarTranslateY = barMaxScrollHeight
                }
                // 同步 滚轮滚动 和 拖拽滚动条 的移动距离
                this.contentTranslateY = -(this.childHeight * this.scrollBarTranslateY) / this.parentHeight

                this.startPosition = this.endPosition
                this.$refs.bar.style.transform = `translate(0px, ${parseInt(this.scrollBarTranslateY) + delta.y}px)`
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