## Flink 解决 No ExecutorFactory found to execute the application

#### 问题

Flink 1.11 开始报错如下：

```javascript
Exception in thread "main" java.lang.IllegalStateException: No ExecutorFactory found to execute the application.
	at org.apache.flink.core.execution.DefaultExecutorServiceLoader.getExecutorFactory(DefaultExecutorServiceLoader.java:84)
	at org.apache.flink.streaming.api.environment.StreamExecutionEnvironment.executeAsync(StreamExecutionEnvironment.java:1801)
	at org.apache.flink.streaming.api.environment.StreamExecutionEnvironment.execute(StreamExecutionEnvironment.java:1711)
	at org.apache.flink.streaming.api.environment.LocalStreamEnvironment.execute(LocalStreamEnvironment.java:74)
	at org.apache.flink.streaming.api.environment.StreamExecutionEnvironment.execute(StreamExecutionEnvironment.java:1697)
	at com.ishansong.bigdata.SqlKafka.main(SqlKafka.java:54)
```

复制

#### 解决方式

缺少 flink-client jar 引入即可

```javascript
<dependency>
            <groupId>org.apache.flink</groupId>
            <artifactId>flink-clients_2.11</artifactId>
            <version>${flink.version}</version>
  </dependency>
```

复制

#### 原因

![img](Z:%5Cgithub%5Cpages_on_everyday%5Cimgs%5Ceku7l99l0t.png)