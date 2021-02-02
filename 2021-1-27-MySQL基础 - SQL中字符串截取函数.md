### SQL中字符串截取函数

**截取字符串的函数主要有: **

-   LEFT(str,len)
-   RIGHT(str,len)
-   SUBSTRING(str FROM pos FOR len)
-   SUBSTRING_INDEX(str,delim,count)



**从左边计算, 获取右侧的字符串**

- left（name,4）截取左边的4个字符
- substring(name, 5, 2) 获取name字符串, 从第五个字符开始, 截取2个字符

实例:

```sql
select LEFT("1234", 2) as "结果"
```

![image-20210127133542484](../../githubpages_on_everydayimgs/image-20210127133542484.png)

```sql

- 获取年月日
select left(current_date(), 4) as "年", substring(current_date(), 6, 2) as "月", substring(CURRENT_DATE(), 9, 2) as "日";
```

![image-20210127133501746](../../githubpages_on_everydayimgs/image-20210127133501746.png)



**从右侧计算, 获取右侧字符串 **

- right (name, 3) 从右侧算第三个字符开始, 截取右侧所有字符
- substring(name, -3, 2) 从右侧第三个字符开始, 截取右侧2个字符
- substring(name, -2) 从右侧第二个字符开始,截取右侧剩余的字符

实例:

```sql
select right("1234", 2) as "结果";
```

![image-20210127133323572](../../githubpages_on_everydayimgs/image-20210127133323572.png)

```sql
SELECT substring("123456", -2) as "结果";
```

![image-20210127133701423](../../githubpages_on_everydayimgs/image-20210127133701423.png)

```sql
SELECT substring("123456", -2, 1) as "结果";
```

![image-20210127133906484](../../githubpages_on_everydayimgs/image-20210127133906484.png)



**根据匹配项, 截取左侧字符串**

根据字符串"www.google.com.cn"中查找第一个"g", 找到之后显示找到的"g"左侧的字符串

```sql
SELECT SUBSTRING_INDEX("www.google.com.cn", 'g', 1)
```

![image-20210127140226165](../../githubpages_on_everydayimgs/image-20210127140226165.png)

**根据匹配项, 截取右侧字符 **

```sql
SELECT SUBSTRING_INDEX("www.google.com.cn", ".", -2)
```

![image-20210127140244902](../../githubpages_on_everydayimgs/image-20210127140244902.png)

**综合实例**

![image-20210127140804577](../../githubpages_on_everydayimgs/image-20210127140804577.png)

将city_name和district_name改成area_name, 并去掉"市辖区"

```sql
update pub_region t1
set t1.city_name = substring_index(t1.area_name, '市辖区', 1), t1.district_name = substring_index(t1.area_name, '市辖区', 1)
where t1.area_name like '%市辖区' and t1.`level` = 2;
```





![image-20210127141343588](../../githubpages_on_everydayimgs/image-20210127141343588.png)