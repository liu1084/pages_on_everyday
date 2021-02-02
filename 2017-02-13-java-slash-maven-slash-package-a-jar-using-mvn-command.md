---
layout: post
title: "java/maven/package a jar using mvn command"
date: 2017-02-13 00:50:47 +0800
comments: true
categories: 
---


* Add maven-assembly-plugin to POM.xml

```xml
<build>
  <plugins>
    <plugin>
      <artifactId>maven-assembly-plugin</artifactId>
      <configuration>
        <archive>
          <manifest>
            <mainClass>YOUR MAIN CLASS NAME @ HERE</mainClass>
          </manifest>
        </archive>
        <descriptorRefs>
          <descriptorRef>jar-with-dependencies</descriptorRef>
        </descriptorRefs>
      </configuration>
    </plugin>
  </plugins>
</build>
```

* change `YOUR MAIN CLASS NAME @ HERE` as real in your POM.xml file

* run `mvn clean compile assembly:single`

```shell
mvn clean compile assembly:single
```