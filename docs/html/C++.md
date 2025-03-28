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
| 类型   | 说明  | 示例   |
|--------|--------|--------|
| int   | 整型 | int age = 25; |
| float   | 单精度浮点 | float price = 9.99f; |
| double   | 双精度浮点 | double pi = 3.1415926; |
| char   | 字符 | char grade = 'A'; |
| bool   | 布尔 | bool is_valid = true; |
| void   | 无类型 | void func(); |


## 二、运算符与表达式
### 2.1 算术运算符
```c
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
### 3.2 循环结构
```c
// for循环
for (int i = 0; i < 10; i++) {
    cout << i << " ";
}

// while循环
int j = 0;
while (j < 10) {
    cout << j++ << " ";
}

// do-while循环
int k = 0;
do {
    cout << k++ << " ";
} while (k < 10);
```