---
title: vite
date: 2022-09-17 16:01:08
permalink: /pages/7bd69d/
categories:
  - html
tags:
  - 
---
# Vite
* Webpack 在开发时默认会去抓去并构建你的整个项目，然后才能提供服务，只要你的项目中有任何错误，都会影响构建
* Vite 不会在一开始就构建你的整个项目，而是会将应用中的模块区分为  `依赖` 和 `源码` （项目代码） 两部分，对于源码部分会根据`路由来拆分`代码模块,
*只会构建一开始必须要构建的内容

依赖预构建： 解决了vite 不能解析 js，兼容 CommonJS 和 AMD 模块的依赖

## vite 安装
```js
npm init vite@latest
```
npm i @vueuse/core@8.1.2


## vite 通用组建自动化注册

1. vite Glob 导入功能，该功能帮助我们在文件系统中导入多个模块
2. vue 中defineAsyncComponent方法，可以创建一个按需加载的异步组件

* 在 src/libs/index.js中
```js
import { defineAsyncComponent } from 'vue'

export default {
  install(app) {
    // 获取当前路径任意文件夹下的 index.vue 文件
    const components = import.meta.glob('./*/index.vue')
    // 遍历获取到的组件模块
    for (const [key, value] of Object.entries(components)) {
      // 拼接组件注册的 name
      const componentName = 'm-' + key.replace('./', '').split('/')[0]
      // 通过 defineAsyncComponent 异步导入指定路径下的组件
      app.component(componentName, defineAsyncComponent(value))
    }
  }
}
```

* main.js 中引入
```js
import mLibs from './libs'
createApp(App).use(mLibs).mount('#app')
```
## vite-plugin-svg-icons 使用
```js 
yarn add vite-plugin-svg-icons -D
```
* 在vite.config.js中使用插件
```js 
import {createSvgIconsPlugin} from 'vite-plugin-svg-icons';
import path, { join } from 'path'

export default defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      // 指定symbolId格式
      symbolId: 'icon-[name]'
    })
  ],
})
```

* 在main.js中引入
```js
import 'virtual:svg-icons-register';

```
* 文件夹svg-icon/index.vue
```js
<template>
  <svg aria-hidden="true">
    <use :class="fillClass" :xlink:href="symbolId" :fill="color" />
  </svg>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  // 显示的 svg 图标名称（剔除 icon-）
  name: {
    type: String,
    required: true
  },
  // 直接指定 svg 图标的颜色
  color: {
    type: String
  },
  // 通过 tailwind 指定 svg 颜色的类名
  fillClass: {
    type: String
  }
})
// 真实显示的 svg 图标名（拼接 #icon-）
const symbolId = computed(() => `#icon-${props.name}`)
</script>

```
使用 
```js
<m-svg-icon class="w-1.5 h-1.5" name="hamburger"></m-svg-icon>
```
