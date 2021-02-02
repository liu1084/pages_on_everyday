## install mysql on MAC


### install mysql from `brew`
```shell
brew search mysql ## this command will list version which are searched
brew install mysql@5.6 ## install special version 5.6
```

### init my.cnf

```shell
cd /usr/local/Cellar/mysql\@5.6/5.6.38
vi my.cnf
```

Note:if my.cnf is not exist, create and import follow content to it:

    [mysqld]
    datadir=/usr/local/Cellar/mysql@5.6/5.6.38/data
    port=3306
    bind-address=0.0.0.0
    socket=/tmp/mysql.sock
    character_set_server = utf8mb4
    lower_case_table_names=1
    default_storage_engin=InnoDB
    pid-file=/tmp/mysql.pid
    ## network
    max_allowed_packet=16M
    max_connections = 1000
    wait_timeout=60

    ## cache size
    table_open_cache = 2000
    thread_cache_size = 100
    query_cache_type = 0
    query_cache_size = 0
    max_heap_table_size = 64M
    tmp_table_size = 64M

    ## log
    log_error = mysql-error.log
    general_log = 1
    general_log_file = mysql.log

    ## innodb
    innodb_strict_mode
    innodb_buffer_pool_size = 1G
    innodb_data_file_path = ibdata1:10M:autoextend
    innodb_log_buffer_size = 16M
    innodb_log_file_size = 512M
    innodb_doublewrite = 0
    innodb_read_io_threads = 8
    innodb_write_io_threads = 8
    innodb_lock_wait_timeout = 5
    innodb_support_xa = 1
    innodb_autoinc_lock_mode = 2
    innodb_flush_log_at_trx_commit = 1
    innodb_flush_method = O_DIRECT
    innodb_file_per_table
    innodb_file_format = Barracuda
    innodb_print_all_deadlocks
    innodb_large_prefix


    ## slow query log
    slow_query_log
    slow_query_log_file = mysql-slow.log
    log_slow_admin_statements
    log_slow_slave_statements
    long_query_time = 0.1

```shell
sudo ln -s my.cnf /etc/my.cnf
```


### init db

```shell
mkdir data
bin/mysql_install_db
```

### start mysqld

```shell
bin/mysqld_safe &
```

### init root password

```shell
bin/mysqladmin -uroot -p***********
```

### test

```shell
netstat -ant | grep 3306

bin/mysql -uroot -p*********
```

if no error in data/mysql-errors.log, mysql is started successful.Enjoy it~!