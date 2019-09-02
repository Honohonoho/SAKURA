<template>
  <div class="s-nav-item" :class="{active: selected}"
    @click="onItemClick"
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
    inject: ['root'],
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
        this.$emit('add:selected', this.name)
      },
    }
  }
</script>

<style lang="scss">
  @import '../../styles/common';
  .s-nav-item {
    padding: 10px 10px;
    cursor: pointer;
    position: relative;
    &:hover {
      color: $main-color;
    }
    &.active {
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        border-bottom: 2px solid $main-background-color;
      }
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