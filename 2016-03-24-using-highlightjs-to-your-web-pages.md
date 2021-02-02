---
id: 262
title: using highlightjs to your web pages
date: 2016-03-24T17:42:54+00:00
author: liu1084
layout: post
guid: http://blog.83096146.com/?p=262
permalink: /?p=262
categories:
  - front-end
  - HTML5
  - javascript
---
步骤&nbsp; 

  1. 首先克隆highlightjs项目到本地； 
  2. 使用node来编译； 
  3. 建立HTML，并引用编译好的JS和CSS； 
  4. 使用hljs来渲染代码块。 

    git clone git@github.com:isagalaev/highlight.js.git
    cd highlight.js
    npm install && node tools/build.js

index.html 

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>highlight.js test</title>
    
        <link href="styles/default.css" rel="stylesheet"/>
        <link href="styles/monokai.css" rel="stylesheet"/>
    </head>
    <body>
    <pre>
        <code class="javascript">
                class Car extends Vehicle {
                    constructor(speed, cost) {
                        super(speed);
    
                        var c = Symbol('cost');
                        this[c] = cost;
    
                        this.intro = `This is a car runs at ${speed}.`;
                    }
                }
        </code>
    </pre>
    <script src="../bower_components/jquery/dist/jquery.js"></script>
    <script src="highlight.pack.js"></script>
    <script src="test.js"></script>
    </body>
    </html>

test.js:&nbsp; 

    $(function () {
    	$('code').each(function(i, block) {
    		hljs.highlightBlock(block);
    	});
    });

&nbsp; 

result: 

<img alt="result" class="aligncenter size-full wp-image-263" height="191" src="http://blog.83096146.com/wp-content/uploads/2016/03/result.png" style="float: left;" width="493" srcset="http://blog.83096146.com/wp-content/uploads/2016/03/result-300x116.png 300w, http://blog.83096146.com/wp-content/uploads/2016/03/result.png 493w" sizes="(max-width: 493px) 100vw, 493px" />