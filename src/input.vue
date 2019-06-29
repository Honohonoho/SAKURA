<template>
    <div class="s-input" :class="{'error': error}">
        <input type="text" :value="value" :disabled="disabled" :readonly="readonly" :placeholder="placeholder"
            @change="$emit('change', $event.target.value)"
            @input="$emit('input', $event.target.value)"
            @focus="$emit('focus', $event.target.value)"
            @blur="$emit('blur', $event.target.value)">
        <template v-if="error">
            <s-icon class="icon-error" name="error"></s-icon>
            <span class="s-input-error-message">{{error}}</span>
        </template>
    </div>
</template>
<script>
import Icon from './icon'
export default {
    name: 's-input',
    components: {
        's-icon': Icon
    },
    props: {
        value: {
            type: String
        },
        placeholder: {
            type: String
        },
        disabled: {
            type: Boolean,
            default: false
        },
        readonly: {
            type: Boolean,
            default: false
        },
        error: {
            type: String
        }
    }
}
</script>
<style lang="scss">
@import '../styles/common';

.s-input {
    font-size: $font-size;
    display: inline-flex;
    align-items: center;
    > input {
        font-size: inherit;
        height: $basic-height;
        color: #000;
        border: 1px solid $input-border-color;
        border-radius: $border-radius;
        padding: 0 8px;
        outline: none;
        transition: $transition;
        &:hover {
            border-color: $input-hover-border-color;
        }
        &:focus {
            border-color: $input-focus-border-color;
            box-shadow: $input-box-shadow;
        }
        &[disabled], &[readonly] {
            color: $input-disabled-color;
            background-color: $input-disabled-background-color;
            border-color: $input-border-color;
            &:focus {
                box-shadow: none;
            }
            &:hover {
                border-color: $input-border-color;
            }
        }
        &[disabled] {
            cursor: not-allowed;
        }
        &[readonly] {
            cursor: pointer;
        }
        &::-webkit-input-placeholder { /* WebKit, Blink, Edge */
            color: $placeholder-color;
        }
        &:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
            color: $placeholder-color;
            opacity: 1;
        }
        &::-moz-placeholder { /* Mozilla Firefox 19+ */
            color: $placeholder-color;
            opacity:  1;
        }
        &:-ms-input-placeholder { /* Internet Explorer 10-11 */
            color: $placeholder-color;
        }
        &::-ms-input-placeholder { /* Microsoft Edge */
            color: $placeholder-color;
        }
        &::placeholder { /* Most modern browsers support this now. */
            color: $placeholder-color;
        }
    }
    &.error {
        > input {
            border-color: $main-error;
            &:focus {
                box-shadow: none;
            }
        }
    }
    .icon-error {
        fill: $main-error;
        margin-left: .5em;
    }
    .s-input-error-message {
        color: $main-error;
        margin-left: .5em;
    }
}
</style>


