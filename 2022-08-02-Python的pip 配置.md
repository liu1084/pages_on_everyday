## Python的pip 配置

- pip的配置文件

```shell
# windows
cd %appdata%\pip
vi pip.ini

# linux & mac
cd ~/.pip
vi pip.conf
```

- pip配置全局安装源

```shell
pip3 config set global.index-url http://mirrors.aliyun.com/pypi/simple/
```

-    pip配置trusted-host

```shell
pip3 config set install.trusted-host mirrors.aliyun.com
```

