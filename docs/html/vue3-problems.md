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