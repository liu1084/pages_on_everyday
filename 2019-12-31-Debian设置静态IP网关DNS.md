### Debian设置静态IP/网关/DNS

1. 修改/etc/network/interfaces
```shell
vi /etc/network/interfaces
```
2. 添加如下内容
```shell
source /etc/network/interfaces.d/*

# The loopback network interface
auto lo
iface lo inet loopback

auto enp0s3
iface enp0s3 inet static
address 192.168.100.117
netmask 255.255.255.0
geteway 192.168.100.1
dns-nameservers 192.168.100.1 8.8.8.8 4.4.4.4
```

3. 添加默认网关
```shell
route add default gw 192.168.100.1
```

