---
id: 35
title: How to check DOM wrapped by jQuery?
date: 2015-12-25T11:01:07+00:00
author: liu1084
layout: post
guid: http://www.83096146.com/blog/?p=35
permalink: /?p=35
categories:
  - linux
---
<pre class="theme:dark-terminal lang:js decode:true ">if ($(l)[0] === $(line)[0]){
    return; //do not check myself,continue
}

//or

if ($(l).get(0) === $(line).get(0)){
    return; //do not check myself,continue
}</pre>

Because jQuery wrapped DOM object is in an array, so get it by .get(index) or using index number.