<template>
    <div class="s-cascader">
        <div class="s-cascader-trigger" @click="popoverVisible = !popoverVisible">
            <slot></slot>
        </div>
        <div class="s-cascader-popover" v-if="popoverVisible">
            <!--<div v-for="item in cascaderData" :key="item.index">-->
                <s-cascader-item :child-data="cascaderData"></s-cascader-item>
            <!--</div>-->
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
    .s-cascader {
        .s-cascader-trigger {
            width: 100px;
            height: 32px;
            border: 1px solid red;
        }
        .s-cascader-popover {
        }
    }
</style>