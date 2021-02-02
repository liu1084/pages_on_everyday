---
id: 153
title: Using rsync
date: 2016-01-05T00:32:04+00:00
author: liu1084
layout: post
guid: http://blog.83096146.com/?p=153
permalink: /?p=153
categories:
  - linux
---
Login target server(remote server)

kinit -f
  
rlogin xxx -l LOGINNAME
  
sudo su
  
useradd xxx.xxx
  
touch -p /home/jim/.ssh/authorized_keys
  
generate ssh key on gw server

ssh-keygen -t rsa
  
cat /home1/xxx.xxx/.ssh/id_rsa.pub
  
add public key to target server
  
vim /home/jim/.ssh/authorized_keys
  
using rsync on gw server to rsync files & folders
  
rsync -Irzv -partial -progress index.html <your username>@10.113.184.138:/home/liu.jun/static