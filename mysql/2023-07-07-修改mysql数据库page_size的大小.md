## MySQL 设置innodb_page_size

 无需在源编译步骤中指定页面大小。MySQL 5.6 及更高版本支持不同的页面大小，无需重新编译。

 Innodb page size 可以选择 8K、 16K、 32K、 64K。不过因为Innodb每个page都有不小的冗余空间，从空间和内存利用的角度来讲，page size越大越好。但是从checkpoint的角度来讲恰恰相反，page size越小，性能越好（上次演讲的时候我介绍过原理）。所以最后选择多大的page size可以根据实际的业务测试而定。 

但是，您必须在初始化 InnoDB 表空间之前设置页面大小。所有表空间（包括每个表的表空间、常规表空间、撤消表空间、临时表空间等）必须使用相同的页面大小。 



```shell
vi /etc/mysql/my.cnf

## 添加
innodb_page_size=32K


```



应该在数据库初次安装好以后设置,否则按照以下方式进行操作:

```shell
You need to do this before the InnoDB tablespaces are initialized. If you want to change the page size later:

Dump all your data
Stop mysqld
Change the configuration option I showed above
Start mysqld, which will initialize a new InnoDB tablespace automatically, with the new page size
Re-import your data
```

1.  导出你所有的数据
2.  停止mysql服务
3.  修改`innodb_page_size = 32K`
4.  备份data文件夹,重新创建data文件夹
5.  使用mysqld初始化数据库
6.  启动mysqld
7.  导入你所有的数据



