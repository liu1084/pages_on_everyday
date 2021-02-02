---
layout: post
title: "PHP/laravel/predis not found"
date: 2016-09-14 10:49:55 +0800
comments: true
categories: 
---


## laravel Class 'Predis\Client' not found

1. Open composer.json,add predis dependency
```json
 "require-dev": {
	//...
    "predis/predis": "1.1.*@dev"
  },
```

2. update

```shell
composer update
```