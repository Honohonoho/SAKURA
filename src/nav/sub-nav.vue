<template>
  <div class="s-sub-nav" :class="{selected}" v-click-outside="close">
    <span @click="onItemClick" class="s-sub-nav-label">
      <slot name="title"></slot>
      <span class="s-sub-nav-icon">
        <s-icon name="left" :class="{'active': open}"></s-icon>
      </span>
    </span>
    <div class="s-sub-nav-popover" v-show="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import Icon from '../icon'
  import clickOutside from '../custom_directives';
  export default {
    name: 's-sub-nav',
    components: {
      's-icon': Icon
    },
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
    &-label {
      display: flex;
      justify-content: space-between;
      align-items: center;
      vertical-align: top;
      padding: 10px 10px;
      cursor: pointer;
      &:hover {
        color: $main-color;
      }
    }
    &-icon {
      display: none;
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
      .s-sub-nav.selected {
        &::after {
          display: none;
        }
      }
      .s-sub-nav-icon {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        margin-top: 2px;
        .s-icon {
          transition: transform .3s;
        }
        .s-icon.active {
          transform: rotate(180deg);
        }
      }
    }
  }
  .s-sub-nav .s-sub-nav .s-sub-nav-popover {
    top: 0;
    left: 100%;
    margin-left: 4px;
  }
</style>