<template>
    <div class="sider">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 's-sider'    
}
</script>

<style lang="scss" scoped>
.sider {
    width: 200px;
    background: #3ba0e9;
    color: #fff;
}
</style>