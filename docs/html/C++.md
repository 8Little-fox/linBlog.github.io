---
title: C++
date: 2025-03-28 10:44:49
permalink: /pages/da9347/
categories:
  - html
tags:
  - 
---
## 一、基础语法
### 1.1 程序结构
```c
#include <iostream>  // 头文件包含
using namespace std; // 命名空间
int main() {         // 主函数
    cout << "Hello World!" << endl; // 输出语句
    return 0;        // 返回值
}
```
### 1.2 变量与常量
```C
int a = 10;                // 整型变量
const double PI = 3.14159;  // 常量
auto x = 3.14;             // 自动类型推断
```
### 1.3 基本数据类型
* 字节（Byte）是计算机存储数据的最小单元
* 占字节数越多的数据类型，容量越大（能存储的数值范围越大）

| 类型   | 说明  | 示例   |
|--------|--------|--------|
| int   | 整型 4字节 | int age = 25; |
| long long   | 长整型 8字节 | int age = 25; |
| float   | 单精度浮点 4字节| float price = 9.99f; (7位有效数字)| 
| double   | 双精度浮点 8字节 | double pi = 3.1415926;  (15～16位有效数字)|
| long double   | 长双精度浮点 16字节 | 
| char   | 字符 1字节 | char grade = 'A'; |
| bool   | 布尔 1字节 | bool is_valid = true; |
| void   | 无类型 | void func(); |

#### 求数据类型长度-sizeof(变量｜数据类型｜数值)
* 返回数据类型 `占用的字节数`
* sizeof()的优先级比 *、/、%的优先级高
### 1.4 输出
* 格式化输出

格式化输出所用的函数为 printf，它可以输出任意位数的小数。

使用格式：printf(“%.nf”,a)。这句话的作用是将变量a保留n位小数输出。

>注意事项：
>* 这里的n，需要具体化为一个数字，保留几位小数，如保留两位小数，n就改成2，保留三位小数，n就改成3;
>* %后面的小数点一定不能漏掉。
>* 使用printf的时候，一定要注意加上头文件`#include<cstdio>`

![图片](../assets/imgs/c++_printf.jpg)

* fixed 配合 setprecision(n) 可以控制 cout 语句中浮点数的输出精度
* 头文件 `<iomanip>`
```c
cout<< fixed << setprecision(6)<< endl;
```
```c
#include <iostream>
#include <cstdio>
using namespace std;
int main() {
  double a = 6.8;
  int b = 5;
  int c = 3;
  // cout<< a*(b+c);
  printf("%.2f", a*(b+c));
  return 0;
}
```
## 二、运算符与表达式
### 2.1 算术运算符
```c
// 算术运算符
int x = 10 + 5;  // + - * / % 

// 关系运算符
bool b1 = (10 > 5);  // > < >= <= == !=

// 逻辑运算符
bool b2 = true && false;  // && || !

// 位运算符
int y = 0b1010 & 0b1100;  // & | ^ ~ << >>


int a = 10, b = 3;
cout << a + b << endl;  // 13
cout << a - b << endl;  // 7
cout << a * b << endl;  // 30
cout << a / b << endl;  // 3 (整数除法)
cout << a % b << endl;  // 1 (取模)
```
### 2.2 关系与逻辑运算符
```c
cout << (a > b) << endl;   // true (1)
cout << (a == b) << endl;  // false (0)
cout << (true && false) << endl; // false
cout << (!true) << endl;   // false
```
## 三、控制结构
### 3.1 条件语句
```c
// if-else
if (score >= 90) {
    grade = 'A';
} else if (score >= 60) {
    grade = 'B';
} else {
    grade = 'C';
}

// switch-case
switch (grade) {
    case 'A': 
      bonus = 1000; 
    break;
    case 'B': 
      bonus = 500; 
    break;
    default: 
      bonus = 0;
}
```
### 3.2 循环结构 for
```c
for (int i = 0; i < 10; i++) {
    cout << i << " ";
}
```

### 3.3  while循环
```c
int j = 0;
while (j < 10) {
    cout << j++ << " ";
}
```
### 3.4 do-while循环
先执行，后判断
* do-while 先执行循环体，后判断循环条件
* 如果循环条件成立，则再次执行循环体，否则结束循环
```c
int k = 0;
do {
    cout << k++ << " ";
} while (k < 10);
```