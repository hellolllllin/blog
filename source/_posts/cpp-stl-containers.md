---
title: C++ 详解标准模板库 STL 容器大总结
top_img: false
date: 2023-01-31 12:29:56
updated: 2023-01-31 12:29:56
sticky:
tags:
  - C++
  - STL
  - 标准模板库
  - OI
categories:
  - 学习笔记
keywords:
  - C++
  - STL
  - 标准模板库
  - 容器
  - Container
  - vector
  - array
  - deque
  - list
  - forward_list
  - set
  - multiset
  - map
  - multimap
  - unordered_map
  - unordered_multimap
  - unordered_set
  - unordered_multiset
  - stack
  - queue
  - priority_queue
description: C++ 详解标准模板库 STL 容器
cover:
comments:
copyright:
copyright_author:
copyright_author_href:
copyright_url:
copyright_info:
aside:
swiper_index:
top_group_index: 4
---

## STL 容器 Containers

STL 叫做 **标准模板库**，所以 STL 容器都是模板类，声明一般是 `containerName<typeName,...> varName` 的形式，因容器具体需求而异。

## 迭代器 Iterator

### 定义和基本使用

迭代器 Iterator 是用来检查和访问 STL 中元素的。它相当于指针，但提供了一些有效性的检查，统一了容器访问方式。

迭代器支持两种运算符，自增 `++` 用来移动迭代器，和解引用 `*`（单目）用来访问迭代器指向的元素。

STL 容器的迭代器类型声明一般是 `containerName<typeName,...>::iterator varName`。

迭代器的出现使得容器的访问出现了一种新的形式（对不支持下表访问的容器很有用）。

``` cpp
std::vector<int> a(15);

// 下标访问
for (int i=0; i<a.size(); i++) std::cout<<a[i]<<std::endl;

// 迭代器访问
for (std::vector<int>::iterator i=a.begin(); i!=a.end(); i++) std::cout<<a[i]<<std::endl;

// auto (自 C++11)
for (auto i=a.begin(); i!=a.end(); i++) std::cout<<a[i]<<std::endl;

for (auto x : a) std::cout<<x<<std::endl;
```

### 迭代器类型

1. 输入迭代器 Input Iterator：拷贝、自增、解引用（访问）；
2. 输出迭代器 Output Iterator：拷贝、自增、解引用（赋值）；
3. 向前迭代器 Forward Iterator：拷贝、自增、解引用（访问和赋值）；
4. 双向迭代器 Bidirectional Iterator：拷贝、自增、自减、解引用（访问和赋值）；
5. 随机迭代器 Random Access Iterator：拷贝、自增、自减、加减、比较、解引用（访问和赋值）。

不同的 STL 容器支持的迭代器不同，在使用时需要多加留意。

指针相当于随机迭代器。

### 迭代器相关函数

一般的 STL 容器都支持从一端或两端访问，也支持 const 常量修饰符。

- `std::advance(iterator, x)` 将迭代器向后移动 `x` 步，若为负数则向前移动；
- `std::next(iterator)`(自 C++11) 获取迭代器的后继而不改变迭代器；
- `std::next(iterator, x)`(自 C++11) 获取迭代器的第 `x` 个后继而不改变迭代器；
- `std::prev(iterator)`(自 C++11) 获取迭代器的前驱而不改变迭代器；
- `std::prev(iterator, x)`(自 C++11) 获取迭代器的第 `x` 个前驱而不改变迭代器。

## 序列式容器 Sequence Containers

### 向量 Vector

在一些题目当中，如果没有给定数据范围或者普通数组会爆内存，这时可以用 `vector` 来存储。

`vector` 是动态开辟的，稳定性优于普通数组，但效率低于普通数组。

可参考 [OI Wiki](https://oi-wiki.org/lang/csl/sequence-container/#vector)。

#### vector 的声明

``` cpp
#include <vector>
using namespace std;

vector<int> a; // 空 vector
vector<int> b(15); // 提前开辟 15 大小的 vector，默认值是 0
vector<int> c(15, 9); // 提前开辟 15 大小的 vector，默认值是 9
vector<int> d(c); // 将 c 复制到此 vector
vector<int> d(move(c)); // 将 c 复制到此 vector，常数复杂度 (自 C++11)
vector<int> e {1,2,3,4,5}; // 直接将 1, 2, 3, 4, 5 赋值到此 vector 中 (自 C++11)
vector<vector<int>> f; // 两个嵌套的 vector，相当于二维数组 (C++11 以前需要在两个大于号之间加入空格)
vector<int> g[1010]; // vector 数组，相当于二维数组
struct node {int u, v, w; };
vector<node> h; // 不同类型的 vector
```

#### 访问 vector

``` cpp
#include <iostream>
#include <vector>
using namespace std;

vector<int> a {1,2,3,4,5}; // 自 C++11

// 下标访问，注意默认下标 0 开始
cout<<a.at(0)<<endl; // 成员函数 at() 下标访问
cout<<a[1]<<endl; // 运算符 [] 下标访问
for (int i=0; i<a.size(); i++) cout<<a[i]<<endl; // 遍历

// 迭代器访问
cout<<*(a.begin())<<endl; // 第一个元素迭代器
cout<<*(a.end())<<endl; // 最后一个元素迭代器
for (vector<int>::iterator i=a.begin(); i!=a.end(); i++) cout<<*i<<endl; // 遍历

// auto
for (auto x : a) cout<<x<<endl; // 遍历
```

#### vector 常用成员函数

``` cpp
#include <iostream>
#include <vector>
using namespace std;

vector<int> a;

// 长度与容量
a.empty(); // 返回 a 是否为空，等价于 a.begin()==a.end()，也等价于 a.size()==0，true 为空，false 为非空
a.size(); // 返回 a 的大小
a.resize(10); // 将 a 的大小重新设定为 10，多退少补

// 增添、删除与赋值
a.clear(); // 将 a 清空
a.insert(iterator, x); // 在某个迭代器处插入 x 元素，线性复杂度

```

## 待更新