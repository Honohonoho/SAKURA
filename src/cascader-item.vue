<template>
    <div class="cascader-item" :style="{height: height}">
        <div class="cascader-item-left">
            <div class="label" v-for="item in childData" :key="item.index" @click="leftSelected = item">
                {{item.name}}
                <s-icon class="icon label-arrow" name="right" v-if="item.children"></s-icon>
            </div>
        </div>
        <div class="cascader-item-right" v-if="rightCascaderData">
            <s-cascader-item :child-data="rightCascaderData" :height="height"></s-cascader-item>
        </div>
    </div>
</template>

<script>
    import Icon from './icon';

    export default {
        name: "s-cascader-item",
        components: {
            's-icon': Icon
        },
        props: {
            childData: {
                type: Array
            },
            height: {
                type: String
            }
        },
        computed: {
            rightCascaderData() {
                if (this.leftSelected && this.leftSelected.children) {
                    return this.leftSelected.children
                } else {
                    return null
                }
            }
        },
        data() {
            return {
                leftSelected: null
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "common";

    .cascader-item {
        height: 100px;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        .cascader-item-left {
            height: 100%;
            padding: 0.3em 0;
            .label {
                padding: 0.3em 1em;
                white-space: nowrap;
                display: flex;
                align-items: center;
                color: $main-font-color-dark;
                .label-arrow {
                    margin-left: 5px;
                    transform: scale(.75);
                    color: $main-icon-color-light;
                }
            }
        }
        .cascader-item-right {
            height: 100%;
            border-left: 1px solid $cascader-border-color;
        }
    }
</style>