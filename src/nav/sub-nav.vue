<template>
  <div class="s-sub-nav">
    <span @click="onItemClick">
      <slot name="title"></slot>
    </span>
    <div class="s-sub-nav-popover" v-show="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 's-sub-nav',
    data() {
      return {
        open: false
      }
    },
    methods: {
      onItemClick() {
        this.open = !this.open
      }
    }
  }
</script>

<style lang="scss">
  @import '../../styles/common';
  .s-sub-nav {
    position: relative;
    > span {
      display: block;
      vertical-align: top;
      padding: 10px 5px;
      cursor: pointer;
    }
    &-popover {
      position: absolute;
      top: 100%;
      left: 0;
      border: 1px solid $border-color;
      white-space: nowrap;
    }
  }
  .s-sub-nav .s-sub-nav .s-sub-nav-popover {
    top: 0;
    left: 100%;
  }
</style>