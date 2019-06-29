<template>
    <div class="s-cascader-item" :style="{height: height}">
        <ul class="s-cascader-item-left">
            <li class="label" v-for="item in childData" :key="item.index" @click="onClickLabel(item)"
                :title="item.name">
                <span class="label-name">{{item.name}}</span>
                <span class="icons">
                    <template v-if="item.name === loadingItem.name">
                        <s-icon class="icon icon-loading" name="line-loading"></s-icon>
                    </template>
                    <template v-else>
                        <s-icon class="icon icon-arrow" name="right" v-if="rightArrowVisible(item)"></s-icon>
                    </template>
                </span>
            </li>
        </ul>
        <div class="s-cascader-item-right" v-if="rightCascaderData">
            <s-cascader-item
                    :child-data="rightCascaderData"
                    :selected="selected"
                    :loadData="loadData"
                    :level="level+1"
                    @update:selected="onSelectedChanged"
                    :height="height"
                    :loading-item="loadingItem"
            >
            </s-cascader-item>
        </div>
    </div>
</template>

<script>
    import Icon from '../icon';

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
            },
            loadData: {
                type: Function
            },
            loadingItem: {
                type: Object,
                default: ()=> ({})
            }
        },
        computed: {
            rightCascaderData() {
                if (this.selected && this.selected[this.level]) {
                    let child = this.childData.filter(item => item.name === this.selected[this.level].name)
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
            rightArrowVisible(item) {
                return this.loadData ? !item.isLeaf : item.children
            },
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

<style lang="scss">
@import "../../styles/common";
.s-cascader {
    .s-cascader-item {
        min-height: 100px;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        .s-cascader-item-left {
            height: 100%;
            overflow: auto;
            .label {
                padding: 0.3em 1em;
                white-space: nowrap;
                display: flex;
                align-items: center;
                color: $color;
                cursor: pointer;
                background: $main-background-white;
                &:hover {
                    background: $disable-background-color;
                }
                > .label-name {
                    margin-right: 1em;
                }
                > .icons {
                    margin-left: auto;
                    display: inline-flex;
                    .icon-arrow {
                        transform: scale(.75);
                        color: $main-icon-color-light;
                    }
                    .icon-loading {
                        animation: spin 2s infinite linear;
                    }
                }
            }
        }
        .s-cascader-item-right {
            height: 100%;
            border-left: 1px solid $cascader-border-color;
        }
    }
}
</style>