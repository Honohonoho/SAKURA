<template>
  <div id="app" style="padding: 50px;">
    <!--<div>-->
    <!--<div id="test" style="width: 100px;height:100px;border: 1px solid red;position:absolute;top:0;left: 0;">test</div>-->
    <!--</div>-->
    <!--<s-collapse :selected.sync="selectedTab" accordion>-->
    <!--<s-collapse-item title="标题1" name="1">内容1</s-collapse-item>-->
    <!--<s-collapse-item title="标题2" name="2">内容2</s-collapse-item>-->
    <!--<s-collapse-item title="标题3" name="3">内容3</s-collapse-item>-->
    <!--</s-collapse>-->
    <!--{{selectedTab}}-->
    <!-- <p>click触发</p>
    <s-popover>
        <template slot="content">
            <div>长内容123123132aspfjsdfsdklgndlskavklsdjcl;sdjmvklfdnbklvndfk</div>
        </template>
        <template>
            <s-button>top点我</s-button>
        </template>
    </s-popover>
    <s-popover position="bottom">
        <template slot="content" slot-scope="{close}">
            <div>短内容短内容短内容</div>
            <s-button @click="close">关闭</s-button>
        </template>
        <template>
            <s-button>bottom点我</s-button>
        </template>
    </s-popover>
    <s-popover position="left">
        <template slot="content">
            <div>短内容</div>
        </template>
        <template>
            <s-button>left点我</s-button>
        </template>
    </s-popover>
    <s-popover position="right">
        <template slot="content">
            <div>短内容</div>
        </template>
        <template>
            <s-button>right点我</s-button>
        </template>
    </s-popover>
    <div style="margin-top: 20px;">
        <p>hover触发</p>
        <s-popover trigger="hover">
            <template slot="content">
                <div>长内容123123132aspfjsdfsdklgndlskavklsdjcl;sdjmvklfdnbklvndfk</div>
            </template>
            <template>
                <s-button>top hover</s-button>
            </template>
        </s-popover>
        <s-popover position="bottom" trigger="hover">
            <template slot="content">
                <div>短内容</div>
            </template>
            <template>
                <s-button>bottom hover</s-button>
            </template>
        </s-popover>
        <s-popover position="left" trigger="hover">
            <template slot="content">
                <div>短内容</div>
            </template>
            <template>
                <s-button>left hover</s-button>
            </template>
        </s-popover>
        <s-popover position="right" trigger="hover">
            <template slot="content">
                <div>短内容</div>
            </template>
            <template>
                <s-button>right hover</s-button>
            </template>
        </s-popover>
    </div> -->
    <!-- <s-input placeholder="请输入内容"></s-input>
    <s-input readonly value="123"></s-input>
    <s-input disabled value="123"></s-input>
    <s-input value="123"></s-input>
    <s-input value="123" error="123123213"></s-input>
    <s-tabs selected="sport" @update:selected="yyy">
        <s-tabs-head>
            <template slot="action">
                <button>设置</button>
            </template>
            <s-tabs-item name="tech">
                <s-icon name="settings"></s-icon>
                科技
            </s-tabs-item>
            <s-tabs-item name="finance" disabled>财经</s-tabs-item>
            <s-tabs-item name="sport">体育</s-tabs-item>
        </s-tabs-head>
        <s-tabs-body>
            <s-tabs-pane name="tech">tech news</s-tabs-pane>
            <s-tabs-pane name="finance">finance news</s-tabs-pane>
            <s-tabs-pane name="sport">sport news</s-tabs-pane>
        </s-tabs-body>
    </s-tabs> -->
    <!--<s-button @click="showToast1">-->
    <!--top-->
    <!--</s-button>-->
    <!--<s-button @click="showToast2">-->
    <!--middle-->
    <!--</s-button>-->
    <!--<s-button @click="showToast3">-->
    <!--bottom-->
    <!--</s-button>-->
    <!-- <s-layout>
        <s-sider>sider</s-sider>
        <s-layout>
            <s-header>header</s-header>
            <s-content>content</s-content>
            <s-footer>footer</s-footer>
        </s-layout>
    </s-layout> -->
    <!--<s-button icon="settings" :loading="false">设置</s-button>-->
    <!--<s-cascader-->
    <!--:cascader-data="cascaderData"-->
    <!--:selected-children="cascaderSelectedChildren"-->
    <!--@update:cascaderData="onCascaderDataChanged"-->
    <!--@update:selected="onSelectedChanged"-->
    <!--:load-data="loadData"-->
    <!--popover-height="200px"-->
    <!--&gt;-->
    <!--</s-cascader>-->
    <!--<s-slides :selected.sync="slidesSelected" :reverse="true">-->
      <!--<s-slides-item name="1">-->
      <!--<div class="box">1</div>-->
      <!--</s-slides-item>-->
      <!--<s-slides-item name="2">-->
      <!--<div class="box">2</div>-->
      <!--</s-slides-item>-->
      <!--<s-slides-item name="3">-->
      <!--<div class="box">3</div>-->
      <!--</s-slides-item>-->
    <!--</s-slides>-->
    <!--<s-scroll style="width: 400px;height: 400px;">-->
    <!--<p>11111111111111111112312312312321123123123213122321</p>-->
    <!--<p>2</p>-->
    <!--<p>3</p>-->
    <!--<p>4</p>-->
    <!--<p>5</p>-->
    <!--<p>6</p>-->
    <!--<p>7</p>-->
    <!--<p>8</p>-->
    <!--<p>9</p>-->
    <!--<p>10</p>-->
    <!--<p>11</p>-->
    <!--<p>12</p>-->
    <!--<p>13</p>-->
    <!--<p>14</p>-->
    <!--<p>15</p>-->
    <!--<p>16</p>-->
    <!--<p>17</p>-->
    <!--<p>18</p>-->
    <!--<p>19</p>-->
    <!--<p>20</p>-->
    <!--<p>21</p>-->
    <!--<p>22</p>-->
    <!--<p>23</p>-->
    <!--<p>242312321321312312312321321</p>-->
    <!--<p>25</p>-->
    <!--<p>26</p>-->
    <!--<p>27</p>-->
    <!--<p>28</p>-->
    <!--<p>29</p>-->
    <!--<p>30</p>-->
    <!--<p>31</p>-->
    <!--<p>32</p>-->
    <!--<p>33</p>-->
    <!--<p>34</p>-->
    <!--<p>35</p>-->
    <!--<p>36</p>-->
    <!--<p>37</p>-->
    <!--<p>38</p>-->
    <!--<p>39</p>-->
    <!--<p>40</p>-->
    <!--<p>41</p>-->
    <!--<p>42</p>-->
    <!--<p>43</p>-->
    <!--<p>44</p>-->
    <!--<p>45</p>-->
    <!--<p>46</p>-->
    <!--<p>47</p>-->
    <!--<p>48</p>-->
    <!--<p>49</p>-->
    <!--<p>50</p>-->
    <!--<p>51</p>-->
    <!--<p>52</p>-->
    <!--<p>53</p>-->
    <!--<p>54</p>-->
    <!--<p>55</p>-->
    <!--<p>56</p>-->
    <!--<p>57</p>-->
    <!--<p>58</p>-->
    <!--<p>59</p>-->
    <!--<p>60</p>-->
    <!--<p>61</p>-->
    <!--<p>62</p>-->
    <!--<p>63</p>-->
    <!--<p>64</p>-->
    <!--<p>65</p>-->
    <!--<p>66</p>-->
    <!--<p>67</p>-->
    <!--<p>68</p>-->
    <!--<p>69</p>-->
    <!--<p>70</p>-->
    <!--<p>71</p>-->
    <!--<p>72</p>-->
    <!--<p>73</p>-->
    <!--<p>74</p>-->
    <!--<p>75</p>-->
    <!--<p>76</p>-->
    <!--<p>77</p>-->
    <!--<p>78</p>-->
    <!--<p>79</p>-->
    <!--<p>80</p>-->
    <!--<p>81</p>-->
    <!--<p>82</p>-->
    <!--<p>83</p>-->
    <!--<p>84</p>-->
    <!--<p>85</p>-->
    <!--<p>86</p>-->
    <!--<p>87</p>-->
    <!--<p>88</p>-->
    <!--<p>89</p>-->
    <!--<p>90</p>-->
    <!--<p>91</p>-->
    <!--<p>92</p>-->
    <!--<p>93</p>-->
    <!--<p>94</p>-->
    <!--<p>95</p>-->
    <!--<p>96</p>-->
    <!--<p>97</p>-->
    <!--<p>98</p>-->
    <!--<p>99</p>-->
    <!--<p>100</p>-->
    <!--</s-scroll>-->
    <div>
      <!--<s-pager :total-page="1" :current-page="currentPage" :hide-if-one-page="false" @pageChange="onPageChange"></s-pager>-->
      <!--<s-table :height="400" :columns="columns" :data-source="dataSource" :selected-items.sync="selectedItems"-->
        <!--bordered compact :order-by.sync="orderBy" :loading="tableLoading" expend-field="description" checkable-->
        <!--@update:selectedItems="onRowChange" @update:orderBy="changeOrderBY"-->
      <!--&gt;-->
        <!--<template slot-scope="item">-->
          <!--<button @click="edit(item.item)">查看</button>-->
          <!--<button @click="view(item.item)">编辑</button>-->
        <!--</template>-->
      <!--</s-table>-->
      <!--<s-upload></s-upload>-->
      <!--<s-nav :selected.sync="selected" @update:selected="onChange" vertical style="width: 200px">-->
        <!--<s-nav-item name="home">首页</s-nav-item>-->
        <!--<s-sub-nav name="about">-->
          <!--<template slot="title">关于</template>-->
          <!--<s-nav-item name="culture">企业文化</s-nav-item>-->
          <!--<s-nav-item name="team">开发团队</s-nav-item>-->
          <!--<s-sub-nav name="contact">-->
            <!--<template slot="title">联系方式</template>-->
            <!--<s-nav-item name="wechat">微信</s-nav-item>-->
            <!--<s-nav-item name="qq">QQ</s-nav-item>-->
            <!--<s-nav-item name="phone">手机</s-nav-item>-->
          <!--</s-sub-nav>-->
        <!--</s-sub-nav>-->
        <!--<s-nav-item name="hire">招聘</s-nav-item>-->
      <!--</s-nav>-->
      <!--<s-nav :selected.sync="selected">-->
        <!--<s-nav-item name="home">首页</s-nav-item>-->
        <!--<s-sub-nav name="about">-->
          <!--<template slot="title">关于</template>-->
          <!--<s-nav-item name="culture">企业文化</s-nav-item>-->
          <!--<s-nav-item name="team">开发团队</s-nav-item>-->
          <!--<s-sub-nav name="contact">-->
            <!--<template slot="title">联系方式</template>-->
            <!--<s-nav-item name="wechat">微信</s-nav-item>-->
            <!--<s-nav-item name="qq">QQ</s-nav-item>-->
            <!--<s-nav-item name="phone">手机</s-nav-item>-->
          <!--</s-sub-nav>-->
        <!--</s-sub-nav>-->
        <!--<s-nav-item name="hire">招聘</s-nav-item>-->
      <!--</s-nav>-->
      <s-upload accept="image/*" name="file" method="POST"
        action="http://127.0.0.1:3000/upload"
        :parseResponse="handleParseRes"
        :file-list.sync="fileList"
      >
        <s-button type="primary">上传</s-button>
        <template slot="tips">
          <div>只能上传 300kb 以内的 png、jpeg 文件</div>
        </template>
      </s-upload>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import Button from './button/button';
  import Icon from './icon';
  import ButtonGroup from './button/button-group';
  import Input from './input';
  import Row from './grid/row';
  import Layout from './layout/layout';
  import Header from './layout/header';
  import Content from './layout/content';
  import Sider from './layout/sider';
  import Footer from './layout/footer';
  import Toast from './toast';
  import Tabs from './tabs/tabs';
  import Tabshead from './tabs/tabs-head';
  import TabsBody from './tabs/tabs-body';
  import TabsItem from './tabs/tabs-item';
  import TabsPane from './tabs/tabs-pane';
  import Popover from './popover';
  import Collapse from './collapse/collapse';
  import CollapseItem from './collapse/collapse-item';
  // import Cascader from './cascader';
  import plugin from './plugin';
  // import city from './city';
  import Slides from './slides/slides';
  import SlidesItem from './slides/slides-item';
  // import Scroll from './scroll'
  // import Pager from './pager'
  // import Table from './table/table'
  import Nav from './nav/nav'
  import NavItem from './nav/nav-item'
  import SubNav from './nav/sub-nav'
  import Upload from './upload/upload';
  Vue.use(plugin);

  // function ajax(parent_id = 0) {
  //     return new Promise((resolve, reject) => {
  //         setTimeout(() => {
  //             let result = city.filter((item) => {
  //                 return item.parent_id === parent_id
  //             });
  //             result.forEach(node => {
  //                 // node.isLeaf = true / false
  //                 let childrenOfNode = city.filter(item => {
  //                     return item.parent_id === node.id
  //                 });
  //                 if (childrenOfNode.length > 0) {
  //                     node.isLeaf = false // 没有children
  //                 } else {
  //                     node.isLeaf = true
  //                 }
  //             })
  //             resolve(result)
  //         }, 1500)
  //     })
  // }

  export default {
    name: "app",
    components: {
      's-slides': Slides,
      's-slides-item': SlidesItem,
      's-button': Button,
      // 's-icon': Icon,
      // 's-button-group': ButtonGroup,
      // 's-input': Input,
      // 's-row': Row,
      // 's-layout': Layout,
      // 's-header': Header,
      // 's-content': Content,
      // 's-sider': Sider,
      // 's-footer': Footer,
      // 's-toast': Toast,
      // 's-tabs': Tabs,
      // 's-tabs-head': Tabshead,
      // 's-tabs-body': TabsBody,
      // 's-tabs-item': TabsItem,
      // 's-tabs-pane': TabsPane,
      // 's-popover': Popover,
      // 's-collapse': Collapse,
      // 's-collapse-item': CollapseItem,
      // 's-cascader': Cascader
      // 's-scroll': Scroll
      // 's-pager': Pager
      // 's-table': Table
      's-nav' : Nav,
      's-nav-item': NavItem,
      's-sub-nav': SubNav,
      's-upload': Upload
    },
    data() {
      return {
        // loading1: false,
        // loading2: true,
        // loading3: false,
        // message: 'hi',
        // selectedTab: ['2'],
        // cascaderSelectedChildren: [], //级联选择器每级选中的记录都保存在这
        // cascaderData: [],
        slidesSelected: '1',
        // currentPage: 1
        // dataSource: [
        //   {id: 1, name: '张三', records: 90, description: 'xxxxxxxxxx'},
        //   {id: 2, name: '李四', records: 87, description: 'xxxxxxxxxx'},
        //   {id: 3, name: '小明', records: 90},
        //   {id: 4, name: '狗蛋', records: 60},
        //   {id: 5, name: '张三', records: 90},
        //   {id: 6, name: '李四', records: 87},
        //   {id: 7, name: '小明', records: 90},
        //   {id: 8, name: '狗蛋', records: 60},
        //   {id: 9, name: '张三', records: 90},
        //   {id: 10, name: '李四', records: 87},
        //   {id: 11, name: '小明', records: 90},
        //   {id: 12, name: '狗蛋', records: 60},
        //   {id: 13, name: '张三', records: 90},
        //   {id: 14, name: '李四', records: 87},
        //   {id: 15, name: '小明', records: 90},
        //   {id: 16, name: '狗蛋', records: 60}
        // ],
        // orderBy: {
        //   name: true,
        //   records: 'decrease'
        // },
        // selectedItems: [],
        // columns: [
        //   {text: '姓名', field: 'name', width: 100},
        //   {text: '分数', field: 'records'}
        // ],
        // tableLoading: false
        selected: 'home',
        fileList: []
      }
    },
    created() {
      // ajax(0).then(res => {
      //     this.cascaderData = res;
      // })
      // setTimeout(()=>{
      //     this.selected = '2'
      // }, 2000)
    },
    mounted() {
      // let test = document.querySelector('#test')
      // let startPosition
      // let endPosition
      // let translateX = 0
      // let translateY = 0
      // let isMoving = false
      // test.addEventListener('mousedown', (e) => {
      //     isMoving = true
      //     let {screenX, screenY} = e
      //     startPosition = {x:screenX, y:screenY}
      // })
      // test.addEventListener('slectstart', (e)=> {
      //     e.preventDefault()
      // })
      // document.addEventListener('mousemove', (e) => {
      //     if (!isMoving) { return }
      //     let {screenX, screenY} = e
      //     endPosition = {x:screenX, y:screenY}
      //     let delta = {x: endPosition.x - startPosition.x, y: endPosition.y - startPosition.y}
      //     // translateX = parseInt(translateX) + delta.x
      //     translateY = parseInt(translateY) + delta.y
      //     startPosition = endPosition
      //     test.style.transform = `translate(0px, ${parseInt(translateY) + delta.y}px)`
      // })
      // document.addEventListener('mouseup', (e) => {
      //     isMoving = false
      // })
    },
    watch: {
      selected(newValue) {
        console.log('newValue:',newValue);
      }
    },
    methods: {
      onChange (selected) {
        console.log(selected);
      },
      handleParseRes (res) {
        console.log(res)
        let obj = JSON.parse(res)
        let url = `http://127.0.0.1:3000/preview/${obj.id}`
        return url
      }
      // onRowChange(newData) {
      //   this.selectedItems = newData
      // },
      // changeOrderBY(orderBY) {
      //   console.log(orderBY);
      //   this.tableLoading = true
      //   setTimeout(()=> {
      //     this.tableLoading = false
      //   }, 2000)
      //   // this.orderBy = orderBY
      // },
      // edit(item) {
      //   console.log(item)
      // },
      // view(item) {
      //   console.log(item)
      // }
      // onPageChange(page) {
      //     if(page >=1 || page <= this.totalPage) {
      //         this.currentPage = page
      //     }
      // }
      // onSelectedChanged(itemName) {
      //     this.slidesSelected = itemName
      // },
      // loadData(node, updateData) {
      //     let id = node.id;
      //     ajax(id).then(res => {
      //         updateData(res);
      //     })
      // },
      // onSelectedChanged(newSelectedItemArray) {
      //     this.cascaderSelectedChildren = newSelectedItemArray
      //     let newSelectedItemId = newSelectedItemArray[newSelectedItemArray.length - 1].id;
      //     ajax(newSelectedItemId).then(res => {
      //         let lastLevelSelected = this.cascaderSelectedChildren.filter(item => {
      //             return item.id === this.cascaderSelectedChildren[this.cascaderSelectedChildren.length - 1].id
      //         });
      //         this.$set(lastLevelSelected[0], 'children', res);
      //     })
      // },
      // onCascaderDataChanged(newSource) {
      //     this.cascaderData = newSource
      // },
      // yyy() {
      //
      // },
      // showToast1() {
      //     this.$toast('段落段落段落段落段落', {
      //         position: 'top',
      //         enableHtml: false,
      //         closeButton: {
      //             text: '重置',
      //             callback() {
      //                 console.log('reset successfully')
      //             }
      //         },
      //         autoClose: 1
      //     })
      // },
      // showToast2() {
      //     this.$toast('段落段落段落段落段落', {
      //         position: 'middle',
      //         enableHtml: false,
      //         closeButton: {
      //             text: '重置',
      //             callback() {
      //                 console.log('reset successfully')
      //             }
      //         },
      //         autoClose: false
      //     })
      // },
      // showToast3() {
      //     this.$toast('段落段落段落段落段落', {
      //         position: 'bottom',
      //         enableHtml: false,
      //         closeButton: {
      //             text: '重置',
      //             callback() {
      //                 console.log('reset successfully')
      //             }
      //         },
      //         autoClose: false
      //     })
      // }
    }
  };
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ul, ol, li {
    list-style: noe;
    padding: 0;
    margin: 0;
  }
  .s-slides-view {
    width: 150px;
    height: 100px;
  }
  .s-slides {
    display: inline-block;
  }
  .s-slides-item{
    width: 150px;
    height: 100px;
    background: red;
  }
</style>
