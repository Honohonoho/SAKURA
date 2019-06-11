<template>
    <div id="app" style="padding: 50px;">
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
        <!--<s-button icon="settings" :loading="false">设置</s-button>-->
        <!--<s-cascader-->
                <!--:cascader-data="cascaderData"-->
                <!--:selected-children="cascaderSelectedChildren"-->
                <!--@update:cascaderData="onCascaderDataChanged"-->
                <!--@update:selected="onSelectedChanged"-->
                <!--:load-data="loadData"-->
                <!--popover-height="200px"-->
        <!--&gt;-->
        <!--</s-cascader>-->
        <div>
            <s-slides :selected="selected" @update:selected="onSelectedChanged">
                <s-slides-item name="1">
                    <div class="box">1</div>
                </s-slides-item>
                <s-slides-item name="2">
                    <div class="box">2</div>
                </s-slides-item>
                <s-slides-item name="3">
                    <div class="box">3</div>
                </s-slides-item>
            </s-slides>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Button from './button/button';
    import Icon from './icon';
    import ButtonGroup from './button/button-group';
    import Input from './input';
    import Row from './row';
    import Layout from './layout';
    import Header from './header';
    import Content from './content';
    import Sider from './sider';
    import Footer from './footer';
    import Toast from './toast';
    import Tabs from './tabs/tabs';
    import Tabshead from './tabs/tabs-head';
    import TabsBody from './tabs/tabs-body';
    import TabsItem from './tabs/tabs-item';
    import TabsPane from './tabs/tabs-pane';
    import Popover from './popover';
    import Collapse from './collapse/collapse';
    import CollapseItem from './collapse/collapse-item';
    // import Cascader from './cascader';
    import plugin from './plugin';
    // import city from './city';
    import Slides from './slides';
    import SlidesItem from './slides-item';

    Vue.use(plugin);

    // function ajax(parent_id = 0) {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             let result = city.filter((item) => {
    //                 return item.parent_id === parent_id
    //             });
    //             result.forEach(node => {
    //                 // node.isLeaf = true / false
    //                 let childrenOfNode = city.filter(item => {
    //                     return item.parent_id === node.id
    //                 });
    //                 if (childrenOfNode.length > 0) {
    //                     node.isLeaf = false // 没有children
    //                 } else {
    //                     node.isLeaf = true
    //                 }
    //             })
    //             resolve(result)
    //         }, 1500)
    //     })
    // }

    export default {
        name: "app",
        components: {
            's-slides': Slides,
            's-slides-item': SlidesItem
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
            // 's-cascader': Cascader
        },
        data() {
            return {
                loading1: false,
                loading2: true,
                loading3: false,
                message: 'hi',
                selectedTab: ['2'],
                cascaderSelectedChildren: [], //级联选择器每级选中的记录都保存在这
                cascaderData: [],
                selected: '1'
            }
        },
        created() {
            // ajax(0).then(res => {
            //     this.cascaderData = res;
            // })
            // setTimeout(()=>{
            //     this.selected = '2'
            // }, 2000)
        },
        methods: {
            onSelectedChanged(itemName) {
                this.selected = itemName
            }
            // loadData(node, updateData) {
            //     let id = node.id;
            //     ajax(id).then(res => {
            //         updateData(res);
            //     })
            // },
            // onSelectedChanged(newSelectedItemArray) {
            //     this.cascaderSelectedChildren = newSelectedItemArray
            //     let newSelectedItemId = newSelectedItemArray[newSelectedItemArray.length - 1].id;
            //     ajax(newSelectedItemId).then(res => {
            //         let lastLevelSelected = this.cascaderSelectedChildren.filter(item => {
            //             return item.id === this.cascaderSelectedChildren[this.cascaderSelectedChildren.length - 1].id
            //         });
            //         this.$set(lastLevelSelected[0], 'children', res);
            //     })
            // },
            // onCascaderDataChanged(newSource) {
            //     this.cascaderData = newSource
            // },
            // yyy() {
            //
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
    };
</script>

<style lang="scss">
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    ul, ol, li {
        list-style: noe;
        padding:0;
        margin:0;
    }
    .box {
        width: 100%;
        height: 150px;
        background: #ddd;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 32px;
    }
</style>
