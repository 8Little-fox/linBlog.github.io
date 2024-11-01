---
title: MySQL
date: 2024-10-11 13:25:10
permalink: /pages/b41089/
categories:
  - html
tags:
  - 
---
* 登录
```js
mysql -u root -p
```
`mysql`内修改密码，使用如下命令
```js
alter user'root'@'localhost' IDENTIFIED BY '新密码';
```
查看数据库
```js
show databases;
```
新建数据库
```js
create databases 数据库名称 character set utf8mb4;
```
进入到指定数据库中
```js
use 数据库名称;
show table; // 查看表
source 本地sql文件的地址 // 导入本地sql
```
## SQL常用语句
### 无条件查询 
```js
// --查询表中所有数据
select * from 表名;
```
### between and
* 查询在…到…之间(between and / && / and)
```js
// 查询 dish 表 价格在 500 到1000的数据
SELECT * FROM dish WHERE price BETWEEN 500 AND 1000;
```
### 指定条件查询
* 单个条件(or / in)
```js
SELECT * FROM dish WHERE price=500 OR price=2000;
SELECT * FROM dish WHERE price in (500, 1000, 2000, 13800);
```
* 多个条件(and)
```js
SELECT * FROM dish WHERE price=500 AND name= '北冰洋';
```
### 查询不为NULL值(is not null),为NULL值(is null)
```js
SELECT * FROM dish WHERE name is not NULL;
SELECT * FROM dish WHERE name is NULL;
```
### 模糊查询（like）
```js
// --查询dish表中姓名第一个字为王的记录
select * from dish where name like '王%';

// --查询dish表中姓名第二个字为李的记录
select * from dish where name like '_李%';

// --查询dish表中姓名含有李字的记录
select * from dish where name like '%李%'；

// --查询dish表中姓名是两个字的记录
select * from dish where name like '__';
```

### 去除重复记录查询（distinct）
```js
// --查询dish_flavor表中name不相同的记录
// --select distinct 字段 from 表名;
SELECT DISTINCT name FROM dish_flavor;
```
### 排序查询（order by）
```js
--  根据价格降序排列
SELECT * FROM dish ORDER BY price desc;
```
### 内连接查询
* 如果查询数据的来源来自多张表，则必须对这些表进行连接查询，连接是把不同表的记录连到一起的最普遍的方法，通过连接查询可将多个表作为一个表进行处理，连接查询分为内连接和外连接

```js
// --语法1 （隐式内连接）
select 字段1,字段2...
from 表1,表2...
where 过滤条件;
// 在address_book表和user表中查询 consignee和user两个字段相等的数据 
 SELECT address_book.consignee,user.name FROM address_book,user WHERE address_book.consignee = user.name


// --语法2 （显式内连接）
select 字段1,字段2...
from 表1 inner join 表2 ...
on 过滤条件;

select address_book.consignee,user.name from address_book inner join user on address_book.consignee = user.name;

```

### 外连接查询

```js 语法
-- --左外连接
-- select 字段1，字段2..
-- from 表1 left outer join 表2 on 过滤条件;
-- 
-- --右外连接
-- select 字段1，字段2..
-- from 表1 right outer join 表2 on 过滤条件；
-- 


SELECT address_book.consignee,user.name from address_book left outer join user on address_book.consignee = user.name

SELECT address_book.consignee,user.name FROM address_book right outer join user on  address_book.consignee = user.name

```
>
* 左外连接和右外连接有一点区别：
* 左外连接：是表1和表2的交集再并上表1的其他数据
* 右外连接：是表1和表2的交集再并上表2的其他数据
简单点说就是求交集之后并上city的其他数据，没有匹配的为NULL
### 陆续更新中