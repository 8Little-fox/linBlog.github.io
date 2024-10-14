---
title: ui
date: 2022-09-28 10:39:14
permalink: /pages/2f77f9/
categories:
  - html
tags:
  - 
---
# UI 组件常遇到的问题

## iview Select 多选时-数据回显 必须是数字类型

```js
var arr = ['1', '2', '3']arr.map(Number);
```

## iview Form prop 校验时最好加上 key

```js
<FormItem label="累计消费：" prop="num" key="num">
  <Input
    v-model="item.num"
    placeholder="单位: 吨"
    style="width: 250px"
    on-change="(e) => burlChange(e, item)"
  />
</FormItem>
```

## el-cascader 选择两次才会显示选中状态

```js
解决 将列表中绑定的 v-model 去掉 ,采用$ref 的方式获取值
```
