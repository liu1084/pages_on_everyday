## Restore mysql/mariaDB root and password

- 修改my.cnf或者my.ini

```shell 
vi my.cnf
```

在[mysqld]下面添加：
skip-grant-tables

- 执行以下语句

```sql
flush privileges;
grant all on `proaim-trinity`.* to 'proaim'@localhost IDENTIFIED by 'proaim123+-*/';
grant all on *.* to root@localhost IDENTIFIED by '';
flush privileges;
```