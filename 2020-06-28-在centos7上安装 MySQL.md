How to install mysql5.7 on centos7



```csharp
# 下载
shell> wget https://dev.mysql.com/get/mysql57-community-release-el7-11.noarch.rpm
# 安装 mysql 源
shell> yum localinstall mysql57-community-release-el7-11.noarch.rpm
```



## 安装 MySQL

使用 yum install 命令安装



```undefined
shell> yum install -y mysql-community-server
```

## 启动 MySQL 服务

在 CentOS 7 下，新的启动/关闭服务的命令是 `systemctl start|stop`



```undefined
shell> systemctl start mysqld
```

用 `systemctl status` 查看 MySQL 状态



```undefined
shell> systemctl status mysqld
```



## 设置字符集

```bash
[mysqld]
character-set-server=utf8
[client]
default-character-set=utf8
[mysql]
default-character-set=utf8
```
