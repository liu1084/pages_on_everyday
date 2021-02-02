---
layout: post
title: "mysql/How to make mysql slow query on?"
date: 2016-06-16 16:34:58 +0800
comments: true
categories: mysql slow-query
---

- 慢查询有什么用?

它能记录下所有执行超过long_query_time时间的SQL语句, 帮你找到执行慢的SQL, 方便我们对这些SQL进行优化.

-如何开启慢查询?

首先我们先查看MYSQL服务器的慢查询状态是否开启.执行如下命令:

```shell
mysql> show variables like '%query%';
+------------------------------+-------------------------------+
| Variable_name                | Value                         |
+------------------------------+-------------------------------+
| ft_query_expansion_limit     | 20                            |
| have_query_cache             | YES                           |
| long_query_time              | 10.000000                     |
| query_alloc_block_size       | 8192                          |
| query_cache_limit            | 1048576                       |
| query_cache_min_res_unit     | 4096                          |
| query_cache_size             | 16777216                      |
| query_cache_type             | ON                            |
| query_cache_wlock_invalidate | OFF                           |
| query_prealloc_size          | 8192                          |
| slow_query_log               | ON                            |
| slow_query_log_file          | /var/log/mysql/mysql-slow.log |
+------------------------------+-------------------------------+
12 rows in set (0.00 sec)
```

slow_query_log 状态为`ON`,slow_query_log_file为`/var/log/mysql/mysql-slow.log`
上面的两个值表示慢查询开启,慢查询的日志文件为`/var/log/mysql/mysql-slow.log`;

long_query_time: 最长执行时间.默认是10秒,也就是如果SQL执行时间超过10S,那么就会被日志抓到慢查询中.

如果slow_query_log状态为`OFF`,打开慢查询的步骤

- vim /etc/mysql/my.cnf
在`[mysqld]`下面添加:
```shell
log_slow_queries        = /var/log/mysql/mysql-slow.log
```
如果你还想开启SQL查询日志,
在`[mysqld]`下面添加:
```shell
general_log_file        = /var/log/mysql/mysql.log
general_log             = 1
```
这样,所有的SQL查询都会放在日志中.