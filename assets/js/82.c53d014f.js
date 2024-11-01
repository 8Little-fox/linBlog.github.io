(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{473:function(v,e,_){"use strict";_.r(e);var o=_(14),c=Object(o.a)({},(function(){var v=this,e=v._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("ul",[e("li",[v._v("源码采用 "),e("code",[v._v("monorepo")]),v._v(" 方式进行管理， 将模块拆分到 package 目录中")]),v._v(" "),e("li",[e("code",[v._v("Vue3")]),v._v(" 采用  "),e("code",[v._v("ts")]),v._v(" 开发，增强类型检测，"),e("code",[v._v("vue2")]),v._v("则采用  "),e("code",[v._v("flow")])]),v._v(" "),e("li",[e("code",[v._v("Vue3")]),v._v("的性能优化，支持 "),e("code",[v._v("tree-shaking")]),v._v(",不实用就不会被打包")]),v._v(" "),e("li",[e("code",[v._v("Vue2")]),v._v(" 后期引入RFC,使每个版本改动可控")])]),v._v(" "),e("h2",{attrs:{id:"vue3-源码的目录结构设计"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue3-源码的目录结构设计"}},[v._v("#")]),v._v(" Vue3 源码的目录结构设计")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("reactivity")]),v._v(": 响应式系统")]),v._v(" "),e("li",[e("code",[v._v("runtime-core")]),v._v("： 运行时自定义渲染器")]),v._v(" "),e("li",[e("code",[v._v("runtime-dom")]),v._v("： 浏览器运行时，包括"),e("code",[v._v("DOM API")]),v._v("属性，事件处理等")]),v._v(" "),e("li",[e("code",[v._v("runtime-test")]),v._v("： 测试")]),v._v(" "),e("li",[e("code",[v._v("server-renderer")]),v._v("： 服务端渲染")]),v._v(" "),e("li",[e("code",[v._v("compiler-core")]),v._v("： 编译器核心")]),v._v(" "),e("li",[e("code",[v._v("compiler-dom")]),v._v("： 针对浏览器的编译模块")]),v._v(" "),e("li",[e("code",[v._v("compiler-ssr")]),v._v("： 服务端渲染的编译模块")]),v._v(" "),e("li",[e("code",[v._v("compiler-sfc")]),v._v("： 单文件解析")]),v._v(" "),e("li",[e("code",[v._v("size-check")]),v._v("： 测试代码体积")]),v._v(" "),e("li",[e("code",[v._v("template-explorer")]),v._v("： 调试编译器输出的开发工具")]),v._v(" "),e("li",[e("code",[v._v("shared")]),v._v("： 多个包之间共享的内容")]),v._v(" "),e("li",[e("code",[v._v("vue")]),v._v("： 完整版本，包括运行时和编译器")])]),v._v(" "),e("p",[v._v("由于所有的项目放在一个仓库当中，代码逻辑复用是非常方便，如果有依赖的代码变动，那么用到这个依赖的项目当中会立马感知到。这又是怎么做到的呢？普通项目可以通过相对路径进行引用，但我们这里的设想是每一个包都是独立的，如果是通过相对路径进行引用的话，那么就很耦合了。我们可以通过 Workspace 协议进行模块之间的相互依赖，这样就达到了解耦的目的了。\n此外 Vue 是分"),e("code",[v._v("运行时")]),v._v("和"),e("code",[v._v("编译时")]),v._v("，从上图的源码目录结构上我们就可以看成端倪来了。"),e("code",[v._v("@vue/runtime-xxx")]),v._v(" 系列的包是不直接引用 "),e("code",[v._v("@vue/compiler-xxx")]),v._v(" 系列的包，这样在就保证了它们之间不存在强关联，仅从入口文件 vue 进行关联，从而达到区分运行时和编译时。")])])}),[],!1,null,null,null);e.default=c.exports}}]);