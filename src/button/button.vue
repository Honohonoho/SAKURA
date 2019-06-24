<template>
    <button class="s-button" :class="{[`icon-${iconPosition}`]: true, [`s-button_${type}`]: true}"
        @click="$emit('click')">
        <s-icon class="icon" v-if="icon && !loading" :name="icon"></s-icon>
        <!--loading 的 name 默认为 dot-loading-->
        <s-icon class="icon loading" v-if="loading" name="dot-loading"></s-icon>
        <div class="button-content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
import Icon from '../icon'
export default {
    name: 's-button',
    components: {
        's-icon': Icon
    },
    props: {
        icon: {},
        type: {
            type: String,
            default: 'default'
        },
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

<style lang="scss">
@import "../../styles/common";

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
.s-button {
    font-size: $font-size;
    height: $button-height;
    padding: 0 1em;
    border-radius: $button-border-radius;
    border: 1px solid $button-border-color;
    background: $button-background;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: top;
    color: $button-font-color;
    transition: color .2s linear,background-color .2s linear,border .2s linear,box-shadow .2s linear;
    &_default {
        &:hover {
            color: $lightly-primary;
            border-color: $lightly-primary;
        }
        &:focus {
            outline: none;
            box-shadow: $button-box-shadow;
        }
        &:active {
            color: $deep-primary;
            border-color: $deep-primary;
        }
    }
    &_primary {
        color: #ffffff;
        background-color: $main-primary;
        border-color: $main-primary;
        &:hover {
            background-color: $lightly-primary;
            border-color: $lightly-primary;
        }
        &:focus {
            outline: none;
            box-shadow: $button-box-shadow;
        }
        &:active {
            background-color: $deep-primary;
            border-color: $deep-primary;
        }
    }
    &_info {
        color: #ffffff;
        background-color: $main-info;
        border-color: $main-info;
        &:hover {
            background-color: $lightly-info;
            border-color: $lightly-info;
        }
        &:focus {
            outline: none;
            box-shadow: $button-box-shadow;
        }
        &:active {
            background-color: $deep-info;
            border-color: $deep-info;
        }
    }
    &_success {
        color: #ffffff;
        background-color: $main-success;
        border-color: $main-success;
        &:hover {
            background-color: $lightly-success;
            border-color: $lightly-success;
        }
        &:focus {
            outline: none;
            box-shadow: $button-box-shadow;
        }
        &:active {
            background-color: $deep-success;
            border-color: $deep-success;
        }
    }
    &_waring {
        color: #ffffff;
        background-color: $main-waring;
        border-color: $main-waring;
        &:hover {
            background-color: $lightly-waring;
            border-color: $lightly-waring;
        }
        &:focus {
            outline: none;
            box-shadow: $button-box-shadow;
        }
        &:active {
            background-color: $deep-waring;
            border-color: $deep-waring;
        }
    }
    &_error {
        color: #ffffff;
        background-color: $main-error;
        border-color: $main-error;
        &:hover {
            background-color: $lightly-error;
            border-color: $lightly-error;
        }
        &:focus {
            outline: none;
            box-shadow: $button-box-shadow;
        }
        &:active {
            background-color: $deep-error;
            border-color: $deep-error;
        }
    }
    &[disabled] {
        cursor: not-allowed;
        background: $button-active-background;
    }
    &[disabled]:hover {
        border-color: $border-color;
    }
    &[disabled]:active {
        background-color:$button-active-background;
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



