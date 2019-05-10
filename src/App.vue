<template>
    <div id="app" style="padding: 100px;">
        <!--<s-collapse :selected.sync="selectedTab" accordion>-->
            <!--<s-collapse-item title="标题1" name="1">内容1</s-collapse-item>-->
            <!--<s-collapse-item title="标题2" name="2">内容2</s-collapse-item>-->
            <!--<s-collapse-item title="标题3" name="3">内容3</s-collapse-item>-->
        <!--</s-collapse>-->
        <!--{{selectedTab}}-->
        <!-- <p>click触发</p>
        <s-popover>
            <template slot="content">
                <div>长内容123123132aspfjsdfsdklgndlskavklsdjcl;sdjmvklfdnbklvndfk</div>
            </template>
            <template>
                <s-button>top点我</s-button>
            </template>
        </s-popover>
        <s-popover position="bottom">
            <template slot="content" slot-scope="{close}">
                <div>短内容短内容短内容</div>
                <s-button @click="close">关闭</s-button>
            </template>
            <template>
                <s-button>bottom点我</s-button>
            </template>
        </s-popover>
        <s-popover position="left">
            <template slot="content">
                <div>短内容</div>
            </template>
            <template>
                <s-button>left点我</s-button>
            </template>
        </s-popover>
        <s-popover position="right">
            <template slot="content">
                <div>短内容</div>
            </template>
            <template>
                <s-button>right点我</s-button>
            </template>
        </s-popover>
        <div style="margin-top: 20px;">
            <p>hover触发</p>
            <s-popover trigger="hover">
                <template slot="content">
                    <div>长内容123123132aspfjsdfsdklgndlskavklsdjcl;sdjmvklfdnbklvndfk</div>
                </template>
                <template>
                    <s-button>top hover</s-button>
                </template>
            </s-popover>
            <s-popover position="bottom" trigger="hover">
                <template slot="content">
                    <div>短内容</div>
                </template>
                <template>
                    <s-button>bottom hover</s-button>
                </template>
            </s-popover>
            <s-popover position="left" trigger="hover">
                <template slot="content">
                    <div>短内容</div>
                </template>
                <template>
                    <s-button>left hover</s-button>
                </template>
            </s-popover>
            <s-popover position="right" trigger="hover">
                <template slot="content">
                    <div>短内容</div>
                </template>
                <template>
                    <s-button>right hover</s-button>
                </template>
            </s-popover>
        </div> -->
        <!-- <s-input placeholder="请输入内容"></s-input>
        <s-input readonly value="123"></s-input>
        <s-input disabled value="123"></s-input>
        <s-input value="123"></s-input>
        <s-input value="123" error="123123213"></s-input>
        <s-tabs selected="sport" @update:selected="yyy">
            <s-tabs-head>
                <template slot="action">
                    <button>设置</button>
                </template>   
                <s-tabs-item name="tech">
                    <s-icon name="settings"></s-icon>
                    科技
                </s-tabs-item>
                <s-tabs-item name="finance" disabled>财经</s-tabs-item>
                <s-tabs-item name="sport">体育</s-tabs-item>
            </s-tabs-head>
            <s-tabs-body>
                <s-tabs-pane name="tech">tech news</s-tabs-pane>
                <s-tabs-pane name="finance">finance news</s-tabs-pane>
                <s-tabs-pane name="sport">sport news</s-tabs-pane>
            </s-tabs-body>
        </s-tabs> -->
        <!--<s-button @click="showToast1">-->
           <!--top-->
        <!--</s-button>-->
        <!--<s-button @click="showToast2">-->
            <!--middle-->
         <!--</s-button>-->
         <!--<s-button @click="showToast3">-->
            <!--bottom-->
         <!--</s-button>-->
        <!-- <s-layout>
            <s-sider>sider</s-sider>
            <s-layout>
                <s-header>header</s-header>
                <s-content>content</s-content>
                <s-footer>footer</s-footer>
            </s-layout>
        </s-layout> -->
        <s-cascader :cascader-data="cascaderData"></s-cascader>
    </div>
</template>

<script>
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
import Cascader from './cascader';
import plugin from './plugin';
Vue.use(plugin);
export default {
    name: "app",
    components: {
        // 's-button': Button,
        // 's-icon': Icon,
        // 's-button-group': ButtonGroup,
        // 's-input': Input,
        // 's-row': Row,
        // 's-layout': Layout,
        // 's-header': Header,
        // 's-content': Content,
        // 's-sider': Sider,
        // 's-footer': Footer,
        // 's-toast': Toast,
        // 's-tabs': Tabs,
        // 's-tabs-head': Tabshead,
        // 's-tabs-body': TabsBody,
        // 's-tabs-item': TabsItem,
        // 's-tabs-pane': TabsPane,
        // 's-popover': Popover,
        // 's-collapse': Collapse,
        // 's-collapse-item': CollapseItem,
        's-cascader': Cascader
    },
    data() {
        return {
            loading1: false,
            loading2: true,
            loading3: false,
            message: 'hi',
            selectedTab: ['2'],
            cascaderData: [{
                name: '浙江',
                children: [
                    {
                        name: '杭州',
                        children: [
                            {name: '上城区'},
                            {name: '下城区'},
                            {name: '西湖区'},
                            {name: '滨江区'},
                        ]
                    },
                    {name: '温州'},
                    {name: '宁波'},
                    {name: '嘉兴'}
                ]
            }, {
                name: '江苏',
                children: [
                    {
                        name: '南京',
                        children: [
                            {name: '玄武区'},
                            {name: '秦淮区'},
                            {name: '建邺区'},
                            {name: '鼓楼区'},
                        ]
                    },
                    {name: '徐州'},
                    {name: '无锡'},
                    {name: '苏州'},
                    {name: '扬州'}
                ]
            }]
        }
    },
    created() {
    },
    methods: {
        yyy(){

        },
        showToast1() {
            this.$toast('段落段落段落段落段落', {
                position: 'top',
                enableHtml: false,
                closeButton: {
                    text: '重置',
                    callback() {
                        console.log('reset successfully')
                    }
                },
                autoClose: 1
            })
        },
        showToast2() {
            this.$toast('段落段落段落段落段落', {
                position: 'middle',
                enableHtml: false,
                closeButton: {
                    text: '重置',
                    callback() {
                        console.log('reset successfully')
                    }
                },
                autoClose: false
            })
        },
        showToast3() {
            this.$toast('段落段落段落段落段落', {
                position: 'bottom',
                enableHtml: false,
                closeButton: {
                    text: '重置',
                    callback() {
                        console.log('reset successfully')
                    }
                },
                autoClose: false
            })
        }
    }
};
</script>

<style lang="scss">
</style>
