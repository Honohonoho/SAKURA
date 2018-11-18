import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import ButtonGroup from './button-group';

Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', ButtonGroup);

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: false
    }
});

import chai from 'chai'

const expect = chai.expect
// 单元测试

// 测试图标
{
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData: {
            icon: 'settings'
        }
    })
    button.$mount() // 也可以4mount('某个元素')
    let useElement = button.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-settings')
    // 通过就自毁
    button.$el.remove()
    button.$destroy()
}
// 测试loading
{
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData: {
            icon: 'settings',
            loading: true
        }
    })
    button.$mount()
    let useElement = button.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-loading')
    button.$el.remove()
    button.$destroy()
}
// 测试图标左右位置
{   
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData: {
            icon: 'settings'
        }
    })
    button.$mount(div)
    let svg = button.$el.querySelector('svg')
    let order = window.getComputedStyle(svg).order
    expect(order).to.eq('1') // css 属性值都为String
    button.$el.remove()
    button.$destroy()
}
{   
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData: {
            icon: 'settings',
            iconPosition: 'right'
        }
    })
    button.$mount(div)
    let svg = button.$el.querySelector('svg')
    let order = window.getComputedStyle(svg).order
    expect(order).to.eq('2') // css 属性值都为String
    button.$el.remove()
    button.$destroy()
}
// 测试事件监听
{   
    const Constructor = Vue.extend(Button)
    const gButton = new Constructor({
        propsData: {
            icon: 'settings',
        }
    })
    gButton.$mount()
    gButton.$on('click', function () {
        console.log(21)
    })
    let button = gButton.$el
    button.click()
    button.remove()
    gButton.$destroy()
}