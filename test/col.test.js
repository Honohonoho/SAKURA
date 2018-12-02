const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Button', () => {

    it('存在.', () => {
        expect(Col).to.exist
    })
    it('接受 span 属性.', () => {
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
    
})