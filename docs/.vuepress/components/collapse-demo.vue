<template>
<div class="collapse-demo">
        <h2>使用方法</h2>

        <h3 class="section">基本用法</h3>
        <p>适用于大部分场景</p>
        <div class="demo-wrapper">
            <p class="wrapper-title">
                Toast 注册了 <span class="code">$toast</span> 方法，接收一个 <span class="code">title</span> 字段和 <span class="code">option</span> 
                对象字面量，用于设置通知的标题和正文，经过一段时间后 <span class="code">$toast</span> 组件会自动关闭，
                但是通过设置 <span class="code">autoClose</span> 可以控制关闭的时间间隔，<span class="code">autoClose</span> 如果设置为 false，则不会自动关闭。
            </p>
            <s-collapse :selected.sync="selectedTab" accordion>
                <s-collapse-item title="标题1" name="1">内容1</s-collapse-item>
                <s-collapse-item title="标题2" name="2">内容2</s-collapse-item>
                <s-collapse-item title="标题3" name="3">内容3</s-collapse-item>
            </s-collapse>
            {{selectedTab}}
            <pre><code>{{code1}}</code></pre>
        </div>

        <h3 class="section">自定义出现位置</h3>
        <p class="wrapper-title">
            通过 <span class="code">position</span> 字段来设置消息出现的位置，
            有 <span class="code">top</span>，<span class="code">middle</span>，<span class="code">bottom</span> 三种位置，
            如果不传则默认为 <span class="code">top</span>。
        </p>
        <div class="demo-wrapper">
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
                    <td>title</td>
                    <td>消息内容</td>
                    <td>string</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>autoClose</td>
                    <td>是否自动关闭</td>
                    <td>boolean / number</td>
                    <td>-</td>
                    <td>默认3秒自动关闭</td>
                </tr>
                <tr>
                    <td>position</td>
                    <td>出现位置</td>
                    <td>string</td>
                    <td>top / middle / bottom</td>
                    <td>top</td>
                </tr>
                <tr>
                    <td>closeButton</td>
                    <td>关闭按钮和回调函数</td>
                    <td>object{ text: string, callback: function }</td>
                    <td>-</td>
                    <td>text: '关闭', callback: undefined</td>
                </tr>
                <tr>
                    <td>enableHtml</td>
                    <td>是否使用 HTML 片段</td>
                    <td>boolean</td>
                    <td>true / false</td>
                    <td>false</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import Vue from 'vue';
import Collapse from '../../../src/collapse';
import CollapseItem from '../../../src/collapse-item';

export default {
    components: {
        's-collapse': Collapse,
        's-collapse-item': CollapseItem
    },
    data() {
        return {
            selectedTab: ['2'],
            text1: '',
            code1: `
            `.replace(/^ {8}/gm, "").trim(),
        }
    },
    methods: {
    }
}
</script>
<style lang="scss">
.collapse-demo {
    .wrapper-title {
        margin-top: 0;
        text-align: justify;
    }
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
}
</style>
