## How to Install Development Tools on Debian 10/9/8

开发工具包包含了GNU GCC的编译器, c++, make和一些其他的包.

- 在debian系统中安装开发工具包

```shell
sudo apt update
sudo apt install build-essential
```



- 检查版本号

```shell
$ gcc --version

gcc (Debian 4.9.2-10+deb8u1) 4.9.2
Copyright (C) 2014 Free Software Foundation, Inc


$ make --version

GNU Make 4.0
Built for x86_64-pc-linux-gnu
Copyright (C) 1988-2013 Free Software Foundation, Inc.
```



