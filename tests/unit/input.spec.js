import chai, {expect} from "chai";
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import {shallowMount, mount} from "@vue/test-utils";
import Input from '../../src/input'

chai.use(sinonChai);

describe('Input', () => {
    it('input exist.', () => {
        expect(Input).to.exist
    })
    describe('accpet props', () => {
        // const Constructor = Vue.extend(Input)
        let vm
        // runs before each test in this block
        // beforeEach(function() {
        // })
        // runs after each test in this block
        // afterEach(() => {
        //     vm.$destroy()
        // })
        xit('accpet property: value', () => {
            vm = new Constructor({
                propsData: {
                    value: '1234'
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.value).to.equal('1234')
        })
        xit('accpet property: disabled', () => {
            vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.disabled).to.equal(true)
        })
        xit('accpet property: readonly', () => {
            vm = new Constructor({
                propsData: {
                    readonly: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.readOnly).to.equal(true) // use lower camel case, 'readonly' change to 'readOnly'
        })
        xit('accpet property: error', () => {
            vm = new Constructor({
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
        // const Constructor = Vue.extend(Input)
        let vm
        // // beforeEach(function() {
        // // })
        // afterEach(() => {
        //     vm.$destroy()
        // })
        xit('event:change/input/focus/blur available', () => {
            let eventNames = ['change', 'input', 'focus', 'blur']
            eventNames.forEach((eventName) => {
                vm = new Constructor({}).$mount()
                const callback = sinon.fake()
                vm.$on(eventName, callback)
                let event = new Event(eventName)
                Object.defineProperty(
                    event,
                    'target',
                    {
                        value: { value: 'hi'},
                        enumerable: true
                    }
                )
                let inputElement = vm.$el.querySelector('input')
                inputElement.dispatchEvent(event)
                expect(callback).to.have.been.calledWith('hi') // 带有 event 参数的回调被调用
            })
        })
    })
})