---
layout: post
title: "yeoman/copy file and folder"
date: 2016-09-13 21:02:34 +0800
comments: true
categories: 
---

```javascript
ncp('generators/app/templates/static/app', this.SOURCE + '/app', function(err){
	if (err){
		return console.log(err);
	}
});
```