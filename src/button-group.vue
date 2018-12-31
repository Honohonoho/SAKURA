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
@import 'common';

.s-button-group {
    display: inline-flex;
    vertical-align: top;
    > .s-button {
        border-radius: 0;
        margin-left: 0px;
        &:not(:first-child) {
            margin-left: -1px; // 去除边框重叠
        }
        &:hover {
            position: relative;
            z-index: 1;
        }
        &:first-child {
            border-top-left-radius: $border-radius;
            border-bottom-left-radius: $border-radius;
        }
        &:last-child {
            border-top-right-radius: $border-radius;
            border-bottom-right-radius: $border-radius;
        } 
    }
}
</style>

