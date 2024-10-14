---
title: scss
date: 2023-05-11 10:15:14
permalink: /pages/6ef817/
categories:
  - html
tags:
  - 
---
## 媒体查询mixin配合
```css
@mixin ipad {
  @media screen and (mix-width: 769px) {
    @content;
  }
}
.header {
  width: 100px;
  @include ipad {
    width: 500px
  }
}
.footer {
  color: blue;
  @include ipad {
    color: red;
  }
}
```