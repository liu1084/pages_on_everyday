### 消除windows 下编辑过的文本文件在linux下显示为^M(CTRL + M)符合



#### 原因

- 造成的原因是因为windows系统下的回车(CR+LF),而Unix下为(LF)

#### 解决方法

1. 安装dos2unix

```shell
CentOS, Fedora or RHEL:
$ sudo yum install dos2unix

Ubuntu or Debian
$ sudo apt-get install tofrodos
$ sudo ln -s /usr/bin/fromdos /usr/bin/dos2unix

copy www.26green.cn.conf www.26green.cn.conf.bak
dos2unix -od www.26green.cn.conf www.26green.cn.conf
```

2. 使用sed

```shell
sed -e "s/\r//g" file > newfile
```

