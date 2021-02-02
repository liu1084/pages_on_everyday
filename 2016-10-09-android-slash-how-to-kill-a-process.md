---
layout: post
title: "android/How to kill a process?"
date: 2016-10-09 16:53:56 +0800
comments: true
categories: android, kill process
---

1. install shelljs

```shell
npm install shelljs
```


2. execute node shell.js

```shell
edit shell.js
```

```js
var shell = require('shelljs');
var processName = 'cn.com.bailian.bailianmobile';
shell.echo('Now I will force stop process:' + processName);

var callback = function(code){
	if (code !== 0 || shell.exec('adb shell "ps | grep ' + processName + ' | wc -l"').stdout.replace('\r\r\n', '') === '1'){
		shell.exec('adb shell am force-stop ' + processName);
	}else{
		console.log('stopped!');
	}
};

shell.exec('adb shell "set `ps | grep ' + processName + '`; kill -9 $2"', callback);
```