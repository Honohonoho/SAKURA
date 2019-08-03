<template>
    <div class="s-pager" :class="{'s-pager-hide': hideIfOnePage === true && totalPage <= 1}">
        <span class="s-pager-nav s-pager-nav-pre"
            :class="{disabled: currentPage === 1}"
            @click="onClickPage(currentPage - 1)"
        >
            <s-icon name="left"></s-icon>
        </span>
        <template v-for="page in pages">
            <template v-if="page === currentPage">
                <span class="s-pager-item s-pager-item-active">{{page}}</span>
            </template>
            <template v-else-if="page === '···'">
                <span class="s-pager-item s-pager-item-separator">···</span>
            </template>
            <template v-else>
                <span class="s-pager-item" @click="onClickPage(page)">{{page}}</span>
            </template>
        </template>
        <span class="s-pager-nav s-pager-nav-next"
            :class="{disabled: currentPage === totalPage}"
            @click="onClickPage(currentPage + 1)"
        >
            <s-icon name="right"></s-icon>
        </span>
    </div>
</template>

<script>
    import Icon from './icon';
    export default {
        components: {
            's-icon': Icon
        },
        name: "s-pager",
        props: {
            totalPage: {
                type: Number,
                required: true
            },
            currentPage: {
                type: Number,
                default: 1
            },
            hideIfOnePage: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
            }
        },
        computed: {
            pages() {
                let pages = [1, this.totalPage, this.currentPage, this.currentPage-1, this.currentPage-2, this.currentPage+1, this.currentPage+2];
                let result = unique(
                    pages
                        .filter(item => item >= 1 && item <= this.totalPage)
                        .sort((a,b) => a-b)
                )
                .reduce((prev, current, index, array)=> {
                    prev.push(current)
                    array[index+1] !== undefined &&
                    array[index+1] - array[index] > 1 &&
                    prev.push('···')
                    return prev
                }, [])
                return result
            }
        },
        methods: {
            onClickPage(page) {
                this.$emit('pageChange', page)
            }
        }
    }
    function unique(array){
        // return [...new Set(array)]
        const obj = {}
        array.map((number)=> {
            if (obj[number]) return
            obj[number] = true
        })
        return Object.keys(obj).map(item => parseInt(item, 10))
    }
</script>

<style lang="scss">
    @import '../styles/common';
    .s-pager {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        user-select: none;
        &-hide {
            display: none;
        }
        &-item {
            font-size: 12px;
            padding: 0 4px;
            margin: 0 4px;
            min-width: 20px;
            height: 20px;
            border: 1px solid $pager-item-border-color;
            border-radius: $pager-item-border-radius;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            &:hover {
                border-color: $main-primary;
                color: $main-primary;
            }
        }
        &-item-separator {
            border: none;
            cursor: default;
            &:hover {
                color: inherit;
            }
        }
        &-item-active {
            cursor: default;
            border-color: $main-primary;
            color: $main-primary;
        }
        &-nav {
            margin: 0 4px;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            height: 20px;
            width: 20px;
            border-radius: $border-radius;
            font-size: 12px;
            color: $main-font-color;
            background: $disable-background-color;
            cursor: pointer;
            &.disabled {
                color: $disabled-color;
                cursor: default;
            }
        }
    }
</style>