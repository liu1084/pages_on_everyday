---
layout: post
title: "i18n/using jquery.i18n.properties"
date: 2017-06-06 17:27:21 +0800
comments: true
categories: 
---

# 使用jquery.i18n.properties 插件为页面中的icon添加国际化title

## 在springMVC项目中添加资源文件:

1. resources/i18n/mobile.properties
2. resources/i18n/mobile_zh.properties
3. resources/i18n/mobile_en.properties
4. resources/i18n/mobile_jp.properties

## 在配置文件中添加映射访问目录i18n

```xml
<!-- mapping i18n to path -->
<mvc:resources mapping="/i18n/**" location="classpath:/i18n/"/>
```

## 定义一个加载资源文件的函数,并对页面中的icon进行匹配,使用资源文件中定义的key,显示icon的title

```javascript
define(['domReady', 'jquery', 'i18n', 'jqueryCookie'], function(domReady, $, i18n){
	$.i18n.properties({
		name: 'mobile',
		path: appPath + '/i18n/',
		mode: 'both',
		language: $.cookie('lang') ? $.cookie('lang') : 'zh',
		callback: function(){
			console.log('i18n properties loaded successfully');
		}
	});

	var IconTitle = function(){};
	IconTitle.prototype = {
		addTitleForIcon: function(){
			var icons = $('.icon');
			for (var i = 0; i < icons.length; i++){
				var iconElementClasses = $(icons[i]).attr('class').split(/[\s]+/);
				var titleName = '';
				for (var j = 0; j < iconElementClasses.length; j++){
					var pattern = new RegExp('^icon\-([^\s]+)', 'i');
					var result = pattern.exec(iconElementClasses[j]);
					debugger;
					if (result && result[1]){
						titleName = result[1].replace('-', '');
						$(icons[i]).attr('title', $.i18n.prop(titleName));
					}
				}
			}
		}
	};

	return IconTitle;
});
```

## 在页面中, 执行:

```javascript
require(['loadProperties'], function(IconTitle){
	var load = new IconTitle();
	load.addTitleForIcon();
});
```

如果要在cookie中存储语言可以:

```javascript

var setLanguageCookie = function (language) {
    var d = new Date();
    d.setTime(d.getTime() + (30 * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = "language=" + escape(language) + "; " + expires + "; path=/";
};

var lan = navigator.language || navigator.userLanguage;
var arrStr = document.cookie.split("; ");
for (var i = 0; i < arrStr.length; i++) {
    var temp = arrStr[i].split("=");
    if (temp[0] == 'language') {
        lan = unescape(temp[1]);
    }
}
$.i18n.properties({
    name: 'message',
    path: contextPath + '/i18n/',
    mode: 'map',
    language: lan
});
```