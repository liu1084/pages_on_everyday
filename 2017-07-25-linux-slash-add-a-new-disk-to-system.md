---
layout: post
title: "linux/add a new disk to system?"
date: 2017-07-25 17:14:03 +0800
comments: true
categories: 
---


```shell
sudo su # login as root
fdisk -l # display all disk partition

# unmount /dev/sdb
umount /dev/sdb

# using fdisk to create a new partition

fdisk /dev/sdb 

# step by step 
# n -> p -> 1 -> enter -> t -> L -> 83 -> enter -> w


# format new partition

mkfs.ext4 /dev/sdb1

# mount partition to a new directory

mkdir /data
mount -t ext4 /dev/sdb1 /data

# setup fstab and make auto mount by system restart
cat  /etc/fstab
echo "/dev/sdb1 /media/newdrive ext4 defaults 1 2" >> /etc/fstab
```