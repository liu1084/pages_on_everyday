---
layout: post
title: "java/How to Adding SLF4J to your Maven Project"
date: 2017-07-22 00:50:57 +0800
comments: true
categories: 
---

1. SLF4J是一套简单的日志外观模式的Java API，帮助在项目部署时对接各种日志实现。LogBack在运行时使用JMX帮助修改日志配置，在生产状态下无需重启应用程序。

2. SLF4J是简单的日志外观模式框架，抽象了各种日志框架例如Logback、Log4j、Commons-logging和JDK自带的logging实现接口。它使得用户可以在部署时使用自己想要的日志框架。SLF4J是轻量级的，在性能方面几乎是零消耗的。

3. SLF4J没有替代任何日志框架，它仅仅是标准日志框架的外观模式。如果在类路径下除了SLF4J再没有任何日志框架，那么默认状态是在控制台输出日志。


4. logback-classic/log4j12/slf4j-jdk14/slf4j-simple 都是log4j的具体实现,如图所示:

![](http://i.imgur.com/U6mgS2q.png)


## add dependencies to pom.xml

```xml
<dependency>
    <groupId>org.slf4j</groupId>
    <artifactId>slf4j-api</artifactId>
    <version>1.8.0-alpha2</version>
</dependency>
```

## add one of bind libs to pom.xml

### Binding for log4j version 1.2, a widely used logging framework. You also need to place log4j.jar on your class path.
```xml
<dependency>
    <groupId>org.slf4j</groupId>
    <artifactId>slf4j-log4j12</artifactId>
    <version>1.8.0-alpha2</version>
</dependency>

<dependency>
    <groupId>log4j</groupId>
    <artifactId>log4j</artifactId>
    <version>1.2.17</version>
</dependency>
```
### Binding for java.util.logging, also referred to as JDK 1.4 logging

```xml
<dependency>
    <groupId>org.slf4j</groupId>
    <artifactId>slf4j-jdk14</artifactId>
    <version>1.8.0-alpha2</version>
</dependency>
```

### Binding for Simple implementation, which outputs all events to System.err. Only messages of level INFO and higher are printed. This binding may be useful in the context of small applications.

```xml
<dependency>
    <groupId>org.slf4j</groupId>
    <artifactId>slf4j-simple</artifactId>
    <version>1.8.0-alpha2</version>
</dependency>
```

## using logback to replace above

```xml
<dependency>
    <groupId>ch.qos.logback</groupId>
    <artifactId>logback-classic</artifactId>
    <version>1.2.3</version>
</dependency>
```

## add `logger` to your class

```java
private static final Logger log = LoggerFactory.getLogger(LoginServlet.class);
```

## config log4j.properties

```properties
 Set root logger level to DEBUG and its only appender to A1.
log4j.rootLogger=DEBUG, A1

# A1 is set to be a ConsoleAppender.
log4j.appender.A1=org.apache.log4j.ConsoleAppender

# A1 uses PatternLayout.
log4j.appender.A1.layout=org.apache.log4j.PatternLayout
log4j.appender.A1.layout.ConversionPattern=%-4r [%t] %-5p %c %x - %m%n
```

## Uing FATAL, ERROR, WARN, INFO, DEBUG to print log

```java
log.fatal(Object message);
log.fatal(Object message, Throwable t);
log.error(Object message);
log.error(Object message, Throwable t);
log.warn(Object message);
log.warn(Object message, Throwable t);
log.info(Object message);
log.info(Object message, Throwable t);
log.debug(Object message);
log.debug(Object message, Throwable t);
log.trace(Object message);
log.trace(Object message, Throwable t);
```