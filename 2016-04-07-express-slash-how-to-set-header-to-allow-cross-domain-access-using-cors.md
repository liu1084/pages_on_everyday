---
layout: post
title: "express/How to set header to allow cross-domain access using CORS"
date: 2016-04-07 01:36:31 +0800
comments: true
categories: express, node, cors
---

How to set header to allow cross domain using CORS
=====

If you use express to develop a APP, a browser display a error:

> XMLHttpRequest cannot load http://localhost:3000/user. No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:63342' is therefore not allowed access.

You can add the code to your app:

	var express = require('express');
	var db = require('../common/db/db.config').db;
	db.bind('user');
	var app = express();

	//设置跨域访问  
	app.all('*', function(req, res, next) {  
	    res.header("Access-Control-Allow-Origin", "*");  
	    res.header("Access-Control-Allow-Headers", "X-Requested-With");  
	    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");  
	    res.header("X-Powered-By",' 3.2.1')  
	    res.header("Content-Type", "application/json;charset=utf-8");  
	    next();  
	});


Enjoy yourself;