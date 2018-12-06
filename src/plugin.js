import Toast from './Toast'
export default {
    install(Vue, options) {
        Vue.prototype.$toast = function(message) {
            let Constructor = Vue.extend(Toast)
            let toast = new Constructor()
            toast.$slots.default = [message]
            toast.$mount() // 不写这句，那么tioast的生命周期钩子不会生效
            document.body.appendChild(toast.$el)
        }
    }
}