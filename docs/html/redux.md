---
title: Redux
date: 2023-12-14 08:36:51
permalink: /pages/416fc3/
categories:
  - html
tags:
  - 
---


```js
npm i @reduxjs/toolkit react-redux
```
 * 1: 定义一个 `reducer` 函数 (根据当前想要做的修改返回一个新的状态)
 * 2: 使用createStore 方法传入reducer函数，生成一个`store实例对象`
 * 3: 使用store实例的 `subscribe方法`订阅数据的变化 （数据一旦变化，可以得到通知）
 * 4: 使用store实例的 `dispatch方法提交action对象`触发数据变化（告诉reducer你想怎么改变数据）
 * 5: 使用store实例的 `getState方法`获取最新的状态数据更新到视图中

 ::: tip
  组件中使用 哪个 hook 函数获取store 中的数据？  `useSelector`
 
  组件中使用 哪个 hook 函数获取dispatch方法？ `useDispatch`

  如何得到要提交的action 对象？ `执行store模块中导出的actionCreater方法`
 :::
 新建 counterStore.js
 /src/store/modules/counterStore.js
```js
import { createSlice } from '@reduxjs/toolkit';

const counterStore = createSlice({
  name: "counter",
  // 初始化数据
  initialState: {
    count: 0,
  },
  // 修改数据的同步方法
  reducers: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    addToNum(state, action) {
      state.count = action.payload
    }
  },
});
// 结构出创建action对象的函数（actionCreater）
const { increment, decrement, addToNum } = counterStore.actions;
// 获取reducer 函数
const counterReducer = counterStore.reducer;
export { increment, decrement, addToNum };
export default counterReducer;

```

 /src/store/index.js
 ```js
 import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './modules/counterStore'
const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})
export default store
 ```
 应用
 /src/App.js
 ```js
 import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, addToNum } from "./store/modules/counterStore";
function App() {
  const { count } = useSelector(state => state.counter)
  // 得到 dispatch 函数
  const dispatch = useDispatch()
  return (
    <div className="App">
      {/*使用dispatch 提交action 对象 */}
      <button onClick={() => dispatch(decrement())}>-</button>
      {count}
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(addToNum(10))}>addToNum</button>
      
    </div>
  );
}

export default App;

 ```
 倒入store /src/index.js
 ```js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

 ```
 ## 案例
 * https://github.com/8Little-fox/redux-meituan