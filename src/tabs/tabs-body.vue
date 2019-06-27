<template>
    <div class="s-tabs-body">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 's-tabs-body',
    inject: ['eventBus'],
}
</script>
<style lang="scss">

</style>