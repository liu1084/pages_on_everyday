## Debian Dynamic resolv.conf(5) file for glibc resolver(3) generated by resolvconf

```shell
vi /etc/network/interfaces
auto lo
iface lo inet loopback

allow-hotplug enp0s3
ifce enp0s3 inet static
address 172.16.0.99
netmask 255.255.255.0
gateway 172.16.0.1
#iface enp0s3 inet dhcp
dns-nameservers 39.99.188.241 100.100.2.136 100.100.2.138
```

