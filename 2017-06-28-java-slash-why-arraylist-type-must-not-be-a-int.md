---
layout: post
title: "java/Why arraylist type must not be a int?"
date: 2017-06-28 00:02:48 +0800
comments: true
categories: 
---

#ArrayList的定义是：

```java
public class ArrayList<E> extends AbstractList<E> implements List<E>, RandomAccess, Cloneable, java.io.Serializable
```

这里的<E>表示一种泛型，也就是说，必须是一种类型。int是基本数据， 不属于某种类型，所以只能是int的包装类型Integer。

