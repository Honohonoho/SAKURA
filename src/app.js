import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import ButtonGroup from './button-group';
import Input from './input';
import Row from './row';
import Layout from './layout';
import Header from './header';
import Content from './content';
import Sider from './sider';
import Footer from './footer';
import Toast from './toast';
import Tabs from './tabs';
import Tabshead from './tabs-head';
import TabsBody from './tabs-body';
import TabsItem from './tabs-item';
import TabsPane from './tabs-pane';
import Popover from './popover';
import plugin from './plugin';

Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', ButtonGroup);
Vue.component('g-input', Input);
Vue.component('g-row', Row);
Vue.component('g-layout', Layout);
Vue.component('g-header', Header);
Vue.component('g-content', Content);
Vue.component('g-sider', Sider);
Vue.component('g-footer', Footer);
Vue.component('g-toast', Toast);
Vue.component('g-tabs', Tabs);
Vue.component('g-tabs-head', Tabshead);
Vue.component('g-tabs-body', TabsBody);
Vue.component('g-tabs-item', TabsItem);
Vue.component('g-tabs-pane', TabsPane);
Vue.component('g-popover', Popover);
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
    },
    methods: {
        yyy(){
            
        }
        // inputChange() {
        //     console.log(1)
        // },
        // showToast1() {
        //     this.$toast('段落段落段落段落段落', {
        //         position: 'top',
        //         enableHtml: false,
        //         closeButton: {
        //             text: '重置',
        //             callback() {
        //                 console.log('reset successfully')
        //             }
        //         },
        //         autoClose: 1
        //     })
        // },
        // showToast2() {
        //     this.$toast('段落段落段落段落段落', {
        //         position: 'middle',
        //         enableHtml: false,
        //         closeButton: {
        //             text: '重置',
        //             callback() {
        //                 console.log('reset successfully')
        //             }
        //         },
        //         autoClose: false
        //     })
        // },
        // showToast3() {
        //     this.$toast('段落段落段落段落段落', {
        //         position: 'bottom',
        //         enableHtml: false,
        //         closeButton: {
        //             text: '重置',
        //             callback() {
        //                 console.log('reset successfully')
        //             }
        //         },
        //         autoClose: false
        //     })
        // }
    }
});