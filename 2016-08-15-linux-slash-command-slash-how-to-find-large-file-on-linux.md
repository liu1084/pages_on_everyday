---
layout: post
title: "linux/command/how to find large file on linux?"
date: 2016-08-15 13:59:47 +0800
comments: true
categories: 
---

# Search or find big files Linux (50MB) in current directory, enter:
```shell
find . -type f -size +50000k -exec ls -lh {} \; | awk '{ print $9 ": " $5 }' 
```

# Search in my /var/log directory:
```shell
find /var/log -type f -size +100000k -exec ls -lh {} \; | awk '{ print $9 ": " $5 }'
```