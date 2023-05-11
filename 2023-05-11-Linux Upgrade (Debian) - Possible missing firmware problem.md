## Linux Upgrade (Debian) - Possible missing firmware problem



>   参考：https://unix.stackexchange.com/questions/682990/linux-upgrade-debian-possible-missing-firmware-problem



 during the upgrade of a debian system i got the following errors: 

```shell
W: Possible missing firmware /lib/firmware/rtl_nic/rtl8125b-2.fw for module r8169
W: Possible missing firmware /lib/firmware/rtl_nic/rtl8125a-3.fw for module r8169
W: Possible missing firmware /lib/firmware/rtl_nic/rtl8107e-2.fw for module r8169
W: Possible missing firmware /lib/firmware/rtl_nic/rtl8107e-1.fw for module r8169
W: Possible missing firmware /lib/firmware/rtl_nic/rtl8168fp-3.fw for module r8169
W: Possible missing firmware /lib/firmware/rtl_nic/rtl8168h-2.fw for module r8169
W: Possible missing firmware /lib/firmware/rtl_nic/rtl8168h-1.fw for module r8169
W: Possible missing firmware /lib/firmware/rtl_nic/rtl8168g-3.fw for module r8169
W: Possible missing firmware /lib/firmware/rtl_nic/rtl8168g-2.fw for module r8169
W: Possible missing firmware /lib/firmware/rtl_nic/rtl8106e-2.fw for module r8169
W: Possible missing firmware /lib/firmware/rtl_nic/rtl8106e-1.fw for module r8169
W: Possible missing firmware /lib/firmware/rtl_nic/rtl8411-2.fw for module r8169
W: Possible missing firmware /lib/firmware/rtl_nic/rtl8411-1.fw for module r8169
W: Possible missing firmware /lib/firmware/rtl_nic/rtl8402-1.fw for module r8169
W: Possible missing firmware /lib/firmware/rtl_nic/rtl8168f-2.fw for module r8169
W: Possible missing firmware /lib/firmware/rtl_nic/rtl8168f-1.fw for module r8169
W: Possible missing firmware /lib/firmware/rtl_nic/rtl8105e-1.fw for module r8169
W: Possible missing firmware /lib/firmware/rtl_nic/rtl8168e-3.fw for module r8169
W: Possible missing firmware /lib/firmware/rtl_nic/rtl8168e-2.fw for module r8169
W: Possible missing firmware /lib/firmware/rtl_nic/rtl8168e-1.fw for module r8169
W: Possible missing firmware /lib/firmware/rtl_nic/rtl8168d-2.fw for module r8169
W: Possible missing firmware /lib/firmware/rtl_nic/rtl8168d-1.fw for module r8169
```

 这是正常的。许多设备需要固件才能完全工作。问题是，固件是一个二进制 blob，而不是免费的（如 GNU-free）。所以 Debian 默认不分发它。

在这种情况下，您可以这样做（使用 /etc/apt/sources.list 中的非自由条目：



解决办法：

```shell
apt-get install firmware-realtek firmware-misc-nonfree
```



如果再次发生这种情况，了解包含特定文档的软件包的一种方法是在 packages.debian.org 的“搜索软件包内容”下查找它。或者，您可以访问：https://packages.debian.org/file:path，其中 path 是您要查找的文档的路径，例如 /lib/firmware/rtl_nic/rtl8125b-2.fw它将是：https://packages.debian.org/file:/lib/firmware/rtl_nic/rtl8125b-2.fw





