### Nginx配置跨域CORS

```nginx
        #设置跨域配置 Start
        set $cors_origin "";
        if ($http_origin ~* "^(https?://(?:.+\.)?xxx\.cn(?::\d{1,5})?)$"){
                set $cors_origin $http_origin;
        }

        add_header Access-Control-Allow-Origin $cors_origin always; 
        add_header Access-Control-Allow-Methods GET,POST,PUT,DELETE,OPTIONS always;
        add_header Access-Control-Allow-Credentials true always;
        add_header Access-Control-Allow-Headers DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization,x-auth-token always;
        add_header Access-Control-Max-Age 1728000 always;

        # 预检请求处理
        if ($request_method = OPTIONS) {
                return 204;
        }
        # #设置跨域配置 End
```

