---
layout: post
title: "java/How to know the version of a jar?"
date: 2017-03-02 10:20:12 +0800
comments: true
categories: 
---


#uncompress jar with zip tools and exture a class file

for example: the class file's name is UTFConfig.class.

#open a shell(if you using ms-windows OS, you can install cygwin)

```sh
$ file UTFConfig.class
```

you will get output:

`UTFConfig.class: compiled Java class data, version 50.0 (Java 1.6)`

# JDK version 

- JDK 1.0 — major version 45
- JDK 1.1 — major version 45 
- JDK 1.2 — major version 46
- JDK 1.3 — major version 47
- JDK 1.4 — major version 48
- JDK 1.5 — major version 49
- JDK 1.6 — major version 50
- JDK 1.7 — major version 51
- JDK 1.8 — major version 52
- JDK 1.9 — major version 53
