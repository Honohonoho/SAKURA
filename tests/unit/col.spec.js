import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import Col from '../../src/col'
chai.use(sinonChai)

describe('Col', () => {

    it('存在.', () => {
        expect(Col).to.exist
    })
    xit('接受 span 属性.', () => {
        const Constructor = Vue.extend(Col)
        const div = document.createElement('div')
        document.body.appendChild(div)
        const vm = new Constructor({
            propsData: {
                span: '12'
            }
        }).$mount(div)
        expect( vm.$el.classList.contains('col-12') ).to.equal(true)
        div.remove()
        vm.$destroy()
    })
    xit('接受 offset 属性.', () => {
        const Constructor = Vue.extend(Col)
        const div = document.createElement('div')
        document.body.appendChild(div)
        const vm = new Constructor({
            propsData: {
                offset: '12'
            }
        }).$mount(div)
        expect( vm.$el.classList.contains('offset-12') ).to.equal(true)
        div.remove()
        vm.$destroy()
    })
    xit('接受 pc 属性.', () => {
        const Constructor = Vue.extend(Col)
        const div = document.createElement('div')
        document.body.appendChild(div)
        const vm = new Constructor({
            propsData: {
                pc: {span: 12, offset: 10}
            }
        }).$mount(div)
        expect( vm.$el.classList.contains('col-pc-12') ).to.equal(true)
        expect( vm.$el.classList.contains('offset-pc-10') ).to.equal(true)
        div.remove()
        vm.$destroy()
    })
    xit('接受 pad 属性.', () => {
        const Constructor = Vue.extend(Col)
        const div = document.createElement('div')
        document.body.appendChild(div)
        const vm = new Constructor({
            propsData: {
                pad: {span: 12, offset: 10}
            }
        }).$mount(div)
        expect( vm.$el.classList.contains('col-pad-12') ).to.equal(true)
        expect( vm.$el.classList.contains('offset-pad-10') ).to.equal(true)
        div.remove()
        vm.$destroy()
    })
    xit('接受 narrow-pc 属性.', () => {
        const Constructor = Vue.extend(Col)
        const div = document.createElement('div')
        document.body.appendChild(div)
        const vm = new Constructor({
            propsData: {
                narrowPc: {span: 12, offset: 10}
            }
        }).$mount(div)
        expect( vm.$el.classList.contains('col-narrow-pc-12') ).to.equal(true)
        expect( vm.$el.classList.contains('offset-narrow-pc-10') ).to.equal(true)
        div.remove()
        vm.$destroy()
    })
    xit('接受 wide-pc 属性.', () => {
        const Constructor = Vue.extend(Col)
        const div = document.createElement('div')
        document.body.appendChild(div)
        const vm = new Constructor({
            propsData: {
                widePc: {span: 12, offset: 10}
            }
        }).$mount(div)
        expect( vm.$el.classList.contains('col-wide-pc-12') ).to.equal(true)
        expect( vm.$el.classList.contains('offset-wide-pc-10') ).to.equal(true)
        div.remove()
        vm.$destroy()
    })
})