---
layout: post
title: "Linux/ssh/How to convert SSH key to putty ppk ?"
date: 2016-10-12 10:48:41 +0800
comments: true
categories: ssh, ppk
---

If you use putty or winSCP tool, and if you want auth with public key rather than password(Not recommander).

But you use 

```shell

ssh-keygen -t RSA
```
putty and winSCP will not accept the format but required a ppk format.

So, you need convert SSH key format to ppk format.

# Steps:

1. Open Putty Key Generator

2. open menu "Conversions" -> "Import" -> "open your SSH private Key" -> "Save it as a ppk format key"
![](http://i.imgur.com/ImnqSDR.png)
![](../image/2016/putty-key-generator.png)
