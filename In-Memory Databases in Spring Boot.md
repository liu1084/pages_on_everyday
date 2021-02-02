## **In-Memory Databases in Spring Boot**

Spring Boot makes it especially easy to use an in-memory database – because it can create the configuration automatically for *H2*, *HSQLDB,* and *Derby*.

All we need to do to use a database of one of the three types in Spring Boot is add its dependency to the *pom.xml*. When the framework encounters the dependency on the classpath, it will configure the database automatically.



springboot中, 内存型数据库只要引用依赖即可自动配置,不需要进行配置, 一般用于测试和开发过程中非常方便.

### What is Apache Derby?

Apache Derby, an Apache DB subproject, is an open source relational database implemented entirely in Java and available under the Apache License, Version 2.0. Some key advantages include:

- *Derby* has a small footprint -- about 3.5 megabytes for the base engine and embedded JDBC driver.
- *Derby* is based on the Java, JDBC, and SQL standards.
- *Derby* provides an embedded JDBC driver that lets you embed Derby in any Java-based solution.
- *Derby* also supports the more familiar client/server mode with the Derby Network Client JDBC driver and Derby Network Server.
- *Derby* is easy to install, deploy, and use.

Official website - https://db.apache.org/derby/

[Spring Boot](http://www.javaguides.net/p/spring-boot-tutorial.html) has very good integration for *Derby*. It's very easy to use Derby database in spring boot applications by just adding the *Derby* dependency in your pom.xml file:

```
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>

<dependency>
    <groupId>org.apache.derby</groupId>
    <artifactId>derby</artifactId>
    <scope>runtime</scope>
</dependency>
```

Notice that you need not provide any connection URLs. You need only include a build dependency on the embedded database that you want to use.

That's all about spring boot embedded database support.

## HSQL

### What is HSQLDB?

**HSQLDB (HyperSQL DataBase)** is the leading *SQL* relational database software written in Java. It offers a small, fast multithreaded and transactional database engine with in-memory and disk-based tables and supports embedded and server modes. It includes a powerful command line *SQL* tool and simple GUI query tools.

Official website - http://hsqldb.org/

[Spring Boot](http://www.javaguides.net/p/spring-boot-tutorial.html) has very good integration for *HSQLDB*. It's very easy to use *HSQLDB* database in spring boot applications by just adding the *HSQLDB* dependency in your *pom.xml* file:

```
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>
<dependency>
    <groupId>org.hsqldb</groupId>
    <artifactId>hsqldb</artifactId>
    <scope>runtime</scope>
</dependency>
```

Notice that you need not provide any connection URLs. You need only include a build dependency on the embedded database that you want to use.



[Spring Boot](http://www.javaguides.net/p/spring-boot-tutorial.html) has very good integration for *H2*. It's very easy to use *H2* database in spring boot applications by just adding the h2 dependency in your pom.xml file:

```
<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-data-jpa</artifactId>
    </dependency>
    <dependency>
        <groupId>com.h2database</groupId>
        <artifactId>h2</artifactId>
    </dependency>
</dependencies>
```

Notice that you need not provide any connection URLs. You need only include a build dependency on the embedded database that you want to use.

The *H2* database provides a browser-based console that Spring Boot can auto-configure for you. The console is auto-configured when the following conditions are met:

- You are developing a servlet-based web application.
- *com.h2database:h2* is on the classpath.
- You are using Spring Boot’s developer tools.

**Note:** If you are not using Spring Boot’s developer tools but would still like to make use of H2’s console, you can configure the *spring.h2.console.enabled property* with a value of **true**.

**Note:**   

By default, the console is available at */h2-console*. You can customize the console’s path by using the *spring.h2.console.path* property.

Check out sample example at https://dzone.com/articles/spring-data-jpa-with-an-embedded-database-and-spring-boot