---
id: 11
title: Install nginx+php7+mysql+wordpress on debian
date: 2015-12-22T18:38:20+00:00
author: liu1084
layout: post
guid: http://www.83096146.com/blog/?p=11
permalink: /?p=11
categories:
  - linux
  - php
---
<a href="http://php.net/" target="_blank"><img class="alignnone size-medium wp-image-14" src="http://www.83096146.com/blog/wp-content/uploads/2015/12/install-and-compile-php-7-on-linux-620x297-300x144.png" alt="install-and-compile-php-7-on-linux-620x297" width="300" height="144" srcset="http://blog.83096146.com/wp-content/uploads/2015/12/install-and-compile-php-7-on-linux-620x297-300x144.png 300w, http://blog.83096146.com/wp-content/uploads/2015/12/install-and-compile-php-7-on-linux-620x297.png 620w" sizes="(max-width: 300px) 100vw, 300px" /><img class="alignnone size-full wp-image-71" src="http://www.83096146.com/blog/wp-content/uploads/2015/12/nginx.jpg" alt="nginx" width="299" height="168" /><img class="alignnone size-full wp-image-73" src="http://www.83096146.com/blog/wp-content/uploads/2015/12/mariadb.png" alt="mariadb" width="272" height="140" /></a>

&nbsp;

以前使用过php4和php5，后来一直没用PHP做过什么正规的东西。PHP7如期而至，让我有点小激动，难道接下来是PHPer的春天了么？zend公司毕竟不如oracle、google这些公司那么牛气冲天，但是即使这样一个小公司，却给类似我这样的phper带来了很多惊喜：

  1. performance 是php5.6的2倍
  2. 显著的减小了内存的使用
  3. 抽象语法树
  4. 统一的64位支持（包括字符、数字）
  5. 提高了异常层次，把许多原来的Error转为Exception，便于代码更多的处理异常
  6. 安全随机数的生成器
  7. 去掉了一些老旧的扩展和特性
  8. null合并操作符
  9. 添加了类型声明（可选）
 10. 匿名类
 11. 无消耗语言（测试）

无聊的比较和测试别人都做过了，我做点实际的：安装php并且使用，过些日子还准备看看yii2和lavarel5写点东西。

<!--more-->

  * 申请linode服务器

国内的服务器提供商也挺多，选择linode是因为服务器的磁盘是SSD，价格也还公道，最主要的是比较稳定。从国内ping，返回大概300多毫秒。

  * 配置和启动服务器

linode服务器，我选择了$10的那种（2.5GHz CPU、1GB Memory、15TB流量、20GB硬盘、独立IP），几乎支持所有的linux服务器版本，我选择了debian8.1。

  * 设置dns和域名

我在阿里云那边买了个域名，dns可以自己设置，配置了A和MX记录

mail.83096146.com(需要配置mx和A两条记录才能正确解析)

blog.83096146.com

www.83096146.com

<pre class="lang:sh decode:true">nslookup
&gt; 83096146.com
Server:         50.116.62.5
Address:        50.116.62.5#53

Non-authoritative answer:
Name:   83096146.com
Address: 45.79.180.85
&gt; mail.83096146.com
Server:         50.116.62.5
Address:        50.116.62.5#53

Non-authoritative answer:
Name:   mail.83096146.com
Address: 45.79.180.85
&gt; blog.83096146.com
Server:         50.116.62.5
Address:        50.116.62.5#53

Non-authoritative answer:
Name:   blog.83096146.com
Address: 45.79.180.85
&gt; exit</pre>

  * 启动sshd

apt-get install sshd

update-rc.d sshd default

  * 设置公钥和私钥访问

服务器安装配置好sshd后，做好能使用公钥和私钥进行认证，密码认证关闭。使用putty或者使用securCRT进行服务器管理，比较方便。

  * 安装必要组建

apt-get install build-essential zlib1g-dev libpcre3-dev libssl-dev libxslt1-dev libxml2-dev libgd2-xpm-dev libgeoip-dev libgoogle-perftools-dev libperl-dev

download & manual install:

  1. pcre 8.3.7
  2. zlib 1.2.8
  3. icu
  4. libmcrypt-2.5.8
  5. mariadb-10.1.9
  6. nginx-1.9.9
  7. node-v5.3.0
  8. openssl-0.9.8zh
  9. php-7.0.1

出了nginx/php/mysql需要添加参数外，其他的几个只需要指定路径，然后编译安装即可。

Nginx编译参数

<pre class="lang:sh decode:true">./configure \
--prefix=/usr/local/nginx \
--error-log-path=/var/log/nginx \
--http-log-path=/var/log/nginx \
--with-select_module \
--with-poll_module \
--with-threads \
--with-file-aio \
--with-ipv6 \
--with-http_ssl_module \
--with-http_v2_module \
--with-http_realip_module \
--with-http_addition_module \
--with-http_xslt_module \
--with-http_image_filter_module \
--with-http_geoip_module \
--with-http_sub_module \
--with-http_dav_module \
--with-http_flv_module \
--with-http_mp4_module \
--with-http_gunzip_module \
--with-http_gzip_static_module \
--with-http_auth_request_module \
--with-http_random_index_module \
--with-http_secure_link_module \
--with-http_degradation_module \
--with-http_slice_module \
--with-http_stub_status_module \
--with-http_perl_module \
--with-mail \
--with-mail_ssl_module \
--with-stream \
--with-stream_ssl_module \
--with-google_perftools_module \
--with-cpp_test_module \
--with-cc=/usr/bin/gcc \
--with-cpp=/usr/bin/cpp \
--with-pcre=../pcre-8.37 \
--with-pcre-jit \
--with-zlib=../zlib-1.2.8 \
--with-openssl=../openssl-0.9.8zh \
--with-debug</pre>

删除已有的PHP，新的编译参数如下：

<pre class="lang:sh decode:true">apt-get -y purge php.*
./configure \
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
--with-config-file-path=/etc/php.ini</pre>

MySQL的编译

apt-get update
apt-get install build-essentials
mkdir mariadb
cd mariadb
wget http://downloads.askmonty.org/f/mariadb-5.3.3-rc/kvm-tarbake-jaunty-x86/mariadb-5.3.3-rc.tar.gz/from/http:/ftp.osuosl.org/pub/mariadb
mv mariadb mariadb-5.3.3-rc.tar.gz
tar -xzf mariadb-5.3.3-rc.tar.gz  
ln -s mariadb-5.3.3-rc latest
cd latest    
mkdir /usr/local/mysql
mkdir /var/run/mysqld
groupadd mysql
useradd -d /usr/local/mysql -s /bin/false -g mysql
chown mysql:mysql /usr/local/mysql  
chown mysql:root /var/run/mysqld
apt-get install libncurses5-dev


./configure \
--disable-distribution \
--enable-assembler \
--with-gnu-ld \
--with-charset=utf8 \
--with-extra-charsets=none \
--without-uca \
--with-pthread \
--with-mysqld-user=mysql \
--with-fast-mutexes \
--with-atomic-ops=smp \
--with-big-tables \
--with-libevent=yes \
--with-mysqlmanager=no \
--without-man \
--with-plugins=max-no-ndb \
--prefix=/usr/local/mysql

make
make test
make install
chown -R mysql:mysql /usr/local/mysql
/usr/local/mysql/bin/mysql_install_db --user=mysql
/usr/local/mysql/bin/mysqld_safe --user=mysql &
/usr/local/mysql/bin/mysql -u root</pre>

  * 配置并测试

nginx

<pre class="lang:sh decode:true ">user  nobody;
worker_processes  4;
error_log  /var/log/nginx.error.log  info;
pid        /var/log/nginx.pid;

events {
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;
    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';
    access_log  /var/log/nginx.www.83096146.com.access.log  main;
    sendfile        on;
    #tcp_nopush     on;
    keepalive_timeout  65;
    gzip  on;
    include     vhost/*.conf;
}</pre>

添加虚拟主机配置：

<pre class="lang:sh decode:true">mkdir /usr/local/nginx/conf/vhost -p
touch blog.conf
server {
        listen       80;
        server_name  blog.83096146.com;
        root /usr/local/nginx/html/blog;
        index index.php index.html index.htm;
        charset utf-8;
        access_log  /var/log/www.83096146.com.access.log  main;
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
            # NOTE: You should have "cgi.fix_pathinfo = 0;" in php.ini

            fastcgi_pass 127.0.0.1:9000;
            fastcgi_index index.php;
            fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
            include fastcgi_params;
        }
        location ~ /\.ht {
            deny  all;
        }
    }</pre>

php.ini

<pre class="lang:sh decode:true">cp php.ini-development /etc/php.ini
vim /etc/php.ini
short_open_tag = Off
cgi.fix_pathinfo=0
error_reporting = E_ALL  & ~E_NOTICE & ~E_STRICT & ~E_DEPRECATED</pre>

MySQL

<pre class="lang:sh decode:true">cp ./debian/additions/my.cnf /etc/my.cnf</pre>

<pre class="lang:sh decode:true ">grant all on *.* to 'root'@localhost IDENTIFIED by '*******************';
flush privileges;</pre>

  * 启动

<pre class="lang:sh decode:true">/usr/local/php/sbin/php-fpm
/usr/local/mysql/bin/mysqld_safe --user=mysql --defaults-file=/etc/my.cnf&
/usr/local/nginx/sbin/nginx -t 
/usr/local/nginx/sbin/nginx</pre>

  * 测试结果

<img class="alignnone size-medium wp-image-72" src="http://www.83096146.com/blog/wp-content/uploads/2015/12/phpinfo-300x271.png" alt="phpinfo" width="300" height="271" srcset="http://blog.83096146.com/wp-content/uploads/2015/12/phpinfo-300x271.png 300w, http://blog.83096146.com/wp-content/uploads/2015/12/phpinfo-768x693.png 768w, http://blog.83096146.com/wp-content/uploads/2015/12/phpinfo.png 942w" sizes="(max-width: 300px) 100vw, 300px" />

  * 遇到的问题和解决方法

checking for perl
  
perl version: v5.10.1 (*) built for i386-linux-thread-multi
  
Can’t locate ExtUtils/Embed.pm in @INC (@INC contains: /usr/local/lib/perl5 /usr/local/share/perl5 /usr/lib/perl5/vendor\_perl /usr/share/perl5/vendor\_perl /usr/lib/perl5 /usr/share/perl5 .).
  
BEGIN failed–compilation aborted.
  
./configure: error: perl module ExtUtils::Embed is required

resolve:

install perl perl-devel perl-ExtUtils-Embed

Can’t load ‘/usr/local/lib64/perl5/auto/nginx/nginx.so’ for module nginx: /usr/local/lib64/perl5/auto/nginx/nginx.so: undefined symbol: ngx\_http\_perl\_handle\_request at /usr/share/perl5/XSLoader.pm line 68.
  
at /usr/local/lib64/perl5/nginx.pm line 56.
  
Compilation failed in require.
  
BEGIN failed–compilation aborted.
  
nginx: [alert] perl_parse() failed: 255

&nbsp;

resolve:

add:

&#8211;with-http\_perl\_module &#8211;with-ld-opt=&#8221;-Wl,-E&#8221;

  * 安装wordpress