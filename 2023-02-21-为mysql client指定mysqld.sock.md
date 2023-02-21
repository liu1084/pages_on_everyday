## 为mysql client指定mysqld.sock



```shell
touch ~/.my.cnf

添加mysqld.sock路径，例如：
[client]
socket=/home/ubuntu/docker/mysql/env/dev/run/mysqld.sock
```

![image-20230221102943379](Z:%5Cgithub%5Cpages_on_everyday%5Cimgs%5Cimage-20230221102943379.png)

