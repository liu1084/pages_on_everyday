---
layout: post
title: "linux/How to add a new disk on linux?"
date: 2016-11-04 17:03:28 +0800
comments: true
categories: 
---

```shell

[root]# fdisk /dev/hdb
Command (m for help): m     (Enter the letter "m" to get list of commands)
Command action
   a   toggle a bootable flag
   b   edit bsd disklabel
   c   toggle the dos compatibility flag
   d   delete a partition
   l   list known partition types
   m   print this menu
   n   add a new partition
   o   create a new empty DOS partition table
   p   print the partition table
   q   quit without saving changes
   s   create a new empty Sun disklabel
   t   change a partition's system id
   u   change display/entry units
   v   verify the partition table
   w   write table to disk and exit
   x   extra functionality (experts only)

Command (m for help): n
Command action
   e   extended
   p   primary partition (1-4)
e
Partition number (1-4): 1
First cylinder (1-2654, default 1):
Using default value 1
Last cylinder or +size or +sizeM or +sizeK (1-2654, default 2654):
Using default value 2654

Command (m for help): p

Disk /dev/hdb: 240 heads, 63 sectors, 2654 cylinders
Units = cylinders of 15120 * 512 bytes

   Device Boot    Start       End    Blocks   Id  System
/dev/hdb1             1      2654  20064208+   5  Extended

Command (m for help): w    (Write and save partition table)

[root]# mkfs -t ext3 /dev/hdb1
mke2fs 1.27 (8-Mar-2002)
Filesystem label=
OS type: Linux
Block size=4096 (log=2)
Fragment size=4096 (log=2)
2508352 inodes, 5016052 blocks
250802 blocks (5.00%) reserved for the super user
First data block=0
154 block groups
32768 blocks per group, 32768 fragments per group
16288 inodes per group
Superblock backups stored on blocks:
        32768, 98304, 163840, 229376, 294912, 819200, 884736, 1605632, 2654208,
        4096000

Writing inode tables: done
Creating journal (8192 blocks): done
Writing superblocks and filesystem accounting information: done

This filesystem will be automatically checked every 34 mounts or
180 days, whichever comes first.  Use tune2fs -c or -i to override.
[root]# mkdir /opt2
[root]# mount -t ext3 /dev/hdb1 /opt2

```