<template>
    <div class="wrapper" :class="{'error': error}">
        <input type="text" :value="value" :disabled="disabled" :readonly="readonly">
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
    $fontSize: 14px;
    $height: 32px;
    $borderColor: #999;
    $borderRadius: 4px;
    $color: #999;
    $borderColorHover: #666;
    $boxShadowColor: rgba(0, 0, 0, .5);
    $errorBorderColor: #f1453d;
    $errorColor: #f1453d;
    .wrapper {
        font-size: $fontSize;
        margin: 10px;
        display: inline-flex;
        align-items: center;
        > input {
            font-size: inherit;
            height: $height;
            border: 1px solid $borderColor;
            border-radius: $borderRadius;
            padding: 0 8px;
            outline: none;
            &:hover {
                border-color: $borderColorHover;
            }
            &:focus {
                box-shadow: inset 0 1px 3px $boxShadowColor;
            }
            &[disabled], &[readonly] {
                border-color: #bbb;
                color: #bbb;
                cursor: not-allowed;
            }
        }
        &.error {
            > input {
                border-color: $errorBorderColor;
            }
        }
        .icon-error {
            fill: $errorColor;
            margin-left: .5em;
        }
        .error-message {
            color: $errorColor;
            margin-left: .5em;
        }
    }
</style>


