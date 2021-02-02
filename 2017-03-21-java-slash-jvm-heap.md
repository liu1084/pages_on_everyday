---
layout: post
title: "java/jvm heap"
date: 2017-03-21 02:27:46 +0800
comments: true
categories: 
---

The Heap is divided into young and old generations as follows :

Young Generation : It is place where lived for short period and divided into two spaces:

Eden Space : When object created using new keyword memory allocated on this space.
Survivor Space : This is the pool which contains objects which have survived after java garbage collection from Eden space.
Old Generation : This pool is basically contain tenured and virtual (reserved) space and will be holding those objects which survived after garbage collection from Young Generation.

Tenured Space: This memory pool contains objects which survived after multiple garbage collection means object which survived after garbage collection from Survivor space.
Permanent Generation : This memory pool as name also says contain permanent class metadata and descriptors information so PermGen space always reserved for classes and those that is tied to the classes for example static members.

Java8 Update: PermGen is replaced with Metaspace which is very similar.
Main difference is that Metaspace re-sizes dynamically i.e., It can expand at runtime.
Java Metaspace space: unbounded (default)
Code Cache (Virtual or reserved) : If you are using HotSpot Java VM this includes code cache area that containing memory which will be used for compilation and storage of native code.
![](img/eP0SJ.png)