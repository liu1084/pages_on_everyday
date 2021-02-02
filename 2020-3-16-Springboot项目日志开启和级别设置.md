### Springboot项目日志开启和级别设置
- Springboot使用Commons Logging作为内部日志接口，默认使用logback，但是实现方式是开放的
- 依据项目可以配置使用Java Util Logging, Log4J, Log4J2 和 Logback作为日志输出实例。

- 日志输出级别

| 级别  | 描述                                             |
| :---- | :----------------------------------------------- |
| ALL   | 所有级别，包括定制级别。                         |
| DEBUG | 指明细致的事件信息，对调试应用最有用。           |
| ERROR | 指明错误事件，但应用可能还能继续运行。           |
| FATAL | 指明非常严重的错误事件，可能会导致应用终止执行。 |
| INFO  | 指明描述信息，从粗粒度上描述了应用运行过程。     |
| OFF   | 最高级别，用于关闭日志。                         |
| TRACE | 比 DEBUG 级别的粒度更细。                        |
| WARN  | 指明潜在的有害状况。                             |

- ## 级别是如何工作的？

在一个级别为 `q` 的 logger 对象中，一个级别为 `p` 的日志请求在 p >= q 的情况下是开启的。该规则是 Log4j 的核心，它假设级别是有序的。对于标准级别，其顺序为：ALL < DEBUG < INFO < WARN < ERROR < FATAL < OFF。

下面的例子展示了如何过滤 DEBUG 和 INFO 级别的日志。改程序使用 logger 对象的 `setLevel(Level.X)` 方法设置期望的日志级别：

该例子会打印出除过 DEBUG 和 INFO 级别外的所有信息：

```java
import org.apache.Log4j.*;
 
public class LogClass {
   private static org.apache.Log4j.Logger log = Logger.getLogger(LogClass.class);
 
   public static void main(String[] args) {
      log.setLevel(Level.WARN);
 
      log.trace("Trace Message!");
      log.debug("Debug Message!");
      log.info("Info Message!");
      log.warn("Warn Message!");
      log.error("Error Message!");
      log.fatal("Fatal Message!");
   }
}
```

编译并运行 `LogClass`，会产生如下输出：



```
Warn Message!
Error Message!
Fatal Message!
```

- ## 配置Springboot使用logback作为日志输出器

| name                                            | 功能                                       | 备注               |
| :---------------------------------------------- | :----------------------------------------- | :----------------- |
| log.level                                       | 日志的根级别                               | 全局               |
| <logger name="org.apache.kafka" level="ERROR"/> | 某个包下的日志级别                         | 针对某个包下起作用 |
| appender                                        | 可以在控制台、文件或者数据库显示和存放日志 |                    |



```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration scan="true" scanPeriod="30 seconds">
    <contextName>Trinity-0.0.1</contextName>
 
    <springProperty scope="context" name="log.level" source="logging.level.root" defaultValue="INFO"/>
    <springProperty scope="context" name="log.path" source="logging.path"
                    defaultValue="/data/web_log/java/Trinity-0.0.1"/>
    <springProperty scope="context" name="log.file" source="logging.file" defaultValue="Trinity-0.0.1"/>
 
    <property name="CONSOLE_LOG_PATTERN"
              value="%date{yyyy-MM-dd HH:mm:ss} | %highlight(%-5level) | %boldYellow(%thread) | %boldGreen(%logger) | %msg%n"/>
 
    <appender name="STDOUT" class="ch.qos.logback.core.ConsoleAppender">
        <encoder charset="UTF-8">
            <pattern>%d{yyyy-MM-dd HH:mm:ss.SSS} %highlight(%-5level) %contextName [%boldYellow(%thread)]
                %green(%logger){36} - %msg%n
            </pattern>
        </encoder>
    </appender>
 
    <appender name="FILE" class="ch.qos.logback.core.rolling.RollingFileAppender">
        <file>${log.path}/${log.file}.log</file>
        <rollingPolicy class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
            <fileNamePattern>${log.path}/${log.file}.%d{yyyy-MM-dd}.log.zip</fileNamePattern>
            <maxHistory>30</maxHistory>
        </rollingPolicy>
        <encoder charset="UTF-8">
            <pattern>%d{yyyy-MM-dd HH:mm:ss.SSS} %-5level [%thread] %logger{36} [%file : %line] %msg%n
            </pattern>
        </encoder>
    </appender>
 
    <logger name="org.apache.kafka" level="ERROR"/>
    <logger name="org.apache.ibatis" level="DEBUG"/>
    <logger name="org.mybatis" level="DEBUG"/>
    <logger name="org.springframework" level="INFO"/>
    <logger name="org.apache.coyote" level="ERROR"/>
    <logger name="org.apache.catalina" level="ERROR"/>
    <logger name="org.apache.tomcat" level="ERROR"/>
    <logger name="org.springframework" level="ERROR"/>
    <logger name="org.apache.http" level="ERROR"/>
 
    <root level="${log.level}">
        <appender-ref ref="STDOUT"/>
        <appender-ref ref="FILE"/>
    </root>
 
</configuration>
```

