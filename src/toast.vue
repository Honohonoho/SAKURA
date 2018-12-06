<template>
    <div class="toast">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'g-toast'
}
</script>
<style lang="scss">
.toast {
    font-size: 14px;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    line-height: 20px;
    height: 40px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    background: rgba(0, 0, 0, 0.75);
    color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
}
</style>

