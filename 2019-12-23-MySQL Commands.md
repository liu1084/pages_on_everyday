### MySQL Commands



### 数据库相关



- 显示表格的创建命令

```sql
mysql> show create table offices\G;
*************************** 1. row ***************************
       Table: offices
Create Table: CREATE TABLE `offices` (
  `officeCode` varchar(10) NOT NULL,
  `city` varchar(50) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `addressLine1` varchar(50) NOT NULL,
  `addressLine2` varchar(50) DEFAULT NULL,
  `state` varchar(50) DEFAULT NULL,
  `country` varchar(50) NOT NULL,
  `postalCode` varchar(15) NOT NULL,
  `territory` varchar(10) NOT NULL,
  PRIMARY KEY (`officeCode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8
1 row in set (0.00 sec)
```

- 显示所有数据库

```sql
mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| classicmodels      |
| ebookshop          |
| mysql              |
| performance_schema |
+--------------------+
13 rows in set (0.00 sec)
```

- 删除数据库

```sql
drop database classicmodels;
```

- 执行SQL文件

```sql
mysql> source C:\Users\Administrator\Desktop\mysqlsampledatabase.sql
```



### 权限相关



### 表相关



### 索引相关



