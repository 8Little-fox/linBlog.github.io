---
title: git
date: 2022-09-17 16:01:08
permalink: /pages/1f2813/
categories:
  - html
tags:
  -
---

# git 代码提交规范

## 基本操作

- 1.当你接到烦人的具有严格校验的项目时，面临代码推不上去的时候你改如何处理呢？

```js
git  add .
git  commit -m '提交的备注信息'
git  commit --no-verify -m "提交的备注信息"      //进行代码强制推送
git  push -u origin master                                    //push 到master分支上
```

- 2.想将 develop 分支合并到 master 分支，操作如下：

```
git branch                    //查看当前分支
git  checkout master   //首先切换到master分支上
git pull origin master    //拉取master分支上的代码
git  merge develop         //将develop 分支上的代码合并到master分支上
```

- 查看提交状态

```
git status

On branch master
Your branch is ahead of 'origin/master' by 12 commits.
  (use "git push" to publish your local commits)
nothing to commit, working tree clean

//上面的意思就是你有12个commit，需要push到远程master上

```

- 最后提交到 master 分支上

```
git push origin master
```

- 创建本地分支

```
git branch 分支名
```

- 查看已有的本地及远程分支

```
git branch -a
```

查看更改内容：

```
git diff
```

查看当前提交内容

```
git show
```

撤销所以修改

```
git checkout .
```

撤销修改具体文件

```
git checkout index.html
```

切换一个新的分支

```
git checkout -b 分支名
```

拉取服务端全部分支

```
git fetch
```

stash 命令可用于临时保存和回复修改，可跨分支

> 注：在未 add 之前才能执行 stash！！！！

```
git stash
```

恢复，通过 git stash list 可查看具体值。只能恢复一次

```
git stash pop
```

- 删除本地有但在远程库已经不存在的分支

```
 git remote prune origin
```

- 删除远程分支

```
git push origin --delete dev
```

- 删除本地分支

```
git branch -d dev
```

- 为了保证代码质量，大部分前端项目会在 git commit 时候进行 lint 校验。使用的是 husky 与 lint-staged 两个包来实现

使用 commitizen 来执行规范

全局安装 commitizennode 模块

npm install -g commitizen

sudo yarn add commitizen@4.2.4. git 提交规范化工具

sudo yarn add cz-customizable@6.3.0 --save-dev

yarn init --yes

配置提交限制：

新建 .cz-config.js

```js
module.exports = {
  // 可选类型
  types: [
    { value: "feat", name: "feat: 新功能" },
    { value: "fix", name: "fix: 修复" },
    { value: "docs", name: "docs: 文档变更" },
    { value: "style", name: "style: 代码格式" },
    { value: "refactor", name: "refactor: 重构" },
    { value: "pref", name: "pref: 性能优化" },
    { value: "test", name: "test: 新增测试" },
    { value: "chore", name: "chore: 构建过程或辅助工具的变更" },
    { value: "revert", name: "revert: 回退" },
    { value: "build", name: "build: 打包" },
  ],
  // 步骤
  message: {
    type: "请选择提交的类型",
    customScope: "请输入修改的范围（可选）",
    subject: "请简要描述提交（必填）",
    body: "请输入详细描述（可选）",
    footer: "请输入要关闭的issue(可选)",
    confirmCommit: "确定要使用以上信息提交？（Y/N）",
  },
  //跳过步骤
  skipQuestion: ["body", "footer"],
  // subjectLimit: 72
};
```

替换 commit 进行提交：

git cz

查看提交日志：

git log

安装 husky：

npx husky install

用于检查提交信息：

npx husky add .husky/commit-msg 'npx --no-install commitlint --edit '$1''

git hooks 钩子：

npx husky add .husky/pre-commit "npx eslint --ext .js,.vue src”

修改 Package.json :
检查本次提交更新的代码，并在出错误的时候，自动修复并且推送

```js
  "lint-staged": {。
    "src/**/*.{js,vue}":[
      "eslint --fix",
      "git add"
    ]
  },
```

pre-commit:

npx eslint --ext .js,.vue src -> npx lint-staged

时会自动检验代码并将不合规的代码代码进行自动修复:

git cz

## 云效使用技巧

- 云效创建一个空项目举个例子：
  1: 克隆原仓库地址的所有分支 gitLab

```js
git clone @gitxxx
```

- 查看当前分支

```
git branch
```

- 查看所有分支

```
git branch -all
```

- 拉取某个分支的某个文件

```js
git checkout test1(分支名) src/views/login/rules.js(文件名)
```

2: 首先 git remote 删除已添加的远程仓库地址

- 查看当前配置的远程仓库地址

```js
git remote -v
```

- 删除本地指定的远程地址

```js
git remote remove origin
```

3: 将本地代码推送到云效远程仓库

```js
git remote add origin "xxx.git"
```

4: 最后一步

```js
git push --mirror
```

## 删除 本地项目所属 .git

```js
rm - rf.git;
```

## npm, yarn 查看源和换源：

```js
npm config get registry  // 查看npm当前镜像源

npm config set registry https://registry.npm.taobao.org/  // 设置npm镜像源为淘宝镜像

yarn config get registry  // 查看yarn当前镜像源

yarn config set registry https://registry.npm.taobao.org/  // 设置yarn镜像源为淘宝镜像
```

## 清除本机阿里镜像

```js
npm config delete registry
```

## SSH 设置

- 生成 key

```js
ssh-keygen -t rsa -C "XXX@qq.com"
```

查看 key

```js
cat ~/.ssh/id_rsa.pub
```

## 查看本机 ssh 公钥，生成公钥

- 打开 git bash 窗口
- 进入 .ssh 目录 cd ~/.ssh
- 找到 id_rsa.pub 文件 ls
- 查看公钥 cat id_rsa.pub 或者 vim id_rsa.pub 或者 cat ~/.ssh/id_rsa.pub
  密钥：
  ssh-keygen -t rsa -C "XXX@qq.com"
  type %userprofile%\.ssh\id_rsa.pub
  type %userprofile%\.ssh\id_rsa.pub

## git 生成补丁文件及打补丁

- 应用 patch 和 diff
  检查 patch/diff 是否能正常打入:

```js
git apply --check 【path/to/xxx.diff】
```

打入 patch/diff:

```js
git apply 【path/to/xxx.diff】
```

- 冲突解决
  此时需要解决冲突： 1、首先使用 以下命令行，自动合入 patch 中不冲突的代码改动，同时保留冲突的部分：

```js
git  apply --reject  xxxx.patch
```

- 同时会生成后缀为 .rej 的文件，保存没有合并进去的部分的内容，可以参考这个进行冲突解决
- 解决完冲突后删除后缀为 .rej 的文件，并执行 git add.添加改动到暂存区.
- 接着执行 git am --resolved 或者 git am --continue
  > 说明：在打入 patch 冲突时，可以执行 git am --skip 跳过此次冲突，也可以执行 git am --abort 回退打入 patch 的动作，还原到操作前的状态。
