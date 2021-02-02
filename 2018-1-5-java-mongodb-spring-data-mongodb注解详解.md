### spring-data-mongodb注解详解

* @Document 将一个java类映射为mongodb的文档

```java
@Document(collection="r_users")
public class User{
    //fields & getters/setters
}
```

* @Indexed 声明该字段需要索引，建立索引可以大大的提高查询效率

```java
@Document(collection="r_users")
public class User{
    //fields & getters/setters

    @Indexed
    private String username;
}
```

* @CompoundIndex 复合索引的声明，建立复合索引可以有效的提高多字段的查询效率

* @Field 将java Bean中的字段映射为mongodb中Collection中的字段
```java
@Document(collection="r_users")
public class User{
    //fields & getters/setters

    @Indexed
    @Field("name")//java bean 中为username，到mongodb中为name
    private String username;
}
```

* @Id 文档的唯一标识，即ObjectId

* @Transient 默认情况下，所有字段都会映射到文档，用Transient标注的字段不会存储到数据库中
