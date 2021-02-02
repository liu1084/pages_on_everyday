---
layout: post
title: "java/maven/config profile to make diff enviraments for package"
date: 2017-05-14 03:08:13 +0800
comments: true
categories: 
---

## open your POM.xml

```xml
    <profiles>
        <profile>
            <id>dev</id>
            <activation>
                <activeByDefault>true</activeByDefault>
            </activation>
            <properties>
                <profiles.active>dev</profiles.active>
            </properties>
        </profile>

        <profile>
            <id>test</id>
            <properties>
                <profiles.active>test</profiles.active>
            </properties>
        </profile>

        <profile>
            <id>pro</id>
            <properties>
                <profiles.active>pro</profiles.active>
            </properties>
        </profile>
    </profiles>

    <build>
        <resources>
            <resource>
                <directory>src/main/resources</directory>
                <excludes>
                    <exclude>dev/*</exclude>
                    <exclude>test/*</exclude>
                    <exclude>production/*</exclude>
                </excludes>
            </resource>
            <resource>
                <directory>src/main/resources/${profiles.active}</directory>
            </resource>
        </resources>

        <plugins>
            <plugin>
                <artifactId>maven-surefire-plugin</artifactId>
                <groupId>org.apache.maven.plugins</groupId>
                <version>2.20</version>
                <configuration>
                    <parallel>methods</parallel>
                    <threadCount>10</threadCount>
                </configuration>
            </plugin>
            <plugin>
                <artifactId>maven-surefire-report-plugin</artifactId>
                <groupId>org.apache.maven.plugins</groupId>
                <version>2.20</version>
                <configuration>
                    <showSuccess>false</showSuccess>
                </configuration>
            </plugin>
        </plugins>
    </build>
```