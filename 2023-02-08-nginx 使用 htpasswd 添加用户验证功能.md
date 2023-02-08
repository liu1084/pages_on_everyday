 ## nginx 使用 htpasswd 添加用户验证功能 

1.  安装 htpasswd: `sudo apt-get install apache2-utils`
2.  创建用户和密码并创建验证信息文件 : `sudo htpasswd -c /etc/nginx/.htpasswd John` /etc/nginx/.htpasswd 是保存用户验证信息的文件路径.
3.  继续添加用户 : `sudo htpasswd -n Tom` 在 STDOUT 会输出user:password 格式的信息, 将其追加到上一步生成的配置文件中即可. 注意不要反复使用 -c 参数反复创建文件.
4.  编辑 ngixn 配置文件, 在需要的 Block 范围中(比如 location 或 server 等)添加验证配置:

```
    auth_basic "Restricted";
    auth_basic_user_file /etc/nginx/.htpasswd;
```

1.  保存配置并重启 nginx.
2.  以后再向用户配置文件中添加新的用户时, 不需要重启 Nginx 也可生效.

如下图所示：

![image-20230208160106966](Z:%5Cgithub%5Cpages_on_everyday%5Cimgs%5Cimage-20230208160106966.png)