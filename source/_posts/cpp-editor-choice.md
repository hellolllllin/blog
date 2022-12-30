---
title: C++ IDE 与 编辑器 的选择
top_img: false
date: 2022-12-24 16:40:32
updated: 2022-12-24 16:40:32
sticky:
tags:
  - C++
  - OI
  - IDE
  - 编辑器
categories:
  - 学习笔记
keywords:
  - C++
  - IDE
  - OI
  - editor
  - 编辑器
description: 如何选择一个适合自己的 IDE 或 编辑器
cover: https://s2.loli.net/2022/12/24/vSeDAo6zCRBkgKF.webp
comments:
copyright:
copyright_author:
copyright_author_href:
copyright_url:
copyright_info:
aside:
swiper_index: 2
---

{% tip info %} 下文的 **编辑器** 多指 **代（源）码编辑器**。 {% endtip %}

## IDE 还是 编辑器？

对不少人来说，选择 IDE 还是 编辑器 仍然是一大难题。

## IDE 是什么？

IDE 是一个集成一些工具为一体的工具。

IDE 能用于编辑、编译、调试和运行等。

通常而言，IDE 是专为一种语言设计的。

大多数而言，IDE 是收费的。

### 好处是？

{% checkbox checked, 调试方便。IDE 提供了各式的调试和分析工具，能帮助开发者快速定位问题。 %}

{% checkbox checked, 标准统一。如果若干开发者使用同一套 IDE 进行同一个项目的工作，IDE 提供的预设和标准可以规范开发者们留下的内容。 %}

### 坏处是？

{% checkbox times checked, 资源要求。许多的 IDE 对计算机性能和资源都有不低的要求。 %}

{% checkbox times checked, 难于上手。熟悉一个 IDE 需要一些时间，对于初学者可能不太友好。 %}

## 编辑器 是什么？

顾名思义，代码编辑器 是用来编辑源代码的工具。

编辑器 通常不能或者很少对调试和运行提供帮助。

通常而言，编辑器 能编辑多种语言。

通常而言，编辑器 是轻量的。

### 好处是？

{% checkbox checked, 轻量便捷。相较于 IDE 而言，编辑器轻量便捷，不会占用太多资源，易于安装、配置和学习。 %}

{% checkbox checked, 编辑灵活。编辑器 通常能编辑（运行）多种语言。 %}

### 坏处是？

{% checkbox times checked, 难于调试。一般的 编辑器 不易于调试和寻找问题。通常需要借助另外的工具。 %}

## 我该如何选择一款 IDE？

下面是几种常见的编写 `C++` 所用到的 IDE：

{% tabs ides, -1 %}

<!-- tab Eclipse -->

引用自维基百科：

{% note default simple %}
Eclipse 是著名的跨平台开源集成开发环境（IDE）。最初主要用来 Java 语言开发，当前亦有人通过插件使其作为 C++、Python、PHP 等其他语言的开发工具。

Eclipse 的本身只是一个框架平台，但是众多插件的支持，使得 Eclipse 拥有较佳的灵活性，所以许多软件开发商以 Eclipse 为框架开发自己的 IDE。

Eclipse 最初是由 IBM 公司开发的替代商业软件 Visual Age for Java 的下一代 IDE 开发环境，2001 年 11 月贡献给开源社区，现在它由非营利软件供应商联盟 Eclipse 基金会（Eclipse Foundation）管理。
{% endnote %}

`OI Wiki` 上对此的介绍：[link](https://oi-wiki.org/tools/editor/eclipse/)。

<!-- endtab -->

<!-- tab Dev-C++ -->

`Dev-C++` 真的是不少 `OIers` 们入门的开发环境了。

`Dev-C++` 的好处是易于安装和配置，还支持单文件编译。

`Dev-C++` 有如下几个分支：

1. `Bloodshed Dev-C++` 这个分支的 `Dev-C++` 由 2005 年停止更新。
2. `Orwell Dev-C++` 相较于上一个分支，这个分支更新了编译器版本，以及修正了不少错误。由 2015 年停止更新。
3. `Embarcadero Dev-C++` 相较于上两个分支，这个分支更新了编译器版本，支持了暗色模式与高 DPI，支持了较高的的 C++ 标准。
4. `小熊猫 C++` 相较于上三个分支，这个分支是由中国开发者开发的。[这个分支](https://royqh1979.gitee.io/redpandacpp) 支持了语法提示和更高版本的 `MinGW`。

`OI Wiki` 上对此的介绍：[link](https://oi-wiki.org/tools/editor/devcpp/)。

<!-- endtab -->

<!-- tab XCode -->

~~点进来的都是用 `macOS` 的小伙伴吧？~~

`XCode` 在 `macOS` 上非常易于开发和使用~~，想要在 `macOS` 装 `C++` 编译器，找 `XCode` 无疑是最简单的方法~~。

`XCode` 美观又简洁，还是由 `Apple` 开发的。但是对于 `OI` 来说，`XCode` 主要是用来开发 `Apple` 系列产品的软件，体积过大，而且只能在 `macOS` 上使用。

`OI Wiki` 上对此的介绍：[link](https://oi-wiki.org/tools/editor/xcode/)。

<!-- endtab -->

<!-- tab GUIDE -->

~~这么鸡肋的 IDE 真有人用啊？~~

`OI Wiki` 上对此的介绍：[link](https://oi-wiki.org/tools/editor/guide/)。

<!-- endtab -->

<!-- tab Geany -->

跟 `Dev-C++` 的特性差不多。

但是，跨平台。

`OI Wiki` 上对此的介绍：[link](https://oi-wiki.org/tools/editor/geany/)。

<!-- endtab -->

<!-- tab CLion -->

`Jetbrains` 家的 `IDE`。用起来嘛，有的人说好，也有的人说坏。

~~用于强大语言的强大工具。~~

`OI Wiki` 上对此的介绍：[link](https://oi-wiki.org/tools/editor/clion/)。

<!-- endtab -->

<!-- tab CP Editor -->

对于 `OIers` 来说，这真的是一个不错的 `IDE`。

这个 `IDE` 是专门为 `OI` 开发的。它可以自动化编译和运行，甚至支持像 `cph` 那样拉取 `Online Judge` 上的样例，还能直接从 `Codeforces` 上提交代码与返回结果。

`OI Wiki` 上对此的介绍：[link](https://oi-wiki.org/tools/editor/cpeditor/)。

<!-- endtab -->

<!-- tab Visual Studio -->

微软家的 `IDE`。

<!-- endtab -->

{% endtabs %}

## 我该如何选择一款 编辑器？

下面是几种常见的编写 `C++` 所用到的 代码编辑器：

{% tabs editors, -1 %}

<!-- tab Vim -->

`Vim` 码字飞飞快。

`OI Wiki` 上对此的介绍：[link](https://oi-wiki.org/tools/editor/vim/)。

<!-- endtab -->

<!-- tab GNU Emacs -->

`Emacs` 也是一款不错的 编辑器。易于上手，配置简单。

`OI Wiki` 上对此的介绍：[link](https://oi-wiki.org/tools/editor/emacs/)。

<!-- endtab -->

<!-- tab Visual Studio Code -->

~~编辑器区大哥多。~~

地表最强编辑器。

`Visual Studio Code` 同样是微软家的。跨平台，而且，好用。

和 `Jetbrains` 家 `IDE` 一样，插件撑起一半生态。

不过不推荐新手使用 `Visual Studio Code`。这玩意的配置很难，而且估计你一看到英文界面和**没进行个性化前**巨丑无比的 `UI` 就被劝退了。

另外，如果你是一个 `OI` 初学者，建议使用 `Code Runner` 而非 `C/C++` 来调试和运行 `C++` 单文件程序。

`OI Wiki` 上对此的介绍：[link](https://oi-wiki.org/tools/editor/vscode/)。

<!-- endtab -->

<!-- tab Notepad++ -->

可爱的软件和可爱的作者，但是。。。嗯。。。

`OI Wiki` 上对此的介绍：[link](https://oi-wiki.org/tools/editor/npp/)。

<!-- endtab -->

<!-- tab Sublime Text-->

`Sublime Text` 同样也是一款优秀的编辑器。

{% note default simple %}
Sublime Text 是一款轻量级的文本编辑器，支持多种语言的语法高亮及代码补全。具有高度的可拓展性以及 Vim 模式，特别的热启动模式大幅减小了文件丢失的可能。
{% endnote %}

`OI Wiki` 上对此的介绍：[link](https://oi-wiki.org/tools/editor/sublime/)。

<!-- endtab -->

{% endtabs %}

## 附一：各 IDE 与 编辑器 对简体中文的支持

| 名称    | 支持     |
| ------- | ---------- |
| Eclipse | 需要安装语言包（官方） |
| Dev-C++ | 原生支持 |
| XCode   | 原生支持 |
| GUIDE   | 原生支持 |
| Geany   | 原生支持 |
| CLion   | 需要安装插件（官方） |
| CP Editor | 原生支持 |
| Visual Studio | 需要安装语言包（官方） |
| Vim     | 原生支持 |
| Emacs   | 原生支持 |
| Visual Studio Code | 需要安装插件（官方） |
| Notepad++ | 原生支持 |
| Sublime Text | 需要安装插件 |

## 附二：NOI Linux 2.0 中内置的 IDE 与 编辑器

1. Code::Blocks
2. Geany
3. Visual Studio Code
4. Emacs
5. Gedit
6. Vim
7. Joe
8. Nano
9. Sublime Text
