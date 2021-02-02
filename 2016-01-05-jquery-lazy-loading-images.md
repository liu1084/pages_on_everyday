---
id: 141
title: jQuery Lazy Loading Images
date: 2016-01-05T00:24:56+00:00
author: liu1084
layout: post
guid: http://blog.83096146.com/?p=141
permalink: /?p=141
categories:
  - linux
---
<script type=&#8221;text/javascript&#8221;>
  
window.onload = function() {

$.fn.isOnScreen = function(){
  
var win = $(window)
  
var viewport = {
  
top : win.scrollTop(),
  
left : win.scrollLeft()
  
}
  
viewport.right = viewport.left + win.width()
  
viewport.bottom = viewport.top + win.height()
  
var bounds = this.offset()
  
bounds.right = bounds.left + this.outerWidth()
  
bounds.bottom = bounds.top + this.outerHeight()
  
return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom))
  
}

function lazyload() {
  
$(&#8216;.lazyload&#8217;).each(function() {
  
var element = $(this)
  
if (element.isOnScreen()) {
  
element.attr(&#8216;src&#8217;, element.data(&#8216;src&#8217;))
  
element.removeClass(&#8216;lazyload&#8217;)
  
}
  
})
  
}

lazyload()
  
$(window).scroll(function() {
  
lazyload()
  
})
  
}
  
</script>

&nbsp;

<img class=&#8221;lazyload&#8221; data-src=&#8221;golden-star.png&#8221; alt=&#8221;Golden Star&#8221; />