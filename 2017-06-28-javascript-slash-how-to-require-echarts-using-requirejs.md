---
layout: post
title: "javascript/How to require echarts using requirejs?"
date: 2017-06-28 19:19:57 +0800
comments: true
categories: 
---

## How to build echarts && require it && how to using echart generate charts

### install zrender && echarts using npm

```shell
npm i zrender echarts --save
```

### build echarts using webpack

```shell
npm i webpack -g
cd echarts
npm install
npm link webpack
webpack -p
```

### config require path in main.js
```javascript
paths: {
	//...may be you should dependency jquery...
	'echarts': 'static/vendor/echarts/dist/echarts.min',
	'zrender': 'static/vendor/zrender/build/zrender',

	//...
}

```
### using

```javascript
require(['echarts', 'zrender'], function (echarts) {
	$.get('disk.tree.json', function (diskData) {
		//...
		option = {
			title: {
				text: 'xxxxxxxxxxxxxx',
				left: 'center'
			},
			//...
		};
		var element = echarts.init(document.getElementById('your dom element id'), 'your selected theme');
		element.setOption(option);
	});
});
```

that's all. enjoy it!