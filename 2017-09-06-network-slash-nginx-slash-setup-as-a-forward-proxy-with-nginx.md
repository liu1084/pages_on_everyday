---
layout: post
title: "network/nginx/setup as a forward proxy with nginx"
date: 2017-09-06 14:11:42 +0800
comments: true
categories: 
---


# Nginx as a forward server:

## create a proxy.conf

```shell
cd /usr/local/nginx/
touch conf/proxy.conf
chmod 644 conf/proxy.conf
```

## edit proxy.conf and add following content to it:

```shell
vi /usr/local/nginx/conf/proxy.conf
server {
        resolver 8.8.8.8;
        listen 3129;
        server_name localhost.com;

        location / {
                proxy_pass $scheme://$http_host$request_uri;
                proxy_set_header Host $http_host;
                proxy_buffers 256 4k;
                
                proxy_max_temp_file_size 0;
                proxy_connect_timeout 30;
                proxy_cache_valid 200 302 10m;
                proxy_cache_valid 301 1h;
                proxy_cache_valid any 1m;
        }
}
```

