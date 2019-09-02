<template>
  <div class="s-sub-nav" :class="{selected}" v-click-outside="close">
    <span @click="onItemClick">
      <slot name="title"></slot>
    </span>
    <div class="s-sub-nav-popover" v-show="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import clickOutside from '../custom_directives';
  export default {
    name: 's-sub-nav',
    props: {
      name: {
        type: String,
        required: true
      }
    },
    directives: {
      clickOutside
    },
    inject: ['root'],
    data() {
      return {
        open: false
      }
    },
    computed: {
      selected () {
        return this.root.namePath.indexOf(this.name) >= 0
      }
    },
    methods: {
      onItemClick() {
        this.open = !this.open
      },
      close () {
        this.open = false
      },
      updateNamePath() {
        this.root.namePath.unshift(this.name)
        if (this.$parent.updateNamePath) {
          this.$parent.updateNamePath()
        } else {
            // this.root.namePath = []
        }
      }
    }
  }
</script>

<style lang="scss">
  @import '../../styles/common';
  .s-sub-nav {
    position: relative;
    &.selected {
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        border-bottom: 2px solid $main-background-color;
      }
    }
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