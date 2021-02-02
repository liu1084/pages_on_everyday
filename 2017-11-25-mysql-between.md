## mysql的between的边界问题
mysql的sql语句中可以使用between来限定一个数据的范围，例如：

select * from user where userId between 5 and 7; 
查询userId为5、6，7的user，userId范围是包含边界值的，也等同如下查询：

select * from user where userId >= 5 and userId <= 7; 
很多地方都提到between是给定的范围是大于等第一值，小于第二个值，其实这是不对的。此前我一直也是这么认为，通过实验，结论是包含两边的边界值，如果实在拿不准，可以采用>= 、<=的方式来指定条件。

另外 not between的范围是不包含边界值。