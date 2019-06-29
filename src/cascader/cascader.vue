<template>
    <div class="s-cascader" ref="cascader" v-click-outside="close">
        <!--<div class="s-cascader-trigger" @click="toggle">-->
            <!--{{selectedResult || '&nbsp'}}-->
        <!--</div>-->
        <s-input class="s-cascader-trigger" :value="selectedResult" placeholder="请选择" @focus="toggle"></s-input>
        <div class="s-cascader-popover" v-if="popoverVisible">
            <s-cascader-item
                    :child-data="cascaderData"
                    :selected="selectedChildren"
                    :loadData="loadData"
                    @update:selected="onSelectedChanged"
                    :height="popoverHeight"
                    :loading-item="loadingItem"
            >
            </s-cascader-item>
        </div>
    </div>
</template>

<script>
    import CascaderItem from './cascader-item'
    import clickOutside from '../custom_directives';
    import Input from '../input'

    export default {
        name: "s-cascader",
        components: {
            's-cascader-item': CascaderItem,
            's-input': Input
        },
        directives: {
            clickOutside
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
                type: String,
                default: () => {return '200px'}
            },
            loadData: {
                type: Function
            }
        },
        computed: {
            selectedResult() {
                return this.selectedChildren.map(item => item.name).join('/')
            }
        },
        data() {
            return {
                popoverVisible: false,
                loadingItem: {}
            }
        },
        methods: {
            open() {
                this.popoverVisible = true;
            },
            close() {
                this.popoverVisible = false
            },
            toggle() {
                if (this.popoverVisible === true) {
                    this.close()
                } else {
                    this.open()
                }
            },
            onSelectedChanged: function (newSelectedItemArray) {
                this.$emit('update:selected', newSelectedItemArray);
                let lastSelectedItem = newSelectedItemArray[newSelectedItemArray.length - 1];
                let simplest = (children, id) => {
                    return children.filter(item => item.id === id)
                };
                let complex = (children, id) => {
                    let noChildren = []
                    let hasChildren = []
                    children.forEach(item => {
                        if (item.children) {
                            hasChildren.push(item)
                        } else {
                            noChildren.push(item)
                        }
                    })
                    let found = simplest(noChildren, id)
                    if (found) {
                        return found
                    } else {
                        return hasChildren.length > 0 ? complex(hasChildren, id) : undefined
                    }
                };
                let updateCascaderData = (resData) => {
                    this.loadingItem = {}
                    let deepCopy = JSON.parse(JSON.stringify(this.cascaderData))
                    let toUpdate = complex(deepCopy, lastSelectedItem.id)
                    toUpdate.children = resData
                    this.$emit('childrenDataUpdate', resData)
                };
                if (!lastSelectedItem.isLeaf && this.loadData) {
                    this.loadData(lastSelectedItem, updateCascaderData);
                    this.loadingItem = lastSelectedItem;
                }
            }
        }
    }
</script>

<style lang="scss">
    @import "../../styles/common";
    .s-cascader {
        position: relative;
        display: inline-block;
        .s-cascader-trigger {
            input {
                cursor: pointer;
            }
        }
        .s-cascader-popover {
            position: absolute;
            left: 0;
            top: 100%;
            z-index: 1;
            margin-top: 5px;
            background: $main-background-white;
            border-radius: $cascader-border-radius;
            box-shadow: $cascader-box-shadow;
            overflow: hidden;
        }
    }
</style>