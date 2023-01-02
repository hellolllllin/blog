---
title: C++ 流 (stream) 的概念与应用
date: 2022-12-14 10:33:04
updated: 2022-12-22 09:58:46
sticky:
tags:
  - C++
  - 流
  - OI
  - STL
categories:
  - 学习笔记
keywords:
  - C++
  - 流
  - 输入输出
  - 标准输入输出
  - stdio
  - io
  - stream
  - iostream
  - fstream
  - sstream
description: C++ STL 信息之间的输入输出的流动过程，叫做流
cover: https://s2.loli.net/2022/12/24/lZMBXcu9GJvdP1O.png
top_img: false
comments:
copyright:
copyright_author:
copyright_author_href:
copyright_url:
copyright_info:
aside:
swiper_index: 1
top_group_index: 3
---

## 流的概念

之前的代码学习中，已经接触了 `iostream` 库中的 `cin` 和 `cout` 函数。

相对于 `cstdio` 中的 `scanf` 和 `printf` 而言，`cin` 和 `cout` 的好处是不用知道类型。

``` cpp
int a=20;
cout<<a;
printf("%s", a); // a 类型填错，此时虽然 printf 不会报错，但是实际出现 bug
```

C++ 把数据之间的输入输出操作称之为流，即 `stream`。`I/O` 上的流操作当然叫做 `iostream`。同样的，C++ 流还支持文件和字符串。它们分别是 `fstream` 和 `stringstream`。

## STL 中的流类

对于字符串的流，STL 提供了 `char*` 与 `string` 的两个类。分别定义于头文件 `strstream` 和 `stringstream`。

| 分类       | 名称                 | 作用                                                |
| :--------- | :------------------- | :-------------------------------------------------- |
| 基类       | `ios`                | 所有的流类都是它的派生类，它的作用是保存流状态      |
| 输入输出类 | `iostream`           | 输入输出流类的基类                                  |
|            | `fstream`            | 文件输入输出流类                                    |
|            | `stringstream`       | 字符串输入输出流类，类型要求 `std::__cxx11::string` |
|            | `strstream`          | 字符串输入输出流类，类型要求 `char*`                |
| 输入类     | `istream`            | 输入流类的基类                                      |
|            | `istream_withassign` | `>>` 操作                                           |
|            | `ifstream`           | 文件输入流类                                        |
|            | `istringstream`      | 字符串输入类，类型要求 `std::__cxx11::string`       |
|            | `istrstream`         | 字符串输入类，类型要求 `char*`                      |
| 输出类     | `ostream`            | 输出流类的基类                                      |
|            | `ostream_withassign` | `<<` 操作                                           |
|            | `ofstream`           | 文件输出流类                                        |
|            | `ostringstream`      | 字符串输出类，类型要求 `std::__cxx11::string`       |
|            | `ostrstream`         | 字符串输出类，类型要求 `char*`                      |

## getline() 函数

`getline()` 是个有意思的函数。它用于读入字符串。但与 `cin` 不同的是，`getline()` 不忽略开头的空白字符，且丢弃换行符。

## file stream 文件操作

进行 `fstream` 文件操作，必须引入头文件 `iostream` 和 `fstream`。

### 声明流

`ifstream` 表示文件输入流。作用是读取文件当中的内容。

`ofstream` 表示文件输出流。作用是创建或写入文件。

`fstream` 表示文件流。既可以读取，也可以创建和写入。


``` cpp
std::ifstream fin;
std::ofstream fout;
std::fstream fio;
```

### open() 函数

`open()` 函数用来打开文件。`open()` 是一个成员函数。

它的定义如下：

``` cpp
void open(const char* __s, ios_base::openmode __mode)
void open(const std::string& __s, ios_base::openmode __mode)
```

可以看到，第一个参数接受 `char*` 或 `string` 类型。它的意思是指向文件名。

第二个参数是可选的，表示打开文件的方式。

| 模式         | 作用                               |
| :----------- | :--------------------------------- |
| `ios::in`    | 只读                               |
| `ios::out`   | 只写                               |
| `ios::trunc` | 若文件存在，先清空文件，再打开文件 |
| `ios::ate`   | 打开文件，定位到文件末尾           |
| `ios::app`   | 写入的内容都追加到文件末尾         |

第二个参数可以接受多种参数。

如果我想同时读写文件：

``` cpp
using namespace std;
fstream fio;
fio.open("file.txt", ios::in | ios::out);
```

如果我只想确保文件是空的，之后写文件：

``` cpp
using namespace std;
ofstream fout;
fout.open("file.txt", ios::trunc | ios::out);
```

### close() 函数

类似于 C 库中的文件操作最后要 `fclose()`，C++ 文件流操作也需要关闭文件。

它的定义如下：

``` cpp
void close()
```

### 输入输出

就像 `cin` 与 `cout` 一样，文件的输入输出也用 `>>` 与 `<<` 的流运算符。

``` cpp
/*
假设 file.txt 中含有以下内容：
1 | 114514
2 | 1919810
*/

using namespace std;
string a, b;
fstream fio;
fio.open("file.txt", ios::in | ios::out | ios::app);
fio>>a; // 此时 a 是 "114514"
fio>>b; // 此时 b 是 "1919810"
fio<<"homo";
fio.close();

/*
此时 file.txt 含有以下内容：
1 | 114514
2 | 1919810
3 | homo
*/
```

## string stream 字符串流操作

像开头提到的一样，`sscanf` 和 `sprintf` 也能进行字符串操作，但是忘记类型就完蛋。

`stringstream` 和 `strstream` 的好处就显露出来了，方便，而且安全。

`strstream` 对 `char*` 操作，`stringstream` 对 `std::__cxx11::string` 操作。这两个分别定义在 `strstream` 和 `sstream` 头文件内。

为了方便，下文统称这两个流为 `stringstream`。

### clear() 函数

要注意的是，`stringstream` 声明会耗费不少的时间。所以尽量只使用一个 `stringstream`。

`clear()` 函数可以清空 `stringstream` 中的所有内容。

### 输入输出

同样的，字符串流输入输出也用 `>>` 与 `<<` 的流运算符。

``` cpp
std::stringstream a;
std::string tmp="114514";
int ans;
a<<tmp;
a>>ans; // 此时 ans 是 114514
```

### 示例

用字符串流可以方便地进行类型转换。

``` cpp
// 假设我要处理一些个人信息：包括名字，年龄和证件号
using namespace std;

struct person
{
    string name;
    unsigned age;
    long long id;
};

person convert2Person(string info)
{
    stringstream ss;
    string name;
    unsigned age;
    long long id;
    
    ss<<info;
    ss>>name>>age>>id;
    
    return {name, age, id};
}
```

```cpp
// 假设我要将一个不知道类型的变量转换为 string

using namespace std;

// 可以用 template 简化

template <class T>
string convert2String(const T& k)
{
    stringstream ss;
    string res;
    
    ss<<k;
    ss>>res;
    return res;
}

```

## 流的控制

有一些 `I/O` 流控制函数被定义进了 `iomanip` 头里面。

比如说 `setw()`，`setbase()`，`setfill()`，`setiosflags()`，`setprecision()` 等函数。

### setw() 函数

设置域宽。保证输出长度为给定的整数。

``` cpp
using namespace std;
cout<<setw(5)<<10<<setw(5)<<300<<setw(5)<<1145<<endl;
/*
输出结果：
   10  300 1145
*/
cout<<setw(3)<<2<<setw(3)<<1145<<endl;
/*
输出结果：
  21145
*/
```

### setbase() 函数

进制。

``` cpp
using namespace std;
cout<<setbase(2)<<32<<endl;
// 输出：100000
cout<<setbase(16)<<1612<<endl;
// 输出：64c
```

### setfill() 函数

设置填充字符。

``` cpp
using namespace std;
cout<<setfill('=')<<setw(3)<<2<<endl;
// 输出：==2
```

### setiosflags() 函数

格式化输入输出。

| 名称              | 作用                                      |
| ----------------- | ----------------------------------------- |
| `ios::fixed`      | 总是输出浮点数。                          |
| `ios::scientific` | 总是以科学计数法输出。                    |
| `ios::left`       | 左对齐。                                  |
| `ios::right`      | 右对齐。                                  |
| `ios::skipws`     | 忽略前导空格。                            |
| `ios::showpos`    | 正数前加 `+`。                            |
| `ios::showpoint`  | 总是显示小数点。                          |
| `ios::uppercase`  | 十进制以上的进制，输出用大写字母。        |
| `ios::lowercase`  | 十进制以上的进制，输出用小写字母。        |
| `ios::showbase`   | 输出进制（八进制前 `0`，十六进制前 `0x`） |

``` cpp
using namespace std;
cout<<setiosflags(ios::left)<<setw(5)<<1010<<setw(5)<<92<<endl;
/*
输出：（最后有三个空格）
1010 92   
*/
cout<<setiosflags(ios::showpos)<<998<<endl;
/*
输出：
+998
*/
```

### setprecision() 函数

设置精确到浮点数第几位。

``` cpp
using namespace std;
cout<<setiosflags(ios::fixed)<<setprecision(4)<<1.1451419<<endl;
// 输出：1.1451
```


