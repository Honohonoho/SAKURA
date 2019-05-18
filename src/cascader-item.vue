<template>
    <div class="cascader-item" :style="{height: height}">
        <div class="cascader-item-left">
            <div class="label" v-for="item in childData" :key="item.index" @click="onClickLabel(item)">
                {{item.name}}
                <s-icon class="icon label-arrow" name="right" v-if="item.children"></s-icon>
            </div>
        </div>
        <div class="cascader-item-right" v-if="rightCascaderData">
            <s-cascader-item
                :child-data="rightCascaderData"
                :selected="selected"
                :level="level+1"
                @update:selected="onSelectedChanged"
                :height="height"
            >
            </s-cascader-item>
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
            selected: {
                type: Array,
                default: () => {return []}
            },
            level: {
                type: Number,
                default: 0
            },
            height: {
                type: String
            }
        },
        computed: {
            rightCascaderData() {
                if (this.selected && this.selected[this.level]) {
                    let child = this.childData.filter(item => item.name === this.selected[this.level].name)
                    // console.log(child);
                    if (child && child[0].children && child[0].children.length > 0) {
                        return child[0].children
                    } else {
                        return null
                    }
                }
            }
        },
        data() {
            return {}
        },
        methods: {
            onClickLabel(item) {
                // 别直接改props ！！！
                // this.$set(this.selected, this.level, item)

                let newItem = JSON.parse(JSON.stringify(this.selected))
                newItem[this.level] = item
                newItem.splice(this.level + 1)
                this.$emit('update:selected', newItem)
            },
            onSelectedChanged(newSelectedItem) {
                this.$emit('update:selected', newSelectedItem)
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "common";
    .cascader-item {
        min-height: 100px;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        .cascader-item-left {
            height: 100%;
            overflow: auto;
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