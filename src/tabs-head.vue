<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="line" ref="line" v-show="Showline"></div>
        <div class="action-wrapper">
            <slot name="action"></slot>   
        </div>
    </div>
</template>
<script>
export default {
    name: 'g-tabs-head',
    inject: ['eventBus'],
    data(){
        return {
            Showline: false
        }
    },
    mounted() {
        this.eventBus.$on('update:selected', (item, vm)=> {
            this.Showline = true
            let {width, height, top, left} = vm.$el.getBoundingClientRect()
            this.$refs.line.style.width = `${width}px`
            this.$refs.line.style.transform = `translateX(${left}px)`
        })
    }
}
</script>
<style lang="scss" scoped>
$tab-height: 40px;
$blue: blue;
.tabs-head {
    display: flex;
    height: $tab-height;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    border-bottom: 1px solid #ddd;
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
        border-bottom: 1px solid $blue;
        transition: all .3s;
    }
}
</style>