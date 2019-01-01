<template>
    <div class="s-layout" :class="{'layout-has-sider': layoutClass.hasSider}">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 's-layout',
    data() {
        return {
            layoutClass: {
                hasSider: false
            }
        }
    },
    mounted() {
        this.$children.forEach((vm) => {
            if(vm.$options.name === 's-sider') {
                this.layoutClass.hasSider = true
            }
        })
    }
}
</script>

<style lang="scss" scoped>
.s-layout {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    &.layout-has-sider {
        flex-direction: row;
    }
}
</style>