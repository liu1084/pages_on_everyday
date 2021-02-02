---
id: 4
title: How to Flash Nexus 5 on Android 6.0.1
date: 2015-12-22T22:38:05+00:00
author: liu1084
layout: post
guid: http://www.83096146.com/blog/?p=4
permalink: /?p=4
categories:
  - mobile technology
tags:
  - fireware
  - flash
  - mobile
  - nexus
---
Google 已经发布了android OS 6.0，我的Nexus5还在跑4.0。今天决定把n5升级到6.0，作为新手机使用。

  1. download &#8220;hammerhead-mmb29k-factory-1943f0f5.tgz&#8221; for Nexus 5 (GSM/LTE) on <a href="https://developers.google.com/android/nexus/images" target="_blank">https://developers.google.com/android/nexus/images<img class="alignnone wp-image-28" src="http://www.83096146.com/blog/wp-content/uploads/2015/12/QQ截图20151225020648-300x248.png" alt="QQ截图20151225020648" width="300" height="248" srcset="http://blog.83096146.com/wp-content/uploads/2015/12/QQ截图20151225020648-300x248.png 300w, http://blog.83096146.com/wp-content/uploads/2015/12/QQ截图20151225020648-768x635.png 768w, http://blog.83096146.com/wp-content/uploads/2015/12/QQ截图20151225020648.png 870w" sizes="(max-width: 300px) 100vw, 300px" /></a>
  2. download android SDK (ADK) and install it, update sdk platform-tools , BE SURE HAVE fastboot.exe & adb.exe in platform-tools directory.<img class="alignnone size-medium wp-image-33" src="http://www.83096146.com/blog/wp-content/uploads/2015/12/QQ截图20151225023148-300x214.png" alt="QQ截图20151225023148" width="300" height="214" srcset="http://blog.83096146.com/wp-content/uploads/2015/12/QQ截图20151225023148-300x214.png 300w, http://blog.83096146.com/wp-content/uploads/2015/12/QQ截图20151225023148.png 700w" sizes="(max-width: 300px) 100vw, 300px" />
  3. decompress hammerhead-mmb29k-factory-1943f0f5.tgz and place it in platforms directory
  4. 
  5. reboot your mobile phone & restart it PRESS VOLUME DOWN + POWER KEYS TOGETHER.
  6. connnect phone to your pc and open &#8220;usb debug&#8221; option
  7. run &#8220;flash-all.bat&#8221; file on a console, waiting for a memont (About 40mins)&#8230; reboot autometicly itself
  8. a new mobile phone done, enjoy it.
  9. <img class="alignleft wp-image-29" src="http://www.83096146.com/blog/wp-content/uploads/2015/12/webwxgetmsgimg.jpg" alt="webwxgetmsgimg" width="320" height="569" />

&nbsp;

&nbsp;

&nbsp;