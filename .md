cyber-blog/
├── package.json
├── README.md
└── docs/
    ├── index.md                      # 首页（文章列表）
    ├── posts/
    │   └── first-post.md             # 示例文章（含数学公式和图片）
    ├── public/
    │   └── images/                   # 本地图片存放处（可放入 .gitkeep）
    └── .vitepress/
        ├── config.js                 # 站点核心配置
        ├── posts.data.js             # 文章数据加载器
        └── theme/
            ├── index.js              # 主题入口
            ├── style.css             # 赛博朋克全局样式
            └── components/
                └── PostsList.vue     # 文章列表组件
