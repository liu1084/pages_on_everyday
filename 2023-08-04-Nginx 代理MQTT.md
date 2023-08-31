## Nginx 代理MQTT 



mqtt使用的是emqx服务，用docker启动。

IP：192.168.10.190

```yml
version: '3'

services:
    emqx1:
        image: emqx/emqx:5.0.8
        container_name: mqtt.cinaval.com
        environment:
            - "EMQX_NODE_NAME=node1@mqtt.cinaval.com"
            - "EMQX_CLUSTER__DISCOVERY_STRATEGY=static"
            - "EMQX_CLUSTER__STATIC__SEEDS=[node1@mqtt.cinaval.com]"
        healthcheck:
            test: ["CMD", "/opt/emqx/bin/emqx_ctl", "status"]
            interval: 5s
            timeout: 25s
            retries: 5
        volumes:
            - '/home/sinoval/docker/mqtt/emqx/conf/acl.conf:/opt/emqx/etc/acl.conf'
            - '/home/sinoval/docker/mqtt/emqx/log:/opt/emqx/log'
            - /etc/timezone:/etc/timezone:ro
            - /etc/localtime:/etc/localtime:ro
        ports:
            - 1883:1883 #MQTT TCP 协议端口
            - 8883:8883 #8883 MQTT/TCP SSL 端口
            - 8884:8083 #8083 MQTT/WebSocket 端口
            - 8885:8084 #8084 MQTT/WebSocket with SSL 端口
            - 18083:18083 #18083 EMQX Dashboard 管理控制台端口
        network_mode: bridge
        restart: always
```



DNS 解析

```sql
mqtt.cinaval.com 192.168.10.190
```



Nginx配置

-   反向代理ws和wss

```nginx
cat mqtt.cinaval.com.conf
map $http_upgrade $connection_upgrade {
    default upgrade;
    '' close;
}
upstream mqtt_upstream_websocket {
    server 192.168.10.190:8884;
    keepalive 1000;
}
server {
    listen                  443 ssl http2;
    listen                  [::]:443 ssl http2;
    server_name             mqtt.cinaval.com;

    # SSL
    ssl_trusted_certificate /etc/nginx/ssl_key/mqtt.cinaval.com/ca.cer;
    ssl_certificate         /etc/nginx/ssl_key/mqtt.cinaval.com/mqtt.cinaval.com.cer;
    ssl_certificate_key     /etc/nginx/ssl_key/mqtt.cinaval.com/mqtt.cinaval.com.key;

    access_log              /var/log/nginx/mqtt.cinaval.com.access.log main;
    error_log               /var/log/nginx/mqtt.cinaval.com.error.log warn;

    location ^~ /mqtt {
      proxy_http_version 1.1;
      proxy_pass http://mqtt_upstream_websocket;
      proxy_redirect off;
      proxy_set_header Host $host;
      proxy_set_header X-Real-IP $remote_addr;
      proxy_read_timeout 3600s;
      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_set_header Upgrade $http_upgrade;
      proxy_set_header Connection $connection_upgrade;
    }
}

server {
    listen                  80;
    listen                  [::]:80;
    server_name             mqtt.cinaval.com;

    access_log              /var/log/nginx/mqtt.cinaval.com.access.log main;
    error_log               /var/log/nginx/mqtt.cinaval.com.error.log warn;

    location ^~ /mqtt {
      proxy_http_version 1.1;
      proxy_pass http://mqtt_upstream_websocket;
      proxy_redirect off;
      proxy_set_header Host $host;
      proxy_set_header X-Real-IP $remote_addr;
      proxy_read_timeout 3600s;
      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_set_header Upgrade $http_upgrade;
      proxy_set_header Connection $connection_upgrade;
    }
}
```



-   反向代理TCP

```nginx
cat nginx/nginx.conf
# 启用TCP转发
stream {
    log_format main  '$remote_addr [$time_local] '
                      '$protocol $status $bytes_sent $bytes_received '
                      '$session_time "$upstream_addr" '
                      '"$upstream_bytes_sent" "$upstream_bytes_received" "$upstream_connect_time"';
    open_log_file_cache off;
    include /etc/nginx/tcp.d/*.conf;
}
cat nginx/conf/tcp.d# cat mqtt.cinaval.com.conf

upstream mqtt_upstream_tcp {
    server 192.168.10.190:1883;
}

server {
    listen                  1883;
    listen                  [::]:1883;
    access_log              /var/log/nginx/mqtt.cinaval.com.tcp.access.log main;
    error_log               /var/log/nginx/mqtt.cinaval.com.tcp.error.log warn;
    proxy_connect_timeout 8s;
    proxy_timeout 24h;
    proxy_pass mqtt_upstream_tcp;
}
```

