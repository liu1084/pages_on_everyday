---
layout: post
title: "CI/Jenkins poll scm vs build periodically"
date: 2017-08-29 11:08:43 +0800
comments: true
categories: 
---


jenkins的构建触发中Poll SCM和Build periodically的区别

#Poll SCM：定时检查源码变更（根据SCM软件的版本号），如果有更新就checkout最新code下来，然后执行构建动作。我的配置如下：

*/5 * * * *  （每5分钟检查一次源码变化）
 
#Build periodically：周期进行项目构建（它不care源码是否发生变化），我的配置如下：

0 2 * * *  （每天2:00 必须build一次源码）