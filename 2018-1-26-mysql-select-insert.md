### 在开发或者测试中，从一个表复制数据到另外一张表，可以使用SELECT...INSERT组合语句

## INSERT 在前，要求table存在

```sql
INSERT INTO table1(field1, field2...) SELECT value1, value2... FROM table2
```

## SELECT 在前，要求table不存在

```sql
SELECT value1, value2 INSERT INTO table2 FROM table1;
```