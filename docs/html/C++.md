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
1) `常量`是指在程序运行中值不能改变的量。
2) 常量的`命名规则遵循变量的命名规则`。
3) 但是为了容易与变量区别开，推荐用大写字母和下划线命名常量。
4) `常量的声明和赋值必须同时完成`。
5) 声明常量语句用`关键字 const` 开头。
6) `常量的值一经赋值后不能再被改变。`
```C
int a = 10;                // 整型变量
const double PI = 3.14159;  // 常量
auto x = 3.14;             // 自动类型推断
```

### 1.3 基本数据类型

- 字节（Byte）是计算机存储数据的最小单元
- 占字节数越多的数据类型，容量越大（能存储的数值范围越大）

| 类型        | 说明                 | 示例                                         | 数值范围 
| ----------- | -------------------- | -------------------------------------------- |-------------------------------------------- |
| char        | 字符 1 字节 （8 位）         | char grade = 'A';                            | 0 -225
| short      | 短整型 2 字节         | short grade = 10;                            | -32768 到 32767
| bool        | 布尔 1 字节          | bool is_valid = true; if (a > 10) 中的条件结果就是一个布尔值 |
| int         | 整型 4 字节          | int age = 25;                                |  -2147483648 到 2147483647 最大值是 20 亿
| long long   | 长整型 8 字节        | int age = 25;                                | -9223372036854775808 到 9223372036854775807 900 亿亿
| float       | 单精度浮点 4 字节    | float price = 9.99f; (7 位有效数字)          |
| double      | 双精度浮点 8 字节    | double pi = 3.1415926; (15 ～ 16 位有效数字) |
| long double | 长双精度浮点 16 字节 |

| void        | 无类型               | void func();                                 |

#### 求数据类型长度-sizeof(变量｜数据类型｜数值)

- 返回数据类型 `占用的字节数`
- sizeof()的优先级比 \*、/、%的优先级高

### 1.4 格式化输入输出
* 不同类型的变量对应的格式控制符不同
* `%表示格式`的起始符号，不可缺少
* 整型数据类型都必须有 `d`
* 浮点型都必须有 `f` -> float `lf` -> double `LF` -> long double
* l、L 是长度修饰符
#### 1. 格式化输出

格式化输出所用的函数为 printf，它可以输出任意位数的小数。

使用格式：printf(“%.nf”,a)。这句话的作用是将变量 a 保留 n 位小数输出。

> 注意事项：
>
> - 这里的 n，需要具体化为一个数字，保留几位小数，如保留两位小数，n 就改成 2，保留三位小数，n 就改成 3;
> - %后面的小数点一定不能漏掉。
> - 使用 printf 的时候，一定要注意加上头文件`#include<cstdio>`

![图片](../assets/imgs/c++_printf.jpg)
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
#### 2. 格式化输入函数 scanf()
* 格式：`scanf("格式控制符",变量地址)`。
* 例如，要输入一个整型的变量 a，就可以表示成 `scanf("%d",&a)`。其中，“&”为取地址符，`“&a”`表示取变量 a 的地址。
> 输入多个数据时，如果是整型或浮点型，`必须用分隔符`（空格或回车）隔开；`数值与字符`之间，
> `字符和字符`之间`不要加分隔符`（否则会把分隔符当做需要输入的字符）。
```c
#include <iostream>
using namespace std;
int main() {
  int num;
  float flt;
  char ch;
  scanf("%d%f%c", &num,&flt,&ch);
  cout<< num << " " << flt << " " << ch;
  return 0;
}
// 2 2.5a
// 2 2.5 a
```
#### 3. cout 精度控制
* fixed 配合 setprecision(n) 可以控制 cout 语句中浮点数的输出精度
- 头文件 `<iomanip>`

```c
cout << setprecision(4) << 3.1415926;  // 输出 3.142（四舍五入，4位有效数字）
cout << fixed << setprecision(4) << 3.1415926;  // 输出 3.1416（4位小数）
```
#### 4 填充和对齐 setw()
* cout语句实现输出时控制数据宽度
* `setw()`函数是` <iomanip>头文件`中的一个函数，用于设置输出的字段宽度，通过setw()函数，可以`指定输出的字符或数字占据的宽度`，不足的部分会用`空格`进行填充。
* setw(n)：设置字段宽度为n，不足部分用填充字符填充。
* setfill(c)：设置填充字符为c（默认是空格）。
* left/right/internal：设置左对齐、右对齐或内部对齐（符号左对齐，数值右对齐）。
```c
cout << setw(10) << setfill('*') << left << 123;  // 输出 "123*******"
cout << setw(10) << setfill('*') << right << 123;  // 输出 "*******123"
cout << setw(10) << setfill('*') << internal << -123;  // 输出 "-*******123"
```
![图片](../assets/imgs/yunsuanfu_1.png)
![图片](../assets/imgs/yunsuanfu_2.png)
```c
#include <iostream>
#include <cstdio>
using namespace std;
int main() {
  int x = 123;
  printf("%5d\n", x);
  printf("%-5d\n", x);
  return 0;
}
//   123
// 123  
```
### 1.5 ++a/a++

* ++a和--a分别是`前置自增运算符`和`前置自减运算符`
1) a++ / a-- 变量在前，先用变量参与其他计算，再进行自增、自减。
2) ++a / --a 变量在后，先进行自增、自减，再用变量参与其他计算。

#### 1. 运算效果
* ++a：将变量a的值加 1
```c
int a = 5;
++a;  // a 变为 6
```
* --a：将变量a的值减 1
```c
int a = 5;
--a;  // a 变为 4
```
#### 2. 返回值与表达式优先级
* 返回值与表达式优先级
++a：先将a的值加 1，再返回加 1 后的值
```c
int a = 5;
int b = ++a;  // a 先变为 6，然后将 6 赋值给 b
// 最终：a=6, b=6
```
--a：先将a的值减 1，再返回减 1 后的值
```c
int a = 5;
int b = --a;  // a 先变为 4，然后将 4 赋值给 b
// 最终：a=4, b=4
```
#### 3. 与后置运算符的对比
* 前置运算符（++a/--a）先运算再返回值，而后置运算符（a++/a--）先返回原值再运算。
```c
int a = 5;
int b = a++;  // 先将 a 的原值 5 赋值给 b，再将 a 加 1
// 最终：a=6, b=5
```
![图片](../assets/imgs/c_yunsuanfu.png)
### 1.6 整数和浮点数的混合运算
* `混合运算`是指`不同数据类型`的运算对象在同一个表达式里参与运算,比如345+0.2*23里有整数也有浮点数。混合运算时会发生`类型转换`
* 表达式中同时有 int 和 float 时，`int 向 float 转换`

### 1.7 科学计数法
* 把一个数表示成 a 与 10 的 n 次幂相乘的形式（1≤|a|<10，a 不为分数形式，n 为整数），这种记数法叫做`科学记数法`

![图片](../assets/imgs/c_kexuejishufa.png)

```c 
double  a = 8000000000; //等同于 double a = 8E+9;
float b = 0.00001; // 等同于 float b = 1.0E - 5
```

### 1.8 char 字符
* 字符常量被存储在计算机的存储单元中时，是以其 ASCII 值的形式存储的。
* ASCII 编码的全称是：American Standard Code for Information Interchange （美国
国家标准信息交换代码），对 `128` 个字符进行了编码，`一个字符对应一个 ASCII 编码值`，编
码值的范围是 0~127
```c
const char c = 'a'; //声明字符型常量的语句
char i; //声明字符型变量的语句
char c = 'a';
```
C++中的字符常量有两种：
1) 普通字符: 用单引号标识的一个字符，如'b'、'y'、'?'。
2) 转义字符: 有一些特殊的字符，C++通过单引号内的反斜杠\把后面的字符转成别的
含义。例如，'\n'代表换行，'\r'代表回车，'\''代表单个单引号。
![图片](../assets/imgs/char.png)
![图片](../assets/imgs/ascii.png)

* 常用字符的编码值和位置关系

| 字符 | ASCII值 |
| ----- | -----|
| 空格 | 32|
| 0 | 48|
| 9 | 57|
| A | 65|
| a | 97|
| Z | 90|
| z | 122|

#### 字符输入输出函数 getchar()和 putchar()
* `getchar()`可以从键盘`输入`字符，包括可显示字符和不可显示字符,不过一次只能得到
一个字符；
*` putchar()` 可以把单个字符`输出`到显示器；
* 要使用这两个函数，必须在程序开始部分包含头文件 `<cstdio>`。
```c
#include <iostream>
#include <cstdio>
using namespace std;
int main() {
  char c;
  c= getchar();
  putchar(c);
  return 0;
}
// A
// A
```
```c
#include <iostream>
using namespace std;
int main() {
  char c;
  cout<< "输入一个字符（A～Z）:";
  cin>> c;
  c = (c - 'A' + 3) % 26 + 'A';
  cout<< c;
  return 0;
}
// 输入一个字符（A～Z）: A
// D    
```
```c
#include <iostream>
using namespace std;
int main()
{
  char a, b;
  cin >> a >> b;
  cout << int(a) << " " << int(b) << endl;
  return 0;
}
// A a
// 65 97
```

### 1.9 取整函数
* 要使用这些数学函数，必须在程序头包含 cmath 头文件：`#include<cmath>`
* `floor 向下取整`，它返回的是小于或等于函数参数,并且与之最接近的整数。
* `ceil 向上取整`，它返回的是大于或等于函数参数,并且与之最接近的整数。
* `round 四舍五入`

![图片](../assets/imgs/quzhenghanshu.png)

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
![图片](../assets/imgs/c_fuhe.png)

### 2.2 关系与逻辑运算符

```c
cout << (a > b) << endl;   // true (1)
cout << (a == b) << endl;  // false (0)
cout << (true && false) << endl; // false
cout << (!true) << endl;   // false
```
![图片](../assets/imgs/yunsuanfu2.png)
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

```
#### switch语句
* switch 语句中“表达式”的`值不能是浮点型值`，必须`是整型、字符型或者布尔型的值`
* 每个常量值对应一个 case，`不能出现重复的常量`
* 当“表达式”的值等于 case 中的常量时，case 后跟的语句将被执行，直到遇到break语句为止。
* 一个 switch 语句可以有一个可选的 default 分支，一般出现在switch 的结尾。default 分支里的语句在上面所有 case 都不为真时被执行。
* `break 可选`。如果当前 case 语句不包含 break，将会继续后续的case，直到遇到break 或“}”为止。
* 执行到 break 时，立即结束（跳出）该 switch 语句，系统将执行switch 语句后面的其他语句。
```c
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
While 循环的执行过程是：
* `先判断循环条件`，如果条件成立，则执行一次循环体
* 执行一次循环体后，再次判断循环条件，如果成立则继续执行一次循环体，然后再看判断条件……
* 如此往复直到判断条件不成立时，退出循环
while 语句的特点：`先判断表达式，后执行循环体语句`。如果表达式的值一开始就为假，则一次循环体也不执行。
```c
int j = 0;
while (j < 10) {
    cout << j++ << " ";
}
```

#### while 循环求和
* 方法一：
```c
#include <iostream>
using namespace std;
int main() {
  int n;
  cin>> n;
  int i = 1, sum = 0;
  while (i<=n){
    sum = sum + i;
    i++;
  }
  cout<< sum;
  return 0;
}
```
* 方法二:
```c
#include <iostream>
using namespace std;
int main() {
  int n;
  cin>> n;
  int i = n, sum = 0;
  while (i>=1){
    sum = sum + i;
    i--;
  }
  cout<< sum;
  return 0;
}
```

#### while找数
编写一个小程序。输入一个数 n，输出 1~n 之间（包含1 和n）所有既能被 3 整除又能被 5 整除的数。
```c
#include <iostream>
using namespace std;
int main() {
  int n;
  cin>> n;
  int i = 1;
  while (i<= n){
    if(i % 3 ==0 && i %5==0){
      cout<< i<<endl;
    }
    i++;
  }
  return 0;
}
```
### 3.4 do-while 循环

先执行，后判断
- `do 是关键字`，用于说明 do-while 循环开始。
- do-while 语句先`执行循环体，再判断循环条件`，即不管循环条件是否为真，至
少会执行一次循环体。

```c
int k = 0;
do {
    cout << k++ << " ";
} while (k < 10);
```
### break / continue
break 语句的作用是强制结束循环体(即使循环还没有执行完)，转向执行循环外的下一
条语句。

而 continue 语句的作用是`强制结束本次循环`，开始下次循环，即跳过循环体中 continue
语句之后的语句，重新判断循环条件。

break 和 continue 都是强制结束循环，所不同的是 `break 是完全终止循环`，而 `continue只终止本次循环，重新判断条件以继续下次循环`。

```c
#include <iostream>
using namespace std;
int main() {
  for (int i = 1; i <= 5; i++){
    if(i % 2 == 0 ) {
      continue;
    }
    cout<< "Hello "<<i<<endl;
  }
  return 0;
}
// Hello 1
// Hello 3
// Hello 5
```
* 编写一个程序，输入两个整数 x，y，找出 1000 以内，既不是 x 的倍数也不是 y 的倍数的最大数。
```c
#include <iostream>
using namespace std;
int main() {
  int x, y;
  cin>> x >> y;
  for (int i = 1000; i >= 1; i--){
    if((i % x != 0) && (i % y != 0 )){
      cout<< i;
      break;
    }
  }
  return 0;
}
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
* `数组`是一组`数据类型相同`的数,每个数称为 `数组的元素`
* 声明数组：数据类型、数组名和数组长度
* 数组长度可以用整型常量，或常量表达式指定
* 数组长度不能小于 0 
* 初始值的个数必须>数组长度
* 任何一个数组` 第一个`元素的下标 都为` 0` ，任何一个数组 `最后一个`元素的下标都为`数组的长度 - 1`

定义
```c
// 部分初始化，可以只给数组中的一部分元素赋值， 未赋值的部分元素自动设定为 0
int a[3]={1,2};

// 不指定数组长度初始化。
int a[]={1,2,3}; 
```
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

### 4.3 交换两个元素
* 通过一个临时变量实现交换
```c
#include <iostream>
using namespace std;
int main() {
  int arr[6] = {1,2,3,4,5,6};
  int i,j; // 位置下标
  int temp;
  cin>> i >> j;
  // 临时变量法
  temp=arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  // 输出
  for (int j = 0; j <6; j++) {
    cout << arr[j] << " ";
}
  return 0;
}

// 2 3
// 1 2 4 3 5 6
```

### 4.4 插入一个值到指定位置
* 1. 从插入位置开始，将后续元素逐个后移。
* 2. 在目标位置赋值新元素。
```c
#include <iostream>
using namespace std;
int main() {
    int arr[10] = {1, 2, 3, 4, 5}; // 预留空间
    int length = 5;                // 实际长度
    int pos, value; // 插入位置（从0开始）pos 需要插入的值 n
    cin >> pos >> value;
    // 元素后移
    for (int i = length; i > pos; i--) {
        arr[i] = arr[i-1];
    }
    // 插入新元素 , 长度会变长
    arr[pos] = value;
    length++;
    // 输出数组
    for (int i = 0; i < length; i++) {
        cout << arr[i] << " ";
    }
    return 0;
}
// 3 99
// 1 2 99 3 4 5
```
### 4.5 删除指定位置的值
* 从删除位置开始，将后续元素逐个前移。
* 减少数组实际长度。
```c
#include <iostream>
using namespace std;
int main() {
  int arr[10] = {1, 2, 3, 4, 5}; // 预留空间
  int length = 5;                // 实际长度
  int pos; // 删除位置（从0开始）
  cin>> pos;
  // 元素前移
  for (int i = pos; i < length -1; i++){
    arr[i] = arr[i + 1];
  }
  length--; // 实际长度减1
   // 输出数组
   for (int i = 0; i < length; i++) {
    cout << arr[i] << " ";
}
  return 0;
}

// 3
// 1 2 3 5
```
### 4.6 循环移位（第一个元素移到最后，其他元素往前移）
* 循环移位是将数组元素整体移动指定位置，末尾元素会 "循环" 到数组开头
* 数组定义：使用 int a[] = {1, 2, 3, 4, 5}; 定义数组并初始化。
* 临时变量：用 temp 存储 a[0] 的值。
* 元素前移：通过 for 循环将数组从 a[1] 到 a[4] 的元素依次往前移动一位。
* 放回末尾：将 temp 中存储的原 a[0] 的值放入 a[4]（数组最后一位）。
* 输出结果：遍历数组，输出移位后的结果。

```c
#include <iostream>
using namespace std;
int main()
{
 int arr[] = {1, 2, 3, 4, 5};
  // int length = sizeof(arr) / sizeof(arr[0]);// 计算数组长度
  int length = 5; // 实际长度
  // 1. 将 arr[0] 的值放入临时变量
  int temp = arr[0];
  // 2. 其他元素往前移
  for (int i = 0; i < length - 1; i++){
    arr[i] = arr[i + 1];
  }
  // 3. 临时变量的值放入 arr[5]
  arr[length - 1] = temp;
  // 输出数组
  for (int i = 0; i < length; i++){
    cout << arr[i] << " ";
  }
  return 0;
}
// 2 3 4 5 1 
```

### 4.7 纸杯猜数
* 编写一个程序，模拟纸杯猜数的过程。纸杯数 n（1≤n≤50000），交换次数 m。
* 【输入】第一行输入两个数 n、m，分别表示纸杯数、交换次数。
* 第二行输入 n 个数，分别表示每个纸杯内侧的数字。之后 m 行，每行两个数 u、v，表示将这两个位置的纸杯交换。
* 【输出】输出一行 n 个数，表示交换后每个纸杯内侧的数字依次是多少。以空格隔开。
```c
#include <iostream>
using namespace std;

int main() {
  // n 个数 交换 m次   u、v，表示将这两个位置的纸杯交换。
  int a[100] = {}, n , m , u ,v;
  int temp;
  cin>> n>>m; // 输入纸杯数n 交换次数 m
  for (int i = 1; i <=n; i++){
    cin>> a[i];
  }
  for (int i = 1; i <= m; i++){ //进行 m 次 交换
    cin>> u >> v;
    temp = a[u];
    a[u] = a[v];
    a[v] = temp;
  }
  for (int i = 1; i <= n; i++){
    cout<< a[i]<< " ";
  }
  return 0;
}

// 5 2   5个数交换2次
// 1 2 3 4 5  输入的5个数
// 1 2   1 和 2 交换
// 4 5   5 4 交换
// 2 1 3 5 4  输出结果
```

### 4.8 排序算法
* 常用的排序算法有`冒泡排序`、`选择排序`、`插入排序`、桶排序、归并排序、希尔排序、快速排序等。不同的排序算法适用于
* 不同场景，各有特点。

1. 冒泡排序

* 冒泡排序是一种基础的基于`交换`的排序方法。
* 思路是`相邻的元素两两比较`，较大的数下沉，较小的数冒起来，这样一趟比较下来，最大(小)值就会排列在一端。整个过程如同气泡
冒起，因此被称作`冒泡排序`。
![图片](../assets/imgs/maopao1.png)
![图片](../assets/imgs/maopao2.png)
![图片](../assets/imgs/maopao3.png)
![图片](../assets/imgs/maopao4.png)
![图片](../assets/imgs/maopao5.png)

* n 个数进行冒泡排序需要进行几趟冒泡？答案是` n-1 次冒泡`。那么每
* 次冒泡时，两两比较交换的下标范围有什么规律？从前面的 6 个数的冒泡排序数据中我们可
* 以看出，`第 i 躺冒泡需要进行比较的下标 j 的范围是：0~数值长度-i-1`
* `比较、交换相邻的元素` if(a[j] > a[j+ 1]) 交换 a[j] 和 a[j+1]

* 从小到大：比较条件为 arr[j] > arr[j+1]。（升序）
* 从大到小：比较条件为 arr[j] < arr[j+1]。（降序）

```c
#include <iostream>
using namespace std;

int main(){
  int arr[] = {64, 34, 25, 12, 22, 11, 90};
  int length = sizeof(arr) / sizeof(arr[0]); //计算数组长度
  for (int i = 0; i < length - 1; i++){
    for (int j = 0; j < length - i - 1; j++){
      // 如果前一个元素大于后一个元素，则交换他们
      if (arr[j] > arr[j + 1]){
        // 交换 arr[j] 和 arr[j+1]
        int temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  cout << "从小到大排序结果：";
  for (int i = 0; i < length; i++){
    cout << arr[i] << " ";
  }
  return 0;
}
// 输出：11 12 22 25 34 64 90
```

## 五、二维数组
* 定义二维数组时，数组名后跟两个方括号，分别指定行数和列数
* int a[4][8];定义了一个二维数组，这个二维数组可以存放 4 行 8 列的整数
1) 数据类型表示数组中所有元素的类型，可以是任何 C++的合法数据类型，例如 int、
float、char...
2) 数组名表示该数组变量的名称。
3) 行数和列数可以用整型常量，或常量表达式指定。
4) 行数和列数分别表示这个二维数组有多少行、多少列数据。
5) 行数也可以理解为这个二维数组由几个一维数组组成，相应的列数表示每个一个数
组的长度是多少。

### 5.1 初始化二维数组
```c
// 列出全部的初始值，数值之间用逗号隔开：数值先填充第一行，再填充第二行
// 1 2 3
// 1 1 1
int a[2][3] = {1,2,3,1,1,1}
//  逐行列出初始值，每行用{}标注，行之间用逗号隔开
// 也就是初始值列表有两层大括号，内层的大括号表示同一行的数据。{1,2,3}是第一行的
// 数据，{1,1,1} 是第二行的数据。
// 1 2 3
// 1 1 1
// 推荐，直观，清晰
int a[2][3] = {{1,2,3}, {1,2,3}};

// 不指定行数的初始化 定义二维数组的同时进行初始化，可以不指定行数，但是必须明确指定列数。数组的行
// 数由{ }内数据的个数决定。
// 写法一
int a[][3] = {{1,2,3}, {1,2,3}};
// 写法二
int a[][3] = {1,2,3,1,1,1}

int d2[4][2] = {{1},{2},{3},{4}}
// 不足的用 0 补
// 1 0
// 2 0
// 3 0
// 4 0
```

### 5.2 访问二维数组的元素

需要同时指定`行下标`和`列下标`来唯一地访问数组中的元素,行下标与列下标都是从 0 开始的,如 a[0][0]表示访问二维数组 a 的第一个元素

第一个[]里是行下标，第二个[]里是列下标。
* 1. 行下标的有效范围是 `0~行数-1`
* 2.  列下标的有效范围是 `0~列数-1`
* 3. 下标的取值`不应超出有效范围`，越界访问有未知的风险
* 4. 同一行元素的行下标相同，同一列元素的列下标相同

![图片](../assets/imgs/arr_two.png)

### 5.3 遍历二维数组
```c
#include <iostream>
using namespace std;
int main() {
  int a[4][3];
  for (int i = 0; i < 4; i++){
    for (int j = 0; j < 3; j++){
      cin>> a[i][j];
    }
  }
  // 输出
  for (int i = 0; i < 4; i++){
    for (int j = 0; j < 3; j++){
      cout<< a[i][j] << " ";
    }
    cout<< endl;
  }
  return 0 ;
}
// 输入
// 1 2 3 
// 4 5 6
// 7 8 9
// 10 11 12

// 输出
// 1 2 3 
// 4 5 6 
// 7 8 9 
// 10 11 12 
```

#### 编程挑战
* 士兵按照 n 行 m 列站成方阵，n 与 m 均不超过 20 。请输出最高的士兵的身高，以及他站在哪一行哪一列。
* 【输入】第一行两个正整数 n 与 m ，代表有 n 行 m 列士兵。再输入 n 行，每行 m 个浮点数，代表每位士兵的身高。
* 【输出】两 行，第一行两个整数，代表身高最高的士兵站在哪一行哪一列。第二行，他的身高值。

【输入样例】3 4

1.76 1.78 1.70 1.80

1.82 1.86 1.68 1.70

 1.72 1.79 1.82 1.88
 
【输出样例】3 4

1.88
```c
#include <iostream>
using namespace std;
int main() {
  float a[20][20] = {0};
  int n,m;
  float max; 
  int row,col;
  cin>> n>> m;
  // 输入值 到二维数组
  for (int i = 0; i < n; i++){
    for (int j = 0; j < m; j++){
      cin>> a[i][j];
    }
  }
  max = a[0][0];
  // 遍历找出最大值
  for (int i = 0; i < n; i++){
    for (int j = 0; j < m; j++){
      // 将每个元素跟max进行比较 ，遍历找对大值，
      if(a[i][j] > max){
        max = a[i][j];
        // 行 列 下标转成现实中行列编号- 记录位置
        row = i + 1;
        col = j + 1;
      }
    }
  }
  cout<< row << " "<< col<< endl;
  cout<< max;
  return 0;
}

// 3 4 - 3行4列
// 输入数据
// 1.76 1.78 1.70 1.80
// 1.82 1.86 1.68 1.70
// 1.72 1.79 1.82 1.88

// 3 4 下标
// 1.88 最大值
```


## 六 字符数组
### 6.1定义
* `字符数组`是指元素为`字符类型`的数组
* char s1[5]; 定义了一维字符数组 s1，有 5 个字符元素。第一个元素是s1[0]，最后一个是 s1[4]
* char s2[3][5];定义了二维字符数组 s2，s2 由 3 个长度为 5 个的一维字符数组组成，或者说是一个 3 行 5 列的二维字符数组。第一个元素是 s2[0][0]，最后一个是s2[2][4]。
* 字符数组可以用来存放字符序列或字符串。

> 字符与字符串的区别：
1. 两者的标识符不同，字符常量由`单引号`括起来，字符串常量由`双引号括`起来。
2. 字符常量只能是单个字符或转义字符，字符串常量则可以由多个字符组成。
3. 字符常量占`一个字节`，而字符串常量占用字节数等于字符串的字节数加1。增加的一个字节中存放`字符串结束标志'\0'`。

例如，字符常量'a'占一个字节，字符串常量 "a"占二个字节('a'和'\0')。`'\0'是 c++语言中的字符串结束符，在 ASCII 字符集中对应空字符NULL，数值为0`。


|         |                  |标识符| 字节数  | 数据 
| ----------- | -----| --|-------|-------|
| 字符常量        | 'a'         | '' |1   |  'a'
| 字符串常量        | "a"         | "" |2   |  'a' '\0'

* 字符初始化
```c
char s[5] = {'a', 'b', 'c', 'd', 'e'};
// 没有初始值的元素初始化为整数 0，不是字符‘0’。ASCII 编码 0 对应空字符
char s[5] = {'a', 'b', 'c', 'd'};

```

* 字符串初始化

```c
// 用字符串初始化时，{ }可省略
// 当用字符串进行初始化时，字符串实际长度（包含'\0'）不能>字符数组长度，或者字符串有效长度（不包含'\0'）不能>字符数组长度-1。
char s[5] = "abcde"; // error: chars is too long
char s[6] = "abcde"; // error: chars is too long

//字符串以字符结束符'\0'结束，当把一个字符串存入一个数组时，'\0'也会被存入数组。
char s[5] = {"abcd"}


char s[2][5] = {"abcd", "1234"}
// 'a' 'b' 'c' 'd' '\0'
// '1' '2' '3' '4' '\0'

// 一个字符对应一个元素
char s2[4][3] = {'a','b', 'c', 'd' };
// 一个字符串对应数组中的一行
char s2[4][3] = {"a","b","c","d" };

```

### 6.2 输入 getline(变量名，长度)
* 用 cin 从键盘输入一串字符时，字符中`不能有空格`，若有空格则`只读入第一个空格之前的内容`。

* 用 `cin.getline` 函数输入带空格字符串 `cin.getline( 字符数组 s, 数组长度 N )`，`第一个参数是放入字符串的字符数组`，`第二个参数是这个字符数组的长度`。用这个函数可以一次性读入一行字符串，遇到换行符’\n’或者这个字符数组放满时结束读入。
* `允许字符串中出现空格`。
* `puts(char *s)`是默认的 c++函数，输出字符数组的内容，并换行
```c
#include <iostream>
using namespace std;
int main() {
  char s[20];
  cin>> s; // Hello World
  cout<< s << endl; // Hello

  cin.getline(s, 20); // Hello World
  puts(s); // Hello
  return 0;
}
```

### 6.3 strlen()获取字符数组有效长度 
* 存放在字符数组中的字符串的长度和数组长度是不一样的，比如char s[10]=”ab d”;字符串的长度是 4，数组长度是 10
* C++提供 `strlen(char *s)返回字符串长度`，这个长度`不包含结束符'\0'`。比如以下代码：strlen(s)返回的是 4，而不是 10。【注意】使用 strlen()函数需要`#include<cstring>`。
```c
#include <iostream>
#include <cstring> // For strlen function
using namespace std;
int main() {
  char s[10] = "ab c";
  cout<< strlen(s) << endl; // Output the length of the string
  return 0;
}
```

### 6.4 strcmp()函数比较两个字符数组
* 对两个字符串进行大小比较也是常用功能。C++提供了 strcmp()函数，可以比较两个字符数组中的字符串的大小。
* `#include<cstring>`

```c
#include<iostream>
using namespace std;
int main() {
  char s1[10]={};
  char s2[10]={};
  cin>> s1 >> s2; // 输入两个字符串
  int k = strcmp(s1, s2); // 使用strcmp函数比较两个字符串
  if (k == 0) {
    cout<< "相等" << endl; // 如果相等，输出"相等"
  } else if (k > 0) {
    cout<< "s1大于s2" << endl; // 如果s1大于s2，输出"s1大于s2"
  } else {
    cout<< "s1小于s2" << endl; // 如果s1小于s2，输出"s1小于s2"    
  }
  return 0 ;
}
```

### 6.5 数组字符串循环
例题：输入一个字符串，表示一条 DNA 序列。这个字符串只含有大写字母A、T、 G、 C ，分别表示腺瞟呤、胸腺嘧啶、鸟嘌呤和胞嘧啶。字符串长度不超过255。配对规律是固定的，即是：A-T,C-G。

【输入】一行，只含有大写字母 A、T、 G、 C 的字符串，长度不超过255。

【输出】一行，与输入字符串按照 DNA 配对规律互补的字符串
* 【输入样例】ATTCGGTCAGTTGACC
* 【输出样例】TAAGCCAGTCAACTGG

```c
#include <iostream>
#include <cstring> // For strcmp function
using namespace std;
int main() {
  char s[256] = {};
  int len = 0;
  // 多留一个位置给 结束符 '\0'
  cin.getline(s, 256);
  len = strlen(s); // 计算字符串长度
  for (int i = 0; i < len; i++) {
    if(s[i] == 'A'){
      cout<< "T";
    }
    else if(s[i] == 'T'){
      cout<< "A";
    }
    else if(s[i] == 'C'){
      cout<< "G";
    }
    else if(s[i] == 'G'){
      cout<< "C";
    }
    else{
      cout<< s[i]; // 如果不是A、T、C、G，则直接输出原字符
    }
  }
  cout << endl; // 输出换行符
  return 0;
}
// ATTCGGTCAGTTGACC
// TAAGCCAGTCAACTGG
// 该程序读取一个DNA序列字符串，替换其中的A、T、C、G字符为其互补字符，并输出结果。
// 该代码假设输入的字符串长度不超过255个字符，并且只包含A、T、C、G和其他字符。    
```

### 6.6 统计单词长度
![alt text](../assets/imgs/char-arr.png)

```c
#include <iostream>
using namespace std;
int main() {
  char s[1001];
  int len,sum = 0;
  cin.getline(s, 1001);
  len = strlen(s);
  for (int i = 0; i < len; i++){
    if(s[i] != ' ') {
      sum ++;
    }else {
      if(sum >0) {
        cout<< sum << ',';
      }
      sum = 0;
    }
  }
  cout << sum << endl;
  return 0;
}
```
## 七 进制
*  进制，也叫进位制，就是一种数数或者记数方法
* `十进制`的计数规律是`逢十进一` 十进制数 是 `1 和 0 `拼凑来的，这个 10就是 9 满十进一，进位来的，个位上的 9 变为 0，向十位进一，成为 10。
* `二进制` 发现者是德国数学家`莱布尼茨`现代的计算机，就是使用二进制控制计算机内部微小部件（晶体管）的开关。0 和 1 对应晶体管的开和关。
所以二进制是计算机能懂的计数方式。

![alt text](../assets/imgs/jinzhi2.png)
![alt text](../assets/imgs/jinzhi3.png)
![alt text](../assets/imgs/jinzhi4.png)

* `16 进制`中，每一位是用` 0~15` 来表示，但为了形式整洁，从 10 开始用字母 A 表示，即 10(A)，
11(B)，12(C)，13(D)，14(E)，15(F)。
### 二进制转十进制
![alt text](../assets/imgs/jinzhi5.png)

### 八进制转十进制
![alt text](../assets/imgs/jinzhi6.png)
### 十六进制转十进制
![alt text](../assets/imgs/jinzhi7.png)

![alt text](../assets/imgs/jinzhi8.png)

### 十进制数转 非十进制数
![alt text](../assets/imgs/jinzhi9.png)
![alt text](../assets/imgs/jinzhi10.png)
![alt text](../assets/imgs/jinzhi11.png)
![alt text](../assets/imgs/jinzhi12.png)

### 二进制和八进制、十六进制之间的转换
当把二进制数转换为八进制数或十六进制数时，可以先把二进制数转换为十进制数，然
后再把这个十进制数转换为八进制数或十六进制数；反过来，八进制数或十六进制数转换为
二进制数时，则先把它转化为十进制数，再把这个十进制数转换为二进制数；八进制数与十
六进制数之间的相互转换也是如此。
![alt text](../assets/imgs/jinzhi13.png)
![alt text](../assets/imgs/jinzhi14.png)
![alt text](../assets/imgs/jinzhi15.png)

### 八进制数和十六进制数之间的转换
![alt text](../assets/imgs/jinzhi16.png)

### 举个🌰
### 十进制数->二进制数的

* 方法是“除以 2 取余倒着读”：
1. 十进制数除以 2，运算保留余数，得到的商继续除以 2，直至商为 
2. 所有的余数倒序输出即为二进制数

* 【编程挑战 】输入一个不大于 32767 的整数 n，将它转换成一个二进制数。
* 【输入】输入只有一行，包括一个整数 n(0<=n<=32767)
* 【输出】输出只有一行
* 【输入样例】100
* 【输出样例】1100100

方法一： do while
```c
#include <iostream>
using namespace std;
int main() {
  int n, cnt = 0;
  int b[20] = {0};
  cin >> n;
  cnt = 0;
  do{
    b[cnt] = n % 2; // 除以2 取余数
    cout<< b[cnt] << endl;
    cnt ++; //余数个数计数
    n = n / 2; //除以2的到商
  } while (n != 0);
  for (int i = cnt-1; i >=0; i--){
    cout<< b[i];
  }
  return 0;
}

//输入 10
// 0
// 1
// 0
// 1
// 1010
```

方法二 while循环
```c
#include <iostream>
using namespace std;
int main() {
  int n, cnt = 0;
  int b[20] = {0};
  cin >> n;
  // while 循环是 先判断后循环，n为0时 不会进入循环，所以需要先单独处理 n 为 0 的情况
  if(n == 0){
    cout<< 0;
    return 0;
  }
  cnt = 0;
  while (n !=0){
    b[cnt] = n %2;
    cnt++;
    n= n /2;
  }
  
  for (int i = cnt-1; i >=0; i--){
    cout<< b[i];
  }
  return 0;
}
```
### 八进制数->十进制数
* 按权展开求和法
对于八进制数，第 i 位的权重就是 8i，编号 i 从个位起往左，依
次为 0，1，2

* 【编程挑战 】请将一个 20 位以内的八进制整数转换为十进制整数。
* 【输入】一行，20 位以内的八进制整数
* 【输出】该数对应的十进制数
* 【输入样例 1】23507
* 【输入样例 2】77777777777777777777
* 【输出样例 1】10055
* 【输出样例 2】1152921504606846975

```c
#include <iostream>
#include <cstring>
using namespace std;
int main() {
  // 放八进制数的字符串
  char x[20] = {0};
  int len;
  long long ans = 1, sum = 0; // int 类型会有内存溢出风险
  cin>> x;
  len = strlen(x); // 获取有效长度
  ans = 1;
  //从第0位开始 按权展开求和
  // 对应到数组就是进行逆序遍历
  for (int k = len-1; k >= 0; k--){
    sum = sum + (x[k] - '0') * ans;
    ans *=8;
  }
  cout<< sum;
  return 0;
}
```
【注意】
1. 使用 strlen()需要`#include<cstring>`。
2. 累乘变量 ans 的初始值为 1。
3. 累加变量 sum 的初始值为 0。
4. 对字符数组的有效内容进行逆序遍历。
5. 用累乘模拟权重 8i 的计算。

## 八 原码、反码、补码
### 计算机与数据编码
* 计算机中央处理器（CPU）， 事实上CPU它就是计算机的大脑。所有的信息通过键盘、鼠标、摄像头及其它设备输入到电脑主机后，会先进入到内存，
* CPU负责从内存中取出数据进行 运算，然后再将结果放回内存，进而输出到外部设备中（比如显示器、投影仪、音箱等）。离开了 CPU 的运算，电脑就什么也做不了啦。

![alt text](../assets/imgs/fanma.png)
1) CPU 处理的信息分为：数据或指令，都是用二进制数表示；
2) 结构上 CPU 主要由控制器和运算器组成；
3) 运算器主要用于进行各种运算，如加、减、乘、除、移位等；
4) 控制器则负责从存储器中获取指令及相关数据，并控制和调度其他部件；计算机可以执行复杂的运算，但其基础仍然建立在简单的加、减、乘、除之上。计算机内部是一个二进制数字世界，那么数据在计算机中是如何表示的？数据一律以补码形式表示和保存，而补码是二进制数，是机器数的一种形式。
### 机器数和真值
二进制数有正负之分,机器不能直接把符号“+”、“-”表示出来，为了能在计算机中表示正负数，必须引入符号位，即把正负符号也用` 1 位二进制数码`来表示。把符号位和数值位一起编码来表示相应的数的表示方法包括：原码、补码、反码、移码等。

* 真值：是指在数值前面用`“+”号`表示正数，用`“-”号`表示负数的带符号的二进制数。
* 机器数(又称为机器码)：是指在最高位用`“0”表示符号“+”` ，用`“1”表示符号“-”`，即把符号“数值化”后的带符号的二进制数。
1) 真值是以“+”、“-”符号开头，后面是数值位。例如例子中的`+ 110100` 和`- 110100` 就是真值的形式。
2) 机器数是固定长度的，包含符号位和数值位。最高位是符号位，用0 表示正数，1 表示负数。例如例子中的 0110100 就是真值+ 110100 的机器数方式，1110100 就是真值-110100 的机器数形式。
3) 某个数的真值和机器数有一一对应关系。
![alt text](../assets/imgs/fanma2.png)

###  机器数的位长（字长）
不同的计算机系统机器数的位长可能不同。在计算机中，机器数的位数（机器数字长）通常由 CPU 内部数据通道的宽度决定。8 位二进制数称为 1 字节(Byte)，目前机器数字长一般都是字节的整数倍，如字长 8 位、16 位、32 位、64 位。

![alt text](../assets/imgs/fanma3.png)

![alt text](../assets/imgs/fanma4.png)

### 三种机器数以及转换关系
机器数有三种表示形式：原码、反码、补码。对于正数，三种表示方法均相同，差别在于对负数的表示。三者的关系如下表所示：

![alt text](../assets/imgs/fanma5.png)
* 数 X 的原码记作[X]原，反码记作[X]反，补码记作[X]补。
* 计算机中的数据一律以`补码形式表示和保存`。

![alt text](../assets/imgs/fanma6.png)

* 8位字长的原码，反码，补码
* 先由真值写出原码，再由原码得到反码，由反码算出补码。而正数的三种机器数都相同。负数的反码在原码基础上对数值位取反，负数的补码=反码+1。
* 负数的补码=反码+1 `反码 + 1（二进制加法，逢 2 进 1）`
```c
  1 111 0101  
+         1  
-----------  
  1 111 0110  
```
![alt text](../assets/imgs/fanma7.png)

![alt text](../assets/imgs/fanma8.png)
可以看到 `0 的原码和反码不唯一，补码唯一`。这是计算机采用补码形式表示数据的原因之一。另外一个原因是，采用补码运算时符号位可以和数值位一起参加运算，而且不论数是正还是负，计算机总是做加法，减法运算可转换为加法运算，这样的话计算机的控制线路较为简单。
* 目前大多数计算机均采用`补码存储、补码运算`。

![alt text](../assets/imgs/fanma9.png)

![alt text](../assets/imgs/fanma10.png)
![alt text](../assets/imgs/fanma11.png)

![alt text](../assets/imgs/fanma12.png)

### 位逻辑运算符
![alt text](../assets/imgs/fanma13.png)
![alt text](../assets/imgs/weiyuns.png)
![alt text](../assets/imgs/weiyuns2.png)

![alt text](../assets/imgs/weiyuns9.png)
![alt text](../assets/imgs/weiyuns8.png)
![alt text](../assets/imgs/weiyuns7.png)
![alt text](../assets/imgs/weiyuns6.png)
### 位移运算符
* 左移
![alt text](../assets/imgs/weiyuns10.png)
![alt text](../assets/imgs/weiyuns11.png)
* 右移
![alt text](../assets/imgs/weiyuns12.png)
![alt text](../assets/imgs/weiyuns5.png)

![alt text](../assets/imgs/weiyuns13.png)

### 位运算符优先级
![alt text](../assets/imgs/weiyuns14.png)

### 🌰
* 输入一个不大于 32767 的正整数 n，输出这个数的二进制形式中各位上有几个 1。(用位运算实现)
* 【输入】输入只有一行，包括一个整数 n(0<=n<=32767)
* 【输出】输出只有一行
* 【输入样例】32760
* 【输出样例】12
* 方法一 对标志变量进行循环左移，数不变
![alt text](../assets/imgs/weiyuns15.png)

```c
#include <iostream>
using namespace std;
int main() {
  int n = 0,num; // num 输入的数
  unsigned int flag = 1;
  cin>> num;
  // flag 标志变量
  while (flag){
    if((num & flag) > 0) {
      n++;
    }
    flag = flag << 1;
  }
  cout<< n;
  return 0 ;
}
```

* 方法二
* 对数进行循环右移，flag 不变，每次判断最低位是否为1。
```c
#include <iostream>
using namespace std;
int main() {
  int n = 0,num; // num 输入的数
  unsigned int flag = 1;
  cin>> num;
  while (num){
    // 判断数的最低位 是否是1
    if((num & flag) > 0) {
      n++;
    }
    // 将数继续右移一位
    num = num >> 1;
  }
  cout<< n;
  return 0 ;
}
```
【注意】对数进行循环右移进而统计 1 的个数的方法只适合正整数，不适合负整数。因为对负数进行右移时，高位补符号位的值，也就是每次补一个 1，这样每右移一次都增加一个 1，导致 1 的统计结果不正确。

* 输出二进制补码
```c
#include <iostream>
#include <cstdio>
using namespace std;
int main() {
  int num;
  cin>> num;
  //依次从二进制最高位检查二进制数中每一位的值
  for (int i = 32; i >= 0; i--){
    if((num & (1 << i)) != 0) {
      printf("1");
    }else {
      printf("0");
    }
  }
  

  return 0 ;
}
```

## 九 函数

### 主函数

* int 表示主函数的返回值类型是整型
* main 是函数的名字，函数名后跟一对()小括号
*  { }大括号内是函数的内容,return 0 语句返回 0 给系统，表示程序运行成功
```c
#include <iostream>
using namespace std;
int main() {
  return 0
}
```

![alt text](../assets/imgs/fun1.png)
### 系统函数
* C++提供的函数，头文件 `#include <cmath>`
* `Cmath` 头文件类比是一个包含常用`数学工具`的工具箱
* ceil() 向上取整
### 自定义函数
![alt text](../assets/imgs/fun2.png)

```c
#include <iostream>
using namespace std;
// 函数的功能只有通过调用才会被执行
int add(int a, int b){
  // 若没有返回值，返回值类型为 void (关键字)
  // 若有，返回值只能有一个，类型可以为 char, int, float, double ....
  return a +b;
}
int main(){
  cout<< add(1, 2);
  return 0;
}
```

1) 一个 C++程序可以包含多个函数；
2) 有且只有一个 main()函数；
3) 程序总是从 main()开始执行；
4) main()可以调用其它函数；
5) 其它函数也可以互相调用；
6) 其它函数不能调用 main()函数；

### 形参、实参以及“值传递”
![alt text](../assets/imgs/fun3.png)
![alt text](../assets/imgs/fun4.png)

* 函数调用 需 `先定义，后调用`, 或者` 先声明，在调用，最后定义`
![alt text](../assets/imgs/fun5.png)

![alt text](../assets/imgs/fun6.png)

```c
#include <iostream>
using namespace std;

char Fun(char ch){
  char num = ch + 2;
  return num;
}
// char - int 类型转换， 返回的是 ASCII 的值 d 的值是 100
int Fun2(char ch){
  char num = ch + 2;
  // 100
  return num;
}
int main(){
  // c 实参，等于把c 的值传给函数的形参
  char c = 'b';
  cout<< Fun(c);
  return 0;
}

// d 
```

### 作用域
![alt text](../assets/imgs/fun7.png)

![alt text](../assets/imgs/fun8.png)

![alt text](../assets/imgs/fun9.png)

### 输出字符三角形
```c
#include <iostream>
using namespace std;

char c; // 字符
void row(int n) {
  for (int i = 1; i <= n; i++){
    cout<< c;
  }
  cout<< endl;
}
int main(){
  int num ; // 行数
  cin>> num >> c;
  for (int i = 1; i <= num; i++){
    row(i);
  }
  return 0;
}
```


### 求丑数
我们把只包含质因子 2、3 和 5 的正整数称为丑数（Humble Number）。
例如 6、8 都是丑数，但 14 不是，因为它包含因子 7。要求定义一个判断丑数的函数，利用
它输出 1∼100 之间所有的丑数
* 【输入】无
* 【输出】1 2 3 4 5 6 8 9 10 12 15 16 18 20 24 25 27 30 32 36 40 45 48 50 54 60 64 72 75
80 81 90 96 100

![alt text](../assets/imgs/fun10.png)
![alt text](../assets/imgs/fun11.png)
![alt text](../assets/imgs/fun13.png)

```c
#include <iostream>
using namespace std;
bool isHumbleNumber(int number) {
  while (number %2 == 0){
    number /=2; // --> number=number/2
  }
  while (number %3 == 0){
    number /=3;
  }
  while (number %5 == 0){
    number /=5;
  }
  if(number == 1) {
    return true;
  }else {
    return false;
  }
  
}
int main() {
  for (int i = 1; i <= 100; i++){
    if(isHumbleNumber(i)){
      cout<< i << " ";
    }
  }
  return 0;
}
```

### 求完整数

![alt text](../assets/imgs/fun14.png)
```c
#include <iostream>
using namespace std;
// 自定义函数，判断number是否是一个完整数
bool IsPerfectNumber(int number) {
  int sum = 0;
  for (int i = 1; i < number; i++){
    if(number % i ==0 ) {
      sum+=i;
    }
  }
  // 判断和是否等于原数
  if (number == sum){
    return true;
  }else {
    return false;
  }
}
int main() {
  int n;
  cin>> n;
  for (int i = 2; i <= n; i++){
    if(IsPerfectNumber(i)){
      cout<< i << endl;
    }
  }
  return 0;
}
```

## 十 递归函数
* 函数直接或间接地调用自身，称为`递归调用`
* 直接调用自己称为`直接递归`。A 调用 B ，B 又调用 A 的递归叫做`间接递归`。

递归函数有两个必要组成部分：
1) 有一个明确的递归结束条件，即递归出口；
2) 函数调用自身；
![alt text](../assets/imgs/dg1.png)

![alt text](../assets/imgs/dg2.png)

* 递归举个例子
阶乘是数学中的一个名词。阶乘(factorial)的定义： 一个正整数的阶乘是所有小于及等
于该数的正整数的积：
* n! = n * (n-1) * (n-2) *... * 2 * 1
* 例如，6! = 6 * 5 * 4 * 3 * 2 * 1 = 720
我们先看看能不能找到递归规律，也就是能不能把大问题分解为相似的小问题。以 6！
为例，6！= 6 * 5 * 4 * 3 * 2 * 1 = 6 * 5！，问题的规模变小了，只需要解决 5！就可以了。
一次类推 5! = 5*4!，4!=4*3! ...... 1!=1。
所以 n!的递归规律或者递归公式是 n！=n*（n-1）！

![alt text](../assets/imgs/dg3.png)

![alt text](../assets/imgs/dg4.png)

### 汉诺塔
【编程挑战 】输入汉诺塔层数 n，输出移动步骤。汉诺塔的算法思路：
如果只有一个圆盘，则把该圆盘从 A 柱到 C 柱，结束。
如果有 n 个圆盘，则把前 n-1 个圆盘移动到 B，然后把自己移动到 C，最后再把前 n-1
个移动到 C。
* 【输入】一个整数 n，表示 A 柱上有 n 个圆盘（0<n<=10）
* 【输出】若干行，一行是一次移动步骤
* 【输入样例】3 
* 【输出样例】

  A To C

  A To B

  C To B

  A To C

  B To A

  B To C

  A To C
```c
#include <iostream>
using namespace std;


/**
 * 汉诺塔问题的递归解法
 * @param n 汉诺塔的层数
 * @param a 起始柱子
 * @param b 辅助柱子
 * @param c 目标柱子
 */
void hanoi(int n, char a, char b, char c) {
  // 递归出口
  if (n == 1) {
    printf("%c TO %c\n", a, c);
  } else {
    hanoi(n - 1, a, c, b);
    // 将 A 上遗留的最后一个圆盘移动到C
    printf("%c TO %c\n", a, c);
    // 将 B 上 n-1层的圆盘移动到 C
    //此时 B为起始柱，C 为目标柱，A为辅助柱
    hanoi(n - 1, b, a, c);
  }
}
int main() {
  int n;
  printf("请输入汉诺塔的层数：");
  scanf("%d", &n);
  hanoi(n, 'A', 'B', 'C');
  return 0;
}
```

### 斐波那契数列
`斐波那契数列`（Fibonacci）是指这样的数列：1，1，2，3，5，8，13……这个数列的第
一个和第二个数都为 1，接下来每个数都等于前面 2 个数之和。
* 【编程挑战 】输入正整数 n，输出斐波那契数列第 n 项
* 【输入】一个正整数 n，表示第 n 项
* 【输出】第 n 项是多少
* 【输入样例】4
* 【输出样例】3

![alt text](../assets/imgs/dg5.png)
```c
#include <iostream>
using namespace std;
int fibo(int n){
  if( n <=2) {
    return 1; // 递归出口
  } else {
    return fibo(n - 1) + fibo(n - 2); // 递归调用
  }
}
int main(){
  int x;
  cin>> x;
  cout<< fibo(x) << endl; // 输出斐波那契数列的第 x 项
  return 0;
}
```

### 输出字符三角形（递归）
![alt text](../assets/imgs/dg6.png)

```c
#include <iostream>
using namespace std;

void draw(int n){
  if(n==1) {
    cout<< "*"<<endl;
  }else {
    draw(n - 1);
    for(int i = 0; i < n; i++){
      cout<< "*"; 
    }
    cout<< endl;
  }
}
int main(){
  int x;
  cin>> x;
  draw(x);
  return 0;
}
```
### 递归求和
用递归的方法求 1+2+3+……+N 的值
```c
#include <iostream>
using namespace std;
/**
 * 求和函数的递归实现
 * @param n 需要求和的数字
 * @return 返回从1到n的和
 */
int sum(int n) {
  if (n == 1) {
    return 1; // 递归出口
  } else {
    return n + sum(n - 1); // 递归调用
  }
}
int main() {
  int n;
  cin >> n; 
  cout << sum(n) << endl; // 输出从1到n的和
  return 0;
}
```

### 爬楼梯问题
【编程挑战 】有个小孩正在上楼梯，楼梯有 n 阶台阶，小孩一次可以上 1 阶或 2 阶。
输入楼梯的总级数，求有小孩有多少种不同的走楼梯方式。
* 【输入】一个整数 n 代表楼梯总级数(1≤n≤30)
* 【输出】不同的楼梯走法数
* 输入 5 
* 输出 8
![alt text](../assets/imgs/dg7.png)
![alt text](../assets/imgs/dg8.png)
![alt text](../assets/imgs/dg9.png)
![alt text](../assets/imgs/dg10.png)
```c
#include <iostream>
using namespace std;
int F(int n) {
  if(n==1){
    return 1; // 递归出口
  } else if(n==2){
    return 2; // 递归出口
  } else {
    return F(n - 1) + F(n - 2); // 递归调用
  }
}
int main(){
  int x;
  cin>> x;
  cout<< F(x) << endl;
  return 0;
}
```