module.exports = {
    base: '/SAKURA/',
    title: 'SAKURA UI 官网',
    description: '一个好用的 UI 组件库',
    sidebarDepth: 2,
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: '文档', link: '/install/' },
            { text: 'GitHub', link: 'https://github.com/Honohonoho/lunzi' },
        ],
        sidebar: [
            ['/install/', '安装'],
            ['/quick_start/', '快速上手'],
            {
                title: '组件',
                collapsable: true,
                children: [
                    ['/components/button', 'Button'],
                ]
            },
        ]
    }
}