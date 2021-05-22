# Redis与MySql同步方案分析

-   Redis与MySql的数据一致性方案 

-   Canal解析binlog方案简介
-   Redis开发原则
-   自动清理binlog日志



### Redis与MySql的数据一致性方案

方案1: 手动同步

对于读操作，先读redis，有则返回，无则读取MySql，并插入Redis。对于插入操作，先插入MySql，再写入cache。对于更新和删除操作，先删除cache，再操作MySql。 

特点:  直观简单，但是每次数据操作都需要手动维护缓存和数据库的一致性。高并发情况下，会出现db与cache的不一致 

方案2: 自动同步

Canal主要是基于数据库的日志解析，获取增量变更进行同步，由此衍生出了增量订阅&消费的业务，核心基本就是模拟MySql中Slave节点请求。 

特点:  阿里开源项目，比较成熟的解决方案。 



### Canal解析binlog简介

binlog，全称binary log，即MySql的二进制日志文件。

binlog用于记录mysql的数据更新或者潜在更新(比如DELETE语句执行删除而实际并没有符合条件的数据)，在mysql主从复制中就是依靠的binlog。



### MySql主从复制

![](I:%5Cgithub%5Cpages_on_everyday%5Cimgs%5Cmysql_replication_topology_threads.png)

原理:

-   Master将数据库增量更新记录到二进制日志(binary log)中（这些记录叫做二进制日志事件，binary log events，可以通过show binlog events进行查看）；
-   Slave将Master的binary log events拷贝到它的中继日志(relay log)；
-   Slave重做中继日志中的事件，将数据库增量更新反映到自己的数据库中。

### Canal原理

![](I:%5Cgithub%5Cpages_on_everyday%5Cimgs%5Cmysql-canal.png)

1. Canal模拟MySql Slave的交互协议，伪装自己为MySql Slave，向MySql Master发送dump协议
2. MySql Master收到dump请求，开始推送binary log给Slave(也就是Canal)
3. Canal解析binary log对象(原始为byte流)



### Redis开发原则

1.  所有的写操作（插入、更新、删除）都访问MySql。
2.  所有的读操作都访问cache。
3.  通过Canal解析MySql的binlog同步Redis来保持数据一致性。
4.  提供一个初始化全部缓存数据的方法：initCache。
5.  Redis的KEY命名规范：项目名称-模块名称-对象名称-主键id。例如：baidu-news-user-0000000001。

### 注意事项

1.  MySql需要开启binlog模式，此模式下导致MySql性能下降。
2.  MySql需要开启binlog模式，此模式下导致MySql的binlog文件激增。
3.  在处理**blob**数据类型时，需要进行转码。

-   如果MySql本身需要使用主从复制，则必须开启binlog。所以此种情况下，第一条无需在意。
-   为了防止因binlog文件激增导致数据库服务器磁盘激增，可以设置MySql日志的自动清理。
-   Canal在读取了binlog的数据之后，会进行判断属于那种数据类型。这时，如果此字段属于blob字段，则进行转码即可，伪代码如下：

```java
//判断每个字段
for (Column column : columns) {
    //如果字段类型为blob，则进行转码
    if ("blob".equals(column.getMysqlType())) {
        json.put(column.getName(), new String(column.getValue().getBytes("ISO-8859-1"),"gbk"));
    }else{//其他字段直接将字段名和值放到json串中
        json.put(column.getName(), column.getValue());
    }
}
```



### 具体实现

[mysql 同步redis](https://blog.csdn.net/hanchao5272/article/details/79792465)

[mysql 同步es](https://blog.csdn.net/doupengzp/article/details/107692878)



### 自动清理binlog日志

```shell
//关闭MySql服务

//vi /etc/my.cnf
[mysqld]
...

# 设置server-id
server-id=1
#开启binary log
log-bin=mysql-bin

#日志超过3天自动过期
expire_logs_days = 3
...

//开启MySql服务
```

