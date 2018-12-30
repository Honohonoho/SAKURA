<template>
    <div>
        <s-button>默认按钮</s-button>
        <s-button icon="settings">带图标按钮</s-button>
        <s-button :loading="true">loading状态按钮</s-button>
        <s-button disabled>禁用按钮</s-button>
        <pre><code>{{code}}</code></pre>
    </div>
</template>
<script>
import Button from "../../../src/button";
export default {
    components: {
        's-button': Button
    },
    data() {
        return {
            code: `
                <s-button>默认按钮</s-button>
                <s-button icon="settings">带图标按钮</s-button>
                <s-button :loading="true">loading状态按钮</s-button>
                <s-button disabled>禁用按钮</s-button>
            `.replace(/\t+| +/g, '').trim()
        }
    }
}
</script>

