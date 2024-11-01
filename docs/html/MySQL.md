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
### 陆续更新中