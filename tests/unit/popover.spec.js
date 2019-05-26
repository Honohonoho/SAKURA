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
    it('可以设置 position', () => {
        const wrapper = mount(Popover, {
            slots: {
                default: {template: `<button>click me</button>`},
                content: '<div>content</div>'
            },
            propsData: {
                position: 'bottom'
            }
        });
        wrapper.find('button').trigger('click')
        let classes = wrapper.find('.content-wrapper').classes();
        expect(classes).to.include('position-bottom')
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