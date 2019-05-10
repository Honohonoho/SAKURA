<template>
    <div class="cascader-item">
        {{childData.name}}
        <s-cascader-item
            v-if="childData.children"
            v-for="item in childData.children"
            :key="item.index"
            :child-data="item"
        ></s-cascader-item>
    </div>
</template>

<script>
    export default {
        name: "s-cascader-item",
        props: {
            childData: {
                type: Object
            }
        }
    }
</script>

<style scoped>
    .cascader-item {
        border: 1px solid red;
        margin: 10px;
    }
</style>