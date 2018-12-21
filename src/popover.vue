<template>
    <div class="popover" ref="popover" @click="onClick">
        <div ref="contentWrapper" class="content-wrapper" v-if="visible">
            <slot name="content"></slot>
        </div>
        <span ref="triggerWrapper">
            <slot></slot>
        </span>
    </div>
</template>
<script>
export default {
    name: 'g-popover',
    data() {
        return {
            visible: false
        }
    },
    mounted(){

    },
    methods: {
        onClick(event) {
            if (this.$refs.triggerWrapper.contains(event.target)) {
                if(this.visible === true) {
                    this.closeContentAndRemoveListener()
                }else {
                    this.showContentNextTick()
                }
            }
        },
        closeContentAndRemoveListener() {
            this.visible = false
            document.removeEventListener('click', this.onClickDocument)
        },
        showContentNextTick() {
            this.visible = true
            this.$nextTick(()=> {
                this.positionContent()
                document.addEventListener('click', this.onClickDocument)
            })
        },
        positionContent() {
            document.body.appendChild(this.$refs.contentWrapper)
            let {width, height, top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
            this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
            this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
        },
        onClickDocument(e) {
            if (
                this.$refs.popover &&
                (this.$refs.popover === e.target || this.$refs.contentWrapper.contains(e.target))
            ) {
                return
            }
            this.closeContentAndRemoveListener()
        }
    }
}
</script>
<style lang="scss">
.popover {
    display: inline-block;
    vertical-align: top;
    position: relative;
}
.content-wrapper {
    position: absolute;
    transform: translateY(-100%);
    border: 1px solid red;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
}
</style>
