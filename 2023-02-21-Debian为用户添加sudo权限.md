## Debian为用户添加sudo权限

 Debian安装完成后没有sudo程序，这样用起来就很不方便，需要在使用root用户安装sudo。 

```shell
su root
apt install sudo
```

 装完sudo后，切换回自己的账户，再次执行sudo命令

![img](https://pic4.zhimg.com/80/v2-5476143cdd67914dfdb748fd19324243_1440w.webp)

命令无法执行，因为用户没有在sudoers文件中。解决方法如下：

方法1：切换回root用户执行以下命令

```shell
sudo usermod -aG sudo username
```

把上面的username换成自己的用户名，再切换到自己的用户就可以了。

方法2：切换回root用户，在/etc/sudoers.d/下面创建一个以自己的用户名命令的文件

```shell
nano /etc/sudoers.d/username
```

添加以下内容

```shell
username ALL=(ALL)ALL
```

把上面的username换成自己的用户名。Ctrl + x保存退出，切换回自己的用户就可以了。

