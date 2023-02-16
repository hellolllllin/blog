---
title: C++ 快读与快写详解
top_img: false
date: 2023-01-25 09:30:33
updated: 2023-01-25 09:30:33
sticky:
tags:
  - C++
  - 流
  - OI
  - STL
  - 快读快写
categories:
  - 学习笔记
keywords:
  - C++
  - 流
  - iostream
  - cstdio
  - scanf
  - printf
  - cin
  - cout
  - getchar
  - putchar
description: 大数据的快速读入输出
cover:
comments:
copyright:
copyright_author:
copyright_author_href:
copyright_url:
copyright_info:
aside:
swiper_index:
top_group_index: 5
---

下文可能会提及到流，有关流的知识可以参考我的 [另一篇文章](/articles/cpp-stream.html)。

## 普通的输入输出

我们在初学 C++ 时，就知道 `cin` 和 `cout` 能够输入输出控制台数据。它们被包含在头文件 `<iostream>` 中。

之后，又学了一段时间，知道了 `scanf`、`printf`、`getchar`、`putchar` 和 `puts` 等包含在 `<cstdio>` 中的 C 风格输入输出。这些输入输出会比 `cin` 和 `cout` 快。

因此，当我们既想用 `cin` 和 `cout` 省事，又想获得与 `<cstdio>` 一样快的速度，一般我们会加上这句：

``` cpp
std::ios::sync_with_stdio(false);
```

这样就能解开 `<iostream>` 与 `<cstdio>` 的同步锁，使得 `<iostream>` 无需再向 `<cstdio>` 传递流指针，只需做好输入输出，速度自然就快了。

但是这样还有一个问题，执行了语句后，`<iostream>` 和 `<cstdio>` 只能用一个了。因为这俩将不再会传递流指针，导致输入输出乱序，字符错乱。

## 数据多？

数据多而大的时候，`cin`、`cout`、`scanf` 和 `printf` 可能就有点无能为力了。

普通的快读快写模板会教你用 `getchar` 和 `putchar` 替换上面的四种输入输出。

``` cpp
// Hellolin - https://hellolin.cf/
#include <cstdio> // 或 <iostream>

#ifndef fastio
#define fastio
namespace fastio
{
#define endl '\n'
    template <class T> inline void read(T& x)
    {
        x=0;
        bool s=0;
        char c=getchar();
        while ((c<'0'||c>'9') && c)
        {
            s=(c=='-');
            c=getchar();
        }
        while (c>='0'&&c<='9')
        {
            x=(x << 1)+(x << 3)+(c^'0');
            c=getchar();
        }
        if(s) x=-x;
        return ;
    }
    template <class T> inline void write(T x)
    {
        if(x<0)
        {
            putchar('-');
            x=-x;
        }
        if(x>9) write(x/10);
        putchar(x%10+'0');
        return ;
    }
}
#endif

int main()
{
    int a;
    fastio::read(a); // 执行 using namespace fastio; 可以省略前面的 fastio::
    fastio::write(a);
    return 0;
}
```

接下来要面临两个问题：

第一，一个一个字符操作太慢了，我们可以使用 `fread` 和 `fwrite` 对缓冲区操作。

第二，调用函数读入很麻烦，我们可以重载运算符 `<<` 和 `>>`，使能像 `cin` 和 `cout` 一样使用流运算符。

## 最终代码

于是，我们就得到了一个超级快~的快读快写！

``` cpp
// Hellolin - https://hellolin.cf/
#include <iostream>

#ifndef fastio
#define fastio
namespace fastio
{
    // 请一定不要使用 std::ios::sync_with_stdio(false); 语句
    // 请一定不要使用 std::ios::sync_with_stdio(false); 语句
    // 请一定不要使用 std::ios::sync_with_stdio(false); 语句
    // 请一定不要使用 std::ios::sync_with_stdio(false); 语句
    // 请一定不要使用 std::ios::sync_with_stdio(false); 语句

    // 配置项 START
//#define debug // 开发人员调试，取消注释此行
#define MAX_SIZE 1<<18 // 缓冲区最大大小，2^18应该够用了
#define endl '\n' // 大部分 Online Judge 都是 Linux 环境，保持默认即可
#define isdigit(x) (x>='0'&&x<='9') // 调试方便，保持默认即可
#define isblank(x) (x==' '||x=='\n'||x=='\t'||x=='\r') // 全平台适配，保持默认即可
    // 配置项 END
    class fastIn
    {
        char ibuf[MAX_SIZE],*p1,*p2;
#ifdef debug
#define gc() getchar()
#else
#define gc() (p1==p2 && (p2=(p1=ibuf)+fread(ibuf,1,MAX_SIZE,stdin), p1==p2) ? 0 : *p1++)
#endif
        public:
            template<class T>
            fastIn operator>>(T&x)
            {

            }
    }
}
#endif

```
