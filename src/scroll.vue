<template>
    <div class="s-scroll-wrapper" ref="parent">
        <div class="s-scroll" ref="child">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "s-scroll",
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
            })
            // 兼容移动端
            // parent.addEventListener('touchmove', () => {
            //     console.log('touchmove');
            // })
        }
    }
</script>

<style scoped lang="scss">
    .s-scroll-wrapper {
        overflow: hidden;
        border: 5px solid red;
       .s-scroll {
           border: 5px solid blue;
           transition: transform 0.05s ease;
       }
    }
</style>