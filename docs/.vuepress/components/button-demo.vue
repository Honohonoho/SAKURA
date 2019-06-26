<template>
    <div>
        <h3 class="section">基础用法</h3>
        <p>基础的按钮用法。</p>
        <div class="demo-wrapper">
            <s-button>默认 Default</s-button>
            <s-button type="primary">主要 Primary</s-button>
            <br>
            <s-button type="info">提示 Info</s-button>
            <s-button type="waring">警告 Warning</s-button>
            <s-button type="success">成功 Success</s-button>
            <s-button type="error">错误 Error</s-button>
            <p>使用 <code>type</code> 来定义按钮类型，不指定 <code>type</code> 默认为 default。</p>
            <div class="code-wrapper" v-highlight>
                <pre><code class="html">{{code1}}</code></pre>
            </div>
        </div>

        <h3 class="section">图标按钮</h3>
        <div class="demo-wrapper">
            <div class="margin-bottom-0">
                <s-button icon="settings">设置</s-button>
                <s-button icon="download">下载</s-button>
                <s-button icon="search" type="primary">搜索</s-button>
            </div>
            <p>使用 <code>icon</code> 来引入组件库内置的图标</p>
            <div class="margin-bottom-0 margin-top-30">
                <s-button icon="left">上一页</s-button>
                <s-button iconPosition="right" icon="right">下一页</s-button>
            </div>
            <p>另外，使用 <code>iconPosition</code> 可以定位图标位置。</p>
            <div class="code-wrapper" v-highlight>
                <pre><code class="html">{{code2}}</code></pre>
            </div>
        </div>

        <h3 class="section">按钮组</h3>
        <p>功能相似的按钮常常为一组出现使用 <code>s-button-group</code> 标签来嵌套你的按钮。</p>
        <div class="demo-wrapper">
            <s-button-group>
                <s-button icon="left">上一页</s-button>
                <s-button iconPosition="right" icon="right">下一页</s-button>
            </s-button-group>
            <br>
            <s-button-group>
                <s-button icon="left" type="primary">后退</s-button>
                <s-button iconPosition="right" icon="right" type="primary">前进</s-button>
            </s-button-group>
            <div class="code-wrapper" v-highlight>
                <pre><code class="html">{{code3}}</code></pre>
            </div>
        </div>

        <h3 class="section">加载中</h3>
        <p>按钮显示正在加载的状态，设置 <code>loading</code> 属性为 <code>true</code> 即可</p>
        <div class="demo-wrapper">
            <s-button :loading="isLoading1" @click="toggleLoading1">默认按钮</s-button>
            <br>
            <s-button type="primary" icon="download"
                  :loading="isLoading2"
                  @click="toggleLoading2"
            >
                点我下载
            </s-button>
            <div class="code-wrapper" v-highlight>
                <pre><code class="html">{{code4}}</code></pre>
            </div>
        </div>

        <h3 class="section">禁用状态</h3>
        <p>按钮的不可用状态，添加一个 <code>disabled</code> 属性即可</p>
        <div class="demo-wrapper">
            <s-button disabled>禁用的按钮</s-button>
            <div class="code-wrapper" v-highlight>
                <pre><code class="html">{{code5}}</code></pre>
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
                <td>type</td>
                <td>按钮类型</td>
                <td>string</td>
                <td>primary / info / success / waring / error</td>
                <td>不设置type即为默认样式</td>
            </tr>
            <tr>
                <td>icon</td>
                <td>图标</td>
                <td>string</td>
                <td>settings / download / left / right / search / loading / error / info</td>
                <td>—</td>
            </tr>
            <tr>
                <td>iconPosition</td>
                <td>图标位置</td>
                <td>string</td>
                <td>left / right</td>
                <td>left</td>
            </tr>
            <tr>
                <td>loading</td>
                <td>是否显示加载状态</td>
                <td>boolean</td>
                <td>true / false</td>
                <td>false</td>
            </tr>
            <tr>
                <td>disabled</td>
                <td>是否禁用</td>
                <td>boolean</td>
                <td>—</td>
                <td>false</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>
<script>

    import Button from "../../../src/button/button";
    import ButtonGroup from "../../../src/button/button-group";

    export default {
        components: {
            "s-button": Button,
            's-button-group': ButtonGroup
        },
        data() {
            return {
                isLoading1: false,
                isLoading2: false,
                code1:
                    `<s-button>默认 Default</s-button>
            <s-button type="primary">普通 Primary</s-button>
            <s-button type="info">提示 Info</s-button>
            <s-button type="waring">警告 Waring</s-button>
            <s-button type="success">成功 Success</s-button>
            <s-button type="error">错误 Error</s-button>
                    `.replace(/^ {8}/gm, "").trim(),
                code2:
                    `<s-button icon="settings">设置</s-button>
            <s-button icon="download">下载</s-button>
            <s-button icon="search" type="primary">搜索</s-button>

            <s-button icon="left">上一页</s-button>
            <s-button iconPosition="right" icon="right">下一页</s-button>
                    `.replace(/^ {8}/gm, "").trim(),
                code3:
                    `<s-button-group>
                <s-button icon="left">上一页</s-button>
                <s-button iconPosition="right" icon="right">下一页</s-button>
            </s-button-group>
            <s-button-group>
                <s-button icon="left" type="primary">后退</s-button>
                <s-button iconPosition="right" icon="right" type="primary">前进</s-button>
            </s-button-group>
                    `.replace(/^ {8}/gm, "").trim(),
                code4:
                    `<s-button :loading="isLoading1" @click="toggleLoading1">默认按钮</s-button>
            <s-button type="primary" icon="download"
                :loading="isLoading2" @click="toggleLoading2"
             >
                点我下载
            </s-button>
            data() {
                return {
                    isLoading1: false,
                    isLoading2: false
                }
            },
            methods: {
                toggleLoading1() {
                    this.isLoading1 = true
                },
                toggleLoading2() {
                    this.isLoading2 = true
                }
            }
                    `.replace(/^ {8}/gm, "").trim(),
                code5:
                    `<s-button disabled>禁用的按钮</s-button>
                    `.replace(/^ {8}/gm, "").trim()
            };
        },
        methods: {
            toggleLoading1() {
                this.isLoading1 = true
            },
            toggleLoading2() {
                this.isLoading2 = true
            }
        }
    };
</script>
<style lang="scss">
    .margin-bottom-0 {
        .s-button {
            margin-bottom: 0;
        }
    }
    .margin-top-30 {
        margin-top: 30px;
    }
    .s-button {
        margin-right: 10px;
        margin-bottom: 10px;
    }
    .s-button-group {
        .s-button {
            margin-right: 0;
        }
    }
</style>


