---
title: 基础语法
date: 2022-10-05 16:51:48
permalink: /pages/15bd48/
categories:
  - html
tags:
  - 
---
## TS
**目录**

- `TS`
- `原始类型`
- `非原始类型`
- `数组类型`
- `联合类型`
- `交叉类型`
- `any / unknown`
- `接口类型 interface`
- `接口继承，同名，缺省，只读`
- `联合交叉类型`
- `类型别名 type`
- `函数`
- `函数参数的写法`
- `Promise`


## 环境搭建
### node环境下的编译
```js
// 下载这三个npm包，全局安装
// ts-node：ts的执行引擎，作用就是编译ts文件并运行在node环境里
// tslib: ts的一个包含所有的辅助函数的运行时的库
// @types/node：类型定义的一个库

npm install ts-node tslib @types/node -g

```
写一个`ts`文件测试：
```js
// 文件 test.ts
function foo(str: string) {
    console.log(str.length);
}
foo('abc');
```
在终端执行`ts-node test.ts`

### webpack + tsc 搭建编译环境

> export {} 避免不同文件变量相互污染

## 原始类型
ts数据类型 基础数据类：number, string, boolean, undefinded, null, symbol（创建都是不一样的）

function a():void{}  ts中函数没有返回值，函数类型就是void
function a():undefinded{ return undefinded}

## 非原始类型

object(不败汗基础数据类型) Object（包含基础数据类型）
let obj: object = {a: 1}
let arr: object = [1]

## 数组类型

let arr:number[] = [1,2,3]
泛型 let arr:Array<>number = [1,2,3]
元组 let arr3:[number,boolean] = [1, true]

## 联合类型
    
let numAndStr:String|number = 10
    
let numAndStr:1|'2' = '2' 常量 表示值只能是 1|'2'

## 交叉类型
& 必须都的有 ｜可以少属性
let obj:{name: string, age:number} & {height: number}
obj = {name: '1', age: 10, height: 1.90}

## any / unknown
不推荐使用any 可以接收任何类型
let arr:any = 1
let arr2:unknown = 2 （有检验）

## 接口类型 interface
用来自定义类型
对象用

```js
interface MyItf{
   name:string,
   age:number
}

let obj:MyIft;

obj = {
   name: '1',
   age: 20
}

```
数组用
```js
interface Arrift{
    //下标类型
    [idx:number]:number|string
}
let obj2:Arrift = [1,2,'3']
```
函数用

```js
interface Funift{
  // 形参及类型
  (p:string, a:number):void
}
let fn:Funift = (p:string,a:number) => {}
fn('', 1)
```

## 接口继承，同名，缺省，只读
具有父接口的类型属性
```js
interface NameItf{
    name:string
}
interface AgeItf{
    age:number
}
interface PersonItf extends NameItf,AgeItf{
    height:number
}
let p:PersonItf;
p={
    name: '1',
    age: 20,
    hright: 1.80
}

```

> 接口同名-合并了所有属性

age?:number 属性可以缺省
readonly name:string 只读，属性不可更改

## 联合交叉类型
& 优先 ｜

 ```js
 let obj:{name:string,age:number} | {name:number, age:string}
 obj = {
     name: 'lin',
     age: 20
 }
 obj = {
     name: 10,
     age: '20'
 }
 ```
 
 ## 类型别名 type
 自定义类型
 
 type StrOrNum = string | number
 
 let str:StrOrNum = '1'
 str = 10
 
 ```js
 type ObjType = {
     a: number&2,
     b: string
 }
 let obj:ObjType ={
     a: 2,
     b: 'lin'
 }
 ```
 
 type 和interface 混着用
 用类型别名保存接口上的某个属性
 ```js
 interface AItf{
     name: string
 }
 type AType = AItf['lin']
 let str2:AType = '10'
 ```
 ## 函数
 接口定义函数类型
 
 ```js
interface FnItf{
    p:string:number
}
let fn:FnItf = (p:string) => {
    return 1
}
fn('')
 ```
 类型别名定义函数类型
 ```
 type FnType = (p:string) => void
 let fn2:FnType = (p:string):void => {}
 fn2('')
 ```
 函数作为对象的属性出现的时候
 
 ```js
 interface FnItf{
    p:string:number
}
 interface ObjItf{
     fn: FnItf
 }
 let obj:ObjItf = {
     fn:(str)=>{
         return 1
     }
 }
 
 obj.fn('')
 ```
 
 类型别名
 ```js
 type ObjItf = {
     fn:(p:string) => number
 }
  let obj:ObjItf = {
     fn:(str)=>{
         return 1
     }
 }
 
 obj.fn('')
 ```
 ## never
 `never`类型表示永远不会有值的一种类型。

 * 如果一个函数抛出一个错误，那么这个函数就可以用never或者void来表示其返回值
 * 如果一个联合类型中存在never，那么实际的联合类型并不会包含never
 ```js
 // 定义
type test = 'name' | 'age' | never
// 实际
type test = 'name' | 'age'
 ```
 ::: tip never与void 差异
void 表示没有任何类型
never 表示永远不存在的值的类型。

当一个函数返回空值时，它的返回值为 void 类型，但是，当一个函数永不返回时（或者总是抛出错误），它的返回值为 never 类型。void 类型可以被赋值（在 strictNullChecking 为 false 时），但是除了 never 本身以外，其他任何类型不能赋值给 never。
 :::
 ## 函数参数的写法
 
 默认参数 b:numbe=3
 ```js
 function fn(a:number, b:numbe=3, ...arr:number[]){
     return a+b
 }
 fn(10) //13
 ```
 缺省参数 
 b?:numbe=3
 
 解构剩余参数 ...arr:number[]
 fn(1,2,3,4)
 
 ## Promise
 
```js
interface DataItf{
    a:number;
    b:number
}
 interface ResIft {
     code:number;
     data:DataItf[];
     message:string
 }
 // promise 对象 p:对象名： Promise<res的类型>
 let p:Promise<ResIft> = new Promise((resolve, reject) =>{
     resolve({
         code: 0,
         data:[{a:1,b:2},{a:11,b:22}],
         message: ''
     })
 })
 p.then(res => {
     if(res.code == 0){
         
     }
 })
```

## this
global.d.ts 添加全局接口
```js
// 在全局上，给Window接口扩展这个属性
interface Window{
    Person:(n:string)=>void
    myname:string
}
```

```js
export {} //不是全局

function Person (this:Window, name:string){
  this.myname = name
}
window.Person = Person
window.Person('')
```
this指向自定义对象

this:window|objType 联合类型写法

```js
type objType = {
    myname: string,
    Person:(m:string) => void
}
let obj:objType = {
    myname: 'lin',
    Person:() =>{}
}

function Person (this:window|objType, name:string){
  this.myname = name
}
obj.Person = Person
obj.Person('XX')
```

## 枚举 enum

```js
enum StatusCode {
    success = 200,
    paramsError = 400,
    severError = 500
}
let code:string|number = 200

if(code === StatusCode.success) {
    console.log('成功')
}else if (code === StatusCode.paramsError){
    console.log('失败： 请求参数问题')
}else if (code === StatusCode.severError){
    console.log('失败： 服务器错误')
}


```
## 泛型 （类型参数化）

类型的形参，T是一个标识符，可以自定义，T表示某种类型

```js
function fn1<T,G>(n:T,m:G):T{
    return n
}
fn1<number, string>(100, 'hello')
fn1<boolean>(100)
fn1<'hello'>('hello')
```

## 泛型 （类型别名，接口）

类型别名
```js
type StrOrNum = string|number
type objType<N, G> = {
    name:N,
    getName:()=>G
}
let obj:objType<StrOrNum, StrOrNum> = {
    name: 'lin',
    getName(){
        return '1'
    }
}
```

接口

```js
interface PersonItf<N, G> = {
    name:N,
    getName:()=>G
}
let obj:PersonItf<StrOrNum, StrOrNum> = {
    name: 'lin',
    getName(){
        return '1'
    }
}
```

## 泛型约束 extends

```js
type StrorNum = string|number
interface PersonItf<N extends StrorNum, G>{
    name:N, //直接收字符串或者 数字
    getName:()=>G
}

let obj:PersonItf<string, number> = {
    name: 'lin',
    getName(){
        return '1'
    }
}
```

## 类 class

```js
class Person {
    // 定义属性前，应该先声明这个属性的类型，也可以同时设置默认值
    myname:string='默认名称'
    constructor(n:string){
        this.myname = n
    },
    getName(){
        return this.myname
    }
}

let p = new Person('lin')
```

## 类的继承

public 默认类属性/方法的修饰符

protected 受保护的， 类里面可以访问，类外面不能访问

private 私有的，在本类可以访问，子类和类的外部不可以访问

static 静态属性/成员
```js
class Person {
    public myname:string
    constructor(n:string){
        this.myname = n
    },
    getName(){
        return this.myname
    }
}

class Male extends Person{
    age:number
  constructor(name:string, age:number){
       super(name) //调用回父类的
       this.age = age
    }
}
let m = new Male('lin', 17)
console.log(m.myname)
console.log(m.age)
console.log(m.getName())

```

## 抽象类和接口
普通类的描述，指定一个类的规范，给普通的类去继承，
继承之后，普通类里面就必须定义抽象类里面的抽象属性和方法，
抽象类里面的普通方法可以直接继承

抽象类不能实例化

```js
abstract class Person{
    abstract name:string;
    abstract getName():string;
        getAge(){
            return 11
        }
}
```

书写接口给类使用
```js
instance PerItf{
   name:string;
   age:number;
   getName:()=>void
}
class M implements PerItf{
    name:string='';
    age:number=13;
    getName(){
        
    }
    
}
let m = new M()
```

## 工具类型Partial

```js
interface PItf{
    name:string;
    age:number;
    height?:number
}
type Partial<T> { [P in keyof T]?: T[p] | undefinded;}
keyof T. name|age
{
    name?:string|undefinded
    age?:number|undefinded
}

for(key in 对象PItf)

let obj:Partial<PItf>={
    name: '',
    age: 15,
}

// Required 不可缺省

let obj2:Required<PItf> = {
    name:'';
    age:12;
    height: 190
}
```

## keyof / in

后面一般跟接口，表示接口的这些属性名之一 (实际上就是冒号 前面的这些)
```js
interface Person {
    name:string;
    age:number;
    [idx:number]:number|string
}

type PType = keyof Person; // name | age
let p1:PType;
p1 = 1
p1 = 'lin'
```

```js
type StrorNum = string|number
type PItf = {
    [k in StrorNum]:string
}
let obj:PItf = {
    a: '',
    10: ''
}
```
