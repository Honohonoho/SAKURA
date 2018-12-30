<template>
    <div class="s-button-group">
        <slot></slot>
    </div>
</template>
<script>
export default {
    mounted() {
        for (let node of this.$el.children) {
            let name = node.nodeName.toLowerCase()
            if(name !== 'button') {
                console.warn(`The child node of <s-button-group> expect be <s-gutton>, but got <${name}>`)
            }
        }
    }
}
</script>
<style lang="scss">
.s-button-group {
    display: inline-flex;
    vertical-align: top;
    > .s-button {
        border-radius: 0;
        margin-left: -1px; // 去除边框重叠
        &:not(:first-child) {
            margin-left: 0;
        }
        &:hover {
            position: relative;
            z-index: 1;
        }
        &:first-child {
            border-top-left-radius: var(--border-radius);
            border-bottom-left-radius: var(--border-radius);
        }
        &:last-child {
            border-top-right-radius: var(--border-radius);
            border-bottom-right-radius: var(--border-radius);
        } 
    }
}
</style>

