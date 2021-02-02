---
id: 213
title: 'how to disable HTTP header &#8212; server include nginx version?'
date: 2016-01-26T15:29:16+00:00
author: liu1084
layout: post
guid: http://blog.83096146.com/?p=213
permalink: /?p=213
categories:
  - linux
  - nginx
---
When your nginx woking, if you access it, nginx will return back nginx/X.XX.X.
  
I recommand to not display version, only display &#8220;nginx&#8221;.

How to?Add server_tokens to http context and set it to off,like this:

<pre>http {
    server_tokens off;
    include       mime.types;
    default_type  application/octet-stream;
    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';
    access_log  /var/log/nginx/access.log  main;
    sendfile        on;
    #tcp_nopush     on;
    keepalive_timeout  65;
    gzip  on;
    include     vhost/*.conf;
}

</pre>

then, 

<pre>/usr/local/nginx/sbin/ngin -t
</pre>

if test is OK,
  
reload config file by:

<pre>/usr/local/nginx/sbin/ngin -s reload
</pre>