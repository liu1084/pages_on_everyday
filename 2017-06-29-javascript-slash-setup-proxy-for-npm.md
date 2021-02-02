---
layout: post
title: "javascript/setup proxy for npm"
date: 2017-06-29 15:18:24 +0800
comments: true
categories: 
---


### npm全局配置文件,取得配置文件的存放位置:

```shell
npm config get globalconfig
```

### npm 用户配置文件

```shell
npm config get userconfig
```

### 查看当前配置 userconfig + globalconfig

```shell
npm config list
```

### 为npm设置代理服务器, 用户名和密码里面的特殊字符需要使用 URL-encoding 转义字符


```shell
npm config set proxy http://username:password@server:port 
```

`

|!	|#	|$	|&	|'	|(	|)	|*	|+	|,	|/	|:	|;	|=	|?	|@	|[	|]  |


|%21|%23|%24|%26|%27|%28|%29|%2A|%2B|%2C|%2F|%3A|%3B|%3D|%3F|%40|%5B|%5D|

`

