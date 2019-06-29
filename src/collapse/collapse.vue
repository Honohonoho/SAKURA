<template>
    <div class="s-collapse">
        <slot></slot>
    </div>
</template>
<script>
import Vue from 'vue';
export default {
    name: 's-collapse',
    props: {
        // 每次只有一个content展开
        accordion: {
            type: Boolean,
            default: false
        },
        selected: {
            type: Array
        }
    },
    data() {
        return {
            eventBus: new Vue()
        }
    },
    provide() {
        return {
            eventBus: this.eventBus
        }
    },
    mounted(){
        this.eventBus.$emit('update:selected', this.selected)
        this.eventBus.$on('update:addSelected', (name) => {
            // deep copy this.selected
            let deepCopySelected = JSON.parse(JSON.stringify(this.selected))
            if (this.accordion) {
                deepCopySelected = [name]
            } else {
                deepCopySelected.push(name)
            }
            this.$emit('update:selected', deepCopySelected)
            this.eventBus.$emit('update:selected', deepCopySelected)
        })
        this.eventBus.$on('update:removeSelected', (name) => {
            let deepCopySelected = JSON.parse(JSON.stringify(this.selected))
            let index = deepCopySelected.indexOf(name)
            deepCopySelected.splice(index,1)
            this.$emit('update:selected', deepCopySelected)
            this.eventBus.$emit('update:selected', deepCopySelected)
        })
        this.eventBus.$on('selectedChange', (name) => {
            this.$emit('change', name)
        })
    }
}
</script>
<style lang="scss">
@import '../../styles/common';

.s-collapse {
    border: 1px solid $border-color;
    border-radius: $border-radius;
}
</style>


