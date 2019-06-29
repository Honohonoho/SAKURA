<template>
    <div class="slides-demo">
        <h3 class="section">基础用法</h3>
        <p>适用于大部分场景。</p>
        <div class="demo-wrapper">
            <s-slides :selected.sync="selected" @change="onChange">
                <s-slides-item name="1">
                    <div class="box box1">1</div>
                </s-slides-item>
                <s-slides-item name="2">
                    <div class="box box2">2</div>
                </s-slides-item>
                <s-slides-item name="3">
                    <div class="box box3">3</div>
                </s-slides-item>
                <s-slides-item name="4">
                    <div class="box box4">4</div>
                </s-slides-item>
            </s-slides>
            <div class="code-wrapper" v-highlight>
                <pre><code class="html">{{code1}}</code></pre>
            </div>
        </div>

        <h3 class="section">Slides Attributes</h3>
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
                <td>selected</td>
                <td>第一个首先显示的内容的name</td>
                <td>string</td>
                <td>-</td>
                <td>第一个 slides-item 的 name 值</td>
            </tr>
            <tr>
                <td>autoPlay</td>
                <td>是否自动播放</td>
                <td>boolean</td>
                <td>-</td>
                <td>true</td>
            </tr>
            <tr>
                <td>autoPlayDelay</td>
                <td>开启自动播放时内容的切换间隔时间，单位为毫秒</td>
                <td>number</td>
                <td>-</td>
                <td>3000ms</td>
            </tr>
            <tr>
                <td>reverse</td>
                <td>是否反向滚动</td>
                <td>boolean</td>
                <td>true / false</td>
                <td>false</td>
            </tr>
            </tbody>
        </table>
        <h3 class="section">SlidesItem Attributes</h3>
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
                <td>必填项，每个滚动内容的标识</td>
                <td>string</td>
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
                <td>change</td>
                <td>内容切换时触发</td>
                <td>(itemName: string)，绑定的 slide-item 的 name</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    import Slides from '../../../src/slides/slides'
    import SlidesItem from '../../../src/slides/slides-item'

    export default {
        components: {
            's-slides': Slides,
            's-slides-item': SlidesItem
        },
        data() {
            return {
                selected: '2', // 默认从哪一个开始
                code1: `
                <s-slides :selected.sync="selected" @change="onChange">
                <s-slides-item name="1">
                    <div>1</div>
                </s-slides-item>
                <s-slides-item name="2">
                    <div>2</div>
                </s-slides-item>
                <s-slides-item name="3">
                    <div>3</div>
                </s-slides-item>
                <s-slides-item name="4">
                    <div>4</div>
                </s-slides-item>
            </s-slides>
            <script>
            export default {
                data () {
                    return {
                        selected: '2', // 默认从哪一个开始
                    }
                },
                methods: {
                    onChange(itemName) {
                        console.log(itemName)
                    }
                }
            }
            <\/script>
                `.replace(/^ {8}/gm, "").trim(),
            }
        },
        methods: {
            onChange(itemName) {
                console.log(itemName);
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
.slides-demo {
    .box {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 200px;
        width: 100%;
        color: #ffffff;
        background-color: #3d9ff9;
    }
    .box2, .box4 {
        background-color: #57aef6;
    }
}
</style>
