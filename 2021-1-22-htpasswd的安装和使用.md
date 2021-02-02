## htpasswd的安装和使用

htpasswd是linux自带的用来生成密钥的工具.

- 安装

1. debian: 

```shell
apt-get install apache2-utils
```

2. centos: 

```shell
yum install -y httpd-tools
```

- 使用

1. 创建nginx配置文件

```shell
touch /etc/nginx/sites-enabled/kibana.conf
```

2. 添加如下配置

```nginx
upstream kibana_upstream {
    least_conn;
    server 172.16.244.112:5601 max_fails=3 fail_timeout=60 weight=1;
}

server {
    listen                  15601;
    server_name             es.jim.com;

    # logging
    access_log              /var/log/nginx/es.jim.com.access.log;
    error_log               /var/log/nginx/es.jim.com.error.log warn;

    location / {
        proxy_pass http://kibana_upstream;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        auth_basic "Restricted";
        auth_basic_user_file /etc/nginx/kibana_acl/.htpasswd;
    }
}
```

3. 创建密码文件

```
touch /etc/nginx/kibana_acl/.htpasswd
```

4. 生成密码

```shell
htpasswd -2 -c /etc/nginx/kibana_acl/.htpasswd kibana

解释: 
-2 Force SHA-256 crypt() hash of the password
-c 创建一个新文件
```

5. 重新加载nginx配置

```shell
nginx -s reload
```

