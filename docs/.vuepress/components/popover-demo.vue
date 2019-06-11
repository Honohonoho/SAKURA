<template>
<div class="popover-demo">
        <h2>使用方法</h2>

        <h3 class="section">基本用法</h3>
        <p>最常见的时鼠标悬浮在按钮上方，然后出现提示信息。</p>
        <div class="demo-wrapper">
            <p style="margin-top: 0;">click 触发</p>
            <p class="wrapper-title">
                通过 <span class="code">position</span> 属性来指定消息出现的位置，可设置 <span class="code">top</span>，<span class="code">left</span>
                ，<span class="code">right</span>，<span class="code">bottom</span>。
            </p>
            <div class="box">
                <div class="top-box box-item">
                    <s-popover>
                        <template slot="content">
                            <div>上方出现的提示信息</div>
                        </template>
                        <template>
                            <s-button>上方</s-button>
                        </template>
                    </s-popover>
                </div>
                <div class="middle-box box-item">
                    <div class="left-box box-item">
                        <s-popover position="left">
                            <template slot="content">
                                <div>左方出现的提示信息</div>
                            </template>
                            <template>
                                <s-button>左方</s-button>
                            </template>
                        </s-popover>
                    </div>
                    <div class="right-box box-item">
                        <s-popover position="right">
                            <template slot="content">
                                <div>右方出现的提示信息</div>
                            </template>
                            <template>
                                <s-button>右方</s-button>
                            </template>
                        </s-popover>
                    </div>
                </div>
                <div class="bottom-box box-item">
                    <s-popover position="bottom">
                        <template slot="content" slot-scope="{close}">
                            <div>下方出现的提示信息</div>
                            <s-button @click="close">关闭</s-button>
                        </template>
                        <template>
                            <s-button>下方</s-button>
                        </template>
                    </s-popover>
                </div>
            </div>
            <p class="wrapper-title">
                特别的，在 <span class="code">slot</span> 为 <span class="code">content</span> 的模板中添加按钮，
                并绑定与 <span class="code">slot-scop</span> 属性相同的 <span class="code">close</span> 事件
                那么点击这个按钮可以关闭当前消息提示。
            </p>
            <pre><code>{{code1}}</code></pre>
        </div>
        <div class="demo-wrapper" style="margin-top: 20px;">
            <p style="margin-top: 0;">hover触发</p>
            <p class="wrapper-title">
                在 <span class="code" v-text="text1"></span> 标签上设置属性 <span class="code">trigger</span> 为 <span class="code">hover</span>
                那么现实消息信息的方式就会变为悬浮时出现。
            </p>
            <div class="box">
                <div class="top-box box-item">
                    <s-popover trigger="hover">
                        <template slot="content">
                            <div>上方出现的提示信息</div>
                        </template>
                        <template>
                            <s-button>上方</s-button>
                        </template>
                    </s-popover>
                </div>
                <div class="middle-box box-item">
                    <div class="left-box box-item">
                        <s-popover position="left" trigger="hover">
                            <template slot="content">
                                <div>左方出现的提示信息</div>
                            </template>
                            <template>
                                <s-button>左方</s-button>
                            </template>
                        </s-popover>
                    </div>
                    <div class="right-box box-item">
                        <s-popover position="right" trigger="hover">
                            <template slot="content">
                                <div>右方出现的提示信息</div>
                            </template>
                            <template>
                                <s-button>右方</s-button>
                            </template>
                        </s-popover>
                    </div>
                </div>
                <div class="bottom-box box-item">
                    <s-popover position="bottom" trigger="hover">
                        <template slot="content" slot-scope="{close}">
                            <div>下方出现的提示信息</div>
                            <s-button @click="close">关闭</s-button>
                        </template>
                        <template>
                            <s-button>下方</s-button>
                        </template>
                    </s-popover>
                </div>
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
                    <td>position</td>
                    <td>出现位置</td>
                    <td>string</td>
                    <td>top / left / right / bottom</td>
                    <td>top</td>
                </tr>
                <tr>
                    <td>slot</td>
                    <td>必填项，消息内容所对应的插槽名</td>
                    <td>string</td>
                    <td>content</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>trigger</td>
                    <td>触发方式</td>
                    <td>string</td>
                    <td>click / hover</td>
                    <td>click</td>
                </tr>
                <tr>
                    <td>slot-scope</td>
                    <td>与关闭功能一同使用，绑定 close 事件</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import Popover from '../../../src/popover';
import Button from "../../../src/button/button";

export default {
    components: {
        's-popover': Popover,
        's-button': Button
    },
    data() {
        return {
            text1: '<s-popover>',
            code1: `
            <s-popover>
            <template slot="content">
                <div>上方出现的提示信息</div>
            </template>
            <template>
                <s-button>上方</s-button>
            </template>
        </s-popover>
        <s-popover position="left">
            <template slot="content">
                <div>左方出现的提示信息</div>
            </template>
            <template>
                <s-button>左方</s-button>
            </template>
        </s-popover>
        <s-popover position="right">
            <template slot="content">
                <div>右方出现的提示信息</div>
            </template>
            <template>
                <s-button>右方</s-button>
            </template>
        </s-popover>
        <s-popover position="bottom">
            <template slot="content" slot-scope="{close}">
                <div>下方出现的提示信息</div>
                <s-button @click="close">关闭</s-button>
            </template>
            <template>
                <s-button>下方</s-button>
            </template>
        </s-popover>
            `.replace(/^ {8}/gm, "").trim(),
            code1: `
            <s-popover>
            <template slot="content" trigger="hover">
                <div>上方出现的提示信息</div>
            </template>
            <template>
                <s-button>上方</s-button>
            </template>
        </s-popover>
        <s-popover position="left" trigger="hover">
            <template slot="content">
                <div>左方出现的提示信息</div>
            </template>
            <template>
                <s-button>左方</s-button>
            </template>
        </s-popover>
        <s-popover position="right" trigger="hover">
            <template slot="content">
                <div>右方出现的提示信息</div>
            </template>
            <template>
                <s-button>右方</s-button>
            </template>
        </s-popover>
        <s-popover position="bottom" trigger="hover">
            <template slot="content" slot-scope="{close}">
                <div>下方出现的提示信息</div>
                <s-button @click="close">关闭</s-button>
            </template>
            <template>
                <s-button>下方</s-button>
            </template>
        </s-popover>
            `.replace(/^ {8}/gm, "").trim(),
        }
    },
    methods: {
    }
}
</script>
<style lang="scss" scoped>
.popover-demo {
    .box {
        max-width: 450px;
        display: inline-flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        .box-item {
            display: flex;
        }
        .middle-box {
            max-width: 450px;
            justify-content: space-between;
        }
        .top-box, .bottom-box {
            align-self: center;
        }
    }
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
