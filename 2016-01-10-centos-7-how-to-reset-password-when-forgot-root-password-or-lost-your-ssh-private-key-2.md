---
id: 191
title: 'Centos 7: How to Reset password when forgot root password or lost your SSH private key'
date: 2016-01-10T01:02:13+00:00
author: liu1084
layout: post
guid: http://blog.83096146.com/?p=191
permalink: /?p=191
categories:
  - linux
---
当你使用centos的时候，可能会由于某种原因，忘记密码或者丢失SSH私钥。这个时候，您只能亲自去机房操作了。

步骤：

  * 重启服务器
  * 当出现GRUB菜单的时候，选择第一项，按下“e&#8221;编辑

<img class="aligncenter size-full wp-image-183" src="http://blog.83096146.com/wp-content/uploads/2016/01/centos7-forgot-root-password.png" alt="centos7-forgot-root-password" width="721" height="385" srcset="http://blog.83096146.com/wp-content/uploads/2016/01/centos7-forgot-root-password-300x160.png 300w, http://blog.83096146.com/wp-content/uploads/2016/01/centos7-forgot-root-password.png 721w" sizes="(max-width: 721px) 100vw, 721px" />

  * 按住向下箭头，直到&#8221;linux16 /vmlinuz-3.10.0-123.4.2.e17.x86_64 root &#8230;. ro&#8221;那一行，把ro改成rw init=/sysroot/bin/sh

<img class="aligncenter size-full wp-image-184" src="http://blog.83096146.com/wp-content/uploads/2016/01/centos7-forgot-root-password-1.png" alt="centos7-forgot-root-password-1" width="721" height="400" srcset="http://blog.83096146.com/wp-content/uploads/2016/01/centos7-forgot-root-password-1-300x166.png 300w, http://blog.83096146.com/wp-content/uploads/2016/01/centos7-forgot-root-password-1.png 721w" sizes="(max-width: 721px) 100vw, 721px" />

<img class="aligncenter size-full wp-image-185" src="http://blog.83096146.com/wp-content/uploads/2016/01/centos7-forgot-root-password-2.png" alt="centos7-forgot-root-password-2" width="721" height="400" srcset="http://blog.83096146.com/wp-content/uploads/2016/01/centos7-forgot-root-password-2-300x166.png 300w, http://blog.83096146.com/wp-content/uploads/2016/01/centos7-forgot-root-password-2.png 721w" sizes="(max-width: 721px) 100vw, 721px" />

<!--more-->

  * 改完之后，按下&#8221;ctrl + x&#8221;启动，进入单用户模式
  * 在单用户模式下，输入：chroot /sysroot

<img class="aligncenter size-full wp-image-186" src="http://blog.83096146.com/wp-content/uploads/2016/01/centos7-forgot-root-password-3.png" alt="centos7-forgot-root-password-3" width="721" height="402" srcset="http://blog.83096146.com/wp-content/uploads/2016/01/centos7-forgot-root-password-3-300x167.png 300w, http://blog.83096146.com/wp-content/uploads/2016/01/centos7-forgot-root-password-3.png 721w" sizes="(max-width: 721px) 100vw, 721px" />

  * 输入：passwd root，输入新的密码，并确认密码

<img class="aligncenter size-full wp-image-187" src="http://blog.83096146.com/wp-content/uploads/2016/01/centos7-forgot-root-password-4.png" alt="centos7-forgot-root-password-4" width="721" height="98" srcset="http://blog.83096146.com/wp-content/uploads/2016/01/centos7-forgot-root-password-4-300x41.png 300w, http://blog.83096146.com/wp-content/uploads/2016/01/centos7-forgot-root-password-4.png 721w" sizes="(max-width: 721px) 100vw, 721px" />

  * 更新SELinux参数: touch /.autorelabel
  * 重启服务器
  * 修改/etc/ssh/sshd_config，容许root登录，并容许密码验证(PermitRootLogin yes PasswordAuthentication yes)，使用ssh登录，重新上传你的公钥，并禁止root登录(PermitRootLogin no PasswordAuthentication no)，禁止密码验证
  * enjoy it