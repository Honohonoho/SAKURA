<template>
  <div class="s-nav">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 's-nav',
    props: {
      selected: {
        type: Array,
        default: () => []
      },
      multiple: {
        type: Boolean,
        default: false
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
      navItems() {
        return this.$children.filter(vm => vm.$options.name === 's-nav-item')
      }
    },
    methods: {
      updateChildren() {
        this.navItems.forEach(vm => {
          if (this.selected.indexOf(vm.name) >= 0) {
            vm.selected = true
          } else {
            vm.selected = false
          }
        })
      },
      addChildrenListener() {
        this.navItems.forEach(vm=> {
          vm.$on('add:selected', (name)=> {
            if (this.multiple) {
              if (this.selected.indexOf(name) < 0) {
                let copySelected = JSON.parse(JSON.stringify(this.selected))
                copySelected.push(name)
                this.$emit('update:selected', copySelected)
              }
            } else {
              this.$emit('update:selected', [name])
            }
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
    border: 1px solid $border-color;
  }
</style>