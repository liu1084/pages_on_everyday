---
id: 204
title: Create GUID / UUID in JavaScript
date: 2016-01-22T18:06:49+00:00
author: liu1084
layout: post
guid: http://blog.83096146.com/?p=204
permalink: /?p=204
categories:
  - javascript
---
<pre>function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}
</pre>