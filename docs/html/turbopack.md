---
title: turbo
date: 2023-01-11 15:48:49
permalink: /pages/022f1d/
categories:
  - html
tags:
  - 
---
![Image text](https://turbo.build/images/docs/repo/repo-hero-logo-dark.svg)

* Turborepo 是一个针对 JavaScript 和 TypeScript 代码库优化的智能构建系统。Turborepo 使用`缓存`来增强您的本地设置并加速您的 CI。
## turbo创建一个新的 monorepo
```js
npx create-turbo@latest
```
## 运行开发脚本
```js
turbo dev
```
# dev一次只在一个工作区上运行
```js
turbo dev --filter docs
```
## 使用 Turborepo 构建
```js
turbo build
```
## 在工作区中安装包
```js
pnpm add <package> --filter <workspace>
例： pnpm add react --filter web
```
## 从工作区中删除包
```js
pnpm uninstall <package> --filter <workspace>
例： pnpm uninstall react --filter web
```
## 升级工作区中的包
```js
pnpm update <package> --filter <workspace>
例： pnpm update react --filter web
```
## 工作区
* 工作区是您的 monorepo 的构建块。您添加到 monorepo 的每个应用程序和包都将位于其自己的工作区内
## 配置工作区
* 要使用工作空间，您必须首先向包管理器声明它们的文件系统位置
```js
packages:
  - "docs"
  - "apps/*"
  - "packages/*"
```
```js
my-monorepo
├─ docs
├─ apps
│  ├─ api
│  └─ mobile
├─ packages
│  ├─ tsconfig
│  └─ shared-utils
└─ sdk
```
在上面的例子中， 和 里面的所有目录my-monorepo/apps/都是my-monorepo/packages/工作空间，my-monorepo/docs目录本身也是一个工作空间。my-monorepo/sdk/不是工作区，因为它不包含在工作区配置中。

## 命名工作区
每个工作区都有一个唯一的名称，在其package.json:
```js
{
  "name": "shared-utils"
}
```
该名称用于：
* 指定`应将包安装到哪个工作区`
* 在其他工作区中使用此工作区
* `发布包`：它将在name您指定的 npm 上发布
* 您可以使用 npm 组织或用户范围来避免与 npm 上的现有包发生冲突。例如，您可以使用@mycompany/shared-utils.
## 相互依赖的工作区
要在另一个工作区内使用一个工作区，您需要使用其名称将其指定为依赖项。
例如，如果我们想要`apps/docsimport packages/shared-utils`，我们需要在`shared-utils`里面添加一个依赖`apps/docs/package.json`：
```js
{
  "dependencies": {
    "shared-utils": "workspace:*"
  }
}
```
