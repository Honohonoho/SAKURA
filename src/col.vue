<template>
    <div class="col" :class="colClasses" :style="colStyle">
        <slot></slot>
    </div>
</template>
<script>
let validator = (value) => {
    let keys = Object.keys(value)
    let valid = true
    let validArray = ['span', 'offset']
    keys.forEach(key => {
        if(!validArray.includes(key)) {
            valid = false
        }
    })
    return valid
}
export default {
    name: 'Col',
    props: {
        span: {
            type: [Number, String] 
        },
        offset: {
            type: [Number, String]
        },
        pad: {
            type: Object,
            validator,
        },
        narrowPc: {
            type: Object,
            validator,
        },
        pc: {
            type: Object,
            validator,
        },
        widePc: {
            type: Object,
            validator,
        }
    },
    data() {
        return {
            gutter: 0
        }
    },
    computed: {
        colClasses() {
            let {span, offset, pad, narrowPc, pc, widePc} = this
            return [
                span && `col-${span}`,
                offset && `offset-${offset}`,
                ...(pad ? [`col-pad-${pad.span}`] : []),
                ...(narrowPc ? [`col-narrow-pc-${narrowPc.span}`] : []),
                ...(pc ? [`col-pc-${pc.span}`] : []),
                ...(widePc ? [`col-wide-pc-${widePc.span}`] : [])
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
    // pad
    @media (min-width: 577px) {
        $class: col-pad-;
        @for $n from 1 through 24 {
            &.#{$class}#{$n} {
                width: ($n / 24) * 100%;
            }
        }
        $class: offset-pad-;
        @for $n from 1 through 24 {
            &.#{$class}#{$n} {
                margin-left : ($n / 24) * 100%;
            }
        }
    }
    // 窄PC
    @media (min-width: 769px) {
        $class: col-narrow-pc-;
        @for $n from 1 through 24 {
            &.#{$class}#{$n} {
                width: ($n / 24) * 100%;
            }
        }
        $class: offset-narrow-pc-;
        @for $n from 1 through 24 {
            &.#{$class}#{$n} {
                margin-left : ($n / 24) * 100%;
            }
        }
    }
    // 一般pc
    @media (min-width: 993px) {
        $class: col-pc-;
        @for $n from 1 through 24 {
            &.#{$class}#{$n} {
                width: ($n / 24) * 100%;
            }
        }
        $class: offset-pc-;
        @for $n from 1 through 24 {
            &.#{$class}#{$n} {
                margin-left : ($n / 24) * 100%;
            }
        }
    }
    // 宽pc
    @media (min-width: 1201px) {
        $class: col-wide-pc-;
        @for $n from 1 through 24 {
            &.#{$class}#{$n} {
                width: ($n / 24) * 100%;
            }
        }
        $class: offset-wide-pc-;
        @for $n from 1 through 24 {
            &.#{$class}#{$n} {
                margin-left : ($n / 24) * 100%;
            }
        }
    }
}
</style>