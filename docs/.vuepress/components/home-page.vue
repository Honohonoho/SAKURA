<template>
    <div>
        <div class="title">
            <h1>SAKURA UI 官网</h1>
            <img src="../public/sakura.png" alt="">
        </div>
        <p>SAKURA(樱花) UI 是一个好用的 UI 组件库，提供了常用的 UI 组件， 适合移动端和 PC 端使用。</p>
    </div>
</template>
<script>
export default {
    
}
</script>

<style lang="scss" scoped>
@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
.title {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    img{
        width: 60px;
        height: 60px;
        margin-left: 10px;
        animation: spin 10s infinite linear;
    }
}
</style>

