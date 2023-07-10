## MySQL初始化user,plugins数据表

windows:

```shell
D:\dev\mysql-5.7.41-winx64\bin\mysqld.exe --defaults-file=D:\dev\mysql-5.7.41-winx64\my.ini --basedir=D:\dev\mysql-5.7.41-winx64  --datadir=D:\dev\mysql-5.7.41-winx64\data  --initialize-insecure  --ssl  --explicit_defaults_for_timestamp
```



Linux:

```shell
/usr/local/mysql/mysqld \
--defaults-file=/etc/mysql/my.cnf \
--basedir=/usr/local/mysql/ \
--datadir=/var/lib/mysql/ \
--user=mysql \
--initialize-insecure \
--ssl \
--explicit_defaults_for_timestamp \
--verbose
```

