import chai, {expect} from "chai";
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import {shallowMount, mount} from "@vue/test-utils";
import Nav from '../../src/nav/nav'
import NavItem from '../../src/nav/nav-item'
import SubNav from '../../src/nav/sub-nav'
import Vue from "vue";

chai.use(sinonChai);

describe('Nav', () => {

  it('存在.', () => {
    expect(Nav).to.exist
  });
  it('支持 selected 属性', (done)=> {
    Vue.component('s-nav-item', NavItem)
    const wrapper = mount(Nav, {
      propsData: {
        selected: 'home'
      },
      slots: {
        default: `
          <s-nav-item name="home">首页</s-nav-item>
          <s-nav-item name="hire">招聘</s-nav-item>
        `
      }
    })
    setTimeout(() => {
      expect(wrapper.find('[data-name="home"].active').exists()).to.be.true
      done()
    })
  })
  it('触发 update:selected 事件.', (done) => {
    const callback = sinon.fake()
    Vue.component('s-nav-item', NavItem)
    Vue.component('s-sub-nav', SubNav)
    const wrapper = mount(Nav, {
      propsData: {
        selected: 'home'
      },
      slots: {
        default: `
          <s-nav-item name="home">首页</s-nav-item>
          <s-sub-nav name="about">
            <template slot="title">关于</template>
            <s-nav-item name="culture">企业文化</s-nav-item>
            <s-nav-item name="hire">招聘</s-nav-item>
          </s-sub-nav>
        `
      },
      listeners: {
        'update:selected': callback
      }
    })
    wrapper.find('[data-name="hire"]').trigger('click')
    expect(callback).to.have.been.calledWith('hire')
    done()
  });
});
