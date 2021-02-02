---
id: 91
title: 'Linux Shell &#8211; curl'
date: 2015-12-29T00:41:08+00:00
author: liu1084
layout: post
guid: http://blog.83096146.com/?p=91
permalink: /?p=91
categories:
  - linux
---
用途说明
  
curl命令是一个功能强大的网络工具，它能够通过http、ftp等方式下载文件，也能够上传文件。其实curl远不止前面所说的那些功能，大家可以通过man curl阅读手册页获取更多的信息。类似的工具还有wget。
  
curl命令使用了libcurl库来实现，libcurl库常用在C程序中用来处理HTTP请求，curlpp是libcurl的一个C++封装，这几个东西可以用在抓取网页、网络监控等方面的开发，而curl命令可以帮助来解决开发过程中遇到的问题。

<!--more-->


  
常用参数
  
curl命令参数很多，这里只列出我曾经用过、特别是在shell脚本中用到过的那些。
  
-A:随意指定自己这次访问所宣称的自己的浏览器信息
  
-b/&#8211;cookie <name=string/file> cookie字符串或文件读取位置，使用option来把上次的cookie信息追加到http request里面去。
  
-c/&#8211;cookie-jar 操作结束后把cookie写入到这个文件中
  
-C/&#8211;continue-at 断点续转
  
-d/&#8211;data HTTP POST方式传送数据
  
-D/&#8211;dump-header 把header信息写入到该文件中
  
-F/&#8211;form <name=content> 模拟http表单提交数据
  
-v/&#8211;verbose 小写的v参数，用于打印更多信息，包括发送的请求信息，这在调试脚本是特别有用。
  
-m/&#8211;max-time 指定处理的最大时长
  
-H/&#8211;header<header>指定请求头参数


  
-s/&#8211;slient 减少输出的信息，比如进度
  
&#8211;connect-timeout 指定尝试连接的最大时长
  
-x/&#8211;proxy <proxyhost[:port]> 指定代理服务器地址和端口，端口默认为1080
  
-T/&#8211;upload-file 指定上传文件路径
  
-o/&#8211;output 指定输出文件名称
  
&#8211;retry 指定重试次数
  
-e/&#8211;referer 指定引用地址
  
-I/&#8211;head 仅返回头部信息，使用HEAD请求
  
-u/&#8211;user <user[:password]>设置服务器的用户和密码
  
-O:按照服务器上的文件名，自动存在本地
  
-r/&#8211;range 检索来自HTTP/1.1或FTP服务器字节范围
  
-T/&#8211;upload-file 上传文件
  
使用示例
  
1，抓取页面内容到一个文件中
  
[root@xi mytest]# curl -o home.html http://www.baidu.com &#8211;将百度首页内容抓下到home.html中
  
[root@xi mytest]#curl -o #2_#1.jpghttp://cgi2.tky.3web.ne.jp/~{A,B}/[001-201].JPG
  
由于A/B下的文件名都是001，002&#8230;，201，下载下来的文件重名，这样，自定义出来下载下来的文件名，就变成了这样：原来： A/001.JPG —-> 下载后： 001-A.JPG 原来： B/001.JPG &#8212;> 下载后： 001-B.JPG</header> 

2，用-O（大写的），后面的url要具体到某个文件，不然抓不下来。还可以用正则来抓取东西
  
[root@xi mytest]# curl -O http://www.baidu.com/img/bdlogo.gif
  
运行结果如下：
  
% Total % Received % Xferd Average Speed Time Time Time Current
  
Dload Upload Total Spent Left Speed
  
100 1575 100 1575 0 0 14940 0 &#8211;:&#8211;:&#8211; &#8211;:&#8211;:&#8211; &#8211;:&#8211;:&#8211; 1538k
  
会在当前执行目录中生成一张bdlogo.gif的图片。
  
[root@xi mytest]# curl -O http://XXXXX/screen[1-10].JPG &#8211;下载screen1.jpg~screen10.jpg
  
3，模拟表单信息，模拟登录，保存cookie信息
  
[root@xi mytest]# curl -c ./cookie_c.txt -F log=aaaa -F pwd=\***\***http://www.XXXX.com/wp-login.php
  
4，模拟表单信息，模拟登录，保存头信息
  
[root@xi mytest]# curl -D ./cookie_D.txt -F log=aaaa -F pwd=\***\***http://www.XXXX.com/wp-login.php
  
-c(小写)产生的cookie和-D里面的cookie是不一样的。
  
5，使用cookie文件
  
[root@xi mytest]# curl -b ./cookie_c.txt http://www.XXXX.com/wp-admin
  
6，断点续传，-C(大写)
  
[root@xi mytest]# curl -C -O http://www.baidu.com/img/bdlogo.gif
  
7，传送数据,最好用登录页面测试，因为你传值过去后，curl回抓数据，你可以看到你传值有没有成功
  
[root@xi mytest]# curl -d log=aaaa http://www.XXXX.com/wp-login.php
  
8，显示抓取错误，下面这个例子，很清楚的表明了。
  
[root@xi mytest]# curl -fhttp://www.XXXX.com/asdf
  
curl: (22) The requested URL returned error: 404
  
[root@xi mytest]# curlhttp://www.XXXX.com/asdf
  
404,not found
  
9，伪造来源地址，有的网站会判断，请求来源地址，防止盗链。
  
[root@xi mytest]# curl -ehttp://localhosthttp://www.XXXX.com/wp-login.php
  
10，当我们经常用curl去搞人家东西的时候，人家会把你的IP给屏蔽掉的,这个时候,我们可以用代理
  
[root@xi mytest]# curl -x 24.10.28.84:32779 -o home.htmlhttp://www.XXXX.com
  
11，比较大的东西，我们可以分段下载
  
[root@xi mytest]# curl -r 0-100 -o img.part1http://www.XXXX.com/wp-content/uploads/2010/09/compare_varnish.jpg
  
% Total % Received % Xferd Average Speed Time Time Time Current
  
Dload Upload Total Spent Left Speed
  
100 101 100 101 0 0 105 0 &#8211;:&#8211;:&#8211; &#8211;:&#8211;:&#8211; &#8211;:&#8211;:&#8211; 0
  
[root@xi mytest]# curl -r 100-200 -o img.part2http://www.XXXX.com/wp-ontent/uploads/2010/09/compare_varnish.jpg
  
% Total % Received % Xferd Average Speed Time Time Time Current
  
Dload Upload Total Spent Left Speed
  
100 101 100 101 0 0 57 0 0:00:01 0:00:01 &#8211;:&#8211;:&#8211; 0
  
[root@xi mytest]# curl -r 200- -o img.part3http://www.XXXX.com/wp-content/uploads/2010/09/compare_varnish.jpg
  
% Total % Received % Xferd Average Speed Time Time Time Current
  
Dload Upload Total Spent Left Speed
  
100 104k 100 104k 0 0 52793 0 0:00:02 0:00:02 &#8211;:&#8211;:&#8211; 88961
  
[root@xi mytest]# ls |grep part | xargs du -sh
  
4.0K one.part1
  
112K three.part3
  
4.0K two.part2
  
用的时候，把他们cat一下就OK,cat img.part* >img.jpg
  
12，不会显示下载进度信息
  
[root@xi mytest]# curl -s -o aaa.jpg http://www.baidu.com/img/bdlogo.gif
  
13，显示下载进度条
  
[root@xi mytest]# curl -0 http://www.baidu.com/img/bdlogo.gif (以http1.0协议请求)
  
####################################################################### 100.0%
  
14,通过ftp下载文件
  
[xifj@Xi ~]$ curl -u用户名:密码 -Ohttp://www.XXXX.com/demo/curtain/bbstudy_files/style.css
  
% Total % Received % Xferd Average Speed Time Time Time Current
  
Dload Upload Total Spent Left Speed
  
101 1934 101 1934 0 0 3184 0 &#8211;:&#8211;:&#8211; &#8211;:&#8211;:&#8211; &#8211;:&#8211;:&#8211; 7136
  
[xifj@Xi ~]$ curl -u 用户名:密码 -O http://www.XXXX.com/demo/curtain/bbstudy_files/style.css
  
% Total % Received % Xferd Average Speed Time Time Time Current
  
Dload Upload Total Spent Left Speed
  
101 1934 101 1934 0 0 3184 0 &#8211;:&#8211;:&#8211; &#8211;:&#8211;:&#8211; &#8211;:&#8211;:&#8211; 7136
  
或者用下面的方式
  
[xifj@Xi ~]$ curl -O ftp://用户名:密码@ip:port/demo/curtain/bbstudy_files/style.css
  
[xifj@Xi ~]$ curl -O ftp://用户名:密码@ip:port/demo/curtain/bbstudy_files/style.css
  
15，通过ftp上传
  
[xifj@Xi ~]$ curl -T test.sql ftp://用户名:密码@ip:port/demo/curtain/bbstudy_files/
  
[xifj@Xi ~]$ curl -T test.sql ftp://用户名:密码@ip:port/demo/curtain/bbstudy_files/

15,模拟浏览器头
  
[xifj@Xi ~]$ curl -A &#8220;Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.0)&#8221; -x 123.45.67.89:1080 -o page.html -D cookie0001.txthttp://www.www.baidu.com
  
16,PUT、GET、POST
  
比如 curl -T localfile http://cgi2.tky.3web.ne.jp/~zz/abc.cgi，这时候，使用的协议是HTTP的PUT method
  
刚才说到PUT，自然想起来了其他几种methos－－GET和POST。
  
http提交一个表单，比较常用的是POST模式和GET模式
  
GET模式什么option都不用，只需要把变量写在url里面就可以了
  
比如：
  
curl http://www.yahoo.com/login.cgi?user=nick&password=12345
  
而POST模式的option则是 -d
  
比如，curl -d &#8220;user=nick&password=12345&#8221; http://www.yahoo.com/login.cgi
  
就相当于向这个站点发出一次登陆申请~~~~~
  
到底该用GET模式还是POST模式，要看对面服务器的程序设定。
  
一点需要注意的是，POST模式下的文件上的文件上传，比如

这样一个HTTP表单，我们要用curl进行模拟，就该是这样的语法：
  
curl -F upload=@localfile -F nick=go http://cgi2.tky.3web.ne.jp/~zz/up_file.cgi