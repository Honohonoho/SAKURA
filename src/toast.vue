<template>
    <div class="wrapper" :class="toastPositionClasses">
        <div class="toast" ref="toast">
            <div class="message">
                <slot v-if="!enableHtml"></slot>
                <div v-else v-html="$slots.default[0]"></div>
            </div>
            <div class="line" ref="line"></div>
            <span class="close" v-if="closeButton" @click="onClickClose">
                {{closeButton.text}}
            </span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'g-toast',
    props: {
        autoClose: {
            type: [Boolean, Number],
            default: 5,
            validator(value) {
                return value === false || typeof value === 'number'
            }
        },
        closeButton: {
            type: Object,
            default: () => {
                return {
                    text: '关闭',
                    callback: undefined
                }
            }
        },
        enableHtml: {
            type: Boolean,
            default: false
        },
        position: {
            type: String,
            default: 'top',
            validator(value) {
                return ['top', 'bottom', 'middle'].indexOf(value) >= 0 
            }
        }
    },
    computed: {
        toastPositionClasses() {
            return [`position-${this.position}`]
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.$refs.line.style.height = 
                `${this.$refs.toast.getBoundingClientRect().height}px`
        })
        if (this.autoClose) {
            setTimeout(() => {
                this.close()
            }, this.autoClose * 1000)
        }
    },
    methods: {
        close() {
            this.$el.remove()
            this.$emit('close')
            this.$destroy()
        },
        onClickClose() {
            this.close()
            if (this.closeButton && typeof this.closeButton.callback === 'function') {
                this.closeButton.callback(this)
            }
        }
    }
}
</script>
<style lang="scss">
@keyframes slide-up {
    0% {
        opacity: 0;
        transform: translateY(100%);
    }
    100% {
        opacity: 1;
        transform: translateY(0%);
    }
}
// 顶部toast应该由上至下出现
@keyframes slide-down {
    0% {
        opacity: 0;
        transform: translateY(-100%);
    }
    100% {
        opacity: 1;
        transform: translateY(0%);
    }
}
@keyframes fade-in {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
.wrapper {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    &.position-top {
        top: 0;
        .toast {
            animation: slide-down .3s;
            border-top-left-radius: 0;
            border-top-right-radius: 0;
        }
    }
    &.position-middle {
        top: 50%;
        transform: translate(-50%, -50%);
        .toast {
            animation: fade-in .3s;
        }
    }
    &.position-bottom {
        bottom: 0;
        .toast {
            animation: slide-up .3s;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;   
        }
    }
}
.toast {
    font-size: 14px;
    line-height: 20px;
    min-height: 40px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    background: rgba(0, 0, 0, 0.75);
    color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
    .message {
        padding: 4px 0;
    }
    .close {
        padding-left: 16px;
        flex-shrink: 0;
    }
    .line {
        display: inline-block;
        height: 100%;
        border-left: 1px solid #666;
        margin-left: 16px;
    }
}
</style>

