import Toast from './toast'

let currentToast
export default {
    install(Vue, options) {
        Vue.prototype.$toast = function(message, toastOptions) {
            if (currentToast) {
                currentToast.close()
            }
            currentToast = createToast({
                Vue,
                message,
                propsData: toastOptions,
                onClose: () => {
                    currentToast = null
                }
            })
        }
    }
}
function createToast({Vue, message, propsData, onClose}) {
    let Constructor = Vue.extend(Toast)
    let toast = new Constructor({
        propsData
    })
    toast.$slots.default = [message]
    toast.$mount() // 不写这句，那么toast的生命周期钩子不会生效
    toast.$on('close', onClose)
    document.body.appendChild(toast.$el)
    return toast
}