---
layout: post
title: "What is the diff between DTO and DAO?"
date: 2016-06-19 16:42:44 +0800
comments: true
categories: 
---

- DAO meaning Data Access Object 数据访问对象 

主要用来封装对数据库的访问，通过它可以把POJO持久化为PO，用PO组装出来VO、DTO 

- DTO Data Transfer Object 数据传输对象 

主要用于远程调用等需要大量传输对象的地方。 
比如我们一张表有100个字段，那么对应的PO就有100个属性。 
但是我们界面上只要显示10个字段， 
客户端用WEB service来获取数据，没有必要把整个PO对象传递到客户端， 
这时我们就可以用只有这10个属性的DTO来传递结果到客户端，这样也不会暴露服务端表结构.到达客户端以后，如果用这个对象来对应界面显示，那此时它的身份就转为VO 