<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>
<script>
import Vue from 'vue'
export default {
    name: 'g-tabs',
    props: {
        selected: {
            type: String,
            required: true
        },
        direction: {
            type: String,
            default: 'horizontal',
            validator(value) {
                return ['vertical', 'horizontal'].indexOf(value) >= 0
            }
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
    created() {

    },
    mounted() {
        this.$children.forEach((child)=>{
            if(child.$options.name === 'g-tabs-head') {
                child.$children.forEach((item)=> {
                    if(item.$options.name === 'g-tabs-item' && item.name === this.selected) {
                        this.eventBus.$emit('update:selected', this.selected, item)
                    }
                })
            }
        })
    }
}
</script>
<style lang="scss">
.tabs {
    
}
</style>


