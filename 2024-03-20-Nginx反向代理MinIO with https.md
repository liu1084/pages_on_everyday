## Nginx反向代理MinIO with https





![minio](C:\Users\Administrator\Desktop\minio.png)



1. 创建域名，并申请SSL key

https://freessl.cn/acme-deploy



1. 设置DNS解析服务器

![image-20240321161516141](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240321161516141.png)

1. 配置Nginx

```shell
upstream minio_server {
    least_conn;
    server xxx:9091 max_fails=3 fail_timeout=60 weight=1;
}

upstream minio_console  {
    least_conn;
    server xxx:9090 max_fails=3 fail_timeout=60 weight=1;
}

# minio API
server {
    listen                  9091 ssl http2;
    listen                  [::]:9091 ssl http2;
    server_name             oss.cinaval.com;
    client_max_body_size    200M;
    ignore_invalid_headers  off;
    proxy_buffering         off;
    proxy_request_buffering off;

    # SSL
    ssl_certificate         /etc/nginx/ssl_key/oss.cinaval.com/fullchain.cer;
    ssl_certificate_key     /etc/nginx/ssl_key/oss.cinaval.com/oss.cinaval.com.key;

    # additional config
    #include                 nginxconfig.io/general.conf;

    # security
    #include                 nginxconfig.io/security.conf;

    # logging
    access_log              /var/log/nginx/oss.cinaval.com.access.log main;
    error_log               /var/log/nginx/oss.cinaval.com.error.log warn;
    # index.html fallback
    location / {
        proxy_set_header Host $http_host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_connect_timeout 300;
        # Default is HTTP/1, keepalive is only enabled in HTTP/1.1
        proxy_http_version 1.1;
        proxy_set_header Connection "";
        chunked_transfer_encoding off;
        proxy_pass http://minio_server;
    }
}


# minio console
server {
    listen                  9090 ssl http2;
    listen                  [::]:9090 ssl http2;
    server_name             ossweb.cinaval.com;
    
    # SSL
    ssl_certificate         /etc/nginx/ssl_key/ossweb.cinaval.com/fullchain.cer;
    ssl_certificate_key     /etc/nginx/ssl_key/ossweb.cinaval.com/ossweb.cinaval.com.key;
    
    # additional config
    #include                 nginxconfig.io/general.conf;

    # security
    #include                 nginxconfig.io/security.conf;

    # logging
    access_log              /var/log/nginx/ossweb.cinaval.com.access.log main;
    error_log               /var/log/nginx/ossweb.cinaval.com.error.log warn;
    # index.html fallback
    location / {
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_pass http://minio_console;
    }
}
```



- 在Nginx中，将9001，9002映射到实际的服务器上

```yml
version: '3'
services:
  nginx:
    container_name: nginx
    environment:
      - TZ=Asia/Shanghai
    ports:
      - '9001:9090' # minio console
      - '9002:9091' # minio API
```



1. 开通防火墙，并做NAT

![image-20240321161738102](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240321161738102.png)

2. 测试

打开minio的console界面，申请新的key和secret

https://ossweb.cinaval.com:9001/account



使用minio client进行测试





