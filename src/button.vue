<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]: true}">
        <g-icon class="icon" v-if="icon" :name="icon"></g-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
export default {
    props: {
        icon: {},
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
    .g-button {
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px  solid var(--border-color);
        background: var(--button-bg);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: top;
        &:hover {
            border-color: var(--border-color-hover);
        }
        &:active {
            background-color: var(--button-active-bg);
        }
        &:focus {
            outline: none;
        }
        > .icon {
            order: 1;
            margin-right: .3em;
            margin-left: 0;
        }
        > .content {
            order: 2;
        }
        &.icon-right {
            > .icon {
                order: 2;
                margin-right: 0;
                margin-left: .3em;
            }
            > .content {
                order: 1;
            }
        }
    }
</style>



