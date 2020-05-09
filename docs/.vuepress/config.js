module.exports = {
  base: '/docs/',
  title: "Twt's Blog",
  description: "欢迎",
  music: 'http://music.163.com/song?id=1436709403&userid=1481292227',
  themeConfig: {
    logo: '/timg.jpg',
    nav: [
      { text: 'Home', link: '/' },
      {
        text: '前端问题',
        items: [
          { text: 'Css', link: '/CSS/c-aaa' },
          { text: 'JS', link: '/JS/' }
        ]
      },
      {
        text: '常见基础',
        items: [
          { text: '前端要闻', link: '/Frontend/' }
        ]
      },
      {
        text: '我的网站',
        items: [
          { text: '超市管理系统', link: 'http://120.26.177.2' },
        ]
      },
    ],
    /*sidebar: [
      {
        title: 'CSS样式',
        path: '/CSS/',
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/CSS/c-aaa',
          '/CSS/c-bbb',
          '/CSS/c-ccc'
        ]
      },
      {
        title: 'JavaScript',
        path: '/JS/',
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/JS/j-aaa',
        ]
      }
    ]*/
    sidebar: {
      '/CSS/': [
        '/CSS/c-aaa',
        '/CSS/c-bbb',
        '/CSS/c-ccc',
        '/CSS/c-ddd',
        '/CSS/c-eee',
        '/CSS/c-fff'
      ],
      '/JS/': [
        '/JS/j-bbb',
        '/JS/j-ccc',
        '/JS/j-aaa',
      ],
      '/Frontend/': [
        '/Frontend/f-aaa'
      ]
    }
  }
}
