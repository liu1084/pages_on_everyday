## 使用consul做spring cloud的服务注册和配置中心



| 域名                           | IP                            | 功能                                     |
| ------------------------------ | ----------------------------- | ---------------------------------------- |
| test11-web.26green.cn          | 172.16.0.11/24 192.168.0.1/24 | web                                      |
| test12-web.26green.cn          | 172.16.0.12/24 192.168.1.1/24 | web                                      |
| test13-consul.26green.cn       | 172.16.0.13/24 192.168.2.1/24 | consul                                   |
| test14-consul-slave.26green.cn | 172.16.0.14/24 192.168.3.1/24 | consul slave                             |
| test15-db-master.26green.cn    | 172.16.0.15/24 192.168.4.1/24 | mysql master,  es master,logstash,kibana |
| test16-db-slave.26green.cn     | 172.16.0.16/24 192.168.5.1/24 | mysql slave, redis slave, es slave       |
| test17-redis.26green.cn        | 172.16.0.17/24 192.168.6.1/24 | redis master                             |







-   启动redis

```shell
docker run -d \
--name redis-6380 \
-v /home/green26/docker/redis/redis.conf:/opt/bitnami/redis/mounted-etc/redis.conf \
-v /home/green26/docker/redis/data:/bitnami/redis/data \
-p 6380:6379 \
--restart always \
-e 'DISABLE_COMMANDS=FLUSHDB,FLUSHALL,CONFIG' \
-e 'REDIS_PASSWORD=green@2020' \
bitnami/redis
```



-   启动mysql

```shell
docker run -d \
--name mysql57-3307 \
-p 3307:3306 \
--net mynet \
--ip 192.168.4.10 \
-e MYSQL_ROOT_PASSWORD=green@2020 \
-e TZ='Asia/Shanghai' \
-v /home/green26/docker/mysql/data/:/var/lib/mysql/ \
-v /home/green26/docker/mysql/log/:/var/log/mysql/ \
-v /home/green26/docker/mysql/conf:/etc/mysql \
-v /home/green26/docker/mysql/mysqld/:/var/run/mysqld/ \
-e MYSQL_DEFAULTS_FILE=/etc/mysql/my.cnf \
--restart=always \
mysql:5.7.32
```

-   启动elasticsearch

```shell
docker run -d \
--name elasticsearch \
-v /home/green26/docker/es/data/data01:/usr/share/elasticsearch/data \
-p 9200:9200 \
-p 9300:9300 \
--restart always \
-e 'discovery.type=single-node' \
-e 'ES_JAVA_OPTS=-Xms512m -Xmx512m' \
elasticsearch:7.10.1
```



-   启动kibana

```shell
docker run -d \
--name kibana \
-v /home/green26/docker/kibana/config:/usr/share/kibana/config \
-p 5601:5601 \
--restart always \
kibana:7.10.1
```



-   启动logstash

```shell
docker run -d \
--name logstash \
-v /home/green26/docker/logstash/config:/usr/share/logstash/config \
-v /home/green26/docker/logstash/config/pipeline:/usr/share/logstash/pipeline \
-p 4560:4560 \
-e TZ=Asia/Shanghai \
--restart always \
logstash:7.10.1
```



-   启动consul server1  172.16.0.13 10.0.130.10

```shell
docker run -d \
--name consul \
-v /home/green26/docker/consul/data/:/consul/data/ \
--restart always \
-p 8300:8300 \
-p 8300:8300/udp \
-p 8301:8301 \
-p 8301:8301/udp \
-p 8500:8500 \
-p 8500:8500/udp \
-p 8600:8600 \
-p 8600:8600/udp \
--ip 10.0.130.10 \
consul:latest \
agent \
-server \
-bootstrap \
-node=10.0.130.10 \
-bind=0.0.0.0 \
-client=0.0.0.0

```



```shell
docker run -d \
--name consul-85 \
-v /home/green26/docker/consul/data/:/consul/data/ \
--restart always \
-p 8500:8500 \
-p 8600:8600 \
-p 8300-8302:8300-8302 \
consul:latest \
agent \
-server \
-bootstrap \
-ui \
-bind=0.0.0.0 \
-client 0.0.0.0
```





```shell
route add -net 10.0.131.0/24 gw 172.16.0.18 dev enp0s3
route add -net 10.0.132.0/24 gw 172.16.0.19 dev enp0s3
route add -net 10.0.133.0/24 gw 172.16.0.14 dev enp0s3

iptables -t nat -I PREROUTING -s 172.16.0.0/24 -d 10.0.131.0/24 -j DNAT --to 10.0.131.1
iptables -t nat -I PREROUTING -s 172.16.0.0/24 -d 10.0.132.0/24 -j DNAT --to 10.0.132.1
iptables -t nat -I PREROUTING -s 172.16.0.0/24 -d 10.0.133.0/24 -j DNAT --to 10.0.133.1

iptables -t nat -I PREROUTING -s 10.0.130.0/24 -d 10.0.131.0/24 -j DNAT --to 10.0.131.1
iptables -t nat -I PREROUTING -s 10.0.130.0/24 -d 10.0.132.0/24 -j DNAT --to 10.0.132.1
iptables -t nat -I PREROUTING -s 10.0.130.0/24 -d 10.0.133.0/24 -j DNAT --to 10.0.133.1

```



-   启动consul server2 172.16.0.18 10.0.131.10

```shell
docker run -d \
--name consul-test \
-v /home/green26/docker/consul/data/:/consul/data/ \
--restart always \
-p 8300:8300 \
-p 8300:8300/udp \
-p 8301:8301 \
-p 8301:8301/udp \
-p 8500:8500 \
-p 8500:8500/udp \
-p 8600:8600 \
-p 8600:8600/udp \
--ip 10.0.131.10 \
consul:latest \
agent \
-server \
-bootstrap-expect=3 \
-retry-join=10.0.130.10 \
-node=10.0.131.10 \
-bind=0.0.0.0 \
-client=0.0.0.0

```



```shell
route add -net 10.0.130.0/24 gw 172.16.0.13 dev enp0s3
route add -net 10.0.132.0/24 gw 172.16.0.19 dev enp0s3
route add -net 10.0.133.0/24 gw 172.16.0.14 dev enp0s3

iptables -t nat -I PREROUTING -s 172.16.0.0/24 -d 10.0.130.0/24 -j DNAT --to 10.0.130.1
iptables -t nat -I PREROUTING -s 172.16.0.0/24 -d 10.0.132.0/24 -j DNAT --to 10.0.132.1
iptables -t nat -I PREROUTING -s 172.16.0.0/24 -d 10.0.133.0/24 -j DNAT --to 10.0.133.1

iptables -t nat -I PREROUTING -s 10.0.131.0/24 -d 10.0.130.0/24 -j DNAT --to 10.0.130.1
iptables -t nat -I PREROUTING -s 10.0.131.0/24 -d 10.0.132.0/24 -j DNAT --to 10.0.132.1
iptables -t nat -I PREROUTING -s 10.0.131.0/24 -d 10.0.133.0/24 -j DNAT --to 10.0.133.1

```



-   启动consul server3 172.16.0.19 10.0.132.10

```shell
docker run -d \
--name consul-test \
-v /home/green26/docker/consul/data/:/consul/data/ \
--restart always \
-p 8300:8300 \
-p 8300:8300/udp \
-p 8301:8301 \
-p 8301:8301/udp \
-p 8500:8500 \
-p 8500:8500/udp \
-p 8600:8600 \
-p 8600:8600/udp \
--ip 10.0.132.10 \
consul:latest \
agent \
-server \
-bootstrap-expect=3 \
-retry-join=10.0.130.10 \
-node=10.0.132.10 \
-bind=0.0.0.0 \
-client=0.0.0.0
```



```shell
route add -net 10.0.130.0/24 gw 172.16.0.13 dev enp0s3
route add -net 10.0.131.0/24 gw 172.16.0.18 dev enp0s3
route add -net 10.0.133.0/24 gw 172.16.0.14 dev enp0s3

iptables -t nat -I PREROUTING -s 172.16.0.0/24 -d 10.0.130.0/24 -j DNAT --to 10.0.130.1
iptables -t nat -I PREROUTING -s 172.16.0.0/24 -d 10.0.131.0/24 -j DNAT --to 10.0.131.1
iptables -t nat -I PREROUTING -s 172.16.0.0/24 -d 10.0.133.0/24 -j DNAT --to 10.0.133.1

iptables -t nat -I PREROUTING -s 10.0.132.0/24 -d 10.0.130.0/24 -j DNAT --to 10.0.130.1
iptables -t nat -I PREROUTING -s 10.0.132.0/24 -d 10.0.131.0/24 -j DNAT --to 10.0.131.1
iptables -t nat -I PREROUTING -s 10.0.132.0/24 -d 10.0.133.0/24 -j DNAT --to 10.0.133.1

```



-   启动consul slave 172.16.0.14 10.0.133.10

```shell
docker run -d \
--name consul-test \
-v /home/green26/docker/consul/data/:/consul/data/ \
--restart always \
--ip 192.168.3.10 \
-p 8300:8300 \
-p 8300:8300/udp \
-p 8301:8301 \
-p 8301:8301/udp \
-p 8500:8500 \
-p 8500:8500/udp \
-p 8600:8600 \
-p 8600:8600/udp \
consul:latest \
agent \
-bind=0.0.0.0 \
-node=10.0.133.10 \
-retry-join=10.0.130.10 \
-client=0.0.0.0 \
-ui

```



```shell
route add -net 10.0.130.0/24 gw 172.16.0.13 dev enp0s3
route add -net 10.0.131.0/24 gw 172.16.0.18 dev enp0s3
route add -net 10.0.132.0/24 gw 172.16.0.19 dev enp0s3

iptables -t nat -I PREROUTING -s 172.16.0.0/24 -d 10.0.130.0/24 -j DNAT --to 10.0.130.1
iptables -t nat -I PREROUTING -s 172.16.0.0/24 -d 10.0.131.0/24 -j DNAT --to 10.0.131.1
iptables -t nat -I PREROUTING -s 172.16.0.0/24 -d 10.0.132.0/24 -j DNAT --to 10.0.132.1

iptables -t nat -I PREROUTING -s 10.0.133.0/24 -d 10.0.130.0/24 -j DNAT --to 10.0.130.1
iptables -t nat -I PREROUTING -s 10.0.133.0/24 -d 10.0.131.0/24 -j DNAT --to 10.0.131.1
iptables -t nat -I PREROUTING -s 10.0.133.0/24 -d 10.0.132.0/24 -j DNAT --to 10.0.132.1
```



-   启动elastic-apm

```shell
# apm-server
docker run -d \
--name apm-server \
--net mynet \
-e TZ=Asia/Shanghai \
--restart always \
-v /home/green26/docker/apm-server/data:/usr/share/apm-server/data \
-v /home/green26/docker/apm-server/logs:/usr/share/apm-server/logs \
-v /home/green26/docker/apm-server/config/apm-server.yml:/usr/share/apm-server/apm-server.yml:ro \
-p 8200:8200 \
store/elastic/apm-server:7.10.1
```



-   启动influxdb

```shell
docker run -d \
-p 8086:8086 \
-v /home/green26/docker/influxdb/data:/var/lib/influxdb2 \
-v /home/green26/docker/influxdb/conf:/etc/influxdb2 \
-e DOCKER_INFLUXDB_INIT_MODE=setup \
-e DOCKER_INFLUXDB_INIT_USERNAME=green26 \
-e DOCKER_INFLUXDB_INIT_PASSWORD=green@2020 \
-e DOCKER_INFLUXDB_INIT_ORG=green26.cn \
-e DOCKER_INFLUXDB_INIT_BUCKET=iot-bucket \
-e DOCKER_INFLUXDB_INIT_RETENTION=1w \
--restart always \
influxdb:1.8.5
```

-   启动mongodb

```shell
# mongodb
docker run -d \
--name mongodb \
-p 27017:27017 \
--restart always \
-e 'MONGO_INITDB_ROOT_USERNAME=green26' \
-e 'MONGO_INITDB_ROOT_PASSWORD=green@2020' \
-v /home/green26/docker/mongodb/data/:/data/db \
-v /home/green26/docker/mongodb/conf/mongod.conf:/etc/mongodb/mongod.conf:ro \
-v /home/green26/docker/mongodb/log/:/var/log/mongodb/ \
mongo \
mongod --config /etc/mongodb/mongod.conf
```



