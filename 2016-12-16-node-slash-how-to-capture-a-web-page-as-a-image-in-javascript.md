---
layout: post
title: "node/How to capture a web page as a image in javascript?"
date: 2016-12-16 14:11:16 +0800
comments: true
categories: 
---

## Create a js file test.js

```javascript
var webshot = require('webshot');
var fs      = require('fs');
var http = require('http');

var renderStream = {};
var file = {};

var shot = function(url) {
	renderStream = webshot(url);
};

var writeStream = function(imageName){
	file = fs.createWriteStream(imageName, {encoding: 'binary'});
};

var buildHtml = function buildHtml(params) {
	var header = params.header || '<meta charset="UTF-8"><title>Document</title>';
	var body = params.body || '';
	return '<!DOCTYPE html>'
			+ '<html><header>' + header + '</header><body>' + body + '</body></html>';
};

var buildFiles = function(imageName, fileName){
	renderStream.on('data', function(data) {
		file.write(data.toString('binary'), 'binary');
		file = fs.createWriteStream(fileName);
		var params = {
			body: '<img src="' + imageName + '" />'
		};
		var html = buildHtml(params);
		file.write(html);
	});
};


shot('http://localhost:8081/utf-mobile/portal/login.jsp');
writeStream('localhost.png');
buildFiles('localhost.png', 'localhost.html');

```

## Save it & execute under node

```shell
node test.js
```