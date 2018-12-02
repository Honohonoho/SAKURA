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
        Vue.component('g-row', Row)
        Vue.component('g-col', Col)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
            <g-row gutter="20">
                <g-col span="12"></g-col>
                <g-col span="12"></g-col>
            </g-row>
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
        }, 0)
    })
    
})