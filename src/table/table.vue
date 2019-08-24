<!--
需求：有边框， 紧凑/松散， 单双行颜色， 选中数据（单选，全选), 排序，固定表头。展开
-->
<template>
  <div class="s-table-wrapper" ref="wrapper">
    <div :style="{height, overflow: 'auto'}" ref="tableWrapper">
      <table class="s-table" ref="table"
         :class="{'s-table-bordered': bordered, 's-table-compact': compact, 's-table-striped': striped}"
      >
        <thead>
          <tr>
            <th v-if="expendField" :style="{width: '50px'}" class="s-table-center"></th>
            <th :style="{width: '50px'}" v-if="dataIndexVisible">#</th>
            <th :style="{width: '50px'}" v-if="checkable" class="s-table-center">
              <input type="checkbox" ref="checkAll"
                 :checked="isAllChecked"
                 @change="onSelectAllItems"
              />
            </th>
            <th :style="{width: column.width + 'px'}" v-for="column in columns" :key="column.field">
              <div class="s-table-head">
                <span class="field-name">{{column.text}}</span>
                <span class="s-table-sort-icons" v-if="column.field in orderBy"
                  @click="changeOrder(column.field)"
                >
                  <s-icon name="ascending" :class="{active: orderBy[column.field] === 'ascending'}" />
                  <s-icon name="descending" :class="{active: orderBy[column.field] === 'descending'}" />
                </span>
              </div>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(item,index) in dataSource">
            <tr :key="item.id">
              <td :style="{width: '50px'}" v-if="expendField"
                class="s-table-center" :class="{'s-table-row-expended': inExpendIds(item.id)}"
              >
                <s-icon name="right" class="s-table-expend-icon"
                  @click="onRowExpend(item.id)"
                >
                </s-icon>
              </td>
              <td :style="{width: '50px'}" v-if="checkable" class="s-table-center">
                <input type="checkbox"
                   :checked="selectedItems.filter((i) => i.id === item.id).length > 0"
                   @change="onSelectItem(item, index, $event)"
                />
              </td>
              <td :style="{width: '50px'}" v-if="dataIndexVisible">{{index+1}}</td>
              <template v-for="column in columns">
                <td :style="{width: column.width + 'px'}" :key="column.field">{{item[column.field]}}</td>
              </template>
              <td>
                <slot :item="item"></slot>
              </td>
            </tr>
            <tr v-if="inExpendIds(item.id)" :key="`${item.id}-expend`">
              <td :colspan="columns.length + expendedCellColSpan">
                {{item[expendField] || '暂无数据'}}
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
    <div class="s-table-loading" v-if="loading">
      <s-icon name="dot-loading"></s-icon>
    </div>
  </div>
</template>

<script>
  import Icon from '../icon'

  export default {
    name: "s-table",
    components: {
      's-icon': Icon
    },
    props: {
      columns: {
        type: Array,
        required: true
      },
      selectedItems: {
        type: Array,
        default: () => []
      },
      dataSource: {
        type: Array,
        required: true,
        validator(array) {
          if (array.filter(item => item.id === undefined).length > 0) {
            throw new Error('Each data item in dataSource must have a unique id to identify !')
          } else {
            return true
          }
        }
      },
      dataIndexVisible: {
        type: Boolean,
        default: false
      },
      bordered: {
        type: Boolean,
        default: false
      },
      compact: {
        type: Boolean,
        default: false
      },
      striped: {
        type: Boolean,
        default: true
      },
      orderBy: {
        type: Object,
        default: () => ({})
      },
      loading: {
        type: Boolean
      },
      height: {
        type: Number
      },
      expendField: {
        type: String
      },
      checkable: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        expendIds: []
      }
    },
    computed: {
      isAllChecked() {
        const dataSource = this.dataSource.map(item => item.id).sort()
        const selectedItems = this.selectedItems.map(item => item.id).sort()
        if (dataSource.length !== selectedItems.length) {
          return false
        }
        let isEqual = true
        for (let i=0; i < dataSource.length; i++) {
          if (dataSource[i] !== selectedItems[i]) {
            isEqual = false
            break
          }
        }
        return isEqual
      },
      expendedCellColSpan() {
        let result = 0
        if (this.checkable) {
          result += 1
        }
        if (this.expendField) {
          result += 1
        }
        return result
      }
    },
    watch: {
      selectedItems() {
        if (this.selectedItems.length === this.dataSource.length) {
          this.$refs.checkAll.indeterminate = false
        } else if (this.selectedItems.length === 0) {
          this.$refs.checkAll.indeterminate = false
        } else {
          this.$refs.checkAll.indeterminate = true
        }
      }
    },
    mounted () {
      // 单独复制一个tHead用作固定表头
      let table2 = this.$refs.table.cloneNode(false)
      this.table2 = table2
      table2.classList.add('s-table-copy')
      let tHead = this.$refs.table.children[0]
      let {height} = tHead.getBoundingClientRect()
      // 用margin-top来把第一行顶下来
      this.$refs.tableWrapper.style.marginTop = height + 'px'
      this.$refs.tableWrapper.style.height = this.height - height + 'px'
      table2.appendChild(tHead)

      // 添加一个空th抵消滚动条的17px
      let gutter = document.createElement('th')
      gutter.classList.add('th-gutter')
      table2.children[0].children[0].appendChild(gutter)
      this.$refs.wrapper.appendChild(table2)
    },
    beforeDestroy() {
      this.table2.remove()
    },
    methods: {
      onSelectItem(row, index, e) {
        let selected = e.target.checked
        let copySelectedItems = JSON.parse(JSON.stringify(this.selectedItems))
        if (selected) {
          copySelectedItems.push(row)
        } else {
          copySelectedItems = copySelectedItems.filter(item => item.id !== row.id)
        }
        this.$emit('update:selectedItems', copySelectedItems)
      },
      onSelectAllItems(e) {
        let selected = e.target.checked
        if (selected) {
          this.$emit('update:selectedItems', this.dataSource)
        } else {
          this.$emit('update:selectedItems', [])
        }
      },
      changeOrder(fieldName) {
        let orderBy = JSON.parse(JSON.stringify(this.orderBy))
        let oldOrderValue = orderBy[fieldName]
        if (oldOrderValue === 'ascending') {
          orderBy[fieldName] = 'descending'
        } else if (oldOrderValue === 'descending') {
          orderBy[fieldName] = true
        } else {
          orderBy[fieldName] = 'ascending'
        }
        this.$emit('update:orderBy', orderBy)
      },
      onRowExpend(id) {
        if (this.inExpendIds(id)) {
          this.expendIds.splice(this.expendIds.indexOf(id), 1)
        } else {
          this.expendIds.push(id)
        }
      },
      inExpendIds(id) {
        return this.expendIds.indexOf(id) >= 0
      }
    }
  }
</script>

<style lang="scss">
  @import '../../styles/common';
  .s-table-wrapper {
    position: relative;
    overflow: auto;
  }
  .s-table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    border-bottom: 1px solid $table-border-color;
    border-radius: $table-border-radius;
    th, td {
      padding: 8px;
      text-align: left;
      border-bottom: 1px solid $table-border-color;
    }
    thead {
      > tr {
        background: $table-background-color-even;
      }
      .s-table-head {
        display: flex;
        justify-content: flex-start;
        align-items: center;
      }
    }
    &-bordered {
      border: 1px solid $table-border-color;
      td, th {
        border: 1px solid $table-border-color;
      }
    }
    &-compact {
      td, th {
        padding: 4px;
      }
    }
    &-striped {
      tbody {
        > tr {
          &:nth-child(odd) {
          }
          &:nth-child(even) {
            background: $table-background-color-even;
          }
        }
      }
    }
    & &-center {
      text-align: center;
    }
    &-sort-icons {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      margin-left: 4px;
      .s-icon {
        width: 10px;
        height: 10px;
        fill: #999999;
        &:first-child {
        position: relative;
        bottom: -2px;
      }
        &.active {
          fill: $deep-main-color;
        }

      }
    }
    &-loading {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(255, 255, 255, .9);
      svg {
        width: 50px;
        height: 50px;
        fill: $main-color;
        @include spin;
      }
    }
    &-copy {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      th.th-gutter {
        width: 17px;
      }
    }
    &-row-expended {
      .s-icon {
        transform: rotate(90deg);
      }
    }
    &-expend-icon {
      width: 16px;
      height: 16px;
      padding: 2px;
      cursor: pointer;
      transition: all .1s;
      text-align: center;
    }
  }
</style>