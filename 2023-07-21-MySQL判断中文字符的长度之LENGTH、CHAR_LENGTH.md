## MySQL判断中文字符的长度之LENGTH、CHAR_LENGTH

```sql
drop table if exists test_char;
create table if not exists test_char(
    name char(20) not null default '',
    title varchar(20) not null default ''
) character set utf8mb4 collate utf8mb4_bin;

insert into test_char(name, title)
values('12', 'ss'), ('中文名字', '中文');
select name, title from test_char;
select length(name), length(title),char_length(name), char_length(title)
from test_char;


+------------+-------------+-----------------+------------------+
|length(name)|length(title)|char_length(name)|char_length(title)|
+------------+-------------+-----------------+------------------+
|2           |2            |2                |2                 |
|12          |6            |4                |2                 |
+------------+-------------+-----------------+------------------+

```

:ballot_box_with_check: 现象：
中文字符使用length计算长度的时候，跟本身的字符数不符合，但是使用char_length计算是正常的。

:ballot_box_with_check: 分析原因：
:fire: 第一步：查看当前的编码
SHOW VARIABLES LIKE '%character%';
+------------------------+------------------------------------------+
|Variable_name           |Value                                     |
+------------------------+------------------------------------------+
|character_set_client    |utf8mb4                                   |
|character_set_connection|utf8mb4                                   |
|character_set_database  |utf8mb4                                   |
|character_set_filesystem|binary                                    |
|character_set_results   |utf8mb4                                   |
|character_set_server    |utf8mb4                                   |
|character_set_system    |utf8                                      |
|character_sets_dir      |D:\dev\mysql-5.7.41-winx64\share\charsets\|
+------------------------+------------------------------------------+

:fire: 第二步：由于使用了utf8mb4的编码，一个中文字符占用3个字节，一个ASCII码占用1个字节，一个moji字符例如：:monkey: ， :articulated_lorry: 占用4个字节。



>   MySQL官方手册中对于utf8mb4的解释是
>   10.9.1utf8mb4字符集 (4字节UTF-8 Unicode编)
>   该utfmb4字符集有以下特点
>
>   -   支持BMP和补充字符
>   -   每个多字节字符最多需要四个字节
>
>   utf8mb4与utf8mb3字符集形成对比，该字符集仅支持BMP字符，每个字符最多使用三个字节
>
>   -   对于BMP字符，utf8mb4并且utf8m3具有相同的存储特征:相同的代码值，相同的编码，相同的长度。
>   -   对于补充字符，utf8mb4 需要四个字节来存储它，而utf8mb3根本不能储该字符。

总结： 所以在utf8mb4下，英文占用1个字节，一般汉字占3个字节，emoji表情占4个字节。应当与varchar的字符数概念区分开，使用 `select 字段,length(字段),char_length(字段) from 表`进行测试即可。 

这与varchar类型字段每个字符占用4个字节有所不同。使用explain的ken_len可以看到。