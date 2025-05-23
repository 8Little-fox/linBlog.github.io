---
title: Python
date: 2025-03-28 09:13:25
permalink: /pages/fc6e6d/
categories:
  - html
tags:
  - 
---
* Python 是一门简单易学但功能强大的编程语言，适合初学者和高级开发者。以下是 Python 的必知必会基础知识，涵盖核心语法、数据结构、函数、面向对象编程、文件操作、异常处理等关键内容。
## 1.Python 基础语法
### 1.1 变量与数据类型
```py
# 打印输出
print("Hello, Python!")  # 这是单行注释

"""
这是多行注释
可以写多行说明
"""

# 变量命名规则
# 由字母，数字，以及下划线组成
# 不能以数字开头,没有长度的限制,严格区分大小写
# 不能使用Python关键字

my_var = 10  # 小写字母，单词间用下划线
MyVar = 20   # 驼峰命名法(不推荐)
_var = 30    # 私有变量约定


# 基本数据类型
integer = 10          # 整数 (int)
floating = 3.14        # 浮点数 (float)
complex_num = 1 + 2j     # 复数
string = "Python"  # 字符串 (str)
boolean = True    # 布尔值 (bool)


# 类型检查
print(type(integer))     # <class 'int'>
print(isinstance(string, str))  # True

# 类型转换
str_num = str(123)       # "123"
int_num = int("456")     # 456
float_num = float("7.89") # 7.89

num_str = "123"
num_int = int(num_str)  # 字符串 → 整数
```
### 1.2 输入与输出
```py
# 输入
name = input("请输入你的名字: ")  # 返回字符串

# 输出
print("Hello,", name)  # 自动加空格
print(f"Hello, {name}!")  # f-string (Python 3.6+)
```

### 1.3 运算符
![图片](../assets/imgs/image-4py.png)
```py
# 算术运算符
a, b = 10, 3
print(a + b)  # 13
print(a - b)  # 7
print(a * b)  # 30
print(a / b)  # 3.333... (真除法)
print(a // b) # 3  整除 ->取整数商
# 例如 N // 5， N = 12
# 12 // 5 ，表示 12 除以 5 的整数商，12 除以 5 商为 2 余 2，取整数商结果是 2 。

print(a % b)  # 1 (取模)
print(a ** b) # 1000 (幂运算)

# 比较运算符
print(5 > 3)  # True
print(5 == 5) # True

# 逻辑运算符
print(True and False)  # False
print(True or False)   # True
print(not True)        # False
```
### 1.4 字符串下标 / eval函数
```py
s = "Python编程"
print(len(s))           # 8 (中文算1个字符)
print(s[0])             # 'P'
print(s[-1])            # '程'
print(s[2:5])           # 'tho' (切片)

# eval函数
num = eval("3 * 5")
print(num) # 输出字符串计算结果 15
print(type(num)) #输出结果数据类型 <class 'int'>
```
### 1.5 运算符
```py
print(s.upper())        # PYTHON编程
print("HELLO".lower())  # hello
print(" python ".strip()) # "python"
print("a,b,c".split(",")) # ['a', 'b', 'c']
```
### 1.6 字符串格式化
![图片](../assets/imgs/py-format.png)

```py
name = "Alice"
age = 25
print(f"{name} is {age} years old")  # f-string (Python 3.6+)
print("{} is {} years old".format(name, age))

# 保留2位小数 3.14
print("{:.2f}".format(3.141592))
# 带符号保留小数点后2位 3.14
print("{:-.2f}".format(3.141592))
# 不带小数，四舍五入 3
print("{:.0f}".format(3.141592))
# 千分位隔开 1,231,213,121
print("{:,}".format(1231213121))

# 数据类型强制转换 
# 将整数转换为浮点数
a = 34
b = float(a) #34.0
print(b, type(b)) # <class 'float'>
```
### 1.7 运算符
![图片](../assets/imgs/py-yunsuan.png)

```py
x, y = 5, 10
print(x == y)   # False
print(x != y)   # True
print(x < y)    # True
print(x >= 5)   # True
```

### 1.8 赋值操作符
```py
num = 10
num += 5  # 等同于 num = num + 5
print(num)  # 15
```
### 1.9 逻辑判断 or / and/ not

```py
# 逻辑判断 or - 或

num = int(input("请输入指针对准的数字"))
if num == 5 or num == 9:
    print("奖励你一个大鸡腿")
else:
    print("奖励你一个小鸡腿")


# 逻辑判断 and - 与
cScore = int(input("请输入你的语文成绩： "))
mScore = int(input("请输入你的数学成绩： "))

if cScore > 90 and mScore > 90:
    print("奖励你一个大鸡腿")
else:
    print("给你一个鸡毛掸子")

# 逻辑判断 not - 非
date = input("今天是周几: ")
if not (date == "周末"):
    print("今天我要上课")
else:
    print("今天放假")
    

```
## 2. 流程控制
### 2.1 条件语句 (if-elif-else)
```py
age = 18
if age < 18:
    print("未成年")
elif age == 18:
    print("刚好成年")
else:
    print("已成年")
```

### 2.2 循环 (for & while)
![图片](../assets/imgs/py-for.png)
![图片](../assets/imgs/py-range.png)
```py
# for 循环
for num in [10, 20 ,30 ,40 ,50]
    print("Hello py")

for i in range(5):  # 0, 1, 2, 3, 4
    print(i)

# while 循环
count = 0
while count < 5:
    print(count)
    count += 1
```
### 2.3 break, continue, else
```py
for i in range(10):
    if i == 5:
        break      # 跳出循环
    if i % 2 == 0:
        continue   # 跳过本次循环
    print(i)
else:
    print("循环正常结束")  # 如果循环没有被 break 中断，则执行

# 列表 (List)
fruits = ["apple", "banana", "cherry"]
fruits.append("orange")  # 添加元素
fruits.remove("banana")  # 删除元素
print(fruits[0])        # 访问元素
print(len(fruits))      # 长度
```

## 3.海龟画图
### 3.1 turtle
```py
import turtle  # 导入turtle 库
# 设置画笔形状为小海龟 arrow，circle，square，triangle，classic
turtle.shape("turtle")

# 行走相关
turtle.forward()  # fd 前走 100像素
turtle.backward()  # bk 后退

# 方向相关
turtle.right()  # rd右转
turtle.left()  # lf左转

turtle.goto(100, 100) # 移动到（100，100）的位置

turtle.speed()  # 改变画笔速度(0最快,10-1逐渐变慢)
turtle.up()  # 函数让画笔抬起
turtle.down()  # 函数让画笔落下
turtle.reset()  # 清除画布内容（还原画笔状态）
turtle.clear()  # 清除画布内容（保留画笔状态）
turtle.ht()  # 函数隐藏画笔图标
turtle.st()  # 显示画笔图标
turtle.bgcolor()  # 改变背景颜色
turtle.circle()  # 画圆（备课请看批注）
turtle.dot()  # 画点
turtle.pensize(15) #设定画笔粗细
turtle.pencolor("yellow")#设置画笔的颜色
turtle.fillcolor()#填充颜色
turtle.color()#设置画笔颜色和填充颜色
turtle.begin_fill()#开始填充颜色
turtle.end_fill()#结束填充颜色
turtle.done() # 结束
```
### 3.2 奥运五环
![图片](../assets/imgs/py-circle.png)
```py
import turtle  # 导入turtle模块

turtle.color("blue")
turtle.width(20)  # 确定圆圈的宽度
turtle.circle(60)  # 确定圆的半径

turtle.penup()
turtle.forward(140)
turtle.pendown()
turtle.color("black")  # 确定圆圈的颜色
turtle.circle(60)

turtle.penup()
turtle.forward(140)
turtle.pendown()
turtle.color("red")
turtle.circle(60)

turtle.penup()
turtle.goto(210, -50)
turtle.pendown()
turtle.color("green")
turtle.circle(60)

turtle.penup()
turtle.goto(60, -50)
turtle.pendown()
turtle.color("yellow")
turtle.circle(60)
turtle.done()
```

### 3.3 循环海龟
![图片](../assets/imgs/py-for-line.png)

```py
from turtle import *

# fd(0)，左转90度
# fd(1)，即向前移动1个像素，左转90度
# fd(2) ，即向前移动2个像素，左转90度
# fd(99) ，即向前移动99个像素，左转90度。

for i in range(100):
    fd(i)
    lt(90)

for i in range(100):
    circle(i) # 每次画半径为i的圆
    left(91) # 左转91度

# 四色螺旋线
colors= ["red","blue", "yellow", "green"]
for i in range(100):
    pencolor(colors[i % 4])
    fd(i)
    left(91)

done()
```
![图片](../assets/imgs/turtle1.png)
![图片](../assets/imgs/turtle2.png)
![图片](../assets/imgs/turtle3.png)
![图片](../assets/imgs/turtle4.png)

## 4.数学算法
### 4.1 次方 pow()
作用：求解a的b次方
```py
# 求2 的3 次方
x = pow(2,3)
print(x) #8
```
### 4.2 绝对值 abs()
作用：abs函数能够用来求解绝对值
表示方法：绝对值指的是一段距离，通常的表示方法为"两个竖线之间有一个数字"，例如|5|，|-7|

特点：绝对值永远大于等于0，不可能小于0，因为距离不会是负数。正数的绝对值是自己本身，负数的绝对值是它的相反数，0的绝对值是0
```py
x = abs(5)
y = abs(-7)
print(x, y ) # 5 7
```

### 4.3 取商和求余函数divmod()
作用：同时取商和余数，返回的数据是元组类型
* 例题：求解10除3的商和余数。
```py
a = 10
b = 3
print(divmod(a,b))
# (3, 1)
```

### 4.4 求和函数sum()
作用：可以求列表元素之和
* 例题：求解列表[1,3,5,7,9]的元素之和
```py
li = [1,3,5,7,9]
print(sum(li)) # 25
```
### 4.5 四舍五入函数round()
作用：可以指定小数位数，且满足`四舍五入`的规则
* 例题：将小数3.1415926保留3位小数输出
```py
p = 3.1415926
print(round(p, 3)) # 3.142
```
### 4.6 最大值函数max()
作用：可以求出列表当中数据的最大值
* 例题：求列表[5,3,99,2,0]当中的最大值
```py
li = [5,3,99,2,0]
print(max(li)) # 99
```
### 4.7 最小值函数min()
* 作用：可以求出列表当中数据的最小值
```py
li = [5,3,99,2,0]
print(min(li)) # 0
```
### 4.8 整除问题
* `尾数判别法`
* 除数 2、5 看被除数的末尾 
* 除数 4、25 看被除数的末两位
* 除数 8、125 看被除数的末三位
### 4.9 质数与合数
* 质数：像2、3、5……这样只有1和它本身两个因数的数叫`质数`(或素数)
* 合数：像4、6、9……这样除了1和它本身，还有其它因数的数，叫做`合数`
* 注意：1只有1个因数，既不是质数，也不是合数

判断一个数是否为质数（素数） ？

* 1. 方法一： 统计x的因数个数
```py

# 找质数
x = int(input('请输入您要判断的数字：'))
s = 0
for i in range(1, x+ 1):
    if x % i ==0:
        s +=1
if s == 2:
    print('%d 为质数' %x)
```
* 2. 方法二： 试除法

输入一个数 x -> for 循环试除 -> 发现整除 -> x 不为质数
* 结论： 若要判断x是否为素数，只需判断1-根号x中是否有它的因子即可。
```py
import math
x = int(input("请输入您要判断的数字："))
p = int(math.sqrt(x)) + 1
flag = True

for i in range(2, p):
    if x % i == 0:
        flag = False
        print('%d 不为质数' % x)
        break
if flag:
    print('%d 为质数' %x)
```

### 4.10 同余
余数：在整数的除法中，只有能整除与不能整除两种情况。当不能整除时，就产生余数，`取余数运算 a mod b = c（b不为0）表示整数a除以整数b所得余数为c`。例如：7÷3 = 2…1

同余：`除以同一个数，余数相等`， 例如，7÷3 = 2…1、4÷3=1…1，称7和4对3这个数同余，`3称为7和4同余的模`。7和4对3同余，13和7对3同余，那么13和4对3也同余。
* 性质：若a mod b = c，d mod b = c，设a<d，那么(d-a)%b等于0

例子： 23、51、72三个数，各除以一个大于1的自然数，得到的余数相等，这个数是多少？

思路：根据同余的性质，`若a mod b = c，d mod b = c，设a<d，那么(d-a)%b等于0`。因为 51-23=28，则这个数是28的约数；因为72-51=21，则这个数是21的约数；说明这个数既能把28整除，也能把21整除，那么28和21的公约数就是7了。
```py
for i in range(2, 73):
    if 23%i == 51 % i and 51 % i == 72%i:
        print(i)
        break

```

### 4.11 最大公约数
最大公约数指的是两个数的公共因数中最大的数
* 方法一：试除法
* 例如：12与6的最大公约数为6
思路：假设存在两个数m和n，则选取这两个数中较小的数（设为i），然后判断i能否同时成为m与n的因数，如果可以，则i就是m与n的最大公约数；如果不可以，则递减i，直到满足条件为止。

例子： 12与8的最大公约数
```py
m = int(input())
n = int(input())
if m > n:
    i = n
else:
    i = m
for x in range(i, 0 , -1):
    if m %x == 0 and n %x == 0:
        print(x)
        break

```
* 方法二： 辗转相除法

求m,n的最大公约数，除了普通的试除法之外，还有什么其它方法吗？

思路：假设求解36、24的最大公约数

第一步：36为被除数，24为除数，余数为12

第二步：24为被除数，12为除数，余数为0，得出结果，12为36与24的最大公约数
* 例子 99与36的最大公约数是多少呢？
```py
m = int(input())
n = int(input())
while m % m !=0:
    c = m % n
    m = n
    n = c
print(n)
```
### 4.12 最小公倍数
最小公倍数指的是两个数的公共倍数中最小的数

思路：假设存在两个数m和n，则选取这两个数中较大的数（设为j），然后判断j能否同时被m与n整除(即取余等于0)，如果可以，则j就是m与n的最小公倍数；如果不可以，则递增j，直到满足条件为止。

* 例如：2与3的最小公倍数为6
```py
m = int(input())
n = int(input())
if m > n:
    j = m
else:
    j = n
while True:
    if j %m == 0 and j %n == 0:
        print(j)
        break
    j+=1

```

## 5.函数
用法同上：⬆️
内置函数： pow函数、abs函数、sum函数、round函数等

函数分为两大类：
 （1）系统内置函数(或者称为内建函数)
 （2）用户自定义函数

### 5.1 bool函数
语法：bool(参数x)，x为参数，代表待处理的数据，需要用户传递

规则1：当对数字使用bool函数时，只有参数是0时bool函数返回False，任何其它参数值都返回True
```py
x = 3
print(bool(x)) #True
```
### 5.2 float函数
作用：float函数能够把字符串或者数字转成浮点数，所谓的浮点数指的是带有小数点的数字
```py
x = 3
print(float(x)) #3.0
```
### 5.3 len函数
len函数可以求得字符串、列表、元组等的长度或元素个数

```py
s = 'Hello'
print(len(x)) # 5
```
### 5.4 sorted函数
默认情况下它会返回一个升序序列
```py
list_A = [3,5,2,4]
print(list_A)
#  reverse = True 降序  reverse = False 升序
list_B = sorted(list_A, reverse = True)
print(list_B) # [5,4,3,2]

```
### 5.5 ord() 函数
获取单个字符的 Unicode 编码值 ，字符"A" 的 Unicode 编码值是 65 
```py
print(ord('A')) # 65
```
### 自定义函数
函数的三大要素： 函数名， 参数， 函数体
* def 函数关键字 
* 在用def关键字定义函数时`函数后面括号里的变量`称为形式参数 params 称为`形式参数`,用来接收外部数据. 形参没有实际的值，被赋值后才有意义。
* 实参全称实际参数，`是指调用函数时，小括号中的参数`，是用来把数据传递给形式参数用的。 实际参数可以是`变量`，也可以是一个`常量`。'小明'/name 称为`实际参数`
```py
def myName(params):
    print('我叫 XXX', params)

name = input('请输入姓名：')
myName('小明')
myName(name)
```
* `默认参数`，又称为缺省参数，即我们可以给形式参数一个默认值
* 实际参数，那么会覆盖参数的默认值
* 有默认值的形式参数不能跟在有默认值的形式参数后面 例如错误写法 myName(params = '小明', b), 正确写法 myName( b, params = '小明',)
```py
def myName(params = '小明'):
    print('我叫 XXX', params)
name = input('请输入姓名：')
myName(name)
```