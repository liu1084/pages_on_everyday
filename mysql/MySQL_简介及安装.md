# MySQL

## 数据库介绍

顾名思义，数据库就是存档某些数据的仓库。但是这个仓库不是一个实体仓库，也不存储实体物品，而是存放数据。比如我们常见的：

-   我们在大型超市购物时，我们购买的商品的价格和折扣等信息就存在一个数据库中。
-   我们手机上的联系人信息是一个列表，这个列表数据也存在一个数据库中。
-   电子商务网站中的商品的库存和价格信息也存在于服务器的数据库中。
-   汽车 4S 店的服务客户的记录信息也会存储在一个数据库中。

可以说，在现在的信息化系统中，数据库无处不在。

数据库是一个以某种有组织的方式存储的数据集合。当人们收集了大量的数据后，应该把它们保存起来进一步的处理，进一步地抽取有用的信息。现在人们借助计算机和数据库技术科学地保存了大量的数据，以便更好地利用这些数据资源。



## MySQL 简介

MySQL 是一个开放源码的关系数据库管理系统，开发者为瑞典 MySQL AB 公司。目前 MySQL 被广泛地应用在 Internet 上的大中小型网站中。由于其体积小、速度快、总体拥有成本低，尤其是开放源码这一特点，许多中小型网站为了降低网站总体拥有成本而选择了 MySQL 作为网站数据库。

MySQL 这个名字是怎么来的已经不清楚了。一些基本指南和大量的库和工具都使用 `my` 前缀很长时间了，这可能是一个原因。 MySQL AB 创始人之一的 [Monty Widenius](https://zh.wikipedia.org/wiki/米卡埃爾·維德紐斯)的女儿也叫 My。 MySQL 这个名字到底来源于哪一个原因，包括开发者在内也不知道。

MySQL 的海豚标志的名字叫 “sakila”，它是由 MySQL AB 的创始人从用户在“海豚命名”的竞赛中建议的大量的名字表中选出的。获胜的名字是由来自非洲斯威士兰的开源软件开发者 Ambrose Twebaze 提供。根据 Ambrose 所说，Sakila 来自一种叫 SiSwati 的斯威士兰方言，也是在 Ambrose 的家乡乌干达附近的坦桑尼亚的 Arusha 的一个小镇的名字。

2008 年 1 月 16 日 MySQL AB 被 Sun 公司收购。而 2009 年，SUN 又被 Oracle 收购。就这样如同一个轮回，MySQL 成为了 Oracle 公司的另一个数据库项目。

MySQL 是数据库的一种，具有数据库的通用特征，同时，比起其他类型的数据库，它还具有自己鲜明的特点。

MySQL 是一个小型的开源的关系型数据库管理系统。与其他大型数据库管理系统例如 Oracle、DB2、SQL Server 等相比，MySQL 规模小，功能有限，但是它体积小、速度快、成本低，且它提供的功能对稍微复杂的应用已经够用，这些特性使得 MySQL 成为世界上最受欢迎的开放源代码数据库。

MySQL 是一种开放源代码的关系型数据库管理系统（RDBMS），MySQL 数据库系统使用最常用的数据库管理语言——结构化查询语言（SQL）进行数据库管理。

由于 MySQL 是开放源代码的，因此任何人都可以在 General Public License 的许可下下载并根据个性化的需要对其进行修改。MySQL 因为其速度、可靠性和适应性而备受关注。大多数人都认为在不需要事务化处理的情况下，MySQL 是管理内容最好的选择。

## MySQL 版本

针对不同的用户，MySQL 分为两个不同的版本：

-   MySQL 社区版：该版本完全免费，但是官方不提供技术支持。用户可以自由下载使用。
-   MySQL 企业版服务器：为企业提供数据库应用，支持 ACID 事务处理，提供完整的提交、回滚、崩溃恢复和行政锁定功能。需要付费使用，官方提供技术支持。

对绝大多数应用而言，MySQL 社区版都能满足。

MySQL 可以在 UNIX、Linux、Windows 等各种平台上运行。并且不管是服务器还是桌面版本的 PC，都可以安装 MySQL，并且 MySQL 在各个平台都很可靠且速度快。

如果您开发网站或 Web 应用程序，MySQL 是一个不错的选择。MySQL 是 LAMP 堆栈的重要组件。 LAMP 网站架构是目前国际流行的 Web 框架， 其中包括 Linux、Apache、MySQL 和 PHP。

## MySQL的下载，安装
### windows平台
- [下载地址](https://cdn.mysql.com/archives/mysql-5.7/mysql-5.7.41-winx64.zip)
- 解压缩，如：

![image-20230706160718131](Z:%5Cgithub%5Cpages_on_everyday%5Cimgs%5Cimage-20230706160718131.png)

- 在mysql的根目录添加my.ini配置文件
```xml
[client]
port                        = 3306

[mysqld]
user                        = mysql
bind-address                = 0.0.0.0
port                        = 3306
tmpdir                      = D:/dev/mysql-5.7.41-winx64/tmp
default-storage-engine      = InnoDB
character-set-server        = utf8mb4
collation-server            = utf8mb4_unicode_ci
transaction-isolation       = READ-COMMITTED
innodb_default_row_format   = DYNAMIC
innodb_large_prefix         = ON
innodb_log_file_size        = 2G
symbolic-links              = 0
skip_name_resolve           = 1
max_connections             = 2000
sql_mode                    = STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION
default-time-zone           = "+08:00"
general_log_file            = D:/dev/mysql-5.7.41-winx64/logs/mysql.log
general_log                 = 1
log_error                   = D:/dev/mysql-5.7.41-winx64/logs/error.log
slow_query_log              = 1
slow_query_log_file         = D:/dev/mysql-5.7.41-winx64/logs/mysql-slow.log
server-id                   = 1901
#log-bin                    = binlog
#innodb_flush_method        = normal
max_allowed_packet          = 512M
innodb_buffer_pool_size     = 512M
net_read_timeout            = 360
net_write_timeout           = 360
connect_timeout             = 360
#skip-grant-tables          = 1

[mysqldump]
quick
quote-names
```



-   添加服务到window，实现自启动

```shell
@echo off 

echo Installing MySQL as an Service 
D:\dev\mysql-5.7.41-winx64\bin\mysqld --install mysql --defaults-file="D:\dev\mysql-5.7.41-winx64\my.ini"
echo Try to start the MySQL deamon as service ... 
net start mysql

:exit 
pause
```



-   启动

![image-20230706164532528](Z:%5Cgithub%5Cpages_on_everyday%5Cimgs%5Cimage-20230706164532528.png)

### Linux平台

-   [下载地址](https://cdn.mysql.com//Downloads/MySQL-5.7/mysql-boost-5.7.42.tar.gz)
-   安装必要的依赖包

```shell
apt-get install -y \
	build-essential \
	libssl-dev \
	openssl \
	libncurses-dev \
	git \
	bison \
	cmake \
	libwrap0-dev \
	zlib1g-dev \
	ca-certificates \
	g++ \
	python-dev \
	autotools-dev \
	libicu-dev \
	libbz2-dev \
	libboost-all-dev \
	pkg-config \
	curl \
	libaio-dev \
	libevent-dev \
	libevent-2.1-7 \
	libmemcached-dev \
```



-   编译&安装

```shell
cd mysql-boost-5.7.42 \
	&& groupadd mysql && useradd -r -g mysql -s /bin/false mysql \
	&& mkdir bld && cd bld \
    && cmake .. \
	-DCMAKE_INSTALL_PREFIX=${WORK_DIR} \
	-DMYSQL_DATADIR=${DATA_DIR} \
	-DENABLED_PROFILING=1 \
	-DWITH_SSL=system \
	-DDOWNLOAD_BOOST=1 \
	-DWITH_BOOST=../boost \
	-DDEFAULT_CHARSET=utf8mb4 \
	-DDEFAULT_COLLATION=utf8mb4_unicode_ci \
	-DENABLED_LOCAL_INFILE=1 \
	-DMAX_INDEXES=255 \
	-DOPTIMIZER_TRACE=1 \
	-DWITH_DEBUG=1 \
	-DWITH_INNODB_EXTRA_DEBUG=1 \
    && make && make install \
    && cd ${WORK_DIR} \
    && mkdir -p  mysql-files ${DATA_DIR} ${LOG_DIR} ${CONF_DIR}\
    && chown mysql:mysql mysql-files ${DATA_DIR} ${LOG_DIR} ${CONF_DIR} \
    && cp support-files/mysql.server /etc/init.d/mysql.server \
    && chmod 750 mysql-files \
    && if [ ! -d ${DATA_DIR}/mysql ]; then ${WORK_DIR}/bin/mysqld --initialize --user=mysql && ${WORK_DIR}/bin/mysql_ssl_rsa_setup; fi \
    && apt clean autoclean && apt autoremove --yes && rm -rf /var/lib/{apt,dpkg,cache,log}/ \
    && rm -rf /usr/local/src/mysql-${MYSQL_VERSION}.* \
    && echo "export PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin >> /etc/profile"
```



-   启动

```shell
bin/mysqld_safe --log_timestamps=SYSTEM --defaults-file=${CONF_DIR}/my.cnf --user=mysql
```



