<template>
    <div class="s-cascader">
        <div class="trigger">
            <slot></slot>
        </div>
        <div>
            <div v-for="item in cascaderData" :key="item.index">
                <s-cascader-item :child-data="item"></s-cascader-item>
            </div>
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
        }
    }
</script>

<style scoped lang="scss">
    .s-cascader {

    }
</style>