### Setup Nexus3 as private maven repository

#### 参考资料
- https://help.sonatype.com/repomanager3/installation/run-as-a-service
- https://stackoverflow.com/questions/36748703/configuring-nexus-3-3-0m7-to-run-as-a-linux-service
- http://codeheaven.io/using-nexus-3-as-your-repository-part-1-maven-artifacts/

- 安装openJDK
```shell
apt install build-essential libncurses5* ncurses-devel libbison-dev
apt-get install openjdk-8*
```

- 下载 https://sonatype-download.global.ssl.fastly.net/repository/repositoryManager/3/nexus-3.15.2-01-unix.tar.gz
- 解压缩:
```shell
useradd nexus
mv nexus-3.15.2-01-unix.tar.gz /usr/local/src
tar zxvf nexus-3.15.2-01-unix.tar.gz
mkdir /usr/local/maven-server -p
mv nexus-3.15.2-01 /usr/local/maven-server/maven3
cd /usr/local/maven-server/maven3
chown nexus:nexus /usr/local/maven-server -R
```

- 设置环境变量
```shell
vi /etc/profile
## Java
export JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64
export PATH=$PATH:$JAVA_HOME/bin
export CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar

## Nexus Maven
export NEXUS_HOME=/usr/local/maven-server/nexus3
export PATH=$PATH:$NEXUS_HOME

source /etc/profile
```
- 设置运行服务的用户
```shell
vi $NEXUS_HOME/bin/nexus.rc

run_as_user="nexus"
```

- 将服务设置为自启动
```shell
ln -s $NEXUS_HOME/bin/nexus /etc/init.d/nexus
cd /etc/init.d
update-rc.d nexus defaults
service nexus start
```
