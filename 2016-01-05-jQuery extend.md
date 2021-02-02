---
id: 139
title: 浅析jQuery中extend方法
date: 2016-01-05T00:24:04+00:00
author: liu1084
layout: post
guid: http://blog.83096146.com/?p=139
permalink: /?p=139
categories:
  - linux
---
综述
  
extend方法在jQuery中是一个很重要的方法，jQuey内部用它来扩展属性方法。常用语jQuery插件开发。
  
jQuery提供了两个方法，$.extend和$.fn.extend,两个方法内部实现一样，但功能用法却不一样，按照官方解释：
  
jQuery.extend(): Merge the contents of two or more objects together into the first object.(把两个或者更多的对象合并到第一个当中)
  
jQuery.fn.extend():Merge the contents of an object onto the jQuery prototype to provide new jQuery instance methods.(把对象挂载到jQuery的prototype属性，来扩展一个新的jQuery实例方法)
  
简单来说：$.extend(),是用来扩展jQuery静态方法；$.fn.extend()是用来扩展jQuery实例方法。
  
例如：
  
//扩展静态方法：
  
$.extend({
  
sayName:function (){
  
console.log(&#8220;My name is jQuery&#8221;);
  
}
  
});
  
$.sayName(); //&#8221;My name is jQuery&#8221;
  
//扩展实例方法：
  
$.fn.extend({
  
check: function() {
  
return this.each(function() {
  
this.checked = true;
  
});
  
}
  
});
  
$( &#8220;input[type=&#8217;checkbox&#8217;]&#8221; ).check(); //所有的checkbox都会被选择
  
Note:扩展的静态方法，直接使用$调用；扩展的实例方法，要用$()调用。
  
具体用法
  
参数为多个
  
extend(dest,src1,src2&#8230;srcN);//可以传入N多个对象
  
参数的含义：将src1,src2…srcN的每一项合并为dest的每一项，并返回合并后的对象：
  
var dest = {name:&#8221;job&#8221;,age:20},src1 = {name:&#8221;tom&#8221;,live:&#8221;Beijing&#8221;};
  
$.extend(dest,src1);
  
console.log(dest); //{name: &#8220;tom&#8221;, age: 20,live:&#8221;Beijing&#8221;}
  
Note: dest的结构会发生变化。如果想得到合并的结果，并不修改dest的结构，可以这么做
  
var dest = {name:&#8221;job&#8221;,age:20},src1 = {name:&#8221;tom&#8221;,live:&#8221;Beijing&#8221;};
  
var newSrc = $.extend({}, dest, src1);
  
console.log(dest); //newSrc就是得到的新对象
  
这样的做法在写插件，设置默认值时会用到

(function ($){
  
$.fn.extend({
  
dralog:function (options){
  
//设置默认样式
  
var deafualt = {
  
width:100,
  
height:100
  
};

//传过来的参数覆盖默认值
  
var style = $.extend({},deafualt,options);

$(&#8220;div&#8221;).css(style);
  
}
  
});
  
})(jQuery);

$().dralog({
  
width: 200,
  
height: 200
  
});

console.log(style); //deafualt变为：{width: 200, height: 200}

参数为一个
  
$.extend(dest)//将dest的每一项合并到jQuery全局对象中//例如$.extend({name:&#8221;tom&#8221;});$.extend({name:&#8221;tom&#8221;});
  
使用：
  
$.name$.fn.extend(dest) //将dest的每一项合并到jQuery的实例中//例如$.fn.extend({name:&#8221;tom&#8221;});
  
使用：
  
$().name$.extend({nameScope:{}}); //创建一个命名空间$.extend($.nameScope,{name:&#8221;tom&#8221;}); //将name添加到nameScope这个命名空间中使用：$.nameScope.name
  
第一个参数为true或者false
  
extend(Boolean,src1,src2&#8230;srcN); //Boolean为true时，为深层拷贝；Boolean为false时，为浅拷贝。//例如var src1 = {name:&#8221;tom&#8221;,location:{city:&#8221;Beijing&#8221;,county:&#8221;China&#8221;}};
  
var src2 = {name:&#8221;job&#8221;,location:{live:&#8221;New York&#8221;,county:&#8221;USA&#8221;}};$.extend(true,src1,src2);
  
合并后，src1为：
  
{name: &#8220;job&#8221;, location: {city: &#8220;Beijing&#8221;,county: &#8220;USA&#8221;,live: &#8220;New York&#8221;}}
  
//里面的子元素也会进行合并$.extend(false,src1,src2);
  
合并后，src1为：
  
{name: &#8220;job&#8221;, location: {city: &#8220;Beijing&#8221;,county: &#8220;China&#8221;}}
  
//里面的子元素不会合并，直接覆盖
  
extend是写jQuery插件的利器，以上是关于如何使用它的细节，接下来会分析jQuery如何来实现extend方法。