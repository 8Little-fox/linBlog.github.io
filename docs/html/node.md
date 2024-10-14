---
title: node
date: 2022-09-17 16:01:08
permalink: /pages/8b839d/
categories:
  - html
tags:
  - 
---
# node
## 安装node版本管理模块
```js
sudo npm install n -g
```
下边步骤请根据自己需要选择

(1) 查看node 版本
``` js
 n
```

（2）安装稳定版
```js
sudo n stable
```
（3）安装最新版
```js
sudo n latest
```
（4）切换node 版本 - 版本降级/升级
```js
sudo n 版本号//例如：sudo n 10.8.0
```
（5） 删除版本
```js
sudo n rm 版本号
```
当保存文件时，出现没有权限的情况下，可以执行该代码，为当前目录及子目录搜于读写权限
```js
sudo chmod -R 777 .
```

## Express

* mkdir myapp  创建文件
* cd myapp
* npm init 初始化
* npm install express --save
* 新建 app.js 

json-server
```js
npm i -D json-server
```
```js
var express = require('express');//引入express模块
var app = express();

//定义方法
app.get('/',function(req,res){
    res.send('HellowWorld')
});
//响应接口
app.get('/category',function(req,res){
    let categoryList = ['UI/UX', '平面', '插画/漫画', '摄影','UI/UX', '平面', '插画/漫画', '摄影'];
//数据
    let result={
        err:0,
        msg:'ok',
        data: categoryList
    }
    res.send(result)
})
//定义端口，此处所用为3000端口，可自行更改
var server = app.listen(8080,function(){
    console.log('runing 8080...');
})
```

## windows-nvm
* 安装nvm
安装地址 `https://github.com/coreybutler/nvm-windows/releases`


![Image text](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/29/16e1682c57b8f8ab~tplv-t2oaga2asx-jj-mark:3024:0:0:0:q75.awebp
)
```js
//查看本机安装的 node 所有的版本
nvm list
//安装最新版本
nvm install node
//  安装指定版本
nvm install v10.15.3
// 使用指定版本
nvm use v10.15.3
// 卸载指定版本
nvm uninstall v10.15.3
```
