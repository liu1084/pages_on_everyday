---
layout: post
title: "java/maven/package a jar with dependencies using maven"
date: 2017-09-25 09:56:44 +0800
comments: true
categories: 
---

### maven package

Maven可以使用`mvn package`指令对项目进行打包生成jar文件，如果直接使用`java -jar xxx.jar`指令运行jar文件，会出现”no main manifest attribute, in xxx.jar”（没有设置Main-Class）、ClassNotFoundException（找不到依赖包）等错误。


### 要想jar包能直接通过java -jar xxx.jar运行，需要满足：

- 在jar包中的META-INF/MANIFEST.MF中指定Main-Class，这样才能确定程序的入口在哪里；
- 要能加载到依赖包。
使用Maven有以下几种方法可以生成满足以上两个条件能直接运行的jar包，可以根据需要选择一种合适的方法。

#### 方法1 使用maven-jar-plugin和maven-dependency-plugin插件打包

在pom.xml中配置：

```xml

<build>
    <plugins>
        <!-- maven-jar-plugin用来生成META-INF/MANIFEST.MF的内容 -->
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-jar-plugin</artifactId>
            <version>2.6</version>
            <configuration>
                <archive>
                    <manifest>
                        <addClasspath>true</addClasspath>
                        <classpathPrefix>lib/</classpathPrefix>
                        <mainClass>com.xxg.Main</mainClass>
                    </manifest>
                </archive>
            </configuration>
        </plugin>

        <!-- maven-dependency-plugin用来把依赖包拷贝到目标文件中 -->
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-dependency-plugin</artifactId>
            <version>2.10</version>
            <executions>
                <execution>
                    <id>copy-dependencies</id>
                    <phase>package</phase>
                    <goals>
                        <goal>copy-dependencies</goal>
                    </goals>
                    <configuration>
                        <outputDirectory>${project.build.directory}/lib</outputDirectory>
                    </configuration>
                </execution>
            </executions>
        </plugin>

    </plugins>
</build>
```


#### 方法2 使用maven-assembly-plugin插件打包

在pom.xml中配置：

```xml
<plugins>

    <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-assembly-plugin</artifactId>
        <version>2.5.5</version>
        <configuration>
            <archive>
                <manifest>
                    <mainClass>com.xxg.Main</mainClass>
                </manifest>
            </archive>
            <descriptorRefs>
                <descriptorRef>jar-with-dependencies</descriptorRef>
            </descriptorRefs>
        </configuration>
    </plugin>

</plugins>
```

打包方式：

```shell

mvn package assembly:single

```