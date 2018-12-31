<template>
    <div>
        <s-tabs selected="tech" @update:selected="">
            <s-tabs-head>
                <template slot="action">
                    <button>设置</button>
                </template>   
                <s-tabs-item name="tech">科技</s-tabs-item>
                <s-tabs-item name="finance" disabled>财经</s-tabs-item>
                <s-tabs-item name="sport">体育</s-tabs-item>
            </s-tabs-head>
            <s-tabs-body>
                <s-tabs-pane name="tech">tech news</s-tabs-pane>
                <s-tabs-pane name="finance">finance news</s-tabs-pane>
                <s-tabs-pane name="sport">sport news</s-tabs-pane>
            </s-tabs-body>
        </s-tabs>
        <pre><code>{{code}}</code></pre>
    </div>
</template>
<script>
import Tabs from "../../../src/tabs";
import Tabshead from '../../../src/tabs-head';
import TabsBody from '../../../src/tabs-body';
import TabsItem from '../../../src/tabs-item';
import TabsPane from '../../../src/tabs-pane';

export default {
    components: {
        's-tabs': Tabs,
        's-tabs-head': Tabshead,
        's-tabs-body': TabsBody,
        's-tabs-item': TabsItem,
        's-tabs-pane': TabsPane
    },
    data() {
        return {
            code: `
            <s-tabs selected="sport" @update:selected="">
                <s-tabs-head>
                    <template slot="action">
                        <button>设置</button>
                    </template>   
                    <s-tabs-item name="tech">科技</s-tabs-item>
                    <s-tabs-item name="finance" disabled>财经</s-tabs-item>
                    <s-tabs-item name="sport">体育</s-tabs-item>
                </s-tabs-head>
                <s-tabs-body>
                    <s-tabs-pane name="tech">tech news</s-tabs-pane>
                    <s-tabs-pane name="finance">finance news</s-tabs-pane>
                    <s-tabs-pane name="sport">sport news</s-tabs-pane>
                </s-tabs-body>
            </s-tabs>
            `.replace(/\t+| +/g, '').trim(),
        }
    }
}
</script>

