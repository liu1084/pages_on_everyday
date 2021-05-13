## How to Start MySQL 5 on docker container based debian OS 10

-   pull image

```shell
docker pull mysql:5.7.34
```

-   create directories

```shell
mkdir -p /home/green26/docker/mysql/
cd /home/green26/docker/mysql/
mkdir log data
chmod 777 log/ data/
```

download mysql config file:
[mysql.conf.tgz](mysql/mysql.conf.tgz)

```shell
cd /home/green26/docker/mysql
tar zxvf mysql.conf.tgz
mv mysql conf
```

-   start mysql server

```shell
mkdir -p /var/log/mysql/
chmod 777 /var/log/mysql/
docker run -d \
--name mysql57-3307 \
-p 3307:3306 \
-e MYSQL_ROOT_PASSWORD=***************** \
-e TZ='Asia/Shanghai' \
-v /home/green26/docker/mysql/data/:/var/lib/mysql/ \
-v /home/green26/docker/mysql/log/:/var/log/mysql/ \
-v /home/green26/docker/mysql/conf:/etc/mysql \
-e MYSQL_DEFAULTS_FILE=/etc/mysql/my.cnf \
--restart=always \
mysql:5.7.34
```

-   connect mysql server

```shell
docker exec -it 3bcb32aa9f9c mysql -uroot -p
mysql: [Warning] Using a password on the command line interface can be insecure.
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 4
Server version: 5.7.34-log MySQL Community Server (GPL)

Copyright (c) 2000, 2021, Oracle and/or its affiliates.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
4 rows in set (0.00 sec)

mysql> 
```

