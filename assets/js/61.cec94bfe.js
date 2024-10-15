(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{403:function(t,s,a){"use strict";a.r(s);var r=a(8),e=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"git-代码提交规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-代码提交规范"}},[t._v("#")]),t._v(" git 代码提交规范")]),t._v(" "),s("h2",{attrs:{id:"基本操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本操作"}},[t._v("#")]),t._v(" 基本操作")]),t._v(" "),s("ul",[s("li",[t._v("1.当你接到烦人的具有严格校验的项目时，面临代码推不上去的时候你改如何处理呢？")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("git  add "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\ngit  commit "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("m "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'提交的备注信息'")]),t._v("\ngit  commit "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("no"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("verify "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("m "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"提交的备注信息"')]),t._v("      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//进行代码强制推送")]),t._v("\ngit  push "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("u origin master                                    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//push 到master分支上")]),t._v("\n")])])]),s("ul",[s("li",[t._v("2.想将 develop 分支合并到 master 分支，操作如下：")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git branch                    //查看当前分支\ngit  checkout master   //首先切换到master分支上\ngit pull origin master    //拉取master分支上的代码\ngit  merge develop         //将develop 分支上的代码合并到master分支上\n")])])]),s("ul",[s("li",[t._v("查看提交状态")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git status\n\nOn branch master\nYour branch is ahead of 'origin/master' by 12 commits.\n  (use \"git push\" to publish your local commits)\nnothing to commit, working tree clean\n\n//上面的意思就是你有12个commit，需要push到远程master上\n\n")])])]),s("ul",[s("li",[t._v("最后提交到 master 分支上")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git push origin master\n")])])]),s("ul",[s("li",[t._v("创建本地分支")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git branch 分支名\n")])])]),s("ul",[s("li",[t._v("查看已有的本地及远程分支")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git branch -a\n")])])]),s("p",[t._v("查看更改内容：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git diff\n")])])]),s("p",[t._v("查看当前提交内容")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git show\n")])])]),s("p",[t._v("撤销所以修改")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git checkout .\n")])])]),s("p",[t._v("撤销修改具体文件")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git checkout index.html\n")])])]),s("p",[t._v("切换一个新的分支")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git checkout -b 分支名\n")])])]),s("p",[t._v("拉取服务端全部分支")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git fetch\n")])])]),s("p",[t._v("stash 命令可用于临时保存和回复修改，可跨分支")]),t._v(" "),s("blockquote",[s("p",[t._v("注：在未 add 之前才能执行 stash！！！！")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git stash\n")])])]),s("p",[t._v("恢复，通过 git stash list 可查看具体值。只能恢复一次")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git stash pop\n")])])]),s("ul",[s("li",[t._v("删除本地有但在远程库已经不存在的分支")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(" git remote prune origin\n")])])]),s("ul",[s("li",[t._v("删除远程分支")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git push origin --delete dev\n")])])]),s("ul",[s("li",[t._v("删除本地分支")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git branch -d dev\n")])])]),s("ul",[s("li",[t._v("为了保证代码质量，大部分前端项目会在 git commit 时候进行 lint 校验。使用的是 husky 与 lint-staged 两个包来实现")])]),t._v(" "),s("p",[t._v("使用 commitizen 来执行规范")]),t._v(" "),s("p",[t._v("全局安装 commitizennode 模块")]),t._v(" "),s("p",[t._v("npm install -g commitizen")]),t._v(" "),s("p",[t._v("sudo yarn add commitizen@4.2.4. git 提交规范化工具")]),t._v(" "),s("p",[t._v("sudo yarn add cz-customizable@6.3.0 --save-dev")]),t._v(" "),s("p",[t._v("yarn init --yes")]),t._v(" "),s("p",[t._v("配置提交限制：")]),t._v(" "),s("p",[t._v("新建 .cz-config.js")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可选类型")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("types")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"feat"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"feat: 新功能"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fix"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fix: 修复"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"docs"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"docs: 文档变更"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"style"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"style: 代码格式"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"refactor"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"refactor: 重构"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pref"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pref: 性能优化"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test: 新增测试"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"chore"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"chore: 构建过程或辅助工具的变更"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"revert"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"revert: 回退"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"build"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"build: 打包"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 步骤")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("message")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"请选择提交的类型"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("customScope")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"请输入修改的范围（可选）"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("subject")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"请简要描述提交（必填）"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("body")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"请输入详细描述（可选）"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("footer")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"请输入要关闭的issue(可选)"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("confirmCommit")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"确定要使用以上信息提交？（Y/N）"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//跳过步骤")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("skipQuestion")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"body"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"footer"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// subjectLimit: 72")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("替换 commit 进行提交：")]),t._v(" "),s("p",[t._v("git cz")]),t._v(" "),s("p",[t._v("查看提交日志：")]),t._v(" "),s("p",[t._v("git log")]),t._v(" "),s("p",[t._v("安装 husky：")]),t._v(" "),s("p",[t._v("npx husky install")]),t._v(" "),s("p",[t._v("用于检查提交信息：")]),t._v(" "),s("p",[t._v("npx husky add .husky/commit-msg 'npx --no-install commitlint --edit '$1''")]),t._v(" "),s("p",[t._v("git hooks 钩子：")]),t._v(" "),s("p",[t._v('npx husky add .husky/pre-commit "npx eslint --ext .js,.vue src”')]),t._v(" "),s("p",[t._v("修改 Package.json :\n检查本次提交更新的代码，并在出错误的时候，自动修复并且推送")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"lint-staged"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("。\n    "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"src/**/*.{js,vue}"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eslint --fix"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git add"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("p",[t._v("pre-commit:")]),t._v(" "),s("p",[t._v("npx eslint --ext .js,.vue src -> npx lint-staged")]),t._v(" "),s("p",[t._v("时会自动检验代码并将不合规的代码代码进行自动修复:")]),t._v(" "),s("p",[t._v("git cz")]),t._v(" "),s("h2",{attrs:{id:"云效使用技巧"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#云效使用技巧"}},[t._v("#")]),t._v(" 云效使用技巧")]),t._v(" "),s("ul",[s("li",[t._v("云效创建一个空项目举个例子：\n1: 克隆原仓库地址的所有分支 gitLab")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("git clone @gitxxx\n")])])]),s("ul",[s("li",[t._v("查看当前分支")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git branch\n")])])]),s("ul",[s("li",[t._v("查看所有分支")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git branch -all\n")])])]),s("ul",[s("li",[t._v("拉取某个分支的某个文件")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("git checkout "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("分支名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" src"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("views"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("login"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("rules"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("js")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("文件名"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("2: 首先 git remote 删除已添加的远程仓库地址")]),t._v(" "),s("ul",[s("li",[t._v("查看当前配置的远程仓库地址")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("git remote "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("v\n")])])]),s("ul",[s("li",[t._v("删除本地指定的远程地址")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("git remote remove origin\n")])])]),s("p",[t._v("3: 将本地代码推送到云效远程仓库")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("git remote add origin "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxx.git"')]),t._v("\n")])])]),s("p",[t._v("4: 最后一步")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("git push "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("mirror\n")])])]),s("h2",{attrs:{id:"删除-本地项目所属-git"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除-本地项目所属-git"}},[t._v("#")]),t._v(" 删除 本地项目所属 .git")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("rm "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" rf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("git"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"npm-yarn-查看源和换源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#npm-yarn-查看源和换源"}},[t._v("#")]),t._v(" npm, yarn 查看源和换源：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("npm config "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),t._v(" registry  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 查看npm当前镜像源")]),t._v("\n\nnpm config "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" registry https"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("registry.npm.taobao.org")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置npm镜像源为淘宝镜像")]),t._v("\n\nyarn config "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),t._v(" registry  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 查看yarn当前镜像源")]),t._v("\n\nyarn config "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" registry https"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("registry.npm.taobao.org")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置yarn镜像源为淘宝镜像")]),t._v("\n")])])]),s("h2",{attrs:{id:"清除本机阿里镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#清除本机阿里镜像"}},[t._v("#")]),t._v(" 清除本机阿里镜像")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("npm config "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" registry\n")])])]),s("h2",{attrs:{id:"ssh-设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ssh-设置"}},[t._v("#")]),t._v(" SSH 设置")]),t._v(" "),s("ul",[s("li",[t._v("生成 key")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("ssh"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("keygen "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("t rsa "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("C")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"XXX@qq.com"')]),t._v("\n")])])]),s("p",[t._v("查看 key")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("cat "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ssh"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("id_rsa"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pub\n")])])]),s("h2",{attrs:{id:"查看本机-ssh-公钥-生成公钥"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看本机-ssh-公钥-生成公钥"}},[t._v("#")]),t._v(" 查看本机 ssh 公钥，生成公钥")]),t._v(" "),s("ul",[s("li",[t._v("打开 git bash 窗口")]),t._v(" "),s("li",[t._v("进入 .ssh 目录 cd ~/.ssh")]),t._v(" "),s("li",[t._v("找到 id_rsa.pub 文件 ls")]),t._v(" "),s("li",[t._v('查看公钥 cat id_rsa.pub 或者 vim id_rsa.pub 或者 cat ~/.ssh/id_rsa.pub\n密钥：\nssh-keygen -t rsa -C "XXX@qq.com"\ntype %userprofile%.ssh\\id_rsa.pub\ntype %userprofile%.ssh\\id_rsa.pub')])]),t._v(" "),s("h2",{attrs:{id:"git-生成补丁文件及打补丁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-生成补丁文件及打补丁"}},[t._v("#")]),t._v(" git 生成补丁文件及打补丁")]),t._v(" "),s("ul",[s("li",[t._v("应用 patch 和 diff\n检查 patch/diff 是否能正常打入:")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("git apply "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("check 【path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("to"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("xxx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("diff】\n")])])]),s("p",[t._v("打入 patch/diff:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("git apply 【path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("to"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("xxx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("diff】\n")])])]),s("ul",[s("li",[t._v("冲突解决\n此时需要解决冲突： 1、首先使用 以下命令行，自动合入 patch 中不冲突的代码改动，同时保留冲突的部分：")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("git  apply "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("reject  xxxx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("patch\n")])])]),s("ul",[s("li",[t._v("同时会生成后缀为 .rej 的文件，保存没有合并进去的部分的内容，可以参考这个进行冲突解决")]),t._v(" "),s("li",[t._v("解决完冲突后删除后缀为 .rej 的文件，并执行 git add.添加改动到暂存区.")]),t._v(" "),s("li",[t._v("接着执行 git am --resolved 或者 git am --continue\n"),s("blockquote",[s("p",[t._v("说明：在打入 patch 冲突时，可以执行 git am --skip 跳过此次冲突，也可以执行 git am --abort 回退打入 patch 的动作，还原到操作前的状态。")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);