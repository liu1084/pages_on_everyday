---
layout: post
title: "database/redis/How to setup a pasword for redis?"
date: 2016-10-13 14:26:39 +0800
comments: true
categories: redis, setup a password
---

If redis.conf is existed, open it and change the line:
#requirepass xxxxxxxxxxxxxx

to

requirepass YOUR-PASSWORD-FOR-REDIS

if not, touch a new file named `redis.conf`
and add the line:

requirepass YOUR-PASSWORD-FOR-REDIS

that's all.