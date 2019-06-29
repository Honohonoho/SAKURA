<template>
    <div>
        <!--<h3 class="section">基础用法</h3>-->
        <!--<p>-->
            <!--基本的标签页，适用于大部分场景。在 <code>s-tabs</code> 上监听 <code>tab-click</code> 事件，-->
            <!--可以获得 tab 选中时的对应的tab name。-->
        <!--</p>-->
        <!--<div class="demo-wrapper">-->
            <!--<s-cascader-->
                <!--:cascader-data="cascaderData1"-->
                <!--:selected-children="selectedItemArray1"-->
                <!--@childrenDataUpdate="onChildrenDataUpdate1"-->
                <!--@update:selected="onSelectedChanged1"-->
                <!--:load-data="loadData1"-->
                <!--popover-height="200px"-->
            <!--&gt;-->
            <!--</s-cascader>-->
            <!--<div class="code-wrapper" v-highlight>-->
                <!--<pre><code class="html">{{code1}}</code></pre>-->
            <!--</div>-->
        <!--</div>-->

        <h3 class="section">动态加载</h3>
        <p>
            当选中某一级时，动态加载该级下的选项。
        </p>
        <div class="demo-wrapper">
            <s-cascader
                    :cascader-data="cascaderData2"
                    :selected-children="selectedItemArray2"
                    @childrenDataUpdate="onChildrenDataUpdate2"
                    @update:selected="onSelectedChanged2"
                    :load-data="loadData2"
                    popover-height="200px"
            >
            </s-cascader>
            <div class="code-wrapper" v-highlight>
                <pre><code class="html">{{code2}}</code></pre>
            </div>
            <p>源数据格式要求如下：</p>
            <div class="code-wrapper" v-highlight>
                <pre><code class="html">{{code3}}</code></pre>
            </div>
        </div>

        <h3 class="section">属性 Attributes</h3>
        <table class="table">
            <thead>
            <tr>
                <th>参数</th>
                <th>说明</th>
                <th style="min-width:110px;">类型</th>
                <th>可选值</th>
                <th>默认值</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>cascader-data</td>
                <td>必填项，级联选择器的源数据</td>
                <td>array</td>
                <td>-</td>
                <td>-</td>
            </tr>
            <tr>
                <td>selected-children</td>
                <td>每一级选中的数据值的集合，按层级次序排序</td>
                <td>array</td>
                <td>-</td>
                <td>空数组</td>
            </tr>
            <tr>
                <td>popover-height</td>
                <td>弹出选择框的高度</td>
                <td>string</td>
                <td>-</td>
                <td>200px</td>
            </tr>
            </tbody>
        </table>
        <h3 class="section">事件 Event</h3>
        <table class="table">
            <thead>
            <tr>
                <th>事件名称</th>
                <th>说明</th>
                <th>回调参数</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>childrenDataUpdate</td>
                <td>被点击节点的子节点有数据时触发</td>
                <td>(childrenData: array)，子节点将要渲染的数据</td>
            </tr>
            <tr>
                <td>update:selected</td>
                <td>点击节点时触发，返回当前选择节点的层级结构</td>
                <td>(SelectedItems: array)，已选择的所有节点name</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    import Cascader from '../../../src/cascader/cascader';
    import city from '../public/city';

    function getSource(parent_id = 0) {
        let result = city.filter((item) => {
            return item.parent_id === parent_id
        });
        result.forEach(node => {
            // node.isLeaf = true / false
            let childrenOfNode = city.filter(item => {
                return item.parent_id === node.id
            });
            if (childrenOfNode.length > 0) {
                node.isLeaf = false // 没有children
            } else {
                node.isLeaf = true
            }
        })
        return result
    }
    function ajax(parent_id = 0) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let result = city.filter((item) => {
                    return item.parent_id === parent_id
                });
                result.forEach(node => {
                    // node.isLeaf = true / false
                    let childrenOfNode = city.filter(item => {
                        return item.parent_id === node.id
                    });
                    if (childrenOfNode.length > 0) {
                        node.isLeaf = false // 没有children
                    } else {
                        node.isLeaf = true
                    }
                })
                resolve(result)
            }, 1500)
        })
    }

    export default {
        components: {
            's-cascader': Cascader
        },
        created() {
            ajax(0).then(res => {
                this.cascaderData2 = res;
            })
            this.cascaderData1 = getSource(0)
        },
        data() {
            return {
                selectedItemArray1: [], //级联选择器每级选中的记录都保存在这
                cascaderData1: [],
                selectedItemArray2: [], //级联选择器每级选中的记录都保存在这
                cascaderData2: [],
                text1: '<s-tabs-item>',
                code1: `
                <s-cascader
                :cascader-data="cascaderData2"
                :selected-children="selectedItemArray2"
                @childrenDataUpdate="onChildrenDataUpdate2"
                @update:selected="onSelectedChanged2"
                popover-height="200px"
            >
            </s-cascader>
            <script>
            export default {
                data () {
                    return {
                        selectedItemArray1: [], //级联选择器每级选中的记录都保存在这
                        cascaderData1: [], // 异步获取的初始化数据放在这
                    }
                },
                methods: {
                    onSelectedChanged1(newSelectedItemArray) {
                        console.log(newSelectedItemArray);
                        this.selectedItemArray2 = newSelectedItemArray
                        let newSelectedItemId = newSelectedItemArray[newSelectedItemArray.length - 1].id;
                        ajax(newSelectedItemId).then(res => {
                            let lastLevelSelected = this.selectedItemArray2.filter(item => {
                                return item.id === this.selectedItemArray2[this.selectedItemArray2.length - 1].id
                            });
                            this.$set(lastLevelSelected[0], 'children', res);
                        })
                    },
                    onChildrenDataUpdate1(childrenData) {
                        console.log(childrenData);
                    },
                }
            }
            <\/script>
            `.replace(/^ {8}/gm, "").trim(),
                code2: `
                <s-cascader
                :cascader-data="cascaderData2"
                :selected-children="selectedItemArray2"
                @childrenDataUpdate="onChildrenDataUpdate2"
                @update:selected="onSelectedChanged2"
                :load-data="loadData2"
                popover-height="200px"
            >
            </s-cascader>
            <script>
            function ajax(parent_id = 0) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        let result = city.filter((item) => {
                            return item.parent_id === parent_id
                        });
                        result.forEach(node => {
                            // node.isLeaf = true / false
                            let childrenOfNode = city.filter(item => {
                                return item.parent_id === node.id
                            });
                            if (childrenOfNode.length > 0) {
                                node.isLeaf = false // 没有children
                            } else {
                                node.isLeaf = true
                            }
                        })
                        resolve(result)
                    }, 1500)
                })
            }
            export default {
                created () {
                    ajax(0).then(res => {
                        this.cascaderData2 = res;
                    })
                },
                data () {
                    return {
                        selectedItemArray2: [], //级联选择器每级选中的记录都保存在这
                        cascaderData2: [], // 异步获取的初始化数据放在这
                    }
                },
                methods: {
                    loadData2(node, updateData) {
                        let id = node.id;
                        ajax(id).then(res => {
                            updateData(res); // 每次异步获得数据后都要调用UpdateData回调
                        })
                    },
                    onSelectedChanged2(newSelectedItemArray) {
                        this.selectedItemArray2 = newSelectedItemArray
                        let newSelectedItemId = newSelectedItemArray[newSelectedItemArray.length - 1].id;
                        ajax(newSelectedItemId).then(res => {
                            let lastLevelSelected = this.selectedItemArray2.filter(item => {
                                return item.id === this.selectedItemArray2[this.selectedItemArray2.length - 1].id
                            });
                            this.$set(lastLevelSelected[0], 'children', res);
                        })
                    },
                    onChildrenDataUpdate2(childrenData) {
                        console.log(childrenData);
                    },
                }
            }
            <\/script>
            `.replace(/^ {8}/gm, "").trim(),
                code3: `
        // 数据为一维数组，每项为一个 object， 没有嵌套
            {
                "id": 1, // 每一项的唯一id
                "name": "北京",
                "parent_id": 0, // 父节点的id， 根节点为0
            },
            {
                "id": 5,
                "name": "河北",
                "parent_id": 0,
            },
            {
                "id": 125,
                "name": "石家庄",
                "parent_id": 5, // 说明 id: 5 是该项的父节点
            },
            {
                "id": 535,
                "name": "桥西",
                "parent_id": 125, // 说明 id: 125 是该项的父节点
            },
            {
                "id": 536,
                "name": "新华",
                "parent_id": 125,
            }
            `.replace(/^ {8}/gm, "").trim(),
            }
        },
        methods: {
            loadData1(node, updateData) {
                let id = node.id;
                let data = getSource(id)
                updateData(data)
            },
            loadData2(node, updateData) {
                let id = node.id;
                ajax(id).then(res => {
                    updateData(res);
                })
            },
            onSelectedChanged1(newSelectedItemArray) {
                console.log (newSelectedItemArray);
                this.selectedItemArray1 = newSelectedItemArray
                let newSelectedItemId = newSelectedItemArray[newSelectedItemArray.length - 1].id;
                // ajax(newSelectedItemId).then(res => {
                //     let lastLevelSelected = this.selectedItemArray1.filter(item => {
                //         return item.id === this.selectedItemArray1[this.selectedItemArray2.length - 1].id
                //     });
                //     this.$set(lastLevelSelected[0], 'children', res);
                // })
            },
            onChildrenDataUpdate1(childrenData) {
                console.log(childrenData);
                // this.cascaderData = newSource
            },
            onSelectedChanged2(newSelectedItemArray) {
                console.log(newSelectedItemArray);
                this.selectedItemArray2 = newSelectedItemArray
                let newSelectedItemId = newSelectedItemArray[newSelectedItemArray.length - 1].id;
                ajax(newSelectedItemId).then(res => {
                    let lastLevelSelected = this.selectedItemArray2.filter(item => {
                        return item.id === this.selectedItemArray2[this.selectedItemArray2.length - 1].id
                    });
                    this.$set(lastLevelSelected[0], 'children', res);
                })
            },
            onChildrenDataUpdate2(childrenData) {
                console.log(childrenData);
                // this.cascaderData = newSource
            },
        }
    }
</script>
<style lang="scss">
    .code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
        color: #476582;
        padding: 0.25rem 0.5rem;
        margin: 0;
        font-size: 0.85em;
        background-color: rgba(27,31,35,0.05);
        border-radius: 3px;
    }
</style>
