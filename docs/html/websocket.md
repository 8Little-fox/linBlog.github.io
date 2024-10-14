---
title: websocket
date: 2023-08-10 16:24:55
permalink: /pages/31d191/
categories:
  - html
tags:
  - 
---
* App.vue
```js
import { getToken } from "@/utils/auth";
import WebSocket from "@/utils/socket.js";

export default {
  name: "App",
  data() {
    return {
      WS: null
    };
  },
  created() {
    console.log('11');
    this.createWeb();
  },
  destroyed() {
    this.WS = null;
  },
  methods: {
    createWeb() {
      if (getToken() && WebSocket) {
        this.WS = new WebSocket();
        this.WS.vm.$on("getM", data => {
          try {
            this.getMessage(data);
          } catch (error) {
            console.log(error, "error");
          }
        });
      }
    },
    getMessage(res) {
      if (res.audio) {
        var audio = document.createElement("audio"); //生成一个audio元素
        audio.controls = true; //这样控件才能显示出来
        audio.autoplay = true; //这样控件才能显示出来
        audio.src = res.audio; //音乐的路径
        document.body.appendChild(audio); //把它添加到页面中
      }
      if (res.msg) {
        this.$notify({
          title: "提醒",
          message: res.msg,
          duration: 0,
          type: "success",
          onClick: () => {
            if (
              this.$route.path == "/order/index" ||
              this.$route.path == "/user/index"
            ) {
              this.$router.go(0);
            } else {
              this.$router.replace({
                path: res.newOrder ? "/order/index" : "/user/index"
              });
            }
          }
        });
      }
    }
  }
};
```
* socket.js
```js
import EventCenter from './eventCenter'
import Vue from 'vue'
import { getToken } from "@/utils/auth";

export default class Ws {
  constructor() {
    // 要连接的URL
     // 测试
    this.url = `ws://192.168.5.31:20010/websocket/${getToken()}`;
    //线上
    // this.url = `wss://zjzzshop3.zhongjinzz.com/websocket/${getToken()}`
    // 一个协议字符串或一个协议字符串数组。
    // this.protocols = protocols
    this.vm = new Vue
    // WebSocket 实例
    this.ws = null
    // 是否在重连中
    this.isReconnectionLoading = false
    // 延时重连的 id
    this.timeId = null
    // 是否是用户手动关闭连接
    this.isCustomClose = false
    // 错误消息队列
    this.errorStack = []

    this.token = getToken()
    // 消息管理中心
    this.eventCenter = new EventCenter()
    this.createWs()
  }

  createWs() {
    if (!this.token) return
    if ('WebSocket' in window) {
      // 实例化
      this.ws = new WebSocket(this.url)
      // 监听事件
      this.onopen()
      this.onerror()
      this.onclose()
      this.onmessage()
    } else {
      console.log('你的浏览器不支持 WebSocket')
    }
  }

  // 监听成功
  onopen() {
    this.ws.onopen = () => {
      console.log(this.ws, 'onopen')
      // 发送成功连接之前所发送失败的消息
      this.errorStack.forEach(message => {
        this.send(message)
      })
      this.errorStack = []
      this.isReconnectionLoading = false
    }
  }

  // 监听错误
  onerror() {
    this.ws.onerror = (err) => {
      console.log(err, 'onerror')
      this.reconnection()
      this.isReconnectionLoading = false
    }
  }

  // 监听关闭
  onclose() {
    console.log('监听关闭')
    this.ws.onclose = () => {
      // 用户手动关闭的不重连
      if (this.isCustomClose) return
      console.log('onclose')
      this.reconnection()
      this.isReconnectionLoading = false
    }
  }

  // 接收 WebSocket 消息
  async onmessage() {
    this.ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data)
        console.log('onmessage>>>>', data)
        this.vm.$emit('getM', data)
        this.eventCenter.emit(data.module_type, data.data)
      } catch (error) {
        console.log(error, 'error')
      }
    }
  }

  // 重连
  reconnection() {
    console.log('重连')
    // 防止重复
    if (this.isReconnectionLoading) return

    this.isReconnectionLoading = true
    clearTimeout(this.timeId)
    this.timeId = setTimeout(() => {
      this.createWs()
    }, 3000)
  }

  // 发送消息
  send(message) {
    // 连接失败时的处理
    if (this.ws.readyState !== 1) {
      this.errorStack.push(message)
      return
    }

    this.ws.send(message)
  }

  // 手动关闭
  close() {
    this.isCustomClose = true
    this.ws.close()
    console.log('手动关闭');
  }

  // 手动开启
  start() {
    this.isCustomClose = false
    this.reconnection()
  }

  // 订阅
  subscribe(eventName, cb) {
    this.eventCenter.on(eventName, cb)
  }

  // 取消订阅
  unsubscribe(eventName, cb) {
    this.eventCenter.off(eventName, cb)
  }

  // 销毁
  destroy() {
    this.close()
    this.ws = null
    this.errorStack = null
    this.eventCenter = null
  }
}
```

* eventCenter.js
```js
export default class EventCenter {
  // 通过事件类型作为属性来管理不通的事件回调
  constructor() {
    this.eventStack = {}
  }
  /** 订阅消息类型 */
  on(eventName, cb) {
    const { eventStack } = this
    const eventValue = eventStack[eventName]
    eventValue ? eventValue.push(cb) : eventStack[eventName] = [cb]
  }

  once(eventName, cb) {
    const { eventStack } = this
    const eventValue = eventStack[eventName]
    // 利用闭包的形式 来模拟一次性监听的功能函数
    const tempCb = () => {
      let isOutOfDate = false

      return () => {
        if (isOutOfDate) return
        cb()
        isOutOfDate = true
      }
    }

    eventValue ? eventValue.push(tempCb()) : eventStack[eventName] = [tempCb()]
  }

  /** 关闭订阅 */
  off(eventName, cb) {
    const { eventStack } = this
    const eventValue = eventStack[eventName]

    if (!eventValue) return

    (eventValue || []).forEach((eventCb, index) => {
      if (eventCb === cb) {
        eventValue.splice(index, 1)
      }
    })
  }

  /** 消息分发 */
  emit(eventName, data) {
    const { eventStack } = this
    const eventValue = eventStack[eventName]
    if (!eventValue) return

    (eventValue || []).forEach(eventCb => {
      eventCb(data)
    })
  }
}

```