<template>
    <div class="row" :style="rowStyle" :class="rowClasses">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'Row',
    props: {
        gutter: {
            type: [Number, String]
        },
        align: {
            type: [Number, String]
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
            let {align} = this
            return [align && `align-${align}`]
        }
    }
}
</script>
<style lang="scss" scoped>
.row {
    display: flex;
    &.align-left {
        justify-content: flex-start;
    }
    &.align-right {
        justify-content: flex-end;
    }
    &.align-center {
        justify-content: center;
    }
}
</style>

