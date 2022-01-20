## debian setup locale (Can't set locale; make sure $LC_* and $LANG are correct!)



-   安装所有的语言包

```shell
dpkg-reconfigure locales
```



-   设置环境变量

```shell
echo "LC_ALL=en_US.UTF-8" >> /etc/environment
echo "en_US.UTF-8 UTF-8" >> /etc/locale.gen
echo "LANG=en_US.UTF-8" > /etc/locale.conf
locale-gen en_US.UTF-8
```

