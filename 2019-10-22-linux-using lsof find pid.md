linux下,使用lsof查看端口占用
```shell
lsof -iTCP:25 -nP
COMMAND PID        USER   FD   TYPE DEVICE SIZE/OFF NODE NAME
exim4   770 Debian-exim    3u  IPv4  14502      0t0  TCP 127.0.0.1:25 (LISTEN)
exim4   770 Debian-exim    4u  IPv6  14504      0t0  TCP [::1]:25 (LISTEN)


lsof -iTCP:25 -nP | grep LISTEN | awk '{print $2}'
770
770

kill -9 for `lsof -iTCP:25 -nP | grep LISTEN | awk '{print $2}'`
```



