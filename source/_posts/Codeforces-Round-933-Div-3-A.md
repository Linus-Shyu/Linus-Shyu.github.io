---
title: Codeforces Round 933 (Div. 3) A
date: 2024-03-24
categories:
- 题解
tags:
- C++基础语法
- codeforces
- div.3
mathjax: true
---

## 前提

比赛差一点点就做出来了，问题还是出在循环上，和之前[ABC327B](https://atcoder.jp/contests/abc327/tasks/abc327_b)循环不会的那道题一摸一样。

## 题目大意

设计一个程序，使其满足：

$$
b_{i} + c_{i} \leq k
$$

如果满足条件就计数，在遍历完所有的数组后输出。

## 分析

$$
1.\text{首先需要一个for循环来读}b_{i}\text{.}\\
2.\text{其次还需要一个for循环来读}c_{i}\text{.}\\
3.\text{最后需要使用一个for循环来让}b_{i}\text{的值和}c_{i}\text{的值在同一局域内方便比较。}\\
4.\text{使用if来匹配是否满足}b_{i} + c_{i}\leq k\text{的条件}\\
4.\text{如果匹配到就计数，最后在数组遍历完输出即可。}
$$
放一张图便于理解：

[![匹配过程图像化](https://i.postimg.cc/XNFsW6FR/1.jpg)](https://postimg.cc/7bH31cK9)

## 代码

```C++
#include <iostream>

using namespace std;

int T;
int n,m,k;
int main()
{
    cin >> T;
    while(T --)
    {
        cin >> n >> m >> k;
        int ans = 0;
        int arr[n],arr2[m];
        for(int i = 0; i < n; i++)
        {
            //读入b[i]
            cin >> arr[i];
        }
        for(int j = 0; j < m; j++)
        {
            //读入c[i]
            cin >> arr2[j];
            //最后需要使用一个for循环来让b[i]和c[i]的值在同一局域内方便比较。
            for(int i = 0; i < n; i++)
            {
                //进行匹配
                if((arr[i] + arr2[j]) <= k)
                {
                    ans ++;
                }
            }
        }
        cout << ans << endl;
    }
    return 0;
}
```

## 结语

我凑，没啥好说的太累了。
