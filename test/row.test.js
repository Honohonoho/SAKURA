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
    
})