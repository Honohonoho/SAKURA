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
import Collapse from './collapse';
import CollapseItem from './collapse-item';
import plugin from './plugin';

Vue.component('s-button', Button);
Vue.component('s-icon', Icon);
Vue.component('s-button-group', ButtonGroup);
Vue.component('s-input', Input);
Vue.component('s-row', Row);
Vue.component('s-layout', Layout);
Vue.component('s-header', Header);
Vue.component('s-content', Content);
Vue.component('s-sider', Sider);
Vue.component('s-footer', Footer);
Vue.component('s-toast', Toast);
Vue.component('s-tabs', Tabs);
Vue.component('s-tabs-head', Tabshead);
Vue.component('s-tabs-body', TabsBody);
Vue.component('s-tabs-item', TabsItem);
Vue.component('s-tabs-pane', TabsPane);
Vue.component('s-popover', Popover);
Vue.component('s-collapse', Collapse);
Vue.component('s-collapse-item', CollapseItem);
Vue.use(plugin);

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: false,
        message: 'hi',
        selectedTab: ['2']
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