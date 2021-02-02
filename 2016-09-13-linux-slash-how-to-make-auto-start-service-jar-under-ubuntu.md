---
layout: post
title: "linux/How to make auto-start service jar under ubuntu?"
date: 2016-09-13 12:34:47 +0800
comments: true
categories: 
---

1: touch /etc/init/yourservice.conf
2: edit the file and 

description "socks-server-daemon"
author "Jim.Liu"

start on runlevel [3]
stop on shutdown

expect fork

script
    sudo -u tomcat7  /usr/bin/java -jar /usr/local/utf-socket/server.jar >> /usr/local/utf-socket/logs/server.log 2>&1 &
    emit socks-server-daemon_running
end script


3: service yourservice start.

enjoy it!