import Vue from 'vue';
import chai, {expect} from "chai";
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import {shallowMount, mount} from "@vue/test-utils";
import Slides from '@/slides.vue'
import SlidesItem from '@/slides-item.vue'

chai.use(sinonChai);
// Vue.config.productionTip = false
// Vue.config.devtools = false

describe('Slides', () => {

    it('存在.', () => {
        expect(Slides).to.exist
    });
    it('接受 items', (done) => {
        Vue.component('s-slides-item', SlidesItem)
        const wrapper = mount(Slides, {
            slots: {
                default: `
                    <s-slides-item name="1">
                        <div class="box1">1</div>
                    </s-slides-item>
                    <s-slides-item name="2">
                        <div class="box2">2</div>
                    </s-slides-item>
                    <s-slides-item name="3">
                        <div class="box3">3</div>
                    </s-slides-item>
                `,
            },
            propsData: {
                autoPlay: false
            }
        });
        setTimeout(() => {
            expect(wrapper.find('.box1').exists()).to.be.true
            done()
        })
        // wrapper.find('button').trigger('click')
        // let classes = wrapper.find('.content-wrapper').classes();
        // expect(classes).to.include('position-bottom')
    });
    it('点击第二个 item, 就显示第二个 item', (done) => {
        Vue.component('s-slides-item', SlidesItem)
        const wrapper = mount(Slides, {
            slots: {
                default: `
                    <s-slides-item name="1">
                        <div class="box1">1</div>
                    </s-slides-item>
                    <s-slides-item name="2">
                        <div class="box2">2</div>
                    </s-slides-item>
                    <s-slides-item name="3">
                        <div class="box3">3</div>
                    </s-slides-item>
                `,
            },
            propsData: {
                autoPlay: false,
                selected: '1'
            },
            listeners: {
                'update:selected': (e) => {
                    expect(e).to.equal('2')
                    done()
                }
            }
        });
        setTimeout(() => {
            wrapper.find('[data-index="1"]').trigger('click')
        })
    });
    it('可以自动播放', (done) => {
        Vue.component('s-slides-item', SlidesItem)
        const callback = sinon.fake()
        const wrapper = mount(Slides, {
            slots: {
                default: `
                    <s-slides-item name="1">
                        <div class="box1">1</div>
                    </s-slides-item>
                    <s-slides-item name="2">
                        <div class="box2">2</div>
                    </s-slides-item>
                    <s-slides-item name="3">
                        <div class="box3">3</div>
                    </s-slides-item>
                `,
            },
            propsData: {
                autoPlay: true,
                selected: '1',
                autoPlayDelay: 300
            },
            listeners: {
                'update:selected': callback
            }
        });
        setTimeout(() => {
            // expect(callback).to.have.been.called
            expect(callback).to.have.been.called
            done()
        }, 301)
    });
    xit('可以点击上一张', () => {

    });
    xit('可以点击下一张', () => {

    });
});
