<template>
    <div>
        <g-button>默认按钮</g-button>
        <g-button icon="settings">带图标按钮</g-button>
        <g-button :loading="true">loading状态按钮</g-button>
        <g-button disabled>禁用按钮</g-button>
        <pre>
            <code>{{code}}</code>
        </pre>
    </div>
</template>
<script>
import Button from "../../../src/button";
export default {
    components: {
        'g-button': Button
    },
    data() {
        return {
            code: `
                <g-button>默认按钮</g-button>
                <g-button icon="settings">带图标按钮</g-button>
                <g-button :loading="true">loading状态按钮</g-button>
                <g-button disabled>禁用按钮</g-button>
            `
        }
    }
}
</script>

