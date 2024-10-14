---
title: webpack
date: 2022-09-17 16:01:08
permalink: /pages/93c4e6/
categories:
  - html
tags:
  - 
---
# Webpack

* `js 模块打包工具`
* 提供一些默认的配置 `devServer` 快速启用一个开发时的服务器
* 默认只能打包js文件，所以webpack 额外提供了 `loader`的概念，使用loader 预处理一些文件，`打包除了js 之外的任何静态资源`
*  webpack 提供了插件的概念，例如`HtmlWebpackPlugin` webpack 插件，用来`创建HTML文件`的插件
 ## Webpack构建流程
 webpack 启动后，从entry 开始， 递归去解析entry 依赖的所有module, 找到每一个module.rules 里配置的loader,进行相应的转换处理，对module
 转换后，解析其他模块，解析的结果是一个个chunk, 最后webpack 会将所有的chunk 转换成文件输出的output,在整个构建流程中，webpack 会在恰当的时机执行 plugin
 里定义的那些插件，从而完成 plugin 插件它里面的任务

 主要配置项
  1: entry 模块入口，使得源文件加入到构建流程中
  2: output 配置如何输出
  3: module 配置各种类型的模块处理规则
  4: plugin 配置扩展插件
  5: devServer 实现本地服务 包括 http, 模块热替换 source map等服务

## plugin 和loader 区别
  loader: 转换器，将A文件进行编译成B文件，比如：将A.less转换为A.css，单纯的文件转换过程
  plugin: 扩展器，例如打包优化、资源管理、环境变量注入，目的是解决 loader 无法实现的其他事
  
## 处理图片
* 小的图片可以转换成 base64格式，可以减少http 请求
* 大的图片像 `file-loader`一样，单独打包到img 文件夹里，发送请求，防止页面首次渲染太慢

```js
module: {
  rules: [
    {
      test: /\.(png|jpg)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 5 * 1024,
          outputPath: '/img/'
        }
      }
    }
  ]
}
```

## 多入口配置
webpack.base.config.js
```js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: {
    main: './src/index.js',
    other: './src/other.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(_dirname, '../dist')
  }，
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/other.html',
      filename: 'other.html',
      chunks: ['other']
    }),
    new CleanWebpackPlugin()
  ]
}
```
## 热更新
```js

```

  陆续更新中，请稍后。。。