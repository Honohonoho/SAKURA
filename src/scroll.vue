<template>
    <div class="s-scroll-wrapper" ref="parent" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
        <div class="s-scroll" ref="child">
            <slot></slot>
        </div>
        <div class="s-scroll-track" v-show="scrollBarVisible">
            <div class="s-scroll-bar" ref="bar">
                <div class="s-scroll-bar-inner"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "s-scroll",
        data(){
            return {
                scrollBarVisible: false
            }
        },
        mounted() {
            let parent = this.$refs.parent
            let child = this.$refs.child
            let translateY = 0

            // 计算什么时候滑到底部了...
            let {height: childHeight} = child.getBoundingClientRect()
            let {height: parentHeight} = parent.getBoundingClientRect()
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
                    translateY -= 20 * 3
                } else if (e.deltaY < -20) {
                    translateY -= -20 * 3
                } else {
                    translateY -= e.deltaY * 3
                }

                if (translateY > 0) {
                    // 到顶部了，不能再滑了
                    translateY = 0
                } else if (translateY < -maxHeight) {
                    // 到低部了，不能再滑了
                    translateY = -maxHeight
                } else {
                    // 如果内部内容滚到顶部或底部，则滚动外面页面
                    e.preventDefault()
                }
                child.style.transform = `translateY(${translateY}px)`
                this.calcScrollBarHeight(parentHeight, childHeight, translateY)
            })
            // 兼容移动端
            // parent.addEventListener('touchmove', () => {
            //     console.log('touchmove');
            // })
            this.calcScrollBarHeight(parentHeight, childHeight, translateY)
        },
        methods: {
            // 计算scroll bar高度
            calcScrollBarHeight (parentHeight, childHeight, translateY){
                // bar 的高度可以通过等比关系计算出来
                // barHeight / parentHeight = parentHeight / childHeight
                let barHeight = parentHeight * parentHeight / childHeight
                let bar = this.$refs.bar
                bar.style.height = barHeight + 'px'
                // deltaHeight: bar滚动距离可以通过等比关系计算出来
                let deltaHeight = parentHeight * translateY / childHeight
                bar.style.transform = `translateY(${-deltaHeight}px)`
            },
            onMouseEnter () {
                this.scrollBarVisible = true
            },
            onMouseLeave () {
                this.scrollBarVisible = false
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