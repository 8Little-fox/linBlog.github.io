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