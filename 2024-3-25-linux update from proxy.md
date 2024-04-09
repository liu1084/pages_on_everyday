## linux update from proxy

```shell
route add default gw 192.168.11.4 eno3

export http_proxy=http://192.168.11.2:7890
export https_proxy=http://192.168.11.2:7890
```



