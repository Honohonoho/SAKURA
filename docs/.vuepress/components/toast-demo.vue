<template>
<div>
        <h2>使用方法</h2>

        <h3 class="section">基础用法</h3>
        <div class="demo-wrapper">
            <s-button @click="showToast1">顶部</s-button>
            <s-button @click="showToast2">中间</s-button>
            <s-button @click="showToast3">底部</s-button>
            <pre><code>{{code1}}</code></pre>
        </div>

        <h3 class="section">tab禁用状态</h3>
        <p>在 <span class="code" v-text="text1"></span> 标签上添加 disabled 属性即可禁用当前 tab</p>
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
import Vue from 'vue';
import Toast from '../../../src/toast';
import Button from "../../../src/button";
import plugin from '../../../src/plugin';
Vue.use(plugin);

export default {
    components: {
        's-button': Button,
        's-toast': Toast
    },
    data() {
        return {
            text1: '<s-button @click="showToast1">',
            code1: `
            <s-button @click="showToast1">顶部</s-button>
        <s-button @click="showToast2">中间</s-button>
        <s-button @click="showToast3">底部</s-button>
            `.replace(/^ {8}/gm, "").trim(),
            code2: `
            `.replace(/^ {8}/gm, "").trim(),
        }
    },
    methods: {
        showToast1() {
            this.$toast('段落段落段落段落段落', {
                position: 'top',
                enableHtml: false,
                closeButton: {
                    text: '关闭',
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
                    text: '关闭',
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
                    text: '关闭',
                    callback() {
                        console.log('reset successfully')
                    }
                },
                autoClose: false
            })
        }
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
