---
id: 195
title: 'How to custom font-family using SCSS &#038; CSS'
date: 2016-01-22T12:15:11+00:00
author: liu1084
layout: post
guid: http://blog.83096146.com/?p=195
permalink: /?p=195
categories:
  - linux
---
最近用到了一些特别的图标，有些是常用的，我就直接从别的网站下载了；有些是不常用的，由设计师从设计稿中切下来，保存成SVG。
  
为什么要保存SVG？因为我想把这些图标都通过自定义字体来实现，这样做的好处是：

  * 兼容性更好；
  * 文件更小；
  * 可以适应各种屏幕；

以下是我的做法：

  * 整理和收集icon（svg格式）
  * 通过https://icomoon.io/app/#/select生成字体文件
  * 下载并使用

下载好的字体文件有四种格式，分别是eot、svg、ttf和woff

在sass中可以使用font-face调用生成的4中字体格式：

<pre>@import "compass/css3";
@include font-face("icon-font", font-files("moon/icon.eot", "moon/icon.svg", "moon/icon.ttf", "moon/icon.woff"));

[class^="icon-"], [class*="icon-"] {
	font-family: 'icon-font' !important;
	font-style: normal;
	font-weight: normal;
	font-variant: normal;
	text-transform: none;
	line-height: 1;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	cursor: pointer;
}
</pre>

如果你不愿意自己整理，可以点击<a href="http://blog.83096146.com/wp-content/uploads/2016/01/moon.zip"rel="">下载</a>