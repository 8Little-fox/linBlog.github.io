---
title: 基础语法
date: 2022-09-18 16:56:02
permalink: /pages/f71b8a/
categories:
  - html
tags:
  -
---

## React

安装

```js
yarn create react-app my-app --template typescript
```

```js
npx create-react-app react-demo
```

## 循环

```vue
const list = [ {id: 1001, name: 'Vue',}, {id: 1002, name: 'Vue',} ];
<ul>
    {
      list.map(item => (
         <li key={item.id}>{item.name}</li>
      ))
    }
  </ul>
```

## 条件渲染

```vue
const isLogin = true; {isLogin &&
<span>111</span>
} {isLogin ?
<span>111</span>
: '222'}
```

## useState (数据驱动视图)

```js
import { useState } from "react";
const [count, setCount] = useState(0);
const handleClick = () => {
  setCount(count + 1);
};

const [form, setForm] = useState({ name: "join" });
const handleClickForm = () => {
  setForm({
    ...form,
    name: "Xin",
  });
};
<button onClick={handleClick}>{count}</button>;
```

## classnames 优化类名控制

```js
npm install  classnames
<span
  className={classNames('nav-item', {active: type ===item.type})}
></span>
```

## React 中获取 DOM

```js
const inputRef = useRef(null)
const showDom = () => {
  console.log(inputRef.current)
}
<input type="text" ref={inputRef}/>
<button onClick={showDom}></button>
```

## 组件通信

### 父传子`props`

`props` 可以传任意数据 （数字， 字符串，布尔， 数组，对象，函数，JSX）

```js
function Son(props) {
  return props.name;
}
<Son name={name} child={<span>this is span child</span>} />;
```

### 深层传值

`React` 提供了 `context` 机制，解决了深层传值的问题

```js
import Reac from "react";

// 首先需要创建一个自定义 context
// 该方法接收一个参数作为 context 的默认值
const myContext = React.createContext();
// 获取包裹组件，用于包裹需要应用 context 的组件
const { Provider } = myContext;

class Parent extends React.Component {
  value = {
    message: "hello",
  };

  render() {
    // 通过包裹器的 value 属性向下传递指定值
    return (
      <Provider value={this.value}>
        <Child />
      </Provider>
    );
  }
}

class Child extends React.Component {
  render() {
    return <Grandchild />;
  }
}

class Grandchild extends React.Component {
  // 在需要获取祖代传递的 context 值的后代组件中，
  // 声明 contextType 静态属性，值为之前创建的 context;
  static contextType = myContext;

  render() {
    // 最后使用 this.context 就能获取到之前
    // 在 Provider 中传入的 value 值；
    return <div>{this.context.message}</div>;
    // hello
  }
}

export default Parent;
```

需要注意的是，由于提供方和调用方需要使用同一个使用 React.createContext() 创建的 context，所以如果父组件和要调用 context 的子组件不在同一个文件中的话，则需要考虑通过 export 和 import 来实现引用，但是这样组件间的耦合度又增加了一层，React 官方建议使用 组合 方式取代上述的 继承 方式，下面再次对上述代码进行改造：

```js
import React from "react";

class Parent extends React.Component {
  value = {
    message: "hello",
  };

  render() {
    return <Child>{this.value.message}</Child>;
  }
}

class Child extends React.Component {
  render() {
    // this.props.children 会指向父组件在子组件中嵌入的数据或组件
    return <div>{this.props.children}</div>;
  }
}

export default Parent;
```

### 兄弟组件间传值

```js
import { useState } from "react";
function A({ getMsg }) {
  const msgA = "msgA";
  return (
    <div>
      {msgA}
      <button onClick={() => getMsg(msgA)}>send</button>
    </div>
  );
}
function B({ name }) {
  return <div>this is B{name}</div>;
}
function App() {
  const [name, setName] = useState("");
  const handlerMsgA = (name) => {
    console.log(name);
    return setName(name);
  };
  return (
    <div className="App">
      <A getMsg={handlerMsgA} />
      <B name={name} />
    </div>
  );
}

export default App;
```

### 原型方法

- 父组件通过`React.createRef()`创建`Ref`，保存在实例属性`myRef`上。父组件中，渲染子组件时，定义一个 Ref 属性，值为刚创建的 myRef。
- 父组件调用子组件的`myFunc`函数，传递一个参数，子组件接收到参数，打印出参数。
- 参数从父组件传递给子组件，完成了父组件向子组件通信。

```js
import React, { Component, Fragment } from "react";

class Son extends Component {
  myFunc(name) {
    console.log(name);
  }
  render() {
    return <></>;
  }
}

// 父组件
export default class Father extends Component {
  constructor(props) {
    super(props);
    // 创建Ref，并保存在实例属性myRef上
    this.myRef = React.createRef();
  }

  componentDidMount() {
    // 调用子组件的函数，传递一个参数
    this.myRef.current.myFunc("Jack");
  }
  render() {
    return (
      <>
        <Son ref={this.myRef} />
      </>
    );
  }
}
```

### Context 机制跨层组件通信

- createContext 方法创建上下文对象 Ctx
- 在顶层组件(App)，通过 Ctx.Provider 组件提供数据
- 在底层组件(B)，通过 useContext 钩子函数使用数据

```js
import { createContext, useContext } from "react";
const MsgContext = createContext();
function A() {
  const msgA = "this is A";
  return (
    <div>
      {msgA}
      <B />
    </div>
  );
}
function B() {
  const msg = useContext(MsgContext);
  return <div>this is B-{msg}</div>;
}
function App() {
  const msg = "this is msg APP";
  return (
    <div className="App">
      <MsgContext.Provider value={msg}>
        <A />
      </MsgContext.Provider>
    </div>
  );
}

export default App;
```

## React Hooks 的主要功能

### useEffect

- useEffect 是一个 React Hook 函数，用于在 React 组件中创建不是由事件引起而是`由渲染本身引起的操作`，比如发送 AJAX 请求，更改 DOM
- 1:依赖项为空时，初识 + 组件更新
- 2: 传入空数组依赖项，初始执行一次
- 3: 传入特定依赖项， 初始+ 依赖项变化时执行

```js
useEffect(() => {
  // 请求
  return () => {
    // 清楚副作用（组件卸载时执行）
  };
});
useEffect(() => {
  // 请求
}, []);

const [count, setCount] = useState(0);
useEffect(() => {
  // 请求
}, [count]);
```

### useMemo

是一个用于优化性能的 React Hook，它的主要作用是避免在每次渲染时都进行复杂的计算和重新创建对象。通过记住上一次的计算结果，只有在依赖项发生变化时才重新计算，从而提高性能。

- 接受两个参数
- 一个函数，这个函数返回需要记住的值。
- 一个依赖项数组，当数组中的依赖项发生变化时，才会重新计算函数的返回值。

```js
import React, { useMemo } from "react";

function App() {
  const [count, setCount] = React.useState(0);

  const expensiveCalculation = useMemo(() => {
    console.log("计算中...");
    return count * 2;
  }, [count]);

  return (
    <div>
      <p>结果：{expensiveCalculation}</p>
      <button onClick={() => setCount(count + 1)}>增加</button>
    </div>
  );
}

export default App;
```

### useContext

## 路径解析配置

```js
// 安装craco
npm i D @craco/craco
// 创建配置文件
craco.config.js
// 配置文件中添加路径解析配置
const path = require('path')
module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
}
// 包文件中配置启用和大包命令
'scripts': {
  "start": 'craco start',
  "build": 'craco build'
}
```

## 联想路径配置

- 根目录新增 jsconfig.json 文件

```js
{
  "compilerOptions": {
    "baseUrl": './',
    "paths": {
      "@/*":[
        "src/*"
      ]
    }
  }
}
```

## 陆续更新中....
