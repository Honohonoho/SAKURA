module.exports = {
    base: '/SAKURA/',
    title: '❀ SAKURA UI',
    description: '一个小而美的 UI 组件库， 基于 Vue 2.0 的移动端和 PC 端组件库',
    sidebarDepth: 2,
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: '文档', link: '/install/' },
            { text: '指南', link: '/guide/'},
            { text: 'GitHub', link: 'https://github.com/Honohonoho/SAKURA' },
        ],
        sidebar: [
            {
                title: '入门',
                collapsable: false,
                children: [
                    ['/install/', '安装'],
                    ['/quick_start/', '快速上手']
                ]
            },
            {
                title: '组件',
                collapsable: false,
                children: [
                    ['/components/grid', 'Grid 网格'],
                    ['/components/layout', 'Layout 布局'],
                    ['/components/icon', 'Icon 图标'],
                    ['/components/button', 'Button 按钮'],
                    ['/components/input', 'Input 输入框'],
                    ['/components/tabs', 'Tabs 标签页'],
                    ['/components/popover', 'Popover 消息提示'],
                    ['/components/toast', 'Toast 通知'],
                    ['/components/collapse', 'Collapse 折叠面板'],
                    ['/components/cascader', 'Cascader 级联选择器'],
                    ['/components/slides', 'Slides 轮播'],
                    ['/components/validate', 'Validate 表单验证'],

                ]
            },
        ]
    },
    markdown: {
        lineNumbers: true
    }
}