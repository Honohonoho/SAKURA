import chai, {expect} from "chai";
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import {shallowMount, mount} from "@vue/test-utils";
import Popover from '../../src/popover'

chai.use(sinonChai);

describe('Popover', () => {
    it('存在.', () => {
        expect(Popover).to.exist
    });
    it('可以设置 position', (done) => {
        Vue.component('s-popover', Popover);
        const div = document.createElement('div');
        document.body.appendChild(div);
        const wrapper = mount(Popover, {
            slots: {

            }
        })
        div.innerHTML = `
            <s-popover position="bottom" ref="popover">
                <template slot="content">
                    <div>内容</div>
                </template>
                <template>
                    <button>bottom点我</button>
                </template>
            </s-popover>
        `;
        const vm = new Vue({
            el: div
        });
        vm.$nextTick(() => {
            vm.$el.querySelector('button').click();
            vm.$nextTick(() => {
                let contentWrapper = vm.$refs.popover.$refs.contentWrapper;
                expect(contentWrapper.classList.contains('position-bottom')).to.be.true;
                done()
            })
        })
    });
    xit('设置 trigger: click/hover', () => {
        Vue.component('s-popover', Popover);
        const div = document.createElement('div');
        document.body.appendChild(div);
        div.innerHTML = `
            <s-popover trigger="hover" ref="popover">
                <template slot="content">
                    <div>内容</div>
                </template>
                <template>
                    <button>bottom点我</button>
                </template>
            </s-popover>
        `;
        const vm = new Vue({
            el: div
        });
        // 等popover mounted 之后在执行
        vm.$nextTick(() => {
            let event = new Event('mouseenter');
            vm.$el.dispatchEvent(event);
            vm.$nextTick(() => {
                let contentWrapper = vm.$refs.popover.$refs.contentWrapper;
                expect(contentWrapper).to.exist;
                done()
            })
        })
    })
});