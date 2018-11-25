const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

// Mocha
describe('Input', () => {
    // BDD 行为驱动测试

    // 测试用例用 it 隔开，各自有自己的作用域
    it('input exist.', () => {
        expect(Input).to.exist
    })
    it('accpet property: value', () => {
        const Constructor = Vue.extend(Input)
        const vm = new Constructor({
            propsData: {
                value: '1234'
            }
        }).$mount()
        const inputElement = vm.$el.querySelector('input')
        expect(inputElement.value).to.equal('1234')
        vm.$destroy()
    })
    it('accpet property: disabled', () => {
        const Constructor = Vue.extend(Input)
        const vm = new Constructor({
            propsData: {
                disabled: true
            }
        }).$mount()
        const inputElement = vm.$el.querySelector('input')
        expect(inputElement.disabled).to.equal(true)
        vm.$destroy()
    })
})