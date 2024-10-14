---
title: 0
date: 2022-09-17 16:01:08
permalink: /pages/fc0898/
categories:
  - html
tags:
  - 
---
# Vue 3.0
## v-model 
父组件
```js
<script lang="ts" setup>
import child from "./components/child.vue";
import { ref } from "vue";
let num = ref(0);
</script>
<template>
  <child v-model:num="num" />
</template>
```
自组件
```js
<script lang="ts" setup>
const props = defineProps<{
  num: number;
}>();
let n = props.num;
const emit = defineEmits<{
  (event: "update:num", n: number): void;
}>();

const handlerChange = () => {
  n += 1;
  emit("update:num", n);
};
</script>
<template>
  <div>{{ props }}</div>
  <button @click="handlerChange">点击</button>
</template>
```
## Vue 3.x 废弃和修改的用法
1：filters
* Vue3.0 将不再支持filters语法。
原因： 
Filters的功能可以通过方法调用或计算属性轻松复制，因此它主要提供的是语法价值，而不是实际价值。它与JavaScript自己的位或运算符(|)相冲突
``` js
<!-- before -->
{{ msg | format }}

<!-- after -->
{{ format(msg) }}

```
2: event api
* 移除$on,$off和$once这三个实例方法。Vue3.0不再实现这三个事件发射器。

 3: data-object-declaration
  * 在Vue2.x中，data选项支持object和function两种类型的定义.
  * 但是在3.0中，将会废弃object这种定义方法

  4:  vue3.0 深度选择器＞＞＞ 和 /deep/ 和 ::v-deep 被弃用
```js
  //正确例子
  <style lang="scss" scoped>
  :deep(.main){
    height: 520px;
  }
```
  ## Vue3.x 推荐使用哪些插件呢？ 都有什么好处
* Vuex -> Pinia  极轻， 仅有 1 KB
* EventBus -> Mitt 足够小，仅有200bytes

## Vue3.x响应式数据原理
* Vue3.x改用 `Proxy` 替代 ObjjectdefineProperty. 因为Proxy 可以直接监听对象和数组的变化。

Proxy只会代理对象的第一层，那么Vue3又是怎样处理这个问题的呢？
判断当前Reflect.get的返回值是否为Object ,如果是则在通过reactive 方法做代理， 这样就满足了深度观测

监测数组的时候可能触发多次get/set，那么如何防止触发多次呢？
我们可以判断key是否为当前被代理对象的target 自身属性，也可以判断旧值与新值是否相等，只要满足以上两者条件之一时，才有可能执行trigger

## 如何获取类似vue2 中的this
* `getCurrentInstance` 获取当前组件的实例
```js
import { getCurrentInstance } from 'vue'
//获取当前组件的上下文
const { proxy } = getCurrentInstance();
```
## ref/reactive 响应式引用

* 原理，通过`proxy` 对数据进行封装，当数据变化时，触发模版等内容的更新
* ref: 处理基础类型的数据 
* reactive :处理非基础类型的数据
* toRefs 批量创建ref类型数据, 并和以前数据关联/响应式对象转换成普通对象，把对象中的每一个属性，包裹成ref对象
```js
let name = ref('Hello World')
name.value = '123'
// name = 123
```

```js
const newObj = reactive({name: '小明'})
newObj.name = '小妹'
// newObj.name = 小妹
```

```js
const newObj = reactive({name: '小明'})
const { name } = toRefs(newObj)
 // name = 小明
```

## computed

* 首先还是得导入 computed 方法

```js
import { ref, computed } from 'vue'
setup(){
  const a = ref(1)
  const c = computed(() => { return a.value * 2 })
  return {
    c //2
  }
}
```
## watchEffect与watch的区别
* watch 是需要传入侦听的数据源，而 watchEffect 是自动收集数据源作为依赖。

* watch 可以访问侦听状态变化前后的值，而 watchEffect 没有，watchEffect获取的改变后的值。

* watch 是属性改变的时候执行，当然也可以immediate，而 watchEffect 是默认会执行一次(相当于自带 immediate)，然后属性改变也会执行。
## watch

```js
import { reactive, watch } from 'vue'
setup(){
  const a = ref(1)
  const b = reactive({ a: 1 })

  //监听 ref数据
  watch(a, (newValue, oldValue) => {
      console.log('---a', newValue, oldValue)
  })
  //监听 reactive 数据 返回一个函数
  watch(() => b.a, (newValue, oldValue) => {
    console.log('---b', newValue, oldValue)
  })
  //同时监听多个值
  watch([() => b.a,() => b.c],([newa,newb],[olda,oldb])=> {
    console.log(newa,olda,'----',newb,oldb );
  })
}
```
## watchEffect

* 立即执行，没有惰性
* 不需要传递你要监听的内容，自动会感知依赖
* 不能获取之前的数据（oldValue）
## todoList
* 举个栗子🌰 

```html
 子组件 todoList
<input type="text" :value="iptValue" @input="handlerInput" />
<button @click="handlerBtn(iptValue)">add</button>
<ul style="width: 400px; margin: 0 auto">
<li v-for="item of list" :key="item">
  {{ item }}
</li>
</ul>
```
```js
import { ref, reactive } from "vue";
//list列表
const listReativeEffect = (iptValue) => {
  const list = reactive([]);
  const handlerBtn = (item) => {
    if(!iptValue.value) {
      alert('输入框内容不能为空')
      return;
    }
    list.push(item);
  };
  return {
    list,
    handlerBtn,
  };
};
//input 
const iptReativeEffect = () => {
  const iptValue = ref('');
  const handlerInput = (e) => {
    iptValue.value = e.target.value;
  };
  return {
    iptValue,
    handlerInput
  }
};
export default {
  setup() {
    const { iptValue, handlerInput } = iptReativeEffect();

    const { list, handlerBtn } = listReativeEffect(iptValue);

    return {
      list,
      handlerBtn,
      iptValue,
      handlerInput,
    };
  },
};
```

## Vuex

```js
import { useStore } from "vuex"

const store = useStore()
const { name } = toRefs(store.state);
const handlerChange = () => {
  // 方法一： 直接通过commit 改变数据
  // store.commit('NAME', 'Hello12121212')
  // 方法二： 通过dispatch 方法派发一个action,改变数据
  store.dispatch('handlerChange','LL')
}

```
index.js

```js
import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      name: "Hello"
    }
  },
  mutations: {
    NAME(state,str) {
      console.log(state,str);
      state.name = str
    }
  },
  actions: {
    handlerChange(state, str) {
      this.commit('NAME',str)
    }
  }
})
```

## Vue-router 

`main.js` 中引用router 并挂载

`beforeEnter` 路由守卫 ，路由跳转前执行某个操作

router.js
```js
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: import(/* webpackChunkName: "about" */ '../views/home/index.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: import(/* webpackChunkName: "about" */ '../views/login/index.vue'),
    beforeEnter (to, from, next) {
      const { isLogin } = localStorage
      isLogin ? next({ path: '/' }) : next()
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, form, next) => {
  const { isLogin } = localStorage
  isLogin || to.name === 'Login' ? next() : next({ name: 'Login' })
})
export default router

```

Login.vue 页面中使用

引入的useRoute,useRouter 相当于vue2的 this.$route()，this.$router()
点击按钮就能跳转到home.vue页面了
```js
import { useRouter } from 'vue-router'
export default {
  name: 'Login',
  setup () {
    const router = useRouter()
    const toHome = () => {
      localStorage.isLogin = true
      router.push({ path: '/' })
    }
    return { toHome }
  }
}
```
## 组件通信

* props
* $emit
* expose / ref
* $attrs
* v-model
* provide / inject
* Vuex

v-model: update:count

* 子组件接收父组件传递过来的 `count` 属性, 点击子组件按钮动态响应父组件的 `count` 数据

父组件
```js
<div>子组件改变父组件传过来的值，并实现数据的双向绑定</div>
{{count}}
<child v-model:count="count"/>

data() {
    return {
      count: 1
    }
  }
```
子组件
```js
<!-- {{count}} -->
<button @click="hanlderBtn">点击改变值</button>
<script>
  export default {
    props: ['count'],
    methods: {
      hanlderBtn() {
        this.$emit('update:count', this.count+3);
      }
    },
  }
</script>

```
## 传送门Teleport
`<Teleport>`是一个内置组件，它允许我们将组件模板的一部分“传送”到存在于该组件的 DOM 层次结构之外的 DOM 节点中。
```js
<teleport to="#modal">
  <div>内容区</div>
</teleport>
<div id="modal">
  <div>内容区</div>
</div>
```
## 如何调用自定义全局方法
新建 plugin/watermark.js
* `Provide/Inject （依赖注入）`
```js
import { inject } from 'vue';
const watermark = {
  set: () => {
    console.log('set watermark');
  },
  show: () => {
    console.log('show watermark');
  },
  hide: () => {
    console.log('hide watermark');
  },
  clear: () => {
    console.log('clear watermark');
  },
  install(app, options) {
    console.log('zouzl,');
    const watermark = this;
    // Here is the plugin register operation
    app.config.globalProperties.$watermark = watermark;
    app.provide('watermark', watermark);
  },
};

const useWaterMark = function () {
  return inject('watermark');
};

export { watermark, useWaterMark };

```
main.js 导入
```js
import { createApp } from 'vue'
import App from './App.vue'
import { watermark } from './plugin/watermark.js'

const app = createApp(App)
app
.use(watermark)
.mount('#app')

```
* App.js 使用
```vue
<template>
</template>
<script setup>
import { getCurrentInstance } from 'vue'
import { useWaterMark } from './plugin/watermark.js'

const watermark = useWaterMark()
watermark.hide()
</script>
<style scoped>

</style>

```