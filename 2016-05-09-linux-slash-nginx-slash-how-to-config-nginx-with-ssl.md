---
layout: post
title: "linux/nginx/How to config nginx with SSL"
date: 2016-05-09 09:36:25 +0800
comments: true
categories:  linux nginx ssl
---

- step 0: Create directories & Create config files

    cd nginx-VERSION
    
    mkdir -p vhost
    
    mkdir -p conf/ssl
    
    touch vhost/googleapis.conf
    
- step 1: Generate a Self-Signed Certificate

    cd conf/ssl
    
    openssl req -newkey rsa:2048 -nodes -keyout server.key -x509 -days 99999 -out server.crt

    Generating a 2048 bit RSA private key
    .................................................+++
    ............+++
    writing new private key to 'server.key'
    \-----
    You are about to be asked to enter information that will be incorporated
    into your certificate request.
    What you are about to enter is what is called a Distinguished Name or a DN.
    There are quite a few fields but you can leave some blank
    For some fields there will be a default value,
    If you enter '.', the field will be left blank.
    \-----
    Country Name (2 letter code) [AU]:CN
    State or Province Name (full name) [Some-State]:LIAONING
    Locality Name (eg, city) []:DALIAN CITY
    Organization Name (eg, company) [Internet Widgits Pty Ltd]:MyCompany Co. Ltd
    Organizational Unit Name (eg, section) []:Platform
    Common Name (e.g. server FQDN or YOUR name) []:ajax.googleapis.com
    Email Address []:liu1084@gmail.com
    
- step 2: Add Certificate to nginx

vim conf/nginx.conf
    
    user  nobody;
    worker_processes  4;
    error_log  d:/http/nginx-1.9.12/logs/nginx.error.log  info;
    pid        d:/http/nginx-1.9.12/nginx.pid;
    events {
        worker_connections  1024;
    }
    
    http {
        server_tokens off;
        include       mime.types;
        default_type  application/octet-stream;
        log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                          '$status $body_bytes_sent "$http_referer" '
                          '"$http_user_agent" "$http_x_forwarded_for"';
        access_log  d:/http/nginx-1.9.12/logs/access.log  main;
        sendfile        on;
        tcp_nopush     on;
        keepalive_timeout  65;
        gzip  on;
    
        include vhost/*.conf;
    }

vim vhost/googleapis.conf
    
    server {
        listen       80;
        server_name  ajax.googleapis.com;
        root d:/http/nginx-1.9.12/html/googleapis;
        index index.php index.html;
        charset utf-8;
        access_log  d:/http/nginx-1.9.12/logs/ajax.googleapis.com.access.log  main;

        location / {
            try_files $uri $uri/ /404.html;
        }
        error_page  404              /404.html;
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }

        location ~ \.php$ {
            try_files $uri =404;
            fastcgi_split_path_info ^(.+\.php)(/.+)$;
            fastcgi_pass 127.0.0.1:9000;
            fastcgi_index index.php;
            fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
            include fastcgi_params;
        }
        location ~ /\.ht {
            deny  all;
        }
    }

    server {
        listen       443;
        server_name  ajax.googleapis.com;
        root d:/http/nginx-1.9.12/html/googleapis;
        index index.php index.html;
        charset utf-8;
        access_log  d:/http/nginx-1.9.12/logs/ajax.googleapis.com-ssl.access.log  main;
        ssl on;
        ssl_certificate D:/http/nginx-1.9.12/conf/ssl/server.crt;
        ssl_certificate_key D:/http/nginx-1.9.12/conf/ssl/server.key;

        location / {
            try_files $uri $uri/ /404.html;
        }
        error_page  404              /404.html;
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }

        location ~ \.php$ {
            try_files $uri =404;
            fastcgi_split_path_info ^(.+\.php)(/.+)$;
            fastcgi_pass 127.0.0.1:9000;
            fastcgi_index index.php;
            fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
            include fastcgi_params;
        }
        location ~ /\.ht {
            deny  all;
        }
    }
    
    
- step 3: Checking your nginx configure
    
    nginx -t
    
- step 4: Restart nginx
    
    nginx -s reload

