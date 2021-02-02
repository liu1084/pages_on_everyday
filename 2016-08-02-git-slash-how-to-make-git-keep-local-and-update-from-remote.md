---
layout: post
title: "git/How to make git keep local and update from remote?"
date: 2016-08-02 14:23:06 +0800
comments: true
categories: git local file
---

需求: 本地修改不能提交到远程仓库,但是需要跟远程仓库同步

```shell
git update-index assume-unchanged -- filename 
```
