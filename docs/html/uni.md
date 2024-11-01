---
title: uni
date: 2022-09-17 16:01:08
permalink: /pages/303739/
categories:
  - html
tags:
  - 
---
# 混合开发 
##  nVue
uniApp 嵌入原生
https://nativesupport.dcloud.net.cn/NativePlugin/README 

nVue 基于原生引擎的渲染

 nVue 注意事项

 1：nVue 页面只能使用 flex 布局，不支持其他布局方式。

 2:原生开发没有页面滚动的概念，页面内容高过屏幕高度并不会自动滚动，只有部分组件可滚动（list、waterfall、scroll-view/scroLLer），要滚得
 内容需要套在可滚动组件下

 3:文字内容，必须、只能在 <text> 组件下

 4:只有text标签可以设置字体大小，字体颜色

 5:布局不能使用百分比

 6:不支持背景图

 7:在 App.vue 中定义的全局js变量不会在 nVue 页面生效。globalData和vuex是生效的

 8:目前不支持在 nVue 页面使用 typescript/ts。

 9:border 不支持简写

 10: nVue 页面中 IOS不支持使用 <b><img> 标签</b> 可以使用 <b><image> 标签</b>

 ```js
 /* 错误 */
.class {
    border: 1px red solid;
}

/* 正确 */
.class {
    border-width: 1px;
    border-style: solid;
    border-color: red;
}
 ```
 10：background 不支持简写
 ```js
 /* 错误 */
.class {
    background: red;
}

/* 正确 */
.class {
    background-color: red;
}

 ```

## scroll-view 喵点定位

点击按钮或者某个操作，跳转到页面到某个位置上
* `scroll-view` 必须要设置高度，此处高度获取的是屏幕的高度
```html
<scroll-view :scroll-into-view="active" :style="{ height: scrollView + 'px' }" />

scrollView() {
			const height = sys.screenHeight - sys.safeAreaInsets.top
			return height;
		},
```
```js
<div id="comment"/>

```
* 如果节点绑定到某个组件上导致Android 不能拿到节点，ios 是可以的，所以应该把dom节点绑定到 `div` 上

页面渲染完成后在进行指定位置跳转，
```js
	setTimeout(() => {
		this.active = 'comment'
	}, 900);
```
* 如果不加定时器，容易导致页面高度计算有误

## 日志打印
不支持 clear()
