## SpringBoot中多语言异常处理的步骤



-    导入common包

```xml
<dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>com.cinaval.dependencies</groupId>
            <version>0.0.1-SNAPSHOT</version>
            <artifactId>cinaval-parent-dependencies</artifactId>
            <type>pom</type>
            <scope>import</scope>
        </dependency>
    </dependencies>
</dependencyManagement>
<dependency>
    <groupId>com.cinaval.common</groupId>
    <artifactId>cinaval-common</artifactId>
</dependency>
```

-   在application.yml 中添加message的位置i18n/messages和编码UTF-8

```yml
spring:
    messages:
        encoding: UTF-8
        basename: i18n/messages
```



-   在message文件夹中建立多语言静态文件：

1.  messages.properties
2.  messages_en_US.properties
3.  messages_zh_CN.properties



在以上三个文件中加入KEY和对应的错误提示。其中：

1.  KEY: 抛出的异常对应的code
2.  错误提示：中文，英文，以及默认语言（中文）

如果有占位符，在错误提示中添加{0},{1}...等占位符

-   设置Locale和MessageSource

```java
@Configuration
public class LocaleConfig {

    @Value("${spring.messages.basename}")
    private String i18nFile;

    @Value("${spring.messages.encoding}")
    private String i18nEncoding;

    @Bean
    public LocaleResolver localeResolver() {
        // 使用"Accept-Language”头来解析LocaleResolver
        AcceptHeaderLocaleResolver localeResolver = new AcceptHeaderLocaleResolver();
        // 从系统中获取本地化信息
        localeResolver.setDefaultLocale(Locale.getDefault());
        return localeResolver;
    }

    /**
     * 定义MessageSource
     * 如果不写某个bean，会使用默认的，会从配置文件中加载信息。如果声明了某个bean，所有的配置信息都需要重写
     *
     * @return
     */
    @Bean
    public MessageSource messageSource() {
        ReloadableResourceBundleMessageSource messageSource = new ReloadableResourceBundleMessageSource();
        messageSource.setBasenames("classpath:" + i18nFile);
        messageSource.setDefaultEncoding(i18nEncoding);
        return messageSource;
    }
}
```



-   导入ResponseHandler.class

```java
@Import(value = {com.cinaval.common.response.ResponseHandler.class})
public class CrassDybbukApplication implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(CrassDybbukApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {

    }
}
```



-   快乐的抛出异常

在try...catch中抓到RunTimeException或者Exception等异常，抛出GreException，例如：

```java
boolean patternResult = CHINESE_PATTERN.matcher(chinese).matches();
if (!patternResult) {
    String [] args = {chinese};
    throw new GreException(NOT_CHINESE, args);
}
```

此时：GreException异常会被ResponseHandler统一处理，并返回正确的异常信息。