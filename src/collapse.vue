<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'g-collapse'
}
</script>
<style lang="scss">
$grey: #ddd;
$border-radius: 4px;
.collapse {
    border: 1px solid $grey;
    border-radius: $border-radius;
}
</style>


