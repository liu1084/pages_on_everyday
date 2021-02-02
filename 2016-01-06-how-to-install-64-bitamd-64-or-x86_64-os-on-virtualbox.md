---
id: 161
title: How to install 64-bit(amd-64 or x86_64) OS on VirtualBox?
date: 2016-01-06T13:27:32+00:00
author: liu1084
layout: post
guid: http://blog.83096146.com/?p=161
permalink: /?p=161
categories:
  - linux
---
If you want to install a 64-bit virtual OS on VirtualBox,  three points required:

  1. Your CPU & OS must be 64bit
  2. Your motherboard must be support CPU virtualization configuration.
  3. Your must have a 64-bit OS image

If you have make sure above & setup your CPU in BIOS, let&#8217;s go ahead.

Steps:

  * startup virtualBox,
  * create new & setup options
  * select your vm, and click setup, select &#8220;network&#8221;, and open the second tab, check 2nd network card & select Host-only which can be connect by SSH client
  * select storage,  add your  OS image into virtual CDROM
  * click &#8220;OK&#8221; and save your config
  * startup and install OS.