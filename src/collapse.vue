<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>
<script>
import Vue from 'vue';
export default {
    name: 'g-collapse',
    props: {
        // 每次只有一个content展开
        accordion: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            eventBus: new Vue()
        }
    },
    provide() {
        console.log(this.accordion)
        if (this.accordion) {
            return {
                eventBus: this.eventBus
            }
        }
    }
}
</script>
<style lang="scss">
$grey: #ddd;
$border-radius: 4px;
.collapse {
    border: 1px solid $grey;
    border-radius: $border-radius;
}
</style>


