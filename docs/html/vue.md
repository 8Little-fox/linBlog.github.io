---
title: vue
date: 2022-09-17 16:01:08
permalink: /pages/8b2920/
categories:
  - html
tags:
  - 
---
# Vue

## 从头搭建cli脚手架

```js
vue create my-web    //名称不可大写
```
带你走进vue 世界

新建 `vue.config.js` 配置端口，代理

```js
module.exports = {
  devServer: {
    port: 8080, //端口号
    open: true,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': 'api'
        }
      },
      '/auth': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
        pathRewrite: {
          '^/auth': 'auth'
        }
      }
    }
  }
}

```
新建文件 style 样式重置

reset.css
::: details 点击查看代码
``` js
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
```
:::
安装你可能用到的依赖

```js
sudo yarn add axios  //axios接口请求
sudo yarn add rsaEncrypt   //加密
sudo yarn add element-ui -S //组件库
```
新建 文件 utils

request.js

::: details 点击查看代码

```js
import axios from 'axios'
import { Message } from 'element-ui'
const service = axios.create({})

/**
 * 请求拦截器
 */
service.interceptors.request.use(request => {
  const token = localStorage.getItem('token')
  if (token) {
    request.headers.Authorization = token
  }
  return request
}, error => {
  return Promise.reject(error)
})
/**
 * 响应拦截器
 */
service.interceptors.response.use(response => {
  return response.data
}, error => {
  Message.error(error.response.data.message)
  return Promise.reject(error)
})
class Request {
  static instance
  base = ''
  path = ''
  config = {}

  static getInstance () {
    if (!this.instance) {
      this.instance = new Request()
    }
    return this.instance
  }

  withAction (sendData = {}, method) {
    const isSendData = ['POST', 'PUT'].includes(method.toUpperCase())
    return new Promise((resolve, reject) => {
      service({
        url: `${this.base}${this.path}`,
        method,
        [isSendData ? 'data' : 'params']: sendData,
        ...this.config
      }).then(resolve).catch(reject)
    })
  }

  setBase (base) {
    this.base = `${base}/`
    return this
  }

  setPath (url) {
    this.path = url
    return this
  }

  setConfig (config) {
    this.config = config
    return this
  }

  carry (key) {
    this.path = this.path.replace(/\{.*?\}/g, () => key)
    return this
  }

  get (params) {
    return this.withAction(params, 'get')
  }

  post (data) {
    return this.withAction(data, 'post')
  }

  put (data) {
    return this.withAction(data, 'put')
  }

  del (params) {
    return this.withAction(params, 'delete')
  }

  upload (file, data) {
    const formData = new FormData()
    formData.append('file', file)
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key])
    })
    return Request.withAction(this.path, data, { headers: { 'Content-Type': 'multipart/form-data' } }, 'post')
  }
}

export default Request.getInstance()

```
:::

rsaEncrypt.js
::: details 点击查看代码
```js
import JSEncrypt from 'jsencrypt/bin/jsencrypt.min'

// 密钥对生成 http://web.chacuo.net/netrsakeypair

const publicKey = 'MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBANL378k3RiZHWx5AfJqdH9xRNBmD9wGD\n' +
  '2iRe41HdTNF8RUhNnHit5NpMNtGL0NPTSSpPjjI1kJfVorRvaQerUgkCAwEAAQ=='

const privateKey = 'MIIBUwIBADANBgkqhkiG9w0BAQEFAASCAT0wggE5AgEAAkEA0vfvyTdGJkdbHkB8\n' +
  'mp0f3FE0GYP3AYPaJF7jUd1M0XxFSE2ceK3k2kw20YvQ09NJKk+OMjWQl9WitG9p\n' +
  'B6tSCQIDAQABAkA2SimBrWC2/wvauBuYqjCFwLvYiRYqZKThUS3MZlebXJiLB+Ue\n' +
  '/gUifAAKIg1avttUZsHBHrop4qfJCwAI0+YRAiEA+W3NK/RaXtnRqmoUUkb59zsZ\n' +
  'UBLpvZgQPfj1MhyHDz0CIQDYhsAhPJ3mgS64NbUZmGWuuNKp5coY2GIj/zYDMJp6\n' +
  'vQIgUueLFXv/eZ1ekgz2Oi67MNCk5jeTF2BurZqNLR3MSmUCIFT3Q6uHMtsB9Eha\n' +
  '4u7hS31tj1UWE+D+ADzp59MGnoftAiBeHT7gDMuqeJHPL4b+kC+gzV4FGTfhR9q3\n' +
  'tTbklZkD2A=='

// 加密
export function encrypt (txt) {
  const encryptor = new JSEncrypt()
  encryptor.setPublicKey(publicKey) // 设置公钥
  return encryptor.encrypt(txt) // 对需要加密的数据进行加密
}

// 解密
export function decrypt (txt) {
  const encryptor = new JSEncrypt()
  encryptor.setPrivateKey(privateKey)
  return encryptor.decrypt(txt)
}

```
:::

### 安装与设置
* 要安装Pinia，你可以使用npm或yarn。

```js
yarn add [email protected]
# or with npm
npm install [email protected]
```
## component内置的组件
:tada: :100:
用法：

渲染一个“元组件”为动态组件。依 is 的值，来决定哪个组件被渲染。

使用场景：动态组件页面切换和手势滑动切换

```html
  <view v-for="(title, index) of tab" class="flex-Y-XYcenter " @click="tabChange(index)">
    <text :class="index == current_index ? 'title-color' : 'title-white'" style="font-size: 28rpx;padding-bottom: 20rpx;">{{ title.value }}</text>
  </view>
  <swiper :style="'height: ' + (emulator_Height - 160) + 'rpx;  width:750rpx;'" @change="changeSwiper">
    <swiper-item v-for="(tab, index) of tabToggleArray" :key="index">
      <component ref="pageInit" :is="tabToggleComponent"></component>
    </swiper-item>
	</swiper>
```
`tabToggleArray` 组件
`tab` 导航条
`current_index` 索引默认显示 'SquareList' 组件

```js
  tabToggleArray: [{ value: "SquareList" }, { value: "NearbyList" }, { value: "DestinationList" }],
  tab: [{ value: "广场", select: true }, { value: "附近驾友", select: false }, { value: "目的地驾友", select: false }],
  current_index: 0
```

```js
// 左右滑动切换组件
	changeSwiper(e) {
    this.current_index = e.detail.current;
    this.tabToggleComponent = this.tabToggleArray[this.current_index].value;
  },
  //点击导航条切换组件
  tabChange(index) {
    this.tabToggleComponent = this.tabToggleArray[index].value;
    this.current_index = index;
  },
```

## Watch

* 
默认情况下，`watch` 只在被监听的属性值发生变化时执行

```js
export default {
  data: () => ({
    dog: ''
  }),
  watch: {
    dog(newVal, oldVal) {
      console.log(`Dog changed: ${newVal}`)
    }
  }
}
```

* immediate

创建组件后立即运行监听程序

`immediate:true`

```js
export default {
  data: () => ({
    dog: ''
  }),
  watch: {
   dog: {
     handler(newVal, oldVal) {
        console.log(`Dog changed: ${newVal}`);
     },
     immediate:true
   }
  }
}
```
* deep

`deep: true`

`deep` 默认值是`false` ,即是否开启深度监听,监听器会层层遍历，给对象的所以属性（及子属性） 添加监听器，
但是会消耗很大的性能，修改obj 中任何一个属性都会触发监听器

```js
export default {
  data: () => ({
    obj: {
      a : 1,
      b : 2
    }
  }),
  watch: {
   dog: {
     handler(newVal, oldVal) {
        console.log(`Dog changed: ${newVal}`);
     },
     immediate: true,
     deep: true
   }
  }
}
  
```

监听obj中具体某一个属性
```js
export default {
  data: () => ({
    obj: {
      a : 1,
      b : 2
    }
  }),
  watch: {
   'obj.a': {
     handler(newVal, oldVal) {
        console.log(`Dog changed: ${newVal}`);
     },
     immediate: true,
     deep: false
   }
  }
}
  
```
监听 `page` ，page 变化后之间调用列表接口 
```js
 watch: {
    page: 'handleGetTable'
  },
```
::: tip
如果你需要在某个数据变化时做一些事情，使用watch来观察这个数据变化
:::

## computed

* `computed` 会根据你所依赖的数据动态显示新的计算结果，计算结构会被缓存,`computed` 的值在getter执行后会被缓存，只有在它依赖
  的属性值改变之后，才会下一次获取 `computed` 的值

举个🌰

```js

<template>
  <div class="hello">
      {{fullName}}
  </div>
</template>

<script>
export default {
    data() {
        return {
            firstName: '飞',
            lastName: "旋"
        }
    },
    //
    computed: {
        fullName() {
            return this.firstName + ' ' + this.lastName
        }
    }
}
</script>
```
get()  通过其他的值设置一个新值
set()  通过获取一个值来改变它相关联的值之后引起`fullName`的重新变化
```js
    computed: {
        fullName: {
          get: function () {
            return this.firstName + ' ' + this.lastName
          },
          set: function (val) {
            const arr = val.split(' ')
            this.firstName = arr[0]
            this.lastName = arr[1]
          }
        }
    }
```

::: tip
如果一个数据依赖于其他数据，那么把这个数据设计为computed的
:::

## vue.sync

`v-bind` 修饰符 .sync
子组件向父组件传值

子组件
```js 
<template>
  <div>
    子组件
    <el-button @click="$emit('update:money', money - 100)">sycn</el-button>
  </div>
</template>
<script>
  export default {
    props:['money']
  }
</script>

```

父组件
```js
<template>
  <SyncText :money.sync="money"/>
  {{money}}
</template>
data () {
  return {
    money:''
  }
}
```

::: warning

使用`sync`的时候,子组件传递的事件名必须为 `updata:value`,其中value必须与组件中的props
中声明的名称完全一致
:::

## Vue.$set()
Vue 不允许在已经创建的实例上动态添加新的根级响应式属性 (root-level reactive property)。然而它可以使用 Vue.set(object, key, value) 方法将响应属性添加到嵌套的对象上

* 实现数据动态响应
对象响应式数据
```js
this.$set(this.student, 'age' ,15)
```
```js
this.student.age = '15'
this.student = Object.assign({}, this.student)
```
数组响应式数据
```js
this.$set(this.problemDataScouce[index], "isDisabled", item.isDisabled)
```
delete只是被删除的元素变成了 empty/undefined 其他的元素的键值还是不变。 Vue.delete 直接删除了数组 改变了数组的键值。
```js
Vue.delete(item,'price')
```
## @keyup.enter.native 回车聚焦
使用场景 :: 用户名回车自动聚焦到密码框

用户框里放：@keyup.enter.native="keyupClick"

密码框里放:：ref="mima"
```js
 keyupClick () {
    this.$refs.mima.focus()
  },
```

## install编写插件
创建install.js,
```js
import Text from '@/components/Text'
export default (app) => {
 console.log('app', app);
 app.component('Text', Text)
}
```
main.js 

```js
import Text from '@/plugins/install'
createApp(App).use(Text).mount('#app')
```
以上完事就可以直接在页面中使用了 