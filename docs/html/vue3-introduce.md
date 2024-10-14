---
title: 介绍
date: 2022-12-20 09:53:25
permalink: /pages/2b6a91/
categories:
  - html
tags:
  - 
---

* 源码采用 `monorepo` 方式进行管理， 将模块拆分到 package 目录中
* `Vue3` 采用  `ts` 开发，增强类型检测，`vue2`则采用  `flow`
* `Vue3`的性能优化，支持 `tree-shaking`,不实用就不会被打包
* `Vue2` 后期引入RFC,使每个版本改动可控
## Vue3 源码的目录结构设计
* `reactivity`: 响应式系统
* `runtime-core`： 运行时自定义渲染器
* `runtime-dom`： 浏览器运行时，包括`DOM API`属性，事件处理等
* `runtime-test`： 测试
* `server-renderer`： 服务端渲染
* `compiler-core`： 编译器核心
* `compiler-dom`： 针对浏览器的编译模块
* `compiler-ssr`： 服务端渲染的编译模块
* `compiler-sfc`： 单文件解析
* `size-check`： 测试代码体积
* `template-explorer`： 调试编译器输出的开发工具
* `shared`： 多个包之间共享的内容
* `vue`： 完整版本，包括运行时和编译器

由于所有的项目放在一个仓库当中，代码逻辑复用是非常方便，如果有依赖的代码变动，那么用到这个依赖的项目当中会立马感知到。这又是怎么做到的呢？普通项目可以通过相对路径进行引用，但我们这里的设想是每一个包都是独立的，如果是通过相对路径进行引用的话，那么就很耦合了。我们可以通过 Workspace 协议进行模块之间的相互依赖，这样就达到了解耦的目的了。
此外 Vue 是分`运行时`和`编译时`，从上图的源码目录结构上我们就可以看成端倪来了。`@vue/runtime-xxx` 系列的包是不直接引用 `@vue/compiler-xxx` 系列的包，这样在就保证了它们之间不存在强关联，仅从入口文件 vue 进行关联，从而达到区分运行时和编译时。


