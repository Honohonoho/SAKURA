<template>
    <div class="s-tabs-head">
        <slot></slot>
        <div class="line" ref="line"></div>
        <div class="action-wrapper">
            <slot name="action"></slot>   
        </div>
    </div>
</template>
<script>
export default {
    name: 's-tabs-head',
    inject: ['eventBus'],
    data(){
        return {
        }
    },
    mounted() {
        let tabsHeadLeft = this.$el.getBoundingClientRect().left
        this.eventBus.$on('update:selected', (item, vm)=> {
            let {width, height, top, left} = vm.$el.getBoundingClientRect()
            this.$refs.line.style.width = `${width}px`
            this.$refs.line.style.left = `${left - tabsHeadLeft}px`
        })
    }
}
</script>
<style lang="scss">
@import '../../styles/common';

.s-tabs-head {
    display: flex;
    height: $tab-height;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    border-bottom: 1px solid $border-color;
    > .action-wrapper {
        margin-left: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 1em;
    }
    > .line {
        position: absolute;
        bottom: -1px;
        border-bottom: 1px solid $deep-main-color;
        transition: $transition;
    }
}
</style>