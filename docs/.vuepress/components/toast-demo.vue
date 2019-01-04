<template>
<div class="toast-demo">
        <h2>使用方法</h2>

        <h3 class="section">基本用法</h3>
        <p>适用于大部分场景</p>
        <div class="demo-wrapper">
            <p class="wrapper-title">
                Toast 注册了 <span class="code">$toast</span> 方法，接收一个 <span class="code">title</span> 字段和 <span class="code">option</span> 
                对象字面量，用于设置通知的标题和正文，经过一段时间后 <span class="code">$toast</span> 组件会自动关闭，
                但是通过设置 <span class="code">autoClose</span> 可以控制关闭的时间间隔，<span class="code">autoClose</span> 如果设置为 false，则不会自动关闭。
            </p>
            <s-button @click="showToastDefault">自动关闭</s-button>
            <s-button @click="showToastNotClose">不会自动关闭</s-button>
            <pre><code>{{code1}}</code></pre>
        </div>

        <h3 class="section">自定义出现位置</h3>
        <p class="wrapper-title">
            通过 <span class="code">position</span> 字段来设置消息出现的位置，
            有 <span class="code">top</span>，<span class="code">middle</span>，<span class="code">bottom</span> 三种位置，
            如果不传则默认为 <span class="code">top</span>。
        </p>
        <div class="demo-wrapper">
            <s-button @click="showToastTop">顶部出现</s-button>
            <s-button @click="showToastMiddle">中间出现</s-button>
            <s-button @click="showToastBottom">底部出现</s-button>
            <pre><code>{{code2}}</code></pre>
        </div>

        <h3 class="section">自定义关闭按钮</h3>
        <p class="wrapper-title">
            通过 <span class="code">closeButton</span> 对象来设置关闭按钮的文本和关闭后执行的回调函数，
            <span class="code">closeButton</span> 对象接受2个字段，<span class="code">text</span> 字段可以设置按钮的文本，
            <span class="code">callback</span> 是一个可以执行回调函数，会在 <span class="code">toast</span> 关闭后执行。
        </p>
        <div class="demo-wrapper">
            <s-button @click="showToastCallback">点我试试</s-button>
            <pre><code>{{code3}}</code></pre>
        </div>

        <h3 class="section">使用 HTML 片段</h3>
        <p class="wrapper-title">
            设置 <span class="code">enableHtml</span> 字段为 <span class="code">true</span> 来允许将 <span class="code">title</span> 字段渲染为 HTML，而非文本
        </p>
        <p class="error">注意：在网站上动态渲染任意 HTML 是非常危险的，用户提交的 title 内容不一定是可信的，容易导致 XSS 攻击，所以请确保渲染的内容是可信的。</p>
        <div class="demo-wrapper">
            <s-button @click="showToastHTML">使用 HTML 片段</s-button>
            <pre><code>{{code4}}</code></pre>
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
            text1: '$toast',
            code1: `
            <s-button @click="showToastDefault">自动关闭</s-button>
        <s-button @click="showToastNotClose">不会自动关闭</s-button>

        <script>
        export default {
            methods: {
                showToastDefault() {
                    this.$toast('2秒自动关闭',{
                        autoClose: 2
                    })
                },
                showToastNotClose() {
                    this.$toast('我是一条不会自动关闭的消息', {
                        autoClose: false
                    })
                },
            }
        }
        <\/script>
            `.replace(/^ {8}/gm, "").trim(),
            code2: `
            <s-button @click="showToastTop">顶部出现</s-button>
        <s-button @click="showToastMiddle">中间出现</s-button>
        <s-button @click="showToastBottom">底部出现</s-button>

        <script>
        export default {
            methods: {
                showToastTop() {
                    this.$toast('顶部出现')
                },
                showToastMiddle() {
                    this.$toast('中间出现', {
                        position: 'middle'
                    })
                },
                showToastBottom() {
                    this.$toast('底部出现', {
                        position: 'bottom'
                    })
                }
            }
        }
        <\/script>
            `.replace(/^ {8}/gm, "").trim(),
            code3: `
        <s-button @click="showToastCallback">点我试试</s-button>

        <script>
        export default {
            methods: {
                showToastCallback() {
                    this.$toast('我关闭后会执行callback', {
                        closeButton: {
                            text: '知道了',
                            callback() {
                                alert('我被关闭啦~')
                            }
                        },
                        autoClose: false
                    })
                }
            }
        }
        <\/script>
            `.replace(/^ {8}/gm, "").trim(),
            code4: `
        <s-button @click="showToastHTML">使用 HTML 片段</s-button>

        <script>
        export default {
            methods: {
                showToastHTML() {
                    this.$toast('<strong>这是一段加粗内容</strong>', {
                        position: 'bottom',
                        enableHtml: true,
                        closeButton: {
                            text: '看到了',
                            callback() {
                            }
                        },
                        autoClose: false
                    })
                }
            }
        }
        <\/script>
            `.replace(/^ {8}/gm, "").trim(),
        }
    },
    methods: {
        showToastDefault() {
            this.$toast('2秒自动关闭',{
                autoClose: 2
            })
        },
        showToastNotClose() {
            this.$toast('我是一条不会自动关闭的消息', {
                autoClose: false
            })
        },
        showToastTop() {
            this.$toast('顶部出现')
        },
        showToastMiddle() {
            this.$toast('中间出现', {
                position: 'middle'
            })
        },
        showToastBottom() {
            this.$toast('底部出现', {
                position: 'bottom'
            })
        },
        showToastCallback() {
            this.$toast('我关闭后会执行callback', {
                closeButton: {
                    text: '知道了',
                    callback() {
                        alert('我被关闭啦~')
                    }
                },
                autoClose: false
            })
        },
        showToastHTML() {
            this.$toast('<strong>这是一段加粗内容</strong>', {
                position: 'bottom',
                enableHtml: true,
                closeButton: {
                    text: '看到了',
                    callback() {
                    }
                },
                autoClose: false
            })
        }
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
