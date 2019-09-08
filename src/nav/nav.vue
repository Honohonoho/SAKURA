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
        type: Array,
        default: () => []
      },
      multiple: {
        type: Boolean,
        default: false
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
    user-select: none;
  }
  .s-nav.s-nav-vertical {
    flex-direction: column;
  }
</style>