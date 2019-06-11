import chai, {expect} from "chai";
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import {shallowMount, mount} from "@vue/test-utils";

import Tabs from '../../src/tabs/tabs';
import Tabshead from '../../src/tabs/tabs-head';
import TabsBody from '../../src/tabs/tabs-body';
import TabsItem from '../../src/tabs/tabs-item';
import TabsPane from '../../src/tabs/tabs-pane';
// Vue.component('s-tabs', Tabs);
// Vue.component('s-tabs-head', Tabshead);
// Vue.component('s-tabs-body', TabsBody);
// Vue.component('s-tabs-item', TabsItem);
// Vue.component('s-tabs-pane', TabsPane);

chai.use(sinonChai);

describe('Tabs', () => {
    it('存在.', () => {
        expect(Tabs).to.exist
    })
    xit('接受 selected prop', (done) => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
            <s-tabs selected="sport">
                <s-tabs-head>
                    <s-tabs-item name="tech">科技</s-tabs-item>
                    <s-tabs-item name="finance">财经</s-tabs-item>
                    <s-tabs-item name="sport">体育</s-tabs-item>
                </s-tabs-head>
                <s-tabs-body>
                    <s-tabs-pane name="tech">tech news</s-tabs-pane>
                    <s-tabs-pane name="finance">finance news</s-tabs-pane>
                    <s-tabs-pane name="sport">sport news</s-tabs-pane>
                </s-tabs-body>
            </s-tabs>
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