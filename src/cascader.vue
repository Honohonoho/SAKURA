<template>
    <div class="s-cascader" ref="cascader" v-click-outside="close">
        <div class="s-cascader-trigger" @click="toggle">
            {{selectedResult || '&nbsp;'}}
        </div>
        <div class="s-cascader-popover" v-if="popoverVisible">
            <s-cascader-item
                    :child-data="cascaderData"
                    :selected="selectedChildren"
                    :loadData="loadData"
                    @update:selected="onSelectedChanged"
                    :height="popoverHeight"
            >
            </s-cascader-item>
        </div>
    </div>
</template>

<script>
    import CascaderItem from './cascader-item'
    import clickOutside from './custom_directives';
    export default {
        name: "s-cascader",
        components: {
            's-cascader-item': CascaderItem
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
                type: String
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
                popoverVisible: false
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
            onSelectedChanged(newSelectedItemArray) {
                this.$emit('update:selected', newSelectedItemArray)
                let lastSelectedItem = newSelectedItemArray[newSelectedItemArray.length - 1]
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
                }
                let updateCascaderData = (resData) => {
                    let deepCopy = JSON.parse(JSON.stringify(this.cascaderData))
                    let toUpdate = complex(deepCopy, lastSelectedItem.id)
                    toUpdate.children = resData
                    this.$emit('update:cascaderData', deepCopy)
                }
                if (!lastSelectedItem.isLeaf) {
                    this.loadData && this.loadData(lastSelectedItem, updateCascaderData)
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "common";
    .s-cascader {
        position: relative;
        display: inline-block;
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