---
layout: post
title: "js/How to select text of a range?"
date: 2017-01-10 11:19:59 +0800
comments: true
categories: 
---


```js
function selectText(containerid) {
	if (document.selection) {
		var range = document.body.createTextRange();
		range.moveToElementText(document.getElementById(containerid));
		range.select();
	} else if (window.getSelection) {
		var range = document.createRange();
		range.selectNode(document.getElementById(containerid));
		window.getSelection().addRange(range);
	}
}
```