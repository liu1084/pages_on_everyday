---
id: 48
title: jquery's extend
date: 2015-12-26T22:28:32+00:00
author: liu1084
layout: post
categories: jquery extend
---
jquery's extend
===============

extend方法在jQuery中是一个很重要的方法，jQuey内部用它来扩展属性方法。常用语jQuery插件开发。

jQuery提供了两个方法，$.extend和$.fn.extend,两个方法内部实现一样，但功能用法却不一样，按照官方解释：

jQuery.extend(): Merge the contents of two or more objects together into the first object.(把两个或者更多的对象合并到第一个当中)
  
jQuery.fn.extend():Merge the contents of an object onto the jQuery prototype to provide new jQuery instance methods.(把对象挂载到jQuery的prototype属性，来扩展一个新的jQuery实例方法)

<!--more-->


  
简单来说：$.extend(),是用来扩展jQuery静态方法；$.fn.extend()是用来扩展jQuery实例方法。

用法

$.extend({}) 或者$.fn.extend({})

实例

<pre class="lang:js decode:true">//扩展静态方法：
$.extend({
    sayName:function (){
        console.log("My name is jQuery");  
    }
});
$.sayName(); //"My name is jQuery"
//扩展实例方法：
$.fn.extend({
    check: function() {
        return this.each(function() {
            this.checked = true;
        });
    }
});
$( "input[type='checkbox']" ).check(); //所有的checkbox都会被选择
Note:扩展的静态方法，直接使用$调用；扩展的实例方法，要用$()调用。</pre>

但是jQuery的extend还有另外一种用法，就是合并对象，这在合并默认参数和形参的时候非常有用。

用法

extend(dest,src1,src2&#8230;srcN);//可以传入N多个对象
  
参数的含义：将src1,src2…srcN的每一项合并为dest的每一项，并返回合并后的对象

实例

<pre class="lang:js decode:true">var dest = {name:"job",age:20},src1 = {name:"tom",live:"Beijing"};
$.extend(dest,src1);
console.log(dest);  //{name: "tom", age: 20,live:"Beijing"}</pre>

Note: dest的结构会发生变化。如果想得到合并的结果，并不修改dest的结构，可以这么做

<pre class="lang:js decode:true ">var dest = {name:"job",age:20},src1 = {name:"tom",live:"Beijing"};
var newSrc = $.extend({}, dest, src1);
console.log(dest); //newSrc就是得到的新对象</pre>

<pre class="lang:js decode:true ">(function ($){
    $.fn.extend({
        dralog:function (options){
            //设置默认样式
            var deafualt = {
                width:100,
                height:100
            };
 
            //传过来的参数覆盖默认值
            var style = $.extend({},deafualt,options);
 
            $("div").css(style);
        }
    });
})(jQuery);
 
$().dralog({
    width: 200,
    height: 200
});
 
console.log(style); //deafualt变为：{width: 200, height: 200}</pre>

<pre class="lang:js decode:true">//Boolean为true时，为深层拷贝；Boolean为false时，为浅拷贝。
extend(Boolean,src1,src2...srcN); 

//例如
var src1 = {name:"tom",location:{city:"Beijing",county:"China"}};
var src2 = {name:"job",location:{live:"New York",county:"USA"}};

$.extend(true,src1,src2);

合并后，src1为：
{name: "job", location: {city: "Beijing",county: "USA",live: "New York"}}
//里面的子元素也会进行合并

$.extend(false,src1,src2);
合并后，src1为：
{name: "job", location: {city: "Beijing",county: "China"}}
//里面的子元素不会合并，直接覆盖</pre>

extend是写jQuery插件的利器，以上是关于如何使用它的细节，接下来会分析jQuery如何来实现extend方法。