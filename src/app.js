import Vue from 'vue';
import Button from './button';
import ButtonGroup from './button-group';
import Input from './input';
import Row from './row';
import Layout from './layout';
import Header from './header';
import Content from './content';
import Sider from './sider';
import Footer from './footer';
import Toast from './toast';
import plugin from './plugin';

Vue.component('g-button', Button);
Vue.component('g-button-group', ButtonGroup);
Vue.component('g-input', Input);
Vue.component('g-row', Row);
Vue.component('g-layout', Layout);
Vue.component('g-header', Header);
Vue.component('g-content', Content);
Vue.component('g-sider', Sider);
Vue.component('g-footer', Footer);
Vue.component('g-toast', Toast);
Vue.use(plugin);

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: false,
        message: 'hi'
    },
    created() {
        this.$toast('<p>段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落段落<a href="http://qq.com">qq</a></p>', {
            enableHtml: true
        })
        // this.$toast('我是message', {
        //     closeButton: {
        //         text: '知道了',
        //         callback(toast) {
        //             console.log('用户知道了')
        //         }
        //     }
        // })
    },
    methods: {
        inputChange() {
            console.log(1)
        },
        showToast() {
            this.$toast('我是 message', {
                closeButton: {
                    text: '知道了',
                    callback() {
                        console.log('用户知道了')
                    }
                }
            })
        }
    }
});