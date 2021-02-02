---
id: 217
title: upgrade your PHP 7 to 7.0.2
date: 2016-01-26T16:19:15+00:00
author: liu1084
layout: post
guid: http://blog.83096146.com/?p=217
permalink: /?p=217
categories:
  - linux
---
PHP 7.0.2 has been released.
  
The <a href="http://php.net/ChangeLog-7.php#7.0.2" target="_blank">changlog </a>is here.

There are 6 steps:
  
1: download php 7.0.2

<pre>cd /usr/local/src
wget http://kr1.php.net/distributions/php-7.0.2.tar.bz2
</pre>

2: uncompress bz2

<pre>tar jxvf php-7.0.2.tar.bz2
</pre>

3: backup your php.ini

<pre>cp /etc/php.ini /tmp/
</pre>

4: recompile PHP

<pre>./configure \
--prefix=/usr/local/php \
--enable-fpm \
--with-litespeed \
--enable-phpdbg \
--enable-debug \
--with-openssl-dir=/usr/local/openssl-0.9.8zh \
--with-zlib-dir=/usr/local/zlib-1.2.8 \
--enable-bcmath \
--enable-calendar \
--with-curl=/usr/local/curl-7.46.0 \
--enable-dba \
--enable-exif \
--with-pcre-dir=/usr/local/pcre-8.37 \
--enable-ftp \
--with-gd \
--enable-intl \
--enable-mbstring \
--with-mcrypt \
--enable-soap \
--enable-sockets \
--enable-wddx \
--enable-zip \
--with-icu-dir=/usr/local/icu4c-56 \
--with-mcrypt=/usr/local/libmcrypt-2.5.8 \
--with-pdo-mysql=/usr/local/mysql \
--with-mysql-sock=/tmp/mysql.sock \
--with-mysqli=/usr/local/mysql/bin/mysql_config  \
--with-config-file-path=/etc/php.ini
</pre>

5: restart php-fpm

<pre>killall php-fpm
ps auxww | grep php
/usr/local/php/sbin/php-fpm
</pre>

6: restart nginx

<pre>/usr/local/nginx/sbin/nginx -s reopen
</pre>

That&#8217;s all.enjoy yourself.