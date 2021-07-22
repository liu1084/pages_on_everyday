### Apache Kafka简介及其使用场景

-   什么是Kafka

1.  Kafka® 用于构建实时的数据管道和流式的app.

2.  它可以水平扩展，高可用，速度快，并且已经运行在数千家公司的生产环境。

3.  Kafka是用Java和Scale编写的, 最受欢迎的发布-订阅模型, 由LinkedIn开发, 目前已经开源.

-   构成

![](I:%5Cgithub%5Cpages_on_everyday%5Cimgs%5Capache-kafka-partition.png)





-   集群

![](imgs/kafka-cluster.png)



-   特性

1.  kafka支持cluster， 实现高可用
2.  高性能，每秒可以轻松处理百万的消息；
3.  在多个系统之间解耦；
4.  可伸缩性，异构系统之间实现数据交换和共享
5.  容错性：消费失败后，可以再次消费。（使用手动确认）

-   原理



-   使用场景
-   安装和部署
-   调试

```shell
### 列出所有的topic
bash-4.4# kafka-topics.sh --list --zookeeper 172.16.0.86:2181
__consumer_offsets
test
test_topic
test_topic2

### 创建新的topic
bash-4.4# kafka-topics.sh --create --topic test.topic5 --partitions 2 --replication-factor 1  --zookeeper 172.16.0.86:2181


kafka-topics.sh --create --topic topic.im.message --partitions 2 --replication-factor 1  --zookeeper 172.16.0.88:2181

### 在test_topic2中发送一条用：隔开的key/value消息
bash-4.4# kafka-console-producer.sh --broker-list 172.16.0.86:9092 --topic test_topic2 --property "key.separator=:" --property "parse.key=true"
>name:testName
>^C

### 查看test_topic2中所有消息
kafka-console-consumer.sh --topic test_topic2 --partition 0 --offset earliest --bootstrap-server 172.16.0.86:9092
123454
testName
value1

### 查看test_topic2中最新消息
kafka-console-consumer.sh --topic test_topic2 --partition 0 --offset latest --bootstrap-server 172.16.0.86:9092


```



-   使用实例