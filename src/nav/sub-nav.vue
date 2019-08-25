<template>
  <div class="s-sub-nav">
    <span>
      <slot name="title"></slot>
    </span>
    <div class="s-sub-nav-popover">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 's-sub-nav'
  }
</script>

<style lang="scss">
  @import '../../styles/common';
  .s-sub-nav {
    position: relative;
    padding: 10px 5px;
    &-popover {
      position: absolute;
      top: 100%;
      left: 0;
      border: 1px solid $border-color;
      white-space: nowrap;
    }
  }
</style>