### springboot 启动端口设定

springboot 内嵌的tomcat启动应用默认使用8080端口.

- springboot 提供下面不同的自定义方式去修改
1. 在application.properties中指定
```
server.port = 9090
```

2. 在application.yml中指定
```
server:
	port: 9090

```

3. 使用javaConfig方式
```
@Configuration
public class WebConfig implements WebServerFactoryCustomizer<TomcatServletWebServerFactory> {
	@Override
    public void customize(TomcatServletWebServerFactory factory) {
        // customize the factory here
        factory.setPort(9090);
    }
}

```
4. 使用命令行指定
```
java -jar app.jar -Dserver.port=9090
```
