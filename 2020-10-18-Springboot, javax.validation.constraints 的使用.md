### Springboot, javax.validation.constraints 的使用

```java

//被注释的元素必须为null
@Null  
//被注释的元素不能为null
@NotNull  
//被注释的元素必须为true
@AssertTrue  
//被注释的元素必须为false
@AssertFalse  
//被注释的元素必须是一个数字，其值必须大于等于指定的最小值
@Min(value)  
//被注释的元素必须是一个数字，其值必须小于等于指定的最大值
@Max(value)  
//被注释的元素必须是一个数字，其值必须大于等于指定的最小值
@DecimalMin(value)  
//被注释的元素必须是一个数字，其值必须小于等于指定的最大值
@DecimalMax(value)  
//被注释的元素的大小必须在指定的范围内。
@Size(max,min) 
//被注释的元素必须是一个数字，其值必须在可接受的范围内
@Digits(integer,fraction) 
//被注释的元素必须是一个过去的日期 
@Past  
//被注释的元素必须是一个将来的日期
@Future  
//被注释的元素必须符合指定的正则表达式。
@Pattern(value) 
//被注释的元素必须是电子邮件地址
@Email 
//被注释的字符串的大小必须在指定的范围内
@Length 
//被注释的字符串必须非空
@NotEmpty  
//被注释的元素必须在合适的范围内
@Range
```

