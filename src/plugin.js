import Toast from './Toast'

let currentToast
export default {
    install(Vue, options) {
        Vue.prototype.$toast = function(message, toastOptions) {
            if (currentToast) {
                currentToast.close()
            }
            currentToast = createToast({Vue, message, propsData: toastOptions})
        }
    }
}
function createToast({Vue, message, propsData}) {
    let Constructor = Vue.extend(Toast)
    let toast = new Constructor({
        propsData
    })
    toast.$slots.default = [message]
    toast.$mount() // 不写这句，那么tioast的生命周期钩子不会生效
    document.body.appendChild(toast.$el)
    return toast
}