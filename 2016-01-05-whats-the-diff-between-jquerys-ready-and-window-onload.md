---
id: 145
title: 'What&#8217;s the diff between jQuery&#8217;s ready and window onload?'
date: 2016-01-05T00:26:31+00:00
author: liu1084
layout: post
guid: http://blog.83096146.com/?p=145
permalink: /?p=145
categories:
  - javascript
  - jQuery
---
  * onload 是window自己实现的事件，而ready是jQuery自己实现的
  * onload的触发是在页面全部加载完成（包括：image、css），而jQuery是dom加载完成之后，所以onload发生在ready之后