---
title: Router
date: 2023-12-15 09:40:01
permalink: /pages/43b062/
categories:
  - html
tags:
  -
---

```js
npm i react-router-dom
```

/src/router/index.js

```js
import Login from "../page/Login";
import Article from "../page/Article";
import { createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "/article", element: <Article /> },
]);
export default router;
```

`RouterProvider`
入口文件 /src/index.js

```js
import React from "react";
import ReactDOM from "react-dom/client";
import router from "./router";
import { RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
```

## 路由跳转
`navigation('/article')`
```js
import { Link, useNavigate } from "react-router-dom"
const Login = () => {
  const navigation = useNavigate()
  return (
    <div>
      登录页面-<Link to="/article"></Link>
     <button onClick={() => navigation('/article')}>文章</button>
    </div>
  )
}
export default Login
```

## 路由传参
1: useSearchParams()传参
2: params传参， useParams()
```js
// 获取参数 useSearchParams
navigation('/article&id=1')
const [ params ] = useSearchParams()
const id = params.get('id')

// 获取参数 useSearchParams
const router = createBrowserRouter([
  { path: "/article/:id/:name", element: <Article /> },
]);
navigation('/article/1001/Jack')
const params = useParams()
const id = params.id

```
## 路由嵌套
* `children` 属性配置路由嵌套关系
* `<Outlet/>` 组件配置二级路由渲染位置
```js
import Layout from "../page/Layout";
import About from "../page/About";
import Board from "../page/Board";

import { createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      // path 去掉，index: true, 默认二级路由
      { path: "/about", element: <About /> },
      { path: "/board", element: <Board /> },
      // 404页面
      { path: "*", element: <NotFound /> },
    ]
  }
]);
export default router
```
/src/page/Layout/index.js

```js
import { Link, Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div>Layout
      <Link to="/about">关于</Link>
      <Link to="/board">面板</Link>
      <Outlet/>
    </div>
  )
}
export default Layout
```

## 两种路由模式
* `history`模式和`hash`模式，ReactRouter分别由 `createBrowerRouter` 和 `createHashRouter`
* history - url/login - history对象 + pushState事件
* hash - url/#/login - 监听hashChange 事件