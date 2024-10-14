---
title: vueUse
date: 2022-09-18 10:22:24
permalink: /pages/c2b326/
categories:
  - html
tags:
  - 
---
# vueUse

## useElementBounding 获取元素节点

```js
import { useElementBounding } from "@vueuse/core";
<img
  ref="imgTarget"
  :src="data.photo"
  />
const {
  x: imgContainerX,
  y: imgContainerY,
  width: imgContainerWidth,
  height: imgContainerHeight,
} = useElementBounding(imgTarget);
```
## useEventListener 监听浏览器后退事件
```js
import { useEventListener } from "@vueuse/core";
useEventListener(window, 'popstate', () => {
  // 后退成功
});
```