const expect = chai.expect;
import Vue from 'vue'
import TabsItem from '../src/tabs-item';

Vue.config.productionTip = false
Vue.config.devtools = false

describe('tabs-item', () => {
    it('存在.', () => {
        expect(TabsItem).to.exist
    })
    it('接受 name prop', () => {
        const Constructor = Vue.extend(TabsItem)
        const vm = new Constructor({
            propsData: {
                name: 'sport'
            }
        }).$mount()
        expect(vm.$el.getAttribute('data-name')).to.eq('sport')
    })
    it('接受 disabled prop, 且无法点击', () => {
        const Constructor = Vue.extend(TabsItem)
        const vm = new Constructor({
            propsData: {
                disabled: true
            }
        }).$mount()
        expect(vm.$el.classList.contains('disabled')).to.be.true
        // 测试无法点击
        const callback = sinon.fake()
        vm.$on('test-click', callback)
        vm.$el.click()
        expect(callback).to.have.not.been.called
    })
})