---
id: 222
title: Connect git server with non-standard port (not 22)
date: 2016-01-27T09:59:02+00:00
author: liu1084
layout: post
guid: http://blog.83096146.com/?p=222
permalink: /?p=222
categories:
  - linux
---
If your git server has a non standard port， and you want to connect it with SSH，you can config it in your ~/.ssh/config file as below:

<pre>Host YOUR-HOST-NAME
User git
Hostname YOUR-HOST-NAME
IdentityFile ~/.ssh/Identity
Port PORT-NUMBER
StrictHostKeyChecking no
</pre>

save it, and using git pull or git push with SSH protocol.
  
enjoy it.