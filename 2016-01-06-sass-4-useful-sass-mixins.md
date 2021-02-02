---
id: 165
title: 'SASS: 4 useful sass mixins'
date: 2016-01-06T15:09:44+00:00
author: liu1084
layout: post
guid: http://blog.83096146.com/?p=165
permalink: /?p=165
categories:
  - CSS
  - SASS
---
&nbsp;

<div class="blog_list">
  <ul>
    <li class="alt">
      List to Tabs Mixin
    </li>
  </ul>
  
  <p>
    This mixin allows you to quickly generate a selection of tabs from a standard HTML list. As you can see below, it accepts a number of arguments allowing for a little customisation.
  </p>
  
  <h3>
    HTML
  </h3>
  
  <pre><code>&lt;ul&gt;
&lt;li&gt;&lt;a href="#"&gt;Tab&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="#"&gt;Tab&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="#"&gt;Tab&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="#"&gt;Tab&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;</code></pre>
  
  <h3>
    Sass Mixin
  </h3>
  
  <pre><code>@mixin tab($width,$height,$spacing,$bg-color,$font-color,$font-size,$font-weight,$hover-color,$borderradius)
{
margin:0px;
list-style:none;
	& li
	{
	float:left;
	display:table;
	width:$width;
	height:$height;
	margin-right:$spacing;
	background:$bg-color;
	-webkit-border-top-left-radius: $borderradius;
	-webkit-border-top-right-radius: $borderradius;
	-moz-border-radius-topleft: $borderradius;
	-moz-border-radius-topright: $borderradius;
	border-top-left-radius: $borderradius;
	border-top-right-radius: $borderradius;
	&:last-child
		{
		margin-right:0px;
		}
	& a
		{
		display:table-cell;
		text-align:center;
		vertical-align:middle;
		width:100%;
		height:100%;
		color:$font-color;
		font-size:$font-size;
		font-weight:$font-weight;
		text-decoration:none;
		}
	&:hover
		{
		background:$hover-color;
		}
	}
}</code></pre>
  
  <h3>
    CSS
  </h3>
  
  <pre><code>ul
{
@include tab(100px,75px,15px,#333333,#ffffff,18px,bold,lighten(#333333,5%),20px);
}</code></pre>
  
  <hr />
  
  <ul>
    <li class="alt">
      Button Mixin
    </li>
  </ul>
  
  <p>
    This mixin allows you to create a simple button from either an anchor, a submit input or a HTML5 button.
  </p>
  
  <h3>
    HTML
  </h3>
  
  <pre><code>&lt;a href="/"&gt;Anchor Button&lt;/a&gt;
&lt;br /&gt;&lt;br /&gt;
&lt;input type="submit" value="Submit Button" /&gt;
&lt;br /&gt;&lt;br /&gt;
&lt;button type="button"&gt;HTML5 Button&lt;/button&gt;</code></pre>
  
  <h3>
    Sass Mixin
  </h3>
  
  <pre><code>@mixin button($padding,$bg-color,$font-color,$font-size,$font-weight,$hover-color,$borderradius)
{
border:0px;
margin:0px;
display:inline-block;
padding:$padding;
background:$bg-color;
color:$font-color;
font-size:$font-size;
font-weight:$font-weight;
-webkit-border-radius: $borderradius;
-moz-border-radius: $borderradius;
border-radius: $borderradius;
text-decoration:none;
cursor:pointer;
&:before, &:after
	{
	content: "";
     	display: table;
    	}
&:after
	{
	clear: both;
	}
&:hover
	{
	background:$hover-color;
	}
}</code></pre>
  
  <h3>
    CSS
  </h3>
  
  <pre><code>a, input[type=submit], button
{
@include button(15px 10px, #333333, #ffffff, 16px, bold, lighten(#333333,5%),10px);
}</code></pre>
  
  <ul>
    <li class="alt">
      List to Dropdown Menu
    </li>
  </ul>
  
  <p>
    You can generate a simple dropdown menu using a HTML list with this mixin. Use this as a base and then style and position accordingly to meet your needs.
  </p>
  
  <h3>
    HTML
  </h3>
  
  <pre><code>&lt;ul&gt;
&lt;li&gt;&lt;a href="#"&gt;Dropdown Link&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="#"&gt;Dropdown Link&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="#"&gt;Dropdown Link&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="#"&gt;Dropdown Link&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;</code></pre>
  
  <h3>
    Sass Mixin
  </h3>
  
  <pre><code>@mixin dropdown($width,$item-padding,$bg-color,$hover-color,$font-color,$font-size,$font-weight,$text-align,$borderradius)
{
display:block;
width:$width;
margin:0px;
list-style:none;
position:absolute;
&:before
	{
	content:" ";
	width: 0px;
	height: 0px;
	border-style: solid;
	border-width: 0 17.5px 25px 17.5px;
	border-color: transparent transparent $bg-color transparent;
	position:absolute;
	top:-25px;
	left:50%;
	margin-left:-17px;
	}
& li
	{
	display:block;
	background:$bg-color;
	&:first-child
		{
		-webkit-border-top-left-radius: $borderradius;
		-webkit-border-top-right-radius: $borderradius;
		-moz-border-radius-topleft: $borderradius;
		-moz-border-radius-topright: $borderradius;
		border-top-left-radius: $borderradius;
		border-top-right-radius: $borderradius;
		}
	&:last-child
		{
		-webkit-border-bottom-left-radius: $borderradius;
		-webkit-border-bottom-right-radius: $borderradius;
		-moz-border-radius-bottomleft: $borderradius;
		-moz-border-radius-bottomright: $borderradius;
		border-bottom-left-radius: $borderradius;
		border-bottom-right-radius: $borderradius;
		}
	&:hover
		{
		background:$hover-color;
		}
	& a
		{
		display:block;
		width:100%;
		height:100%;
		padding:$item-padding;
		text-decoration:none;
		color:$font-color;
		font-size:$font-size;
		font-weight:$font-weight;
		text-align:$text-align;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		background-clip: border-box;
		}
	}
}</code></pre>
  
  <h3>
    CSS
  </h3>
  
  <pre><code>ul
{
@include dropdown(350px,20px,#333333,lighten(#333333,5%),#ffffff,16px,bold,center,10px)
}</code></pre>
  
  <hr />
  
  <ul>
    <li class="alt">
      Animated Image Caption
    </li>
  </ul>
  
  <p>
    This mixin adds an animated caption to your image which appears on mouse over.
  </p>
  
  <h3>
    HTML
  </h3>
  
  <pre><code>&lt;a href="/"&gt;
&lt;span class="outer"&gt;&lt;span class="inner"&gt;The animation is created using CSS3 transitions. Very useful.&lt;/span&gt;&lt;/span&gt;
&lt;img src="http://www.lukeharrison.net/wp-content/uploads/2014/02/screenshot_preview5.jpg" alt="Animated Image Caption" /&gt;
&lt;/a&gt;</code></pre>
  
  <h3>
    Sass Mixin
  </h3>
  
  <pre><code>@mixin animated-caption($font-color, $bg-color, $bg-opacity, $padding, $transition-speed)
{
display:inline-block;
position:relative;
overflow:hidden;
& img
	{
	display:block;
	width:100%;
	height:auto;
	}
& span.outer
	{
	display:block;
	width:100%;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
	padding:$padding;
	color:$font-color;
	position:absolute;
	bottom:-100px;
	-webkit-transition: bottom $transition-speed ease;
	-moz-transition: bottom $transition-speed ease;
	-o-transition: bottom $transition-speed ease;
	-ms-transition: bottom $transition-speed ease;
	transition: bottom $transition-speed ease;
	& span.inner
		{
		margin:0px;
		position:relative;
		}
	&:before
		{
		content: " ";
		display:block;
		position:absolute;
		z-index:0;
		left:0px;
		top:0px;
		width:100%;
		height:100%;
		background:$bg-color;
   		filter: alpha(opactiy=($bg-opacity * 100));
  		-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=#{$bg-opacity * 100})";
  		-moz-opacity: $bg-opacity;
  		-khtml-opacity: $bg-opacity;
  		opacity: $bg-opacity;
		}
	}
&:hover span.outer
	{	
	bottom:0px;
	}
}</code></pre>
  
  <h3>
    CSS
  </h3>
  
  <pre><code>a
{
@include animated-caption(#ffffff, #333333, 0.75, 10px, 0.5s)
}</code></pre>
</div>