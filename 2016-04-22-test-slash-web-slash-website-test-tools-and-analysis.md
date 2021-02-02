---
layout: post
title: "test/web/Website test tools and analysis"
date: 2016-04-22 11:10:20 +0800
comments: true
categories: 
---

网站测试
网站测试 - 介绍
　　是指的当一个网站制作完上传到服务器之后针对网站的各项性能情况的一项检测工作。
网站测试 - 主要内容
一：性能测试
　　（1）连接速度测试。用户连接到电子商务网的速度与上网方式有关，他们或许是电话拨号，或是宽带上网！ 

　　（2）负载测试。负载测试是在某一负载级别下，检测电子商务系统的实际性能。 
　　也就是能允许多少个用户同时在线！可以通过相应的软件在一台客户机上模拟多个用户来测试负载。 

　　（3）压力测试。压力测试是测试系统的限制和故障恢复能力，也就是测试电子商务系统会不会崩溃！
网站压力测试工具
网站压力测试就是测试网站能够承受多大的访问量，以及在大访问量的情况下网站的性能。这些指标会直接影响用户的体验，因此在网站上线前一般都要做压力测试。压力测试也是考察网站使用的相关web服务器和框架的一个重要手段。

因为和真实的环境不同，压力测试通过模拟得到的结果不会和实际的负载完全相同，但它仍是一个很好的基准比较。做压力测试时也会尽可能地模拟实际的情况。

网上大家推荐的较为常见的网站压力测试工具有ab、webbench、http_load、siege、curl-loader、multi-mechanize、tcpcopy等。

这里的大部分测试工具采用事件驱动模型来创建模拟用户，比如ab使用 apr 包中的 apr_pollset_poll 函数，而其他的工具都使用 select 函数，只有webbench通过 fork 子进程来创建模拟用户，它能模拟的并发数更高。

我把大家的一些总结列在这里：

ab
Apache自带的压力测试工具，还有一个 独立版本 。主要用于测试网站的每秒处理请求数，多用于静态压力测试。基本用法是：

$ ab -n 1000 -c 50 http://192.168.1.101/
-n	总请求数
-c	并发连接数
输出的结果如下:

Server Software:        Apache/2.2.16
Server Hostname:        192.168.1.101
Server Port:            80

Document Path:          /                               请求文档路径
Document Length:        14643 bytes                     请求文档大小

Concurrency Level:      50                              并发数
Time taken for tests:   38.724 seconds                  总测试时间
Complete requests:      1000                            全部请求数
Failed requests:        14                              失败请求数
   (Connect: 0, Receive: 0, Length: 14, Exceptions: 0)
Write errors:           14
Total transferred:      14847500 bytes                  总数据传输量
HTML transferred:       14548500 bytes                  HTML数据传输量
Requests per second:    25.82 [#/sec] (mean)            平均每秒请求数
Time per request:       1936.210 [ms] (mean)            平均每次并发所有请求时间
Time per request:       38.724 [ms] (mean, across all concurrent requests)
                                                        平均每次请求时间
Transfer rate:          374.43 [Kbytes/sec] received    传输速率

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        2  668 1905.0    135   12237            连接时间
Processing:     0 1244 1652.3    902   14963            处理时间
Waiting:        0 1222 1651.1    883   14955            等待时间
Total:        134 1912 2723.5   1126   15096

Percentage of the requests served within a certain time (ms)
  50%   1126
  66%   1321
  75%   1369
  80%   1408
  90%   1917
  95%  10122
  98%  13030
  99%  13884
 100%  15096 (longest request)
webbench
webbench可以在 这里 下载。它主要测试每秒请求数，同时支持静态、动态和SSL，单例最多可模拟3万并发，适合小型网站的压力测试。

基本用法是：

$ webbench -c 100 -t 60 http://192.168.1.101/
-c	并发数
-t	测试时间
测试结果如下:

Benchmarking: GET http://192.168.1.101/
100 clients, running 60 sec.

Speed=1321 pages/min, 329214 bytes/sec.
Requests: 1321 susceed, 0 failed.
http_load
http_load可以在 这里 下载。它可以以单一进程运行，还可以测试HTTPS类的网站。

$ http_load -p 100 -s 60 urls.txt
几个主要的参数是：

-p	并发数
-s	访问时间
-f	总访问次数
-r	每秒访问次数
http_load把要测试的URL放在文件里。

测试结果如下:

1586 fetches, 100 max parallel, 2.32238e+07 bytes, in 60 seconds
14643 mean bytes/connection
26.4333 fetches/sec, 387063 bytes/sec
msecs/connect: 4.47058 mean, 1109.64 max, 0.211 min
msecs/first-response: 3652.73 mean, 29979.5 max, 234.175 min
HTTP response codes:
  code 200 -- 1586
Siege
Siege的主站为 http://www.joedog.org/siege-home/ 。它可以根据配置对一个网站做多用户并发访问，并记录每个用户所有请求过程的时间，可重复进行。

Siege需要先生成一个配置文件.siegerc。它的测试URL也是写在一个文件中的，每行一个，从中随机访问。并且会生成一个log文件。

$ siege -c 100 -r 10 -f urls.txt
-c	并发数
-r	重复次数
在终端会输出:

Transactions:                   1000 hits       总次数
Availability:                 100.00 %          成功率
Elapsed time:                  15.77 secs       测试时间
Data transferred:               0.45 MB         总数据传输量
Response time:                  0.47 secs       响应时间
Transaction rate:              63.41 trans/sec  每秒处理次数
Throughput:                     0.03 MB/sec     每秒数据传输量
Concurrency:                   29.90            实际最高并发数
Successful transactions:        1000            成功次数
Failed transactions:               0            失败次数
Longest transaction:            8.95            处理的最长时间
Shortest transaction:           0.04            处理的最短时间
同时，siege.log文件中会记录本次测试的时间等信息。

curl-loader
curl-loader 的特点是它使用了libcurl和openssl的客户端协议栈（更为真实），还支持登录和验证行为。

multi-mechanize
multi-mechanize 是一个Python写的性能测试框架。它可以用Python库中的 urllib 、 httplib 来发起请求，也可以用libcurl来请求。可以和Mechanize集成，因此做单元测试很容易。另外，它还可以用matplotlib将测试结果生成比较直观的图表。

tcpcopy
前面的几种测试工具属于轻量级的，一般都是以单例来模拟多用户并发。 tcpcopy 基于底层应用请求复制，并且具有分布式压力测试的功能（本身有C/S架构），结果和实际数据较为接近，主要用于中大型的压力测试。基于TCP的包均可测试。

二：安全性测试
　　它需要对网站的安全性（服务器安全，脚本安全），可能有的漏洞测试，攻击性测试，错误性测试。对电子商务的客户服务器应用程序、数据、服务器、网络、防火墙等进行测试！用相对应的软件进行测试！
三：基本测试
　　包括色彩的搭配，连接的正确性，导航的方便和正确，CSS应用的统一性
四：网站优化测试
　　好的电子商务网站是看它是否经过搜索引擎优化了，网站的架构、网页的栏目与静态情况等。

