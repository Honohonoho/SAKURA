<template>
    <div class="s-cascader">
        <div class="s-cascader-trigger" @click="popoverVisible = !popoverVisible">
            <slot></slot>
        </div>
        <div class="s-cascader-popover" v-if="popoverVisible">
            <s-cascader-item
                :child-data="cascaderData"
                :height="popoverHeight"
            >
            </s-cascader-item>
        </div>
    </div>
</template>

<script>
    import CascaderItem from './cascader-item'
    export default {
        name: "s-cascader",
        components: {
            's-cascader-item': CascaderItem
        },
        props: {
            cascaderData: {
                type: Array
            },
            popoverHeight: {
                type: String
            }
        },
        data() {
            return {
                popoverVisible: false
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "common";

    .s-cascader {
        position: relative;
        .s-cascader-trigger {
            width: 100px;
            height: 32px;
            border-radius: $cascader-border-radius;
            border: 1px solid $input-border-color;
        }
        .s-cascader-popover {
            position: absolute;
            left: 0;
            top: 100%;
            background: $main-background-white;
            border-radius: $cascader-border-radius;
            box-shadow: $cascader-box-shadow;
            overflow: hidden;
        }
    }
</style>