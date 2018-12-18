const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs';
import Tabshead from '../src/tabs-head';
import TabsBody from '../src/tabs-body';
import TabsItem from '../src/tabs-item';
import TabsPane from '../src/tabs-pane';
Vue.component('g-tabs', Tabs);
Vue.component('g-tabs-head', Tabshead);
Vue.component('g-tabs-body', TabsBody);
Vue.component('g-tabs-item', TabsItem);
Vue.component('g-tabs-pane', TabsPane);

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {
    it('存在.', () => {
        expect(Tabs).to.exist
    })
    it('接受 selected prop', (done) => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
            <g-tabs selected="sport">
                <g-tabs-head>
                    <g-tabs-item name="tech">科技</g-tabs-item>
                    <g-tabs-item name="finance">财经</g-tabs-item>
                    <g-tabs-item name="sport">体育</g-tabs-item>
                </g-tabs-head>
                <g-tabs-body>
                    <g-tabs-pane name="tech">tech news</g-tabs-pane>
                    <g-tabs-pane name="finance">finance news</g-tabs-pane>
                    <g-tabs-pane name="sport">sport news</g-tabs-pane>
                </g-tabs-body>
            </g-tabs>
        `
        let vm = new Vue({
            el: div
        })
        vm.$nextTick(() => {
            let node = vm.$el.querySelector(`.tabs-item[data-name="sport"]`)
            expect(node.classList.contains('active')).to.be.true
            done()
        })
    })
    it('接受 direction prop', () => {

    })
})