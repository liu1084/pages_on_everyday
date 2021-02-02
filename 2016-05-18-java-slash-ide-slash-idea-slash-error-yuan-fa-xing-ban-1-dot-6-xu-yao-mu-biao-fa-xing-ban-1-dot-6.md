---
layout: post
title: "java/ide/idea/Error: 源发行版 1.6 需要目标发行版 1.6"
date: 2016-05-18 18:32:29 +0800
comments: true
categories: 
---
在idea中编译时发生如下的错误

Information:Using javac 1.7.0_75 to compile java sources
Information:java: javacTask: 源发行版 1.6 需要目标发行版 1.6
Information:java: Errors occurred while compiling module 'kulong'
Information:15/3/26 13:22 - Compilation completed with 1 error and 0 warnings in 5s 771ms
Error:java: Compilation failed: internal java compiler error
解决办法

setting->Compiler->Java Compiler 设置相应Module的target byte code version的合适版本就行来。