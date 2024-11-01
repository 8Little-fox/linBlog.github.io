(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{408:function(t,s,a){t.exports=a.p+"assets/img/img.19b313d6.jpg"},450:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"memo-的作用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#memo-的作用"}},[t._v("#")]),t._v(" memo 的作用")]),t._v(" "),s("ul",[s("li",[t._v("memo 是 react 的一种"),s("code",[t._v("缓存技术")]),t._v("，这个函数可以检测从父组件接收的 props,并且在父组件改变 state 的时候比对这个 state 是否是本组件在使用，如果不是，则拒绝重新渲染。")])]),t._v(" "),s("h3",{attrs:{id:"使用方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用方式"}},[t._v("#")]),t._v(" 使用方式")]),t._v(" "),s("p",[s("img",{attrs:{src:a(408),alt:"图片"}}),t._v("\n像这样，这 Children 就是被缓存成功了。下次当父组件中无关它的 state（状态）被更新时候，Children 组件就不会重新渲染。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("当前组件被 memo 保护，那么当前组件的 props 不变，则组件不进行重新渲染。这样，我们合理的使用 memo 就可以为我们的项目带来很大的性能优化")])]),t._v(" "),s("h3",{attrs:{id:"第一个坑"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第一个坑"}},[t._v("#")]),t._v(" 第一个坑")]),t._v(" "),s("p",[t._v("有那么一种情况，当被改变的那个 props 是一个数组（对象）的时候，被 memo 的保护的组件即使 props 变了，它也不会重新渲染")]),t._v(" "),s("ul",[s("li",[t._v("例如\n传入了一个 list 数组进去子组件，子组件内部是被 memo 缓存了的。这个时候，如果我们往 list 这个数组中 push()一个 6，那么子组件中的 props 改变了，理论上来说，子组件应该重新渲染了。但\n实际上并不会。")])]),t._v(" "),s("p",[t._v("这是为什么呢？因为 memo 的保护是对 props 做一个浅比较")]),t._v(" "),s("p",[t._v("而数组的使用"),s("code",[t._v("push()方法")]),t._v("看似是变了。但变的只是堆中的数据，存在与栈中的地址依然不会改变。"),s("code",[t._v("memo是检测不到的")]),t._v("。所以，使用 push 等不能返回一个新数组的方法，均无法触发 memo 的更新机制。")]),t._v(" "),s("ul",[s("li",[t._v("解决方法 需要让memo检测到数组栈地址的变化。要栈地址变化的话，只要返回一个全新的数组就好了。")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("list"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" setList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setList")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("list"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//这样是不会被memo检测到的，是无法触发memo更新的")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setList")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("list"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//这样才可以，创建一个新数组，再在里面解构旧数组，往后面追加 1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//这样,就等于返回了一个新的数组，栈中的地址就会改变，memo就可以检测到并触发更新")]),t._v("\n")])])]),s("h3",{attrs:{id:"第二个坑"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第二个坑"}},[t._v("#")]),t._v(" 第二个坑")]),t._v(" "),s("p",[t._v("我们需要知道的是，"),s("code",[t._v("缓存也需要成本")]),t._v("。如果每个组件都进行缓存，会给浏览器带来非常非常大的负担。")]),t._v(" "),s("p",[s("code",[t._v("所以在平常项目中，我们需要挑选一些经常被使用，经常会被重新渲染的组件去有目标的缓存他。而不是每一个组件都缓存一下。")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("ul",[s("li",[t._v("父组件中state（状态）改变，不受memo保护的子组件也会重新渲染")]),t._v(" "),s("li",[t._v("memo会检测props到改变来决定组件是否需要进行重新渲染，换言之就是，被memo函数包起来的组件只有本身的props被改变之后才会重新渲染")]),t._v(" "),s("li",[t._v("memo只能进行浅拷贝来校验决定是否触发重新渲染。所以改变数组（对象）的props时候记得返回一个全新的数组（对象）")]),t._v(" "),s("li",[t._v("memo不是项目中所有的组件都需要包一下。包的太多反而会起反效果，我们需要选择那些经常被重新渲染的组件有选择性的去缓存。")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);