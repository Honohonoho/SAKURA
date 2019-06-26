module.exports = {
    base: '/SAKURA/',
    title: '❀ SAKURA UI 官网',
    description: '一个好用的 UI 组件库',
    sidebarDepth: 2,
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: '文档', link: '/install/' },
            { text: 'GitHub', link: 'https://github.com/Honohonoho/SAKURA' },
        ],
        sidebar: [
            ['/install/', '安装'],
            ['/quick_start/', '快速上手'],
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
                ]
            },
        ]
    }
}