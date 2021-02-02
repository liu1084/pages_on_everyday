---
layout: post
title: "linux/How to make a googleapi ?"
date: 2016-05-21 03:05:46 +0800
comments: true
categories: linux googleapis 
---

在浏览网站的时候，发现网站很多都引用了googleapi的js例如：
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.3/jquery.min.js"></script>，在中国，google是无法打开的，更别说这些api了。
但是封杀google就可以，api招谁惹谁了，闲的蛋疼？

按F12打开控制台，发现jquery（$)一大堆错误，说明这个网站肯定是无法正常访问了。
有没有办法防止这个发生呢？
自己模拟一个，比如在公司的局域网，建一台web服务器，然后把所有指向ajax.googleapis.com，在hosts文件中指向内网的这台web服务器。

- download nginx
[Nginx](http://nginx.org)

- create nginx config file
    server {
            listen       80;
            server_name  ajax.googleapis.com;
            root /usr/local/nginx/html/googleapis;
            index index.php index.html;
            charset utf-8;
            access_log  /usr/local/nginx/logs/ajax.googleapis.com.access.log  main;

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
            root /usr/local/nginx/html/googleapis;
            index index.php index.html;
            charset utf-8;
            access_log  /usr/local/nginx/logs/ajax.googleapis.com-ssl.access.log  main;
            ssl on;
            ssl_certificate /usr/local/nginx/conf/ssl/certs/myssl.crt;
            ssl_certificate_key /usr/local/nginx/conf/ssl/private/myssl.key;

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


- download all jquery version
    #Create SSL KEY & CERT

    #!/bin/bash
    echo "Generating an SSL private key to sign your certificate..."
    openssl genrsa -des3 -out myssl.key 1024

    echo "Generating a Certificate Signing Request..."
    openssl req -new -key myssl.key -out myssl.csr

    echo "Removing passphrase from key (for nginx)..."
    cp myssl.key myssl.key.org
    openssl rsa -in myssl.key.org -out myssl.key
    rm myssl.key.org

    echo "Generating certificate..."
    openssl x509 -req -days 365 -in myssl.csr -signkey myssl.key -out myssl.crt

    echo "Copying certificate (myssl.crt) to /usr/local/nginx/conf/ssl/certs/"
    mkdir -p  /usr/local/nginx/conf/ssl/certs
    cp myssl.crt /usr/local/nginx/conf/ssl/certs/

    echo "Copying key (myssl.key) to /usr/local/nginx/conf/ssl/private/"
    mkdir -p  /usr/local/nginx/conf/ssl/private
    cp myssl.key /usr/local/nginx/conf/ssl/private/


    # Download all version
    jqueryDirName="/usr/local/nginx/html/googleapis/ajax/libs/jquery/"
    mkdir -p $jqueryDirName

    for i in 2.2.3  2.2.2  2.2.1  2.2.0  2.1.4  2.1.3  2.1.1  2.1.0  2.0.3  2.0.2  2.0.1  2.0.0  1.12.3  1.12.2  1.12.1  1.12.0  1.11.3  1.11.2  1.11.1  1.11.0  1.10.2  1.10.1  1.10.0  1.9.1  1.9.0  1.8.3  1.8.2  1.8.1  1.8.0  1.7.2  1.7.1  1.7.0  1.6.4  1.6.3  1.6.2  1.6.1  1.6.0  1.5.2  1.5.1  1.5.0  1.4.4  1.4.3  1.4.2  1.4.1  1.4.0  1.3.2  1.3.1  1.3.0  1.2.6  1.2.3
    do
        echo "$i";
        versionDirName=$jqueryDirName"$i";
        mkdir -p $versionDirName;
        wget https://ajax.googleapis.com/ajax/libs/jquery/$i/jquery.min.js | mv jquery.min.js $versionDirName;
    done

- modify your hosts

    IP     ajax.googleapis.com

