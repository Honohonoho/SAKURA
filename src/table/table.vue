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
        <th>
          <input type="checkbox" ref="checkAll"
             :checked="this.selectedItems.length === this.dataSource.length"
             @change="onChangeAllItems"
          />
        </th>
        <th v-if="dataIndexVisible">#</th>
        <th v-for="column in columns">
          {{column.text}}
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item,index) in dataSource">
        <th>
          <input type="checkbox"
             :checked="selectedItems.filter((i) => i.id === item.id).length > 0"
             @change="onRowChange(item, index, $event)"/>
          </th>
        <td v-if="dataIndexVisible">{{index+1}}</td>
        <template v-for="column in columns">
          <td>{{item[column.field]}}</td>
        </template>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: "s-table",
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
      }
    },
    watch: {
      selectedItems() {
        console.log(1);
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
      onRowChange(row, index, e) {
        let selected = e.target.checked
        let copySelectedItems = JSON.parse(JSON.stringify(this.selectedItems))
        if (selected) {
          copySelectedItems.push(row)
        } else {
          let index = copySelectedItems.indexOf(row)
          copySelectedItems.splice(index, 1)
        }
        this.$emit('rowChange', copySelectedItems)
      },
      onChangeAllItems(e) {
        let selected = e.target.checked
        if (selected) {
          this.$emit('rowChange', this.dataSource)
        } else {
          this.$emit('rowChange', [])
        }
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
  }
</style>