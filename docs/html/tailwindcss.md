---
title: tailwindcss
date: 2022-09-17 16:01:08
permalink: /pages/0a115b/
categories:
  - html
tags:
  - 
---
# tailwindcss 
优点： 高定制、高个性
安装
```js
npm install -D tailwindcss@3.0.23 postcss@8.4.8 autoprefixer@10.4.2
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```
创建配置文件
初始化 Tailwind CSS
```js
npx tailwindcss init -p
```
tailwind.config.js
```js
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
```

postcss.config.js
```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

新建 styles/index.scss
```js
@tailwind base;
@tailwind components;
@tailwind utilities;
```
main.js中引入 tailwind
```js
import './styles/index.scss'
```
sass 安装
node-sass
```js
npm i -D sass@1.45.0
```