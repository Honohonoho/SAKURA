<template>
    <div class="wrapper" :class="{'error': error}">
        <input type="text" :value="value" :disabled="disabled" :readonly="readonly"
            @change="$emit('change', $event.target.value)"
            @input="$emit('input', $event.target.value)"
            @focus="$emit('focus', $event.target.value)"
            @blur="$emit('blur', $event.target.value)">
        <template v-if="error">
            <icon class="icon-error" name="error"></icon>
            <span class="error-message">{{error}}</span>
        </template>
    </div>
</template>
<script>
import Icon from './icon'
export default {
    components: {
        icon: Icon
    },
    props: {
        value: {
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
@import 'common';

.wrapper {
    font-size: $font-size;
    margin: 10px;
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
            box-shadow: inset 0 1px 3px $box-shadow-color;
        }
        &[disabled], &[readonly] {
            border-color: #bbb;
            color: #bbb;
            cursor: not-allowed;
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


