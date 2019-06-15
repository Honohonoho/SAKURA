<template>
    <div class="s-row" :style="rowStyle" :class="rowClasses">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 's-row',
    props: {
        gutter: {
            type: [Number, String]
        },
        justify: {
            type: String
        }
    },
    mounted() {
        this.$children.forEach((vm) => {
            vm.gutter = this.gutter
        })
    },
    computed: {
        rowStyle() {
            let {gutter} = this
            return {
                marginLeft: -gutter/2 + 'px',
                marginRight: -gutter/2 + 'px'
            }
        },
        rowClasses() {
            let {justify} = this
            return [justify && `justify-${justify}`]
        }
    }
}
</script>
<style lang="scss" scoped>
.s-row {
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    &.justify-left {
        justify-content: flex-start;
    }
    &.justify-right {
        justify-content: flex-end;
    }
    &.justify-center {
        justify-content: center;
    }
    &.justify-space-between {
        justify-content: space-between;
    }
    &.justify-space-around {
        justify-content: space-around;
    }
}
</style>

