<!--
需求：有边框， 紧凑/松散， 单双行颜色， 选中数据（单选，全选), 排序，固定表头。展开
-->
<template>
  <div class="s-table-wrapper">
    <table class="s-table"
       :class="{'s-table-bordered': bordered, 's-table-compact': compact, 's-table-striped': striped}"
    >
      <thead>
      <tr>
        <th v-if="dataIndexVisible">#</th>
        <th>
          <input type="checkbox" ref="checkAll"
             :checked="isAllChecked"
             @change="onSelectAllItems"
          />
        </th>
        <th v-for="column in columns" :key="column.field">
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
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item,index) in dataSource" :key="item.id">
        <th>
          <input type="checkbox"
             :checked="selectedItems.filter((i) => i.id === item.id).length > 0"
             @change="onSelectItem(item, index, $event)"/>
          </th>
        <td v-if="dataIndexVisible">{{index+1}}</td>
        <template v-for="column in columns">
          <td :key="column.field">{{item[column.field]}}</td>
        </template>
      </tr>
      </tbody>
    </table>
    <div class="s-table-loading">
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
      }
    }
  }
</script>

<style lang="scss">
  @import '../../styles/common';
  .s-table-wrapper {
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
      svg {
        @include spin;
      }
    }
  }
</style>