---
title: Codeforces Round 918 (Div. 4) B
date: 2024-03-29
categories:
- 题解
tags:
- C++基础语法
- codeforces
- div.3
mathjax: true
---

## 题意

给你一个每一行元素为A,B,C的矩阵，设计一个程序找出这个矩阵中缺少哪个元素并输出。

$$
建个图，举个例子：\\
比如在这个矩阵中我们要求出？具体是哪一个元素，很显然是A，我们只需要输出A即可。\\
\left[
\begin{matrix}
A & B & C \\
C & ? & B \\
B & C & A
\end{matrix}
\right]
$$

## 分析

如何简单快速的求出缺少哪个元素呢？
起初我的想法是这样的:

```C++
//这样做显然太蠢了，我们需要更简单的方法。
#include <iostream>

using namespace std;

int main()
{
    char a,b,c;
    int T;
    cin >> T;
    for(int i = 1; i <= T; i++)
    {
        cin >> a >> b >> c;
        if(a == "A" && b == "B" && c == "?")    cout << "C"<< endl;
        if(a == "A" && b == "?" && c == "C")    cout << "B"<< endl;
        //.........
    }
    return 0;
}
```

那么有没有什么更简单的方法呢？显然是有的，我来介绍一下吧。

```C++
//我们首先要知道<string>中有两个方法一个是：
string::find()
//这个函数是用来查找字符或者字符串。
//第二个是：
string::npos()
//这个函数使用来匹配字符串是否存在的，这里我们是用它的特殊性质，他通常被用作表明没有匹配。
```

那么使用这两个函数这一道题目就很简单了，现在贴一下代码。

```C++
#include <iostream>
#include <string>
using namespace std;

int main()
{
    int T;
    string a;
    cin >> T;
    while(T --)
    {
        for(int i = 1; i <= 3; i++)
        {
            cin >> a;
            //如果？不等于没有匹配到就开始从三个元素当中开始找。
            if(a.find("?") != string::nops)
            {
                if(a.find("A") == string::nops) cout << "A" << endl;
                if(a.find("B") == string::nops) cout << "B" << endl;
                if(a.find("C") == string::nops) cout << "C" << endl;
            }
        }
    }
    return 0;
}
```

## 总结

学会用一些基本库的方法还是挺重要的。
