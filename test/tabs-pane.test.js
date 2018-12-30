const expect = chai.expect;
import Vue from 'vue'
import TabsPane from '../src/tabs-pane';
// Vue.component('s-tabs-pane', TabsPane);

Vue.config.productionTip = false
Vue.config.devtools = false

describe('tabs-pane', () => {
    it('存在.', () => {
        expect(TabsPane).to.exist
    })
})