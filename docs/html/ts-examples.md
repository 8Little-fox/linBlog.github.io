---
title: 实例
date: 2023-02-28 10:06:18
permalink: /pages/bf3745/
categories:
  - html
tags:
  - 
---

## useURLLoader.ts
```ts
import { ref } from 'vue'
import axios from 'axios'

function useURLLoader<T>(url: string) {
  const result = ref<T | null>(null)
  const loading = ref(true)
  const loaded = ref(false)
  const error = ref(null)

  axios.get(url).then((rawData) => {
    loading.value = false
    loaded.value = true
    result.value = rawData.data
  }).catch(e => {
    error.value = e
    loading.value = false
  })
  return {
    result,
    loading,
    loaded
  }
}

interface DogResult {
  message: string
}
const { result, loading, loaded } = useURLLoader<DogResult>('https://XXX')

```

## tree.ts 数组专成tree
```ts
interface IArrayItem {
  id: number;
  name: string;
  parentId: number;
}
interface ITreeNode {
  id: number;
  name: string;
  children?: ITreeNode[];
}

function convert(arr: IArrayItem[]): ITreeNode | null {
  // 用于 id 和 treeNode 的映射
  const idToTreeNode: Map<number, ITreeNode> = new Map();

  let root: ITreeNode | null = null;
  arr.forEach((item) => {
    const { id, name, parentId } = item;
    const treeNode: ITreeNode = { id, name };
    idToTreeNode.set(id, treeNode);
    const parentNode = idToTreeNode.get(parentId);
    if (parentNode) {
      // 如果有父节点，就把自己放到父节点的 children 数组中
      if (!parentNode.children) {
        parentNode.children = [];
      }
      parentNode.children.push(treeNode);
    }
    if (parentId === 0) {
      // 如果没有父节点，就把自己作为根节点
      root = treeNode;
    }
  });
  return root;
}
const arr = [
  { id: 1, name: '部门A', parentId: 0 },
  { id: 2, name: '部门B', parentId: 1 },
  { id: 3, name: '部门C', parentId: 1 },
  { id: 4, name: '部门D', parentId: 2 },
  { id:5, name: '部门E', parentId: 2 },
  { id: 6, name: '部门F', parentId: 3 },
];
const tree = convert(arr);
//{"id":1,"name":"部门A","children":[{"id":2,"name":"部门B","children":[{"id":4,"name":"部门D"},{"id":5,"name":"部门E"}]},{"id":3,"name":"部门C","children":[{"id":6,"name":"部门F"}]}]}
```

## tree-to-array.ts
```ts
interface IArrayItem {
  id: number;
  name: string;
  parentId: number;
}
interface ITreeNode {
  id: number;
  name: string;
  children?: ITreeNode[];
}

function convert1(root: ITreeNode): IArrayItem[] {
  const nodeToParent: Map<ITreeNode, ITreeNode> = new Map();
  const arr: IArrayItem[] = [];

  const queue: ITreeNode[] = [];
  queue.unshift(root); // 根节点入队
  while (queue.length) {
    const curNode = queue.pop(); // 出队
    if(curNode == null) break;
    const { id, name, children=[] } = curNode;
    // 创建数组 item 并 push
    const parentNode = nodeToParent.get(curNode);
    const parentId = parentNode?.id || 0;
    const item = { id, name, parentId };
    arr.push(item);

    // 子节点入队
    children.forEach((child) => {
      // 入队
      queue.unshift(child);
      // 映射 parent
      nodeToParent.set(child, curNode);
    });
  }
  return arr;
}
const arr1 = {
  "id": 1, "name": "部门A",
  "children": [{
    "id": 2,
    "name": "部门B",
    "children": [
      { "id": 4, "name": "部门D" },
      { "id": 5, "name": "部门E" }
    ]
  },
  {
    "id": 3,
    "name": "部门C",
    "children": [
      { "id": 6, "name": "部门F" }
    ]
  }]
}
const array = convert1(arr1);
console.log(JSON.stringify(array));
```
## 根据id 递归获取该上级 text, url,
```js
// 根据id 递归获取该上级 text, url,
const tree = [
  {
    id: 752,
    identifier: "menu.purchase",
    url: "/dcp/contract",
    icon: "icon-shengchanzhizao",
    isShowMenu: true,
    text: "采购管理",
  },
  {
    id: 767,
    identifier: "menu.yingxiaoguanli",
    url: "/dcp/indexTarget",
    icon: "icon-anquanzhiduguanli-",
    select: true,
    children: [
      {
        id: 772,
        identifier: "menu.yingx1",
        url: "/dcp/indexTarget",
        select: true,
        children: [
          {
            id: 773,
            identifier: "menu.yxgl3",
            url: "/dcp/yx",
            select: true,
            isShowMenu: true,
            text: "营销管理3级",
          },
        ],
        isShowMenu: true,
        text: "营销管理sub",
      },
    ],
    isShowMenu: true,
    text: "营销管理",
  },
  {
    id: 768,
    identifier: "menu.gc",
    url: "/dcp/gc",
    icon: "icon-shuxingbianmaguanli",
    children: [
      {
        id: 775,
        identifier: "menu.gc2",
        url: "/dcp/gc2",
        isShowMenu: true,
        text: "工程管理2级",
      },
    ],
    isShowMenu: true,
    text: "工程管理",
  },
  {
    id: 769,
    identifier: "menu.ny",
    url: "/",
    icon: "icon-moban",
    isShowMenu: true,
    text: "能源管理",
  },
];
const findParent = (list, id, arr) => {
  for (let item of list) {
    if (item.id=== id) {
      arr.unshift({title: item.text,id:item.id, url: item.url}) //要id就push item.id, 要对象就push item
      return true
    }
    if (item.children&& item.children.length > 0) {
      let isFind = findParent(item.children, id, arr)
      if (isFind) {
        arr.unshift({title: item.text,id:item.id, url: item.url}) //要id就push item.id, 要对象就push item
        return true
      }
    }
  }
  console.log('***', arr)
  return false
}
const arr = []
const id = 773;
console.log(findParent(tree, id, arr));
```

## 数字增长动画
![alt text](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/12960cddeb01406b8e3b7c11ee9fe63f~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=342&h=90&s=55786&e=gif&f=39&b=ffffff)
```vue
<script setup lang="ts">
import { ref } from "vue"
import {useNumberAnimation} from "@/utils/use-number-animation"
const num = ref('0')
useNumberAnimation({
  from:0,
  to: 3452564.456,
  duration: 3000,
  onProgress: v=> {
    console.log("此时的值是： ", v);
    num.value = v.toFixed(2)
  }
})
</script>

<template>
  <main>
    <div class="">{{ num }}</div>
  </main>
</template>

```
```ts
/**
 * 
 * @param options 
 * from 起始数字
 * to 最终数字
 * duration 延迟间隔（ms）
 * onProgress 更新回调函数
 */
export const useNumberAnimation = (options: {
  from: number;
  to: number;
  duration: number,
  onProgress?: (v: number) => void;
}) => {
  const { from, to, duration, onProgress } = options;
  let value: number = from
  // 算出增长速度
  const speed = (to - from) / duration;
  // 起始时间
  const startTime = Date.now();
  const run = () => {
    //时间间隔
    const t = Date.now() - startTime;
    // 当时间间隔大于延迟时间时终止
    if (t >= duration) {
      value = to;
      onProgress?.(value)
      return;
    }
    // 当前值 = 起始值 + 时间间隔 * 增长速度
    value = from + t * speed
    onProgress?.(value)
    // 继续执行
    requestAnimationFrame(run)
  };
  run()
}
```