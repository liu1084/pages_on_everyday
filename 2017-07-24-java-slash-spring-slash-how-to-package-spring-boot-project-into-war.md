---
layout: post
title: "java/spring/how to package spring-boot project into war?"
date: 2017-07-24 19:47:02 +0800
comments: true
categories: 
---


## modify pom.xml

1. war packaging
```xml
<packaging>jar</packaging>
```

to

```xml
<packaging>war</packaging>
```
2. make `tomcat` as `provided`

```xml

<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-tomcat</artifactId>
    <scope>provided</scope>
</dependency>
```

## setting up a servlet

1. add `SpringBootServletInitializer` to `Application` class

```java
@SpringBootApplication
public class Application {
 
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}

```

2. override `configure` method

```java
@SpringBootApplication
public class Application extends SpringBootServletInitializer {

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(Application.class);
    }

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}

```

## using `mvn` to pacage

```shell
mvn clean package
```

## copy file to tomcat's webapps

```shell
cp xxx.war to webapps/
```


## start tomcat and view your app

```url
http://localhost:8080/xxx/
```

https://stormpath.com/blog/tutorial-spring-boot-war-files