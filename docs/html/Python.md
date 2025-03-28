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
```py
# 算术运算符
a, b = 10, 3
print(a + b)  # 13
print(a - b)  # 7
print(a * b)  # 30
print(a / b)  # 3.333... (真除法)
print(a // b) # 3 (地板除)
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
### 1.4 运算符
```py
s = "Python编程"
print(len(s))           # 8 (中文算1个字符)
print(s[0])             # 'P'
print(s[-1])            # '程'
print(s[2:5])           # 'tho' (切片)
```
### 1.5 运算符
```py
print(s.upper())        # PYTHON编程
print("HELLO".lower())  # hello
print(" python ".strip()) # "python"
print("a,b,c".split(",")) # ['a', 'b', 'c']
```
### 1.6 字符串格式化
```py
name = "Alice"
age = 25
print(f"{name} is {age} years old")  # f-string (Python 3.6+)
print("{} is {} years old".format(name, age))
```
### 1.7 比较运算
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
```py
# for 循环
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
```

## 3. 数据结构
### 3.1 列表 (List)
```py
fruits = ["apple", "banana", "cherry"]
fruits.append("orange")  # 添加元素
fruits.remove("banana")  # 删除元素
print(fruits[0])        # 访问元素
print(len(fruits))      # 长度
```