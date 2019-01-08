<template>
    <div class="popover" ref="popover">
        <div ref="contentWrapper" class="content-wrapper" :class="{[`position-${position}`]: true}" v-if="visible">
            <slot name="content" :close="closeContentAndRemoveListener"></slot>
        </div>
        <span ref="triggerWrapper" class="trigger-wrapper">
            <slot></slot>
        </span>
    </div>
</template>
<script>
export default {
    name: 's-popover',
    props: {
        position: {
            type: String,
            default: 'top',
            validator(value) {
                return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0
            }
        },
        trigger: {
            type: String,
            default: 'click',
            validator(value) {
                return ['click', 'hover'].indexOf(value) >= 0
            }
        }
    },
    data() {
        return {
            visible: false, 
        }
    },
    computed: {
        showEvent() {
            if (this.trigger === 'click') {
                return 'click'
            } else {
                return 'mouseenter'
            }
        },
        closeEvent() {
            if (this.trigger === 'click') {
                return 'click'
            } else {
                return 'mouseleave'
            }
        }
    },
    created() {

    },
    mounted(){
        if (this.trigger === 'click') {
            this.$refs.popover.addEventListener('click', this.onClick)
        } else {
            this.$refs.popover.addEventListener('mouseenter', this.onMouseEnter)
            this.$refs.popover.addEventListener('mouseleave', this.onMouseLeave)
        }
    },
    destroyed() {
        if (!this.$refs.popover) return
        if (this.trigger === 'click') {
            this.$refs.popover.removeEventListener('click', this.onClick)
        } else {
            this.$refs.popover.removeEventListener('mouseenter', this.onMouseEnter)
            this.$refs.popover.removeEventListener('mouseleave', this.onMouseLeave)
        }
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
        onMouseEnter() {
            this.visible = true
            this.$nextTick(()=> {
                this.positionContent()
            })
        },
        onMouseLeave() {
            this.visible = false
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
            const {contentWrapper, triggerWrapper} = this.$refs
            document.body.appendChild(contentWrapper)
            const {width, height, top, left} = triggerWrapper.getBoundingClientRect()
            const {height: selfHeight} = contentWrapper.getBoundingClientRect()
            let positoinData = {
                top: {
                    top: top + window.scrollY,
                    left: left + window.scrollX
                },
                bottom: {
                    top: top + height + window.scrollY,
                    left: left + window.scrollX
                },
                left: {
                    top: top + window.scrollY + (height - selfHeight) / 2,
                    left: left + window.scrollX
                },
                right: {
                    top: top + window.scrollY + (height - selfHeight) / 2,
                    left: left + width + window.scrollX
                }
            }
            contentWrapper.style.top = positoinData[this.position].top + 'px'
            contentWrapper.style.left = positoinData[this.position].left + 'px'
        },
        onClickDocument(e) {
            if (
                this.$refs.popover &&
                (this.$refs.popover === e.target || this.$refs.contentWrapper.contains(e.target))
            ) {
                return
            }
            if (
                this.$refs.triggerWrapper &&
                (this.$refs.triggerWrapper === e.target || this.$refs.triggerWrapper.contains(e.target))
            ) {
                return
            }
            this.closeContentAndRemoveListener()
        }
    }
}
</script>
<style lang="scss">
@import 'common';

.popover {
    display: inline-block;
    vertical-align: top;
    position: relative;
    .trigger-wrapper {
        display: inline-block;
    }
}
.content-wrapper {
    position: absolute;
    border: 1px solid $border-color-toast;
    border-radius: $border-radius;
    filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0.5));
    background: #fff;
    padding: .5em 1em;
    max-width: 20em;
    word-break: break-all;
    z-index: 999;
    &::before, &::after {
        content: '';
        display: block;
        border: 10px solid transparent;
        width: 0;
        height: 0;
        position: absolute;
    }
    &.position-top {
        margin-top: -10px;
        transform: translateY(-100%);
        &::before, &::after {
            left: 10px;
        }
        &::before {
            border-top-color: $border-color-toast;
            border-bottom: none;
            top: 100%;
        }
        &::after {
            border-top-color: #ffffff;
            border-bottom: none;
            top: calc(100% - 1px);
        }
    }
    &.position-bottom {
        margin-top: 10px;
        &::before, &::after {
            left: 10px;
        }
        &::before {
            border-bottom-color: $border-color-toast;
            border-top: none;
            bottom: 100%;
        }
        &::after {
            border-bottom-color: #ffffff;
            border-top: none;
            bottom: calc(100% - 1px);
        }
    }
    &.position-left {
        margin-left: -10px;
        transform: translateX(-100%);
        &::before, &::after {
            top: 50%;
            transform: translateY(-50%);
        }
        &::before {
            border-left-color: $border-color-toast;
            border-right: none;
            left: 100%;
        }
        &::after {
            border-left-color: #ffffff;
            border-right: none;
            left: calc(100% - 1px);
        }
    }
    &.position-right {
        margin-left: 10px;
        &::before, &::after {
            top: 50%;
            transform: translateY(-50%);
        }
        &::before {
            border-right-color: $border-color-toast;
            border-left: none;
            right: 100%;
        }
        &::after {
            border-right-color: #ffffff;
            border-left: none;
            right: calc(100% - 1px);
        }
    }
}
</style>
