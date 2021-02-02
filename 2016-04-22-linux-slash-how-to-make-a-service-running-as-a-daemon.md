---
layout: post
title: "linux/How to make a service running as a daemon?"
date: 2016-04-22 20:49:25 +0800
comments: true
categories: 
---

进程的守护神 - daemontools
![](../images/mm_daemontools.svg)
Daemontools是管理Unix服务的工具，它提供一组工具来管理一系列用户进程，当进程由于某些原因down掉之后，daemontools会自动重启进程

注意

被管理的进程不能以daemon形式运行，例如nginx.conf 必须关闭daemon， daemon off;
不要在/service/建任何目录， /service/只存放一些symbol link
只需要完成安装 / 配置两步即可
安装

$ mkdir  ~/tools
$ cd /tools
$ wget http://cr.yp.to/daemontools/daemontools-0.76.tar.gz
$ tar xvzf daemontools-0.76.tar.gz
$ cd admin/daemontools-0.76
$ package/install
如果安装出现错误

/usr/bin/ld: errno: TLS defini  tion in /lib/libc.so.6 section .tbss mismatches non-TLS reference in envdir.o
将admin/daemontools-0.76/src/error.h中的extern int errno;替换为#include <errno.h>

安装完成之后，会创建 /service /command两个目录

启动daemontools

daemontools是一组service管理工具，其中svscanboot工具用来启动svscan工具。可以通过以下命令启动svscanboot

# /command/svscanboot &
也可以设置开机启动，具体参考

启动之后，查看进程，可以发现svscan做为svscanboot的子进程在运行

# ps -ef|grep svs  
root      9134  9072  0 04:05 pts/2    00:00:00 /bin/sh /command/svscanboot
root      9136  9134  0 04:05 pts/2    00:00:00 svscan /service
配置

启动svscanboot之后，相应的svscan进程也启动起来，其中参数/service/ 就是管理配置文件的目录

创建services目录，例如
# mkdir -p /opt/svc/{nginx, tornado}
在services目录创建run脚本(名字必须是run而且权限是755)，例如nginx目录
#touch /opt/svc/nginx/run  && chmod 755 /opt/svc/nginx/run

#cat /opt/svc/nginx/run
#!/bin/sh
exec /home/vagrant/nginx/sbin/nginx   #启动进程命令
创建symbol link， 创建完后daemontools会自动启动nginx进程
#ln -s /opt/svc/nginx/  /service/ 
#ln -s /opt/svc/tornado/  /service/ 

# pstree -a  -p 9134
svscanboot,9134 /command/svscanboot
  |-readproctitle,9137 service errors:...
  `-svscan,913      6 /service
      |-supervise,9138 nginx
      |   `-nginx,913       9
      |       `-nginx,9140         
      `-supervise,9164      tornado
          `-python,9165 /home/vagrant/tornado/main.py
从中可以看出来，svscanboot负责启动svscan服务，svscan管理supervise进程。而具体的客户进程，是通过supervise进程来统一管理的

现在nginx和tornado都被daemontool管理起来了，试试看杀掉tornado应用进程看看

root@precise32:/service# kill 9165
root@precise32:/service# !ps
ps -ef|grep tor
root          9164  9136  0 04:06 pts/2    00:00:00 supervise tornado
root          9181  9164  2 04:09 pts/2    00:00:00 python /home/vagrant/tornado/main.py
可以看到，虽然手动kill掉了tornado应用，但是daemontool自动将应用重新启动起来了

常用命令

启动被管理的进程 (配置完后无需执行svc命令)
svc -u /service/nginx/  (启动之后，如果nginx挂掉，daemontools会自动重启nginx)
关闭被管理的进程（不会关闭daemontools supervise进程）
svc -d /service/nginx/
查看service状态
svstat /service/nginx/
移除service
rm  /service/nginx   #移除软连接  
svc -dx /opt/svc/nginx/
多嘴

如果daemontools的进程挂掉了，该怎么办？？

> http://www.troubleshooters.com/linux/djbdns/daemontools_intro.htm

> https://cr.yp.to/daemontools.html