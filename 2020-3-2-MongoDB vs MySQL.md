### MongoDB 4 vs MySQL 5 的对比

- 跟传统关系型数据库MySQL的对比

1. 术语

| Schema | MongoDB        | MySQL       | 例如            |
| ------ | -------------- | ----------- | --------------- |
| 数据库 | database       | database    | show databases; |
| 表     | collection     | table       |                 |
| 记录   | document       | row         |                 |
| 字段   | field          | column      |                 |
| 索引   | index          | index       |                 |
| 表连接 | inner document | join        |                 |
| 主键   | primary key    | primary key |                 |

2. 配置文件

   ```mysql
   [mysqld]
   #timezone
   default-time-zone = '+08:00'
   
   #mode
   sql_mode=IGNORE_SPACE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION
   socket = "/tmp/mysql.sock"
   
   #directory
   basedir = "/usr/local/mysql5"
   datadir = "/usr/local/mysql5/data"
   
   #buffer
   #key_buffer_size = 16M
   max_allowed_packet = 128M
   sort_buffer_size = 512K
   innodb_buffer_pool_size=4G
   max_connections=2048
   read_buffer_size=64M
   sort_buffer_size=8M
   
   #cache
   table_open_cache=2048
   thread_cache_size=28
   query_cache_size=64M
   
   #charset
   character-set-server = utf8mb4
   init-connect='SET NAMES utf8'
   character-set-server = utf8mb4
   
   #listen port
   bind-address="0.0.0.0"
   port=3306
   
   #connection
   max_connections=2048
   
   #thread
   innodb_thread_concurrency=16
   innodb_read_io_threads=8
   innodb_write_io_threads=8
   
   #plugins location
   plugin_dir = "/usr/local/mysql5/lib/plugin"
   
   
   #log
   log_error = "/var/log/mysql/mysql_error.log"
   general_log = 0
   general_log_file = "/var/log/mysql/mysql-query.log"
   slow_query_log = 1
   slow_query_log_file = "/var/log/mysql/mysql-slow.log"
   
   [mysqldump]
   quick
   max_allowed_packet = 128M
   
   [mysql]
   no-auto-rehash
   default-character-set=utf8
   ```

   ```mysql
   net:
       # MongoDB server listening port
       port: 27017
       bindIp: 127.0.0.1
   storage:
       # Data store directory
       dbPath: "/var/mongo/data/dbs"
       journal:
           enabled: true
   systemLog:
       # Write logs to log file
       destination: file
       path: "/var/log/mongo/mongodb.log"
       quiet: true
       logAppend: true
   ```

   

2. 服务器启动

   ```shell
   mysqld.exe --defaults-file=D:\xampp\mysql5\my.ini
   ```

   ```shell
   mongod.exe --config d:/xampp/mongodb4/conf/mongodb.conf 
   ```

3. 支持的数据类型

    MySQL支持所有标准SQL数值数据类型。 包括:3大类, 23小类.

   - 数值类型: tinyint, smallint, midiumint,  int,  bigint, float, double, decimal

   - 日期类型: date, time, datetime, timestamp, year

   - 字符串类型: char, varchar, 

   在MySQL数据库中,每种类型的字段大小是数据库本身已经定义好的.

   比如: int类型占用4个字节,也就是2的次方(4 X 8次).

   - 无符号的大小范围:  -2^31 ~ 2^31 - 1, 0~4294967296

   - 有符号的大小范围: 2^32, -2147483648~2147483647

   创建数据库表的时候,int(10)里面的10表示显示宽度,并非设置int的大小.只有设置zerofill的时候,才会在显示数值的时候填充0.

   例如:

   ```sql
   alter table user change column user_id user_id bigint(10) not null default 0 zerofill;
   ```

   MongoDB支持的类型更广泛一些.包括16种:

   | 数据类型      | 描述                                                         | 详情                                                         |
   | ------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
   | String        | 字符串                                                       | BSON - Binary JSON.编码采用UTF8.                             |
   | Integer       | 整数                                                         | 用来存储一个数值                                             |
   | Boolean       | 布尔,用于存储true/false.                                     | 用来存储一个boolean值                                        |
   | Double        | 双精度浮点数                                                 | 用来存储一个浮点数                                           |
   | Min/Max kesys | 将一个值与 BSON（二进制的 JSON）元素的最低值和最高值相对比。 |                                                              |
   | Array         | 数组                                                         | 在一个key下存储多个值                                        |
   | Timestamp     | 时间戳                                                       | 时间戳类型主要用于 MongoDB 内部使用。在大多数情况下的应用开发中，你可以使用 BSON 日期类型 |
   | Object        | 用于内嵌文档                                                 |                                                              |
   | Null          | 空值                                                         |                                                              |
   | Symbol        | 符号,类似与String                                            |                                                              |
   | Date          | 日期时间                                                     | MongoDB使用的是Javascript中的Date对象,默认是UTC时区.         |
   | ObjectID      | 对象ID,用于创建文档的ID                                      | ObjectID必须是12个字节.前4个字节存储当前服务器的时间戳,3个字节存储机器识别码,2个字节存储进程ID,3个字节是随机数.由于ObjectID自带时间戳,所以不需要为文档创建时间,可以通过ObjectID对象来获取文档创建的时间.var obj = new ObjectId('5e58abca85004e281034880c'); obj.getTimestamp(); |
   | Binary Data   | 二进制数据                                                   | 用来存储二级制数据                                           |
   | Code          | 用于存储Javascript代码                                       |                                                              |
   | RegExp        | 用于存储正则表达式                                           |                                                              |

5. 设计原则

    | MySQL                                                        | MongoDB                                               |
    | ------------------------------------------------------------ | ----------------------------------------------------- |
    | 范式1:字段值具有原子性,不能再分(所有关系型数据库系统都满足第一范式);             例如：姓名字段,其中姓和名是一个整体,如果区分姓和名那么必须设立两个独立字段; | 根据用户需求设计表结构                                |
    | 范式2:一个表必须有主键,即每行数据都能被唯一的区分; <br />备注：必须先满足第一范式; | 如果你想一起使用,合并对象到一个文档中,否则就分开设计; |
    | 范式3:一个表中不能包涵其他相关表中非关键字段的信息,即数据表不能有沉余字段; <br />备注：必须先满足第二范式; | 有限的使用重复数据(用空间换取时间)                    |
    |                                                              | 在写入文档的时候就把对象关联起来,而不是读的时候       |
    |                                                              | 为常用的用例优化对象结构                              |
    |                                                              | 在对象结构中使用复杂的聚集                            |

    

2. 语句对比

    下面的范例中,假设MySQL数据库user包含表people;MongoDB中有people集合;

| 范例                      | MySQL                                                        | MongoDB                                                      |
| ------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 显示版本号                | SELECT VERSION() from dual;                                  | db.version()                                                 |
| 创建表                    | CREATE TABLE `people` (<br/>  `id` mediumint(9) NOT NULL AUTO_INCREMENT,<br/>  `user_id` varchar(30) NOT NULL DEFAULT '' COMMENT '用户ID',<br/>  `age` tinyint(4) NOT NULL DEFAULT '0' COMMENT '年龄',<br/>  `status` char(1) NOT NULL DEFAULT '' COMMENT '状态',<br/>  PRIMARY KEY (`id`)<br/>) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4; | db.createCollection("people");                               |
| 添加字段                  | ALTER TABLE `people` <br/>ADD COLUMN `join_date` datetime(0) NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '加入时间' AFTER `status`; | db.people.insertOne( {<br/>    user_id: "abc123",<br/>    age: 55,<br/>    status: "A"<br/> } )<br/><br/>db.people.updateMany({}, {$set: {join_date: new Date()}})<br />MongoDB在集合级别上无法添加字段, 但是在文档级别通过$set添加字段; |
| 删除字段                  | alter table people drop column `join_date`;                  | alter table people<br/>drop column `join_date`;<br />集合不描述或强制执行其文档的结构；也就是说，在集合级别上没有结构上的改变。但是，在文档级别，[updateMany()](https://docs.mongodb.com/manual/reference/method/db.collection.updateMany/#db.collection.updateMany) 操作可以使用 [$unset](https://docs.mongodb.com/manual/reference/operator/update/unset/#up._S_unset) 操作符从文档中删除字段。 |
| 添加索引                  | create INDEX index_user_id on people(user_id);               | db.people.createIndex({user_id: 1})                          |
| 添加联合索引              | create INDEX index_user_id_asc_age_desc on people(user_id, age DESC); | db.people.createIndex({user_id: 1, age: -1});                |
| 显示索引                  | show INDEX from people;                                      | db.people.getIndexes();                                      |
| 插入数据                  | insert into people(user_id, age, status) VALUES('user1', 30, '1'); | db.people.insert({<br/>	user_id: 'user1',<br/>	age: 30,<br/>	status: '1'<br/>}); |
| 查询数据                  | SELECT user_id, status, age from people WHERE user_id = 'user1'; | db.people.find({user_id: 'user1'});                          |
| 多条件查询(AND)           | SELECT user_id, age, status from people WHERE `status` = 1 and age <40; | db.people.find({status: '1', age: {$lt: 40}});               |
| 多条件查询(OR)            | SELECT user_id, age, status from people <br/>WHERE status = '1' or age > 40; | db.people.find({<br/>	$or: [{age: {$gt: 40}}, {status:'1'}]<br/>}); |
| LIKE查询                  | select user_id, age, `status` from people<br/>WHERE user_id like 'user%'; | db.people.find({<br/>	user_id: {$regex: /^user/}<br/>});  |
| ORDER  BY                 | select user_id, age, `status` from people<br/>WHERE `status` = '1'<br/>ORDER BY user_id asc; | db.people.find({<br/>	status: '1'<br/>}).sort({user_id: 1}); |
| COUNT                     | select count(user_id) from people;                           | db.people.count({<br/>	user_id: {$exists: true}<br/>});   |
| DISTINCT                  | SELECT DISTINCT(status) from people;                         | db.people.distinct('status');                                |
| 分页,从第10条开始,显示5条 | SELECT user_id from people LIMIT 5 OFFSET 9;<br/>SELECT user_id from people LIMIT 9, 5; | db.people.find().limit(5).skip(9);                           |
| EXPLAIN                   | EXPLAIN SELECT user_id from people LIMIT 5 OFFSET 9;         | db.people.find().limit(5).skip(9).explain();                 |
| UPDATE                    | UPDATE people set `status` = 'C'<br/>WHERE age > 40;         | db.people.updateMany({age: {$gt: 40}},{$set: {status: 'C'}}); |
| UPDATE...INC              | update people set age = age + 1<br/>WHERE age > 40;          | db.people.updateMany({age: {$gt: 40}}, {$inc: {age: 1}});    |
| DELETE                    | DELETE FROM people WHERE status = 'c';<br />mysql不区分大小写 | db.people.deleteMany({status: 'C'});<br />mongo区分大小写    |
| 删除表/集合               | drop table people;                                           | db.people.drop();                                            |



- 运算符

  | MySQL | MongoDB |
  | ----- | ------- |
  | =     | $ne     |
  | AND   | $and    |
  | OR    | $or     |
  | >     | $gt     |
  | <     | $lt     |
  | EXIST | $exists |
  | --    | $regex  |

  



- 优势和劣势

  1. 优势

     - 不需要设计表结构.MongoDB是可以在一个Collection中存储不同结构和大小的文档.
     - 存储的数据对象结构简单清晰;
     - 没有复杂的join查询;
     - 深度查询能力;
     - 优化
     - 易于扩展
     - 不需要将应用程序对象转换/映射为数据库对象
     - 更快的访问数据

  2. 劣势

     - 4.0之前不支持复杂的事务

     -  缺少自定义查询语言 / 工具生态系统

       SQL语言作为一种查询标准,但是在Mongo这里,复杂查询变得非常痛苦. http://www.querymongo.com/ 

     - 

  MongoDB主要使用场景如下:

  1. 

- 使用场景
  
  - 
  
- 基本操作

- 高级