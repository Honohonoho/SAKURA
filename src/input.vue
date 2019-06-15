<template>
    <div class="wrapper" :class="{'error': error}">
        <input type="text" :value="value" :disabled="disabled" :readonly="readonly" :placeholder="placeholder"
            @change="$emit('change', $event.target.value)"
            @input="$emit('input', $event.target.value)"
            @focus="$emit('focus', $event.target.value)"
            @blur="$emit('blur', $event.target.value)">
        <template v-if="error">
            <s-icon class="icon-error" name="error"></s-icon>
            <span class="error-message">{{error}}</span>
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
<style lang="scss" scoped>
@import '../styles/common';

.wrapper {
    font-size: $font-size;
    display: inline-flex;
    align-items: center;
    > input {
        font-size: inherit;
        height: $height;
        border: 1px solid $border-color;
        border-radius: $border-radius;
        padding: 0 8px;
        outline: none;
        &:hover {
            border-color: $border-color-hover;
        }
        &:focus {
            border-color: $border-color-hover;
            box-shadow: inset 0 0 1px $box-shadow-color;
        }
        &[disabled], &[readonly] {
            border-color: #bbb;
            color: #bbb;
            background-color: $disabled-background-color;
            &:focus {
                box-shadow: none;
            }
        }
        &[disabled] {
            cursor: not-allowed;
        }
        &[readonly] {
            cursor: pointer;
        }
    }
    &.error {
        > input {
            border-color: $error-border-color;
        }
    }
    .icon-error {
        fill: $error-color;
        margin-left: .5em;
    }
    .error-message {
        color: $error-color;
        margin-left: .5em;
    }
}
</style>


