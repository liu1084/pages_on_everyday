---
layout: post
title: "linux/How to add a new ipaddress on Centos7?"
date: 2016-08-01 14:56:00 +0800
comments: true
categories: linux centos7 address
---

- 安装virtualbox
- 新建虚拟机
- 为虚拟机添加新的网卡
- 安装centos 7
- 为桥接网卡配置新的静态ip地址
* 检测Network Manager服务的状态
* 检查哪些网卡适配器受Network Manager管理
## 方案一 手动编辑/etc/sysconfig/network-script/ifcfg-xxx文件
## 方案二 安装Network Manager UI,通过图形界面进行添加
- 重启网络服务
- 测试

