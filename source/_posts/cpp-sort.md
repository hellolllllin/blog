---
title: C++ 排序 (sort) 常见类型与模板
top_img: false
date: 2022-12-14 09:28:54
updated: 2022-12-21 10:04:45
sticky:
tags:
  - C++
  - 排序
  - OI
categories:
  - 学习笔记
keywords:
  - C++
  - 排序
  - sort
  - 选择排序
  - 冒泡排序
  - 插入排序
  - 基数排序
  - 计数排序
  - 快速排序
  - 归并排序
  - 堆排序
  - 桶排序
  - 希尔排序
  - 锦标赛排序
description: C++ 算法竞赛中常用的排序算法
cover: https://s2.loli.net/2022/12/24/sj9xWqwP1EMK2r5.png
comments:
copyright:
copyright_author:
copyright_author_href:
copyright_url:
copyright_info:
aside:
swiper_index:
---

挺久之前的笔记~~（还不如叫模板）~~了

~~为什么浏览器会把这个当成挪威语页面啊~~

## 排序 Sort

### 选择排序 Selection Sort

每 i 次找出第 i 小的元素，然后与第 i 个元素交换位置。

> 不稳定
>
> 最好时间、平均时间、最坏时间 $O(n^2)$

``` cpp
void selection_sort(int a[], int len) // 长度为 len，下标从 1 开始的数组 a
{
    int p;
    for (int i=1; i<len; i++)
    {
        for (int j=i+1; j<=len; j++)
        {
            if(a[j]<a[i]) p=j;
        }
        std::swap(a[i], a[p]);
    }
    return ;
}
```

### 冒泡排序 Bubble Sort

每次检查相邻两个元素，若前面的元素与后面的元素满足给定的排序条件就交换。当没有相邻元素需要交换时，排序完成。

> 不稳定
>
> 最好时间 $O(n)$
>
> 平均时间、最坏时间 $O(n^2)$

``` cpp
void bubble_sort(int a[], int len) // 长度为 len，下标从 1 开始的数组 a
{
    bool flag=true;
    while(flag)
    {
        flag=false;
        for (int i=1; i<n; i++)
        {
            if(a[i]>a[i+1])
            {
                flag=true;
                std::swap(a[i], a[i+1]);
            }
        }
    }
    return ;
}
```

### 插入排序 Insertion Sort

从未排序数组中选择一个插入到已排序数组的正确位置。

> 稳定
>
> 最好时间 $O(n)$
>
> 平均时间、最坏时间 $O(n^2)$

``` cpp
void insertion_sort(int a[], int len) // 长度为 len，下标从 1 开始的数组 a
{
    for(int i=2; i<=n; i++)
    {
        if(a[i]<a[i-1])
        {
            int t=a[i];
            int j=i-1;
            while(j>0&&a[j]>t)
            {
                a[j+1] = a[j];
                --j;
            }
            a[j+1]=t;
        }
    }
    return ;
}
```

### 计数排序 Counting Sort

使用一个额外的数组记录待排序数组中相同元素的个数，之后根据额外数组排序待排序数组。

> 稳定
>
> 时间 $O(n+w)$ 其中 $w$ 代表待排序数组元素的取值域大小

``` cpp
const int N = 100010;
const int W = 100010;

void counting_sort(int a[], int n, int w)
{
    int c[W], b[N];
    memset(c, 0, sizeof(c));
    for (int i=1; i<=n; i++) ++c[a[i]];
    for (int i=1; i<=w; i++) c[i]+=c[i-1]; // 前缀和
    for (int i=n; i>=1; i--) b[c[a[i]]--] = a[i];
    return ;
}
```

### 基数排序 Radix Sort

将待排序的数组拆分成 k 个关键字，逐个比较关键字。

> 稳定
>
> 时间 $O(kn+\sum_{i=1}^kw_i)$

``` cpp
const int N = 100010;
const int W = 100010;
const int K = 100;
struct element
{
    int key[K];
    bool operator<(const element& y) const {
        for (int i=1;i<=k;++i)
        {
            if(key[i]==y.key[i]) continue;
            return key[i]<y.key[i];
        }
        return false;
    }
} a[N], b[N];

int n, w[K], k, cnt[W];
void counting_sort(int p)
{
    memset(cnt, 0, sizeof(cnt));
    for (int i=1; i<=n; ++i) ++cnt[a[i].key[p]];
    for (int i=1; i<=w[p]; ++i) cnt[i]++cnt[i-1];
    for (int i=n; i>=1; --i) b[cnt[a[i].key[p]]--] = a[i];
    memcpy(a, b, sizeof(a));
    return ;
}
void radix_sort()
{
    for(int i=k; i>=1; --i) counting_sort(i);
    return ;
}
```

### 快速排序 Quicksort

通过分治的方式来将一个数组排序。

> 不稳定
>
> 最好时间、平均时间 $O(n\ log\ n)$
>
> 最坏时间 $O(n^2)$

``` cpp
struct range
{
	int start, end;
    range(int s=0; int e=0) {start=s, end=e;}
};
template <typename T>

void quicksort(T arr[], const int len)
{
    if(len<=0) return ;
    range r[len];
    int p=0;
    r[p++] = range(0, len-1);
    while(p)
    {
        range ran = r[--p];
        if(ran.start>=ran.end) continue;
        T mid = arr[ran.end];
        int l = ran.start, r=ran.end-1;
        while(l<r)
        {
            while(arr[l]<mid&&l<r) l++:
            while(arr[r]>=mid&l<r) r--;
            std::swap(arr[l], arr[ran.end]);
        }
        if (arr[l]>=arr[ran.end])
            std::swap(arr[l], arr[ran.end]);
        else
            l++;
        r[p++] = range(ran.start, l-1);
        r[p++] = range(l+1, ran.end);
    }
}
```

### 归并排序 Merge Sort

通过给数组分段之后合并来排序。

> 稳定
>
> 最好时间、平均时间、最坏时间 $O(n\ log\ n)$

``` cpp
void merge_sort(int l, int r)
{
    if(r-l<=1) return ;
    int mid=l+((r-l)/2);
    merge_sort(l, mid), merge_sort(mid, r);
    for (int i=l, j=mid, k=l; k<r; ++k)
    {
        if(j==r||(i<mid&&a[i]<=a[j]))
            tmp[k]=a[i++];
        else
            tmp[k]=a[j++];
    }
    for(int i=l; i<r; ++i) a[i]=tmp[i];
}
```

### 堆排序 Heapsort

堆排序是建立在堆上的选择排序。

> 不稳定
>
> 最好时间、平均时间、最坏时间 $O(n\ log\ n)$

``` cpp

void sift_down(int arr[], int start, int end) {
  int parent = start;
  int child = parent * 2 + 1;
  while (child <= end) {
    if (child + 1 <= end && arr[child] < arr[child + 1]) child++;
    if (arr[parent] >= arr[child])
      return;
    else {
      swap(arr[parent], arr[child]);
      parent = child;
      child = parent * 2 + 1;
    }
  }
}

void heap_sort(int arr[], int len) {
  for (int i = (len - 1 - 1) / 2; i >= 0; i--) sift_down(arr, i, len - 1);
  for (int i = len - 1; i > 0; i--) {
    swap(arr[0], arr[i]);
    sift_down(arr, 0, i - 1);
  }
}
```

### 桶排序 Bucket sort

桶排序是建立在桶上的排序方法，适用于待排序数据值域较大但分布比较均匀的情况。

> 稳定
>
> 最好时间、平均时间 $O(n+n^2/k+k)$
>
> 最坏时间 $O(n^2)$

``` cpp
const int N = 100010;

int n, w, a[N];
vector<int> bucket[N];

void insertion_sort(vector<int>& A) {
  for (int i = 1; i < A.size(); ++i) {
    int key = A[i];
    int j = i - 1;
    while (j >= 0 && A[j] > key) {
      A[j + 1] = A[j];
      --j;
    }
    A[j + 1] = key;
  }
}

void bucket_sort() {
  int bucket_size = w / n + 1;
  for (int i = 0; i < n; ++i) {
    bucket[i].clear();
  }
  for (int i = 1; i <= n; ++i) {
    bucket[a[i] / bucket_size].push_back(a[i]);
  }
  int p = 0;
  for (int i = 0; i < n; ++i) {
    insertion_sort(bucket[i]);
    for (int j = 0; j < bucket[i].size(); ++j) {
      a[++p] = bucket[i][j];
    }
  }
}
```

### 希尔排序 Shell sort

希尔排序是插入排序的一种改进版本。

> 不稳定
>
> 最好时间 $O(n)$
>
> 平均时间 $O(n^{3/2})$
>
> 最坏时间 $O(n\ log^2\ n)$

``` cpp
template <typename T>
void shell_sort(t array[]， int length)
{
    int h=1;
    while(h<length/3)
    {
        h=3*h+1;
    }
    while(h>=1)
    {
        for(int i=h; i<length; i++)
        {
            for(int j=1; j>=h&&array[j]<array[j-h]; j-=h)
            {
                std::swap(array[j], array[j-h]);
            }
        }
        h/=3;
    }
}
```

### 锦标赛排序 Tournament sort

两两比较，胜者进入下一轮。

类似于树。

> 不稳定
>
> 最好时间、平均时间、最坏时间 $O(n\ log\ n)$

``` cpp
int n, a[maxn], tmp[maxn << 1];

int winner(int pos1, int pos2) {
  int u = pos1 >= n ? pos1 : tmp[pos1];
  int v = pos2 >= n ? pos2 : tmp[pos2];
  if (tmp[u] <= tmp[v]) return u;
  return v;
}

void creat_tree(int &value) {
  for (int i = 0; i < n; i++) tmp[n + i] = a[i];
  for (int i = 2 * n - 1; i > 1; i -= 2) {
    int k = i / 2;
    int j = i - 1;
    tmp[k] = winner(i, j);
  }
  value = tmp[tmp[1]];
  tmp[tmp[1]] = INF;
}

void recreat(int &value) {
  int i = tmp[1];
  while (i > 1) {
    int j, k = i / 2;
    if (i % 2 == 0 && i < 2 * n - 1)
      j = i + 1;
    else
      j = i - 1;
    tmp[k] = winner(i, j);
    i = k;
  }
  value = tmp[tmp[1]];
  tmp[tmp[1]] = INF;
}

void tournament_sort() {
  int value;
  creat_tree(value);
  for (int i = 0; i < n; i++) {
    a[i] = value;
    recreat(value);
  }
}
```


