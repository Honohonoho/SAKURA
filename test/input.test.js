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
    describe('accpet props', () => {
        // runs before each test in this block
        beforeEach(function() {
            const Constructor = Vue.extend(Input)
        })
        // runs after each test in this block
        afterEach(function() {
            vm.$destroy() 
        })
        it('accpet property: value', () => {
            const vm = new Constructor({
                propsData: {
                    value: '1234'
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.value).to.equal('1234')
        })
        it('accpet property: disabled', () => {
            const vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.disabled).to.equal(true)
        })
        it('accpet property: readonly', () => {
            const vm = new Constructor({
                propsData: {
                    readonly: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.readOnly).to.equal(true) // use lower camel case, 'readonly' change to 'readOnly'
        })
        it('accpet property: error', () => {
            const vm = new Constructor({
                propsData: {
                    error: '输入有误'
                }
            }).$mount()
            const useElement = vm.$el.querySelector('use')
            expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
            const errorMessage = vm.$el.querySelector('.error-message')
            expect(errorMessage.innerText).to.equal('输入有误')
        })
    })
    describe('event handle', () => {
        it('event:change available', () => {

        })
        it('event:input available', () => {
            
        })
        it('event:focus available', () => {
            
        })
        it('event:blur available', () => {
            
        })
    })
})