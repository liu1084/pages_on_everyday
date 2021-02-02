### Mysql DATE_ADD/ADDDATE的使用



### 用途

- 日期的加减
- 日期比较
- 当前月份的最后一天和第一天等

语法

- `date_add(date, INTERVAL, expr unit)`

参数说明

- date - 起始日期/时间
- expr - 间隔值
- unit - 间隔值的单位

实例

- 本月第一天

  ```sql
  -- 取上个月的当前日
  -- select SUBDATE(curdate(), INTERVAL 1 MONTH);
  -- 取上个月的最后一天
  -- select LAST_DAY(SUBDATE(curdate(), INTERVAL 1 MONTH))
  -- 上个月最后一天+1天,得到这个月的第一天日期
  select adddate(LAST_DAY(SUBDATE(curdate(), INTERVAL 1 MONTH)), INTERVAL 1 day)
  ```

- 计算明天的日期

  ```sql
  select DATE_ADD(curdate(), interval 1 day) as tommrow
  ```

- 计算7天前的日期

  ```sql
  select date_add(curdate(), interval -7 day) as yourDay
  ```

- 对某个时间加上1小时1分1秒

  ```sql
  select DATE_ADD(now(), INTERVAL '1:1:1' HOUR_SECOND)
  ```

  