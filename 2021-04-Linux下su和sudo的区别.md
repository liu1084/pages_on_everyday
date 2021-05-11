# Linux下`su`和`sudo`的区别

sudo和su两个命令, 可以通过

```shell
apt install sudo
```

进行安装.

root权限是linux系统中权限最大的用户, 而不同用户由于限制, 无法创建文件或者安装软件等操作.

1.  相同点

1.  su和sudo都是用来使用root权限去执行命令.

1.  执行su或者sudo命令之后, 系统会要求输入root的密码, 否则是无法完成切换或者要执行的命令的.



1.  不同点

-   su 切换当前用户为指定的用户, 如果不指定, 默认切换为root用户
-   sudo通常是获取root权限去执行一条指定的命令, 并且会保持root状态一段时间



在系统中, 应该使用普通账号进行登录, 后面需要执行root权限时, 使用sudo或者su, 将一个普通用户添加到sudoer中:

```shell
groupadd dev
useradd -g newuser
usermod -aG sudo newuser
```



查看用户所属的组

```shell
groups newuser
```





