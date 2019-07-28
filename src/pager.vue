<template>
    <div class="s-pager">
        <span v-for="page in pages">
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
            let a1 = unique(pages.sort((a,b) => a-b))
            let a2 = a1.reduce((prev, current, index)=> {
                prev.push(current)
                a1[index+1] !== undefined &&
                a1[index+1] - a1[index] > 1 &&
                prev.push('...')
                return prev
            }, [])
            return {
                pages: a2
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

</style>