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

- 字节（Byte）是计算机存储数据的最小单元
- 占字节数越多的数据类型，容量越大（能存储的数值范围越大）

| 类型        | 说明                 | 示例                                         |
| ----------- | -------------------- | -------------------------------------------- |
| int         | 整型 4 字节          | int age = 25;                                |
| long long   | 长整型 8 字节        | int age = 25;                                |
| float       | 单精度浮点 4 字节    | float price = 9.99f; (7 位有效数字)          |
| double      | 双精度浮点 8 字节    | double pi = 3.1415926; (15 ～ 16 位有效数字) |
| long double | 长双精度浮点 16 字节 |
| char        | 字符 1 字节          | char grade = 'A';                            |
| bool        | 布尔 1 字节          | bool is_valid = true;                        |
| void        | 无类型               | void func();                                 |

#### 求数据类型长度-sizeof(变量｜数据类型｜数值)

- 返回数据类型 `占用的字节数`
- sizeof()的优先级比 \*、/、%的优先级高

### 1.4 输出

- 格式化输出

格式化输出所用的函数为 printf，它可以输出任意位数的小数。

使用格式：printf(“%.nf”,a)。这句话的作用是将变量 a 保留 n 位小数输出。

> 注意事项：
>
> - 这里的 n，需要具体化为一个数字，保留几位小数，如保留两位小数，n 就改成 2，保留三位小数，n 就改成 3;
> - %后面的小数点一定不能漏掉。
> - 使用 printf 的时候，一定要注意加上头文件`#include<cstdio>`

![图片](../assets/imgs/c++_printf.jpg)

- fixed 配合 setprecision(n) 可以控制 cout 语句中浮点数的输出精度
- 头文件 `<iomanip>`

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

### 3.3 while 循环

```c
int j = 0;
while (j < 10) {
    cout << j++ << " ";
}
```

### 3.4 do-while 循环

先执行，后判断

- do-while 先执行循环体，后判断循环条件
- 如果循环条件成立，则再次执行循环体，否则结束循环
- 循环体至少会执行一次

```c
int k = 0;
do {
    cout << k++ << " ";
} while (k < 10);
```

### 3.5 循环嵌套

- 一个循环体包着另一个完整的循环结构称为循环嵌套。外层循环控制行， 内层循环控制列，
- 外层循环执行一次，内层循环全部执行，然后执行下一次外循环，直到外循环执行完毕，整个流程结束。

* 生成动态三角型
```c
for(int i = 1; i<=20; i++){
  for(int i = 1; i<=20; i++){
    cout<< " * ";
  }
  cout<< endl;
}
```
* 等腰三角形
```c
#include <iostream>
using namespace std;
int main() {
  int n;
  cin>> n;
  for(int i=1; i<=n; i++){
    for(int j=1; j<= n-i; j++){
      cout<< " ";
    }
    for(int j=1; j<= 2*i-1; j++){
      cout<< "*";
    }
    cout<< endl;
  }
  return 0;
}

// 5
//     *
//    ***
//   *****
//  *******
// *********
```
### 3.6 内循环中的 break 语句

内循环 j = 3 时，执行break, 结束内循环，所以内循环只进行了2次循环
```c
#include <iostream>
using namespace std;
int main() {
  for (int i = 1; i <= 4; i++)
  {
    cout<< "外层循环"<< i << endl;
    for (int j = 1; j <= 4; j++){
      if(j == 3){
        break;
      }
      cout<< "   内层循环" << j << endl;
    }
  }
  return 0;
}
// 外层循环1
//    内层循环1
//    内层循环2
// 外层循环2
//    内层循环1
//    内层循环2
// 外层循环3
//    内层循环1
//    内层循环2
// 外层循环4
//    内层循环1
//    内层循环2
```

* 借助标记 `symbol` 跳出多重循环

```c
#include <iostream>
using namespace std;
int main() {
  int symbol = 0;
  for (int i = 1; i <= 4; i++)
  {
    cout<< "外层循环"<< i << endl;
    for (int j = 1; j <= 4; j++){
      if(j == 3){
        symbol = 1;
        break;
      }
      cout<< "   内层循环" << j << endl;
    }
    if(symbol == 1) {
      break;
    }
  }
  return 0;
}
// 外层循环1
//    内层循环1
//    内层循环2
```
### 3.7 continue 与 多重循环
* continue 只影响它所在层的循环，结束本次内循环，继续进行下一次内循环。外循环不受影响

### 3.8 九九乘法表
* 外层循环 i 控制行， 内层循环 j 控制列，输出的值为 i*j
```c
#include <iostream>
#include <iomanip>
using namespace std;
int main()
{
  int i, j;
  for (i = 1; i <= 9; i++)
  {
    for (j = 1; j <= i; j++)
    {
      cout << j << '*' << i << '=' << setw(2) << i * j << " ";
    }
    cout << endl;
  }
  return 0;
}

// 1x1= 1 
// 1x2= 2 2x2= 4 
// 1x3= 3 2x3= 6 3x3= 9 
// 1x4= 4 2x4= 8 3x4=12 4x4=16 
// 1x5= 5 2x5=10 3x5=15 4x5=20 5x5=25 
// 1x6= 6 2x6=12 3x6=18 4x6=24 5x6=30 6x6=36 
// 1x7= 7 2x7=14 3x7=21 4x7=28 5x7=35 6x7=42 7x7=49 
// 1x8= 8 2x8=16 3x8=24 4x8=32 5x8=40 6x8=48 7x8=56 8x8=64 
// 1x9= 9 2x9=18 3x9=27 4x9=36 5x9=45 6x9=54 7x9=63 8x9=72 9x9=81 
```
## 四、一维数组
### 4.1 数组定义
* `数组`是一组`数据类型相同`的数,没个数称为 `数组的元素`
* 声明数组：数据类型、数组名和数组长度
* 数组长度可以用整型常量，或常量表达式指定
* 数组长度不能小于 0 
```c
int n[5] = {110, 112,113,120,123}; //身高数组
int x;
cin>> x; //老师报数
cout<< n[x-1] // 输出对应位置的学生的身高
```

* 不同类型的数组声明
* 初始值的个数必须 <= 数组长度 （可以少，不能多）`避免数组越界`
```c
int a1 = [5] = {1,2,3,4,5};
float a2 = [10];
char a3 = [20];
```
### 4.2 访问数组的元素
* 用数组名和`下标`来唯一地访问数组中的元素，如 `a[0]`表示访问第一个元素
* 下标代表元素在数组中的序号
* 任何一个数组 `第一个`元素的下标都为 `0`, 任何一个数组的`最后一个`元素的下标都为 `数组长度 - 1`
```c
int a[3] = {1,2,3}
// a[0] = 1
// a[1] = 2
// a[2] = 3
```

### 4.3 循环遍历数组

```c
#include <iostream>
using namespace std;
int main()
{
  int a[5] = {1, 2, 3, 4, 5};
  // 写法一  for 循环从0 到长度，下标：1
  for (int i = 0; i <= 4; i++) {
    cout<< arr[i] << " ";
  }
  // 写法二 for 循环从1 到长度，下标：i-1
    for (int i = 1; i <= 5; i++) {
    cout<< arr[i-1] << " ";
  }
  return 0;
}
```
 * 正序输入，变逆序输出
 ```c
#include <iostream>
using namespace std;
int main()
{
  int a[100] = {0};
  int n = 0;
  cin>> n;
  for (int i = 0; i <=n-1; i++) { // 输入
    cin>> arr[i] << " ";
  }
    for (int i = n-1; i >= 0; i--) { // 输出
    cout<< arr[i] << " ";
  }
  return 0;
}
```
