/*
 * @Author: your name
 * @Date: 2021-03-27 21:28:29
 * @LastEditTime: 2021-03-31 12:51:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sll-blog\docs\.vuepress\config.js
 */
module.exports = {
  base: "/linBlog.github.io/",
  theme: 'vdoing',
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "前端面试之道", link: "https://8little-fox.github.io/linBlog.github.io/pages/b57c00/" },
      { text: "后端", link: "https://8little-fox.github.io/linBlog.github.io/pages/d770ad/" },
      { text: "Vue", link: "https://8little-fox.github.io/linBlog.github.io/pages/8b2920/" },
      { text: "Javascript", link: "https://8little-fox.github.io/linBlog.github.io/pages/502ee9/" },
      { text: "TypeScript", link: "https://8little-fox.github.io/linBlog.github.io/pages/15bd48/" },
      { text: "Vue3源码解析", link: "https://8little-fox.github.io/linBlog.github.io/pages/2b6a91/" },
      { text: "Gitee", link: "https://gitee.com/ll3462540450/projects" },
      { text: "GitHub", link: "https://github.com/8Little-fox/Blog" },
    ],
    sidebar: {
      "/html/": [
        {
          title: "前端面试题",
          collapsable: true,
          children: ["vue-problems", "vue3-problems", 'react-problems', "ts-problems", 'css-problems', 'wx-problems','explorer-problems'],
        },
        {
          title: "后端Java",
          collapsable: true,
          children:['Java',"MySQL"]
        },
        {
          title: "Vue",
          collapsable: true,
          children: ["vue", "vue3.0", "Vuex", "Pinia", "vite", 'vueUse'],
        },
        {
          title: "React",
          collapsable: true,
          children: ["react", 'redux', 'react-router', 'react-performance'],
        },
        {
          title: "JavaScript",
          collapsable: true,
          children: ["es", "tools"],
        },
        {
          title: "course",
          collapsable: true,
          children: ["C++", "Python"],
        },
        {
          title: "TypeScript",
          collapsable: true,
          children: ["ts", 'ts-examples'],
        },
        {
          title: "Vue3源码解析",
          collapsable: true,
          children: ["vue3-introduce", "monorepo","turbopack"],
        },
        {
          title: "算法",
          collapsable: true,
          children: ["algorithm"],
        },
        {
          title: "Css",
          collapsable: true,
          children: ["css", "scss", "tailwindcss", 'unoCSS'],
        },
        {
          title: "小程序",
          collapsable: true,
          children: ["uniapp","iptForm"],
        },
        {
          title: "Jquery",
          collapsable: true,
          children: ["jquery"],
        },
        {
          title: "网络",
          collapsable: true,
          children: ["network"],
        },
        {
          title: "其他",
          collapsable: true,
          children: [
            'websocket',
            'ui',
            "git",
            "node",
            "dayjs",
            "webpack",
            "project-replay",
            "refactor",
            "npm",
            "vscode",
          ],
        },
      ],
    },
  },
};
