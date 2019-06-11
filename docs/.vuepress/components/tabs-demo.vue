<template>
<div>
        <h2>使用方法</h2>

        <h3 class="section">基础用法</h3>
        <div class="demo-wrapper">
            <s-tabs selected="tech">
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
            <pre><code>{{code1}}</code></pre>
        </div>

        <h3 class="section">tab禁用状态</h3>
        <p>在 <span class="code" v-text="text1"></span> 标签上添加 disabled 属性即可禁用当前 tab</p>
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
            <pre><code>{{code1}}</code></pre>
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
                    <td>必填项，默认选中的 tab</td>
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
            <s-tabs selected="tech">
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
            `.replace(/^ {8}/gm, "").trim(),
            code1: `
            <s-tabs selected="tech" @update:selected="">
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
    }
}
</script>
<style lang="scss" scoped>
.code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
    color: #476582;
    padding: 0.25rem 0.5rem;
    margin: 0;
    font-size: 0.85em;
    background-color: rgba(27,31,35,0.05);
    border-radius: 3px;
}
.section {
    margin-top: 50px;
}
.demo-wrapper {
    padding: 24px;
    border: 1px solid #ebebeb;
}
.table {
    th {
        min-width: 50px;
        text-align: left
    }
}
</style>
