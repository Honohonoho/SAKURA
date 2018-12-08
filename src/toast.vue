<template>
    <div class="toast" ref="wrapper">
        <div class="message">
            <slot v-if="!enableHtml"></slot>
            <div v-else v-html="$slots.default[0]"></div>
        </div>
        <div class="line" ref="line"></div>
        <span class="close" v-if="closeButton" @click="onClickClose">
            {{closeButton.text}}
        </span>
    </div>
</template>
<script>
// useage:
// this.$toast('我是message', {
//     closeButton: {
//         text: '知道了',
//         callback(toast) {
//             console.log('用户知道了')
//         }
//     }
// })
export default {
    name: 'g-toast',
    props: {
        autoClose: {
            type: Boolean,
            default: true
        },
        autoCloseDelay: {
            type: Number,
            default: 5
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
        }
    },
    mounted() {
        this.$nextTick(() => {
            console.log(this.$refs.line.style)
            this.$refs.line.style.height = 
                `${this.$refs.wrapper.getBoundingClientRect().height}px`
        })
        if (this.autoClose) {
            setTimeout(() => {
                this.close()
            }, this.autoCloseDelay * 1000)
        }
    },
    methods: {
        close() {
            this.$el.remove()
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
.toast {
    font-size: 14px;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
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

