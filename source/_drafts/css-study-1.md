---
title: CSS 层叠样式表 基础学习与复习 Part 1
top_img: false
date: 2022-12-29 10:37:58
updated: 2022-12-29 10:37:58
sticky:
tags:
  - CSS
  - 层叠样式表
  - 前端
categories:
  - 学习笔记
keywords:
  - CSS
  - HTML
  - 层叠样式表
  - 前端
  - 设计
description: 为初学前端学习者提供学习 CSS 路线
cover:
comments:
copyright:
copyright_author:
copyright_author_href:
copyright_url:
copyright_info:
aside:
swiper_index:
---

## 什么是 CSS？

改动自 [维基百科的介绍](https://zh.wikipedia.org/wiki/%E5%B1%82%E5%8F%A0%E6%A0%B7%E5%BC%8F%E8%A1%A8)。

{% note primary modern %}

运用 `HTML`，我们可以组成基础的网页页面，让浏览器解析 `HTML`。

`CSS`，即 `Cascading style Sheets`，层叠样式表，是用来格式化 `HTML` 和 `XML` 文件，以及为这些文件添加样式的语言。

`CSS` 被 [W3C](https://www.w3.org) 定义和维护。第三版标准，即 `CSS3` 已经被大部分的的现代浏览器支持。

`CSS` 的出现使网页不再那么枯燥和单调。

{% endnote %}

## CSS 的基础格式和概念

### 基础语法

下面是一个 `CSS` 示例。

``` css
h1 {
    color: red;
}
```

在这个示例中，整段代码是一个 `Ruleset`，即 **规则集**。

`CSS` 的样式需要指定应用到 `HTML` 的某个（些）元素，这段代码中的 
