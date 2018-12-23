<template>
    <div class="collapse-item">
        <div class="title">
            {{title}}
        </div>
        <div class="content" v-if="open">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: 'g-collapse-item',
    props: {
        title: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            open: false
        }
    }
}
</script>
<style lang="scss">
$grey: #ddd;
$border-radius: 4px;
.collapse-item {
    > .title {
        // border-bottom: 1px solid $grey;
        border-top: 1px solid $grey;
        min-height: 32px;
        display: flex;
        align-items: center;
        padding: 0 8px;
        cursor: pointer;
    }
    &:first-child {
        > .title {
            border-top: none;
        }
    }
    > .content {
        padding: 8px;
        border-top: 1px solid $grey;
    }
}
</style>
