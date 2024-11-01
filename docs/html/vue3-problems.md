---
title: Vue3系列
date: 2023-11-08 20:36:34
permalink: /pages/18da92/
categories:
  - html
tags:
  - 
---

## Vue2和Vue3区别
* 1： vue2 和 vue3 双向绑定不同
* vue2: Object.defineProperty() ,后添加的属性劫持不到，(数据变化了视图没更新)--> 可以通过 $set()
* vue3: new Proxy(), 后添加的数据可以劫持到,$set在vue3中没有，proxy 不需要
## tab页之间的通信
在Vue开发中,如何使用广播机制实现两个tab页之间的通信。通过使用`broadcast channel API`创建通道或频道,并通过`post message发送消息`,实现两个tab页之间的交互。同时,讲解了同源限制的原因,以及为什么大部分前端API只能在同源情况下使用,非同源情况建议使用 `webSocket`

## Vue3.0有什么更新
* 1: 性能优化：Vue.js 3.0使用了`Proxy`替代Object.defineProperty实现响应式，并且使用了静态提升技术来提高渲染性能。新增了编译时优化，在编译时进行模板静态分析，并生成更高效的渲染函数。
* 2: Composition API：`Composition API`是一个全新的组件逻辑复用方式，可以更好地组合和复用组件的逻辑。
* 3: TypeScript支持：Vue.js 3.0完全支持`TypeScript`，在编写Vue应用程序时可以更方便地利用TS的类型检查和自动补全功能。
* 4: 新的自定义渲染API：Vue.js 3.0的自定义渲染API允许开发者在细粒度上控制组件渲染行为，包括自定义渲染器、组件事件和生命周期等。
* 5: 改进的Vue CLI：Vue.js 3.0使用了改进的Vue CLI，可以更加灵活地配置项目，同时支持Vue.js2.x项目升级到Vue.js 3.0。
* 6: 移除一些API：Vue.js 3.0移除了一些不常用的API，如过渡相关API，部分修饰符等。
