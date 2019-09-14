<template>
  <div class="s-nav-item" :class="{active: selected, vertical}"
    @click="onItemClick" :data-name="name"
  >
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 's-nav-item',
    props: {
      name: {
        type: String,
        required: true
      }
    },
    inject: ['root', 'vertical'],
    data () {
      return {
        selected: false
      }
    },
    created() {
      this.root.addItem(this)
    },
    methods: {
      onItemClick () {
        this.root.namePath = []
        this.$parent.updateNamePath && this.$parent.updateNamePath()
        this.$emit('update:selected', this.name)
      },
    }
  }
</script>

<style lang="scss">
  @import '../../styles/common';
  .s-nav-item {
    padding: 20px;
    cursor: pointer;
    position: relative;
    transition: color .3s, background-color .3s;
    &.active.vertical {
      background: $nav-item-active-background;
      color: $main-color;
    }
    &:not(.vertical) {
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        border-bottom: 2px solid transparent;
        transition: border-color .3s;
      }
      &.active {
        &::after {
          border-bottom-color: $main-background-color;
        }
      }
    }
    &:hover {
      color: $main-color;
    }
  }
  .s-sub-nav .s-nav-item {
    &.active {
      color: $main-color;
      background: $nav-item-active-background;
      &::after {
        display: none;
      }
    }
  }
</style>