<template>
    <div class="s-pager">
        <span v-for="page in pages" class="s-pager-item"
            :class="{'s-pager-item-active': page === currentPage, 's-pager-item-separator': page === '...'}"
        >
            {{page}}
        </span>
    </div>
</template>

<script>
    export default {
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
            hideWhenOnePage: {
                type: Boolean,
                default: false
            }
        },
        data() {
            let pages = [1, this.totalPage, this.currentPage, this.currentPage-1, this.currentPage-2, this.currentPage+1, this.currentPage+2]
            let sortedPages = unique(pages.sort((a,b) => a-b))
            let pagesWithDots = sortedPages.reduce((prev, current, index)=> {
                prev.push(current)
                sortedPages[index+1] !== undefined &&
                sortedPages[index+1] - sortedPages[index] > 1 &&
                prev.push('...')
                return prev
            }, [])
            return {
                pages: pagesWithDots
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
    }
</style>