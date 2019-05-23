const clickOutside = {
    bind: function (el, binding, vnode, oldVnode) {
        document.addEventListener('click', (e) => {
            let {target} = e;
            if (target === el || el.contains(target)) {
                return
            }
            binding.value()
        })
    }
};
export default clickOutside