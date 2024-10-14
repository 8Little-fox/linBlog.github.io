---
title: React系列
date: 2024-02-05 09:33:40
permalink: /pages/67717e/
categories:
  - html
tags:
  - 
---
## 你知道哪些React hooks？
* `useState`：用于管理功能组件中的状态。
* `useEffect`：用于在功能组件中执行副作用，例如获取数据或订阅事件。
* `useContext`：用于访问功能组件内的 React 上下文的值。
* `useRef`：用于创建对跨渲染持续存在的元素或值的可变引用。
* `useCallback`：用于记忆函数以防止不必要的重新渲染。
* `useMemo`：用于记忆值，通过缓存昂贵的计算来提高性能。
* `useReducer`：用于通过reducer函数管理状态，类似于Redux的工作原理。
* `useLayoutEffect`：与useEffect类似，但效果在所有DOM突变后同步运行。

## 为什么在React中useState要使用数组而非对象
当useState被多次使用的时候，对象解构不方便，数组便于解构

