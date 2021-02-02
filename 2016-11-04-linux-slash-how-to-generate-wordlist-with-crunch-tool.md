---
layout: post
title: "linux/How to generate wordlist with crunch tool?"
date: 2016-11-04 14:11:00 +0800
comments: true
categories: 
---


Description: In this tutorial for Cr0w's Place we are going to see how to generate a wordlist / dictionary file in Kali Linux. To create our wordlist, we are going to use a program called Crunch, which is a fully automated script for this job. We are going to generate all possible pin passwords with 4 number digits. This can help us in future tutorials if we want to crack devices that uses 4 digit pin as a security method. 

```html
Usage: crunch (min-length) (max-length) (charset) -o (wordlist.lst) 
```

### Examples

* 4 Digit Wordlist Command: crunch 4 4 0123456789 -o /root/Desktop/pin.lst 

If you plan to generate a large wordlist, you can use the following command to create multiple files: crunch (min-length) (max-length) (charset) -o START -c (words per file) 

* Chosen Pattern Wordlist Usage: crunch (min-length) (max-length) (charset) -t (pattern) -o (wordlist.lst) 

e.g. crunch 4 4 0123456789 -t 9@@9 -o /root/Desktop/pin2.lst 

Crunch program comes pre-installed in Kali Linux. If you are using an other distribution you can find the latest source code here: http://sourceforge.net/projects/crunch-wordlist/files/crunch-wordlist/ 
If you like my job please Subscribe.

* Install crunch in linux
 - download crunch from link [crunch](http://sourceforge.net/projects/crunch-wordlist/files/crunch-wordlist/)
 - unzip 
 - sudo make && sudo make install 

Thank You For Watching.:)