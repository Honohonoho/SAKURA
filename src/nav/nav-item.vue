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
    data () {
      return {
        selected: false
      }
    },
    methods: {
      onItemClick () {
        this.$emit('add:selected', this.name)
      }
    }
  }
</script>

<style lang="scss">
  @import '../../styles/common';
  .s-nav-item {
    padding: 10px 5px;
    cursor: pointer;
    &.active {
      background: $main-background-color;
    }
  }
</style>