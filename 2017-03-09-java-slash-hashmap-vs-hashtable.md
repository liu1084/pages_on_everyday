---
layout: post
title: "java/HashMap vs HashTable"
date: 2017-03-09 10:28:05 +0800
comments: true
categories: 
---


There are several differences between HashMap and Hashtable in Java:

#Hashtable is synchronized, whereas HashMap is not. This makes HashMap better for non-threaded applications, as unsynchronized Objects typically perform better than synchronized ones.

#Hashtable does not allow null keys or values.  HashMap allows one null key and any number of null values.

#One of HashMap's subclasses is LinkedHashMap, so in the event that you'd want predictable iteration order (which is insertion order by default), you could easily swap out the HashMap for a LinkedHashMap. This wouldn't be as easy if you were using Hashtable.

#Since synchronization is not an issue for you, I'd recommend HashMap. If synchronization becomes an issue, you may also look at ConcurrentHashMap