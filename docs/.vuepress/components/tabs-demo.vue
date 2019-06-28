<template>
    <div>
        <h3 class="section">基础用法</h3>
        <p>基本的标签页，适用于大部分场景。在 <code>s-tabs</code> 上监听 <code>tab-click</code> 事件，可以获得 tab 选中时的对应的tab name。</p>
        <div class="demo-wrapper">
            <s-tabs selected="tech" @tab-click="onTabClick">
                <s-tabs-head>
                    <s-tabs-item name="tech">科技</s-tabs-item>
                    <s-tabs-item name="finance">财经</s-tabs-item>
                    <s-tabs-item name="sport">体育</s-tabs-item>
                </s-tabs-head>
                <s-tabs-body>
                    <s-tabs-pane name="tech">
                        <p>科技板块内容</p>
                        <p>科技板块内容</p>
                        <p>科技板块内容</p>
                    </s-tabs-pane>
                    <s-tabs-pane name="finance">
                        <p>财经板块内容</p>
                        <p>财经板块内容</p>
                        <p>财经板块内容</p>
                    </s-tabs-pane>
                    <s-tabs-pane name="sport">
                        <p>体育板块内容</p>
                        <p>体育板块内容</p>
                        <p>体育板块内容</p>
                    </s-tabs-pane>
                </s-tabs-body>
            </s-tabs>
            <div class="code-wrapper" v-highlight>
                <pre><code class="html">{{code1}}</code></pre>
            </div>
        </div>

        <h3 class="section">tab禁用状态</h3>
        <p>在 <span class="code" v-text="text1"></span> 标签上添加 <code>disabled</code> 属性即可禁用当前 tab</p>
        <div class="demo-wrapper">
            <s-tabs selected="tech">
                <s-tabs-head>
                    <s-tabs-item name="tech">科技</s-tabs-item>
                    <s-tabs-item name="finance" disabled>财经</s-tabs-item>
                    <s-tabs-item name="sport">体育</s-tabs-item>
                </s-tabs-head>
                <s-tabs-body>
                    <s-tabs-pane name="tech">
                        <p>科技板块内容</p>
                        <p>科技板块内容</p>
                        <p>科技板块内容</p>
                    </s-tabs-pane>
                    <s-tabs-pane name="finance">
                        <p>财经板块内容</p>
                        <p>财经板块内容</p>
                        <p>财经板块内容</p>
                    </s-tabs-pane>
                    <s-tabs-pane name="sport">
                        <p>体育板块内容</p>
                        <p>体育板块内容</p>
                        <p>体育板块内容</p>
                    </s-tabs-pane>
                </s-tabs-body>
            </s-tabs>
            <div class="code-wrapper" v-highlight>
                <pre><code class="html">{{code2}}</code></pre>
            </div>
        </div>

        <h3 class="section">属性 Attributes</h3>
        <table class="table">
            <thead>
                <tr>
                <th>参数</th>
                <th>说明</th>
                <th style="min-width:110px;">类型</th>
                <th>可选值</th>
                <th>默认值</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>name</td>
                    <td>必填项，每个 tab 和 tab 内容的标识</td>
                    <td>string</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>selected</td>
                    <td>必填项，默认选中的 tab 的 name</td>
                    <td>string</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>disabled</td>
                    <td>禁用的 tab</td>
                    <td>boolean</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
            </tbody>
        </table>
        <h3 class="section">事件 Event</h3>
        <table class="table">
            <thead>
            <tr>
                <th>事件名称</th>
                <th>说明</th>
                <th>回调参数</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>tab-click</td>
                <td>在 tab 被选中时触发</td>
                <td>(name: string)，被选中 tab 的 name</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import Tabs from "../../../src/tabs/tabs";
import Tabshead from '../../../src/tabs/tabs-head';
import TabsBody from '../../../src/tabs/tabs-body';
import TabsItem from '../../../src/tabs/tabs-item';
import TabsPane from '../../../src/tabs/tabs-pane';

export default {
    components: {
        's-tabs': Tabs,
        's-tabs-head': Tabshead,
        's-tabs-body': TabsBody,
        's-tabs-item': TabsItem,
        's-tabs-pane': TabsPane
    },
    data() {
        return {
            text1: '<s-tabs-item>',
            code1: `
            <s-tabs selected="tech" @tab-click="onTabClick">
            <s-tabs-head> 
                <s-tabs-item name="tech">科技</s-tabs-item>
                <s-tabs-item name="finance">财经</s-tabs-item>
                <s-tabs-item name="sport">体育</s-tabs-item>
            </s-tabs-head>
            <s-tabs-body>
                <s-tabs-pane name="tech">
                    <p>科技板块内容</p>
                    <p>科技板块内容</p>
                    <p>科技板块内容</p>
                </s-tabs-pane>
                <s-tabs-pane name="finance">
                    <p>财经板块内容</p>
                    <p>财经板块内容</p>
                    <p>财经板块内容</p>
                </s-tabs-pane>
                <s-tabs-pane name="sport">
                    <p>体育板块内容</p>
                    <p>体育板块内容</p>
                    <p>体育板块内容</p>
                </s-tabs-pane>
            </s-tabs-body>
        </s-tabs>
        methods: {
            onTabClick(name) {
                alert('你点击的是：' + name);
            }
        }
            `.replace(/^ {8}/gm, "").trim(),
            code2: `
            <s-tabs selected="tech">
            <s-tabs-head> 
                <s-tabs-item name="tech">科技</s-tabs-item>
                <s-tabs-item name="finance" disabled>财经</s-tabs-item>
                <s-tabs-item name="sport">体育</s-tabs-item>
            </s-tabs-head>
            <s-tabs-body>
                <s-tabs-pane name="tech">
                    <p>科技板块内容</p>
                    <p>科技板块内容</p>
                    <p>科技板块内容</p>
                </s-tabs-pane>
                <s-tabs-pane name="finance">
                    <p>财经板块内容</p>
                    <p>财经板块内容</p>
                    <p>财经板块内容</p>
                </s-tabs-pane>
                <s-tabs-pane name="sport">
                    <p>体育板块内容</p>
                    <p>体育板块内容</p>
                    <p>体育板块内容</p>
                </s-tabs-pane>
            </s-tabs-body>
        </s-tabs>
            `.replace(/^ {8}/gm, "").trim(),
        }
    },
    methods: {
        onTabClick(name) {
            alert('你点击的是：' + name);
        }
    }
}
</script>
<style lang="scss">
.code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
    color: #476582;
    padding: 0.25rem 0.5rem;
    margin: 0;
    font-size: 0.85em;
    background-color: rgba(27,31,35,0.05);
    border-radius: 3px;
}
</style>
