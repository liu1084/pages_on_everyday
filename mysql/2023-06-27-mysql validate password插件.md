## mysql报错 Your password does not satisfy the current policy requirements

## 现象

```sql
SET PASSWORD FOR 'root'@'localhost' = PASSWORD('123456');
```

 ERROR 1819 (HY000): Your password does not satisfy the current policy requirements 





## 原因

原来MySQL5.6.6版本之后增加了密码强度验证插件validate_password，相关参数设置的较为严格。
使用了该插件会检查设置的密码是否符合当前设置的强度规则，若不满足则拒绝设置。影响的语句和函数有：create user,grant,set password,password(),old password。



###  validate_password介绍

在MySQL 8.0之前，MySQL使用的是validate_password插件（plugin）检测、验证账号密码强度，保障账号的安全性，而到了MySQL 8.0，引入了服务器组件（Components）这个特性，validate_password插件已用服务器组件重新实现。 



###  **检查是否安装了插件/组件** 

```sql
select * from information_schema.PLUGINS t1
where t1.PLUGIN_NAME = 'validate_password'；
```

![image-20230627121403962](Z:%5Cgithub%5Cpages_on_everyday%5Cimgs%5Cimage-20230627121403962.png)



其中，字段`LOAD_OPTION`标识插件的运行方式：

ON/OFF/FORCE/FORCE_PLUS_PERMANENT ，ON表示启用，OFF表示未启用。

如果为：FORCE_PLUS_PERMANENT ，数据库运行期间无法卸载此插件。







## 解决方法

#### 一 查看是否启用了validate_password插件或组件（8.0以上）

```sql
SHOW VARIABLES LIKE 'validate_password%';
```

如果没有，说明插件没有被启用。可以使用：

```mysql
mysql> install plugin validate_password soname 'validate_password.so';
Query OK, 0 rows affected (0.02 sec)
```



![image-20230626172800292](Z:%5Cgithub%5Cpages_on_everyday%5Cimgs%5Cimage-20230626172800292.png)



#### 二 参数说明

| **选项**                             | **默认值** | **参数描述**                                                 |
| ------------------------------------ | ---------- | ------------------------------------------------------------ |
| validate_password_check_user_name    | ON         | 设置为ON的时候表示能将密码设置成当前用户名。                 |
| validate_password_dictionary_file    |            | 用于检查密码的字典文件的路径名，默认为空                     |
| validate_password_length             | 8          | 密码的最小长度，也就是说密码长度必须大于或等于8              |
| validate_password_mixed_case_count   | 1          | 如果密码策略是中等或更强的，validate_password要求密码具有的小写和大写字符的最小数量。对于给定的这个值密码必须有那么多小写字符和那么多大写字符。 |
| validate_password_number_count       | 1          | 密码必须包含的数字个数                                       |
| validate_password_policy             | MEDIUM     | 密码强度检验等级，可以使用数值0、1、2或相应的符号值LOW、MEDIUM、STRONG来指定。0/LOW：只检查长度。1/MEDIUM：检查长度、数字、大小写、特殊字符。2/STRONG：检查长度、数字、大小写、特殊字符、字典文件。 |
| validate_password_special_char_count | 1          | 密码必须包含的特殊字符个数                                   |



#### 三 MySQL修改密码（三种方法示例） 

在更改[MySQL用户](http://www.yiibai.com/mysql/create-user.html)帐户的密码之前，应该要先考虑以下几个问题：

-   要更改密码是哪个用户帐号？
-   什么应用程序正在使用要被更改密码的用户帐户？ 如果您更改密码而不更改正在使用用户帐户的应用程序的连接字符串，则应用程序将无法连接到数据库服务器。

MySQL提供了各种可用于更改用户密码的语句，包括[UPDATE](http://www.yiibai.com/mysql/update-data.html)，`SET PASSWORD`和`GRANT USAGE`语句。 

1） 方法1：使用UPDATE语句更改MySQL用户密码 

```sql
USE mysql;

UPDATE user 
SET authentication_string = PASSWORD('newpasswd')
WHERE user = 'dbadmin' AND 
      host = 'localhost';

FLUSH PRIVILEGES;
```

![image-20230627164616693](imgs/image-20230627164616693.png)

![image-20230627164844043](imgs/image-20230627164844043.png)



```sql
# 修改密码验证安全强度（插件）

SET GLOBAL validate_password_policy=LOW;
SET GLOBAL validate_password_policy=MEDIUM;
SET GLOBAL validate_password_policy=STRONG;

SET GLOBAL validate_password_policy=0;    // For LOW
SET GLOBAL validate_password_policy=1;    // For MEDIUM
SET GLOBAL validate_password_policy=2;    // For HIGH


# 修改密码验证安全强度（组件）
SET GLOBAL validate_password.policy=LOW;
SET GLOBAL validate_password.policy=MEDIUM;
SET GLOBAL validate_password.policy=STRONG;

SET GLOBAL validate_password.policy = 0;   // For LOW
SET GLOBAL validate_password.policy = 1;   // For MEDIUM
SET GLOBAL validate_password.policy = 2;   // For HIGH
```





2）方法2：使用SET PASSWORD更改密码

```sql
SET PASSWORD FOR 'dbadmin'@'localhost' = PASSWORD('newpasswd2');
```

3） 方法3：使用ALTER USER语句更改MySQL用户密码 

```sql
ALTER USER dbadmin@localhost IDENTIFIED BY 'newpasswd3';
```

