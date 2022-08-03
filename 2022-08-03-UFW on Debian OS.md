## UFW on Debian OS

-   install

```shell
# apt update && apt install ufw -y
```

-   实现自启动

```shell
# systemctl enable ufw
Synchronizing state of ufw.service with SysV service script with /lib/systemd/systemd-sysv-install.
Executing: /lib/systemd/systemd-sysv-install enable ufw
```



-   配置

```shell
## 允许1688 22022 80 443端口，其他端口不许访问
ufw allow 1688
ufw allow 22022
ufw allow 80
ufw allow 443
```



-   查看规则

```shell
# ufw status
Status: active

To                         Action      From
--                         ------      ----
80                         ALLOW       Anywhere                  
443                        ALLOW       Anywhere                  
22022                      ALLOW       Anywhere                  
1688                       ALLOW       Anywhere                  
80 (v6)                    ALLOW       Anywhere (v6)             
443 (v6)                   ALLOW       Anywhere (v6)             
22022 (v6)                 ALLOW       Anywhere (v6)             
1688 (v6)                  ALLOW       Anywhere (v6)

```

​    

-   删除规则

```shell
# ufw status numbered
Status: active

     To                         Action      From
     --                         ------      ----
[ 1] 80                         ALLOW IN    Anywhere                  
[ 2] 443                        ALLOW IN    Anywhere                  
[ 3] 22022                      ALLOW IN    Anywhere                  
[ 4] 1688                       ALLOW IN    Anywhere                  
[ 5] 80 (v6)                    ALLOW IN    Anywhere (v6)             
[ 6] 443 (v6)                   ALLOW IN    Anywhere (v6)             
[ 7] 22022 (v6)                 ALLOW IN    Anywhere (v6)             
[ 8] 1688 (v6)                  ALLOW IN    Anywhere (v6)

# ufw delete x

# ufw delete allow <端口号>
```



​    

-   删除所有规则

```shell
# ufw reset
```

