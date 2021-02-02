---
id: 200
title: 'How to install breakpoint-sass &#038; using it?'
date: 2016-01-25T12:21:01+00:00
author: liu1084
layout: post
guid: http://blog.83096146.com/?p=200
permalink: /?p=200
categories:
  - SASS
---
  * SASS是一种成熟、稳定和强有力的专业级别的css扩展语言。官方网站：<a href="http://sass-lang.com/" target="_blank">http://sass-lang.com/</a>
  * Breakpoint 是一个非常强大的基于sass的媒体选择库，用简单的mixin实现比较繁琐的媒体选择器。
  * sass的解析器是通过ruby编写的，所以依赖于ruby。
  
    下载并安装ruby，并设置PATH路径
  
    最新的ruby版本是2.2.3，地址：<a href="https://www.ruby-lang.org/en/downloads/" target="_blank">https://www.ruby-lang.org/en/downloads/</a>
  
    如果是windows系统，地址：<a href="http://rubyinstaller.org/downloads/" target="_blank">http://rubyinstaller.org/downloads/</a>通过gem安装sass和compass
  
    gme是ruby的包管理器，在cmd执行如下命令：</p> 
    <pre># gem install sass
# gem install compass
</pre>
    
    安装完成后，检查sass的版本
    
    <pre># sass -v
# compass -v
</pre>

<!--more-->

  * What is bundler

bundler 通过跟踪和安装确切的gem包，为ruby工程提供了一个一致性的开发环境。

通过使用bundle install来启动一个ruby工程变得如此简单。

  * Install breakpoint from bundler

列出当前本地安装的gem包：

<pre>$ gem list --local

*** LOCAL GEMS ***

bigdecimal (1.2.6)
bundle (0.0.1)
bundler (1.11.2)
chunky_png (1.3.5)
compass (1.0.3)
compass-core (1.0.3)
compass-import-once (1.0.5)
ffi (1.9.10 x64-mingw32)
io-console (0.4.3)
json (1.8.1)
minitest (5.8.3, 5.4.3)
multi_json (1.11.2)
power_assert (0.2.7, 0.2.2)
psych (2.0.8)
rake (10.4.2)
rb-fsevent (0.9.7)
rb-inotify (0.9.5)
rdoc (4.2.1, 4.2.0)
sass (3.4.20, 3.3.14)
sass-globbing (1.1.1)
sassy-maps (0.4.0)
singularitygs (1.6.2)
test-unit (3.1.5, 3.0.8)

</pre>

国内的gem站点：https://rubygems.org/经常会被防火墙阻挡，这里提供了如何添加和删除gem的站点

列出当前的gem站点（一般是默认的https://rubygems.org/）

$ gem source -l
  
\*\\*\* CURRENT SOURCES \*\**

https://ruby.taobao.org/

删除当前的源，添加镜像

gem source -r https://rubygems.org/

gem source -a http://gems.github.com

gem source -a https://ruby.taobao.org/

安装breakpoint

<pre>$ bundle init
$ vi Gemfile
$ bundle install
Resolving dependencies...
Using sass 3.3.14
Using bundler 1.11.2
Using sassy-maps 0.4.0
Using breakpoint 2.4.6
Bundle complete! 1 Gemfile dependency, 4 gems now installed.
Use `bundle show [gemname]` to see where a bundled gem is installed.

$ bundle show breakpoint
c:/Ruby22-x64/lib/ruby/gems/2.2.0/gems/breakpoint-2.4.6
</pre>

  * 添加breakpoint到config.rb中（如果没有config.rb这个文件，请执行compass init）

require &#8216;breakpoint&#8217;

  * 然后在你的scss文件中，导入

@import &#8216;breakpoint&#8217;

如果此时执行compass watch，肯定会提示找不到。这是因为通过bundle安装的gem包，compass是通过bundle找到的，所以执行

bundle exec compass watch就可以了。

例如：

<pre class=" language-scss"><code class=" language-scss">&lt;span class="token comment" spellcheck="true">// assume min-width (by default) if only a number
&lt;/span>&lt;span class="token variable">$high-tide&lt;/span>&lt;span class="token punctuation">:&lt;/span> 500px&lt;span class="token punctuation">;&lt;/span>
&lt;span class="token comment" spellcheck="true">// set min-width/max-width if both values are numbers
&lt;/span>&lt;span class="token variable">$ex-presidents&lt;/span>&lt;span class="token punctuation">:&lt;/span> 600px 800px&lt;span class="token punctuation">;&lt;/span>
&lt;span class="token comment" spellcheck="true">// if one value is a string, assume a feature/value pair
&lt;/span>&lt;span class="token variable">$surfboard-width&lt;/span>&lt;span class="token punctuation">:&lt;/span> max-width 1000px&lt;span class="token punctuation">;&lt;/span>
&lt;span class="token comment" spellcheck="true">// string tests together within parentheses, assume each item is a feature value pair
&lt;/span>&lt;span class="token variable">$surfboard-height&lt;/span>&lt;span class="token punctuation">:&lt;/span> (min-height 1000px) (orientation portrait)&lt;span class="token punctuation">;
&lt;/span></code></pre>

<pre class=" language-scss"><code class=" language-scss">&lt;span class="token selector">.reagan &lt;/span>&lt;span class="token punctuation">{&lt;/span>
     &lt;span class="token keyword">@include&lt;/span> breakpoint(&lt;span class="token variable">$high-tide&lt;/span>) &lt;span class="token punctuation">{&lt;/span>
       &lt;span class="token property">content&lt;/span>&lt;span class="token punctuation">:&lt;/span> &lt;span class="token string">'High tide'&lt;/span>&lt;span class="token punctuation">;&lt;/span>
     &lt;span class="token punctuation">}&lt;/span>
   &lt;span class="token punctuation">}&lt;/span></code></pre>

<pre class=" language-scss"><code class=" language-scss">&lt;span class="token selector">.nixon &lt;/span>&lt;span class="token punctuation">{&lt;/span>
   &lt;span class="token keyword">@include&lt;/span> breakpoint(&lt;span class="token variable">$ex-presidents&lt;/span>) &lt;span class="token punctuation">{&lt;/span>
   &lt;span class="token property">content&lt;/span>&lt;span class="token punctuation">:&lt;/span> &lt;span class="token string">'Ex-Presidents'&lt;/span>&lt;span class="token punctuation">;&lt;/span>
   &lt;span class="token punctuation">}&lt;/span>
 &lt;span class="token punctuation">}&lt;/span></code></pre>

<pre class=" language-scss"><code class=" language-scss">&lt;span class="token selector">.johnson &lt;/span>&lt;span class="token punctuation">{&lt;/span>
   &lt;span class="token keyword">@include&lt;/span> breakpoint(&lt;span class="token variable">$surfboard-width&lt;/span>) &lt;span class="token punctuation">{&lt;/span>
     &lt;span class="token property">content&lt;/span>&lt;span class="token punctuation">:&lt;/span> &lt;span class="token string">'Surfboard Width'&lt;/span>&lt;span class="token punctuation">;&lt;/span>
   &lt;span class="token punctuation">}&lt;/span>
 &lt;span class="token punctuation">}&lt;/span></code></pre>

<pre class=" language-scss"><code class=" language-scss">&lt;span class="token selector">.carter &lt;/span>&lt;span class="token punctuation">{&lt;/span>
   &lt;span class="token keyword">@include&lt;/span> breakpoint(&lt;span class="token variable">$surfboard-height&lt;/span>) &lt;span class="token punctuation">{&lt;/span>
     &lt;span class="token property">content&lt;/span>&lt;span class="token punctuation">:&lt;/span> &lt;span class="token string">'Surfboard Height, Portrait'&lt;/span>&lt;span class="token punctuation">;&lt;/span>
   &lt;span class="token punctuation">}&lt;/span>
 &lt;span class="token punctuation">}&lt;/span></code></pre>