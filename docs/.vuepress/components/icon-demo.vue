<template>
    <div>
        <h3 class="section">使用方法</h3>
        <p>指定 <code>name</code> 属性为想要的icon名即可。</p>
        <div class="demo-wrapper">
            <s-icon name="settings"></s-icon>
            <s-icon name="search"></s-icon>
            <s-icon name="download"></s-icon>
            <div class="code-wrapper" v-highlight>
                <pre><code class="html">{{code1}}</code></pre>
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
                <td>name</td>
                <td>图标名称</td>
                <td>string</td>
                <td>settings / search ...</td>
                <td>-</td>
            </tr>
            </tbody>
        </table>

        <h3 class="section">所有内置图标</h3>
        <p>非正式版本目前内置了数量较少的图标，具体见下。</p>
        <div class="icon-wrapper">
            <div class="icon-item">
                <s-icon name="settings"></s-icon>
                <p class="icon-name">settings</p>
            </div>
            <div class="icon-item">
                <s-icon name="search"></s-icon>
                <p class="icon-name">search</p>
            </div>
            <div class="icon-item">
                <s-icon name="download"></s-icon>
                <p class="icon-name">download</p>
            </div>
            <div class="icon-item">
                <s-icon name="thumb-up"></s-icon>
                <p class="icon-name">thumb-up</p>
            </div>
            <div class="icon-item">
                <s-icon name="line-loading"></s-icon>
                <p class="icon-name">line-loading</p>
            </div>
            <div class="icon-item">
                <s-icon name="dot-loading"></s-icon>
                <p class="icon-name">dot-loading</p>
            </div>
            <div class="icon-item">
                <s-icon name="left"></s-icon>
                <p class="icon-name">left</p>
            </div>
            <div class="icon-item">
                <s-icon name="right"></s-icon>
                <p class="icon-name">right</p>
            </div>
            <div class="icon-item">
                <s-icon name="info"></s-icon>
                <p class="icon-name">info</p>
            </div>
            <div class="icon-item">
                <s-icon name="error"></s-icon>
                <p class="icon-name">error</p>
            </div>
        </div>
    </div>
</template>

<script>
    import Icon from "../../../src/icon";
    export default {
        name: "icon-demo",
        components: {
            "s-icon": Icon,
        },
        data() {
            return {
                code1:
                    `<s-icon name="settings"></s-icon>
            <s-icon name="search"></s-icon>
            <s-icon name="download"></s-icon>
                    `.replace(/^ {8}/gm, "").trim(),
            };
        },
    }
</script>

<style scoped lang="scss">
.s-icon {
    color: #000;
    width: 2em;
    height: 2em;
}
.demo-wrapper {
    .s-icon {
        margin-right: 30px;
    }
}
.icon-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    .icon-item {
        margin-right: 30px;
        margin-bottom: 30px;
        display: flex;
        flex-shrink: 0;
        flex-basis: 15%;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        .icon-name{
            margin: 10px 0 0 0;
        }
    }
}
</style>