## Window cmd add route and set IP Address

**run CMD as administrator **

- 设置IP地址

```shell
netsh interface ip set address name="Net2" static 192.168.20.2 255.255.255.0 192.168.20.1
```

- 查看当前网络接口和路由表

```shell
route PRINT -4 192.168*
```
接口列表
 19...04 7c 16 8a 73 c2 ......Realtek Gaming 2.5GbE Family Controller
 24...10 6f d9 72 94 c7 ......RZ608 Wi-Fi 6E 80MHz
 25...12 6f d9 72 b4 e7 ......Microsoft Wi-Fi Direct Virtual Adapter #3
 23...12 6f d9 72 a4 f7 ......Microsoft Wi-Fi Direct Virtual Adapter #4
  7...10 6f d9 72 94 c8 ......Bluetooth Device (Personal Area Network) #2
  1...........................Software Loopback Interface 1
 26...3e 15 db 48 07 7e ......Hyper-V Virtual Ethernet Adapter



```shell
route print -4 192.168.10*
===========================================================================
接口列表
 19...04 7c 16 8a 73 c2 ......Realtek Gaming 2.5GbE Family Controller
 24...10 6f d9 72 94 c7 ......RZ608 Wi-Fi 6E 80MHz
 25...12 6f d9 72 b4 e7 ......Microsoft Wi-Fi Direct Virtual Adapter #3
 23...12 6f d9 72 a4 f7 ......Microsoft Wi-Fi Direct Virtual Adapter #4
  7...10 6f d9 72 94 c8 ......Bluetooth Device (Personal Area Network) #2
  1...........................Software Loopback Interface 1
 26...3e 15 db 48 07 7e ......Hyper-V Virtual Ethernet Adapter
===========================================================================

IPv4 路由表
===========================================================================
活动路由:
网络目标        网络掩码          网关       接口   跃点数
     192.168.10.0    255.255.255.0            在链路上      192.168.10.2    258
     192.168.10.2  255.255.255.255            在链路上      192.168.10.2    258
   192.168.10.255  255.255.255.255            在链路上      192.168.10.2    258
===========================================================================
永久路由:
  网络地址          网络掩码  网关地址  跃点数
     192.168.10.0    255.255.255.0     192.168.10.1       2
===========================================================================
```



- 删除目前的路由

```shell
route delete 192.168.10.0/24
```






- 添加路由表

```shell
route -p  add 192.168.20.0/24 192.168.20.1 metric 3 if 24
route -p add 192.168.10.0/24 192.168.10.1 metric 2 if 19
```