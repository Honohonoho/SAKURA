<template>
    <div class="header">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 's-header'
}
</script>

<style lang="scss" scoped>
.header {
    height: 100px;
    background: #7dbcea;
    color: #fff;
}
</style>