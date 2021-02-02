---
layout: post
title: "debian/How to install JDK 8 on debian8?"
date: 2017-04-06 01:56:40 +0800
comments: true
categories: 
---

```shell
$ su root
echo "deb http://ppa.launchpad.net/webupd8team/java/ubuntu trusty main" > /etc/apt/sources.list.d/webupd8team-java.list
echo "deb-src http://ppa.launchpad.net/webupd8team/java/ubuntu trusty main" >> /etc/apt/sources.list.d/webupd8team-java.list
apt-key adv --keyserver keyserver.ubuntu.com --recv-keys EEA14886
apt-get update
apt-get install oracle-java8-installer
apt-get install oracle-java8-set-default
java -version

```