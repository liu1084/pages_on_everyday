### 使用nslookup命令查看A, MX, CNAME, NS记录



```shell
root@green26-dev-89:~# nslookup 
> set type=ns
> 26green.cn
Server:         172.16.0.86
Address:        172.16.0.86#53

26green.cn      nameserver = ns1.26green.cn.
26green.cn      nameserver = ns2.26green.cn.
> set type=cname
> 26green.cn
Server:         172.16.0.86
Address:        172.16.0.86#53

*** Can't find 26green.cn: No answer
> set type=a
> 26green.cn
Server:         172.16.0.86
Address:        172.16.0.86#53


Name:   imp.26green.cn
Address: 47.98.142.132
> set type=mx
> 26green.cn
Server:         172.16.0.86
Address:        172.16.0.86#53

*** Can't find 26green.cn: No answer
> 26green.cn
Server:         172.16.0.86
Address:        172.16.0.86#53

*** Can't find 26green.cn: No answer
> exit

root@green26-dev-89:~# nslookup 
> set type=mx
> 26green.cn
Server:         172.16.0.86
Address:        172.16.0.86#53

26green.cn      mail exchanger = 20 mx2.26green.cn.
26green.cn      mail exchanger = 10 mx1.26green.cn.
26green.cn      mail exchanger = 30 mxbackup.26green.cn.
> 
> set type=a
> mx1.26green.cn
Server:         172.16.0.86
Address:        172.16.0.86#53

Name:   mx1.26green.cn
Address: 47.98.142.132

> www.26green.cn
Server:         172.16.0.86
Address:        172.16.0.86#53

Name:   www.26green.cn
Address: 47.98.142.132
```

