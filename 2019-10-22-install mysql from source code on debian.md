## install mysql from source code on debian

> Preconfiguration setup
> https://dev.mysql.com/doc/refman/5.6/en/installing-source-distribution.html


- 安装必要的软件包
```shell
# su -
# cd /usr/local/src && wget https://downloads.mysql.com/archives/get/p/23/file/mysql-boost-5.7.30.tar.gz
# apt install openjdk-8-jdk build-essential libssl-dev libncurses5-dev pkg-config cmake openssl -y 

```

- 安装mysql
```shell
# Preconfiguration setup
shell> groupadd mysql
shell> useradd -r -g mysql -s /bin/false mysql
# Beginning of source-build specific instructions
shell> tar zxvf mysql-VERSION.tar.gz
shell> cd mysql-VERSION
shell> mkdir bld
shell> cd bld
shell> cmake ..
shell> make
shell> make install
# End of source-build specific instructions
# Postinstallation setup
shell> cd /usr/local/mysql
shell> mkdir mysql-files
shell> chown mysql:mysql mysql-files
shell> chmod 750 mysql-files
shell> bin/mysqld --initialize --user=mysql
shell> bin/mysql_ssl_rsa_setup
shell> bin/mysqld_safe --user=mysql &
# Next command is optional
shell> cp support-files/mysql.server /etc/init.d/mysql.server
```

- 修改mysql的配置
```shell
vi /etc/mysql/my.cnf
[mysqld]
user            = mysql
port            = 3307
tmpdir          = /tmp
default-storage-engine = InnoDB
character-set-server = utf8mb4
transaction-isolation = READ-COMMITTED
innodb_default_row_format=DYNAMIC
innodb_large_prefix=ON
innodb_log_file_size=2G
symbolic-links = 0
skip_name_resolve
max_connections = 2000
sql_mode=STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION
!includedir /etc/mysql/conf.d/

general_log_file        = /var/log/mysql/mysql.log
general_log             = 1
log_error = /var/log/mysql/error.log
slow_query_log       = 1
slow_query_log_file     = /var/log/mysql/mysql-slow.log

[mysqldump]
quick
quote-names
max_allowed_packet      = 64M
```

- 创建mysql的日志目录并赋权给mysql用户
```
mkdir -p /var/log/mysql/
chown mysql:mysql /var/log/mysql/
```

- 启动mysql服务
```
cd /usr/local/mysql/bin
./mysqld_safe --skip-grant-tables
```

- 修改mysql的用户和权限
```
mysql -uroot
flush privileges;
grant all on 'root'@'localhost' identified by '***********';
```

- 重启mysql
```
systemctl start mysql.server.service
```