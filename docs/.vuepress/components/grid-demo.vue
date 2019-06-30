<template>
    <div>
        <h2>使用方法</h2>
        <p>1. <code>s-row</code> 在水平方向创建行，<code>s-col</code> 作为 <code>s-row</code> 的直接子元素插入在 <code>s-row</code> 中。</p>
        <p>2. 在每个 <code>s-col</code> 中，可以填入用户自定内容。</p>
        <p>
            3. 通过设置 <code>s-col</code> 的 <code>span</code> 参数，指定跨越的范围，其范围是1到24，
            每个 <code>s-row</code> 中的 <code>s-col</code> 的 <code>span</code> 值总和应该为24。
        </p>
        <h3 class="section">基础用法</h3>
        <div class="demo-wrapper">
            <s-row>
                <s-col><div class="s-col-content">12</div></s-col>
                <s-col><div class="s-col-content">12</div></s-col>
            </s-row>
            <s-row>
                <s-col span="8"><div class="s-col-content">8</div></s-col>
                <s-col span="8"><div class="s-col-content">8</div></s-col>
                <s-col span="8"><div class="s-col-content">8</div></s-col>
            </s-row>
            <s-row>
                <s-col span="6"><div class="s-col-content">6</div></s-col>
                <s-col span="6"><div class="s-col-content">6</div></s-col>
                <s-col span="6"><div class="s-col-content">6</div></s-col>
                <s-col span="6"><div class="s-col-content">6</div></s-col>
            </s-row>
            <s-row>
                <s-col span="4"><div class="s-col-content">4</div></s-col>
                <s-col span="4"><div class="s-col-content">4</div></s-col>
                <s-col span="4"><div class="s-col-content">4</div></s-col>
                <s-col span="4"><div class="s-col-content">4</div></s-col>
                <s-col span="4"><div class="s-col-content">4</div></s-col>
                <s-col span="4"><div class="s-col-content">4</div></s-col>
            </s-row>
            <s-row>
                <s-col span="2"><div class="s-col-content">2</div></s-col>
                <s-col span="2"><div class="s-col-content">2</div></s-col>
                <s-col span="2"><div class="s-col-content">2</div></s-col>
                <s-col span="2"><div class="s-col-content">2</div></s-col>
                <s-col span="2"><div class="s-col-content">2</div></s-col>
                <s-col span="2"><div class="s-col-content">2</div></s-col>
                <s-col span="2"><div class="s-col-content">2</div></s-col>
                <s-col span="2"><div class="s-col-content">2</div></s-col>
                <s-col span="2"><div class="s-col-content">2</div></s-col>
                <s-col span="2"><div class="s-col-content">2</div></s-col>
                <s-col span="2"><div class="s-col-content">2</div></s-col>
                <s-col span="2"><div class="s-col-content">2</div></s-col>
            </s-row>
            <div class="code-wrapper" v-highlight>
                <pre><code class="html">{{code1}}</code></pre>
            </div>
        </div>

        <h3 class="section">设置空隙 gutter</h3>
        <p>通过在 <code>s-row</code> 标签上添加 <code>gutter</code> 属性来设置空隙，其值表现为左右相邻的 <code>s-col</code> 元素 <code>padding</code> 之和。</p>
        <div class="demo-wrapper">
            <s-row gutter="10">
                <s-col span="8"><div class="s-col-content">8</div></s-col>
                <s-col span="8"><div class="s-col-content">8</div></s-col>
                <s-col span="8"><div class="s-col-content">8</div></s-col>
            </s-row>
            <s-row gutter="10">
                <s-col span="6"><div class="s-col-content">6</div></s-col>
                <s-col span="6"><div class="s-col-content">6</div></s-col>
                <s-col span="6"><div class="s-col-content">6</div></s-col>
                <s-col span="6"><div class="s-col-content">6</div></s-col>
            </s-row>
            <div class="code-wrapper" v-highlight>
                <pre><code class="html">{{code2}}</code></pre>
            </div>
        </div>

        <h3 class="section">设置偏移 offset</h3>
        <p>通过在 <code>s-col</code> 标签上添加 <code>offset</code> 属性来设置偏移</p>
        <div class="demo-wrapper">
            <s-row gutter="10">
                <s-col span="8"><div class="s-col-content">8</div></s-col>
                <s-col span="8" offset="8"><div class="s-col-content">8</div></s-col>
            </s-row>
            <s-row gutter="10">
                <s-col span="6"><div class="s-col-content">6</div></s-col>
                <s-col span="6" offset="6"><div class="s-col-content">6</div></s-col>
                <s-col span="6"><div class="s-col-content">6</div></s-col>
            </s-row>
            <s-row gutter="10">
                <s-col span="4"><div class="s-col-content">4</div></s-col>
                <s-col span="4" offset="4"><div class="s-col-content">4</div></s-col>
                <s-col span="4"><div class="s-col-content">4</div></s-col>
                <s-col span="4" offset="4"><div class="s-col-content">4</div></s-col>
            </s-row>
            <s-row gutter="10">
                <s-col span="2"><div class="s-col-content">2</div></s-col>
                <s-col span="2" offset="2"><div class="s-col-content">2</div></s-col>
                <s-col span="2"><div class="s-col-content">2</div></s-col>
                <s-col span="2"><div class="s-col-content">2</div></s-col>
                <s-col span="2" offset="4"><div class="s-col-content">2</div></s-col>
                <s-col span="2"><div class="s-col-content">2</div></s-col>
                <s-col span="2" offset="2"><div class="s-col-content">2</div></s-col>
                <s-col span="2"><div class="s-col-content">2</div></s-col>
            </s-row>
            <div class="code-wrapper" v-highlight>
                <pre><code class="html">{{code3}}</code></pre>
            </div>
        </div>

        <h3 class="section">设置横向对齐方式</h3>
        <p>通过在 <code>s-row</code> 标签上添加 <code>justify</code> 属性来设置flex布局的横向对齐方式，可以配合 <code>gutter</code> 和 <code>offset</code> 属性使用</p>
        <div class="demo-wrapper">
            <s-row gutter="10" justify="center">
                <s-col span="2"><div class="s-col-content">2</div></s-col>
                <s-col span="2"><div class="s-col-content">2</div></s-col>
                <s-col span="2"><div class="s-col-content">2</div></s-col>
                <s-col span="2"><div class="s-col-content">2</div></s-col>
                <s-col span="2" offset="2"><div class="s-col-content">2</div></s-col>
                <s-col span="2"><div class="s-col-content">2</div></s-col>
                <s-col span="2"><div class="s-col-content">2</div></s-col>
                <s-col span="2"><div class="s-col-content">2</div></s-col>
            </s-row>
            <s-row justify="left">
                <s-col span="2"><div class="s-col-content">2</div></s-col>
                <s-col span="2"><div class="s-col-content">2</div></s-col>
                <s-col span="2"><div class="s-col-content">2</div></s-col>
                <s-col span="2"><div class="s-col-content">2</div></s-col>
                <s-col span="2" offset="2"><div class="s-col-content">2</div></s-col>
                <s-col span="2"><div class="s-col-content">2</div></s-col>
                <s-col span="2"><div class="s-col-content">2</div></s-col>
                <s-col span="2"><div class="s-col-content">2</div></s-col>
            </s-row>
            <s-row justify="space-between">
                <s-col span="2"><div class="s-col-content">2</div></s-col>
                <s-col span="2"><div class="s-col-content">2</div></s-col>
                <s-col span="2"><div class="s-col-content">2</div></s-col>
                <s-col span="2"><div class="s-col-content">2</div></s-col>
                <s-col span="2" offset="4"><div class="s-col-content">2</div></s-col>
                <s-col span="2"><div class="s-col-content">2</div></s-col>
                <s-col span="2"><div class="s-col-content">2</div></s-col>
                <s-col span="2"><div class="s-col-content">2</div></s-col>
            </s-row>
            <s-row justify="space-around">
                <s-col span="2"><div class="s-col-content">2</div></s-col>
                <s-col span="2"><div class="s-col-content">2</div></s-col>
                <s-col span="2"><div class="s-col-content">2</div></s-col>
                <s-col span="2"><div class="s-col-content">2</div></s-col>
                <s-col span="2" offset="2"><div class="s-col-content">2</div></s-col>
                <s-col span="2"><div class="s-col-content">2</div></s-col>
                <s-col span="2"><div class="s-col-content">2</div></s-col>
                <s-col span="2"><div class="s-col-content">2</div></s-col>
            </s-row>
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
                <th style="min-width:110px;">类型</th>
                <th>可选值</th>
                <th>默认值</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>span</td>
                    <td>网格占据的列数</td>
                    <td>number | string</td>
                    <td>-</td>
                    <td>12</td>
                </tr>
                <tr>
                    <td>gutter</td>
                    <td>网格间隔</td>
                    <td>number | string</td>
                    <td>-</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>offset</td>
                    <td>网格左侧的偏移格数</td>
                    <td>number | string</td>
                    <td>-</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>justify</td>
                    <td>网格 flex 布局下的水平排列方式</td>
                    <td>string</td>
                    <td>start/end/center/space-around/space-between</td>
                    <td>start</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import Row from "../../../src/grid/row";
import Col from "../../../src/grid/col";

export default {
    components: {
        's-row': Row,
        's-col': Col
    },
    data() {
        return {
            code1:
            `<s-row>
            <s-col><div>12</div></s-col>
            <s-col><div>12</div></s-col>
        </s-row>
        <s-row>
            <s-col span="8"><div>8</div></s-col>
            <s-col span="8"><div>8</div></s-col>
            <s-col span="8"><div>8</div></s-col>
        </s-row>
        <s-row>
            <s-col span="6"><div>6</div></s-col>
            <s-col span="6"><div>6</div></s-col>
            <s-col span="6"><div>6</div></s-col>
            <s-col span="6"><div>6</div></s-col>
        </s-row>
        <s-row>
            <s-col span="4"><div>4</div></s-col>
            <s-col span="4"><div>4</div></s-col>
            <s-col span="4"><div>4</div></s-col>
            <s-col span="4"><div>4</div></s-col>
            <s-col span="4"><div>4</div></s-col>
            <s-col span="4"><div>4</div></s-col>
        </s-row>
        <s-row>
            <s-col span="2"><div>2</div></s-col>
            <s-col span="2"><div>2</div></s-col>
            <s-col span="2"><div>2</div></s-col>
            <s-col span="2"><div>2</div></s-col>
            <s-col span="2"><div>2</div></s-col>
            <s-col span="2"><div>2</div></s-col>
            <s-col span="2"><div>2</div></s-col>
            <s-col span="2"><div>2</div></s-col>
            <s-col span="2"><div>2</div></s-col>
            <s-col span="2"><div>2</div></s-col>
            <s-col span="2"><div>2</div></s-col>
            <s-col span="2"><div>2</div></s-col>
        </s-row>
            `.replace(/^ {8}/gm, "").trim(),
            code2: 
            `<s-row gutter="10">
            <s-col span="8"><div>8</div></s-col>
            <s-col span="8"><div>8</div></s-col>
            <s-col span="8"><div>8</div></s-col>
        </s-row>
        <s-row gutter="10">
            <s-col span="6"><div>6</div></s-col>
            <s-col span="6"><div>6</div></s-col>
            <s-col span="6"><div>6</div></s-col>
            <s-col span="6"><div>6</div></s-col>
        </s-row>
            `.replace(/^ {8}/gm, "").trim(),
            code3:
            `<s-row gutter="10">
            <s-col span="8"><div>8</div></s-col>
            <s-col span="8" offset="8"><div>8</div></s-col>
        </s-row>
        <s-row gutter="10">
            <s-col span="6"><div>6</div></s-col>
            <s-col span="6" offset="6"><div>6</div></s-col>
            <s-col span="6"><div>6</div></s-col>
        </s-row>
        <s-row gutter="10">
            <s-col span="4"><div>4</div></s-col>
            <s-col span="4" offset="4"><div>4</div></s-col>
            <s-col span="4"><div>4</div></s-col>
            <s-col span="4" offset="4"><div>4</div></s-col>
        </s-row>
        <s-row gutter="10">
            <s-col span="2"><div>2</div></s-col>
            <s-col span="2" offset="2"><div>2</div></s-col>
            <s-col span="2"><div>2</div></s-col>
            <s-col span="2"><div>2</div></s-col>
            <s-col span="2" offset="4"><div>2</div></s-col>
            <s-col span="2"><div>2</div></s-col>
            <s-col span="2" offset="2"><div>2</div></s-col>
            <s-col span="2"><div>2</div></s-col>
        </s-row>
            `.replace(/^ {8}/gm, "").trim(),
            code4:
            `<s-row gutter="10" justify="center">
            <s-col span="2"><div>2</div></s-col>
            <s-col span="2"><div>2</div></s-col>
            <s-col span="2"><div>2</div></s-col>
            <s-col span="2"><div>2</div></s-col>
            <s-col span="2" offset="2"><div>2</div></s-col>
            <s-col span="2"><div>2</div></s-col>
            <s-col span="2"><div>2</div></s-col>
            <s-col span="2"><div>2</div></s-col>
        </s-row>
        <s-row justify="left">
            <s-col span="2"><div>2</div></s-col>
            <s-col span="2"><div>2</div></s-col>
            <s-col span="2"><div>2</div></s-col>
            <s-col span="2"><div>2</div></s-col>
            <s-col span="2" offset="2"><div>2</div></s-col>
            <s-col span="2"><div>2</div></s-col>
            <s-col span="2"><div>2</div></s-col>
            <s-col span="2"><div>2</div></s-col>
        </s-row>
        <s-row justify="space-between">
            <s-col span="2"><div>2</div></s-col>
            <s-col span="2"><div>2</div></s-col>
            <s-col span="2"><div>2</div></s-col>
            <s-col span="2"><div>2</div></s-col>
            <s-col span="2" offset="4"><div>2</div></s-col>
            <s-col span="2"><div>2</div></s-col>
            <s-col span="2"><div>2</div></s-col>
            <s-col span="2"><div>2</div></s-col>
        </s-row>
        <s-row justify="space-around">
            <s-col span="2"><div>2</div></s-col>
            <s-col span="2"><div>2</div></s-col>
            <s-col span="2"><div>2</div></s-col>
            <s-col span="2"><div>2</div></s-col>
            <s-col span="2" offset="2"><div>2</div></s-col>
            <s-col span="2"><div>2</div></s-col>
            <s-col span="2"><div>2</div></s-col>
            <s-col span="2"><div>2</div></s-col>
        </s-row>
            `.replace(/^ {8}/gm, "").trim(),
        };
    },
    methods: {
    }
};
</script>
<style lang="scss" scoped>
.s-row {
    margin-bottom: 10px;
    .s-col-content {
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #b6b8bc;
        background: #f7f7f7;
    }
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


