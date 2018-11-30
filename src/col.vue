<template>
    <div class="col" :class="colClasses" :style="colStyle">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'Col',
    props: {
        span: {
            type: [Number, String] 
        },
        offset: {
            type: [Number, String]
        }
    },
    data() {
        return {
            gutter: 0
        }
    },
    computed: {
        colClasses() {
            let {span, offset} = this
            return [
                span && `col-${span}`,
                offset && `offset-${offset}`
            ]
        },
        colStyle() {
            let {gutter} = this
            return {
                paddingLeft: gutter/2 + 'px',
                paddingRight: gutter/2 + 'px'
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.col {
    height: 100px;
    background: grey;
    width: 50%;
    border: 1px solid red;
    padding: 0 10px;
    $class: col-;
    // loop through 24 times
    @for $n from 1 through 24 {
        // for each $col-#{n}
        &.#{$class}#{$n} {
            width: ($n / 24) * 100%;
        }
    }
    // 空隙
    $class: offset-;
    @for $n from 1 through 24 {
        &.#{$class}#{$n} {
            margin-left : ($n / 24) * 100%;
        }
    }
}
</style>