---
layout: post
title: "Linux/How to download all of website and filter web page fields to database?"
date: 2017-01-05 23:34:08 +0800
comments: true
categories: 
---


1. download a website using wget

```sh
wget -m -k --page-requisites -H --tries=10 -b -o wget.log --continue --domains=FULL-DOMAINNAME --user-agent="Mozilla/25.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/534.16 (KHTML, like Gecko) Chrome/50.0.648.204 Safari/534.16" --remote-encoding=utf-8 WEB-SITE-DOMAIN
```

2. category files into many directories if downloads is so big

3. coding PHP and process web page

