---
id: 180
title: Can’t load ‘/usr/local/lib64/perl5/auto/nginx/nginx.so’
date: 2016-01-07T17:31:37+00:00
author: liu1084
layout: post
guid: http://blog.83096146.com/?p=180
permalink: /?p=180
categories:
  - linux
---
While working on Nginx installation from source, I got the following error when I try to run nginx after compilation –
  
[root@localhost nginx-1.6.0]# /usr/sbin/nginx
  
Can’t load ‘/usr/local/lib64/perl5/auto/nginx/nginx.so’ for module nginx: /usr/local/lib64/perl5/auto/nginx/nginx.so: undefined symbol: ngx\_http\_perl\_handle\_request at /usr/share/perl5/XSLoader.pm line 68.
  
at /usr/local/lib64/perl5/nginx.pm line 56.
  
Compilation failed in require.
  
BEGIN failed–compilation aborted.
  
nginx: [alert] perl_parse() failed: 255
  
[root@localhost nginx-1.9.9]#

<!--more-->

The problem occur when I was trying to install the nginx 1.9.9 version on CentOS 7.
  
It was nginx perl module ,I was enabling while compling.

As per Nginx ./configure &#8211;help

&#8211;with-http\_perl\_module enable ngx\_http\_perl_module
  
Solution: To solve this problem use the below given additional option with configure script (i.e &#8211;with-ld-opt=&#8221;-Wl,-E&#8221;)

./configure &#8211;with-http\_perl\_module &#8211;with-ld-opt=&#8221;-Wl,-E&#8221;
  
And then use below given command for further installation