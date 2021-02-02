---
layout: post
title: "linux/How to show type of all partitions ?"
date: 2017-07-25 17:21:29 +0800
comments: true
categories: 
---


```shell
blkid
# or
parted /dev/sdX -l
```