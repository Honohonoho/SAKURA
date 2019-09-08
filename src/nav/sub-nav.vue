<template>
  <div class="s-sub-nav" :class="{selected, vertical}" v-click-outside="close">
    <span @click="onItemClick" class="s-sub-nav-label">
      <slot name="title"></slot>
      <span class="s-sub-nav-icon" :class="{vertical}">
        <s-icon name="left" :class="{'active': open}"></s-icon>
      </span>
    </span>
    <template v-if="vertical">
      <transition name="x"
        @enter="enter"
        @after-enter="afterEnter"
        @enter-cancelled="enterCancelled"
        @before-leave="beforeLeave"
        @leave="leave"
        @after-leave="afterLeave"
        @leave-cancelled="leaveCancelled"
      >
        <div class="s-sub-nav-popover" v-show="open" :class="{vertical}">
          <slot></slot>
        </div>
      </transition>
    </template>
    <template v-else>
      <div class="s-sub-nav-popover" v-show="open" :class="{vertical}">
        <slot></slot>
      </div>
    </template>
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
    inject: ['root', 'vertical'],
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
      },
      enter(el, done) {
        let {height} = el.getBoundingClientRect()
        el.style.height = '0px'
        el.getBoundingClientRect()
        el.style.height = height + 'px'
        el.addEventListener('transitionend', ()=> {
          done()
        })
      },
      afterEnter(el) {
        el.style.height = 'auto'
      },
      enterCancelled(el) {
      },
      beforeLeave(el) {
      },
      leave(el, done) {
        let {height} = el.getBoundingClientRect()
        el.style.height = height + 'px'
        el.getBoundingClientRect()
        el.style.height = '0px'
        el.addEventListener('transitionend', ()=> {
          done()
        })
      },
      afterLeave(el) {
        el.style.height = 'auto'
      },
      // leaveCancelled 只用于 v-show 中
      leaveCancelled(el) {
      }
    }
  }
</script>

<style lang="scss">
  @import '../../styles/common';
  .s-sub-nav {
    position: relative;
    &.vertical .s-sub-nav-icon {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      margin-top: 2px;
      .s-icon {
        transition: transform .3s;
      }
      &.vertical {
        transform: rotate(270deg);
        .s-icon.active {
          transform: rotate(-180deg);
        }
      }
    }
    &:not(.vertical) {
      &.selected {
        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          border-bottom: 2px solid $main-background-color;
          transition: border-color .3s;
        }
      }
    }
    &-label {
      display: flex;
      justify-content: space-between;
      align-items: center;
      vertical-align: top;
      padding: 20px;
      cursor: pointer;
      transition: color .3s;
      &:hover {
        color: $main-color;
      }
    }
    &-icon {
      display: none;
    }
    &-popover {
      background: inherit;
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
        &.vertical {
          transform: rotate(270deg);
          .s-icon.active {
            transform: rotate(-180deg);
          }
        }
      }
      &.vertical {
        position: static;
        border-radius: 0;
        border: none;
        box-shadow: none;
        transition: height .3s;
        overflow: hidden;
        margin-top: 0;
        >.s-nav-item {
          padding-left: 40px;
        }
        >.s-sub-nav {
          padding-left: 20px;
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