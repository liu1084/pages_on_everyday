---
layout: post
title: "linux/How to resolve grub can not find window 7 OS on CentOS?"
date: 2016-08-05 11:18:57 +0800
comments: true
categories: 
---

Modify default boot OS,  in su mode:


1. Find Windows menu entry

```shell
    cat /boot/grub2/grub.cfg | grep Windows
```

2. Set Windows as default OS

```shell
    grub2-set-default "Windows 7 (loader) (on /dev/sda1)"  
```

3. Verity

```shell
    grub2-editenv list  
```

4. Generate new grub config file

```shell
    grub2-mkconfig -o /boot/grub2/grub.cfg  
```

5. Reboot

```shell
    reboot  
```
