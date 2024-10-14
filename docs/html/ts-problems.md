---
title: ts系列
date: 2022-11-12 11:42:07
permalink: /pages/7d7451/
categories:
  - html
tags:
  -
---

# ts 的数据类型有哪些？
基本类型和引用类型
```ts
boolean, number, string, array, tuple 元组, enum 枚举, any, null undefined 所以类型的子类型, void 空类型，方法没有返回值, never 任何类型的子类型，代表不会出现的值, object
```
* tuple 元组
```ts
let tupleArr: [number, string, boolean]
tupleArr = [12, '12', true]
```

# 接口与类型别名的区别

- 接口 instance

1: 可以声明对象

2: 接口合并: 可以通过合并不同的声明进行不断扩展

3: 接口继承: extends

- 类型别名 type

1: 可以用来声明一些接口（interface）无法声明的其他类型

```js
// 声明已有类型（即取别名）
type A = number;
// 字面量类型
type B = "foo";
// 元组类型
type C = [number, string];
// 联合类型
type D = number | boolean;
// 交叉类型
type E = A & D;
```

2: 通过交叉类型来实现扩展

```js
type Super = {
  a: string,
};
type Sub = Super & {
  b: number,
};
```

::: tip 相同点
1:都可以描述一个对象或者函数

2:都允许拓展（extends）两者可以混合扩展，但是两者语法不同。interface extends interface (接口继承接口)

type extends type (类型继承类型)

interface extends type (接口继承类型)

type extends interface (类型继承接口)
:::

::: tip 不同点
type 可以声明基本类型别名，联合类型，元组等类型

type 语句中还可以使用 typeof 获取实例的 类型进行赋值

type 其他一些扩展操作

interface 能够声明合并，type 不行。

:::
