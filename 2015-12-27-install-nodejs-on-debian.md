---
id: 60
title: Install nodejs on debian/ubuntu
date: 2015-12-27T04:22:04+00:00
author: liu1084
layout: post
guid: http://www.83096146.com/blog/?p=60
permalink: /?p=60
categories:
  - javascript
  - linux
tags:
  - install
  - nodejs
---
<pre class="lang:sh decode:true  ">apt-get install python g++ make checkinstall
wget -N http://nodejs.org/dist/node-latest.tar.gz
tar xzvf node-latest.tar.gz && cd node-v*
./configure --prefix=/usr/local/nodejs && make && make install</pre>