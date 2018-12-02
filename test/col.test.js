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
    
})