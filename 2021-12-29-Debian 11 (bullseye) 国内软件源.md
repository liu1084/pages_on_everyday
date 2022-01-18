## Debian 11 (bullseye) , 10()国内软件源

 一般情况下，将/etc/apt/sources.list文件中Debian默认的软件仓库地址和安全更新仓库地址修改为国内的镜像地址即可，比如将deb.debian.org和security.debian.org改为mirrors.xxx.com，并使用https访问，可使用如下命令： 

```shell
sed -i "s@http://\(deb\|security\).debian.org@https://mirrors.xxx.com@g" /etc/apt/sources.list
```



国内镜像列表：

-   mirrors.aliyun.com
-   mirrors.tencent.com
-   mirrors.163.com
-   mirrors.huaweicom
-   mirrors.tuna.tsinghua.edu.cn
-   mirrors.ustc.edu.cn

2．国内常见镜像站点



-   11

```shell
deb https://mirrors.tencent.com/debian/ bullseye main non-free contrib
deb-src https://mirrors.tencent.com/debian/ bullseye main non-free contrib
deb https://mirrors.tencent.com/debian-security/ bullseye-security main
deb-src https://mirrors.tencent.com/debian-security/ bullseye-security main
deb https://mirrors.tencent.com/debian/ bullseye-updates main non-free contrib
deb-src https://mirrors.tencent.com/debian/ bullseye-updates main non-free contrib
deb https://mirrors.tencent.com/debian/ bullseye-backports main non-free contrib
deb-src https://mirrors.tencent.com/debian/ bullseye-backports main non-free contrib
```

-   10

```shell
deb http://mirrors.aliyun.com/debian/ buster main non-free contrib
deb http://mirrors.aliyun.com/debian-security buster/updates main
deb http://mirrors.aliyun.com/debian/ buster-updates main non-free contrib
deb http://mirrors.aliyun.com/debian/ buster-backports main non-free contrib

deb-src http://mirrors.aliyun.com/debian-security buster/updates main
deb-src http://mirrors.aliyun.com/debian/ buster main non-free contrib
deb-src http://mirrors.aliyun.com/debian/ buster-updates main non-free contrib
deb-src http://mirrors.aliyun.com/debian/ buster-backports main non-free contrib
```

-   9

```shell
deb http://mirrors.aliyun.com/debian/ stretch main non-free contrib
deb-src http://mirrors.aliyun.com/debian/ stretch main non-free contrib
deb http://mirrors.aliyun.com/debian-security stretch/updates main
deb-src http://mirrors.aliyun.com/debian-security stretch/updates main
deb http://mirrors.aliyun.com/debian/ stretch-updates main non-free contrib
deb-src http://mirrors.aliyun.com/debian/ stretch-updates main non-free contrib
deb http://mirrors.aliyun.com/debian/ stretch-backports main non-free contrib
deb-src http://mirrors.aliyun.com/debian/ stretch-backports main non-free contrib
```

