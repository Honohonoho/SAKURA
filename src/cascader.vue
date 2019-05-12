<template>
    <div class="s-cascader">
        <div class="s-cascader-trigger" @click="popoverVisible = !popoverVisible">
            {{this.selectedResult || '&nbsp;'}}
        </div>
        <div class="s-cascader-popover" v-if="popoverVisible">
            <s-cascader-item
                :child-data="cascaderData"
                :selected="selectedChildren"
                @update:selected="onSelectedChanged"
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
            selectedChildren: {
                type: Array,
                default: () => {return []}
            },
            popoverHeight: {
                type: String
            }
        },
        computed: {
            selectedResult() {
                return this.selectedChildren.map(item => item.name).join('/')
            }
        },
        data() {
            return {
                popoverVisible: false
            }
        },
        methods: {
            onSelectedChanged(newSelectedItem) {
                this.$emit('update:selected', newSelectedItem)
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "common";
    .s-cascader {
        position: relative;
        .s-cascader-trigger {
            min-width: 10em;
            height: 32px;
            display: inline-flex;
            align-items: center;
            padding: 0 1em;
            border-radius: $cascader-border-radius;
            border: 1px solid $input-border-color;
        }
        .s-cascader-popover {
            position: absolute;
            left: 0;
            top: 100%;
            margin-top: 5px;
            background: $main-background-white;
            border-radius: $cascader-border-radius;
            box-shadow: $cascader-box-shadow;
            overflow: hidden;
        }
    }
</style>