## spring boot 配置 devtool

1. 引入spring-boot-devtools
```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-devtools</artifactId>
    <optional>true</optional>
</dependency>
```

2. 添加配置项
```xml
<build>
    <plugins>
        <plugin>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-maven-plugin</artifactId>
            <configuration>
                <fork>true</fork><!-- 如果没有该项配置，devtools不会起作用，即应用不会restart -->
            </configuration>
        </plugin>
    </plugins>
</build>
```

3. 修改idea配置项
idea->Preference->搜索“compiler”,选中“Compiler”，勾选Build project automatically
![Build project automatically](../imgs/5116829-7d315ceb0a18e105.png)

4. 修改idea的Maintenance，找到“compiler.automake.allow.when.app.running”，选中后面的复选框
![compiler.automake.allow.when.app.running](../imgs/5116829-d4ef58dee6238059.png)

5. 修改springboot工程，在application.yml中，添加
```yml
spring:
  devtools:
    livereload:
      enabled: true
    restart:
      exclude: static/**
```

6. 重新启动工程，分别修改前端代码（/static下）和java代码，看看devtools是否会重启应用。
7. 如果修改了java代码，自动重启了，大功告成。。。