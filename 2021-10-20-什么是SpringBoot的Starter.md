## 什么是SpringBoot的Starter？

和自动配置一样，Spring Boot Starter的目的也是简化配置，而Spring Boot Starter解决的是依赖管理配置复杂的问题，有了它，当我需要构建一个Web应用程序时，不必再遍历所有的依赖包，一个一个地添加到项目的依赖管理中，而是只需要一个配置`spring-boot-starter-web`, 同理，如果想引入持久化功能，可以配置`spring-boot-starter-data-jpa` 。



例如：我们要使用springboot开发一个web应用程序，只需要在pom.xml中引入：

```xml-dtd
pom.xml
<!-- Parent pom is mandatory to control versions of child dependencies -->
<parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>2.5.3.RELEASE</version>
    <relativePath />
</parent>
 
<!-- Spring web brings all required dependencies to build web application. -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>
```



需要注意：

-   我们在spring-boot-starter-web中没有提供版本号，所有需要依赖的jar包都会采用spring-boot-starter-parent的版本号，我们的例子中是2.5.3.RELEASE。
-   一些依赖包是我们直接引入的，这些依赖包会进一步应用其他的jar，他们都会被下载并引入工程中。



 所有官方的starter都以spring-boot-starter-*的规则命名，比如下面是一些官方的starter： 

| 名称                                   | 描述                                                         |
| -------------------------------------- | ------------------------------------------------------------ |
| spring-boot-starter                    | Core starter, including auto-configuration support, logging and YAML |
| spring-boot-starter-data-redis         | Starter for using Redis key-value data store with Spring Data Redis and the Lettuce client |
| spring-boot-starter-data-jpa           | Starter for using Spring Data JPA with Hibernat              |
| spring-boot-starter-data-jdbc          | Starter for using Spring Data JDBC                           |
| spring-boot-starter-data-elasticsearch | Starter for using Elasticsearch search and analytics engine and Spring Data Elasticsearch |
| spring-boot-starter-cache              | Starter for using Spring Framework’s caching support         |
| spring-boot-starter-batch              | Starter for using Spring Batch                               |
| spring-boot-starter-data-mongodb       | Starter for using MongoDB document-oriented database and Spring Data MongoDB |
| spring-boot-starter-security           | Starter for using Spring Security                            |
| spring-boot-starter-web                | Starter for building web, including RESTful, applications using Spring MVC. Uses Tomcat as the default embedded container |
| spring-boot-starter-json               | Starter for reading and writing json                         |
| 。。。。。。                           |                                                              |

除了应用Starter，Spring Boot还提供了Production环境监控的Starter：

| 名称                         | 描述                                                         |
| ---------------------------- | ------------------------------------------------------------ |
| spring-boot-starter-actuator | Starter for using Spring Boot’s Actuator which provides production ready features to help you monitor and manage your application |

Spring Boot 也包含下列的starter用于排除或替换默认的功能:

| 名称                              | 描述                                                         |
| --------------------------------- | ------------------------------------------------------------ |
| spring-boot-starter-jetty         | Starter for using Jetty as the embedded servlet container. An alternative to spring-boot- starter-tomcat |
| spring-boot-starter-log4j2        | Starter for using Log4j2 for logging. An alternative to spring-boot-starter-logging |
| spring-boot-starter-logging       | Starter for logging using Logback. Default logging starter   |
| spring-boot-starter-reactor-netty | Starter for using Reactor Netty as the embedded reactive HTTP server. |
| spring-boot-starter-tomcat        | Starter for using Tomcat as the embedded servlet container. Default servlet container starter used by spring-boot-starter-web |
| spring-boot-starter-undertow      | Starter for using Undertow as the embedded servlet container. An alternative to spring-boot- starter-tomcat |





### 如何自定义spring starter？

1.  引入依赖包

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-configuration-processor</artifactId>
    <optional>true</optional>
</dependency>
```



1.  编写配置文件

```java
import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@ConfigurationProperties(prefix = "mail")
@Configuration
@Data
public class MailProperties {
    /**
     * Mail from
     */
    private String from;
    /**
     * Mail from display name
     */
    private String fromName;
}
```



1.  添加自动配置类

```java
import com.jim.web.sms.model.*;
import com.jim.web.sms.service.IMessage;
import com.jim.web.sms.service.impl.InternalMessageImpl;
import com.jim.web.sms.service.impl.KafkaMessageImpl;
import com.jim.web.sms.service.impl.MailMessageImpl;
import com.jim.web.sms.service.impl.SmsMessageImpl;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@EnableConfigurationProperties(value = {
        SmsProperties.class,
        KafkaProperties.class,
        InternalProperties.class,
        MailProperties.class,
        SMTPProperties.class
})
@Configuration
public class MessageAutoConfiguration {
    @Bean
    public IMessage<SmsMessage, SmsReceiver> smsMessage() {
        return new SmsMessageImpl();
    }

    @Bean
    public IMessage<KafkaMessage, KafkaMessageReceiver> kafkaMessage() {
        return new KafkaMessageImpl();
    }

    @Bean
    public IMessage<MailMessage, MailReceiver> mailMessage() {
        return new MailMessageImpl();
    }

    @Bean
    public IMessage<InternalMessage, InternalMessageReceiver> internalMessage() {
        return new InternalMessageImpl();
    }
}
```



1.  让starter生效

```java
//在resources目录下新建目录：META-INF
//在新建的META-INF目录下新建spring.factories文件
//添加自动配置的全路径以下内容到文件中：
org.springframework.boot.autoconfigure.EnableAutoConfiguration=\
com.jim.web.sms.config.MessageAutoConfiguration
```



1.  打包安装部署

```shell
mvn clean package install deploy
```



1.  在另外的工程中引入starter

```xml
<dependency>
    <groupId>com.jim.web</groupId>
    <artifactId>sms-spring-boot-starter</artifactId>
    <version>release</version>
</dependency>
```

1.  在ymal或者properties中添加配置项

（略）

1.  注入bean，使用其中定义的功能和方法

（略）

