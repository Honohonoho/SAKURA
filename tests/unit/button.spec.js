import chai, {expect} from "chai";
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import {shallowMount, mount} from "@vue/test-utils";
import Button from '../../src/button'

chai.use(sinonChai);
// Vue.config.productionTip = false
// Vue.config.devtools = false

// Mocha
describe('Button', () => {
    // BDD 行为驱动测试

    // 测试用例用 it 隔开，各自有自己的作用域
    it('存在.', () => {
        expect(Button).to.exist
    });
    it('可以设置icon.', () => {
        const wrapper = mount(Button, {
            propsData: {
                icon: 'settings'
            }
        })
        const useElement = wrapper.find('use');
        expect(useElement.attributes('href')).to.equal('#i-settings');
    });
    it('可以设置loading.', () => {
        const wrapper = mount(Button, {
            propsData: {
                icon: 'settings',
                loading: true
            }
        })
        const vm = wrapper.vm;
        const useElements = vm.$el.querySelectorAll('use');
        expect(useElements.length).to.equal(1);
        expect(useElements[0].getAttribute('xlink:href')).to.equal('#i-dot-loading');
    });
    it('icon 默认的 order 是 1', () => {
        const div = document.createElement('div');
        document.body.appendChild(div);
        const vm = new Constructor({
            propsData: {
                icon: 'settings',
            }
        }).$mount(div);
        const icon = vm.$el.querySelector('svg');
        expect(getComputedStyle(icon).order).to.eq('1');
        vm.$el.remove();
        vm.$destroy()
    });
    it('设置 iconPosition 可以改变 order', () => {
        const div = document.createElement('div');
        document.body.appendChild(div);
        const wrapper = mount(Button, {
            propsData: {
                icon: 'settings',
                iconPosition: 'right'
            }
        })
        const vm = wrapper.vm;
        const icon = vm.$el.querySelector('svg');
        expect(getComputedStyle(icon).order).to.eq('2');
        vm.$el.remove();
        vm.$destroy()
    });
    it('点击 button 触发 click 事件', () => {
        const wrapper = mount(Button, {
            propsData: {
                icon: 'settings',
            }
        });
        const vm = wrapper.vm;
        const callback = sinon.fake(); // sinon.fake() 可以知道自己被调用
        vm.$on('click', callback);
        vm.$el.click();
        expect(callback).to.have.been.called

    })
});