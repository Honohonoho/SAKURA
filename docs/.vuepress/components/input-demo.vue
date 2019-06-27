<template>
    <div>
        <h3 class="section">基础用法</h3>
        <div class="demo-wrapper">
            <p>可以使用 <code>v-model</code> 实现数据的双向绑定</p>
            <s-input placeholder="请输入内容" v-model="input1"></s-input>
            <span style="margin-left: 10px;">结果：{{input1}}</span>
            <div class="code-wrapper" v-highlight>
                <pre><code class="html">{{code1}}</code></pre>
            </div>
        </div>

        <h3 class="section">禁用状态</h3>
        <p>通过添加 <code>disabled</code> 属性来禁用 input 组件</p>
        <div class="demo-wrapper">
            <s-input placeholder="请输入内容" disabled></s-input>
            <div class="code-wrapper" v-highlight>
                <pre><code class="html">{{code2}}</code></pre>
            </div>
        </div>

        <h3 class="section">只读状态</h3>
        <p>通过添加 <code>readonly</code> 属性来展示不可更改的内容</p>
        <div class="demo-wrapper">
            <s-input placeholder="请输入内容" readonly value="你改我一下试试"></s-input>
            <div class="code-wrapper" v-highlight>
                <pre><code class="html">{{code3}}</code></pre>
            </div>
        </div>

        <h3 class="section">错误提示</h3>
        <p>通过给 <code>error</code> 属性赋值来内联展示相应的错误提示内容</p>
        <div class="demo-wrapper">
            <s-input placeholder="请输入内容" value="123" error="请输入正确的用户名"></s-input>
            <div class="code-wrapper" v-highlight>
                <pre><code class="html">{{code4}}</code></pre>
            </div>
        </div>
        <h3 class="section">属性 Attributes</h3>
        <table class="table">
            <thead>
                <tr>
                <th>参数</th>
                <th>说明</th>
                <th>类型</th>
                <th>可选值</th>
                <th>默认值</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>value</td>
                    <td>绑定值</td>
                    <td>string</td>
                    <td>—</td>
                    <td>—</td>
                </tr>
                <tr>
                    <td>placeholder</td>
                    <td>输入框占位文本</td>
                    <td>string</td>
                    <td>—</td>
                    <td>—</td>
                </tr>
                <tr>
                    <td>disabled</td>
                    <td>是否禁用</td>
                    <td>boolean</td>
                    <td>true / false</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>readonly</td>
                    <td>是否只读</td>
                    <td>boolean</td>
                    <td>true / false</td>
                    <td>false</td>
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
                    <td>input</td>
                    <td>在 Input 值改变时触发</td>
                    <td>(value: string | number)</td>
                </tr>
                <tr>
                    <td>change</td>
                    <td>Input 值改变后触发 blu r或 focus 时触发 change 事件</td>
                    <td>(value: string | number)</td>
                </tr>
                <tr>
                    <td>focus</td>
                    <td>在 Input 获得焦点时触发</td>
                    <td>(value: string | number)</td>
                </tr>
                <tr>
                    <td>blur</td>
                    <td>在 Input 失去焦点时触发</td>
                    <td>(value: string | number)</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import Input from "../../../src/input";

export default {
    components: {
        's-input': Input
    },
    data() {
        return {
            input1: '',
            code1:
                `<s-input placeholder="请输入内容" v-model="input1"></s-input>
        data() {
            return {
                input1: ''
            }
        }
            `.replace(/^ {8}/gm, "").trim(),
            code2:
                `<s-input placeholder="请输入内容" disabled></s-input>
            `.replace(/^ {8}/gm, "").trim(),
            code3:
                `<s-input placeholder="请输入内容" readonly value="你改我一下试试"></s-input>
            `.replace(/^ {8}/gm, "").trim(),
            code4:
                `<s-input placeholder="请输入内容" value="123" error="请输入正确的用户名"></s-input>
            `.replace(/^ {8}/gm, "").trim(),
            code5:
                `<s-button disabled>默认按钮</s-button>
            `.replace(/^ {8}/gm, "").trim()
        };
    },
    methods: {
    }
};
</script>
<style lang="scss">

</style>


