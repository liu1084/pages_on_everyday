##  How To: Linux Show List Of Network Cards 

>   参考：https://www.cyberciti.biz/faq/linux-list-network-cards-command/

### 可能用到的网络命令

1.  lspci command : List all PCI devices.
2.  lshw command : Linux identify Ethernet interfaces and NIC hardware.
3.  ifconfig command: 显示网络配置，启动网卡等



### 显示硬件PCI接口

```shell
lspci | egrep -i --color 'network|ethernet'
lspci | egrep -i --color 'network|ethernet|wireless|wi-fi'
```



### 显示网卡的详细信息

```shell
apt install lshw -y
lshw -class network
```



Where,

1.  **-class network** : View all network cards on your Linux system
2.  **-short** : Display device tree showing hardware paths, very much like the output of HP-UX’s ioscan command.



### 修改IP地址

```shell
vi /etc/network/interfaces
# This file describes the network interfaces available on your system
# and how to activate them. For more information, see interfaces(5).

source /etc/network/interfaces.d/*

# The loopback network interface
auto lo
iface lo inet loopback

# The primary network interface
auto enp4s0
allow-hotplug enp4s0
iface enp4s0 inet static
address 192.168.10.99
netmask 255.255.255.0
gateway 192.168.10.1

# The second network interface
auto enp3s0
allow-hotplug enp3s0
iface enp3s0 inet static
address 192.168.10.100
netmask 255.255.255.0
gateway 192.168.10.1
```



### 启动网卡

```shell
ifconfig enp3s0 up
```

