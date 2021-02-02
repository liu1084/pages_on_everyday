### EL7 下 systemct restart network.service后无法连接网络的原因



EL7下有2个网络管理服务， 一个是network.service, 一个是NetworkManager.service

如下图所示：

![image-20210129141502406](I:%5Cgithub%5Cpages_on_everyday%5Cimgs%5Cimage-20210129141502406.png)

当我们修改网络配置：vi /etc/sysconfig/network-scripts/ifcfg-eth0以后， 需要重启网络服务， 但是重启后发现服务器无法连接。



**解决方法**

-   停止nm

```
systemctl stop NetworkManager
systemctl disable NetworkManager
```



-   在网卡中添加“NM_CONTROLLED=no"

```
vi /etc/network/interfaces
## 添加网卡配置， 不接受NetworkManager的管理
NM_CONTROLLED=”no”
```

