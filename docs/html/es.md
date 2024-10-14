---
title: es
date: 2022-09-17 16:01:08
permalink: /pages/502ee9/
categories:
  - html
tags:
  -
---

# Js

## js 编码函数

`escape()`不能直接用于 URL 编码，它的真正作用是返回一个字符的 Unicode 编码值。比如"春节"的返回结果是%u6625%u8282，，escape()不对"+"编码 主要用于汉字编码，现在已经不提倡使用。

`encodeURI()`是 Javascript 中真正用来对 URL 编码的函数。 编码整个 url 地址，但对特殊含义的符号"; / ? : @ & = + $ , #"，也不进行编码。对应的解码函数是：decodeURI()。

`encodeURIComponent()` 能编码"; / ? : @ & = + $ , #"这些特殊字符。对应的解码函数是 decodeURIComponent()。

假如要传递带&符号的网址，所以用 encodeURIComponent()

## Promise

## Array.from()

`Array.from()` 方法就是将一个类数组对象或者可遍历对象转换成一个真正的数组

```js
const obj = {
  0: "a",
  1: "b",
  2: "c",
  length: 3,
};
//  length 的长度 = 数字的长度 没有的用 ‘undefended’ 占位
// 对象转化为数组
const newArr = Array.from(obj);
console.log(newArr);
//[ 'a', 'b', 'c' ]

//  数组转化为数组对象
const newArrObj = newArr.map((item, index) => {
  return {
    name: item,
    key: index,
  };
});
console.log(newArrObj);
//[ { name: 'a', key: 0 }, { name: 'b', key: 1 }, { name: 'c', key: 2 } ]

const newArrObj = Array.from(
  obj,
  function (item, index) {
    return {
      name: this.age + item,
      key: index,
    };
  },
  {
    age: 18,
  }
);
console.log(newArrObj);
// [
//   { name: '18a', key: 0 },
//   { name: '18b', key: 1 },
//   { name: '18c', key: 2 }
// ]
```

```js
let arrayLike = {
  0: "tom",
  1: "65",
  2: "男",
  3: ["jane", "john", "Mary"],
  length: 4,
};
let arr = Array.from(arrayLike);
console.log(arr); // ['tom','65','男',['jane','john','Mary']]
```

要将一个类数组对象转换为一个真正的数组，必须具备以下条件：

1、该类数组对象必须具有 length 属性，用于指定数组的长度。如果没有 length 属性，那么转换后的数组是一个空数组。

2、该类数组对象的属性名必须为数值型或字符串型的数字

## Object.keys()

返回值会自动排序 ？

```js
const obj = {
  100: "一百",
  2: "二",
  7: "七",
};
Object.keys(obj); // ["2", "7", "100"]
```

- 过滤对象中的 value = 0 并将其置为空

```js
let params = {
  name: 0,
  age: 0,
  work: 'frontend'
}
方法一：
for (let item in params) {
  if (typeof (params[item]) === "number" && (params[item]) === 0) {
    params[item] = params[item].replace = ''
  }
}

方法二：
Object.keys(params).forEach((key,index) => {
  if(params[key] === 0) {
    params[key] = ''
  }
});
// params  { name: '', age: '', work: 'frontend' }

```

> 如果属性名的类型是`Number`，那么`Object.keys`返回值是按照 key 从小到大排序

如果属性名的类型是`String`，那么`Object.keys`返回值是按照属性被创建的时间升序排序。

如果属性名的类型是`Symbol`，那么逻辑同`String`相同

## Array.prototype.includes()

## Array.prototype.indexOf()

<b>Array.prototype.includes</b>

`includes()` 的作用，是查找一个值在不在数组里，若在，则返回 true，反之返回 false。 基本用法：

```js
["a", "b", "c"]
  .includes("a") // true
  [("a", "b", "c")].includes("d"); // false
```

<b>Array.prototype.includes()</b>方法接收两个参数： <b>要搜索的值和搜索的开始索引。</b>当第二个参数被传入时，该方法会从索引处开始往后搜索（默认索引值为 0）。若搜索值在数组中存在则返回 true，否则返回 false。 且看下面示例：

```js
["a", "b", "c", "d"]
  .includes("b") // true
  [("a", "b", "c", "d")].includes("b", 1) // true
  [("a", "b", "c", "d")].includes("b", 2); // false
```

ES6 里数组的另一个方法`indexOf()`，下面的示例代码是等效的：

```js
["a", "b", "c"]
  .includes("a") //true
  [("a", "b", "c")].indexOf("a") > -1; //true
```

indexOf()严格使用===判断。请看下面示例代码：

```js
let demo = [1, NaN, 2, 3];

demo.indexOf(NaN); //-1
demo.includes(NaN); //true
```

上述代码中，indexOf()方法返回-1，即使 NaN 存在于数组中，而`includes()`则返回了 true。

> 提示：由于它对 NaN 的处理方式与 indexOf 不同，假如你只想知道某个值是否在数组中而并不关心它的索引位置，建议使用 includes()。如果你想获取一个值在数组中的位置，那么你只能使用 indexOf 方法。

`includes()` 在判断 +0 与 -0 时，被认为是相同的。

```js
[1, +0, 3, 4]
  .includes(-0) //true
  [(1, +0, 3, 4)].indexOf(-0); //1
```

> 注意：在这里，需要注意一点，includes()只能判断简单类型的数据，对于复杂类型的数据，比如对象类型的数组，二维数组，这些，是无法判断的

## Array.prototype.findIndex()

- 找到了返回索引，没找到返回-1

```js
const arr = [
  { name: "sll", age: 18 },
  { name: "sll", age: 19 },
  { name: "sll", age: 20 },
];
const newValue = arr.findIndex((item) => item.age === 19);
console.log(newValue); // 1
```

## Array.prototype.fill()

## Object.values()

Object.entries()

`Object.values()`

使用`Object.values()`遍历对象的属性值，无需使用使用属性名：

```js
let obj = {a: 1, b: 2, c: 3}

Object.values(obj).forEach(value =>{ console.log(value); // 输出1, 2, 3})


```

## Object.some()

- some()方法测试数组中是不是至少有 1 个元素通过了被提供的函数测试。它返回的是一个 Boolean 类型的值。

```js
let arr = [{ value: "apply" }, { value: "" }];
let res = arr.some((item) => item.value !== "");
```

## Object.every()

- every()方法测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值。

```js
const arr = [{ value: "apply" }, { value: "1" }];
const res = arr.every((item) => item.value !== "");
```

## Object.find()

- find()方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined

```js
const arr = [{ value: "" }, { value: "11" }];
const res = arr.find((item) => item.value !== "");
```

`Object.entries()`

使用`Object.entries()`遍历对象的属性名和属性值:

```js
let obj = { a: 1, b: 2, c: 3 };
Object.entries(obj).forEach(([key, value]) => {
  console.log(key + ": " + value); // 输出a: 1, b: 2, c: 3
});
```

## Promise

## JavaScript 是单线程，怎样执行异步的代码 ？

JS 中分为两种任务类型：宏任务`macrotask` 和 微任务`microtask`

<b>宏任务 : 主代码块, setTimeout, setInterval, setImmediate, requestAnimationFrame, I/O, UI rendering（可以看到，事件队列中的每一个事件都是一个 macrotask）</b>

<b>微任务 : process.nextTick, Promise, Object.observe, MutationObserver</b>

> 提示：在 node 环境下，process.nextTick 的优先级高于 Promise，也就是可以简单理解为：在宏任务结束后会先执行微任务队列中的 nextTickQueue 部分，然后才会执行微任务中的 Promise 部分。

执行顺序： 当执行栈执行完毕后，会首先执行微任务队列，当微任务队列执行完毕再从宏任务中读取并执行，当再次遇到微任务时，放入微任务队列。

```js
setTimeout(() => {
  console.log(1);
  Promise.resolve().then(() => {
    console.log(2);
  });
}, 0);
setTimeout(() => {
  console.log(3);
}, 0);
Promise.resolve().then(() => {
  console.log(4);
});
console.log(5);
// 输出结果：5 4 1 2 3
```

代码分析：

console.log(5)是唯一的同步任务，首先执行，输出 5
将所有异步任务放在 Task 队列中，挂起
同步任务执行完毕，开始执行微任务队列，即 Promise.then，输出 4
微任务队列执行完毕，执行宏任务队列 setTimeout
宏任务队列中首先执行同步任务，再次遇到微任务，放入微任务队列中，输出 1
同步任务执行完毕，执行微任务队列，输出 2
微任务队列执行完毕，执行宏任务队列 setTimeout，输出 3

我们以 setTimeout、process.nextTick、promise 为例直观感受下两种任务队列的运行方式

https://juejin.cn/post/6844904077537574919

```js
console.log("main1");

process.nextTick(function () {
  console.log("process.nextTick1");
});

setTimeout(function () {
  console.log("setTimeout");
  process.nextTick(function () {
    console.log("process.nextTick2");
  });
}, 0);

new Promise(function (resolve, reject) {
  console.log("promise");
  resolve();
}).then(function () {
  console.log("promise then");
});

console.log("main2");

// main1
// promise
// main2
// process.nextTick1
// promise then
// setTimeout
// process.nextTick2
```

process.nextTick 和 promise then 在 setTimeout 前面输出，已经证明了宏任务 和 微任务 的执行顺序
主进程的代码执行之后，会先调用 宏任务，再调用 微任务，这样在第一个循环里一定是 宏任务 在前，微任务在后。因为主进程的代码也属于 宏任务

主进程这个 宏任务（也就是 main1、promise 和 main2 ）执行完了，自然会去执行 process.nextTick1 和 promise then 这两个 微任务。这是第一个循环。之后的 setTimeout 和 process.nextTick2 属于第二个循环。

```js
Promise.resolve().then(() => {
  console.log("promise1");
  const timer2 = setTimeout(() => {
    console.log("timer2");
  }, 0);
});
const timer1 = setTimeout(() => {
  console.log("timer1");
  Promise.resolve().then(() => {
    console.log("promise2");
  });
}, 0);
console.log("start");

// start
// promise1
// timer1
// promise2
// timer2
```

```js
setTimeout(() => {
  console.log("timer1");
  Promise.resolve().then(() => {
    console.log("promise");
  });
}, 0);
setTimeout(() => {
  console.log("timer2");
}, 0);
console.log("start");

// start
// timer1
// promise
// timer2
```

```js
const promise = new Promise((resolve, reject) => {
  console.log(1);
  resolve("success"); // 主线程
  console.log(2);
});
promise.then(() => {
  // 微任务
  console.log(3);
});
console.log(4);

// 1
// 2
// 4
// 3
```

过程分析：

从上至下，先遇到`new Promise`，执行其中的同步代码 1

再遇到`resolve('success')`， 将 promise 的状态改为了`resolved`并且将值保存下来

继续执行同步代码 2

跳出`promise`，往下执行，碰到`promise.then`这个微任务，将其加入微任务队列

执行同步代码 4

本轮宏任务全部执行完毕，检查微任务队列，发现`promise.then`这个微任务且状态为`resolved`，执行它。

`Promise` 等待 成功 失败

```js
async function example() {
  const r1 = await new Promise((resolve) =>
    setTimeout(resolve, 500, "slowest")
  );
  const r2 = await new Promise((resolve) => setTimeout(resolve, 200, "slow"));
  return [r1, r2];
}

example().then((result) => console.log(result));
// ['slowest', 'slow']
```

## `...` Rest 参数和扩展运算符

es6 作用对象仅用于数组

```js
restParam(1, 2, 3, 4, 5);

function restParam(p1, p2, ...p3) {
  // p1 = 1
  // p2 = 2
  // p3 = [3, 4, 5]
}
```

es9 在 ES9 中为对象提供了像数组一样的 Rest 参数和展开运算符

Rest 参数用法

```js
var obj = {
  a: 1,
  b: 2,
  c: 3,
};
const { a, ...param } = obj;
console.log(a); //1
console.log(param); //{b: 2, c: 3}
```

`assign` 合并俩个对象

```js
const merged = { ...obj1, ...obj2 };
//同：
const merged = Object.assign({}, obj1, obj2);
```

## Array.prototype.reduce()

- https://juejin.cn/post/7127104741217140767
  `reduce()`函数接受四个参数

* Accumulator (acc) (累计器)
* Current Value (cur) (当前值)
* Current Index (idx) (当前索引)
* Source Array (src) (源数组)

回调函数第一次执行时，accumulator 和 currentValue 的取值有两种情况：

- 如果调用 reduce()时提供了 initialValue，accumulator 取值为 initialValue,currentValue 取数组中的第一个值；
- 如果没有提供 initialValue，那么 accumulator 取数组中的第一个值，currentValue 取数组中的第二个值;

上代码
json 求和
```js
  const price = cartList.reduce((a,c) => a + c.price * c.count, 0)
```
```js
[0,1,2,3,4].reduce(accumulator,currentValue, currentIndex,array){
  return accumulator+currentValue   //10
}
```

上面代码有点繁琐，我们用剪头函数来实现一下罢

```js
[0, 1, 2, 3, 4].reduce((prev, curr) => prev + curr);
```

累加对象数组里的属性值

```js
let initValue = 0;
let total = [
  { subject: "Math", score: 90 },
  { subject: "Chinese", score: 90 },
  { subject: "Englsh", score: 100 },
].reduce((acc, cur) => {
  return acc + cur.score;
}, initValue);
console.log(total);
```

将二维数组转化为一维数组

`初始值 []`

```js
let arr = [
  [0, 1],
  [2, 3],
  [4, 5],
];
arr.reduce((acc, cur) => {
  return acc.concat(cur);
}, []);
```

## Array.prototype.set()

Set 是 es6 新增的数据结构，<b>类似数组</b> ，但它的一大特性就是 <b> 所以元素都是唯一的 </b> 没有重复的值

用于数组去重

```js
let arr = [1, 2, 4, 5, 2, 6, 4, 4];
let setArr = new Set(arr);
//Set(5) { 1, 2, 4, 5, 6 }
```

## Array.prototype.find()

通过 `find` 进行匹配，匹配完成后对 `this.squareItem` 中的值进行修改

```js
const arr_id = 1;
const comment_num = 2;
const arr = this.squareItem.find((i) => i.id == arr_id);
arr.comment_num = comment_num;
```

## 查找重复元素

- 找出数组 arr 中重复出现过的元素

```js
function refrain(arr) {
  let tmp = [];
  if (Array.isArray(arr)) {
    arr.concat.sort().sort((a, b) => {
      if (a == b && tmp.indexOf(a) === -1) {
        tmp.push(a);
      }
    });
  }
  return tmp;
}
refrain([1, 2, 4, 4, 3, 3, 1, 5, 3]); // [1, 3, 4]
```

## 常用正则表达式

```js
/**
 * @描述 正则表达式
 */
export function regexpCheck(mode) {
	let regexp = ""

	switch (mode) {
		case 'name':
			regexp = /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/
			return {
				regexp, title: '中文姓名'
			};
		case "phone":
			regexp = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
			return {
				regexp, title: '手机号'
			};
		case "身份证":
			regexp =
				/(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/
			return {
				regexp, title: '身份证'
			};
		case "护照":
			regexp = /^([a-zA-z]|[0-9]){5,17}$/
			return {
				regexp, title: "护照"
			};
		case "港澳通行证":
			regexp = /^[CW]\d{8}$/
			return {
				regexp, title: "港澳通行证"
			};
		case "军人证":
			regexp = /^[\u4E00-\u9FA5](字第)([0-9a-zA-Z]{4,8})(号?)$/
			return {
				regexp, title: "军人证"
			};
		case "统一社会信用代码":
			regexp = /^([0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}|[1-9]\d{14})$/
			return {
				regexp, title: "统一社会信用代码"
			}
    case "邮箱地址":
			regexp = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
			return {
				regexp, title: "邮箱地址"
			}
    case "邮箱格式":
			regexp = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/
			return {
				regexp, title: "邮箱地址"
			}
    case "验证只包含数字、指定范围长度（2）的单词字符串":
      regexp = /^[0-9]+(.[0-9]{2})?$/
    case "小数点后两位":
      regexp = /\b\d{2}\b/g
    case "【整数+小数】(小数最多保留两位小数)（包含正数、零、负数）":
      regexp = /^-?(0|([1-9][0-9]*))(\.[\d]{1,2})?$/
    case "车牌号验证":
      regexp = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[警京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼]{0,1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/g;

    case "英文字母，数字和符号"
      regexp = /^[A-Za-z0-9!@#$%^&*()_+\-=[\]{}|;',./:"<>?]*$/g;
	}
}
```

## Array.prototype.flat

- 函数递归之数组扁平化

```js
// 这种不太优雅
const arr = [1, [2, [3, [4, 5]]], 6];
const items = []
const fn = arr => {
  for (let i = 0; i < arr.length; i++) {
    if(Array.isArrray(arr[i])){
      fn(arr[i])
    } else {
      items.push(arr[i])
    }
  }
}
console.log(items) //[ 1, 2, 3, 4, 5, 6 ]


该flat()方法创建一个新数组，其中所有子数组元素以递归方式连接到指定深度
全局属性 Infinity 是一个数值，表示无穷大。
const deps = {
    '采购部':[1,2,3],
    '人事部':[5,8,12],
    '行政部':[5,14,79],
    '运输部':[3,64,105],
}
let member = Object.values(deps).flat(Infinity); // [1,   2,  3,  5, 8,12,   5, 14, 79, 3,64, 105]

```

## 数组常用运算

- 数组交集

```js
const arr1 = [1, 2, 3, 4, 5, 7, 8, 9];
const arr2 = [7, 8, 9];
const inter = arr1.filter(function (val) {
  return arr2.indexOf(val) > -1;
});
console.log(inter); //[7,8,9]
```

- 数组对象交集
  `some()` 方法用于检测数组中的元素是否满足指定条件（函数提供）

`some()` 方法会依次执行数组的每个元素：

- 如果有一个元素满足条件，则表达式返回 true , 剩余的元素不会再执行检测。
- 如果没有满足条件的元素，则返回 false。
  > 注意： some() 不会对空数组进行检测。 不会改变原始数组

```js
const arr1 = [
  { name: "name1", id: 1 },
  { name: "name2", id: 2 },
];
const arr2 = [{ name: "name1", id: 1 }];
const result = arr1.filter(function (val) {
  return arr2.some((n) => JSON.stringify(n) === JSON.stringify(val));
});
console.log(result); //{ name: 'name1', id:1}
```

- 数组差集

数组 arr1 相对于 arr2 所没有的

`has()` 方法返回一个布尔值来指示对应的值 value 是否存在 Set 对象中

```js
const arr1 = [1, 2, 3, 4, 5, 7, 8, 9];
const arr2 = [7, 8, 9];
const diff = arr1.filter((item) => new Set(arr2).has(item));
//[ 7,8,9]
```

- 数组对象差集
  `every() ` 方法测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值。

- 如果数组中检测到有一个元素不满足，则整个表达式返回 false ，且剩余的元素不会再进行检测。

- 如果所有元素都满足条件，则返回 true。

```js
const arr1 = [
  { name: "name1", id: 1 },
  { name: "name2", id: 2 },
];
const arr2 = [{ name: "name1", id: 1 }];
const result = arr1.filter(function (v) {
  return arr2.every((n) => JSON.stringify(n) === JSON.stringify(v));
});
console.log(result);
```

- 数组并集
  首先过滤出 arr1 不等于 arr2 的，然后在将数组合并成一个

```js
const arr1 = [1, 2, 3, 4, 5, 7, 8, 9];
const arr2 = [7, 8, 9];
const inter = arr1.concat(arr2.filter((v) => !arr1.includes(v)));
console.log(inter);
```

## 将对象的值收集到数组中

```js
const info = { name: "Matt", country: "Finland", age: 35 };
const data = Object.values(info); // ['Matt', 'Finland', 35]
```

## Math.floor() 简写

```js
// LONG FORM
Math.floor(5.25); // -> 5.0

// SHORTHAND
~~5.25; // -> 5.0
```

## 强制类型转换

::: tip
显示强制类型转换 ：发生在静态类型语言的编译阶段

隐式强制类型转换：发生在动态语言的运行时
:::

```js
var a = 42;
var b = a + ""; //隐式强制类型转换
var c = String(a); //显示强制类型转换
```

隐式强制类型转换

::: tip

运算符+可以隐式将数字转换为字符串

运算符-可以隐式的将字符串转换为数字
:::

```js
// 隐式强制类型转换形式一：运算符
var a = 42;
var b = "0";

var c = a + b;
var d = c - 0;
console.log(c); // 输出"420"
console.log(d); // 输出420
```

## 隐式类型转换

值类型之间的数据类型转换:

1.数字和字符串使用+运算符:
数字和字符串如果使用+运算符进行操作，那么会将数字先转换为字符串，然后进行字符串连接操作:

```js
var str = "antzone";
var num = 8;
console.log(str + num); // antzone8
```

2: 布尔值参与的+运算符操作:
如果有布尔型参与，那么首先会将布尔值转换为对应的数字或者字符串，然后再进行相应的字符串连接或者算数运算。

```js
var bool = true;
var num = 8;
console.log(bool + num); // 9
```

3: Null 和 Undefined 参与的+运算符操作
如果和数字进行计算，null 会转化为 0，undefined 会转化成 NaN

```js
console.log(undefined + 1); // NaN
console.log(null + 1); // 1
```

## 检查元素类型

```js
const checkType = (v) =>
  v === undefined
    ? "undefined"
    : v === null
    ? "null"
    : v.constructor.name.toLowerCase();
checkType(true); // boolean
```

## 计算数组中元素出现的次数

```js
const countOccurrences = (arr, val) =>
  arr.reduce((pre, cur) => (cur === val ? pre + 1 : pre), 0);
countOccurrences([1, 2, 2, 4, 5, 6, 2], 2); // 3
```

## 从 html 中获取内容

```js
const getTextInHTML = (html) =>
  new DOMParser().parseFromString(html, "text/html").body.textContent || "";
getTextInHTML("<h2>Hello World</h2>"); /*'Hello World'*/
```

## 元素中心点位置计算

记录图片的中心点（X|Y 位置 + 宽|高的一半）
使用 vueUse 获取元素位置

```HTML
  <img
    ref="imgTarget"
    class="w-full rounded bg-transparent"
    :src="data.photo"
    :style="{
      height: (width / data.photoWidth) * data.photoHeight + 'px'
    }"
  />
```

```js
import { useElementBounding } from "@vueuse/core";
const {
  x: imgContainerX,
  y: imgContainerY,
  width: imgContainerWidth,
  height: imgContainerHeight,
} = useElementBounding(imgTarget);
const imgContainerCenter = computed(() => {
  return {
    translateX: parseInt(imgContainerX.value + imgContainerWidth.value / 2),
    translateY: parseInt(imgContainerY.value + imgContainerHeight.value / 2),
  };
});
```

## 动态图标渲染

```js
<i class="iconfont" v-html="item.icon" />
```

## 生成随机十六进制颜色

```js
const randomHex = () =>
  `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, "0")}`;
console.log(randomHex());
//Result: #92b008
```

## 将 RGB 转化为十六机制

```js
const rgbToHex = (r, g, b) =>
  "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

rgbToHex(255, 255, 255); // '#ffffff'
```

## 滚动到页面顶部

```js
const goToTop = () => window.scrollTo(0, 0);
goToTop();
```

## 获取变量的类型

```js
const trueTypeOf = (obj) =>
  Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();

trueTypeOf(""); // string
trueTypeOf(0); // number
trueTypeOf(); // undefined
trueTypeOf(null); // null
trueTypeOf({}); // object
trueTypeOf([]); // array
trueTypeOf(0); // number
trueTypeOf(() => {}); // function
```

## 修改富文本中图片的高度

```html
<div class="count" v-html="text"></div>
<style>
  .count img {
    //宽， 高
  }
</style>
```

## HTML 语义化

好处：

- 1.对编写代码的人来说有语义化标签的 html 结构更加清晰，方便编写代码
- 2.对于团队来说，方便开发与维护。
- 3.对于爬虫有利于 SEO。
- 4.有利于用户体验。

如何使用语义化

- 少使用或者不适用 div 和 span 标签；
- 用 p 标签代替 div 标签；不适用样式标签，如：b 标签、font 标签；
- 强调文本放在 strong 或者 em 标签中，不要用 b 和 i 标签；
- 使用表格 table 时，标题要用 caption，表头要用 thead，主体部分用 tbody 包围，尾部用 tfoot 包围；
- 表头用 th，单元格用 td。表单域用 filedset 包裹，用 lengend 标签说明表单的用途。input 标签通过 id 属性或 for 属性与 label 标签关联。html 语义化，css 类名也要语义化等等。

## 随机字符串

```js
const randomString = () => Math.random().toString(36).slice(2);
randomString();
```

## 逻辑空赋值(??=)

`逻辑空赋值??=` 逻辑空赋值运算符`(x ??= y)`仅在 x 是` null 或 undefined` 时对其赋值。

```js
const a = { duration: 50 };

a.duration ??= 10;
console.log(a.duration);
// expected output: 50

a.speed ??= 25;
console.log(a.speed);
// expected output: 25
```
