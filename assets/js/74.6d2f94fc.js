(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{460:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"ts-的数据类型有哪些"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ts-的数据类型有哪些"}},[t._v("#")]),t._v(" ts 的数据类型有哪些？")]),t._v(" "),s("p",[t._v("基本类型和引用类型")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tuple 元组"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" 枚举"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v(" 所以类型的子类型"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" 空类型，方法没有返回值"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("never")]),t._v(" 任何类型的子类型，代表不会出现的值"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" object\n")])])]),s("ul",[s("li",[t._v("tuple 元组")])]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" tupleArr"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\ntupleArr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'12'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h1",{attrs:{id:"接口与类型别名的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#接口与类型别名的区别"}},[t._v("#")]),t._v(" 接口与类型别名的区别")]),t._v(" "),s("ul",[s("li",[t._v("接口 instance")])]),t._v(" "),s("p",[t._v("1: 可以声明对象")]),t._v(" "),s("p",[t._v("2: 接口合并: 可以通过合并不同的声明进行不断扩展")]),t._v(" "),s("p",[t._v("3: 接口继承: extends")]),t._v(" "),s("ul",[s("li",[t._v("类型别名 type")])]),t._v(" "),s("p",[t._v("1: 可以用来声明一些接口（interface）无法声明的其他类型")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 声明已有类型（即取别名）")]),t._v("\ntype "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" number"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 字面量类型")]),t._v("\ntype "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("B")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"foo"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 元组类型")]),t._v("\ntype "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("C")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("number"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" string"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 联合类型")]),t._v("\ntype "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("D")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" number "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" boolean"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 交叉类型")]),t._v("\ntype "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("E")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("D")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("2: 通过交叉类型来实现扩展")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("type Super "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("a")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" string"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ntype Sub "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Super "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("b")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" number"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("相同点")]),t._v(" "),s("p",[t._v("1:都可以描述一个对象或者函数")]),t._v(" "),s("p",[t._v("2:都允许拓展（extends）两者可以混合扩展，但是两者语法不同。interface extends interface (接口继承接口)")]),t._v(" "),s("p",[t._v("type extends type (类型继承类型)")]),t._v(" "),s("p",[t._v("interface extends type (接口继承类型)")]),t._v(" "),s("p",[t._v("type extends interface (类型继承接口)")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("不同点")]),t._v(" "),s("p",[t._v("type 可以声明基本类型别名，联合类型，元组等类型")]),t._v(" "),s("p",[t._v("type 语句中还可以使用 typeof 获取实例的 类型进行赋值")]),t._v(" "),s("p",[t._v("type 其他一些扩展操作")]),t._v(" "),s("p",[t._v("interface 能够声明合并，type 不行。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);