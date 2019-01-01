<template>
    <div>
        <h2>使用方法</h2>

        <h3 class="section">基础用法</h3>
        <div class="demo-wrapper">
            <s-input placeholder="请输入内容"></s-input>
        </div>

        <h3 class="section">图标按钮</h3>
        <div class="demo-wrapper">
            <s-button icon="settings">设置</s-button>
            <s-button icon="download">下载</s-button>
            <s-button icon="left">上一页</s-button>
            <s-button icon="right">下一页</s-button>
            <p>使用 <code>iconPosition</code> 定位图标位置</p>
            <s-button icon="settings" iconPosition="right">设置</s-button>
            <pre><code>{{code2}}</code></pre>
        </div>

        <h3 class="section">Attributes</h3>
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
                    <td>icon</td>
                    <td>图标</td>
                    <td>string</td>
                    <td>settings / download / left / right</td>
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
import Input from "../../../src/input";

export default {
    components: {
        's-input': Input
    },
    data() {
        return {
            code1:
            `<s-button>默认按钮</s-button>
            `.replace(/^ {8}/gm, "").trim(),
            code2: 
            `<s-button icon="settings">设置</s-button>
            <s-button icon="download">下载</s-button>
            <s-button icon="left">上一页</s-button>
            <s-button icon="right">下一页</s-button>
            <s-button icon="settings" iconPosition="right">设置</s-button>
            `.replace(/^ {8}/gm, "").trim(),
            code3:
            `<s-button-group>
                <s-button icon="left">上一页</s-button>
                <s-button icon="download">下载</s-button>
                <s-button icon="right">下一页</s-button>
            </s-button-group>
            `.replace(/^ {8}/gm, "").trim(),
            code4:
            `<s-button :loading="true">默认按钮</s-button>
            `.replace(/^ {8}/gm, "").trim(),
            code5:
            `<s-button disabled>默认按钮</s-button>
            `.replace(/^ {8}/gm, "").trim()
        };
    }
};
</script>
<style lang="scss" scoped>
.s-button {
    margin-right: 10px;
}
.s-button-group {
    .s-button {
        margin-right: 0;
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


