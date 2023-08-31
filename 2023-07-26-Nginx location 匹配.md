## 彻底弄懂 Nginx location 匹配

### `location`指令
参考 
> https://juejin.cn/post/6844903849166110733

Nginx的配置文件中如下：

```nginx
upstream ams_upstream {
    least_conn;
    server 221.226.101.14:8003 max_fails=3 fail_timeout=60 weight=1;
}

# HTTP 80
server {
    listen                  443 ssl http2;
    listen                  [::]:443 ssl http2;
    server_name             ams.cinaval.com;
    root                    /usr/share/nginx/html/ams.cinaval.com/dist;

    # SSL
    ssl_trusted_certificate /etc/nginx/ssl_key/ams.cinaval.com/ca.cer;
    ssl_certificate         /etc/nginx/ssl_key/ams.cinaval.com/ams.cinaval.com.cer;
    ssl_certificate_key     /etc/nginx/ssl_key/ams.cinaval.com/ams.cinaval.com.key;

    # additional config
    include nginxconfig.io/general.conf;

    # security
    include                 nginxconfig.io/security.conf;

    # logging
    access_log              /var/log/nginx/ams.cinaval.com.access.log main;
    error_log               /var/log/nginx/ams.cinaval.com.error.log warn;
     # index.html fallback
    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~ /api {
        proxy_pass http://ams_upstream;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}

# HTTP redirect
server {
    listen      80;
    listen      [::]:80;
    server_name ams.cinaval.com;
    #include     nginxconfig.io/letsencrypt.conf;

    location / {
        return 301 https://ams.cinaval.com$request_uri;
    }
}
```

上面的nginx配置文件中，有3个location指令。location 支持的语法 

```nginx
location [=|~|~*|^~| |...$] pattern {
	#...动作
} 
```

，乍一看还挺复杂的，来逐个看一下。

-  `=` 修饰符：要求路径完全匹配
-  `~` 修饰符：区分大小写的正则匹配
-  `~*`修饰符：不区分大小写的正则匹配
-  `^~`修饰符：以某种字符串的正则匹配
-  `...$`修饰符：以某个字符串结尾的正则匹配
-  `/`修饰符：匹配任意URL地址



### 示例

#### 示例1
```nginx
location = /abcd {
    return 703;
}
```
URL地址必须是/abcd才能匹配，


验证结果：
`http://website.com/abcd`**匹配**
`http://website.com/ABCD`**可能会匹配** ，也可以不匹配，取决于操作系统的文件系统，是否大小写敏感（case-sensitive）。windows是可以匹配的。
`http://website.com/abcd?param1&param2`**匹配**，忽略 querystring
`http://website.com/abcd/` **不匹配**，多了一个`/`
`http://website.com/abcde`**不匹配**，多了一个字母`e`

#### 示例2
```nginx
location ~ ^/abcd$ {
	return 701;
}
```
验证结果：
^/abcd$这个正则表达式表示字符串必须以/开始，以$结束，中间必须是abcd

`http://website.com/abcd`匹配（完全匹配）
`http://website.com/ABCD`不匹配，大小写敏感
`http://website.com/abcd?param1&param2`匹配
`http://website.com/abcd/`不匹配，不能匹配正则表达式
`http://website.com/abcde`不匹配，不能匹配正则表达式

#### 示例3
```nginx
location ~* ^/abcd$ {
    […]
}
```
`http://website.com/abcd`匹配 (完全匹配)
`http://website.com/ABCD`匹配 (大小写不敏感)
`http://website.com/abcd`?param1&param2匹配
`http://website.com/abcd/` 不匹配，不能匹配正则表达式
`http://website.com/abcde` 不匹配，不能匹配正则表达式

### 查找的顺序及优先级
当有多条 location 规则时，nginx 有一套比较复杂的规则，优先级如下：

- 精确匹配 =
- 前缀匹配 ^~（立刻停止后续的正则搜索）
- 按文件中顺序的正则匹配 ~或~*
- 匹配不带任何修饰的前缀匹配。

> 先精确匹配，没有则查找带有 ^~的前缀匹配，没有则进行正则匹配，最后才返回前缀匹配的结果



