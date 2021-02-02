### 使用mvn deploy将jar发布到maven私服

1. 安装maven

```shell
brew install maven
```

2. 在maven的配置文件settings.xml中设置snapshot和release服务器
```xml
<servers>
    <server>
      <id>xxx-releases</id>
      <username>admin</username>
      <password>admin123</password>
    </server>

    <server>
      <id>xxx-snapshots</id>
      <username>admin</username>
      <password>admin123</password>
    </server>
  </servers>
```

3. 设置pom.xml文件，配置distributionManagement

```xml
<distributionManagement>
    <repository>
        <id>xxx-releases</id>
        <name>g2linkReleases</name>
        <url>http://repo.xxx.xxx/nexus/content/repositories/xxx-releases/</url>
    </repository>
    <snapshotRepository>
        <id>g2link-snapshots</id>
        <name>g2linkSnapshots</name>
        <url>http://repo.xxx.xxx/nexus/content/repositories/xxx-snapshots/</url>
    </snapshotRepository>
</distributionManagement>
```

4. notes

注意：release和snapshots的名称要一致

5. 使用`mvn clean install deploy`进行部署jar包

```shell
mvn clean install deploy
```