<template>
  <div class="s-nav" :class="{'s-nav-vertical': vertical}">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 's-nav',
    provide() {
      return {
        root: this,
        vertical: this.vertical
      }
    },
    props: {
      selected: {
        type: String
      },
      vertical: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        navItems: [],
        namePath: []
      }
    },
    mounted() {
      this.updateChildren()
      this.addChildrenListener()
    },
    updated() {
      this.updateChildren()
    },
    computed: {
    },
    methods: {
      addItem(vm) {
        this.navItems.push(vm)
      },
      updateChildren() {
        this.navItems.forEach(vm => {
          if (this.selected === vm.name) {
            vm.selected = true
          } else {
            vm.selected = false
          }
        })
      },
      addChildrenListener() {
        this.navItems.forEach(vm=> {
          vm.$on('update:selected', (name)=> {
            this.$emit('update:selected', name)
          })
        })
      }
    }
  }
</script>

<style lang="scss">
  @import '../../styles/common';
  .s-nav {
    display: flex;
    border-bottom: 1px solid $border-color;
    user-select: none;
  }
  .s-nav.s-nav-vertical {
    flex-direction: column;
    border: none;
    border-right: 1px solid $border-color;
  }
</style>