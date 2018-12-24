<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>
<script>
import Vue from 'vue';
export default {
    name: 'g-collapse',
    data() {
        return {
            eventBus: new Vue()
        }
    },
    provide() {
        return {
            eventBus: this.eventBus
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


