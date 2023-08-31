## 一条命令修复在debian系统安装软件，少了很多依赖包 dependences

例如通过dpkg 安装virtualbox

```shell
dpkg -i virtualbox-xx.deb
```

系统提示需要依赖qt5等一大堆依赖包。

解决方法：

```shell
apt --fix-broken install
```

