<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="action-wrapper">
            <slot name="action"></slot>   
        </div>
    </div>
</template>
<script>
export default {
    name: 'g-tabs-head',
    inject: ['eventBus'],
    created() {
        //this.$emit('update:selected', 'head')
    }
}
</script>
<style lang="scss" scoped>
$tab-height: 40px;
.tabs-head {
    display: flex;
    height: $tab-height;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid red;
    > .action-wrapper {
        margin-left: auto;
    }
}
</style>