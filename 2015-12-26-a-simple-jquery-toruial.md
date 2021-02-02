---
id: 40
title: A simple jQuery toruial
date: 2015-12-26T19:21:15+00:00
author: liu1084
layout: post
guid: http://www.83096146.com/blog/?p=40
permalink: /?p=40
categories:
  - front-end
  - javascript
tags:
  - javascript
  - jquery
  - js
  - selector
---
jQuery简介

  * jQuery是一个速度快、体积小（32KB）、轻量级、跨浏览器和功能丰富的javascript类库。
  * 官方网站：<a class="external-link" href="http://jquery.com/" rel="nofollow">http://jquery.com/</a>，同其他类库比，使用量高达60%以上。
  * 2013年4月18日<span class="Apple-tab-span"> </span>发布了2.0.0，<span class="Apple-tab-span"> </span>除去对Internet Explorer 6-8的支持以提高性能，并降低文件大小。

<!--more-->

快速认识

  * 一个标准的HTML5模版

<pre class="lang:xhtml decode:true">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"/&gt;
    &lt;meta http-equiv="X-UA-Compatible" content="IE=Edge"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
    &lt;link rel="icon" href="../img/favicon.ico"&gt;
    &lt;title&gt;index&lt;/title&gt;
    &lt;link rel="stylesheet" href="../libs/bootstrap/dist/css/bootstrap.css"/&gt;
    &lt;link rel="stylesheet" href="../css/index.css"/&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;header&gt;&lt;/header&gt;
&lt;main id="main" class="container-fluid"&gt;&lt;/main&gt;
&lt;footer&gt;&lt;/footer&gt;
&lt;!-- Javascript start --&gt;
&lt;script src="../libs/jquery/dist/jquery.js"&gt;&lt;/script&gt;
&lt;script src="../js/app/index.js"&gt;&lt;/script&gt;
&lt;!-- Javascript end --&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

  * DOM遍历和操作

<pre class="lang:js decode:true">$('button.continue').html('Next Step…');</pre>

  * 事件绑定和处理

<pre class="lang:js decode:true">var hiddenBox = $('#banner-message');
$('#button-container button’).on('click', function(event){
         hiddenBox.show();
});</pre>

  * AJAX请求

<pre class="lang:js decode:true">$.ajax({
   url: 'http://renren.com/xx/actin/api',
   type: 'POST',
   data: {
       'mobile': $('input#mobile').val()
   } ,
   success: function(json){
       $('body').append('&lt;input name="verify-code" type="text" /&gt;&lt;button&gt;submit&lt;/button&gt;');
   },
   error: function(error){
       console.log(error);
   }
});</pre>

安装JQuery

jQuery可以通过以下几种方式安装

  1. jquery.com下载: <a class="external-link" href="http://jquery.com/download/" rel="nofollow">http://jquery.com/download/</a>
  2. bower: bower install jquery#2.1.4
  3. google api: <a class="external-link" href="https://developers.google.com/speed/libraries/" rel="nofollow">https://developers.google.com/speed/libraries/</a> <div class="table-wrap">
      <table class="confluenceTable tablesorter">
        <tr class="sortableHeader">
          <th class="confluenceTh sortableHeader" data-column="0">
            <div class="tablesorter-header-inner">
              安装方式
            </div>
          </th>
          
          <th class="confluenceTh sortableHeader" data-column="1">
            <div class="tablesorter-header-inner">
              优点
            </div>
          </th>
          
          <th class="confluenceTh sortableHeader" data-column="2">
            <div class="tablesorter-header-inner">
              缺点
            </div>
          </th>
        </tr>
        
        <tr>
          <td class="confluenceTd">
            <a class="external-link" href="http://jquery.com/" rel="nofollow">jQuery.com</a>下载
          </td>
          
          <td class="confluenceTd">
            放置的位置可以自定义
          </td>
          
          <td class="confluenceTd">
            需要自己去找相关版本可能造成版本的不统一
          </td>
        </tr>
        
        <tr>
          <td class="confluenceTd" colspan="1">
            bower
          </td>
          
          <td class="confluenceTd" colspan="1">
            自动化 保证每个开发人员的版本一致性
          </td>
          
          <td class="confluenceTd" colspan="1">
            &#8211;
          </td>
        </tr>
        
        <tr>
          <td class="confluenceTd" colspan="1">
            google api
          </td>
          
          <td class="confluenceTd" colspan="1">
            可以减少网络开销
          </td>
          
          <td class="confluenceTd" colspan="1">
            &#8211;
          </td>
        </tr>
      </table>
    </div>

jQuery的语法

  * $(selector).action()

<pre class="lang:js decode:true ">$(this).hide()
//演示 jQuery hide() 函数，隐藏当前的 HTML 元素。
$("#test").hide()
//演示 jQuery hide() 函数，隐藏 id="test" 的元素。
$("p").hide()
//演示 jQuery hide() 函数，隐藏所有 &lt;p&gt; 元素。
$(".test").hide()
//演示 jQuery hide() 函数，隐藏所有 class="test" 的元素。</pre>

  * ready

<pre class="lang:js decode:true ">$(function(){
 //从这里开始。。。
});
or
$(document).ready(function(){
 //从这里开始。。。
});</pre>

jQuery的使用和代码编写

选择器

  1. id – HTML中定义的id，在同一个页面中是唯一的属性。
  2. html标签 – 普通的HTML标签
  3. 类 – CSS类

实例

<pre class="lang:xhtml decode:true ">&lt;!DOCTYPE HTML&gt;
&lt;head&gt;&lt;/head&gt;
&lt;html&gt;
&lt;body&gt;
...
&lt;form id=”user-form” action=”” method=””&gt;
    &lt;div&gt;
        &lt;ul id=”menu”&gt;
            &lt;li&gt;Home&lt;/li&gt;
            &lt;li&gt;Info&lt;/li&gt;
            &lt;li&gt;Products&lt;/li&gt;
            &lt;li&gt;Setting&lt;/li&gt;
            &lt;li&gt;Sign In&lt;/li&gt;
        &lt;/ul&gt;
    &lt;/div&gt;
    &lt;div id="sex"&gt;
        &lt;input type=”radio” name=”sex” value=”male” /&gt;男
        &lt;input type=”radio” name=”sex” value=”male” /&gt;女
    &lt;/div&gt;
    &lt;div id="sports"&gt;
        &lt;input type=”radio” name=”sports[]” value=”male” /&gt;足球
        &lt;input type=”radio” name=”sports[]” value=”male” /&gt;篮球
    &lt;/div&gt;
    &lt;div id="panel"&gt;
        &lt;span class="active"&gt;&lt;/span&gt;
        &lt;span&gt;&lt;/span&gt;
    &lt;/div&gt;
    &lt;div&gt;
        &lt;select id=”countries”&gt;
            &lt;option&gt;请选择…&lt;/option&gt;
            &lt;option value=”cn”&gt;中国&lt;/option&gt;
            &lt;option value=”jp”&gt;美国&lt;/option&gt;
            &lt;option value=”jp”&gt;日本&lt;/option&gt;
            &lt;option value=”jp”&gt;俄罗斯&lt;/option&gt;
        &lt;/select&gt;
    &lt;/div&gt;
&lt;/form&gt;
...
&lt;/body&gt;
&lt;/html&gt;</pre>

ID选择器

<pre class="lang:js decode:true ">$('#menu li:odd).addClass('blue');
$('#menu li:even').css({background: '#00f'});</pre>

HTML标签选择器

<pre class="lang:js decode:true ">//radio
var sex = $('form#user-form #sex input:checked[type="radio"][name="sex"]').val();
 
//checkbox
var sports = $('form#user-form #sports input:checked[type="checkbox"]');
var result = [];
$.each(sports, function(index, element){
    result.push($(element).val());
});
 
//select
var country = $('form#user-form select#countries').val();</pre>

类选择器

<pre class="lang:js decode:true ">#('#panel span.active')...</pre>

扩展

<pre class="lang:js decode:true  ">1:多选 -- 适用于为不同的选择器执行相同的动作
$('selector1, selector2, ...')
 
2:层级
后代 -- $('parent child') 用以匹配parent的所有跟child相关的后代元素
父子 -- $('parent &gt; child') 匹配parent的所有跟child相关的第一层的后代元素
The child combinator (E &gt; F) can be thought of as a more specific form of the descendant combinator (E F) in that it selects only first-level descendants.
同辈 -- $('prev ~ siblings') 匹配 prev 元素之后（之前的不会匹配）的所有 siblings 元素，siblings跟prev属于同一级别
相连 -- $('prev + next') 匹配prev后面紧跟一个next的元素
 
3:伪类
:not(selector)
:visible
:first-child
:nth-child
:last-child
:only-child
:checked
:selected
:index //基于0索引的index的
  
 
4:属性
[attr] //匹配包含attr属性的元素，无论qizhiSelects elements that have the specified attribute, with any value.
[attr|="value"] //匹配等于给定的value或者以value开始后面跟着"-"的属性的attr
[attr=value] //匹配等于给定value的属性的attr，必须相等
[attr!=value] //匹配没有指定的attr或者有这个attr但是没有这样的value的attr。
[attr^=value] //匹配以value开头的attr的元素
[attr$=value] //匹配以value结尾的attr的元素
[attr*=value] //匹配包含给定value的attr元素
[attr~=value] //匹配所有value的attr的元素，跟attr=value的区别就是=必须完全相等，~=是约等于，后面可以带空格，包含其他的值
[attr=value][attr2=value2][attr3=value3] //多个属性选择器
 
5:其他
:checkbox 相当于 $( "[type=checkbox]" )
:animated //匹配当前正在执行的动画的元素
:button //相当于 $('button, input[type="button"]')
:contains() //$('div:contains("text")') 匹配所有包含text文本的div元素
:checked //匹配checkbox、radio或者select被选中的元素
:disabled //匹配被disabled的元素
:empty //匹配没有子节点，也不包含文本的元素
:enabled //匹配可以进行选择和操作的表单元素
:file //匹配input类型是file的表单元素
:has(selector) //匹配包含至少一个选择器的哪些元素
:headers //匹配所有的类似h,h1,h2标题类的元素
:hidden //匹配所有被隐藏的元素
//Elements can be considered hidden for several reasons:
//They have a CSS display value of none.
//They are form elements with type="hidden".
//Their width and height are explicitly set to 0.
//An ancestor element is hidden, so the element is not shown on the page.
:last-of-type //匹配每组中的最后一个</pre>

&nbsp;