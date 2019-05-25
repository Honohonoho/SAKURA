let onClickDocument = (e) => {
    let {target} = e;
    callbakcs.forEach((item)=> {
        if (target === item.el || item.el.contains(target)) {
            return
        } else {
            item.callback()
        }
    })
};
document.addEventListener('click', onClickDocument)
let callbakcs = [];
const clickOutside = {
    bind: function (el, binding, vnode, oldVnode) {
        callbakcs.push({
            el,
            callback: binding.value
        })
    }
};

export default clickOutside