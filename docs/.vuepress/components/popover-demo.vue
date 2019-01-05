<template>
<div class="popover-demo">
        <h2>使用方法</h2>

        <h3 class="section">基本用法</h3>
        <p>最常见的时鼠标悬浮在按钮上方，然后出现提示信息。</p>
        <div class="demo-wrapper">
            <p>click触发</p>
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
            </div>
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
import Popover from '../../../src/popover';
import Button from "../../../src/button";

export default {
    components: {
        's-popover': Popover,
        's-button': Button
    },
    data() {
        return {
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
body {
    font-size: 14px;
}
.toast-demo {
    .error {
        color: rgb(254, 108, 111);
    }
    .s-button {
        margin: 10px;
    }
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
