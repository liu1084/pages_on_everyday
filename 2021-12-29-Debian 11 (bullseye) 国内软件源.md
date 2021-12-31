## Debian 11 (bullseye) 国内软件源

 一般情况下，将/etc/apt/sources.list文件中Debian默认的软件仓库地址和安全更新仓库地址修改为国内的镜像地址即可，比如将deb.debian.org和security.debian.org改为mirrors.xxx.com，并使用https访问，可使用如下命令： 

```shell
sed -i "s@http://\(deb\|security\).debian.org@https://mirrors.xxx.com@g" /etc/apt/sources.list
```



国内镜像列表：

-   mirrors.aliyun.com
-   mirrors.tencent.com
-   mirrors.163.com
-   mirrors.huaweicloud.com
-   mirrors.tuna.tsinghua.edu.cn
-   mirrors.ustc.edu.cn

