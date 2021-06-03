## Debian install ntpd && 校准时间



```shell
# 显示当前服务器所在时区
cat /etc/timezone

# 如果时区不正确，修改之

# 安装ntpd
apt install ntp

# 立刻校准服务器时间
sudo service ntp stop
sudo ntpd -gq
sudo service ntp start
```

