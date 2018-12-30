<template>
    <div class="footer">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 's-footer'
}
</script>

<style lang="scss" scoped>
.footer {
    height: 50px;
    background: #7dbcea;
    color: #fff;
}
</style>