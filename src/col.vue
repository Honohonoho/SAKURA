<template>
    <div class="col" :class="[`col-${span}`]">
        <slot>1</slot>
    </div>
</template>
<script>
export default {
    name: 'Col',
    props: {
        span: [Number, String]
    }
}
</script>
<style lang="scss" scoped>
.col {
    height: 100px;
    background: grey;
    width: 50%;
    border: 1px solid red;

    $class: col-;
    // loop through 24 times
    @for $n from 1 through 24 {
        // for each $col-#{n}
        &.#{$class}#{$n} {
            width: ($n / 24) * 100%;
        }
    }
}
</style>