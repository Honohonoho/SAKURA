import Vue from 'vue'
import hljs from 'highlight.js'
import 'highlight.js/styles/ocean.css'

Vue.directive('highlight',function (el) {
    let blocks = el.querySelectorAll('pre code');
    blocks.forEach((block)=>{
        hljs.highlightBlock(block)
    })
})
export default ({
    Vue, // VuePress 正在使用的 Vue 构造函数
}) => {
// ...做一些其他的应用级别的优化
}