---
layout: post
title: "debian/How to install JDK 8 on debian8?"
date: 2017-04-06 01:56:40 +0800
comments: true
categories: 
---

```shell
apt-get update
apt-get install software-properties-common

apt-add-repository 'deb http://security.debian.org/debian-security stretch/updates main'
apt-get update

apt-get install openjdk-8-jdk

```