const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/toast'
import { version } from 'punycode';

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
    it('存在.', () => {
        expect(Toast).to.be.exist
    })
    describe('props', function() {
        it('接受 autoClose', (done) => {
            let div = document.createElement('div')
            document.body.appendChild(div)
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    autoClose: 1
                }
            }).$mount(div)
            vm.$on('close', function () {
                expect(document.body.contains(vm.$el)).to.eq(false)
                done()
            })
        })
        it('接受 closeButton', function () {
            const Constructor = Vue.extend(Toast)
            const callback = sinon.fake()
            const vm = new Constructor({
                propsData: {
                    closeButton: {
                        text: '关闭~',
                        callback: callback
                    }
                }
            }).$mount()
            let closeButton = vm.$el.querySelector('.close')
            expect(closeButton.textContent.trim()).to.eq('关闭~')
            closeButton.click()
            expect(callback).to.have.been.called
        })
        it('接受 enableHtml', function () {
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    enableHtml: true
                }
            })
            vm.$slots.default = ['<strong id="test">hi</strong>']
            vm.$mount()
            let node = vm.$el.querySelector('#test')
            expect(node).to.exist
        })
        it('接受 position', function () {
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    position: 'bottom'
                }
            }).$mount()
            expect(vm.$el.classList.contains('position-bottom')).to.eq(true)
        })
    })
})