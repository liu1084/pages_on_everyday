###  2020-10-17-How to install net-tools on Debian 



- 安装net-tools

```shell
apt update
apt install net-tools
```

- 卸载

```shell
apt remove net-tools
```

- 卸载并删除不在使用的依赖包

```shell
apt remove --auto-remove net-tools
```

- 卸载并删除配置文件, 数据文件等

```shell
apt purge net-tools
```

- 卸载并删除依赖和配置文件, 数据文件等

```shell
apt purge --auto-remove net-tools
```

