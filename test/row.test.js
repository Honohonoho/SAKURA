const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false


// Mocha
describe('Button', () => {
    // BDD 行为驱动测试

    // 测试用例用 it 隔开，各自有自己的作用域
    it('存在.', () => {
        expect(Row).to.exist
    })
    it('接受 gutter 属性.', (done) => {
        Vue.component('s-row', Row)
        Vue.component('s-col', Col)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
            <s-row gutter="20">
                <s-col span="12"></s-col>
                <s-col span="12"></s-col>
            </s-row>
        `
        const vm = new Vue({
            el: div
        })
        // 等到mounted完再打印
        setTimeout(() => {
            const row = vm.$el.querySelector('.row')
            expect( getComputedStyle(row).marginLeft ).to.eq('-10px')
            expect( getComputedStyle(row).marginRight ).to.eq('-10px')

            const cols = vm.$el.querySelectorAll('.col')
            expect( getComputedStyle(cols[0]).paddingRight ).to.eq('10px')
            expect( getComputedStyle(cols[1]).paddingLeft ).to.eq('10px')
            done() // 不加的话会认为全是同步代码，那么测试会等不到异步执行就会关闭退出
            vm.$el.remove()
            vm.$destroy()
        }, 0)
    })
    it('接受 align 属性.', () => {
        const Constructor = Vue.extend(Row)
        const div = document.createElement('div')
        document.body.appendChild(div)
        const vm = new Constructor({
            propsData: {
                align: 'left' // 'left/right/center'
            }
        }).$mount(div)
        const element = vm.$el
        expect(getComputedStyle(element).justifyContent).to.equal('flex-start') // flex-start/flex-end/center
        div.remove()
        vm.$destroy()
    })
    
})