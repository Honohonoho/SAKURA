<template>
    <div class="cascader-item">
        <div class="cascader-item-left">
            <div class="label" v-for="item in childData" :key="item.index" @click="leftSelected = item">
                {{item.name}}
            </div>
        </div>
        <div class="cascader-item-right" v-if="rightCascaderData">
            <s-cascader-item :child-data="rightCascaderData"></s-cascader-item>
        </div>
    </div>
</template>

<script>
    export default {
        name: "s-cascader-item",
        props: {
            childData: {
                type: Array
            }
        },
        computed: {
            rightCascaderData() {
                if (this.leftSelected && this.leftSelected.children){
                    return this.leftSelected.children
                }else {
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
    .cascader-item {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        .cascader-item-left {
            border: 1px solid red;
        }
        .cascader-item-right {

        }
    }
</style>