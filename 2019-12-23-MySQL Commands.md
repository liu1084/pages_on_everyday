### MySQL Commands



### 数据库相关



-   创建数据库

```sql
CREATE DATABASE `jiradb` CHARACTER SET 'utf8mb4' COLLATE 'utf8mb4_bin';
```

-   查看数据库所用的字符集

```sql
SELECT @@character_set_database, @@collation_database;
```

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

- 导出数据库

```sql
mysqldump -uroot -p****** jiradb > /tmp/jira.sql
```

-   sql导入数据库

```sql
mysql -uroot -p*** jiradb < /tmp/jira.sql
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



```sql
use mysql;
show grants for 'sinoval'@'192.168.%';
show grants for 'sinoval';
show grants for 'root';

select * from user where host='%';
delete  from user where host='%';

use sinoval-ams;
SHOW CREATE PROCEDURE statistics_with_hour_peak \G;
show grants for sinoval;
revoke ALL PRIVILEGES ON `sinoval-ams`.`sinoval-*.*` from 'sinoval'@'%';
grant all privileges on * to 'sinoval'@'192.168.%' identified by 'sinoval@2022';
FLUSH PRIVILEGES;

use sinoval-auth;
show grants for sinoval;

revoke ALL PRIVILEGES ON `zentao`.*  from 'sinoval'@'%';
revoke ALL PRIVILEGES ON *.* from 'root'@'%';

grant all privileges on * to 'sinoval'@'192.168.%' identified by 'sinoval@2022';
FLUSH PRIVILEGES;
```





### 表相关



### 索引相关



### binlog

-   查看所有的日志文件

```sql
mysql> show binary logs;
+---------------+-----------+
| Log_name      | File_size |
+---------------+-----------+
| binlog.000001 |       177 |
| binlog.000002 |       177 |
| binlog.000003 | 133470803 |
+---------------+-----------+
3 rows in set (0.00 sec)
```

-   查看当前使用的日志

```sql
mysql> show master status;
+---------------+-----------+--------------+------------------+-------------------+
| File          | Position  | Binlog_Do_DB | Binlog_Ignore_DB | Executed_Gtid_Set |
+---------------+-----------+--------------+------------------+-------------------+
| binlog.000003 | 133470803 |              |                  |                   |
+---------------+-----------+--------------+------------------+-------------------+
1 row in set (0.00 sec)
```

-   查看当前日志的细节

```sql
mysql> show binlog events\G;
*************************** 1. row ***************************
   Log_name: binlog.000001
        Pos: 4
 Event_type: Format_desc
  Server_id: 87
End_log_pos: 123
       Info: Server ver: 5.7.34-log, Binlog ver: 4
*************************** 2. row ***************************
   Log_name: binlog.000001
        Pos: 123
 Event_type: Previous_gtids
  Server_id: 87
End_log_pos: 154
       Info: 
*************************** 3. row ***************************
   Log_name: binlog.000001
        Pos: 154
 Event_type: Stop
  Server_id: 87
End_log_pos: 177
       Info: 
3 rows in set (0.00 sec)
```

