---
layout: post
title: "java/Getting a random number"
date: 2017-02-03 14:49:11 +0800
comments: true
categories: 
---


- 方法1: Using Math.random()

```java
int random = (int)(Math.random() * 50 + 1);
```

** 解释

Math.random() 将会返回 0.0 到 0.999之前的随机数. 所以,乘以50变成0.0到49.95,再加1,变成1.0到50.95,取整,就会得到1到50.

- 方法2: Using Random 类

```java
int max = 50, min = 1;
Random rand = new Random();
int value = rand.nextInt((max - min) + 1)) + min;
```


