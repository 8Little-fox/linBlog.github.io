---
title: ts-算法系列
date: 2023-01-15 12:49:43
permalink: /pages/dc28b1/
categories:
  - html
tags:
  - 
---

## 将一个数据旋转3次
### 方法一
* 取出最后一项，放到第一项 pop, unshift
```js
/**
 * 取出最后一项，放到第一项 pop, unshift
 * @param arr 
 * @param k 旋转k次
 * @returns 
 */
export function rotate1(arr: number[], k: number): number[] {
  const length = arr.length;
  if(!k || length === 0) return arr;
  const step = Math.abs(k %length);  // abs 取绝对值

  // O(n)
  for(let i = 0; i < step; i++) {
    const n = arr.pop()
    if(n != null) {
      arr.unshift(n) // 数组是有序排列，unshift O(n) 时间复杂度
    }
  }
  return arr
}
const arr = [1,2,3,4,5,6,7]
const arr1 = rotate1(arr, 3)
console.log(arr1) // [5,6,7,1,2,3,4]
```
### 方法二
* 旋转 k 次  -使用concat
```js
/**
 * 旋转 k 次  -使用concat
 * @param arr 
 * @param k 
 * @returns 
 */
export function rotate2(arr: number[], k: number): number[] {
  const length = arr.length;
  if(!k || length === 0) return arr;
  const step = Math.abs(k %length);  // abs 取绝对值

  const part1 = arr.slice(-step)
  const part2 = arr.slice(0, length - step)
  const part3 = part1.concat(part2)
  return part3
}
const arr = [1,2,3,4,5,6,7]
const arr1 = rotate2(arr, 3)
console.log(arr1) // [5,6,7,1,2,3,4]
```
### 性能测试
方案二比方案一执行时间短
```js
const arr3 = []
for(let i = 0; i < 10 * 10000; i++) {
  arr3.push(i)
}
console.time('rotate1');
rotate1(arr, 9 * 10000 )
console.timeEnd('rotate1'); // 0.106ms 时间复杂度 O(n^2)

const arr4 = []
for(let i = 0; i < 10 * 10000; i++) {
  arr4.push(i)
}
console.time('rotate2');
rotate2(arr, 9 * 10000 )
console.timeEnd('rotate2'); // 0.02ms 时间复杂度 O(1)
```

