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
    props: {
      name: {
        type: String,
        required: true
      }
    },
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
      padding: 10px 10px;
      cursor: pointer;
      &:hover {
        color: $main-color;
      }
    }
    &-popover {
      background: #ffffff;
      position: absolute;
      top: 100%;
      left: 0;
      border: 1px solid $border-color;
      white-space: nowrap;
      margin-top: 4px;
      border-radius: $border-radius;
      box-shadow: $nav-popover-box-shadow;
      min-width: 8em;
    }
  }
  .s-sub-nav .s-sub-nav .s-sub-nav-popover {
    top: 0;
    left: 100%;
    margin-left: 4px;
  }
</style>