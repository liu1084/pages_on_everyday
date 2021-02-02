### How to set up a static IP address on Debian 10?

-   查看当前的IP

```shell
# 查看当前的ip地址
ip addr show
```



-   编辑/etc/network/interfaces, 并添加IP地址

```shell

vi /etc/network/interfaces
iface enp0s3 inet static
address 192.168.250.99
netmask 255.255.255.0
network 192.168.1.1
broadcast 192.168.255.255
gateway 192.168.1.1
```



-   重启网络

```shell
systemctl restart network.service
```

