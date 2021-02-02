---
id: 116
title: How to send mail with attachment using shell
date: 2016-01-04T09:41:33+00:00
author: liu1084
layout: post
guid: http://blog.83096146.com/?p=116
permalink: /?p=116
categories:
  - linux
---
Step 1: install  uuencode

    apt-get install sharutils
    

Step 2:

    
    gzip -c mysqldbbackup.sql | uuencode mysqldbbackup.sql.gz  | mail -s "MySQL DB" backup@email.com