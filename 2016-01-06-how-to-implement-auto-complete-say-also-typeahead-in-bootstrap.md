---
id: 167
title: 'How to implement auto-complete (Say also: Typeahead) in bootstrap'
date: 2016-01-06T17:28:28+00:00
author: liu1084
layout: post
guid: http://blog.83096146.com/?p=167
permalink: /?p=167
categories:
  - linux
---
When user input something in a form input, auto-complete is important, which can be a good user experience.

<img class="size-full wp-image-168 alignleft" src="http://blog.83096146.com/wp-content/uploads/2016/01/auto-complete.png" alt="auto-complete" width="179" height="262" />

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

<p style="text-align: left;">
  How to implement? There is a good plugin named <a href="https://github.com/bassjobsen/Bootstrap-3-Typeahead" target="_blank">Bootstrap-3-Typeahead</a>。
</p>

<p style="text-align: left;">
  <!--more-->
</p>

<li style="text-align: left;">
  install it to your project by bower & include it to your static html page (<a id="d50dde41ea672c745d83e03b84f76404-05bc590dd8d2a9aed83c79c399a690bde8b3a771" class="js-directory-link js-navigation-open" title="bootstrap3-typeahead.min.js" href="https://github.com/bassjobsen/Bootstrap-3-Typeahead/blob/master/bootstrap3-typeahead.min.js">bootstrap3-typeahead.min.js</a>)
</li>

bower install Bootstrap-3-Typeahead

  * parse data and call it
  * <pre>Object.prototype.autoComplete = function(data) {
        var thiz = this;
        var parseData = function(items) {
            var items = [];
            $.each(items, function(index, item) {
                items.push({
                    id: (new Date()).getTime() + parseInt(Math.random() * 10 + 1),
                    name: item.id
                });
                items.push({
                    id: (new Date()).getTime() + parseInt(Math.random() * 10 + 1),
                    name: item.name
                });
            });
            return items;
        };
        var source = this.autoComplete();
        $('input').typeahead({
            source: source,
            autoSelect: true
        });
    };
</pre>

&nbsp;

  * that&#8217;s all.

Note: I use timestamp as a key, and use real data(NOT object, BUT string) as value.