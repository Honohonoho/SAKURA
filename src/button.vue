<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]: true}"
        @click="$emit('click')">
        <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
        <g-icon class="icon loading" v-if="loading" name="loading"></g-icon>
        <div class="button-content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
import Icon from './icon'
export default {
    components: {
        'g-icon': Icon
    },
    props: {
        icon: {},
        loading: {
            type: Boolean,
            default: false
        },
        iconPosition: {
            type: String,
            default: 'left',
            // 属性检查
            validator(value) {
                return value === 'left' || value === 'right'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import "common";

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
.g-button {
    font-size: $font-size;
    height: $button-height;
    padding: 0 1em;
    border-radius: $border-radius;
    border: 1px solid $border-color;
    background: $button-background;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: top;
    &:hover {
        border-color: $border-color-hover;
    }
    &:active {
        background-color: $button-active-background;
    }
    &:focus {
        outline: none;
    }
    &[disabled] {
        cursor: not-allowed;
    }
    &[disabled]:hover {
        border-color: $border-color;
    }
    &[disabled]:active {
        background-color: $button-background;
    }
    > .icon {
        order: 1;
        margin-right: .3em;
        margin-left: 0;
    }
    > .button-content {
        order: 2;
    }
    &.icon-right {
        > .icon {
            order: 2;
            margin-right: 0;
            margin-left: .3em;
        }
        > .button-content {
            order: 1;
        }
    }
    .loading {
        animation: spin 1.5s infinite linear;
    }
}
</style>



