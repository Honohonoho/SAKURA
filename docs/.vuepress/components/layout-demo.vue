<template>
    <div>
        <h2>使用方法</h2>
        <div>
            <p><span class="code" v-text="text1"></span>：外层容器。当子元素中包含 <span class="code" v-text="text4"></span> 时，全部子元素会水平左右排列，否则会垂直上下排列。</p>
            <p><span class="code" v-text="text2"></span>：顶栏容器。</p>
            <p><span class="code" v-text="text3"></span>：主要内容区域容器。</p>
            <p><span class="code" v-text="text4"></span>：侧边栏容器。</p>
            <p><span class="code" v-text="text5"></span>：底栏容器。</p>
        </div>
        <h3 class="section">上中下页面布局</h3>
        <div class="demo-wrapper">
            <s-layout>
                <s-header>header</s-header>
                <s-content>content</s-content>
                <s-footer>footer</s-footer>
            </s-layout>
            <pre><code>{{code1}}</code></pre>
        </div>

        <h3 class="section">有侧边栏的上中下页面布局</h3>
        <div class="demo-wrapper">
            <p>第一种</p>
            <s-layout>
                <s-sider>side</s-sider>
                <s-layout>
                    <s-header>header</s-header>
                    <s-content>content</s-content>
                    <s-footer>footer</s-footer>
                </s-layout>
            </s-layout>
            <p>第二种</p>
            <s-layout>
                <s-header>header</s-header>
                <s-layout>
                    <s-sider>side</s-sider>
                    <s-layout>
                        <s-content>content</s-content>
                        <s-footer>footer</s-footer>
                    </s-layout>
                </s-layout>
            </s-layout>
            <pre><code>{{code2}}</code></pre>
        </div>

        <h3 class="section">属性 Attributes</h3>
        <p>布局容器组件默认没有样式，用户可以用
            <code>.s-layout</code>, <code>.s-sider</code>, <code>.s-header</code>, <code>.s-content</code>, <code>.s-footer</code> 类添加样式
        </p>
    </div>
</template>
<script>
import Layout from "../../../src/layout";
import Header from "../../../src/header";
import Content from "../../../src/content";
import Sider from "../../../src/sider";
import Footer from "../../../src/footer";

export default {
    components: {
        's-layout': Layout,
        's-header': Header,
        's-content': Content,
        's-sider': Sider,
        's-footer': Footer
    },
    data() {
        return {
            text1: '<s-layout></s-layout>',
            text2: '<s-header></s-header>',
            text3: '<s-content></s-content>',
            text4: '<s-sider></s-sider>',
            text5: '<s-footer></s-footer>',
            code1:
            `<s-layout>
            <s-header>header</s-header>
            <s-content>content</s-content>
            <s-footer>footer</s-footer>
        </s-layout>
            `.replace(/^ {8}/gm, "").trim(),
            code2: 
            `<s-layout>
            <s-sider>side</s-sider>
            <s-layout>
                <s-header>header</s-header>
                <s-content>content</s-content>
                <s-footer>footer</s-footer>
            </s-layout>
        </s-layout>

        <s-layout>
            <s-header>header</s-header>
            <s-layout>
                <s-sider>side</s-sider>
                <s-layout>
                    <s-content>content</s-content>
                    <s-footer>footer</s-footer>
                </s-layout>
            </s-layout>
        </s-layout>
            `.replace(/^ {8}/gm, "").trim(),
           
        };
    },
    methods: {
    }
};
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
.s-layout {
    .s-header {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        background: #7dbcea;
        color: #fff;
    }
    .s-content {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 200px;
        background: rgba(16, 142, 233, 1);
        color: #fff;
    }
    .s-sider {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        background: #3ba0e9;
        color: #fff;
    }
    .s-footer {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        background: #7dbcea;
        color: #fff;
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


